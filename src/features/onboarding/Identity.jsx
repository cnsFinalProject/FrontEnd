import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Identity.styles';
import Graphic0 from '../../../assets/wire/149f4.svg';
import Graphic1 from '../../../assets/wire/5efe4.svg';
import Graphic2 from '../../../assets/wire/d61ff.svg';

export default function Identity({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box3, ui.styles["177:3"]]} />
      <Text numberOfLines={1} style={[styles.text4, ui.styles["177:4"]]}>{ui.labels["177:4"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text5, ui.styles["177:5"]]}>{ui.labels["177:5"] ?? "1 / 2"}</Text>
      <Text numberOfLines={1} style={[styles.text6, ui.styles["177:6"]]}>{ui.labels["177:6"] ?? "처음 한 번만"}</Text>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["177:7"]]}>{ui.labels["177:7"] ?? "본인인증을 해요"}</Text>
      <Text numberOfLines={1} style={[styles.text8, ui.styles["177:8"]]}>{ui.labels["177:8"] ?? "여기서 확인한 실명이 모든 차용증에 들어가요. 약속을"}</Text>
      <Text numberOfLines={1} style={[styles.text9, ui.styles["177:9"]]}>{ui.labels["177:9"] ?? "맺을 때마다 다시 인증하지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box10, ui.styles["177:10"]]} />
      <Text numberOfLines={1} style={[styles.text11, ui.styles["177:11"]]}>{ui.labels["177:11"] ?? "휴대폰 본인인증"}</Text>
      <Text numberOfLines={1} style={[styles.text12, ui.styles["177:12"]]}>{ui.labels["177:12"] ?? "이름"}</Text>
      <Text numberOfLines={1} style={[styles.text13, ui.styles["177:13"]]}>{ui.labels["177:13"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text14, ui.styles["177:14"]]}>{ui.labels["177:14"] ?? "생년월일"}</Text>
      <Text numberOfLines={1} style={[styles.text15, ui.styles["177:15"]]}>{ui.labels["177:15"] ?? "1999.04.12"}</Text>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["177:16"]]}>{ui.labels["177:16"] ?? "휴대폰"}</Text>
      <Text numberOfLines={1} style={[styles.text17, ui.styles["177:17"]]}>{ui.labels["177:17"] ?? "010-****-2280"}</Text>
      <View pointerEvents="none" style={[styles.art18, ui.styles["177:18-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["177:20"]]}>{ui.labels["177:20"] ?? "인증 완료 · 만 19세 이상"}</Text>
      <View pointerEvents="none" style={[styles.box21, ui.styles["177:21"]]} />
      <View pointerEvents="none" style={[styles.box22, ui.styles["177:22"]]} />
      <View pointerEvents="none" style={[styles.box23, ui.styles["177:23"]]} />
      <View pointerEvents="none" style={[styles.art24, ui.styles["177:24-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text26, ui.styles["177:26"]]}>{ui.labels["177:26"] ?? "전체 동의"}</Text>
      <View pointerEvents="none" style={[styles.box27, ui.styles["177:27"]]} />
      <View pointerEvents="none" style={[styles.art28, ui.styles["177:28-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["177:30"]]}>{ui.labels["177:30"] ?? "필수"}</Text>
      <Text numberOfLines={1} style={[styles.text31, ui.styles["177:31"]]}>{ui.labels["177:31"] ?? "서비스 이용약관"}</Text>
      <View pointerEvents="none" style={[styles.art32, ui.styles["177:32-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box34, ui.styles["177:34"]]} />
      <View pointerEvents="none" style={[styles.art35, ui.styles["177:35-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text37, ui.styles["177:37"]]}>{ui.labels["177:37"] ?? "필수"}</Text>
      <Text numberOfLines={1} style={[styles.text38, ui.styles["177:38"]]}>{ui.labels["177:38"] ?? "개인정보 수집·이용"}</Text>
      <View pointerEvents="none" style={[styles.art39, ui.styles["177:39-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box41, ui.styles["177:41"]]} />
      <Text numberOfLines={1} style={[styles.text42, ui.styles["177:42"]]}>{ui.labels["177:42"] ?? "선택"}</Text>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["177:43"]]}>{ui.labels["177:43"] ?? "혜택·이벤트 알림 받기"}</Text>
      <View pointerEvents="none" style={[styles.art44, ui.styles["177:44-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box46, ui.styles["177:46"]]} />
      <Text numberOfLines={1} style={[styles.text47, ui.styles["177:47"]]}>{ui.labels["177:47"] ?? "다음 · 계좌 연결"}</Text>
      <TouchTarget label={ui.labels["177:26"] ?? "전체 동의"} action="consentAll" style={styles.taptext26} ui={ui} />
      <TouchTarget label={ui.labels["177:31"] ?? "서비스 이용약관"} action="termsConsent" style={styles.taptext31} ui={ui} />
      <TouchTarget label={ui.labels["177:38"] ?? "개인정보 수집·이용"} action="privacyConsent" style={styles.taptext38} ui={ui} />
      <TouchTarget label={ui.labels["177:43"] ?? "혜택·이벤트 알림 받기"} action="promoConsent" style={styles.taptext43} ui={ui} />
      <TouchTarget label={ui.labels["177:47"] ?? "다음 · 계좌 연결"} action="S2" style={styles.taptext47} ui={ui} />
    </Frame>
  );
}
