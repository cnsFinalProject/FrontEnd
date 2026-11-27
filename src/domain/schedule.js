const isoDay = (date) => date.toISOString().slice(0, 10);

export function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + "T00:00:00Z");
  return Number.isFinite(+parsed) && isoDay(parsed) === value;
}

export function calendarDay(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export function monthlyDate(first, offset) {
  const date = new Date(first + "T00:00:00Z");
  const last = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + offset + 1, 0),
  );
  const sourceLast = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0),
  ).getUTCDate();
  if (date.getUTCDate() !== sourceLast)
    last.setUTCDate(Math.min(date.getUTCDate(), last.getUTCDate()));
  return isoDay(last);
}

export function makeSchedule(amount, first, count) {
  if (
    !Number.isSafeInteger(amount) ||
    !Number.isInteger(count) ||
    count < 1 ||
    count > 36 ||
    amount < count ||
    !validDate(first)
  )
    return [];
  const part = Math.floor(amount / count);
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    number: i + 1,
    due: monthlyDate(first, i),
    amount: i === count - 1 ? amount - part * i : part,
  }));
}

export function scheduleFor(terms) {
  return (
    terms.schedule ?? makeSchedule(terms.amount, terms.due, terms.count ?? 1)
  );
}

export function ledger(terms, payments) {
  const rows = scheduleFor(terms).map((row) => ({
    ...row,
    id: row.id ?? String(row.number),
    paid: 0,
  }));
  payments
    .filter((p) => !p.reversedAt)
    .forEach((payment) => {
      let available = payment.amount;
      const start = payment.installmentId
        ? rows.findIndex((r) => r.id === payment.installmentId)
        : 0;
      if (start < 0) return;
      for (let i = start; i < rows.length && available > 0; i++) {
        const paid = Math.min(rows[i].amount - rows[i].paid, available);
        rows[i].paid += paid;
        available -= paid;
      }
    });
  return rows.map((row) => ({ ...row, remaining: row.amount - row.paid }));
}

// A reschedule keeps settled installments and the original principal.
export function reschedule(terms, payments, first) {
  let index = 0;
  return ledger(terms, payments).map(({ number, due, amount, remaining }) => ({
    number,
    amount,
    due: remaining ? monthlyDate(first, index++) : due,
  }));
}
