import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PaymentComplete.styles';

export default function PaymentComplete({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box147, ui.styles["147:147"]]} />
      <View pointerEvents="none" style={[styles.box148, ui.styles["147:148"]]} />
      <Text numberOfLines={1} style={[styles.text149, ui.styles["147:149"]]}>{ui.labels["147:149"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text150, ui.styles["147:150"]]}>{ui.labels["147:150"] ?? "송금 완료"}</Text>
      <View pointerEvents="none" style={[styles.box157, ui.styles["147:157"]]} />
      <Text numberOfLines={1} style={[styles.text151, ui.styles["147:151"]]}>{ui.labels["147:151"] ?? "빌린 사람 · 이하린의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box152, ui.styles["147:152"]]} />
      <Text numberOfLines={1} style={[styles.text153, ui.styles["147:153"]]}>{ui.labels["147:153"] ?? "송금 완료"}</Text>
      <Text numberOfLines={1} style={[styles.text155, ui.styles["147:155"]]}>{ui.labels["147:155"] ?? "20,000원을 보냈어요"}</Text>
      <Text numberOfLines={1} style={[styles.text156, ui.styles["147:156"]]}>{ui.labels["147:156"] ?? "2회차를 모두 갚았어요."}</Text>
      <View pointerEvents="none" style={[styles.box171, ui.styles["147:171"]]} />
      <Text numberOfLines={1} style={[styles.text158, ui.styles["147:158"]]}>{ui.labels["147:158"] ?? "송금 내역"}</Text>
      <Text numberOfLines={1} style={[styles.text159, ui.styles["147:159"]]}>{ui.labels["147:159"] ?? "받는 사람"}</Text>
      <Text numberOfLines={1} style={[styles.text160, ui.styles["147:160"]]}>{ui.labels["147:160"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text162, ui.styles["147:162"]]}>{ui.labels["147:162"] ?? "보낸 시각"}</Text>
      <Text numberOfLines={1} style={[styles.text163, ui.styles["147:163"]]}>{ui.labels["147:163"] ?? "03.01 09:40"}</Text>
      <Text numberOfLines={1} style={[styles.text165, ui.styles["147:165"]]}>{ui.labels["147:165"] ?? "거래번호"}</Text>
      <Text numberOfLines={1} style={[styles.text166, ui.styles["147:166"]]}>{ui.labels["147:166"] ?? "T-20270301-0412"}</Text>
      <Text numberOfLines={1} style={[styles.text168, ui.styles["147:168"]]}>{ui.labels["147:168"] ?? "출금 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text169, ui.styles["147:169"]]}>{ui.labels["147:169"] ?? "모의은행 220-***-118734"}</Text>
      <View pointerEvents="none" style={[styles.box183, ui.styles["147:183"]]} />
      <Text numberOfLines={1} style={[styles.text172, ui.styles["147:172"]]}>{ui.labels["147:172"] ?? "2회차 (02.28 기한)"}</Text>
      <Text numberOfLines={1} style={[styles.text173, ui.styles["147:173"]]}>{ui.labels["147:173"] ?? "02.26 앱 밖 입금 · 확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text174, ui.styles["147:174"]]}>{ui.labels["147:174"] ?? "30,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text176, ui.styles["147:176"]]}>{ui.labels["147:176"] ?? "03.01 NOD 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text177, ui.styles["147:177"]]}>{ui.labels["147:177"] ?? "20,000원"}</Text>
      <View pointerEvents="none" style={[styles.box179, ui.styles["147:179"]]} />
      <Text numberOfLines={1} style={[styles.text180, ui.styles["147:180"]]}>{ui.labels["147:180"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text181, ui.styles["147:181"]]}>{ui.labels["147:181"] ?? "완납"}</Text>
      <View pointerEvents="none" style={[styles.box185, ui.styles["147:185"]]} />
      <Text style={[styles.text184, ui.styles["147:184"]]}>{ui.labels["147:184"] ?? "· 박도윤님에게 알림을 보냈어요\n· Agent가 열어 둔 2회차 정산 건도 함께 닫혀요\n· 다음 상환: 3회차 03.31 · 50,000원"}</Text>
      <View pointerEvents="none" style={[styles.box192, ui.styles["147:192"]]} />
      <View pointerEvents="none" style={[styles.box187, ui.styles["147:187"]]} />
      <Text numberOfLines={1} style={[styles.text188, ui.styles["147:188"]]}>{ui.labels["147:188"] ?? "영수증 보기"}</Text>
      <View pointerEvents="none" style={[styles.box189, ui.styles["147:189"]]} />
      <Text numberOfLines={1} style={[styles.text190, ui.styles["147:190"]]}>{ui.labels["147:190"] ?? "장부로"}</Text>
      <TouchTarget label={ui.labels["147:188"] ?? "영수증 보기"} action="S18" style={styles.taptext188} ui={ui} />
      <TouchTarget label={ui.labels["147:190"] ?? "장부로"} action="portfolio" style={styles.taptext190} ui={ui} />
    </Frame>
  );
}
