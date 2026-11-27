import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './TermsOffer.styles';

export default function TermsOffer({ ui }) {
  return (
    <Frame width={390} height={1092} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box11, ui.styles["193:11"]]} />
      <View pointerEvents="none" style={[styles.box12, ui.styles["193:12"]]} />
      <Text numberOfLines={1} style={[styles.text14, ui.styles["193:14"]]}>{ui.labels["193:14"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text15, ui.styles["193:15"]]}>{ui.labels["193:15"] ?? "조건 제안하기"}</Text>
      <View pointerEvents="none" style={[styles.box19, ui.styles["193:19"]]} />
      <Text numberOfLines={1} style={[styles.text20, ui.styles["193:20"]]}>{ui.labels["193:20"] ?? "✓ 1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["193:22"]]} />
      <Text numberOfLines={1} style={[styles.text23, ui.styles["193:23"]]}>{ui.labels["193:23"] ?? "2 조건"}</Text>
      <View pointerEvents="none" style={[styles.box25, ui.styles["193:25"]]} />
      <Text numberOfLines={1} style={[styles.text26, ui.styles["193:26"]]}>{ui.labels["193:26"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box28, ui.styles["193:28"]]} />
      <Text numberOfLines={1} style={[styles.text29, ui.styles["193:29"]]}>{ui.labels["193:29"] ?? "4 완료"}</Text>
      <View pointerEvents="none" style={[styles.box31, ui.styles["193:31"]]} />
      <Text numberOfLines={1} style={[styles.text32, ui.styles["193:32"]]}>{ui.labels["193:32"] ?? "처음 제안 · 박도윤(빌려주는 사람)"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["193:33"]]}>{ui.labels["193:33"] ?? "이하린님과 연결됐어요"}</Text>
      <Text style={[styles.text34, ui.styles["193:34"]]}>{ui.labels["193:34"] ?? "실명 인증됨. 내가 먼저 제안하고, 상대가 고쳐서 다시 제안할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box35, ui.styles["193:35"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["193:37"]]}>{ui.labels["193:37"] ?? "조건"}</Text>
      <View pointerEvents="none" style={[styles.box39, ui.styles["193:39"]]} />
      <Text numberOfLines={1} style={[styles.text42, ui.styles["193:42"]]}>{ui.labels["193:42"] ?? "빌려줄 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["193:43"]]}>{ui.labels["193:43"] ?? "삼십만 원"}</Text>
      <View pointerEvents="none" style={[styles.box47, ui.styles["193:47"]]} />
      <Text numberOfLines={1} style={[styles.text46, ui.styles["193:46"]]}>{ui.labels["193:46"] ?? "300,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["193:48"]]}>{ui.labels["193:48"] ?? "›"}</Text>
      <Text numberOfLines={1} style={[styles.text50, ui.styles["193:50"]]}>{ui.labels["193:50"] ?? "갚는 방식"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["193:51"]]} />
      <View pointerEvents="none" style={[styles.box52, ui.styles["193:52"]]} />
      <Text numberOfLines={1} style={[styles.text53, ui.styles["193:53"]]}>{ui.labels["193:53"] ?? "한 번에"}</Text>
      <View pointerEvents="none" style={[styles.box54, ui.styles["193:54"]]} />
      <Text numberOfLines={1} style={[styles.text55, ui.styles["193:55"]]}>{ui.labels["193:55"] ?? "2회"}</Text>
      <View pointerEvents="none" style={[styles.box56, ui.styles["193:56"]]} />
      <Text numberOfLines={1} style={[styles.text57, ui.styles["193:57"]]}>{ui.labels["193:57"] ?? "3회"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["193:58"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["193:59"]]}>{ui.labels["193:59"] ?? "직접"}</Text>
      <View pointerEvents="none" style={[styles.box60, ui.styles["193:60"]]} />
      <Text numberOfLines={1} style={[styles.text63, ui.styles["193:63"]]}>{ui.labels["193:63"] ?? "첫 상환일"}</Text>
      <Text numberOfLines={1} style={[styles.text64, ui.styles["193:64"]]}>{ui.labels["193:64"] ?? "이후 매월 같은 날"}</Text>
      <View pointerEvents="none" style={[styles.box68, ui.styles["193:68"]]} />
      <Text numberOfLines={1} style={[styles.text67, ui.styles["193:67"]]}>{ui.labels["193:67"] ?? "2026.12.31"}</Text>
      <Text numberOfLines={1} style={[styles.text69, ui.styles["193:69"]]}>{ui.labels["193:69"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box70, ui.styles["193:70"]]} />
      <Text numberOfLines={1} style={[styles.text73, ui.styles["193:73"]]}>{ui.labels["193:73"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["193:74"]]}>{ui.labels["193:74"] ?? "최대 연 20%"}</Text>
      <View pointerEvents="none" style={[styles.box78, ui.styles["193:78"]]} />
      <Text numberOfLines={1} style={[styles.text77, ui.styles["193:77"]]}>{ui.labels["193:77"] ?? "없음"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["193:79"]]}>{ui.labels["193:79"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box80, ui.styles["193:80"]]} />
      <Text numberOfLines={1} style={[styles.text83, ui.styles["193:83"]]}>{ui.labels["193:83"] ?? "늦게 갚으면"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["193:84"]]}>{ui.labels["193:84"] ?? "지연손해금"}</Text>
      <View pointerEvents="none" style={[styles.box88, ui.styles["193:88"]]} />
      <Text numberOfLines={1} style={[styles.text87, ui.styles["193:87"]]}>{ui.labels["193:87"] ?? "법정 연 5%"}</Text>
      <Text numberOfLines={1} style={[styles.text89, ui.styles["193:89"]]}>{ui.labels["193:89"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box90, ui.styles["193:90"]]} />
      <Text numberOfLines={1} style={[styles.text93, ui.styles["193:93"]]}>{ui.labels["193:93"] ?? "남은 돈 한 번에 청구"}</Text>
      <Text numberOfLines={1} style={[styles.text94, ui.styles["193:94"]]}>{ui.labels["193:94"] ?? "기한이익 상실"}</Text>
      <View pointerEvents="none" style={[styles.box98, ui.styles["193:98"]]} />
      <Text numberOfLines={1} style={[styles.text97, ui.styles["193:97"]]}>{ui.labels["193:97"] ?? "넣지 않음"}</Text>
      <Text numberOfLines={1} style={[styles.text99, ui.styles["193:99"]]}>{ui.labels["193:99"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box100, ui.styles["193:100"]]} />
      <Text numberOfLines={1} style={[styles.text103, ui.styles["193:103"]]}>{ui.labels["193:103"] ?? "받을 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text104, ui.styles["193:104"]]}>{ui.labels["193:104"] ?? "모의은행 · 박도윤 · 실명 확인"}</Text>
      <View pointerEvents="none" style={[styles.box108, ui.styles["193:108"]]} />
      <Text numberOfLines={1} style={[styles.text107, ui.styles["193:107"]]}>{ui.labels["193:107"] ?? "110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text109, ui.styles["193:109"]]}>{ui.labels["193:109"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box110, ui.styles["193:110"]]} />
      <Text numberOfLines={1} style={[styles.text112, ui.styles["193:112"]]}>{ui.labels["193:112"] ?? "상환표 미리보기"}</Text>
      <Text numberOfLines={1} style={[styles.text115, ui.styles["193:115"]]}>{ui.labels["193:115"] ?? "1회 · 12.31"}</Text>
      <Text numberOfLines={1} style={[styles.text117, ui.styles["193:117"]]}>{ui.labels["193:117"] ?? "150,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text119, ui.styles["193:119"]]}>{ui.labels["193:119"] ?? "2회 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text121, ui.styles["193:121"]]}>{ui.labels["193:121"] ?? "150,000원"}</Text>
      <View pointerEvents="none" style={[styles.box122, ui.styles["193:122"]]} />
      <Text numberOfLines={1} style={[styles.text123, ui.styles["193:123"]]}>{ui.labels["193:123"] ?? "총 300,000원 · 이자 0원 · 다 갚는 날 2027.01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text124, ui.styles["193:124"]]}>{ui.labels["193:124"] ?? "이 표가 그대로 약정서에 들어가요"}</Text>
      <View pointerEvents="none" style={[styles.box125, ui.styles["193:125"]]} />
      <View pointerEvents="none" style={[styles.box126, ui.styles["193:126"]]} />
      <Text numberOfLines={1} style={[styles.text127, ui.styles["193:127"]]}>{ui.labels["193:127"] ?? "이하린님에게 제안 보내기"}</Text>
      <TouchTarget label={ui.labels["193:46"] ?? "300,000원"} action="editTerms" style={styles.taptext46} ui={ui} />
      <TouchTarget label={ui.labels["193:53"] ?? "한 번에"} action="editTerms" style={styles.taptext53} ui={ui} />
      <TouchTarget label={ui.labels["193:55"] ?? "2회"} action="editTerms" style={styles.taptext55} ui={ui} />
      <TouchTarget label={ui.labels["193:57"] ?? "3회"} action="editTerms" style={styles.taptext57} ui={ui} />
      <TouchTarget label={ui.labels["193:67"] ?? "2026.12.31"} action="editTerms" style={styles.taptext67} ui={ui} />
      <TouchTarget label={ui.labels["193:127"] ?? "이하린님에게 제안 보내기"} action="offer" style={styles.taptext127} ui={ui} />
    </Frame>
  );
}
