import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Repay.styles';

export default function Repay({ ui }) {
  return (
    <Frame width={390} height={865} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box106, ui.styles["147:106"]]} />
      <View pointerEvents="none" style={[styles.box107, ui.styles["147:107"]]} />
      <Text numberOfLines={1} style={[styles.text108, ui.styles["147:108"]]}>{ui.labels["147:108"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text109, ui.styles["147:109"]]}>{ui.labels["147:109"] ?? "갚기"}</Text>
      <View pointerEvents="none" style={[styles.box116, ui.styles["147:116"]]} />
      <Text numberOfLines={1} style={[styles.text110, ui.styles["147:110"]]}>{ui.labels["147:110"] ?? "빌린 사람 · 이하린의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box111, ui.styles["147:111"]]} />
      <Text numberOfLines={1} style={[styles.text112, ui.styles["147:112"]]}>{ui.labels["147:112"] ?? "2회차"}</Text>
      <Text style={[styles.text114, ui.styles["147:114"]]}>{ui.labels["147:114"] ?? "박도윤님께\n20,000원 보내기"}</Text>
      <Text style={[styles.text115, ui.styles["147:115"]]}>{ui.labels["147:115"] ?? "앱으로 보내면 2회차 상환으로 바로 기록돼요. 따로 확인할 필요가 없어요."}</Text>
      <View pointerEvents="none" style={[styles.box125, ui.styles["147:125"]]} />
      <Text numberOfLines={1} style={[styles.text117, ui.styles["147:117"]]}>{ui.labels["147:117"] ?? "보낼 금액"}</Text>
      <Text numberOfLines={1} style={[styles.text118, ui.styles["147:118"]]}>{ui.labels["147:118"] ?? "20,000원"}</Text>
      <View pointerEvents="none" style={[styles.box119, ui.styles["147:119"]]} />
      <Text numberOfLines={1} style={[styles.text120, ui.styles["147:120"]]}>{ui.labels["147:120"] ?? "남은 돈 전부"}</Text>
      <View pointerEvents="none" style={[styles.box121, ui.styles["147:121"]]} />
      <Text numberOfLines={1} style={[styles.text122, ui.styles["147:122"]]}>{ui.labels["147:122"] ?? "일부만 보내기"}</Text>
      <Text numberOfLines={1} style={[styles.text124, ui.styles["147:124"]]}>{ui.labels["147:124"] ?? "2회차 50,000원 중 30,000원은 이미 갚은 것으로 확인됐어요"}</Text>
      <View pointerEvents="none" style={[styles.box131, ui.styles["147:131"]]} />
      <Text numberOfLines={1} style={[styles.text126, ui.styles["147:126"]]}>{ui.labels["147:126"] ?? "받는 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text127, ui.styles["147:127"]]}>{ui.labels["147:127"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text128, ui.styles["147:128"]]}>{ui.labels["147:128"] ?? "모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text130, ui.styles["147:130"]]}>{ui.labels["147:130"] ?? "약정서에 적힌 계좌라 바꿀 수 없어요"}</Text>
      <View pointerEvents="none" style={[styles.box139, ui.styles["147:139"]]} />
      <Text numberOfLines={1} style={[styles.text132, ui.styles["147:132"]]}>{ui.labels["147:132"] ?? "내 출금 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text133, ui.styles["147:133"]]}>{ui.labels["147:133"] ?? "모의은행"}</Text>
      <Text numberOfLines={1} style={[styles.text134, ui.styles["147:134"]]}>{ui.labels["147:134"] ?? "220-***-118734"}</Text>
      <Text numberOfLines={1} style={[styles.text136, ui.styles["147:136"]]}>{ui.labels["147:136"] ?? "출금 가능"}</Text>
      <Text numberOfLines={1} style={[styles.text137, ui.styles["147:137"]]}>{ui.labels["147:137"] ?? "1,240,000원"}</Text>
      <View pointerEvents="none" style={[styles.box141, ui.styles["147:141"]]} />
      <Text style={[styles.text140, ui.styles["147:140"]]}>{ui.labels["147:140"] ?? "· 보내기를 누르면 간편 비밀번호로 한 번 더 확인해요\n· 보내면 박도윤님에게 바로 알림이 가고, 영수증이 장부에 남아요"}</Text>
      <View pointerEvents="none" style={[styles.box146, ui.styles["147:146"]]} />
      <View pointerEvents="none" style={[styles.box143, ui.styles["147:143"]]} />
      <Text numberOfLines={1} style={[styles.text144, ui.styles["147:144"]]}>{ui.labels["147:144"] ?? "20,000원 보내기"}</Text>
      <TouchTarget label={ui.labels["147:122"] ?? "일부만 보내기"} action="repay" style={styles.taptext122} ui={ui} />
      <TouchTarget label={ui.labels["147:144"] ?? "20,000원 보내기"} action="repay" style={styles.taptext144} ui={ui} />
    </Frame>
  );
}
