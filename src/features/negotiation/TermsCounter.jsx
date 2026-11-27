import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './TermsCounter.styles';

export default function TermsCounter({ ui }) {
  return (
    <Frame width={390} height={1117} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box246, ui.styles["193:246"]]} />
      <View pointerEvents="none" style={[styles.box247, ui.styles["193:247"]]} />
      <Text numberOfLines={1} style={[styles.text249, ui.styles["193:249"]]}>{ui.labels["193:249"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text250, ui.styles["193:250"]]}>{ui.labels["193:250"] ?? "역제안하기"}</Text>
      <Text numberOfLines={1} style={[styles.text252, ui.styles["193:252"]]}>{ui.labels["193:252"] ?? "취소"}</Text>
      <View pointerEvents="none" style={[styles.box255, ui.styles["193:255"]]} />
      <Text numberOfLines={1} style={[styles.text256, ui.styles["193:256"]]}>{ui.labels["193:256"] ?? "✓ 1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box258, ui.styles["193:258"]]} />
      <Text numberOfLines={1} style={[styles.text259, ui.styles["193:259"]]}>{ui.labels["193:259"] ?? "2 조건"}</Text>
      <View pointerEvents="none" style={[styles.box261, ui.styles["193:261"]]} />
      <Text numberOfLines={1} style={[styles.text262, ui.styles["193:262"]]}>{ui.labels["193:262"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box264, ui.styles["193:264"]]} />
      <Text numberOfLines={1} style={[styles.text265, ui.styles["193:265"]]}>{ui.labels["193:265"] ?? "4 완료"}</Text>
      <View pointerEvents="none" style={[styles.box267, ui.styles["193:267"]]} />
      <Text numberOfLines={1} style={[styles.text268, ui.styles["193:268"]]}>{ui.labels["193:268"] ?? "역제안 · 이하린(빌리는 사람)"}</Text>
      <Text numberOfLines={1} style={[styles.text269, ui.styles["193:269"]]}>{ui.labels["193:269"] ?? "3차 제안을 고쳐서 보내요"}</Text>
      <Text style={[styles.text270, ui.styles["193:270"]]}>{ui.labels["193:270"] ?? "고친 항목에만 ‘바뀜’이 붙어요. 보내기 전까지 아무것도 바뀌지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box271, ui.styles["193:271"]]} />
      <Text numberOfLines={1} style={[styles.text273, ui.styles["193:273"]]}>{ui.labels["193:273"] ?? "조건"}</Text>
      <View pointerEvents="none" style={[styles.box275, ui.styles["193:275"]]} />
      <Text numberOfLines={1} style={[styles.text278, ui.styles["193:278"]]}>{ui.labels["193:278"] ?? "빌릴 돈"}</Text>
      <View pointerEvents="none" style={[styles.box282, ui.styles["193:282"]]} />
      <Text numberOfLines={1} style={[styles.text281, ui.styles["193:281"]]}>{ui.labels["193:281"] ?? "300,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text283, ui.styles["193:283"]]}>{ui.labels["193:283"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box284, ui.styles["193:284"]]} />
      <Text numberOfLines={1} style={[styles.text287, ui.styles["193:287"]]}>{ui.labels["193:287"] ?? "갚는 방식"}</Text>
      <View pointerEvents="none" style={[styles.box291, ui.styles["193:291"]]} />
      <Text numberOfLines={1} style={[styles.text290, ui.styles["193:290"]]}>{ui.labels["193:290"] ?? "3회 · 100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text292, ui.styles["193:292"]]}>{ui.labels["193:292"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box293, ui.styles["193:293"]]} />
      <Text numberOfLines={1} style={[styles.text296, ui.styles["193:296"]]}>{ui.labels["193:296"] ?? "첫 상환일"}</Text>
      <View pointerEvents="none" style={[styles.box300, ui.styles["193:300"]]} />
      <Text numberOfLines={1} style={[styles.text299, ui.styles["193:299"]]}>{ui.labels["193:299"] ?? "2027.01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text301, ui.styles["193:301"]]}>{ui.labels["193:301"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box302, ui.styles["193:302"]]} />
      <Text numberOfLines={1} style={[styles.text305, ui.styles["193:305"]]}>{ui.labels["193:305"] ?? "이자"}</Text>
      <View pointerEvents="none" style={[styles.box309, ui.styles["193:309"]]} />
      <Text numberOfLines={1} style={[styles.text308, ui.styles["193:308"]]}>{ui.labels["193:308"] ?? "없음"}</Text>
      <Text numberOfLines={1} style={[styles.text310, ui.styles["193:310"]]}>{ui.labels["193:310"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box311, ui.styles["193:311"]]} />
      <Text numberOfLines={1} style={[styles.text314, ui.styles["193:314"]]}>{ui.labels["193:314"] ?? "남은 돈 한 번에 청구"}</Text>
      <View pointerEvents="none" style={[styles.box315, ui.styles["193:315"]]} />
      <Text numberOfLines={1} style={[styles.text316, ui.styles["193:316"]]}>{ui.labels["193:316"] ?? "바뀜"}</Text>
      <Text numberOfLines={1} style={[styles.text317, ui.styles["193:317"]]}>{ui.labels["193:317"] ?? "기한이익 상실"}</Text>
      <Text numberOfLines={1} style={[styles.text320, ui.styles["193:320"]]}>{ui.labels["193:320"] ?? "2회 연속 미납 시"}</Text>
      <View pointerEvents="none" style={[styles.box322, ui.styles["193:322"]]} />
      <Text numberOfLines={1} style={[styles.text321, ui.styles["193:321"]]}>{ui.labels["193:321"] ?? "3회 연속 미납 시"}</Text>
      <Text numberOfLines={1} style={[styles.text323, ui.styles["193:323"]]}>{ui.labels["193:323"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box324, ui.styles["193:324"]]} />
      <Text numberOfLines={1} style={[styles.text325, ui.styles["193:325"]]}>{ui.labels["193:325"] ?? "상대에게 한마디"}</Text>
      <View pointerEvents="none" style={[styles.box326, ui.styles["193:326"]]} />
      <Text style={[styles.text327, ui.styles["193:327"]]}>{ui.labels["193:327"] ?? "특약은 3번 연속일 때로 해 주세요. 나머지는 그대로 좋아요."}</Text>
      <View pointerEvents="none" style={[styles.box328, ui.styles["193:328"]]} />
      <Text numberOfLines={1} style={[styles.text330, ui.styles["193:330"]]}>{ui.labels["193:330"] ?? "상환표"}</Text>
      <Text numberOfLines={1} style={[styles.text333, ui.styles["193:333"]]}>{ui.labels["193:333"] ?? "1회 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text335, ui.styles["193:335"]]}>{ui.labels["193:335"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text337, ui.styles["193:337"]]}>{ui.labels["193:337"] ?? "2회 · 02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text339, ui.styles["193:339"]]}>{ui.labels["193:339"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text341, ui.styles["193:341"]]}>{ui.labels["193:341"] ?? "3회 · 03.31"}</Text>
      <Text numberOfLines={1} style={[styles.text343, ui.styles["193:343"]]}>{ui.labels["193:343"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box344, ui.styles["193:344"]]} />
      <Text numberOfLines={1} style={[styles.text345, ui.styles["193:345"]]}>{ui.labels["193:345"] ?? "총 300,000원 · 이자 0원"}</Text>
      <Text numberOfLines={1} style={[styles.text346, ui.styles["193:346"]]}>{ui.labels["193:346"] ?? "상환표는 바뀌지 않았어요"}</Text>
      <View pointerEvents="none" style={[styles.box347, ui.styles["193:347"]]} />
      <View pointerEvents="none" style={[styles.box348, ui.styles["193:348"]]} />
      <Text numberOfLines={1} style={[styles.text349, ui.styles["193:349"]]}>{ui.labels["193:349"] ?? "박도윤님께 역제안 보내기"}</Text>
      <TouchTarget label={ui.labels["193:252"] ?? "취소"} action="back" style={styles.taptext252} ui={ui} />
      <TouchTarget label={ui.labels["193:281"] ?? "300,000원"} action="editTerms" style={styles.taptext281} ui={ui} />
      <TouchTarget label={ui.labels["193:290"] ?? "3회 · 100,000원"} action="editTerms" style={styles.taptext290} ui={ui} />
      <TouchTarget label={ui.labels["193:299"] ?? "2027.01.31"} action="editTerms" style={styles.taptext299} ui={ui} />
      <TouchTarget label={ui.labels["193:349"] ?? "박도윤님께 역제안 보내기"} action="offer" style={styles.taptext349} ui={ui} />
    </Frame>
  );
}
