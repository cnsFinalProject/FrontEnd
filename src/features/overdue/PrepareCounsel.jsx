import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PrepareCounsel.styles';
import Graphic0 from '../../../assets/wire/89055.svg';
import Graphic1 from '../../../assets/wire/dce50.svg';
import Graphic2 from '../../../assets/wire/fc3a6.svg';

export default function PrepareCounsel({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box187, ui.styles["118:187"]]} />
      <View pointerEvents="none" style={[styles.box188, ui.styles["118:188"]]} />
      <View pointerEvents="none" style={[styles.art189, ui.styles["118:189-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text191, ui.styles["118:191"]]}>{ui.labels["118:191"] ?? "법률 상담"}</Text>
      <View pointerEvents="none" style={[styles.box192, ui.styles["118:192"]]} />
      <Text numberOfLines={1} style={[styles.text193, ui.styles["118:193"]]}>{ui.labels["118:193"] ?? "상담 준비가 끝났어요"}</Text>
      <Text numberOfLines={1} style={[styles.text194, ui.styles["118:194"]]}>{ui.labels["118:194"] ?? "대한법률구조공단 · 전화 132"}</Text>
      <View pointerEvents="none" style={[styles.box195, ui.styles["118:195"]]} />
      <Text numberOfLines={1} style={[styles.text196, ui.styles["118:196"]]}>{ui.labels["118:196"] ?? "상담 때 챙길 것"}</Text>
      <View pointerEvents="none" style={[styles.art197, ui.styles["118:197-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text198, ui.styles["118:198"]]}>{ui.labels["118:198"] ?? "1"}</Text>
      <Text numberOfLines={1} style={[styles.text199, ui.styles["118:199"]]}>{ui.labels["118:199"] ?? "증거 묶음 PDF"}</Text>
      <Text numberOfLines={1} style={[styles.text200, ui.styles["118:200"]]}>{ui.labels["118:200"] ?? "내 휴대폰에 저장했어요"}</Text>
      <View pointerEvents="none" style={[styles.art201, ui.styles["118:201-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text202, ui.styles["118:202"]]}>{ui.labels["118:202"] ?? "2"}</Text>
      <Text numberOfLines={1} style={[styles.text203, ui.styles["118:203"]]}>{ui.labels["118:203"] ?? "신분증"}</Text>
      <Text numberOfLines={1} style={[styles.text204, ui.styles["118:204"]]}>{ui.labels["118:204"] ?? "본인 확인에 필요해요"}</Text>
      <View pointerEvents="none" style={[styles.art205, ui.styles["118:205-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text206, ui.styles["118:206"]]}>{ui.labels["118:206"] ?? "3"}</Text>
      <Text numberOfLines={1} style={[styles.text207, ui.styles["118:207"]]}>{ui.labels["118:207"] ?? "상대방 주소"}</Text>
      <Text numberOfLines={1} style={[styles.text208, ui.styles["118:208"]]}>{ui.labels["118:208"] ?? "지급명령·소송 서류를 보낼 곳이에요"}</Text>
      <View pointerEvents="none" style={[styles.box209, ui.styles["118:209"]]} />
      <Text numberOfLines={1} style={[styles.text210, ui.styles["118:210"]]}>{ui.labels["118:210"] ?? "약속은 이렇게 남아요"}</Text>
      <Text style={[styles.text211, ui.styles["118:211"]]}>{ui.labels["118:211"] ?? "원장에는 '연체'로 그대로 남아요. 상대가 갚으면 바로 '정상'으로 바뀌어요."}</Text>
      <Text numberOfLines={1} style={[styles.text212, ui.styles["118:212"]]}>{ui.labels["118:212"] ?? "상담을 준비한 사실은 상대방에게 알리지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box213, ui.styles["118:213"]]} />
      <View pointerEvents="none" style={[styles.box214, ui.styles["118:214"]]} />
      <View pointerEvents="none" style={[styles.box215, ui.styles["118:215"]]} />
      <Text numberOfLines={1} style={[styles.text216, ui.styles["118:216"]]}>{ui.labels["118:216"] ?? "132 전화 걸기"}</Text>
      <View pointerEvents="none" style={[styles.box217, ui.styles["118:217"]]} />
      <Text numberOfLines={1} style={[styles.text218, ui.styles["118:218"]]}>{ui.labels["118:218"] ?? "약속으로 돌아가기"}</Text>
      <TouchTarget label={ui.labels["118:216"] ?? "132 전화 걸기"} action="external" style={styles.taptext216} ui={ui} />
      <TouchTarget label={ui.labels["118:218"] ?? "약속으로 돌아가기"} action="portfolio" style={styles.taptext218} ui={ui} />
    </Frame>
  );
}
