import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './InstallmentComplete.styles';
import Graphic0 from '../../../assets/wire/90f05.svg';

export default function InstallmentComplete({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box66, ui.styles["246:66"]]} />
      <View pointerEvents="none" style={[styles.box67, ui.styles["246:67"]]} />
      <View pointerEvents="none" style={[styles.box68, ui.styles["246:68"]]} />
      <Text numberOfLines={1} style={[styles.text69, ui.styles["246:69"]]}>{ui.labels["246:69"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text70, ui.styles["246:70"]]}>{ui.labels["246:70"] ?? "이하린님이 2회차 남은 돈을 갚았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text71, ui.styles["246:71"]]}>{ui.labels["246:71"] ?? "20,000원이 들어왔어요 · 방금"}</Text>
      <Text numberOfLines={1} style={[styles.text72, ui.styles["246:72"]]}>{ui.labels["246:72"] ?? "빌려주는 사람 · 박도윤의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box73, ui.styles["246:73"]]} />
      <View pointerEvents="none" style={[styles.box74, ui.styles["246:74"]]} />
      <View pointerEvents="none" style={[styles.art75, ui.styles["246:75-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text77, ui.styles["246:77"]]}>{ui.labels["246:77"] ?? "2회차 100,000원 다 받았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["246:78"]]}>{ui.labels["246:78"] ?? "2027.02.28 20:15 · NOD 송금 · 거래번호 T-20270228-0412"}</Text>
      <View pointerEvents="none" style={[styles.box79, ui.styles["246:79"]]} />
      <Text numberOfLines={1} style={[styles.text80, ui.styles["246:80"]]}>{ui.labels["246:80"] ?? "2회차 (02.28 기한) 받은 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text81, ui.styles["246:81"]]}>{ui.labels["246:81"] ?? "02.26 입금 · 내가 넣음"}</Text>
      <Text numberOfLines={1} style={[styles.text82, ui.styles["246:82"]]}>{ui.labels["246:82"] ?? "80,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text83, ui.styles["246:83"]]}>{ui.labels["246:83"] ?? "02.28 NOD 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["246:84"]]}>{ui.labels["246:84"] ?? "20,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text85, ui.styles["246:85"]]}>{ui.labels["246:85"] ?? "기한 안에 다 받음 · 지연손해금"}</Text>
      <Text numberOfLines={1} style={[styles.text86, ui.styles["246:86"]]}>{ui.labels["246:86"] ?? "0원"}</Text>
      <View pointerEvents="none" style={[styles.box87, ui.styles["246:87"]]} />
      <Text numberOfLines={1} style={[styles.text88, ui.styles["246:88"]]}>{ui.labels["246:88"] ?? "남은 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text89, ui.styles["246:89"]]}>{ui.labels["246:89"] ?? "100,000원 · 3회차 03.31"}</Text>
      <View pointerEvents="none" style={[styles.box90, ui.styles["246:90"]]} />
      <Text numberOfLines={1} style={[styles.text91, ui.styles["246:91"]]}>{ui.labels["246:91"] ?? "영수증 · 남은 일정 보기"}</Text>
      <View pointerEvents="none" style={[styles.box92, ui.styles["246:92"]]} />
      <Text numberOfLines={1} style={[styles.text93, ui.styles["246:93"]]}>{ui.labels["246:93"] ?? "홈으로"}</Text>
      <TouchTarget label={ui.labels["246:91"] ?? "영수증 · 남은 일정 보기"} action="S18" style={styles.taptext91} ui={ui} />
      <TouchTarget label={ui.labels["246:93"] ?? "홈으로"} action="home" style={styles.taptext93} ui={ui} />
    </Frame>
  );
}
