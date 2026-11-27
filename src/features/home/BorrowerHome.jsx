import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './BorrowerHome.styles';
import Graphic0 from '../../../assets/wire/0eb45.svg';
import Graphic1 from '../../../assets/wire/cc576.svg';

export default function BorrowerHome({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["224:2"]]} />
      <Text numberOfLines={1} style={[styles.text4, ui.styles["224:4"]]}>{ui.labels["224:4"] ?? "NOD"}</Text>
      <View pointerEvents="none" style={[styles.art6, ui.styles["224:6-img"]]}><Graphic1 /></View>
      <View pointerEvents="none" style={[styles.box9, ui.styles["224:9"]]} />
      <View pointerEvents="none" style={[styles.box11, ui.styles["224:11"]]} />
      <Text numberOfLines={1} style={[styles.text12, ui.styles["224:12"]]}>{ui.labels["224:12"] ?? "받을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text13, ui.styles["224:13"]]}>{ui.labels["224:13"] ?? "0원"}</Text>
      <Text numberOfLines={1} style={[styles.text14, ui.styles["224:14"]]}>{ui.labels["224:14"] ?? "약속 없음"}</Text>
      <View pointerEvents="none" style={[styles.box15, ui.styles["224:15"]]} />
      <Text numberOfLines={1} style={[styles.text16, ui.styles["224:16"]]}>{ui.labels["224:16"] ?? "갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text17, ui.styles["224:17"]]}>{ui.labels["224:17"] ?? "200,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text18, ui.styles["224:18"]]}>{ui.labels["224:18"] ?? "약속 1건"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["224:20"]]}>{ui.labels["224:20"] ?? "내 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text21, ui.styles["224:21"]]}>{ui.labels["224:21"] ?? "완납 포함 보기"}</Text>
      <View pointerEvents="none" style={[styles.box23, ui.styles["224:23"]]} />
      <Text numberOfLines={1} style={[styles.text26, ui.styles["224:26"]]}>{ui.labels["224:26"] ?? "박도윤  · 빌림"}</Text>
      <View pointerEvents="none" style={[styles.box27, ui.styles["224:27"]]} />
      <Text numberOfLines={1} style={[styles.text28, ui.styles["224:28"]]}>{ui.labels["224:28"] ?? "상환 중"}</Text>
      <Text numberOfLines={1} style={[styles.text29, ui.styles["224:29"]]}>{ui.labels["224:29"] ?? "200,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box30, ui.styles["224:30"]]} />
      <View pointerEvents="none" style={[styles.box31, ui.styles["224:31"]]} />
      <Text numberOfLines={1} style={[styles.text32, ui.styles["224:32"]]}>{ui.labels["224:32"] ?? "2/3회차 100,000원 · 02.28 (D-9)"}</Text>
      <View pointerEvents="none" style={[styles.box33, ui.styles["224:33"]]} />
      <Text numberOfLines={1} style={[styles.text34, ui.styles["224:34"]]}>{ui.labels["224:34"] ?? "지금 갚기"}</Text>
      <View pointerEvents="none" style={[styles.box36, ui.styles["224:36"]]} />
      <View pointerEvents="none" style={[styles.art37, ui.styles["224:37-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text40, ui.styles["224:40"]]}>{ui.labels["224:40"] ?? "차용증 쓰기"}</Text>
      <View pointerEvents="none" style={[styles.box41, ui.styles["224:41"]]} />
      <View pointerEvents="none" style={[styles.box42, ui.styles["224:42"]]} />
      <Text numberOfLines={1} style={[styles.text43, ui.styles["224:43"]]}>{ui.labels["224:43"] ?? "홈"}</Text>
      <Text numberOfLines={1} style={[styles.text44, ui.styles["224:44"]]}>{ui.labels["224:44"] ?? "알림"}</Text>
      <Text numberOfLines={1} style={[styles.text45, ui.styles["224:45"]]}>{ui.labels["224:45"] ?? "내 정보"}</Text>
      <TouchTarget label={ui.labels["224:21"] ?? "완납 포함 보기"} action="S33" style={styles.taptext21} ui={ui} />
      <TouchTarget label={ui.labels["224:26"] ?? "박도윤  · 빌림"} action="portfolio" style={styles.taptext26} ui={ui} />
      <TouchTarget label={ui.labels["224:34"] ?? "지금 갚기"} action="portfolio" style={styles.taptext34} ui={ui} />
      <TouchTarget label={ui.labels["224:40"] ?? "차용증 쓰기"} action="S4" style={styles.taptext40} ui={ui} />
      <TouchTarget label={ui.labels["224:43"] ?? "홈"} action="home" style={styles.taptext43} ui={ui} />
      <TouchTarget label={ui.labels["224:44"] ?? "알림"} action="alerts" style={styles.taptext44} ui={ui} />
      <TouchTarget label={ui.labels["224:45"] ?? "내 정보"} action="myProfile" style={styles.taptext45} ui={ui} />
    </Frame>
  );
}
