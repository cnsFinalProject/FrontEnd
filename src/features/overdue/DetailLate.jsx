import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './DetailLate.styles';

export default function DetailLate({ ui }) {
  return (
    <Frame width={390} height={921} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box220, ui.styles["189:220"]]} />
      <View pointerEvents="none" style={[styles.box221, ui.styles["189:221"]]} />
      <Text numberOfLines={1} style={[styles.text222, ui.styles["189:222"]]}>{ui.labels["189:222"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text223, ui.styles["189:223"]]}>{ui.labels["189:223"] ?? "이하린님과의 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text225, ui.styles["189:225"]]}>{ui.labels["189:225"] ?? "⋯"}</Text>
      <View pointerEvents="none" style={[styles.box227, ui.styles["189:227"]]} />
      <View pointerEvents="none" style={[styles.box229, ui.styles["189:229"]]} />
      <Text numberOfLines={1} style={[styles.text230, ui.styles["189:230"]]}>{ui.labels["189:230"] ?? "연체 5일"}</Text>
      <Text numberOfLines={1} style={[styles.text232, ui.styles["189:232"]]}>{ui.labels["189:232"] ?? "빌려주는 사람 · 박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text233, ui.styles["189:233"]]}>{ui.labels["189:233"] ?? "200,000원 남음"}</Text>
      <Text numberOfLines={1} style={[styles.text234, ui.styles["189:234"]]}>{ui.labels["189:234"] ?? "300,000원 중 100,000원 받음 · 무이자 · 3회"}</Text>
      <View pointerEvents="none" style={[styles.box235, ui.styles["189:235"]]} />
      <View pointerEvents="none" style={[styles.box236, ui.styles["189:236"]]} />
      <View pointerEvents="none" style={[styles.box237, ui.styles["189:237"]]} />
      <Text numberOfLines={1} style={[styles.text239, ui.styles["189:239"]]}>{ui.labels["189:239"] ?? "연체 · 기한 02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text241, ui.styles["189:241"]]}>{ui.labels["189:241"] ?? "2회차 100,000원이 아직 확인되지 않았어요"}</Text>
      <Text style={[styles.text242, ui.styles["189:242"]]}>{ui.labels["189:242"] ?? "상환 요청은 하루 1번, 밤 9시~아침 8시에는 보내지 않아요. 최근 7일 1 / 7회"}</Text>
      <View pointerEvents="none" style={[styles.box244, ui.styles["189:244"]]} />
      <Text numberOfLines={1} style={[styles.text245, ui.styles["189:245"]]}>{ui.labels["189:245"] ?? "받았어요 (직접 체크)"}</Text>
      <View pointerEvents="none" style={[styles.box246, ui.styles["189:246"]]} />
      <Text numberOfLines={1} style={[styles.text248, ui.styles["189:248"]]}>{ui.labels["189:248"] ?? "증거 묶음 · Agent 초안 준비됨"}</Text>
      <Text numberOfLines={1} style={[styles.text249, ui.styles["189:249"]]}>{ui.labels["189:249"] ?? "근접 체결 기록 · 상환 내역 · 요청 발송 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text250, ui.styles["189:250"]]}>{ui.labels["189:250"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box251, ui.styles["189:251"]]} />
      <Text numberOfLines={1} style={[styles.text253, ui.styles["189:253"]]}>{ui.labels["189:253"] ?? "상환 원장"}</Text>
      <Text numberOfLines={1} style={[styles.text255, ui.styles["189:255"]]}>{ui.labels["189:255"] ?? "영수증 ›"}</Text>
      <Text numberOfLines={1} style={[styles.text258, ui.styles["189:258"]]}>{ui.labels["189:258"] ?? "1회차"}</Text>
      <Text numberOfLines={1} style={[styles.text259, ui.styles["189:259"]]}>{ui.labels["189:259"] ?? "2027.01.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box261, ui.styles["189:261"]]} />
      <Text numberOfLines={1} style={[styles.text262, ui.styles["189:262"]]}>{ui.labels["189:262"] ?? "확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text265, ui.styles["189:265"]]}>{ui.labels["189:265"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text266, ui.styles["189:266"]]}>{ui.labels["189:266"] ?? "2027.02.28 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box268, ui.styles["189:268"]]} />
      <Text numberOfLines={1} style={[styles.text269, ui.styles["189:269"]]}>{ui.labels["189:269"] ?? "미확인"}</Text>
      <Text numberOfLines={1} style={[styles.text272, ui.styles["189:272"]]}>{ui.labels["189:272"] ?? "3회차"}</Text>
      <Text numberOfLines={1} style={[styles.text273, ui.styles["189:273"]]}>{ui.labels["189:273"] ?? "2027.03.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box275, ui.styles["189:275"]]} />
      <Text numberOfLines={1} style={[styles.text276, ui.styles["189:276"]]}>{ui.labels["189:276"] ?? "예정"}</Text>
      <View pointerEvents="none" style={[styles.box277, ui.styles["189:277"]]} />
      <Text numberOfLines={1} style={[styles.text279, ui.styles["189:279"]]}>{ui.labels["189:279"] ?? "약정서 원문"}</Text>
      <Text numberOfLines={1} style={[styles.text281, ui.styles["189:281"]]}>{ui.labels["189:281"] ?? "진행 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text283, ui.styles["189:283"]]}>{ui.labels["189:283"] ?? "증거 묶음"}</Text>
      <View pointerEvents="none" style={[styles.box284, ui.styles["189:284"]]} />
      <View pointerEvents="none" style={[styles.box285, ui.styles["189:285"]]} />
      <Text numberOfLines={1} style={[styles.text286, ui.styles["189:286"]]}>{ui.labels["189:286"] ?? "상환 요청 보내기"}</Text>
      <TouchTarget label={ui.labels["189:245"] ?? "받았어요 (직접 체크)"} action="S28" style={styles.taptext245} ui={ui} />
      <TouchTarget label={ui.labels["189:248"] ?? "증거 묶음 · Agent 초안 준비됨"} action="S35" style={styles.taptext248} ui={ui} />
      <TouchTarget label={ui.labels["189:255"] ?? "영수증 ›"} action="S18" style={styles.taptext255} ui={ui} />
      <TouchTarget label={ui.labels["189:279"] ?? "약정서 원문"} action="document" style={styles.taptext279} ui={ui} />
      <TouchTarget label={ui.labels["189:281"] ?? "진행 기록"} action="records" style={styles.taptext281} ui={ui} />
      <TouchTarget label={ui.labels["189:283"] ?? "증거 묶음"} action="records" style={styles.taptext283} ui={ui} />
      <TouchTarget label={ui.labels["189:286"] ?? "상환 요청 보내기"} action="remind" style={styles.taptext286} ui={ui} />
    </Frame>
  );
}
