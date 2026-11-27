import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './SendInvitation.styles';
import Graphic0 from '../../../assets/wire/067a7.svg';
import Graphic1 from '../../../assets/wire/13432.svg';
import Graphic2 from '../../../assets/wire/164ea.svg';
import Graphic3 from '../../../assets/wire/1c0fa.svg';
import Graphic4 from '../../../assets/wire/235e7.svg';
import Graphic5 from '../../../assets/wire/23866.svg';
import Graphic6 from '../../../assets/wire/24e30.svg';
import Graphic7 from '../../../assets/wire/4305f.svg';
import Graphic8 from '../../../assets/wire/5b2d0.svg';
import Graphic9 from '../../../assets/wire/5d91b.svg';
import Graphic10 from '../../../assets/wire/5ddad.svg';
import Graphic11 from '../../../assets/wire/708e3.svg';
import Graphic12 from '../../../assets/wire/7b10c.svg';
import Graphic13 from '../../../assets/wire/7fc9c.svg';
import Graphic14 from '../../../assets/wire/9199e.svg';
import Graphic15 from '../../../assets/wire/a165b.svg';
import Graphic16 from '../../../assets/wire/a6136.svg';
import Graphic17 from '../../../assets/wire/c9331.svg';
import Graphic18 from '../../../assets/wire/ce54f.svg';

