import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './LenderHome.styles';
import Graphic0 from '../../../assets/wire/0eb45.svg';
import Graphic1 from '../../../assets/wire/24600.svg';
import Graphic2 from '../../../assets/wire/cc576.svg';

export default function LenderHome({ ui }) {
  return (
    <Frame width={390} height={1024} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["180:2"]]} />
      <Text numberOfLines={1} style={[styles.text3, ui.styles["180:3"]]}>{ui.labels["180:3"] ?? "NOD"}</Text>
      <View pointerEvents="none" style={[styles.art4, ui.styles["180:4-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box7, ui.styles["180:7"]]} />
      <View pointerEvents="none" style={[styles.box8, ui.styles["180:8"]]} />
      <Text numberOfLines={1} style={[styles.text9, ui.styles["180:9"]]}>{ui.labels["180:9"] ?? "받을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text10, ui.styles["180:10"]]}>{ui.labels["180:10"] ?? "420,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text11, ui.styles["180:11"]]}>{ui.labels["180:11"] ?? "약속 2건"}</Text>
      <View pointerEvents="none" style={[styles.box12, ui.styles["180:12"]]} />
      <Text numberOfLines={1} style={[styles.text13, ui.styles["180:13"]]}>{ui.labels["180:13"] ?? "갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text14, ui.styles["180:14"]]}>{ui.labels["180:14"] ?? "50,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text15, ui.styles["180:15"]]}>{ui.labels["180:15"] ?? "약속 1건"}</Text>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["180:16"]]}>{ui.labels["180:16"] ?? "내 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text17, ui.styles["180:17"]]}>{ui.labels["180:17"] ?? "완납 포함 보기"}</Text>
      <View pointerEvents="none" style={[styles.box18, ui.styles["180:18"]]} />
      <Text numberOfLines={1} style={[styles.text19, ui.styles["180:19"]]}>{ui.labels["180:19"] ?? "최민재"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["180:20"]]}>{ui.labels["180:20"] ?? "· 빌려줌"}</Text>
      <View pointerEvents="none" style={[styles.box21, ui.styles["180:21"]]} />
      <Text numberOfLines={1} style={[styles.text22, ui.styles["180:22"]]}>{ui.labels["180:22"] ?? "연체 12일"}</Text>
      <Text numberOfLines={1} style={[styles.text23, ui.styles["180:23"]]}>{ui.labels["180:23"] ?? "120,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box24, ui.styles["180:24"]]} />
      <View pointerEvents="none" style={[styles.box25, ui.styles["180:25"]]} />
      <Text numberOfLines={1} style={[styles.text26, ui.styles["180:26"]]}>{ui.labels["180:26"] ?? "2/4회차 20,000원 · 11.07 지남 · 약정 지연이자 적용 중"}</Text>
      <View pointerEvents="none" style={[styles.box27, ui.styles["180:27"]]} />
      <View pointerEvents="none" style={[styles.box28, ui.styles["180:28"]]} />
      <Text numberOfLines={1} style={[styles.text29, ui.styles["180:29"]]}>{ui.labels["180:29"] ?? "Agent"}</Text>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["180:30"]]}>{ui.labels["180:30"] ?? "증거 묶음 준비됨 · 확인 2건"}</Text>
      <View pointerEvents="none" style={[styles.art31, ui.styles["180:31-img"]]}><Graphic1 /></View>
      <View pointerEvents="none" style={[styles.box33, ui.styles["180:33"]]} />
      <Text numberOfLines={1} style={[styles.text34, ui.styles["180:34"]]}>{ui.labels["180:34"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text35, ui.styles["180:35"]]}>{ui.labels["180:35"] ?? "· 빌려줌"}</Text>
      <View pointerEvents="none" style={[styles.box36, ui.styles["180:36"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["180:37"]]}>{ui.labels["180:37"] ?? "상환 중"}</Text>
      <Text numberOfLines={1} style={[styles.text38, ui.styles["180:38"]]}>{ui.labels["180:38"] ?? "300,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box39, ui.styles["180:39"]]} />
      <Text numberOfLines={1} style={[styles.text40, ui.styles["180:40"]]}>{ui.labels["180:40"] ?? "1/3회차 100,000원 · 01.31 (D-69)"}</Text>
      <View pointerEvents="none" style={[styles.box41, ui.styles["180:41"]]} />
      <Text numberOfLines={1} style={[styles.text42, ui.styles["180:42"]]}>{ui.labels["180:42"] ?? "정유나"}</Text>
      <Text numberOfLines={1} style={[styles.text43, ui.styles["180:43"]]}>{ui.labels["180:43"] ?? "· 빌림"}</Text>
      <View pointerEvents="none" style={[styles.box44, ui.styles["180:44"]]} />
      <Text numberOfLines={1} style={[styles.text45, ui.styles["180:45"]]}>{ui.labels["180:45"] ?? "상환 중"}</Text>
      <Text numberOfLines={1} style={[styles.text46, ui.styles["180:46"]]}>{ui.labels["180:46"] ?? "50,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box47, ui.styles["180:47"]]} />
      <Text numberOfLines={1} style={[styles.text48, ui.styles["180:48"]]}>{ui.labels["180:48"] ?? "한 번에 50,000원 · 12.10 (D-17)"}</Text>
      <View pointerEvents="none" style={[styles.box49, ui.styles["180:49"]]} />
      <Text numberOfLines={1} style={[styles.text50, ui.styles["180:50"]]}>{ui.labels["180:50"] ?? "지금 갚기"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["180:51"]]} />
      <Text numberOfLines={1} style={[styles.text52, ui.styles["180:52"]]}>{ui.labels["180:52"] ?? "김서준"}</Text>
      <Text numberOfLines={1} style={[styles.text53, ui.styles["180:53"]]}>{ui.labels["180:53"] ?? "· 빌려줌"}</Text>
      <View pointerEvents="none" style={[styles.box54, ui.styles["180:54"]]} />
      <Text numberOfLines={1} style={[styles.text55, ui.styles["180:55"]]}>{ui.labels["180:55"] ?? "서명 대기"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["180:56"]]}>{ui.labels["180:56"] ?? "200,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text57, ui.styles["180:57"]]}>{ui.labels["180:57"] ?? "조건 합의됨 · 서명하면 약속이 맺어져요"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["180:58"]]} />
      <View pointerEvents="none" style={[styles.art59, ui.styles["180:59-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text62, ui.styles["180:62"]]}>{ui.labels["180:62"] ?? "차용증 쓰기"}</Text>
      <View pointerEvents="none" style={[styles.box63, ui.styles["180:63"]]} />
      <View pointerEvents="none" style={[styles.box64, ui.styles["180:64"]]} />
      <Text numberOfLines={1} style={[styles.text65, ui.styles["180:65"]]}>{ui.labels["180:65"] ?? "홈"}</Text>
      <Text numberOfLines={1} style={[styles.text66, ui.styles["180:66"]]}>{ui.labels["180:66"] ?? "알림"}</Text>
      <Text numberOfLines={1} style={[styles.text67, ui.styles["180:67"]]}>{ui.labels["180:67"] ?? "내 정보"}</Text>
      <TouchTarget label={ui.labels["180:4-img"] ?? "알림"} action="alerts" style={styles.tapart4} ui={ui} />
      <TouchTarget label={ui.labels["180:17"] ?? "완납 포함 보기"} action="S33" style={styles.taptext17} ui={ui} />
      <TouchTarget label={ui.labels["180:19"] ?? "최민재"} action="S31" style={styles.taptext19} ui={ui} />
      <TouchTarget label={ui.labels["180:30"] ?? "증거 묶음 준비됨 · 확인 2건"} action="S35" style={styles.taptext30} ui={ui} />
      <TouchTarget label={ui.labels["180:34"] ?? "이하린"} action="portfolio" style={styles.taptext34} ui={ui} />
      <TouchTarget label={ui.labels["180:42"] ?? "정유나"} action="otherLoan" style={styles.taptext42} ui={ui} />
      <TouchTarget label={ui.labels["180:50"] ?? "지금 갚기"} action="otherLoan" style={styles.taptext50} ui={ui} />
      <TouchTarget label={ui.labels["180:52"] ?? "김서준"} action="portfolio" style={styles.taptext52} ui={ui} />
      <TouchTarget label={ui.labels["180:62"] ?? "차용증 쓰기"} action="S4" style={styles.taptext62} ui={ui} />
      <TouchTarget label={ui.labels["180:65"] ?? "홈"} action="home" style={styles.taptext65} ui={ui} />
      <TouchTarget label={ui.labels["180:66"] ?? "알림"} action="alerts" style={styles.taptext66} ui={ui} />
      <TouchTarget label={ui.labels["180:67"] ?? "내 정보"} action="myProfile" style={styles.taptext67} ui={ui} />
    </Frame>
  );
}
