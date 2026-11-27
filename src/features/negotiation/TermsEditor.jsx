import { makeSchedule, reschedule } from '../../domain/schedule';
import InstallmentList from '../repayment/InstallmentList';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Field, Heading } from '../../ui/Kit';
import s from './TermsEditor.styles';
export default function TermsEditor({ terms, amendment, submit, back, payments=[] }) {
  const [amount, setAmount] = useState(String(terms.amount));
  const [due, setDue] = useState(terms.due);
  const [count,setCount] = useState(String(terms.count ?? 1));
  const [memo, setMemo] = useState(terms.memo);
  const preview={amount:Number(amount),due:due.trim(),count:Number(count)};
  const schedule=makeSchedule(preview.amount,preview.due,preview.count);
  preview.schedule=amendment&&schedule.length?reschedule(terms,payments,preview.due):schedule;
  return <View style={s.page}><Heading step={amendment ? '변경 협의' : '② 조건 편집'} title={amendment ? '약속 바꾸기' : '제안할 조건을 적어 주세요'}>{amendment ? '두 사람이 다시 서명하면 새 버전이 적용돼요.' : '상대가 원금과 상환일을 확인하고 수락하거나 역제안할 수 있어요.'}</Heading>
    <Card title="차용 조건">{!amendment && <Field label="원금 (원)" value={amount} onChangeText={setAmount} numeric />}
    {!amendment&&<Field numeric label="상환 횟수 (1~36회)" value={count} onChangeText={setCount}/>}
    <Field label="상환일 (YYYY-MM-DD)" value={due} onChangeText={setDue} /><Field label={amendment ? '변경 사유와 약속 내용' : '약속 내용'} value={memo} onChangeText={setMemo} /></Card>
    <InstallmentList terms={preview}/>
    <Button title={amendment ? '변경안 보내기' : '조건 보내기'} onPress={() => submit({ amount: /^\d+$/.test(amount) ? Number(amount) : NaN, due: due.trim(), count:/^\d+$/.test(count)?Number(count):NaN, memo: memo.trim() })} /><Button subtle title="취소" onPress={back} />
  </View>;
}
