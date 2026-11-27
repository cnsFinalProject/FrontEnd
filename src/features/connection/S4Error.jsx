import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './S4Error.styles';

export default function S4Error({ ui }) {
  return (
    <Frame width={390} height={701} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box57, ui.styles["182:57"]]} />
      <Text numberOfLines={1} style={[styles.text58, ui.styles["182:58"]]}>{ui.labels["182:58"] ?? "예외 상태 · 상황에 따라 카드 위·대신 표시"}</Text>
      <View pointerEvents="none" style={[styles.box59, ui.styles["182:59"]]} />
      <Text numberOfLines={1} style={[styles.text60, ui.styles["182:60"]]}>{ui.labels["182:60"] ?? "블루투스가 꺼져 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text61, ui.styles["182:61"]]}>{ui.labels["182:61"] ?? "두 폰이 가까운지 확인하려면 블루투스가 필요해요."}</Text>
      <View pointerEvents="none" style={[styles.box62, ui.styles["182:62"]]} />
      <Text numberOfLines={1} style={[styles.text63, ui.styles["182:63"]]}>{ui.labels["182:63"] ?? "블루투스 켜기"}</Text>
      <View pointerEvents="none" style={[styles.box64, ui.styles["182:64"]]} />
      <Text numberOfLines={1} style={[styles.text65, ui.styles["182:65"]]}>{ui.labels["182:65"] ?? "링크로 보내기"}</Text>
      <View pointerEvents="none" style={[styles.box66, ui.styles["182:66"]]} />
      <Text numberOfLines={1} style={[styles.text67, ui.styles["182:67"]]}>{ui.labels["182:67"] ?? "카메라 권한이 없어요"}</Text>
      <Text numberOfLines={1} style={[styles.text68, ui.styles["182:68"]]}>{ui.labels["182:68"] ?? "상대 화면의 QR을 찍으려면 카메라를 허용해 주세요."}</Text>
      <View pointerEvents="none" style={[styles.box69, ui.styles["182:69"]]} />
      <Text numberOfLines={1} style={[styles.text70, ui.styles["182:70"]]}>{ui.labels["182:70"] ?? "설정에서 허용"}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["182:71"]]} />
      <Text numberOfLines={1} style={[styles.text72, ui.styles["182:72"]]}>{ui.labels["182:72"] ?? "상대가 아직 NOD에 가입하지 않았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text73, ui.styles["182:73"]]}>{ui.labels["182:73"] ?? "초대 링크를 받은 상대가 가입하고 본인인증하면 이어서"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["182:74"]]}>{ui.labels["182:74"] ?? "쓸 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box75, ui.styles["182:75"]]} />
      <Text numberOfLines={1} style={[styles.text76, ui.styles["182:76"]]}>{ui.labels["182:76"] ?? "초대 링크 보내기"}</Text>
      <View pointerEvents="none" style={[styles.box77, ui.styles["182:77"]]} />
      <Text numberOfLines={1} style={[styles.text78, ui.styles["182:78"]]}>{ui.labels["182:78"] ?? "서명을 기다리는 차용증이 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["182:79"]]}>{ui.labels["182:79"] ?? "김서준 · 200,000원 · 조건 합의됨. 새로 쓰기 전에"}</Text>
      <Text numberOfLines={1} style={[styles.text80, ui.styles["182:80"]]}>{ui.labels["182:80"] ?? "이어서 할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box81, ui.styles["182:81"]]} />
      <Text numberOfLines={1} style={[styles.text82, ui.styles["182:82"]]}>{ui.labels["182:82"] ?? "이어서 하기"}</Text>
      <View pointerEvents="none" style={[styles.box83, ui.styles["182:83"]]} />
      <Text numberOfLines={1} style={[styles.text84, ui.styles["182:84"]]}>{ui.labels["182:84"] ?? "새로 쓰기"}</Text>
      <TouchTarget label={ui.labels["182:63"] ?? "블루투스 켜기"} action="meet" style={styles.taptext63} ui={ui} />
      <TouchTarget label={ui.labels["182:65"] ?? "링크로 보내기"} action="remote" style={styles.taptext65} ui={ui} />
      <TouchTarget label={ui.labels["182:70"] ?? "설정에서 허용"} action="meet" style={styles.taptext70} ui={ui} />
      <TouchTarget label={ui.labels["182:76"] ?? "초대 링크 보내기"} action="remote" style={styles.taptext76} ui={ui} />
      <TouchTarget label={ui.labels["182:82"] ?? "이어서 하기"} action="portfolio" style={styles.taptext82} ui={ui} />
      <TouchTarget label={ui.labels["182:84"] ?? "새로 쓰기"} action="S4" style={styles.taptext84} ui={ui} />
    </Frame>
  );
}
