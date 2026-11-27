import { View } from 'react-native';
import styles from './InstallmentList.styles';
import { Card, Line, money } from '../../ui/Kit';
import { ledger } from '../../domain/schedule';

export default function InstallmentList({ terms, payments=[], showPaid=false }) {
  const rows = ledger(terms, payments);
  if (!rows.length) return null;
  return <Card title={showPaid?'회차별 상환 원장':'상환표'}>
    <View style={styles.rows}>{rows.map(row => <Line key={row.number} caption={row.number+'회 · '+row.due}
      value={money(row.amount)+(showPaid ? row.remaining===0?' · 완납':row.paid?' · '+money(row.remaining)+' 남음':' · 예정' : '')}/>)}</View>
  </Card>;
}
