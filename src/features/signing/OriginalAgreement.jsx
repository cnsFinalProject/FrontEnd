import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './OriginalAgreement.styles';
import Graphic0 from '../../../assets/wire/0d8f8.svg';
import Graphic1 from '../../../assets/wire/a6136.svg';

export default function OriginalAgreement({ ui }) {
  return (
    <Frame width={390} height={1840} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box3, ui.styles["174:3"]]} />
      <View pointerEvents="none" style={[styles.box4, ui.styles["174:4"]]} />
      <View pointerEvents="none" style={[styles.art5, ui.styles["174:5-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["174:7"]]}>{ui.labels["174:7"] ?? "차용증 원문"}</Text>
      <Text numberOfLines={1} style={[styles.text8, ui.styles["174:8"]]}>{ui.labels["174:8"] ?? "1 / 3 읽기"}</Text>
      <View pointerEvents="none" style={[styles.box9, ui.styles["174:9"]]} />
      <View pointerEvents="none" style={[styles.box10, ui.styles["174:10"]]} />
      <Text numberOfLines={1} style={[styles.text11, ui.styles["174:11"]]}>{ui.labels["174:11"] ?? "① 원문 읽기"}</Text>
      <View pointerEvents="none" style={[styles.box12, ui.styles["174:12"]]} />
      <Text numberOfLines={1} style={[styles.text13, ui.styles["174:13"]]}>{ui.labels["174:13"] ?? "② 서명·본인인증"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["174:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["174:15"]]}>{ui.labels["174:15"] ?? "③ 체결 증명"}</Text>
      <View pointerEvents="none" style={[styles.box16, ui.styles["174:16"]]} />
      <Text numberOfLines={1} style={[styles.text17, ui.styles["174:17"]]}>{ui.labels["174:17"] ?? "문서번호 L-20261119-0042"}</Text>
      <Text numberOfLines={1} style={[styles.text18, ui.styles["174:18"]]}>{ui.labels["174:18"] ?? "버전 v3 (3차 합의안)"}</Text>
      <Text numberOfLines={1} style={[styles.text19, ui.styles["174:19"]]}>{ui.labels["174:19"] ?? "차 용 증"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["174:20"]]}>{ui.labels["174:20"] ?? "(금전소비대차 계약서)"}</Text>
      <View pointerEvents="none" style={[styles.box21, ui.styles["174:21"]]} />
      <Text numberOfLines={1} style={[styles.text22, ui.styles["174:22"]]}>{ui.labels["174:22"] ?? "채권자"}</Text>
      <View pointerEvents="none" style={[styles.box23, ui.styles["174:23"]]} />
      <Text numberOfLines={1} style={[styles.text24, ui.styles["174:24"]]}>{ui.labels["174:24"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text25, ui.styles["174:25"]]}>{ui.labels["174:25"] ?? "(본인인증 · 1999.04.12생)"}</Text>
      <View pointerEvents="none" style={[styles.box26, ui.styles["174:26"]]} />
      <Text numberOfLines={1} style={[styles.text27, ui.styles["174:27"]]}>{ui.labels["174:27"] ?? "채무자"}</Text>
      <View pointerEvents="none" style={[styles.box28, ui.styles["174:28"]]} />
      <Text numberOfLines={1} style={[styles.text29, ui.styles["174:29"]]}>{ui.labels["174:29"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["174:30"]]}>{ui.labels["174:30"] ?? "(본인인증 · 1999.03.15생)"}</Text>
      <Text numberOfLines={1} style={[styles.text31, ui.styles["174:31"]]}>{ui.labels["174:31"] ?? "채무자는 채권자로부터 아래와 같이 금전을 차용하였음"}</Text>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["174:32"]]}>{ui.labels["174:32"] ?? "을 확인하고, 다음 조건에 따라 변제할 것을 약정한다."}</Text>
      <View pointerEvents="none" style={[styles.box33, ui.styles["174:33"]]} />
      <View pointerEvents="none" style={[styles.box34, ui.styles["174:34"]]} />
      <Text numberOfLines={1} style={[styles.text35, ui.styles["174:35"]]}>{ui.labels["174:35"] ?? "차용 금액"}</Text>
      <Text numberOfLines={1} style={[styles.text36, ui.styles["174:36"]]}>{ui.labels["174:36"] ?? "금 삼십만 원정 (₩300,000)"}</Text>
      <Text numberOfLines={1} style={[styles.text37, ui.styles["174:37"]]}>{ui.labels["174:37"] ?? "제1조 (차용일 및 지급)"}</Text>
      <Text numberOfLines={1} style={[styles.text38, ui.styles["174:38"]]}>{ui.labels["174:38"] ?? "차용일은 2026년 11월 19일로"}</Text>
      <Text numberOfLines={1} style={[styles.text39, ui.styles["174:39"]]}>{ui.labels["174:39"] ?? "하며, 채권자는 채무자 명의 계좌(모의은행 220-"}</Text>
      <Text numberOfLines={1} style={[styles.text40, ui.styles["174:40"]]}>{ui.labels["174:40"] ?? "***-118204)로 위 금액을 이체하여 지급한다. 이체가 확"}</Text>
      <Text numberOfLines={1} style={[styles.text41, ui.styles["174:41"]]}>{ui.labels["174:41"] ?? "인된 때 대여가 실행된 것으로 본다."}</Text>
      <Text numberOfLines={1} style={[styles.text42, ui.styles["174:42"]]}>{ui.labels["174:42"] ?? "제2조 (이자)"}</Text>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["174:43"]]}>{ui.labels["174:43"] ?? "이자는 없는 것으로 한다(연 0%). 차용금"}</Text>
      <Text numberOfLines={1} style={[styles.text44, ui.styles["174:44"]]}>{ui.labels["174:44"] ?? "의 용도는 생활비로 한다."}</Text>
      <Text numberOfLines={1} style={[styles.text45, ui.styles["174:45"]]}>{ui.labels["174:45"] ?? "제3조 (변제 방법)"}</Text>
      <Text numberOfLines={1} style={[styles.text46, ui.styles["174:46"]]}>{ui.labels["174:46"] ?? "채무자는 다음과 같이 3회에 나누어"}</Text>
      <Text numberOfLines={1} style={[styles.text47, ui.styles["174:47"]]}>{ui.labels["174:47"] ?? "채권자 명의 계좌(모의은행 110-***-482910)로 변제한"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["174:48"]]}>{ui.labels["174:48"] ?? "다."}</Text>
      <View pointerEvents="none" style={[styles.box49, ui.styles["174:49"]]} />
      <View pointerEvents="none" style={[styles.box50, ui.styles["174:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["174:51"]]}>{ui.labels["174:51"] ?? "회차"}</Text>
      <View pointerEvents="none" style={[styles.box52, ui.styles["174:52"]]} />
      <Text numberOfLines={1} style={[styles.text53, ui.styles["174:53"]]}>{ui.labels["174:53"] ?? "변제일"}</Text>
      <View pointerEvents="none" style={[styles.box54, ui.styles["174:54"]]} />
      <Text numberOfLines={1} style={[styles.text55, ui.styles["174:55"]]}>{ui.labels["174:55"] ?? "금액"}</Text>
      <View pointerEvents="none" style={[styles.box56, ui.styles["174:56"]]} />
      <Text numberOfLines={1} style={[styles.text57, ui.styles["174:57"]]}>{ui.labels["174:57"] ?? "1"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["174:58"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["174:59"]]}>{ui.labels["174:59"] ?? "2027. 1. 31."}</Text>
      <View pointerEvents="none" style={[styles.box60, ui.styles["174:60"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["174:61"]]}>{ui.labels["174:61"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box62, ui.styles["174:62"]]} />
      <Text numberOfLines={1} style={[styles.text63, ui.styles["174:63"]]}>{ui.labels["174:63"] ?? "2"}</Text>
      <View pointerEvents="none" style={[styles.box64, ui.styles["174:64"]]} />
      <Text numberOfLines={1} style={[styles.text65, ui.styles["174:65"]]}>{ui.labels["174:65"] ?? "2027. 2. 28."}</Text>
      <View pointerEvents="none" style={[styles.box66, ui.styles["174:66"]]} />
      <Text numberOfLines={1} style={[styles.text67, ui.styles["174:67"]]}>{ui.labels["174:67"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box68, ui.styles["174:68"]]} />
      <Text numberOfLines={1} style={[styles.text69, ui.styles["174:69"]]}>{ui.labels["174:69"] ?? "3"}</Text>
      <View pointerEvents="none" style={[styles.box70, ui.styles["174:70"]]} />
      <Text numberOfLines={1} style={[styles.text71, ui.styles["174:71"]]}>{ui.labels["174:71"] ?? "2027. 3. 31."}</Text>
      <View pointerEvents="none" style={[styles.box72, ui.styles["174:72"]]} />
      <Text numberOfLines={1} style={[styles.text73, ui.styles["174:73"]]}>{ui.labels["174:73"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["174:74"]]}>{ui.labels["174:74"] ?? "제4조 (미리 갚기 및 충당)"}</Text>
      <Text numberOfLines={1} style={[styles.text75, ui.styles["174:75"]]}>{ui.labels["174:75"] ?? "채무자는 언제든지 남은 채"}</Text>
      <Text numberOfLines={1} style={[styles.text76, ui.styles["174:76"]]}>{ui.labels["174:76"] ?? "무의 전부 또는 일부를 수수료 없이 미리 갚을 수 있다."}</Text>
      <Text numberOfLines={1} style={[styles.text77, ui.styles["174:77"]]}>{ui.labels["174:77"] ?? "갚은 돈은 지연손해금, 이자, 원금의 순서로 충당한다."}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["174:78"]]}>{ui.labels["174:78"] ?? "제5조 (지연손해금)"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["174:79"]]}>{ui.labels["174:79"] ?? "변제일까지 갚지 않은 금액에 대하"}</Text>
      <Text numberOfLines={1} style={[styles.text80, ui.styles["174:80"]]}>{ui.labels["174:80"] ?? "여는 그다음 날부터 다 갚는 날까지 연 5%의 지연손해"}</Text>
      <Text numberOfLines={1} style={[styles.text81, ui.styles["174:81"]]}>{ui.labels["174:81"] ?? "금을 더하여 지급한다."}</Text>
      <Text numberOfLines={1} style={[styles.text82, ui.styles["174:82"]]}>{ui.labels["174:82"] ?? "제6조 (기한의 이익 상실)"}</Text>
      <Text numberOfLines={1} style={[styles.text83, ui.styles["174:83"]]}>{ui.labels["174:83"] ?? "채무자가 연속하여 2회 이상"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["174:84"]]}>{ui.labels["174:84"] ?? "변제를 지체한 때에는 채권자의 청구에 따라 남은 채무"}</Text>
      <Text numberOfLines={1} style={[styles.text85, ui.styles["174:85"]]}>{ui.labels["174:85"] ?? "전액을 즉시 변제하여야 한다."}</Text>
      <Text numberOfLines={1} style={[styles.text86, ui.styles["174:86"]]}>{ui.labels["174:86"] ?? "제7조 (전자문서 및 전자서명)"}</Text>
      <Text numberOfLines={1} style={[styles.text87, ui.styles["174:87"]]}>{ui.labels["174:87"] ?? "이 계약은 「전자문서 및"}</Text>
      <Text numberOfLines={1} style={[styles.text88, ui.styles["174:88"]]}>{ui.labels["174:88"] ?? "전자거래 기본법」에 따른 전자문서로 작성하며, 당사"}</Text>
      <Text numberOfLines={1} style={[styles.text89, ui.styles["174:89"]]}>{ui.labels["174:89"] ?? "자는 「전자서명법」에 따른 전자서명으로 기명날인을"}</Text>
      <Text numberOfLines={1} style={[styles.text90, ui.styles["174:90"]]}>{ui.labels["174:90"] ?? "갈음한다. 서명 완료 시점의 문서 지문(SHA-256)과 일"}</Text>
      <Text numberOfLines={1} style={[styles.text91, ui.styles["174:91"]]}>{ui.labels["174:91"] ?? "치하는 문서만 원본으로 본다."}</Text>
      <Text numberOfLines={1} style={[styles.text92, ui.styles["174:92"]]}>{ui.labels["174:92"] ?? "제8조 (체결 방식)"}</Text>
      <Text numberOfLines={1} style={[styles.text93, ui.styles["174:93"]]}>{ui.labels["174:93"] ?? "이 계약은 당사자가 직접 만나 일회"}</Text>
      <Text numberOfLines={1} style={[styles.text94, ui.styles["174:94"]]}>{ui.labels["174:94"] ?? "용 QR 스캔과 블루투스 근접 확인을 거친 뒤 각자의 기"}</Text>
      <Text numberOfLines={1} style={[styles.text95, ui.styles["174:95"]]}>{ui.labels["174:95"] ?? "기에서 전자서명하는 방식으로 체결하였다. 근접 확인"}</Text>
      <Text numberOfLines={1} style={[styles.text96, ui.styles["174:96"]]}>{ui.labels["174:96"] ?? "기록(세션 번호·신호 세기·시각), 협상 기록(1~3차 제안)"}</Text>
      <Text numberOfLines={1} style={[styles.text97, ui.styles["174:97"]]}>{ui.labels["174:97"] ?? "및 제1조에 따른 이체 기록은 부속서류로서 이 계약과"}</Text>
      <Text numberOfLines={1} style={[styles.text98, ui.styles["174:98"]]}>{ui.labels["174:98"] ?? "하나의 문서번호로 보관한다."}</Text>
      <Text numberOfLines={1} style={[styles.text99, ui.styles["174:99"]]}>{ui.labels["174:99"] ?? "2026년 11월 19일"}</Text>
      <View pointerEvents="none" style={[styles.box100, ui.styles["174:100"]]} />
      <Text numberOfLines={1} style={[styles.text101, ui.styles["174:101"]]}>{ui.labels["174:101"] ?? "채권자 박도윤"}</Text>
      <View pointerEvents="none" style={[styles.art102, ui.styles["174:102-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text104, ui.styles["174:104"]]}>{ui.labels["174:104"] ?? "서명 18:42:10 · 인증 완료"}</Text>
      <View pointerEvents="none" style={[styles.box105, ui.styles["174:105"]]} />
      <Text numberOfLines={1} style={[styles.text106, ui.styles["174:106"]]}>{ui.labels["174:106"] ?? "채무자 이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text107, ui.styles["174:107"]]}>{ui.labels["174:107"] ?? "서명 전"}</Text>
      <Text numberOfLines={1} style={[styles.text108, ui.styles["174:108"]]}>{ui.labels["174:108"] ?? "내 서명 차례"}</Text>
      <View pointerEvents="none" style={[styles.box109, ui.styles["174:109"]]} />
      <View pointerEvents="none" style={[styles.box110, ui.styles["174:110"]]} />
      <Text numberOfLines={1} style={[styles.text111, ui.styles["174:111"]]}>{ui.labels["174:111"] ?? "부속 · 협상 기록 (1~3차)"}</Text>
      <Text numberOfLines={1} style={[styles.text112, ui.styles["174:112"]]}>{ui.labels["174:112"] ?? "보기"}</Text>
      <Text numberOfLines={1} style={[styles.text113, ui.styles["174:113"]]}>{ui.labels["174:113"] ?? "부속 · 상환표"}</Text>
      <Text numberOfLines={1} style={[styles.text114, ui.styles["174:114"]]}>{ui.labels["174:114"] ?? "보기"}</Text>
      <Text numberOfLines={1} style={[styles.text115, ui.styles["174:115"]]}>{ui.labels["174:115"] ?? "끝까지 내려야 서명 버튼이 켜져요. 이 화면의 원문이 두 폰·서버에 똑"}</Text>
      <Text numberOfLines={1} style={[styles.text116, ui.styles["174:116"]]}>{ui.labels["174:116"] ?? "같이 저장돼요."}</Text>
      <View pointerEvents="none" style={[styles.box117, ui.styles["174:117"]]} />
      <View pointerEvents="none" style={[styles.box118, ui.styles["174:118"]]} />
      <View pointerEvents="none" style={[styles.box119, ui.styles["174:119"]]} />
      <Text numberOfLines={1} style={[styles.text120, ui.styles["174:120"]]}>{ui.labels["174:120"] ?? "끝까지 읽었어요 · 서명하기"}</Text>
      <Text numberOfLines={1} style={[styles.text121, ui.styles["174:121"]]}>{ui.labels["174:121"] ?? "고칠 곳이 있어요 · 다시 협상"}</Text>
      <TouchTarget label={ui.labels["174:120"] ?? "끝까지 읽었어요 · 서명하기"} action="S13" style={styles.taptext120} ui={ui} />
      <TouchTarget label={ui.labels["174:121"] ?? "고칠 곳이 있어요 · 다시 협상"} action="counter" style={styles.taptext121} ui={ui} />
    </Frame>
  );
}
