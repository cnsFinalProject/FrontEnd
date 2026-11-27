import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './MatchDeposit.styles';

export default function MatchDeposit({ ui }) {
  return (
    <Frame width={390} height={1083} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box39, ui.styles["147:39"]]} />
      <View pointerEvents="none" style={[styles.box40, ui.styles["147:40"]]} />
      <Text numberOfLines={1} style={[styles.text41, ui.styles["147:41"]]}>{ui.labels["147:41"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text42, ui.styles["147:42"]]}>{ui.labels["147:42"] ?? "거래내역에서 체크"}</Text>
      <View pointerEvents="none" style={[styles.box49, ui.styles["147:49"]]} />
      <Text numberOfLines={1} style={[styles.text43, ui.styles["147:43"]]}>{ui.labels["147:43"] ?? "빌려준 사람 · 박도윤의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box44, ui.styles["147:44"]]} />
      <Text numberOfLines={1} style={[styles.text45, ui.styles["147:45"]]}>{ui.labels["147:45"] ?? "Agent 없이"}</Text>
      <Text style={[styles.text47, ui.styles["147:47"]]}>{ui.labels["147:47"] ?? "어떤 입금이 2회차인지\n직접 체크해요"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["147:48"]]}>{ui.labels["147:48"] ?? "나눠서 받았다면 여러 건을 같이 체크하세요."}</Text>
      <View pointerEvents="none" style={[styles.box56, ui.styles["147:56"]]} />
      <Text numberOfLines={1} style={[styles.text50, ui.styles["147:50"]]}>{ui.labels["147:50"] ?? "어느 회차에 넣을까요"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["147:51"]]} />
      <Text numberOfLines={1} style={[styles.text52, ui.styles["147:52"]]}>{ui.labels["147:52"] ?? "2회차 · 02.28 · 50,000원"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["147:53"]]} />
      <Text numberOfLines={1} style={[styles.text54, ui.styles["147:54"]]}>{ui.labels["147:54"] ?? "3회차 · 03.31"}</Text>
      <View pointerEvents="none" style={[styles.box82, ui.styles["147:82"]]} />
      <Text numberOfLines={1} style={[styles.text57, ui.styles["147:57"]]}>{ui.labels["147:57"] ?? "내 계좌 입금 내역 · 최근 30일"}</Text>
      <View pointerEvents="none" style={[styles.box59, ui.styles["147:59"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["147:61"]]}>{ui.labels["147:61"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text62, ui.styles["147:62"]]}>{ui.labels["147:62"] ?? "02.28 09:15 · NOD 송금 · 일부"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["147:63"]]}>{ui.labels["147:63"] ?? "20,000원"}</Text>
      <View pointerEvents="none" style={[styles.box65, ui.styles["147:65"]]} />
      <Text numberOfLines={1} style={[styles.text67, ui.styles["147:67"]]}>{ui.labels["147:67"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text68, ui.styles["147:68"]]}>{ui.labels["147:68"] ?? "02.27 14:02 · 다른 은행 앱"}</Text>
      <Text numberOfLines={1} style={[styles.text69, ui.styles["147:69"]]}>{ui.labels["147:69"] ?? "30,000원"}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["147:71"]]} />
      <Text numberOfLines={1} style={[styles.text73, ui.styles["147:73"]]}>{ui.labels["147:73"] ?? "김민수"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["147:74"]]}>{ui.labels["147:74"] ?? "02.26 18:30 · 다른 은행 앱"}</Text>
      <Text numberOfLines={1} style={[styles.text75, ui.styles["147:75"]]}>{ui.labels["147:75"] ?? "50,000원"}</Text>
      <View pointerEvents="none" style={[styles.box77, ui.styles["147:77"]]} />
      <Text numberOfLines={1} style={[styles.text79, ui.styles["147:79"]]}>{ui.labels["147:79"] ?? "쿠팡 환불"}</Text>
      <Text numberOfLines={1} style={[styles.text80, ui.styles["147:80"]]}>{ui.labels["147:80"] ?? "02.25 11:04 · 다른 은행 앱"}</Text>
      <Text numberOfLines={1} style={[styles.text81, ui.styles["147:81"]]}>{ui.labels["147:81"] ?? "12,800원"}</Text>
      <View pointerEvents="none" style={[styles.box97, ui.styles["147:97"]]} />
      <Text numberOfLines={1} style={[styles.text83, ui.styles["147:83"]]}>{ui.labels["147:83"] ?? "체크한 2건"}</Text>
      <View pointerEvents="none" style={[styles.box84, ui.styles["147:84"]]} />
      <Text numberOfLines={1} style={[styles.text85, ui.styles["147:85"]]}>{ui.labels["147:85"] ?? "딱 맞아요"}</Text>
      <Text numberOfLines={1} style={[styles.text87, ui.styles["147:87"]]}>{ui.labels["147:87"] ?? "합계"}</Text>
      <Text numberOfLines={1} style={[styles.text88, ui.styles["147:88"]]}>{ui.labels["147:88"] ?? "50,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text90, ui.styles["147:90"]]}>{ui.labels["147:90"] ?? "2회차 갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text91, ui.styles["147:91"]]}>{ui.labels["147:91"] ?? "50,000원"}</Text>
      <View pointerEvents="none" style={[styles.box93, ui.styles["147:93"]]} />
      <Text numberOfLines={1} style={[styles.text94, ui.styles["147:94"]]}>{ui.labels["147:94"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text95, ui.styles["147:95"]]}>{ui.labels["147:95"] ?? "완납"}</Text>
      <View pointerEvents="none" style={[styles.box99, ui.styles["147:99"]]} />
      <Text style={[styles.text98, ui.styles["147:98"]]}>{ui.labels["147:98"] ?? "· 앱 밖에서 받은 돈은 이하린님이 확인해야 장부에 들어가요\n· NOD 송금은 이미 기록돼 있어 바로 합쳐져요\n· Agent를 꺼도 이 화면은 언제든 쓸 수 있어요"}</Text>
      <View pointerEvents="none" style={[styles.box105, ui.styles["147:105"]]} />
      <View pointerEvents="none" style={[styles.box101, ui.styles["147:101"]]} />
      <Text numberOfLines={1} style={[styles.text102, ui.styles["147:102"]]}>{ui.labels["147:102"] ?? "2회차 납부로 표시하고 확인 요청"}</Text>
      <Text numberOfLines={1} style={[styles.text103, ui.styles["147:103"]]}>{ui.labels["147:103"] ?? "취소"}</Text>
      <TouchTarget label={ui.labels["147:102"] ?? "2회차 납부로 표시하고 확인 요청"} action="confirmDeposit" style={styles.taptext102} ui={ui} />
      <TouchTarget label={ui.labels["147:103"] ?? "취소"} action="back" style={styles.taptext103} ui={ui} />
    </Frame>
  );
}
