import { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Field, Heading, Line, money } from '../../ui/Kit';
import s from './PaymentForm.styles';
export default function PaymentForm({ remaining, installment, external, pay, back }) {
  const [amount,setAmount]=useState(String(installment?.remaining ?? remaining));
  const [requestId]=useState(()=>Date.now().toString(36)+Math.random().toString(36).slice(2));
  return <View style={s.page}><Heading step="상환" title={external?'따로 보낸 돈 알리기':'앱으로 갚기'}>{external?'받은 사람이 확인하면 원장에 반영돼요.':'이 시연에서는 실제 이체 없이 두 계정의 상환 원장을 갱신해요.'}</Heading>
    <Card title="이번 상환"><Line caption="남은 원금" value={money(remaining)} /> {installment&&<Line caption={installment.number+'회차 · '+installment.due} value={money(installment.remaining)}/>}
    <Field numeric label="상환할 금액 (원)" value={amount} onChangeText={setAmount}/>{remaining>(installment?.remaining??remaining)&&<Button subtle title="남은 원금 전액 선택" onPress={()=>setAmount(String(remaining))}/>}</Card>
    <Button title={external?'입금 확인 요청':'모의 상환하기'} onPress={()=>pay(/^\d+$/.test(amount)?Number(amount):NaN,requestId)} /><Button subtle title="취소" onPress={back}/></View>;
}
