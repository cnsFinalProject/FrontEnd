import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Button, Card, Heading } from '../../ui/Kit';
import { people } from '../../domain/contract';
import AgreementText from './AgreementText';
import { originalDocument } from '../../domain/contract';
import s from './MockSignature.styles';

export default function MockSignature({ contract, role, submit, setScrollEnabled, notice }) {
  const terms = contract.change?.terms ?? contract.proposals.at(-1).terms;
  const version = contract.versions.length + 1;
  const [markBox,setMarkBox]=useState([320,140]);
  const [strokes, setStrokes] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const point = (e) => [Math.round(e.nativeEvent.locationX), Math.round(e.nativeEvent.locationY)].join(' ');
  function start(e) {
    const xy = point(e);
    setScrollEnabled(false);
    setStrokes(old=>[...old,'M '+xy]);
  }
  function draw(e) {
    const xy = point(e);
    setStrokes(old=>old.length?[...old.slice(0,-1),old.at(-1)+' L '+xy]:old);
  }
  function sign(){
    if (!strokes.some(line=>line.includes(' L '))) {notice('서명 칸에 손가락이나 마우스로 서명해 주세요.');return;}
    if (!accepted) {notice('약정 내용을 읽고 동의해 주세요.');return;}
    submit(strokes,markBox);
  }
  return <View style={s.page}>
    <Heading step={'③ 확인·서명 · '+contract.identifier+' · v'+version} title={contract.change?'변경 계약 원문':'차용 약정 원문'}>두 계정에 같은 조건이 표시돼요. 아래 서명은 로컬 시연용이에요.</Heading>
    <AgreementText document={contract.change?.draftDocument ?? contract.draftDocument ?? originalDocument(terms)}/>
    <Card title={people[role]+' 서명'}>
      <View accessibilityLabel="손글씨 서명 칸" testID="signature-pad" style={s.pad} onLayout={({nativeEvent:{layout}})=>setMarkBox([layout.width,layout.height])}
        onStartShouldSetResponder={()=>true} onMoveShouldSetResponder={()=>true}
        onResponderGrant={start} onResponderMove={draw}
        onResponderRelease={()=>setScrollEnabled(true)} onResponderTerminate={()=>setScrollEnabled(true)}>
        <View style={s.ink} pointerEvents="none"><Svg width="100%" height="100%">
          {strokes.map((d,i)=><Path key={i} d={d} fill="none" stroke="#242b5a" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"/>)}
        </Svg></View>
      </View>
      <Button subtle title="다시 쓰기" onPress={()=>setStrokes([])}/>
      <Pressable accessibilityRole="checkbox" accessibilityLabel="원문에 동의" accessibilityState={{checked:accepted}} onPress={()=>setAccepted(!accepted)} style={s.consent}>
        <Text style={s.consentText}>{accepted?'☑':'□'}　이 원문을 읽고 서명에 동의해요.</Text>
      </Pressable>
    </Card>
    <Button title="이 원문에 모의 서명" onPress={sign}/>
  </View>;
}
