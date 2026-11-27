import { loanStatus } from './ContractHome';
import ReceiptList from '../repayment/ReceiptList';
import InstallmentList from '../repayment/InstallmentList';
import { Text, View } from 'react-native';
import { Button, Card, Heading, Line, money } from '../../ui/Kit';
import { balance, currentTerms, opposite, people, roleTitle } from '../../domain/contract';
import s from './AgreementWorkspace.styles';
const status={empty:'새 약속',pairing:'연결 대기',negotiation:'조건 협상',signing:'서명 중',signed:'송금 대기',repaying:'상환 중',closed:'완납',cancelled:'협상 종료'};
export default function AgreementWorkspace({ contract:c, role, open, commit, safety }) {
  const t=currentTerms(c), change=c.change, own=people[role], peer=people[opposite(role)], signState=change?.stage==='signing'?change.signed:c.signed;
  const button=(title,fn,subtle=false)=><Button key={title} title={title} onPress={fn} subtle={subtle} />;
  const options=[];
  let message='';
  if(c.phase==='empty'||c.phase==='cancelled'){
    options.push(button('차용증 쓰기',()=>open('S4')));
  }else if(c.phase==='pairing'){
    if(c.peers[role])message=peer+'님이 상대를 확인할 차례예요.';
    else if(c.channel==='remote'&&role==='lender'&&c.invited)options.push(button('상대 확인하기',()=>open('confirmPeer')));
    else options.push(button('연결 화면 열기',()=>open(c.channel==='remote'?(role==='lender'?'R1':'R2'):(role==='lender'?'S5':'S6'))));
  }else if(c.phase==='negotiation'){
    if(c.turn===role){
      if(c.proposals.length)options.push(button('이 조건으로 합의',()=>commit('agree')));
      options.push(button(c.proposals.length?'수정해서 역제안':'조건 작성하기',()=>open('editor'),!!c.proposals.length));
      options.push(button('협상 그만하기',()=>open('StopSheet'),true));
    }else message=peer+'님이 조건을 확인할 차례예요.';
  }else if(c.phase==='signing'||change?.stage==='signing'){
    if(signState[role])message='내 모의 서명을 기록했어요. '+peer+'님의 서명을 기다려요.';
    else options.push(button(change?'변경 원문 읽기':'안전 확인 후 원문 읽기',()=>change||safety?open('liveDocument'):open(role==='lender'?'S10':'S10b')));
  }else if(c.phase==='signed'){
    if(role==='lender')options.push(button('계약 금액 모의 송금',()=>commit('fund')));
    else message=peer+'님이 계약 금액을 보낼 차례예요.';
  }else if(c.phase==='repaying'){
    if(change){
      if(change.from===role)message=peer+'님이 변경안을 확인할 차례예요.';
      else options.push(button('변경안 수락',()=>commit('accept')),button('변경안 역제안',()=>open('changeEditor'),true),button('기존 약속 유지 · 거절',()=>commit('decline'),true));
    }else if(c.outside){
      if(role==='lender')options.push(button('입금 확인 · '+money(c.outside.amount),()=>commit('confirm')));
      else message=peer+'님의 외부 입금 확인을 기다려요.';
    }else{
      if(role==='lender' && loanStatus(c)==='연체')options.push(button('상환 요청 알림 보내기',()=>commit('reminder')));
      if(role==='borrower')options.push(button('앱으로 갚기',()=>open('payment')),button('따로 보낸 돈 알리기',()=>open('externalPayment'),true));
      options.push(button('약속 변경 제안',()=>open('changeEditor'),true));
    }
  }else if(c.phase==='closed'){message='모든 원금을 갚았어요. 두 사람이 같은 상환 기록을 볼 수 있어요.';options.push(button('새 차용증 쓰기',()=>open('S4'),true));}
  return <View style={s.page}><Heading step={roleTitle[role]+' · '+own} title={change?'변경 협의':c.phase==='repaying'?loanStatus(c):status[c.phase]}>{c.identifier ? peer+'님과의 약속 · '+c.identifier : '차용증을 작성하면 이곳에서 상대의 응답과 진행 단계를 확인해요.'}</Heading>
    {c.identifier!=='' && <Card title="금전 차용 약정"><Line caption="빌려주는 사람" value={people.lender}/><Line caption="빌리는 사람" value={people.borrower}/><Line caption="원금" value={money(t.amount)}/><Line caption="상환일" value={t.due}/><Line caption="약속 내용" value={t.memo || '없음'}/>{c.versions.length>0&&<Line caption="적용 중인 버전" value={'v'+c.versions.length}/>}</Card>}
    {c.proposals.length>0&&<InstallmentList terms={t} payments={c.payments} showPaid={['repaying','closed'].includes(c.phase)}/>}
    {change && <Card title="서명할 변경안"><Line caption="기존 상환일" value={t.due}/><Line caption="제안한 상환일" value={change.terms.due}/><Line caption="변경 내용" value={change.terms.memo}/></Card>}
    {(c.phase==='signing'||change?.stage==='signing')&&<Card title="두 사람의 서명">{Object.entries(people).map(([k,name])=><Line key={k} caption={name} value={signState[k]?'서명 완료':'서명 대기'}/>)}</Card>}
    {['repaying','closed'].includes(c.phase)&&<Card title="상환 원장"><Line caption="남은 원금" value={money(balance(c))}/>{c.payments.map((p,i)=><Line key={i} caption={p.method} value={money(p.amount)}/>)}</Card>}
    {c.payments.length>0&&<ReceiptList contract={c}/>}
    {message!==''&&<Text style={s.notice}>{message}</Text>}{options}
    {c.proposals.length>0&&<Card title="협상 기록">{c.proposals.map((p,i)=><Line key={i} caption={(i+1)+'차 · '+people[p.role]} value={money(p.terms.amount)+' · '+p.terms.due+' · '+p.terms.memo}/>)}</Card>}
    <Button subtle title="문서와 변경 이력" onPress={()=>open('versions')} />
  </View>;
}
