import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ReportDeposit.styles';
import Graphic0 from '../../../assets/wire/a6136.svg';

export default function ReportDeposit({ ui }) {
  return (
    <Frame width={390} height={1240} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box176, ui.styles["246:176"]]} />
      <View pointerEvents="none" style={[styles.box177, ui.styles["246:177"]]} />
      <View pointerEvents="none" style={[styles.art178, ui.styles["246:178-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text180, ui.styles["246:180"]]}>{ui.labels["246:180"] ?? "따로 보낸 돈 알리기"}</Text>
      <View pointerEvents="none" style={[styles.box181, ui.styles["246:181"]]} />
      <Text numberOfLines={1} style={[styles.text182, ui.styles["246:182"]]}>{ui.labels["246:182"] ?? "빌린 사람 · 이하린의 화면"}</Text>
      <Text numberOfLines={1} style={[styles.text183, ui.styles["246:183"]]}>{ui.labels["246:183"] ?? "NOD 말고 따로 보낸 돈을"}</Text>
      <Text numberOfLines={1} style={[styles.text184, ui.styles["246:184"]]}>{ui.labels["246:184"] ?? "박도윤님에게 알려요"}</Text>
      <Text numberOfLines={1} style={[styles.text185, ui.styles["246:185"]]}>{ui.labels["246:185"] ?? "다른 은행 앱이나 현금으로 갚았다면, 박도윤님이 받은 걸"}</Text>
      <Text numberOfLines={1} style={[styles.text186, ui.styles["246:186"]]}>{ui.labels["246:186"] ?? "확인해야 회차에 들어가요."}</Text>
      <View pointerEvents="none" style={[styles.box187, ui.styles["246:187"]]} />
      <Text numberOfLines={1} style={[styles.text188, ui.styles["246:188"]]}>{ui.labels["246:188"] ?? "어느 회차 돈인가요"}</Text>
      <View pointerEvents="none" style={[styles.box189, ui.styles["246:189"]]} />
      <Text numberOfLines={1} style={[styles.text190, ui.styles["246:190"]]}>{ui.labels["246:190"] ?? "2회차 · 02.28 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box191, ui.styles["246:191"]]} />
      <Text numberOfLines={1} style={[styles.text192, ui.styles["246:192"]]}>{ui.labels["246:192"] ?? "3회차 · 03.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box193, ui.styles["246:193"]]} />
      <Text numberOfLines={1} style={[styles.text194, ui.styles["246:194"]]}>{ui.labels["246:194"] ?? "보낸 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text195, ui.styles["246:195"]]}>{ui.labels["246:195"] ?? "금액"}</Text>
      <View pointerEvents="none" style={[styles.box196, ui.styles["246:196"]]} />
      <Text numberOfLines={1} style={[styles.text197, ui.styles["246:197"]]}>{ui.labels["246:197"] ?? "80,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text198, ui.styles["246:198"]]}>{ui.labels["246:198"] ?? "보낸 날짜·시각"}</Text>
      <View pointerEvents="none" style={[styles.box199, ui.styles["246:199"]]} />
      <Text numberOfLines={1} style={[styles.text200, ui.styles["246:200"]]}>{ui.labels["246:200"] ?? "2027.02.26 14:02"}</Text>
      <Text numberOfLines={1} style={[styles.text201, ui.styles["246:201"]]}>{ui.labels["246:201"] ?? "보낸 방법"}</Text>
      <View pointerEvents="none" style={[styles.box202, ui.styles["246:202"]]} />
      <Text numberOfLines={1} style={[styles.text203, ui.styles["246:203"]]}>{ui.labels["246:203"] ?? "다른 은행 앱"}</Text>
      <View pointerEvents="none" style={[styles.box204, ui.styles["246:204"]]} />
      <Text numberOfLines={1} style={[styles.text205, ui.styles["246:205"]]}>{ui.labels["246:205"] ?? "현금"}</Text>
      <View pointerEvents="none" style={[styles.box206, ui.styles["246:206"]]} />
      <Text numberOfLines={1} style={[styles.text207, ui.styles["246:207"]]}>{ui.labels["246:207"] ?? "그 밖에"}</Text>
      <View pointerEvents="none" style={[styles.box208, ui.styles["246:208"]]} />
      <Text numberOfLines={1} style={[styles.text209, ui.styles["246:209"]]}>{ui.labels["246:209"] ?? "받은 계좌 · 박도윤 · 모의은행 110-"}</Text>
      <Text numberOfLines={1} style={[styles.text210, ui.styles["246:210"]]}>{ui.labels["246:210"] ?? "***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text211, ui.styles["246:211"]]}>{ui.labels["246:211"] ?? "약정서 계"}</Text>
      <Text numberOfLines={1} style={[styles.text212, ui.styles["246:212"]]}>{ui.labels["246:212"] ?? "좌"}</Text>
      <Text numberOfLines={1} style={[styles.text213, ui.styles["246:213"]]}>{ui.labels["246:213"] ?? "박도윤님 입금 내역에는 ‘보낸 사람 이하린’으로 보여요. 다른"}</Text>
      <Text numberOfLines={1} style={[styles.text214, ui.styles["246:214"]]}>{ui.labels["246:214"] ?? "이름으로 보냈다면 그 이름을 적어 주세요."}</Text>
      <View pointerEvents="none" style={[styles.box215, ui.styles["246:215"]]} />
      <Text numberOfLines={1} style={[styles.text216, ui.styles["246:216"]]}>{ui.labels["246:216"] ?? "박도윤님이 확인하면"}</Text>
      <Text numberOfLines={1} style={[styles.text217, ui.styles["246:217"]]}>{ui.labels["246:217"] ?? "2회차 갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text218, ui.styles["246:218"]]}>{ui.labels["246:218"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text219, ui.styles["246:219"]]}>{ui.labels["246:219"] ?? "따로 보낸 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text220, ui.styles["246:220"]]}>{ui.labels["246:220"] ?? "80,000원"}</Text>
      <View pointerEvents="none" style={[styles.box221, ui.styles["246:221"]]} />
      <Text numberOfLines={1} style={[styles.text222, ui.styles["246:222"]]}>{ui.labels["246:222"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text223, ui.styles["246:223"]]}>{ui.labels["246:223"] ?? "일부 납부 · 20,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box224, ui.styles["246:224"]]} />
      <Text numberOfLines={1} style={[styles.text225, ui.styles["246:225"]]}>{ui.labels["246:225"] ?? "· 알리기만 해서는 갚은 걸로 기록되지 않아요. 돈을 받은"}</Text>
      <Text numberOfLines={1} style={[styles.text226, ui.styles["246:226"]]}>{ui.labels["246:226"] ?? "박도윤님이 자기 입금 내역에서 확인해야 회차에 들어가요"}</Text>
      <Text numberOfLines={1} style={[styles.text227, ui.styles["246:227"]]}>{ui.labels["246:227"] ?? "· 확인 전까지 2회차는 ‘예정’ 그대로이고, 기한(02.28)도 바뀌지"}</Text>
      <Text numberOfLines={1} style={[styles.text228, ui.styles["246:228"]]}>{ui.labels["246:228"] ?? "않아요"}</Text>
      <Text numberOfLines={1} style={[styles.text229, ui.styles["246:229"]]}>{ui.labels["246:229"] ?? "· 알린 내용은 원장에 ‘이하린님이 알림’으로 남아요"}</Text>
      <View pointerEvents="none" style={[styles.box230, ui.styles["246:230"]]} />
      <View pointerEvents="none" style={[styles.box231, ui.styles["246:231"]]} />
      <View pointerEvents="none" style={[styles.box232, ui.styles["246:232"]]} />
      <Text numberOfLines={1} style={[styles.text233, ui.styles["246:233"]]}>{ui.labels["246:233"] ?? "박도윤님에게 알리기"}</Text>
      <View pointerEvents="none" style={[styles.box234, ui.styles["246:234"]]} />
      <Text numberOfLines={1} style={[styles.text235, ui.styles["246:235"]]}>{ui.labels["246:235"] ?? "취소"}</Text>
      <TouchTarget label={ui.labels["246:233"] ?? "박도윤님에게 알리기"} action="reportDeposit" style={styles.taptext233} ui={ui} />
      <TouchTarget label={ui.labels["246:235"] ?? "취소"} action="back" style={styles.taptext235} ui={ui} />
    </Frame>
  );
}
