import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Connection.styles';
import Graphic0 from '../../../assets/wire/067a7.svg';
import Graphic1 from '../../../assets/wire/681c3.svg';
import Graphic2 from '../../../assets/wire/887c4.svg';
import Graphic3 from '../../../assets/wire/a6136.svg';

export default function Connection({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["182:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["182:3"]]} />
      <View pointerEvents="none" style={[styles.art4, ui.styles["182:4-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text6, ui.styles["182:6"]]}>{ui.labels["182:6"] ?? "차용증 쓰기"}</Text>
      <View pointerEvents="none" style={[styles.box7, ui.styles["182:7"]]} />
      <View pointerEvents="none" style={[styles.box8, ui.styles["182:8"]]} />
      <Text numberOfLines={1} style={[styles.text9, ui.styles["182:9"]]}>{ui.labels["182:9"] ?? "1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box10, ui.styles["182:10"]]} />
      <Text numberOfLines={1} style={[styles.text11, ui.styles["182:11"]]}>{ui.labels["182:11"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.box12, ui.styles["182:12"]]} />
      <Text numberOfLines={1} style={[styles.text13, ui.styles["182:13"]]}>{ui.labels["182:13"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["182:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["182:15"]]}>{ui.labels["182:15"] ?? "4 송금"}</Text>
      <View pointerEvents="none" style={[styles.box16, ui.styles["182:16"]]} />
      <View pointerEvents="none" style={[styles.box17, ui.styles["182:17"]]} />
      <Text numberOfLines={1} style={[styles.text18, ui.styles["182:18"]]}>{ui.labels["182:18"] ?? "나는 빌려줘요"}</Text>
      <Text numberOfLines={1} style={[styles.text19, ui.styles["182:19"]]}>{ui.labels["182:19"] ?? "나는 빌려요"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["182:20"]]}>{ui.labels["182:20"] ?? "상대와 지금"}</Text>
      <Text numberOfLines={1} style={[styles.text21, ui.styles["182:21"]]}>{ui.labels["182:21"] ?? "같이 있나요?"}</Text>
      <Text numberOfLines={1} style={[styles.text22, ui.styles["182:22"]]}>{ui.labels["182:22"] ?? "어느 방식이든 차용증의 효력은 같아요."}</Text>
      <View pointerEvents="none" style={[styles.box23, ui.styles["182:23"]]} />
      <View pointerEvents="none" style={[styles.box24, ui.styles["182:24"]]} />
      <View pointerEvents="none" style={[styles.art25, ui.styles["182:25-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["182:30"]]}>{ui.labels["182:30"] ?? "만나서 쓰기"}</Text>
      <Text numberOfLines={1} style={[styles.text31, ui.styles["182:31"]]}>{ui.labels["182:31"] ?? "QR·블루투스 근접 확인"}</Text>
      <View pointerEvents="none" style={[styles.box32, ui.styles["182:32"]]} />
      <Text numberOfLines={1} style={[styles.text33, ui.styles["182:33"]]}>{ui.labels["182:33"] ?? "증거 더 많음"}</Text>
      <View pointerEvents="none" style={[styles.box34, ui.styles["182:34"]]} />
      <Text numberOfLines={1} style={[styles.text35, ui.styles["182:35"]]}>{ui.labels["182:35"] ?? "QR을 찍고, 블루투스로 두 폰이 가까운지 확인해요"}</Text>
      <View pointerEvents="none" style={[styles.box36, ui.styles["182:36"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["182:37"]]}>{ui.labels["182:37"] ?? "근접 확인 기록이 차용증에 남아요"}</Text>
      <View pointerEvents="none" style={[styles.box38, ui.styles["182:38"]]} />
      <View pointerEvents="none" style={[styles.box39, ui.styles["182:39"]]} />
      <View pointerEvents="none" style={[styles.art40, ui.styles["182:40-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["182:43"]]}>{ui.labels["182:43"] ?? "떨어져서 쓰기"}</Text>
      <Text numberOfLines={1} style={[styles.text44, ui.styles["182:44"]]}>{ui.labels["182:44"] ?? "서명 요청 링크 보내기 (원격)"}</Text>
      <View pointerEvents="none" style={[styles.box45, ui.styles["182:45"]]} />
      <Text numberOfLines={1} style={[styles.text46, ui.styles["182:46"]]}>{ui.labels["182:46"] ?? "카톡·문자로 서명 요청 링크를 보내요"}</Text>
      <View pointerEvents="none" style={[styles.box47, ui.styles["182:47"]]} />
      <Text numberOfLines={1} style={[styles.text48, ui.styles["182:48"]]}>{ui.labels["182:48"] ?? "근접 기록 대신 진행 기록(시각·기기·IP)이 남아요"}</Text>
      <View pointerEvents="none" style={[styles.box49, ui.styles["182:49"]]} />
      <Text numberOfLines={1} style={[styles.text50, ui.styles["182:50"]]}>{ui.labels["182:50"] ?? "링크는 24시간 뒤 만료 · 상대 본인인증 후에만 열려요"}</Text>
      <View pointerEvents="none" style={[styles.art51, ui.styles["182:51-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text54, ui.styles["182:54"]]}>{ui.labels["182:54"] ?? "효력은 전자문서법·전자서명법에서 나와요. 두 방식 모두"}</Text>
      <Text numberOfLines={1} style={[styles.text55, ui.styles["182:55"]]}>{ui.labels["182:55"] ?? "본인인증과 전자서명을 거쳐요. 근접 확인·진행 기록은 다툼이"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["182:56"]]}>{ui.labels["182:56"] ?? "생겼을 때 보여 줄 증거예요."}</Text>
      <TouchTarget label={ui.labels["182:18"] ?? "나는 빌려줘요"} action="roleLender" style={styles.taptext18} ui={ui} />
      <TouchTarget label={ui.labels["182:19"] ?? "나는 빌려요"} action="roleBorrower" style={styles.taptext19} ui={ui} />
      <TouchTarget label={ui.labels["182:30"] ?? "만나서 쓰기"} action="meet" style={styles.taptext30} ui={ui} />
      <TouchTarget label={ui.labels["182:43"] ?? "떨어져서 쓰기"} action="remote" style={styles.taptext43} ui={ui} />
    </Frame>
  );
}
