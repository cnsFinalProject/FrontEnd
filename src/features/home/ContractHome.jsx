import { Image, Pressable, Text, View } from 'react-native';
import { balance, currentTerms, opposite, people } from '../../domain/contract';
import { calendarDay, ledger } from '../../domain/schedule';
import { Button, Card, Line, money } from '../../ui/Kit';
import s from './ContractHome.styles';

const titles = {pairing:'연결 대기', negotiation:'조건 협상', signing:'서명 중', signed:'대여 송금 대기', repaying:'상환 중', closed:'완납', cancelled:'종료'};
export function loanStatus(contract) {
  if (contract.phase === 'repaying') {
    const late = ledger(currentTerms(contract),contract.payments).find(row => row.remaining && row.due < calendarDay());
    if (late) return '연체';
    if (contract.change) return '변경 협의';
  }
  return titles[contract.phase] ?? '새 약속';
}
export default function ContractHome({ current, archived, role, mode, open, select }) {
  const contracts = [current,...archived].filter(c=>c.identifier);
  const lender = role==='lender';
  if (mode==='inbox') {
    const items = contracts.flatMap(c=>c.events.map((e,i)=>({c,e,key:c.identifier+'-'+i}))).reverse()
      .sort((a,b)=>b.e.at.localeCompare(a.e.at));
    return <View style={s.page}><Text accessibilityRole="header" style={s.title}>알림</Text>
      {items.length ? items.map(({c,e,key})=><Pressable accessibilityRole="button" onPress={()=>select(c)} key={key} style={s.row}>
        <Text style={s.rowTitle}>{people[e.role]} · {e.text}</Text>
        <Text style={s.hint}>{c.identifier}　{new Date(e.at).toLocaleString('ko-KR')}</Text>
      </Pressable>) : <Text style={s.hint}>약속을 시작하면 확인과 서명, 입금 소식이 여기에 쌓여요.</Text>}
    </View>;
  }
  const total = contracts.filter(c=>c.phase==='repaying').reduce((n,c)=>n+balance(c),0);
  return <View style={s.page}>
    <View style={s.hero}><View style={s.intro}><Text style={s.kicker}>바로바로 · {lender?'빌려주는 사람':'빌리는 사람'}</Text>
      <Text accessibilityRole="header" style={s.title}>{people[role]}님의 약속</Text>
      <Text style={s.hint}>{lender?'받을 돈':'갚을 돈'}</Text><Text style={s.total}>{money(total)}</Text></View>
      <Image accessibilityLabel="바로바로 수달 로고" source={require('../../../assets/brand/baroborrow.png')} style={s.logo}/></View>
    <View style={s.tools}><Button title="알림" subtle onPress={()=>open('inbox')}/><Button title="내 정보" subtle onPress={()=>open('myProfile')}/></View>
    <Card title="내 차용증">
      {contracts.length===0 && <Text style={s.hint}>아직 작성한 약속이 없어요.</Text>}
      {contracts.map(c=><Pressable accessibilityRole="button" key={c.identifier} onPress={()=>select(c)} style={s.row}>
        <Line caption={people[opposite(role)]+'님과의 약속'} value={loanStatus(c)}/>
        <Text style={s.hint}>{c.identifier}</Text>
        {c.proposals.length>0 && <Text style={s.rowTitle}>{c.phase==='repaying'?money(balance(c))+' 남음':money(currentTerms(c).amount)}</Text>}
      </Pressable>)}
    </Card>
    {['empty','closed','cancelled'].includes(current.phase) ? <Button title="차용증 쓰기" onPress={()=>open('S4')}/> : <Button title="진행 중인 약속 열기" onPress={()=>select(current)}/>}
  </View>;
}
