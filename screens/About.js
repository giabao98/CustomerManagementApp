import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import { StyleSheet, View, Image } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import EntypoIcon from "react-native-vector-icons/Entypo";
export default function ({ navigation }) {
	return (
		<Layout navigation={navigation}>
			<View style={styles.container}>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <Image
        source={require("../assets/images/image_qYN0..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.thốngKeTheo}>Thống kê theo:</Text>
      <Text style={styles.loạiBiểuDồ}>Loại biểu đồ:</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.giớiTinh}>Giới tính</Text>
        </View>
        <EntypoIcon name="chevron-thin-down" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.hinhTron}>Hình tròn</Text>
        </View>
        <EntypoIcon name="chevron-thin-down" style={styles.icon1}></EntypoIcon>
      </View>
      <View style={styles.sttRow}>
        <Text style={styles.stt}>STT</Text>
        <Text style={styles.loại2}>Loại</Text>
        <Text style={styles.tỉLệ}>Tỉ lệ</Text>
        <Text style={styles.sốLượng}>Số lượng</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>1</Text>
          <Text style={styles.nữ}>Nữ</Text>
          <Text style={styles.loremIpsum2}>25%</Text>
          <Text style={styles.loremIpsum3}>50</Text>
        </View>
      </View>
      <View style={styles.group1}>
        <View style={styles.loremIpsum4Row}>
          <Text style={styles.loremIpsum4}>2</Text>
          <Text style={styles.nam}>Nam</Text>
          <Text style={styles.loremIpsum5}>60%</Text>
          <Text style={styles.loremIpsum6}>120</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.loremIpsum7Row}>
          <Text style={styles.loremIpsum7}>3</Text>
          <Text style={styles.giớiTinhThứ3}>Giới tính thứ 3</Text>
          <Text style={styles.loremIpsum8}>15%</Text>
          <Text style={styles.loremIpsum9}>30</Text>
        </View>
      </View>
    </View>
		</Layout>
	);
}
const styles = StyleSheet.create({
	container: {
	  flex: 1
	},
	cupertinoHeaderWithAddButton: {
	  height: 44,
	  width: 370,
	  backgroundColor: "rgba(255,255,255,1)",
	  marginTop: 22,
	  marginLeft: 22
	},
	image: {
	  height: 317,
	  width: 370,
	  marginTop: 19,
	  marginLeft: 22
	},
	thốngKeTheo: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 18,
	  marginTop: 15,
	  marginLeft: 33
	},
	loạiBiểuDồ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 18,
	  marginTop: 48,
	  marginLeft: 33
	},
	rect: {
	  top: 1,
	  left: 0,
	  width: 240,
	  height: 29,
	  position: "absolute",
	  backgroundColor: "#E6E6E6"
	},
	giớiTinh: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 5,
	  marginLeft: 12
	},
	icon: {
	  top: 0,
	  left: 212,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 27
	},
	rectStack: {
	  width: 240,
	  height: 30,
	  marginTop: -60,
	  marginLeft: 33
	},
	rect1: {
	  top: 0,
	  left: 0,
	  width: 240,
	  height: 29,
	  position: "absolute",
	  backgroundColor: "#E6E6E6"
	},
	hinhTron: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 5,
	  marginLeft: 12
	},
	icon1: {
	  top: 0,
	  left: 212,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 27
	},
	rect1Stack: {
	  width: 240,
	  height: 30,
	  marginTop: 42,
	  marginLeft: 33
	},
	stt: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16
	},
	loại2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 28
	},
	tỉLệ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 105
	},
	sốLượng: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 52
	},
	sttRow: {
	  height: 19,
	  flexDirection: "row",
	  marginTop: 46,
	  marginLeft: 38,
	  marginRight: 38
	},
	group: {
	  width: 305,
	  height: 19,
	  flexDirection: "row",
	  marginTop: 19,
	  marginLeft: 49
	},
	loremIpsum: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16
	},
	nữ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 41
	},
	loremIpsum2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 110
	},
	loremIpsum3: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 76
	},
	loremIpsumRow: {
	  height: 19,
	  flexDirection: "row",
	  flex: 1
	},
	group1: {
	  width: 305,
	  height: 19,
	  flexDirection: "row",
	  marginTop: 13,
	  marginLeft: 49
	},
	loremIpsum4: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16
	},
	nam: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 41
	},
	loremIpsum5: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 98
	},
	loremIpsum6: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 76
	},
	loremIpsum4Row: {
	  height: 19,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -9
	},
	group2: {
	  width: 305,
	  height: 19,
	  flexDirection: "row",
	  marginTop: 13,
	  marginLeft: 49
	},
	loremIpsum7: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16
	},
	giớiTinhThứ3: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 41
	},
	loremIpsum8: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 32
	},
	loremIpsum9: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginLeft: 76
	},
	loremIpsum7Row: {
	  height: 19,
	  flexDirection: "row",
	  flex: 1
	}
  });