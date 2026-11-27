import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import AgreementText from './AgreementText';
import { originalDocument } from '../../domain/contract';
import InstallmentList from '../repayment/InstallmentList';
import { Text, View } from 'react-native';
import { Button, Card, Heading, Line, money } from '../../ui/Kit';
import { people } from '../../domain/contract';
import s from './ContractVersions.styles';
export default function ContractVersions({ contract, back }) {
  const [expanded,setExpanded]=useState(null);
  return <View style={s.page}><Heading step={contract.identifier || '내 약속'} title="문서와 변경 이력">두 계정에서 같은 문서번호와 버전을 확인해요.</Heading>
    {contract.versions.length === 0 && <Text style={s.note}>두 사람의 첫 서명이 끝나면 원본이 여기에 보관돼요.</Text>}
    {[...contract.versions].reverse().map((v) => <Card title={v.number === 1 ? 'v1 · 서명한 원본' : 'v'+v.number+' · 변경 계약'} key={v.number}>
      <Line caption="원금" value={money(v.terms.amount)} /><Line caption="상환일" value={v.terms.due} /><Line caption="약속 내용" value={v.terms.memo || '없음'} />
      <InstallmentList terms={v.terms}/>
      {v.number > 1 && <Line caption="직전 버전 상환일" value={contract.versions[v.number-2].terms.due} />}
      <Button subtle title={expanded===v.number?'원문 닫기':'v'+v.number+' 서명 원문 열기'} onPress={()=>setExpanded(expanded===v.number?null:v.number)}/>
      {expanded===v.number&&<View style={s.original}><AgreementText document={v.document??originalDocument(v.terms)}/>
        {Object.entries(v.signed).map(([key,stamp])=>{
          const [w,h]=v.markBoxes?.[key]??[320,140];
          return <Card key={key} title={people[key]+' 손글씨 서명'}>
            <Svg accessibilityLabel={people[key]+' 보관된 서명'} width="100%" height={110} viewBox={'0 0 '+w+' '+h}>
              {(v.marks?.[key]??[]).map((path,i)=><Path key={i} d={path} fill="none" stroke="#101B38" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"/>)}
            </Svg><Line caption="서명 시각" value={new Date(stamp).toLocaleString('ko-KR')}/>
          </Card>;
        })}</View>}
      {Object.entries(v.signed).map(([role, at]) => <Line key={role} caption={people[role]+' 모의 서명'} value={new Date(at).toLocaleString('ko-KR')} />)}
    </Card>)}
    {contract.events.length>0 && <Card title="진행 기록">{contract.events.map((e,i)=><Line key={i} caption={people[e.role]} value={e.text} />)}</Card>}
    <Button subtle title="돌아가기" onPress={back} /></View>;
}
