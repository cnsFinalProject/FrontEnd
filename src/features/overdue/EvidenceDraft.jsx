import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './EvidenceDraft.styles';

export default function EvidenceDraft({ ui }) {
  return (
    <Frame width={390} height={1761} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box103, ui.styles["118:103"]]} />
      <View pointerEvents="none" style={[styles.box2, ui.styles["157:2"]]} />
      <Text numberOfLines={1} style={[styles.text3, ui.styles["157:3"]]}>{ui.labels["157:3"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text4, ui.styles["157:4"]]}>{ui.labels["157:4"] ?? "증거 묶음"}</Text>
      <View pointerEvents="none" style={[styles.box5, ui.styles["157:5"]]} />
      <Text numberOfLines={1} style={[styles.text6, ui.styles["157:6"]]}>{ui.labels["157:6"] ?? "빌려준 사람 · 박도윤의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box7, ui.styles["157:7"]]} />
      <Text numberOfLines={1} style={[styles.text8, ui.styles["157:8"]]}>{ui.labels["157:8"] ?? "Agent 증거 정리"}</Text>
      <View pointerEvents="none" style={[styles.box9, ui.styles["157:9"]]} />
      <Text numberOfLines={1} style={[styles.text10, ui.styles["157:10"]]}>{ui.labels["157:10"] ?? "확인 필요 2건"}</Text>
      <Text style={[styles.text12, ui.styles["157:12"]]}>{ui.labels["157:12"] ?? "최민재님 건, 증거 묶음\n초안을 준비해 뒀어요"}</Text>
      <Text style={[styles.text13, ui.styles["157:13"]]}>{ui.labels["157:13"] ?? "연체 7일째(11.14)에 Agent가 기록을 모았어요. 빠진 것 2가지만 답해 주세요."}</Text>
      <View pointerEvents="none" style={[styles.box37, ui.styles["157:37"]]} />
      <Text numberOfLines={1} style={[styles.text27, ui.styles["157:27"]]}>{ui.labels["157:27"] ?? "소송에서 증명할 3가지"}</Text>
      <Text numberOfLines={1} style={[styles.text29, ui.styles["157:29"]]}>{ui.labels["157:29"] ?? "✓"}</Text>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["157:30"]]}>{ui.labels["157:30"] ?? "빌려주기로 합의 · 전자 차용증 서명 08.02 19:10"}</Text>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["157:32"]]}>{ui.labels["157:32"] ?? "✓"}</Text>
      <Text style={[styles.text33, ui.styles["157:33"]]}>{ui.labels["157:33"] ?? "돈이 건너감 · NOD 대여 송금 200,000원 08.02 19:14"}</Text>
      <Text numberOfLines={1} style={[styles.text35, ui.styles["157:35"]]}>{ui.labels["157:35"] ?? "△"}</Text>
      <Text numberOfLines={1} style={[styles.text36, ui.styles["157:36"]]}>{ui.labels["157:36"] ?? "안 갚음 · 2회차 미납 (확인 안 된 입금 1건 있음)"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["157:51"]]} />
      <Text numberOfLines={1} style={[styles.text38, ui.styles["157:38"]]}>{ui.labels["157:38"] ?? "Agent가 한 일"}</Text>
      <View pointerEvents="none" style={[styles.box39, ui.styles["157:39"]]} />
      <Text numberOfLines={1} style={[styles.text40, ui.styles["157:40"]]}>{ui.labels["157:40"] ?? "11.14 09:00"}</Text>
      <Text style={[styles.text41, ui.styles["157:41"]]}>{ui.labels["157:41"] ?? "연체 7일 → 약정서·송금·원장·변경·요청 기록을 모았어요"}</Text>
      <View pointerEvents="none" style={[styles.box42, ui.styles["157:42"]]} />
      <Text numberOfLines={1} style={[styles.text43, ui.styles["157:43"]]}>{ui.labels["157:43"] ?? "변경 기록"}</Text>
      <Text style={[styles.text44, ui.styles["157:44"]]}>{ui.labels["157:44"] ?? "10.20 일정 변경 합의 발견 → 2회차 기한을 10.31에서 11.07로 바꿔 연체를 다시 계산했어요"}</Text>
      <View pointerEvents="none" style={[styles.box45, ui.styles["157:45"]]} />
      <Text numberOfLines={1} style={[styles.text46, ui.styles["157:46"]]}>{ui.labels["157:46"] ?? "원장"}</Text>
      <Text style={[styles.text47, ui.styles["157:47"]]}>{ui.labels["157:47"] ?? "11.09 '최수진' 이름 20,000원 앱 밖 입금이 확인 안 된 채 남아 있어요 → 확인 1"}</Text>
      <View pointerEvents="none" style={[styles.box48, ui.styles["157:48"]]} />
      <Text numberOfLines={1} style={[styles.text49, ui.styles["157:49"]]}>{ui.labels["157:49"] ?? "약정서"}</Text>
      <Text numberOfLines={1} style={[styles.text50, ui.styles["157:50"]]}>{ui.labels["157:50"] ?? "내용증명에 필요한 상대 주소가 없어요 → 확인 2"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["157:58"]]} />
      <Text numberOfLines={1} style={[styles.text52, ui.styles["157:52"]]}>{ui.labels["157:52"] ?? "확인 1 · '최수진' 20,000원"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["157:53"]]} />
      <Text numberOfLines={1} style={[styles.text54, ui.styles["157:54"]]}>{ui.labels["157:54"] ?? "Agent 질문"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["157:56"]]}>{ui.labels["157:56"] ?? "11.09 앱 밖 입금 · 최민재님이 보낸 상환인가요?"}</Text>
      <View pointerEvents="none" style={[styles.box20, ui.styles["157:20"]]} />
      <Text numberOfLines={1} style={[styles.text21, ui.styles["157:21"]]}>{ui.labels["157:21"] ?? "맞아요"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["157:22"]]} />
      <Text numberOfLines={1} style={[styles.text23, ui.styles["157:23"]]}>{ui.labels["157:23"] ?? "아니에요"}</Text>
      <View pointerEvents="none" style={[styles.box24, ui.styles["157:24"]]} />
      <Text numberOfLines={1} style={[styles.text25, ui.styles["157:25"]]}>{ui.labels["157:25"] ?? "모르겠어요"}</Text>
      <Text style={[styles.text57, ui.styles["157:57"]]}>{ui.labels["157:57"] ?? "맞아요 → 2회차 완납, 남은 돈 100,000원 · 모르겠어요 → 묶음에 \"확인 안 된 입금\"으로 표시"}</Text>
      <View pointerEvents="none" style={[styles.box65, ui.styles["157:65"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["157:59"]]}>{ui.labels["157:59"] ?? "확인 2 · 상대방 주소"}</Text>
      <View pointerEvents="none" style={[styles.box60, ui.styles["157:60"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["157:61"]]}>{ui.labels["157:61"] ?? "Agent 질문"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["157:63"]]}>{ui.labels["157:63"] ?? "최민재님 주소 (내용증명 받는 곳)"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["157:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["157:15"]]}>{ui.labels["157:15"] ?? "서울시 마포구 ○○로 12, 302호"}</Text>
      <Text numberOfLines={1} style={[styles.text64, ui.styles["157:64"]]}>{ui.labels["157:64"] ?? "차용증에 없는 정보라 직접 적어야 해요"}</Text>
      <View pointerEvents="none" style={[styles.box80, ui.styles["157:80"]]} />
      <Text numberOfLines={1} style={[styles.text66, ui.styles["157:66"]]}>{ui.labels["157:66"] ?? "청구할 금액"}</Text>
      <View pointerEvents="none" style={[styles.box67, ui.styles["157:67"]]} />
      <Text numberOfLines={1} style={[styles.text68, ui.styles["157:68"]]}>{ui.labels["157:68"] ?? "답에 따라 다시 계산"}</Text>
      <Text numberOfLines={1} style={[styles.text70, ui.styles["157:70"]]}>{ui.labels["157:70"] ?? "빌려준 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text71, ui.styles["157:71"]]}>{ui.labels["157:71"] ?? "200,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text73, ui.styles["157:73"]]}>{ui.labels["157:73"] ?? "갚은 돈 · 1회차 + 2회차 일부"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["157:74"]]}>{ui.labels["157:74"] ?? "80,000원"}</Text>
      <View pointerEvents="none" style={[styles.box76, ui.styles["157:76"]]} />
      <Text numberOfLines={1} style={[styles.text77, ui.styles["157:77"]]}>{ui.labels["157:77"] ?? "남은 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["157:78"]]}>{ui.labels["157:78"] ?? "120,000원"}</Text>
      <View pointerEvents="none" style={[styles.box83, ui.styles["157:83"]]} />
      <Text numberOfLines={1} style={[styles.text81, ui.styles["157:81"]]}>{ui.labels["157:81"] ?? "Agent가 기억할 것"}</Text>
      <View pointerEvents="none" style={[styles.box17, ui.styles["157:17"]]} />
      <Text style={[styles.text18, ui.styles["157:18"]]}>{ui.labels["157:18"] ?? "이번 답을 이 약속에 기억해요. 다음에 묶음을 다시 만들 때 같은 걸 묻지 않아요"}</Text>
      <Text style={[styles.text82, ui.styles["157:82"]]}>{ui.labels["157:82"] ?? "3회차 연체·새 입금·내용증명 발송이 생기면 묶음을 새로 고치고 바뀐 것만 알려 드려요"}</Text>
      <View pointerEvents="none" style={[styles.box85, ui.styles["157:85"]]} />
      <Text style={[styles.text84, ui.styles["157:84"]]}>{ui.labels["157:84"] ?? "· Agent는 기록을 읽기만 해요. 장부·약정서를 바꾸지 않아요\n· 내용증명은 초안까지만 써요. 보내는 건 직접 해요\n· 이길 수 있는지 같은 법률 판단은 하지 않아요\n· 금액은 원장 tool로 계산해요. 묶음에는 원문 해시·타임스탬프가 들어가요"}</Text>
      <View pointerEvents="none" style={[styles.box86, ui.styles["157:86"]]} />
      <View pointerEvents="none" style={[styles.box87, ui.styles["157:87"]]} />
      <Text numberOfLines={1} style={[styles.text88, ui.styles["157:88"]]}>{ui.labels["157:88"] ?? "답 반영하고 묶음 만들기"}</Text>
      <View pointerEvents="none" style={[styles.box89, ui.styles["157:89"]]} />
      <Text numberOfLines={1} style={[styles.text90, ui.styles["157:90"]]}>{ui.labels["157:90"] ?? "내용증명 초안 보기"}</Text>
      <TouchTarget label={ui.labels["157:88"] ?? "답 반영하고 묶음 만들기"} action="S36" style={styles.taptext88} ui={ui} />
      <TouchTarget label={ui.labels["157:90"] ?? "내용증명 초안 보기"} action="S36" style={styles.taptext90} ui={ui} />
    </Frame>
  );
}
