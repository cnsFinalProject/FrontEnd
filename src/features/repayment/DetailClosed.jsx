import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './DetailClosed.styles';

export default function DetailClosed({ ui }) {
  return (
    <Frame width={390} height={845} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box287, ui.styles["189:287"]]} />
      <View pointerEvents="none" style={[styles.box288, ui.styles["189:288"]]} />
      <Text numberOfLines={1} style={[styles.text289, ui.styles["189:289"]]}>{ui.labels["189:289"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text290, ui.styles["189:290"]]}>{ui.labels["189:290"] ?? "박도윤님과의 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text292, ui.styles["189:292"]]}>{ui.labels["189:292"] ?? "⋯"}</Text>
      <View pointerEvents="none" style={[styles.box294, ui.styles["189:294"]]} />
      <View pointerEvents="none" style={[styles.box296, ui.styles["189:296"]]} />
      <Text numberOfLines={1} style={[styles.text297, ui.styles["189:297"]]}>{ui.labels["189:297"] ?? "완납"}</Text>
      <Text numberOfLines={1} style={[styles.text299, ui.styles["189:299"]]}>{ui.labels["189:299"] ?? "빌리는 사람 · 이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text300, ui.styles["189:300"]]}>{ui.labels["189:300"] ?? "300,000원 모두 갚았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text301, ui.styles["189:301"]]}>{ui.labels["189:301"] ?? "2026.11.19 ~ 2027.03.31 · 3회 모두 확인"}</Text>
      <View pointerEvents="none" style={[styles.box302, ui.styles["189:302"]]} />
      <View pointerEvents="none" style={[styles.box303, ui.styles["189:303"]]} />
      <View pointerEvents="none" style={[styles.box304, ui.styles["189:304"]]} />
      <Text numberOfLines={1} style={[styles.text306, ui.styles["189:306"]]}>{ui.labels["189:306"] ?? "약속 종결"}</Text>
      <Text numberOfLines={1} style={[styles.text308, ui.styles["189:308"]]}>{ui.labels["189:308"] ?? "완납 증명서를 받을 수 있어요"}</Text>
      <Text style={[styles.text309, ui.styles["189:309"]]}>{ui.labels["189:309"] ?? "상대도 같은 증명서를 받아요. 약정서와 진행 기록은 10년 동안 보관돼요."}</Text>
      <View pointerEvents="none" style={[styles.box310, ui.styles["189:310"]]} />
      <Text numberOfLines={1} style={[styles.text312, ui.styles["189:312"]]}>{ui.labels["189:312"] ?? "상환 원장"}</Text>
      <Text numberOfLines={1} style={[styles.text314, ui.styles["189:314"]]}>{ui.labels["189:314"] ?? "영수증 ›"}</Text>
      <Text numberOfLines={1} style={[styles.text317, ui.styles["189:317"]]}>{ui.labels["189:317"] ?? "대여 실행"}</Text>
      <Text numberOfLines={1} style={[styles.text318, ui.styles["189:318"]]}>{ui.labels["189:318"] ?? "2026.11.19 · 300,000원"}</Text>
      <View pointerEvents="none" style={[styles.box320, ui.styles["189:320"]]} />
      <Text numberOfLines={1} style={[styles.text321, ui.styles["189:321"]]}>{ui.labels["189:321"] ?? "확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text324, ui.styles["189:324"]]}>{ui.labels["189:324"] ?? "1회차"}</Text>
      <Text numberOfLines={1} style={[styles.text325, ui.styles["189:325"]]}>{ui.labels["189:325"] ?? "2027.01.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box327, ui.styles["189:327"]]} />
      <Text numberOfLines={1} style={[styles.text328, ui.styles["189:328"]]}>{ui.labels["189:328"] ?? "확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text331, ui.styles["189:331"]]}>{ui.labels["189:331"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text332, ui.styles["189:332"]]}>{ui.labels["189:332"] ?? "2027.02.28 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box334, ui.styles["189:334"]]} />
      <Text numberOfLines={1} style={[styles.text335, ui.styles["189:335"]]}>{ui.labels["189:335"] ?? "확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text338, ui.styles["189:338"]]}>{ui.labels["189:338"] ?? "3회차"}</Text>
      <Text numberOfLines={1} style={[styles.text339, ui.styles["189:339"]]}>{ui.labels["189:339"] ?? "2027.03.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box341, ui.styles["189:341"]]} />
      <Text numberOfLines={1} style={[styles.text342, ui.styles["189:342"]]}>{ui.labels["189:342"] ?? "확인됨"}</Text>
      <View pointerEvents="none" style={[styles.box343, ui.styles["189:343"]]} />
      <Text numberOfLines={1} style={[styles.text345, ui.styles["189:345"]]}>{ui.labels["189:345"] ?? "약정서 원문"}</Text>
      <Text numberOfLines={1} style={[styles.text347, ui.styles["189:347"]]}>{ui.labels["189:347"] ?? "진행 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text349, ui.styles["189:349"]]}>{ui.labels["189:349"] ?? "증거 묶음"}</Text>
      <View pointerEvents="none" style={[styles.box350, ui.styles["189:350"]]} />
      <View pointerEvents="none" style={[styles.box351, ui.styles["189:351"]]} />
      <Text numberOfLines={1} style={[styles.text352, ui.styles["189:352"]]}>{ui.labels["189:352"] ?? "완납 증명서 받기"}</Text>
      <TouchTarget label={ui.labels["189:314"] ?? "영수증 ›"} action="S18" style={styles.taptext314} ui={ui} />
      <TouchTarget label={ui.labels["189:345"] ?? "약정서 원문"} action="document" style={styles.taptext345} ui={ui} />
      <TouchTarget label={ui.labels["189:347"] ?? "진행 기록"} action="records" style={styles.taptext347} ui={ui} />
      <TouchTarget label={ui.labels["189:349"] ?? "증거 묶음"} action="records" style={styles.taptext349} ui={ui} />
      <TouchTarget label={ui.labels["189:352"] ?? "완납 증명서 받기"} action="S33" style={styles.taptext352} ui={ui} />
    </Frame>
  );
}
