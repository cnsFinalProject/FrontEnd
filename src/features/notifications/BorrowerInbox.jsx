import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './BorrowerInbox.styles';
import Graphic0 from '../../../assets/wire/38f28.svg';
import Graphic1 from '../../../assets/wire/7fcf7.svg';
import Graphic2 from '../../../assets/wire/a6136.svg';

export default function BorrowerInbox({ ui }) {
  return (
    <Frame width={390} height={900} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box40, ui.styles["225:40"]]} />
      <View pointerEvents="none" style={[styles.box41, ui.styles["225:41"]]} />
      <View pointerEvents="none" style={[styles.art43, ui.styles["225:43-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text45, ui.styles["225:45"]]}>{ui.labels["225:45"] ?? "알림"}</Text>
      <Text numberOfLines={1} style={[styles.text46, ui.styles["225:46"]]}>{ui.labels["225:46"] ?? "알림 설정"}</Text>
      <View pointerEvents="none" style={[styles.box47, ui.styles["225:47"]]} />
      <Text numberOfLines={1} style={[styles.text48, ui.styles["225:48"]]}>{ui.labels["225:48"] ?? "빌리는 사람 · 이하린의 화면 · 누르면 그 화면으로 가요"}</Text>
      <Text numberOfLines={1} style={[styles.text49, ui.styles["225:49"]]}>{ui.labels["225:49"] ?? "오늘 · 03.02"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["225:50"]]} />
      <View pointerEvents="none" style={[styles.box51, ui.styles["225:51"]]} />
      <View pointerEvents="none" style={[styles.box52, ui.styles["225:52"]]} />
      <View pointerEvents="none" style={[styles.art53, ui.styles["225:53-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["225:56"]]}>{ui.labels["225:56"] ?? "박도윤님이 2회차 상환을 요청했어요"}</Text>
      <Text numberOfLines={1} style={[styles.text57, ui.styles["225:57"]]}>{ui.labels["225:57"] ?? "박도윤 · 2회차 100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text58, ui.styles["225:58"]]}>{ui.labels["225:58"] ?? "10:12"}</Text>
      <View pointerEvents="none" style={[styles.box59, ui.styles["225:59"]]} />
      <View pointerEvents="none" style={[styles.box60, ui.styles["225:60"]]} />
      <View pointerEvents="none" style={[styles.art61, ui.styles["225:61-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text64, ui.styles["225:64"]]}>{ui.labels["225:64"] ?? "2회차가 아직 확인되지 않았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text65, ui.styles["225:65"]]}>{ui.labels["225:65"] ?? "박도윤 · 100,000원 · 연체 2일"}</Text>
      <Text numberOfLines={1} style={[styles.text66, ui.styles["225:66"]]}>{ui.labels["225:66"] ?? "09:00"}</Text>
      <Text numberOfLines={1} style={[styles.text67, ui.styles["225:67"]]}>{ui.labels["225:67"] ?? "이번 주"}</Text>
      <View pointerEvents="none" style={[styles.box68, ui.styles["225:68"]]} />
      <View pointerEvents="none" style={[styles.box70, ui.styles["225:70"]]} />
      <View pointerEvents="none" style={[styles.art71, ui.styles["225:71-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["225:74"]]}>{ui.labels["225:74"] ?? "오늘 2회차 갚는 날이에요"}</Text>
      <Text numberOfLines={1} style={[styles.text75, ui.styles["225:75"]]}>{ui.labels["225:75"] ?? "박도윤님께 100,000원 · 바로 갚기"}</Text>
      <Text numberOfLines={1} style={[styles.text76, ui.styles["225:76"]]}>{ui.labels["225:76"] ?? "02.28"}</Text>
      <View pointerEvents="none" style={[styles.box78, ui.styles["225:78"]]} />
      <View pointerEvents="none" style={[styles.art79, ui.styles["225:79-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text82, ui.styles["225:82"]]}>{ui.labels["225:82"] ?? "내일은 2회차 갚는 날이에요"}</Text>
      <Text numberOfLines={1} style={[styles.text83, ui.styles["225:83"]]}>{ui.labels["225:83"] ?? "박도윤님께 100,000원 · 02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["225:84"]]}>{ui.labels["225:84"] ?? "02.27"}</Text>
      <View pointerEvents="none" style={[styles.box86, ui.styles["225:86"]]} />
      <View pointerEvents="none" style={[styles.art87, ui.styles["225:87-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text90, ui.styles["225:90"]]}>{ui.labels["225:90"] ?? "잔액이 28,000원 모자라요"}</Text>
      <Text numberOfLines={1} style={[styles.text91, ui.styles["225:91"]]}>{ui.labels["225:91"] ?? "나만 보는 알림 · 약속 바꾸기 제안"}</Text>
      <Text numberOfLines={1} style={[styles.text92, ui.styles["225:92"]]}>{ui.labels["225:92"] ?? "02.27"}</Text>
      <View pointerEvents="none" style={[styles.box94, ui.styles["225:94"]]} />
      <View pointerEvents="none" style={[styles.art95, ui.styles["225:95-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text98, ui.styles["225:98"]]}>{ui.labels["225:98"] ?? "2회차까지 3일 남았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text99, ui.styles["225:99"]]}>{ui.labels["225:99"] ?? "박도윤님께 100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text100, ui.styles["225:100"]]}>{ui.labels["225:100"] ?? "02.25"}</Text>
      <Text numberOfLines={1} style={[styles.text101, ui.styles["225:101"]]}>{ui.labels["225:101"] ?? "지난 알림"}</Text>
      <View pointerEvents="none" style={[styles.box102, ui.styles["225:102"]]} />
      <View pointerEvents="none" style={[styles.box104, ui.styles["225:104"]]} />
      <View pointerEvents="none" style={[styles.art105, ui.styles["225:105-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text108, ui.styles["225:108"]]}>{ui.labels["225:108"] ?? "1회차 100,000원을 보냈어요"}</Text>
      <Text numberOfLines={1} style={[styles.text109, ui.styles["225:109"]]}>{ui.labels["225:109"] ?? "영수증 보기"}</Text>
      <Text numberOfLines={1} style={[styles.text110, ui.styles["225:110"]]}>{ui.labels["225:110"] ?? "01.31"}</Text>
      <View pointerEvents="none" style={[styles.box112, ui.styles["225:112"]]} />
      <View pointerEvents="none" style={[styles.art113, ui.styles["225:113-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text116, ui.styles["225:116"]]}>{ui.labels["225:116"] ?? "박도윤님이 300,000원을 보냈어요"}</Text>
      <Text numberOfLines={1} style={[styles.text117, ui.styles["225:117"]]}>{ui.labels["225:117"] ?? "대여 실행 · 약속 보기"}</Text>
      <Text numberOfLines={1} style={[styles.text118, ui.styles["225:118"]]}>{ui.labels["225:118"] ?? "11.19"}</Text>
      <TouchTarget label={ui.labels["225:46"] ?? "알림 설정"} action="S20" style={styles.taptext46} ui={ui} />
      <TouchTarget label={ui.labels["225:56"] ?? "박도윤님이 2회차 상환을 요청했어요"} action="S32" style={styles.taptext56} ui={ui} />
      <TouchTarget label={ui.labels["225:64"] ?? "2회차가 아직 확인되지 않았어요"} action="S32" style={styles.taptext64} ui={ui} />
      <TouchTarget label={ui.labels["225:74"] ?? "오늘 2회차 갚는 날이에요"} action="S29" style={styles.taptext74} ui={ui} />
      <TouchTarget label={ui.labels["225:82"] ?? "내일은 2회차 갚는 날이에요"} action="S16" style={styles.taptext82} ui={ui} />
      <TouchTarget label={ui.labels["225:90"] ?? "잔액이 28,000원 모자라요"} action="S22" style={styles.taptext90} ui={ui} />
      <TouchTarget label={ui.labels["225:98"] ?? "2회차까지 3일 남았어요"} action="S21" style={styles.taptext98} ui={ui} />
      <TouchTarget label={ui.labels["225:108"] ?? "1회차 100,000원을 보냈어요"} action="S18" style={styles.taptext108} ui={ui} />
      <TouchTarget label={ui.labels["225:116"] ?? "박도윤님이 300,000원을 보냈어요"} action="S16" style={styles.taptext116} ui={ui} />
    </Frame>
  );
}
