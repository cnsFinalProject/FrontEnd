import { View } from 'react-native';
import { Button, Card, Heading, Line } from '../../ui/Kit';
import { opposite, people } from '../../domain/contract';
import s from './ConfirmPeer.styles';

export default function ConfirmPeer({ contract, role, confirm, decline }) {
  const peer = opposite(role);
  const lender = peer === 'lender';
  return <View style={s.page}>
    <Heading step="① 연결 · 상대 확인" title="이 사람과 약속을 맺나요?">계약 상대를 확인해 주세요. 두 사람 모두 확인하면 조건을 제안할 수 있어요.</Heading>
    <Card title={people[peer]}>
      <Line caption="상대 역할" value={lender ? '빌려주는 사람' : '빌리는 사람'}/>
      <Line caption="생년월일" value={lender ? '1999.04.**' : '1999.03.**'}/>
      <Line caption="휴대폰" value={lender ? '010-****-2280' : '010-****-7730'}/>
      <Line caption="상대방의 확인" value={contract.peers[peer] ? '확인 완료' : '기다리는 중'}/>
    </Card>
    <Button title="맞아요 · 상대 확인" onPress={confirm}/>
    <Button subtle title="아니에요 · 연결 종료" onPress={decline}/>
  </View>;
}
