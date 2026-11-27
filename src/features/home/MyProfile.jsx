import { View } from 'react-native';
import { Button, Card, Heading, Line } from '../../ui/Kit';
import { people, roleTitle } from '../../domain/contract';
import s from './MyProfile.styles';

export default function MyProfile({ role, profile, contract, openRecords, openContract }) {
  const lender = role === 'lender';
  return <View style={s.page}>
    <Heading step={roleTitle[role]} title="내 정보">{people[role]}님의 시연 계정이에요.</Heading>
    <Card title="본인·계좌 정보">
      <Line caption="이름" value={people[role]}/>
      <Line caption="휴대폰" value={lender?'010-****-2280':'010-****-7730'}/>
      <Line caption="연결 계좌" value={!profile.ready?'연결 전':profile.firstAccount?(lender?'한빛은행 110-***-482910':'한빛은행 220-***-118204'):'새솔저축은행 3021-**-77104'}/>
    </Card>
    <Card title="내 차용증">
      <Line caption="현재 문서번호" value={contract.identifier||'작성 전'}/>
      <Button title="약속 상세" onPress={openContract}/>
      <Button subtle title="서명 원본과 변경 이력" onPress={openRecords}/>
    </Card>
  </View>;
}
