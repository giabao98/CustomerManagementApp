import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Layout from '../components/global/Layout';
// import Text from '../components/utils/UbuntuFont';
import { StyleSheet, View, Image, Text, ImageBackground} from "react-native";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import Icon from "react-native-vector-icons/Entypo";
export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Second Screen" withBack>
			<View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/image_XwJ8..png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.ten}>Tên:</Text>
        </ImageBackground>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.cupertinoButtonInfo1Row}>
        <CupertinoButtonInfo1
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo1>
        <CupertinoButtonInfo
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo>
      </View>
      <View style={styles.giớiTinhRow}>
        <Text style={styles.giớiTinh}>Giới tính:</Text>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <Text style={styles.male}>Male</Text>
          </View>
          <Icon name="chevron-thin-down" style={styles.icon}></Icon>
        </View>
      </View>
      <View style={styles.ngaySinhRow}>
        <Text style={styles.ngaySinh}>Ngày sinh:</Text>
        <View style={styles.rect2}>
          <Text style={styles.ddMmYyyy}>dd/mm/yyyy</Text>
        </View>
      </View>
      <View style={styles.congViệcRow}>
        <Text style={styles.congViệc}>Công việc:</Text>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.sốDiệnThoạiRow}>
        <Text style={styles.sốDiệnThoại}>Số điện thoại:</Text>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.dịaChỉRow}>
        <Text style={styles.dịaChỉ}>Địa chỉ:</Text>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.emailRow}>
        <Text style={styles.email}>Email:</Text>
        <View style={styles.rect6}></View>
      </View>
      <View style={styles.sốCmndRow}>
        <Text style={styles.sốCmnd}>Số CMND:</Text>
        <View style={styles.rect7}></View>
      </View>
    </View>
		</Layout>
	);
}
const styles = StyleSheet.create({
	container: {
	  flex: 1
	},
	image: {
	  position: "absolute",
	  top: 0,
	  left: 0,
	  height: 234,
	  width: 277
	},
	image_imageStyle: {},
	ten: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 215,
	  marginLeft: 31
	},
	rect: {
	  top: 212,
	  left: 139,
	  width: 193,
	  height: 26,
	  position: "absolute",
	  backgroundColor: "#E6E6E6"
	},
	imageStack: {
	  width: 332,
	  height: 238
	},
	cupertinoButtonInfo1: {
	  height: 44,
	  width: 100,
	  marginLeft: 18
	},
	cupertinoButtonInfo1Row: {
	  height: 44,
	  flexDirection: "row",
	  marginTop: 435,
	  marginLeft: 80,
	  marginRight: 77
	},
	giớiTinh: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 3
	},
	rect1: {
	  top: 0,
	  left: 0,
	  width: 193,
	  height: 26,
	  position: "absolute",
	  backgroundColor: "#E6E6E6"
	},
	male: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  opacity: 0.33,
	  marginTop: 7,
	  marginLeft: 10
	},
	icon: {
	  top: 0,
	  left: 167,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 26
	},
	rect1Stack: {
	  width: 193,
	  height: 29,
	  marginLeft: 46
	},
	giớiTinhRow: {
	  height: 29,
	  flexDirection: "row",
	  marginTop: -454,
	  marginLeft: 31,
	  marginRight: 43
	},
	ngaySinh: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 4
	},
	rect2: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 34
	},
	ddMmYyyy: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  opacity: 0.3,
	  marginTop: 7,
	  marginLeft: 9
	},
	ngaySinhRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 20,
	  marginLeft: 31,
	  marginRight: 43
	},
	congViệc: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 3
	},
	rect3: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 34
	},
	congViệcRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 20,
	  marginLeft: 31,
	  marginRight: 43
	},
	sốDiệnThoại: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 7
	},
	rect4: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 11
	},
	sốDiệnThoạiRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 15,
	  marginLeft: 31,
	  marginRight: 43
	},
	dịaChỉ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 4
	},
	rect5: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 56
	},
	dịaChỉRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 19,
	  marginLeft: 31,
	  marginRight: 43
	},
	email: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 3
	},
	rect6: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 65
	},
	emailRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 21,
	  marginLeft: 31,
	  marginRight: 43
	},
	sốCmnd: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 3
	},
	rect7: {
	  width: 193,
	  height: 26,
	  backgroundColor: "#E6E6E6",
	  marginLeft: 35
	},
	sốCmndRow: {
	  height: 26,
	  flexDirection: "row",
	  marginTop: 23,
	  marginLeft: 31,
	  marginRight: 43
	}
  });
  