export default function SendInvitation({ ui }) {
  return (
    <Frame width={390} height={1040} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art2123, ui.styles["5:2123-img"]]}><Graphic18 /></View>
      <View pointerEvents="none" style={[styles.art2125, ui.styles["5:2125-img"]]}><Graphic5 /></View>
      <View pointerEvents="none" style={[styles.art2126, ui.styles["5:2126-img"]]}><Graphic16 /></View>
      <Text numberOfLines={1} style={[styles.text2128, ui.styles["5:2128"]]}>{ui.labels["5:2128"] ?? "서명 요청 보내기"}</Text>
      <View pointerEvents="none" style={[styles.art2129, ui.styles["5:2129-img"]]}><Graphic14 /></View>
      <View pointerEvents="none" style={[styles.art2130, ui.styles["5:2130-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text2131, ui.styles["5:2131"]]}>{ui.labels["5:2131"] ?? "1 연결"}</Text>
      <View pointerEvents="none" style={[styles.art2132, ui.styles["5:2132-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text2133, ui.styles["5:2133"]]}>{ui.labels["5:2133"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.art2134, ui.styles["5:2134-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text2135, ui.styles["5:2135"]]}>{ui.labels["5:2135"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.art2136, ui.styles["5:2136-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text2137, ui.styles["5:2137"]]}>{ui.labels["5:2137"] ?? "4 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text2138, ui.styles["5:2138"]]}>{ui.labels["5:2138"] ?? "빌려주는 사람 · 박도윤의 화면 · 원격"}</Text>
      <Text numberOfLines={1} style={[styles.text2139, ui.styles["5:2139"]]}>{ui.labels["5:2139"] ?? "누구에게 보낼까요?"}</Text>
      <View pointerEvents="none" style={[styles.art2140, ui.styles["5:2140-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text2141, ui.styles["5:2141"]]}>{ui.labels["5:2141"] ?? "받는 사람 이름 (실명)"}</Text>
      <View pointerEvents="none" style={[styles.art2142, ui.styles["5:2142-img"]]}><Graphic9 /></View>
      <EntryField name="recipient" style={styles.text2143} ui={ui} />
      <Text numberOfLines={1} style={[styles.text2144, ui.styles["5:2144"]]}>{ui.labels["5:2144"] ?? "휴대폰 번호"}</Text>
      <View pointerEvents="none" style={[styles.art2145, ui.styles["5:2145-img"]]}><Graphic8 /></View>
      <EntryField name="phone" style={styles.text2146} ui={ui} />
      <Text numberOfLines={1} style={[styles.text2147, ui.styles["5:2147"]]}>{ui.labels["5:2147"] ?? "상대가 본인인증한 이름·번호가 여기와 다르면 서명할 수 없어"}</Text>
      <Text numberOfLines={1} style={[styles.text2148, ui.styles["5:2148"]]}>{ui.labels["5:2148"] ?? "요."}</Text>
      <Text numberOfLines={1} style={[styles.text2149, ui.styles["5:2149"]]}>{ui.labels["5:2149"] ?? "보내는 방법"}</Text>
      <View pointerEvents="none" style={[styles.art2150, ui.styles["5:2150-img"]]}><Graphic4 /></View>
      <Text numberOfLines={1} style={[styles.text2151, ui.styles["5:2151"]]}>{ui.labels["5:2151"] ?? "on"}</Text>
      <Text numberOfLines={1} style={[styles.text2152, ui.styles["5:2152"]]}>{ui.labels["5:2152"] ?? "카카오톡"}</Text>
      <View pointerEvents="none" style={[styles.art2153, ui.styles["5:2153-img"]]}><Graphic15 /></View>
      <Text numberOfLines={1} style={[styles.text2154, ui.styles["5:2154"]]}>{ui.labels["5:2154"] ?? "on"}</Text>
      <Text numberOfLines={1} style={[styles.text2155, ui.styles["5:2155"]]}>{ui.labels["5:2155"] ?? "문자"}</Text>
      <View pointerEvents="none" style={[styles.art2156, ui.styles["5:2156-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.art2157, ui.styles["5:2157-img"]]}><Graphic12 /></View>
      <Text numberOfLines={1} style={[styles.text2158, ui.styles["5:2158"]]}>{ui.labels["5:2158"] ?? "링크 유효 시간"}</Text>
      <Text numberOfLines={1} style={[styles.text2159, ui.styles["5:2159"]]}>{ui.labels["5:2159"] ?? "24시간"}</Text>
      <View pointerEvents="none" style={[styles.art2160, ui.styles["5:2160-img"]]}><Graphic12 /></View>
      <Text numberOfLines={1} style={[styles.text2161, ui.styles["5:2161"]]}>{ui.labels["5:2161"] ?? "상대 확인 방법"}</Text>
      <Text numberOfLines={1} style={[styles.text2162, ui.styles["5:2162"]]}>{ui.labels["5:2162"] ?? "휴대폰 본인인증"}</Text>
      <Text numberOfLines={1} style={[styles.text2163, ui.styles["5:2163"]]}>{ui.labels["5:2163"] ?? "조건 협상"}</Text>
      <Text numberOfLines={1} style={[styles.text2164, ui.styles["5:2164"]]}>{ui.labels["5:2164"] ?? "링크에서 이어서"}</Text>
      <View pointerEvents="none" style={[styles.art2165, ui.styles["5:2165-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text2166, ui.styles["5:2166"]]}>{ui.labels["5:2166"] ?? "링크는"}</Text>
      <Text numberOfLines={1} style={[styles.text2167, ui.styles["5:2167"]]}>{ui.labels["5:2167"] ?? "한 사람만, 한 번만"}</Text>
      <Text numberOfLines={1} style={[styles.text2168, ui.styles["5:2168"]]}>{ui.labels["5:2168"] ?? "쓸 수 있어요. 열람·본인인증·서"}</Text>
      <Text numberOfLines={1} style={[styles.text2169, ui.styles["5:2169"]]}>{ui.labels["5:2169"] ?? "명마다 시각·기기·IP가 진행 기록에 남아요."}</Text>
      <View pointerEvents="none" style={[styles.art2170, ui.styles["5:2170-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text2173, ui.styles["5:2173"]]}>{ui.labels["5:2173"] ?? "원격으로 쓴 차용증은 근접 확인 기록이 없어요. 효력은 같고, 진행"}</Text>
      <Text numberOfLines={1} style={[styles.text2174, ui.styles["5:2174"]]}>{ui.labels["5:2174"] ?? "기록으로 증명해요."}</Text>
      <View pointerEvents="none" style={[styles.art2175, ui.styles["5:2175-img"]]}><Graphic11 /></View>
      <View pointerEvents="none" style={[styles.art2176, ui.styles["5:2176-img"]]}><Graphic17 /></View>
      <View pointerEvents="none" style={[styles.art2177, ui.styles["5:2177-img"]]}><Graphic13 /></View>
      <View pointerEvents="none" style={[styles.art2178, ui.styles["5:2178-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text2181, ui.styles["5:2181"]]}>{ui.labels["5:2181"] ?? "서명 요청 보내기"}</Text>
      <TouchTarget label={ui.labels["5:2152"] ?? "카카오톡"} action="talk" style={styles.taptext2152} ui={ui} />
      <TouchTarget label={ui.labels["5:2155"] ?? "문자"} action="sms" style={styles.taptext2155} ui={ui} />
      <TouchTarget label={ui.labels["5:2181"] ?? "서명 요청 보내기"} action="invite" style={styles.taptext2181} ui={ui} />
    </Frame>
  );
}
