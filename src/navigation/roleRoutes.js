import { currentTerms, people } from '../domain/contract';
const won = (amount) => amount.toLocaleString('ko-KR') + '원';
export function resumeFor(contract, role) {
  if (contract.phase === 'negotiation' && contract.turn === role && contract.proposals.length) {
    return role === 'lender' ? 'S7c' : 'S7b';
  }
  if (contract.phase === 'negotiation' && !contract.proposals.length && role==='lender') return 'S7';
  if (contract.phase === 'signed') return role === 'lender' ? 'S15' : 'S15b';
  return 'workspace';
}
export function liveLabels(id, contract) {
  const t = currentTerms(contract);
  const prev = contract.proposals.at(-2)?.terms ?? t;
  const round = contract.proposals.length;
  const time = (iso) => iso ? new Date(iso).toLocaleTimeString('ko-KR', {hour:'2-digit', minute:'2-digit'}) : '';
  switch (id) {
    case 'S10b': return {'246:127':'갚을 돈 합계 '+won(t.amount),'246:128':t.count+'회 · 첫 상환일 '+t.due};
    case 'S7b': return {
      '226:27':'같은 문서번호로 상대가 보낸 조건을 확인해요.',
      '226:32':round+'차 제안 · 박도윤 · 내 답 차례', '226:33':'', '226:34':won(t.amount)+' · '+t.count+'회 · 첫 상환일 '+t.due,
      '226:40':round+'차 제안', '226:44':won(t.amount), '226:48':t.count===1?'만기 일시상환':t.count+'회 분할', '226:52':t.due, '226:60':'별도 설정 없음', '226:63':t.memo || '없음',
    };
    case 'S7c': return {
      '226:103':(round-1)+'차 제안 · 박도윤', '226:104':'', '226:105':won(prev.amount)+' · '+prev.due,
      '226:107':round+'차 역제안 · 이하린', '226:108':'', '226:109':t.memo || '메모 없음',
      '226:111':'직전 제안과 받은 조건', '226:115':'직전 제안', '226:116':'받은 제안',
      '226:120':won(prev.amount), '226:121':won(t.amount), '226:125':prev.count+'회','226:126':t.count+'회',
      '226:130':prev.due, '226:131':t.due,'226:139':prev.memo||'없음','226:140':t.memo||'없음',
      '226:141':'수락하면 이 조건으로 서명을 진행해요.',
    };
    case 'S15': return {
      '5:1217':contract.identifier, '5:1219':people.lender+' · '+time(contract.signed.lender),
      '5:1221':people.borrower+' · '+time(contract.signed.borrower), '5:1222':'상태','5:1223':'양쪽 모의 서명 완료',
      '5:1224':'문서 버전','5:1225':'v'+contract.versions.length,
      '5:1232':contract.channel==='remote'?'원격 연결':'대면 연결','5:1233':'한 기기에서 두 계정으로 진행한 모의 체결','5:1234':'',
      '5:1241':'이하린님에게 '+won(t.amount)+'을 모의 송금해요.','5:1242':'약정한 금액이 상환 원장에 기록돼요.',
      '5:1251':won(t.amount)+' 모의 송금','5:1253':'송금 후 상환 원장이 열려요','5:1257':'대여 실행 대기','5:1258':'모의 송금 후 두 계정에 반영돼요.','5:1260':'서명 원본',
    };
    case 'S15b': return {'224:60':won(t.amount),'224:69':'문서번호 '+contract.identifier,'224:70':won(t.amount)+' · 상환일 '+t.due,'224:66':'모의은행 220-***-118204'};
    default:return {};
  }
}
