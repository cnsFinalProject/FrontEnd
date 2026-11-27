import { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Line, money } from '../../ui/Kit';
import { people } from '../../domain/contract';
import styles from './ReceiptList.styles';

export default function ReceiptList({ contract }) {
  const [selected, setSelected] = useState(null);
  return <View style={styles.list}>{contract.payments.map((payment, i) => {
    const label=(i+1)+'번째 상환 영수증';
    return <View key={i} style={styles.list}>
      <Button subtle title={selected===i?'영수증 닫기':label} onPress={()=>setSelected(selected===i?null:i)}/>
      {selected===i && <Card title={label}>
        <Line caption="문서번호" value={contract.identifier}/>
        <Line caption="보낸 사람" value={people.borrower}/><Line caption="받은 사람" value={people.lender}/>
        <Line caption="상환 금액" value={money(payment.amount)}/><Line caption="확인 방식" value={payment.method}/>
        <Line caption="기록 시각" value={new Date(payment.at).toLocaleString('ko-KR')}/>
      </Card>}
    </View>;
  })}</View>;
}
