import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './TermsReview.styles';

export default function TermsReview({ ui }) {
  return (
    <Frame width={390} height={1006} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box132, ui.styles["193:132"]]} />
      <View pointerEvents="none" style={[styles.box133, ui.styles["193:133"]]} />
      <Text numberOfLines={1} style={[styles.text135, ui.styles["193:135"]]}>{ui.labels["193:135"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text136, ui.styles["193:136"]]}>{ui.labels["193:136"] ?? "조건 협상"}</Text>
      <Text numberOfLines={1} style={[styles.text138, ui.styles["193:138"]]}>{ui.labels["193:138"] ?? "그만하기"}</Text>
      <View pointerEvents="none" style={[styles.box141, ui.styles["193:141"]]} />
      <Text numberOfLines={1} style={[styles.text142, ui.styles["193:142"]]}>{ui.labels["193:142"] ?? "✓ 1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box144, ui.styles["193:144"]]} />
      <Text numberOfLines={1} style={[styles.text145, ui.styles["193:145"]]}>{ui.labels["193:145"] ?? "2 조건"}</Text>
      <View pointerEvents="none" style={[styles.box147, ui.styles["193:147"]]} />
      <Text numberOfLines={1} style={[styles.text148, ui.styles["193:148"]]}>{ui.labels["193:148"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box150, ui.styles["193:150"]]} />
      <Text numberOfLines={1} style={[styles.text151, ui.styles["193:151"]]}>{ui.labels["193:151"] ?? "4 완료"}</Text>
      <View pointerEvents="none" style={[styles.box153, ui.styles["193:153"]]} />
      <Text numberOfLines={1} style={[styles.text154, ui.styles["193:154"]]}>{ui.labels["193:154"] ?? "3차 제안 · 박도윤 · 18:37"}</Text>
      <Text numberOfLines={1} style={[styles.text155, ui.styles["193:155"]]}>{ui.labels["193:155"] ?? "박도윤님이 조건을 다시 제안했어요"}</Text>
      <Text numberOfLines={1} style={[styles.text156, ui.styles["193:156"]]}>{ui.labels["193:156"] ?? "“3회 분할은 좋아요. 대신 특약을 하나 넣을게요.”"}</Text>
      <Text numberOfLines={1} style={[styles.text158, ui.styles["193:158"]]}>{ui.labels["193:158"] ?? "협상 기록 3건 보기"}</Text>
      <Text numberOfLines={1} style={[styles.text160, ui.styles["193:160"]]}>{ui.labels["193:160"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box161, ui.styles["193:161"]]} />
      <Text numberOfLines={1} style={[styles.text163, ui.styles["193:163"]]}>{ui.labels["193:163"] ?? "조건"}</Text>
      <Text numberOfLines={1} style={[styles.text165, ui.styles["193:165"]]}>{ui.labels["193:165"] ?? "1차 제안과 비교"}</Text>
      <View pointerEvents="none" style={[styles.box166, ui.styles["193:166"]]} />
      <Text numberOfLines={1} style={[styles.text169, ui.styles["193:169"]]}>{ui.labels["193:169"] ?? "빌린 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text172, ui.styles["193:172"]]}>{ui.labels["193:172"] ?? "300,000원"}</Text>
      <View pointerEvents="none" style={[styles.box173, ui.styles["193:173"]]} />
      <Text numberOfLines={1} style={[styles.text176, ui.styles["193:176"]]}>{ui.labels["193:176"] ?? "갚는 방식"}</Text>
      <View pointerEvents="none" style={[styles.box177, ui.styles["193:177"]]} />
      <Text numberOfLines={1} style={[styles.text178, ui.styles["193:178"]]}>{ui.labels["193:178"] ?? "바뀜"}</Text>
      <Text numberOfLines={1} style={[styles.text181, ui.styles["193:181"]]}>{ui.labels["193:181"] ?? "2회 · 150,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text182, ui.styles["193:182"]]}>{ui.labels["193:182"] ?? "3회 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box183, ui.styles["193:183"]]} />
      <Text numberOfLines={1} style={[styles.text186, ui.styles["193:186"]]}>{ui.labels["193:186"] ?? "상환일"}</Text>
      <View pointerEvents="none" style={[styles.box187, ui.styles["193:187"]]} />
      <Text numberOfLines={1} style={[styles.text188, ui.styles["193:188"]]}>{ui.labels["193:188"] ?? "바뀜"}</Text>
      <Text numberOfLines={1} style={[styles.text191, ui.styles["193:191"]]}>{ui.labels["193:191"] ?? "12.31 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text192, ui.styles["193:192"]]}>{ui.labels["193:192"] ?? "01.31 · 02.28 · 03.31"}</Text>
      <View pointerEvents="none" style={[styles.box193, ui.styles["193:193"]]} />
      <Text numberOfLines={1} style={[styles.text196, ui.styles["193:196"]]}>{ui.labels["193:196"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text199, ui.styles["193:199"]]}>{ui.labels["193:199"] ?? "없음"}</Text>
      <View pointerEvents="none" style={[styles.box200, ui.styles["193:200"]]} />
      <Text numberOfLines={1} style={[styles.text203, ui.styles["193:203"]]}>{ui.labels["193:203"] ?? "남은 돈 한 번에 청구"}</Text>
      <View pointerEvents="none" style={[styles.box204, ui.styles["193:204"]]} />
      <Text numberOfLines={1} style={[styles.text205, ui.styles["193:205"]]}>{ui.labels["193:205"] ?? "바뀜"}</Text>
      <Text numberOfLines={1} style={[styles.text206, ui.styles["193:206"]]}>{ui.labels["193:206"] ?? "연달아 늦으면 남은 돈을 한 번에"}</Text>
      <Text numberOfLines={1} style={[styles.text209, ui.styles["193:209"]]}>{ui.labels["193:209"] ?? "넣지 않음"}</Text>
      <Text numberOfLines={1} style={[styles.text210, ui.styles["193:210"]]}>{ui.labels["193:210"] ?? "2회 연속 미납 시"}</Text>
      <View pointerEvents="none" style={[styles.box211, ui.styles["193:211"]]} />
      <Text numberOfLines={1} style={[styles.text214, ui.styles["193:214"]]}>{ui.labels["193:214"] ?? "갚을 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text217, ui.styles["193:217"]]}>{ui.labels["193:217"] ?? "모의은행 110-***-482910"}</Text>
      <View pointerEvents="none" style={[styles.box218, ui.styles["193:218"]]} />
      <Text numberOfLines={1} style={[styles.text220, ui.styles["193:220"]]}>{ui.labels["193:220"] ?? "상환표"}</Text>
      <Text numberOfLines={1} style={[styles.text223, ui.styles["193:223"]]}>{ui.labels["193:223"] ?? "1회 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text225, ui.styles["193:225"]]}>{ui.labels["193:225"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text227, ui.styles["193:227"]]}>{ui.labels["193:227"] ?? "2회 · 02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text229, ui.styles["193:229"]]}>{ui.labels["193:229"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text231, ui.styles["193:231"]]}>{ui.labels["193:231"] ?? "3회 · 03.31"}</Text>
      <Text numberOfLines={1} style={[styles.text233, ui.styles["193:233"]]}>{ui.labels["193:233"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box234, ui.styles["193:234"]]} />
      <Text numberOfLines={1} style={[styles.text235, ui.styles["193:235"]]}>{ui.labels["193:235"] ?? "총 300,000원 · 이자 0원"}</Text>
      <Text numberOfLines={1} style={[styles.text236, ui.styles["193:236"]]}>{ui.labels["193:236"] ?? "합의하면 협상 기록이 약정서에 함께 붙어요"}</Text>
      <View pointerEvents="none" style={[styles.box237, ui.styles["193:237"]]} />
      <View pointerEvents="none" style={[styles.box238, ui.styles["193:238"]]} />
      <Text numberOfLines={1} style={[styles.text239, ui.styles["193:239"]]}>{ui.labels["193:239"] ?? "고쳐서 역제안"}</Text>
      <View pointerEvents="none" style={[styles.box240, ui.styles["193:240"]]} />
      <Text numberOfLines={1} style={[styles.text241, ui.styles["193:241"]]}>{ui.labels["193:241"] ?? "이 조건으로 합의"}</Text>
      <TouchTarget label={ui.labels["193:158"] ?? "협상 기록 3건 보기"} action="records" style={styles.taptext158} ui={ui} />
      <TouchTarget label={ui.labels["193:239"] ?? "고쳐서 역제안"} action="counter" style={styles.taptext239} ui={ui} />
      <TouchTarget label={ui.labels["193:241"] ?? "이 조건으로 합의"} action="agree" style={styles.taptext241} ui={ui} />
    </Frame>
  );
}
