import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './TermsAmend.styles';

export default function TermsAmend({ ui }) {
  return (
    <Frame width={390} height={1061} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box354, ui.styles["193:354"]]} />
      <View pointerEvents="none" style={[styles.box355, ui.styles["193:355"]]} />
      <Text numberOfLines={1} style={[styles.text357, ui.styles["193:357"]]}>{ui.labels["193:357"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text358, ui.styles["193:358"]]}>{ui.labels["193:358"] ?? "약속 바꾸기"}</Text>
      <Text numberOfLines={1} style={[styles.text360, ui.styles["193:360"]]}>{ui.labels["193:360"] ?? "취소"}</Text>
      <View pointerEvents="none" style={[styles.box362, ui.styles["193:362"]]} />
      <Text numberOfLines={1} style={[styles.text363, ui.styles["193:363"]]}>{ui.labels["193:363"] ?? "체결된 약속 · 박도윤님과"}</Text>
      <Text numberOfLines={1} style={[styles.text364, ui.styles["193:364"]]}>{ui.labels["193:364"] ?? "바꿀 회차를 고쳐서 제안해요"}</Text>
      <Text style={[styles.text365, ui.styles["193:365"]]}>{ui.labels["193:365"] ?? "상대가 수락하기 전까지는 원래 약속 그대로예요. 받은 변경 제안에 역제안할 때도 이 화면을 써요."}</Text>
      <View pointerEvents="none" style={[styles.box366, ui.styles["193:366"]]} />
      <Text numberOfLines={1} style={[styles.text367, ui.styles["193:367"]]}>{ui.labels["193:367"] ?? "무엇을 바꿀까요"}</Text>
      <View pointerEvents="none" style={[styles.box368, ui.styles["193:368"]]} />
      <View pointerEvents="none" style={[styles.box369, ui.styles["193:369"]]} />
      <Text numberOfLines={1} style={[styles.text370, ui.styles["193:370"]]}>{ui.labels["193:370"] ?? "날짜 미루기"}</Text>
      <View pointerEvents="none" style={[styles.box371, ui.styles["193:371"]]} />
      <Text numberOfLines={1} style={[styles.text372, ui.styles["193:372"]]}>{ui.labels["193:372"] ?? "금액 나누기"}</Text>
      <View pointerEvents="none" style={[styles.box373, ui.styles["193:373"]]} />
      <Text numberOfLines={1} style={[styles.text374, ui.styles["193:374"]]}>{ui.labels["193:374"] ?? "일부 감액"}</Text>
      <View pointerEvents="none" style={[styles.box375, ui.styles["193:375"]]} />
      <Text numberOfLines={1} style={[styles.text377, ui.styles["193:377"]]}>{ui.labels["193:377"] ?? "조건"}</Text>
      <Text numberOfLines={1} style={[styles.text379, ui.styles["193:379"]]}>{ui.labels["193:379"] ?? "체결된 항목은 고정"}</Text>
      <View pointerEvents="none" style={[styles.box380, ui.styles["193:380"]]} />
      <Text numberOfLines={1} style={[styles.text383, ui.styles["193:383"]]}>{ui.labels["193:383"] ?? "빌린 돈"}</Text>
      <View pointerEvents="none" style={[styles.box384, ui.styles["193:384"]]} />
      <Text numberOfLines={1} style={[styles.text385, ui.styles["193:385"]]}>{ui.labels["193:385"] ?? "고정"}</Text>
      <Text numberOfLines={1} style={[styles.text388, ui.styles["193:388"]]}>{ui.labels["193:388"] ?? "300,000원"}</Text>
      <View pointerEvents="none" style={[styles.box389, ui.styles["193:389"]]} />
      <Text numberOfLines={1} style={[styles.text392, ui.styles["193:392"]]}>{ui.labels["193:392"] ?? "이자 · 특약"}</Text>
      <View pointerEvents="none" style={[styles.box393, ui.styles["193:393"]]} />
      <Text numberOfLines={1} style={[styles.text394, ui.styles["193:394"]]}>{ui.labels["193:394"] ?? "고정"}</Text>
      <Text numberOfLines={1} style={[styles.text397, ui.styles["193:397"]]}>{ui.labels["193:397"] ?? "없음 · 2회 연속"}</Text>
      <View pointerEvents="none" style={[styles.box398, ui.styles["193:398"]]} />
      <Text numberOfLines={1} style={[styles.text400, ui.styles["193:400"]]}>{ui.labels["193:400"] ?? "회차별 조건 · 눌러서 고치기"}</Text>
      <Text numberOfLines={1} style={[styles.text403, ui.styles["193:403"]]}>{ui.labels["193:403"] ?? "1회차 · 01.31"}</Text>
      <View pointerEvents="none" style={[styles.box404, ui.styles["193:404"]]} />
      <Text numberOfLines={1} style={[styles.text405, ui.styles["193:405"]]}>{ui.labels["193:405"] ?? "갚음 · 고정"}</Text>
      <Text numberOfLines={1} style={[styles.text407, ui.styles["193:407"]]}>{ui.labels["193:407"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text409, ui.styles["193:409"]]}>{ui.labels["193:409"] ?? "2회차 · 02.28"}</Text>
      <View pointerEvents="none" style={[styles.box410, ui.styles["193:410"]]} />
      <Text numberOfLines={1} style={[styles.text411, ui.styles["193:411"]]}>{ui.labels["193:411"] ?? "바뀜"}</Text>
      <Text numberOfLines={1} style={[styles.text413, ui.styles["193:413"]]}>{ui.labels["193:413"] ?? "72,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text415, ui.styles["193:415"]]}>{ui.labels["193:415"] ?? "2-2회차 · 03.05"}</Text>
      <View pointerEvents="none" style={[styles.box416, ui.styles["193:416"]]} />
      <Text numberOfLines={1} style={[styles.text417, ui.styles["193:417"]]}>{ui.labels["193:417"] ?? "추가"}</Text>
      <Text numberOfLines={1} style={[styles.text419, ui.styles["193:419"]]}>{ui.labels["193:419"] ?? "28,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text421, ui.styles["193:421"]]}>{ui.labels["193:421"] ?? "3회차 · 03.31"}</Text>
      <Text numberOfLines={1} style={[styles.text423, ui.styles["193:423"]]}>{ui.labels["193:423"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box424, ui.styles["193:424"]]} />
      <Text numberOfLines={1} style={[styles.text425, ui.styles["193:425"]]}>{ui.labels["193:425"] ?? "✓ 남은 200,000원과 합계 같음 · ✓ 마지막 상환일 그대로"}</Text>
      <Text numberOfLines={1} style={[styles.text426, ui.styles["193:426"]]}>{ui.labels["193:426"] ?? "합의하면 빚을 인정한 기록이 남아 소멸시효가 다시 계산돼요"}</Text>
      <View pointerEvents="none" style={[styles.box427, ui.styles["193:427"]]} />
      <Text numberOfLines={1} style={[styles.text428, ui.styles["193:428"]]}>{ui.labels["193:428"] ?? "사유"}</Text>
      <View pointerEvents="none" style={[styles.box429, ui.styles["193:429"]]} />
      <Text style={[styles.text430, ui.styles["193:430"]]}>{ui.labels["193:430"] ?? "2월 28일에 72,000원 먼저 보내고, 나머지는 3월 5일에 보낼게요."}</Text>
      <View pointerEvents="none" style={[styles.box431, ui.styles["193:431"]]} />
      <Text numberOfLines={1} style={[styles.text432, ui.styles["193:432"]]}>{ui.labels["193:432"] ?? "답 기다리는 기한"}</Text>
      <Text numberOfLines={1} style={[styles.text434, ui.styles["193:434"]]}>{ui.labels["193:434"] ?? "48시간 ▾"}</Text>
      <View pointerEvents="none" style={[styles.box435, ui.styles["193:435"]]} />
      <View pointerEvents="none" style={[styles.box436, ui.styles["193:436"]]} />
      <Text numberOfLines={1} style={[styles.text437, ui.styles["193:437"]]}>{ui.labels["193:437"] ?? "박도윤님께 제안 보내기"}</Text>
      <TouchTarget label={ui.labels["193:360"] ?? "취소"} action="back" style={styles.taptext360} ui={ui} />
      <TouchTarget label={ui.labels["193:413"] ?? "72,000원"} action="editChange" style={styles.taptext413} ui={ui} />
      <TouchTarget label={ui.labels["193:430"] ?? "2월 28일에 72,000원 먼저 보내고, 나머지는 3월 5일에 보낼게요."} action="editChange" style={styles.taptext430} ui={ui} />
      <TouchTarget label={ui.labels["193:437"] ?? "박도윤님께 제안 보내기"} action="amend" style={styles.taptext437} ui={ui} />
    </Frame>
  );
}
