import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './S2Error.styles';

export default function S2Error({ ui }) {
  return (
    <Frame width={390} height={402} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box42, ui.styles["178:42"]]} />
      <Text numberOfLines={1} style={[styles.text43, ui.styles["178:43"]]}>{ui.labels["178:43"] ?? "예외 상태 · 계좌 조회 결과에 따라 표시"}</Text>
      <View pointerEvents="none" style={[styles.box44, ui.styles["178:44"]]} />
      <Text numberOfLines={1} style={[styles.text45, ui.styles["178:45"]]}>{ui.labels["178:45"] ?? "본인 명의 계좌만 연결할 수 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text46, ui.styles["178:46"]]}>{ui.labels["178:46"] ?? "예금주 이름이 본인인증한 이름(박도윤)과 달라요. 가족·"}</Text>
      <Text numberOfLines={1} style={[styles.text47, ui.styles["178:47"]]}>{ui.labels["178:47"] ?? "지인 계좌는 쓸 수 없어요."}</Text>
      <View pointerEvents="none" style={[styles.box48, ui.styles["178:48"]]} />
      <Text numberOfLines={1} style={[styles.text49, ui.styles["178:49"]]}>{ui.labels["178:49"] ?? "다른 계좌 고르기"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["178:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["178:51"]]}>{ui.labels["178:51"] ?? "연결할 계좌가 없어요"}</Text>
      <Text numberOfLines={1} style={[styles.text52, ui.styles["178:52"]]}>{ui.labels["178:52"] ?? "은행 앱에서 본인 명의 입출금 계좌를 만든 뒤 다시 찾아"}</Text>
      <Text numberOfLines={1} style={[styles.text53, ui.styles["178:53"]]}>{ui.labels["178:53"] ?? "주세요."}</Text>
      <View pointerEvents="none" style={[styles.box54, ui.styles["178:54"]]} />
      <Text numberOfLines={1} style={[styles.text55, ui.styles["178:55"]]}>{ui.labels["178:55"] ?? "다시 찾기"}</Text>
      <TouchTarget label={ui.labels["178:49"] ?? "다른 계좌 고르기"} action="S2" style={styles.taptext49} ui={ui} />
      <TouchTarget label={ui.labels["178:55"] ?? "다시 찾기"} action="S2" style={styles.taptext55} ui={ui} />
    </Frame>
  );
}
