import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './LinkAccount.styles';
import Graphic0 from '../../../assets/wire/149f4.svg';
import Graphic1 from '../../../assets/wire/a6136.svg';
import Graphic2 from '../../../assets/wire/d61ff.svg';

export default function LinkAccount({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["178:2"]]} />
      <View pointerEvents="none" style={[styles.art3, ui.styles["178:3-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text5, ui.styles["178:5"]]}>{ui.labels["178:5"] ?? "2 / 2"}</Text>
      <Text numberOfLines={1} style={[styles.text6, ui.styles["178:6"]]}>{ui.labels["178:6"] ?? "돈을 주고받을"}</Text>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["178:7"]]}>{ui.labels["178:7"] ?? "내 계좌를 연결해요"}</Text>
      <Text numberOfLines={1} style={[styles.text8, ui.styles["178:8"]]}>{ui.labels["178:8"] ?? "약정서에 적힌 금액·사람에게만 보내요."}</Text>
      <Text numberOfLines={1} style={[styles.text9, ui.styles["178:9"]]}>{ui.labels["178:9"] ?? "내 명의 계좌 · 하나만 골라요"}</Text>
      <View pointerEvents="none" style={[styles.box10, ui.styles["178:10"]]} />
      <View pointerEvents="none" style={[styles.box11, ui.styles["178:11"]]} />
      <Text numberOfLines={1} style={[styles.text12, ui.styles["178:12"]]}>{ui.labels["178:12"] ?? "한빛은행 입출금"}</Text>
      <Text numberOfLines={1} style={[styles.text13, ui.styles["178:13"]]}>{ui.labels["178:13"] ?? "110-***-482910"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["178:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["178:15"]]}>{ui.labels["178:15"] ?? "예금주 박도윤 · 일치"}</Text>
      <View pointerEvents="none" style={[styles.box16, ui.styles["178:16"]]} />
      <View pointerEvents="none" style={[styles.box17, ui.styles["178:17"]]} />
      <Text numberOfLines={1} style={[styles.text18, ui.styles["178:18"]]}>{ui.labels["178:18"] ?? "새솔저축은행 보통예금"}</Text>
      <Text numberOfLines={1} style={[styles.text19, ui.styles["178:19"]]}>{ui.labels["178:19"] ?? "3021-**-77104"}</Text>
      <View pointerEvents="none" style={[styles.box20, ui.styles["178:20"]]} />
      <Text numberOfLines={1} style={[styles.text21, ui.styles["178:21"]]}>{ui.labels["178:21"] ?? "예금주 박도윤 · 일치"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["178:22"]]} />
      <View pointerEvents="none" style={[styles.box23, ui.styles["178:23"]]} />
      <View pointerEvents="none" style={[styles.art24, ui.styles["178:24-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text26, ui.styles["178:26"]]}>{ui.labels["178:26"] ?? "필수"}</Text>
      <Text numberOfLines={1} style={[styles.text27, ui.styles["178:27"]]}>{ui.labels["178:27"] ?? "전자금융거래 이용약관"}</Text>
      <View pointerEvents="none" style={[styles.art28, ui.styles["178:28-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box30, ui.styles["178:30"]]} />
      <View pointerEvents="none" style={[styles.art31, ui.styles["178:31-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["178:33"]]}>{ui.labels["178:33"] ?? "필수"}</Text>
      <Text numberOfLines={1} style={[styles.text34, ui.styles["178:34"]]}>{ui.labels["178:34"] ?? "오픈뱅킹 이용 동의"}</Text>
      <Text numberOfLines={1} style={[styles.text35, ui.styles["178:35"]]}>{ui.labels["178:35"] ?? "조회 · 출금이체(약정 금액 안에서만) ·"}</Text>
      <Text numberOfLines={1} style={[styles.text36, ui.styles["178:36"]]}>{ui.labels["178:36"] ?? "금융결제원 정보 제공"}</Text>
      <View pointerEvents="none" style={[styles.art37, ui.styles["178:37-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text39, ui.styles["178:39"]]}>{ui.labels["178:39"] ?? "조회 동의는 1년마다 다시 받아요"}</Text>
      <View pointerEvents="none" style={[styles.box40, ui.styles["178:40"]]} />
      <Text numberOfLines={1} style={[styles.text41, ui.styles["178:41"]]}>{ui.labels["178:41"] ?? "동의하고 계좌 연결"}</Text>
      <TouchTarget label={ui.labels["178:12"] ?? "한빛은행 입출금"} action="firstAccount" style={styles.taptext12} ui={ui} />
      <TouchTarget label={ui.labels["178:18"] ?? "새솔저축은행 보통예금"} action="secondAccount" style={styles.taptext18} ui={ui} />
      <TouchTarget label={ui.labels["178:41"] ?? "동의하고 계좌 연결"} action="home" style={styles.taptext41} ui={ui} />
    </Frame>
  );
}
