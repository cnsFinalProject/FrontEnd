import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Offer.styles';
import Graphic0 from '../../../assets/wire/a6136.svg';

export default function Offer({ ui }) {
  return (
    <Frame width={390} height={1480} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["267:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["267:3"]]} />
      <View pointerEvents="none" style={[styles.art4, ui.styles["267:4-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text6, ui.styles["267:6"]]}>{ui.labels["267:6"] ?? "조건 제안하기"}</Text>
      <View pointerEvents="none" style={[styles.box7, ui.styles["267:7"]]} />
      <View pointerEvents="none" style={[styles.box8, ui.styles["267:8"]]} />
      <Text numberOfLines={1} style={[styles.text9, ui.styles["267:9"]]}>{ui.labels["267:9"] ?? "✓ 1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box10, ui.styles["267:10"]]} />
      <Text numberOfLines={1} style={[styles.text11, ui.styles["267:11"]]}>{ui.labels["267:11"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.box12, ui.styles["267:12"]]} />
      <Text numberOfLines={1} style={[styles.text13, ui.styles["267:13"]]}>{ui.labels["267:13"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["267:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["267:15"]]}>{ui.labels["267:15"] ?? "4 송금"}</Text>
      <View pointerEvents="none" style={[styles.box16, ui.styles["267:16"]]} />
      <Text numberOfLines={1} style={[styles.text17, ui.styles["267:17"]]}>{ui.labels["267:17"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text18, ui.styles["267:18"]]}>{ui.labels["267:18"] ?? "님과 연결됐어요 · 실명 인증됨"}</Text>
      <Text numberOfLines={1} style={[styles.text19, ui.styles["267:19"]]}>{ui.labels["267:19"] ?? "내가 먼저 제안하고, 상대가 바꿔서 다시 제안할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box20, ui.styles["267:20"]]} />
      <Text numberOfLines={1} style={[styles.text21, ui.styles["267:21"]]}>{ui.labels["267:21"] ?? "빌려줄 돈 (원금)"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["267:22"]]} />
      <View pointerEvents="none" style={[styles.box23, ui.styles["267:23"]]} />
      <Text numberOfLines={1} style={[styles.text24, ui.styles["267:24"]]}>{ui.labels["267:24"] ?? "300,000"}</Text>
      <Text numberOfLines={1} style={[styles.text25, ui.styles["267:25"]]}>{ui.labels["267:25"] ?? "원"}</Text>
      <Text numberOfLines={1} style={[styles.text26, ui.styles["267:26"]]}>{ui.labels["267:26"] ?? "삼십만 원"}</Text>
      <View pointerEvents="none" style={[styles.box27, ui.styles["267:27"]]} />
      <Text numberOfLines={1} style={[styles.text28, ui.styles["267:28"]]}>{ui.labels["267:28"] ?? "보낼 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text29, ui.styles["267:29"]]}>{ui.labels["267:29"] ?? "모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["267:30"]]}>{ui.labels["267:30"] ?? "잔액"}</Text>
      <Text numberOfLines={1} style={[styles.text31, ui.styles["267:31"]]}>{ui.labels["267:31"] ?? "1,240,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["267:32"]]}>{ui.labels["267:32"] ?? "둘 다 서명한 뒤 4단계(송금)에서 이 계좌로 보내요. 지금은 돈이"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["267:33"]]}>{ui.labels["267:33"] ?? "나가지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box34, ui.styles["267:34"]]} />
      <Text numberOfLines={1} style={[styles.text35, ui.styles["267:35"]]}>{ui.labels["267:35"] ?? "갚는 방식"}</Text>
      <View pointerEvents="none" style={[styles.box36, ui.styles["267:36"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["267:37"]]}>{ui.labels["267:37"] ?? "한 번에"}</Text>
      <View pointerEvents="none" style={[styles.box38, ui.styles["267:38"]]} />
      <Text numberOfLines={1} style={[styles.text39, ui.styles["267:39"]]}>{ui.labels["267:39"] ?? "나눠서 2회"}</Text>
      <Text numberOfLines={1} style={[styles.text40, ui.styles["267:40"]]}>{ui.labels["267:40"] ?? "첫 상환일"}</Text>
      <View pointerEvents="none" style={[styles.box41, ui.styles["267:41"]]} />
      <Text numberOfLines={1} style={[styles.text42, ui.styles["267:42"]]}>{ui.labels["267:42"] ?? "2026.12.31"}</Text>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["267:43"]]}>{ui.labels["267:43"] ?? "다음 회차"}</Text>
      <Text numberOfLines={1} style={[styles.text44, ui.styles["267:44"]]}>{ui.labels["267:44"] ?? "매월 말일"}</Text>
      <Text numberOfLines={1} style={[styles.text45, ui.styles["267:45"]]}>{ui.labels["267:45"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box46, ui.styles["267:46"]]} />
      <Text numberOfLines={1} style={[styles.text47, ui.styles["267:47"]]}>{ui.labels["267:47"] ?? "상환 받을 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["267:48"]]}>{ui.labels["267:48"] ?? "모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text49, ui.styles["267:49"]]}>{ui.labels["267:49"] ?? "예금주 박도윤 · 실명 확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text50, ui.styles["267:50"]]}>{ui.labels["267:50"] ?? "변경"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["267:51"]]} />
      <Text numberOfLines={1} style={[styles.text52, ui.styles["267:52"]]}>{ui.labels["267:52"] ?? "추가 조건 · 차용증에 흔히 넣는 것"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["267:53"]]} />
      <Text numberOfLines={1} style={[styles.text54, ui.styles["267:54"]]}>{ui.labels["267:54"] ?? "선택"}</Text>
      <Text numberOfLines={1} style={[styles.text55, ui.styles["267:55"]]}>{ui.labels["267:55"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["267:56"]]}>{ui.labels["267:56"] ?? "켜면 연 %로 정해요 · 최대 연 20%"}</Text>
      <View pointerEvents="none" style={[styles.box57, ui.styles["267:57"]]} />
      <View pointerEvents="none" style={[styles.box58, ui.styles["267:58"]]} />
      <View pointerEvents="none" style={[styles.box59, ui.styles["267:59"]]} />
      <Text numberOfLines={1} style={[styles.text60, ui.styles["267:60"]]}>{ui.labels["267:60"] ?? "늦게 갚으면"}</Text>
      <Text numberOfLines={1} style={[styles.text61, ui.styles["267:61"]]}>{ui.labels["267:61"] ?? "지연손해금 · 직접 정해도 연 20%까지"}</Text>
      <Text numberOfLines={1} style={[styles.text62, ui.styles["267:62"]]}>{ui.labels["267:62"] ?? "법정 연 5%"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["267:63"]]}>{ui.labels["267:63"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box64, ui.styles["267:64"]]} />
      <Text numberOfLines={1} style={[styles.text65, ui.styles["267:65"]]}>{ui.labels["267:65"] ?? "남은 돈 한 번에 청구"}</Text>
      <Text numberOfLines={1} style={[styles.text66, ui.styles["267:66"]]}>{ui.labels["267:66"] ?? "기한이익상실 · 3회 이상 나눌 때 쓸 수 있어요"}</Text>
      <View pointerEvents="none" style={[styles.box67, ui.styles["267:67"]]} />
      <View pointerEvents="none" style={[styles.box68, ui.styles["267:68"]]} />
      <View pointerEvents="none" style={[styles.box69, ui.styles["267:69"]]} />
      <Text numberOfLines={1} style={[styles.text70, ui.styles["267:70"]]}>{ui.labels["267:70"] ?? "미리 갚기"}</Text>
      <Text numberOfLines={1} style={[styles.text71, ui.styles["267:71"]]}>{ui.labels["267:71"] ?? "언제든 일부·전부 · 수수료 없음"}</Text>
      <Text numberOfLines={1} style={[styles.text72, ui.styles["267:72"]]}>{ui.labels["267:72"] ?? "항상 허용"}</Text>
      <Text numberOfLines={1} style={[styles.text73, ui.styles["267:73"]]}>{ui.labels["267:73"] ?? "🔒"}</Text>
      <View pointerEvents="none" style={[styles.box74, ui.styles["267:74"]]} />
      <Text numberOfLines={1} style={[styles.text75, ui.styles["267:75"]]}>{ui.labels["267:75"] ?? "용도 메모"}</Text>
      <Text numberOfLines={1} style={[styles.text76, ui.styles["267:76"]]}>{ui.labels["267:76"] ?? "예) 이사 보증금 · 차용증에 그대로 적혀요"}</Text>
      <Text numberOfLines={1} style={[styles.text77, ui.styles["267:77"]]}>{ui.labels["267:77"] ?? "적기"}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["267:78"]]}>{ui.labels["267:78"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box79, ui.styles["267:79"]]} />
      <Text numberOfLines={1} style={[styles.text80, ui.styles["267:80"]]}>{ui.labels["267:80"] ?? "상환표 미리보기"}</Text>
      <View pointerEvents="none" style={[styles.box81, ui.styles["267:81"]]} />
      <Text numberOfLines={1} style={[styles.text82, ui.styles["267:82"]]}>{ui.labels["267:82"] ?? "조건 바꾸면 바로 다시 계산"}</Text>
      <Text numberOfLines={1} style={[styles.text83, ui.styles["267:83"]]}>{ui.labels["267:83"] ?? "회차"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["267:84"]]}>{ui.labels["267:84"] ?? "원금"}</Text>
      <Text numberOfLines={1} style={[styles.text85, ui.styles["267:85"]]}>{ui.labels["267:85"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text86, ui.styles["267:86"]]}>{ui.labels["267:86"] ?? "갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text87, ui.styles["267:87"]]}>{ui.labels["267:87"] ?? "1회 · 12.31"}</Text>
      <Text numberOfLines={1} style={[styles.text88, ui.styles["267:88"]]}>{ui.labels["267:88"] ?? "150,000"}</Text>
      <Text numberOfLines={1} style={[styles.text89, ui.styles["267:89"]]}>{ui.labels["267:89"] ?? "0"}</Text>
      <Text numberOfLines={1} style={[styles.text90, ui.styles["267:90"]]}>{ui.labels["267:90"] ?? "150,000"}</Text>
      <Text numberOfLines={1} style={[styles.text91, ui.styles["267:91"]]}>{ui.labels["267:91"] ?? "2회 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text92, ui.styles["267:92"]]}>{ui.labels["267:92"] ?? "150,000"}</Text>
      <Text numberOfLines={1} style={[styles.text93, ui.styles["267:93"]]}>{ui.labels["267:93"] ?? "0"}</Text>
      <Text numberOfLines={1} style={[styles.text94, ui.styles["267:94"]]}>{ui.labels["267:94"] ?? "150,000"}</Text>
      <View pointerEvents="none" style={[styles.box95, ui.styles["267:95"]]} />
      <Text numberOfLines={1} style={[styles.text96, ui.styles["267:96"]]}>{ui.labels["267:96"] ?? "총 이자"}</Text>
      <Text numberOfLines={1} style={[styles.text97, ui.styles["267:97"]]}>{ui.labels["267:97"] ?? "0원"}</Text>
      <Text numberOfLines={1} style={[styles.text98, ui.styles["267:98"]]}>{ui.labels["267:98"] ?? "총 갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text99, ui.styles["267:99"]]}>{ui.labels["267:99"] ?? "300,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text100, ui.styles["267:100"]]}>{ui.labels["267:100"] ?? "다 갚는 날"}</Text>
      <Text numberOfLines={1} style={[styles.text101, ui.styles["267:101"]]}>{ui.labels["267:101"] ?? "2027.01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text102, ui.styles["267:102"]]}>{ui.labels["267:102"] ?? "이 표가 그대로 약정서에 들어가요 · 끝전은 마지막 회차에"}</Text>
      <View pointerEvents="none" style={[styles.box103, ui.styles["267:103"]]} />
      <View pointerEvents="none" style={[styles.box104, ui.styles["267:104"]]} />
      <View pointerEvents="none" style={[styles.box105, ui.styles["267:105"]]} />
      <Text numberOfLines={1} style={[styles.text106, ui.styles["267:106"]]}>{ui.labels["267:106"] ?? "이하린님에게 제안 보내기"}</Text>
      <TouchTarget label={ui.labels["267:24"] ?? "300,000"} action="editTerms" style={styles.taptext24} ui={ui} />
      <TouchTarget label={ui.labels["267:37"] ?? "한 번에"} action="editTerms" style={styles.taptext37} ui={ui} />
      <TouchTarget label={ui.labels["267:39"] ?? "나눠서 2회"} action="editTerms" style={styles.taptext39} ui={ui} />
      <TouchTarget label={ui.labels["267:77"] ?? "적기"} action="editTerms" style={styles.taptext77} ui={ui} />
      <TouchTarget label={ui.labels["267:106"] ?? "이하린님에게 제안 보내기"} action="offer" style={styles.taptext106} ui={ui} />
    </Frame>
  );
}
