import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import CupertinoSearchBarWithCancelButton1 from "../components/CupertinoSearchBarWithCancelButton1";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialButtonTransparentHamburger1 from "../components/MaterialButtonTransparentHamburger1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation}>
			<View style={styles.container}>
      <CupertinoHeaderWithActionButton
        style={styles.cupertinoHeaderWithActionButton}
      ></CupertinoHeaderWithActionButton>
      <View style={styles.cupertinoSearchBarWithCancelButton1StackStack}>
        <View style={styles.cupertinoSearchBarWithCancelButton1Stack}>
          <CupertinoSearchBarWithCancelButton1
            style={styles.cupertinoSearchBarWithCancelButton1}
          ></CupertinoSearchBarWithCancelButton1>
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
          <MaterialButtonTransparentHamburger1
            style={styles.materialButtonTransparentHamburger1}
          ></MaterialButtonTransparentHamburger1>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.loremIpsumStack}>
              <Text style={styles.loremIpsum}></Text>
              <Text style={styles.giớiTinh}>Giới tính</Text>
            </View>
            <Text style={styles.tuổi}>Tuổi</Text>
            <View style={styles.loremIpsum2Stack}>
              <Text style={styles.loremIpsum2}></Text>
              <Text style={styles.ten}>Tên</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.scrollArea2}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea2_contentContainerStyle}
          >
            <Text style={styles.tangDần}>Tăng dần</Text>
            <Text style={styles.giảmDần}>Giảm dần</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/image_QKIa..png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.nguyễnTuấnHuy}>Nguyễn Tuấn Huy</Text>
          <Text style={styles.nam2}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.userRow}>
          <Text style={styles.user}>User</Text>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.giớiTinh2}>Giới tính</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.image9Row}>
          <Image
            source={require("../assets/images/image_PkKT..png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <Text style={styles.trầnThanhTam}>Trần Thanh Tâm</Text>
          <Text style={styles.nữ}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon1}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.image10Row}>
          <Image
            source={require("../assets/images/image_vpc7..png")}
            resizeMode="contain"
            style={styles.image10}
          ></Image>
          <Text style={styles.trứngRanCầnMỡ}>Trứng Rán Cần mỡ</Text>
          <Text style={styles.nữ3}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon2}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group9}>
        <View style={styles.image14Row}>
          <Image
            source={require("../assets/images/image_O7cf..png")}
            resizeMode="contain"
            style={styles.image14}
          ></Image>
          <Text style={styles.traXanh}>Trà Xanh</Text>
          <Text style={styles.nữ2}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon8}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group8}>
        <View style={styles.image13Row}>
          <Image
            source={require("../assets/images/image_QGyl..png")}
            resizeMode="contain"
            style={styles.image13}
          ></Image>
          <Text style={styles.trầnDần}>Trần Dần</Text>
          <Text style={styles.nam5}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon3}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group7}>
        <View style={styles.group6Row}>
          <View style={styles.group6}>
            <Image
              source={require("../assets/images/image_R0CS..png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>
          </View>
          <Text style={styles.trầnHoangKha}>Trần Hoàng Kha</Text>
          <Text style={styles.nam6}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.image11Row}>
          <Image
            source={require("../assets/images/image_EJMW..png")}
            resizeMode="contain"
            style={styles.image11}
          ></Image>
          <Text style={styles.coLamMớiCoAn}>Có Làm Mới Có Ăn</Text>
          <Text style={styles.nam7}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon5}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group11}>
        <View style={styles.image16Row}>
          <Image
            source={require("../assets/images/image_g8jP..png")}
            resizeMode="contain"
            style={styles.image16}
          ></Image>
          <Text style={styles.dộMixi}>Độ Mixi</Text>
          <Text style={styles.nam8}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon6}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group10}>
        <View style={styles.image15Row}>
          <Image
            source={require("../assets/images/image_u2Fc..png")}
            resizeMode="contain"
            style={styles.image15}
          ></Image>
          <Text style={styles.trầnDứcBo}>Trần Đức Bo</Text>
          <Text style={styles.nam9}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon7}
          ></FontAwesomeIcon>
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
	cupertinoHeaderWithActionButton: {
	  height: 47,
	  width: 389,
	  marginTop: 22,
	  marginLeft: 12
	},
	cupertinoSearchBarWithCancelButton1: {
	  height: 49,
	  width: 390,
	  position: "absolute",
	  left: 0,
	  top: 0,
	  backgroundColor: "rgba(255,255,255,1)"
	},
	materialButtonTransparentHamburger: {
	  height: 36,
	  width: 36,
	  position: "absolute",
	  left: 150,
	  top: 47
	},
	materialButtonTransparentHamburger1: {
	  height: 36,
	  width: 36,
	  position: "absolute",
	  left: 346,
	  top: 47
	},
	cupertinoSearchBarWithCancelButton1Stack: {
	  top: 0,
	  left: 0,
	  width: 390,
	  height: 83,
	  position: "absolute"
	},
	scrollArea: {
	  top: 52,
	  left: 9,
	  width: 177,
	  height: 27,
	  position: "absolute",
	  backgroundColor: "#E6E6E6",
	  borderRadius: 5
	},
	scrollArea_contentContainerStyle: {
	  height: 70,
	  width: 177
	},
	loremIpsum: {
	  top: 5,
	  left: 0,
	  position: "absolute",
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	giớiTinh: {
	  top: 0,
	  left: 0,
	  position: "absolute",
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	loremIpsumStack: {
	  width: 51,
	  height: 16,
	  marginTop: 7,
	  marginLeft: 13
	},
	tuổi: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginTop: 7,
	  marginLeft: 13
	},
	loremIpsum2: {
	  top: 8,
	  left: 6,
	  position: "absolute",
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	ten: {
	  top: 0,
	  left: 0,
	  position: "absolute",
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	loremIpsum2Stack: {
	  width: 22,
	  height: 16,
	  marginTop: 8,
	  marginLeft: 13
	},
	scrollArea2: {
	  top: 52,
	  left: 205,
	  width: 177,
	  height: 27,
	  position: "absolute",
	  backgroundColor: "#E6E6E6",
	  borderRadius: 5
	},
	scrollArea2_contentContainerStyle: {
	  height: 46,
	  width: 177
	},
	tangDần: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginTop: 6,
	  marginLeft: 7
	},
	giảmDần: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginTop: 8,
	  marginLeft: 7
	},
	cupertinoSearchBarWithCancelButton1StackStack: {
	  width: 390,
	  height: 83,
	  marginTop: 13,
	  marginLeft: 12
	},
	group: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 40,
	  marginLeft: 21
	},
	image: {
	  height: 50,
	  width: 50
	},
	nguyễnTuấnHuy: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 34,
	  marginTop: 17
	},
	icon: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	imageRow: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group2: {
	  width: 257,
	  height: 16,
	  flexDirection: "row",
	  marginTop: -77,
	  marginLeft: 31
	},
	user: {
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	name: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 36
	},
	giớiTinh2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 104
	},
	userRow: {
	  height: 16,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group3: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 66,
	  marginLeft: 21
	},
	image9: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnThanhTam: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 42,
	  marginTop: 17
	},
	icon1: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 103,
	  marginTop: 5
	},
	image9Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group4: {
	  width: 373,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 5,
	  marginLeft: 21
	},
	image10: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trứngRanCầnMỡ: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ3: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 26,
	  marginTop: 17
	},
	icon2: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 104,
	  marginTop: 5
	},
	image10Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1
	},
	group9: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 170,
	  marginLeft: 21
	},
	image14: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	traXanh: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 87,
	  marginTop: 17
	},
	icon8: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 103,
	  marginTop: 5
	},
	image14Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group8: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: -106,
	  marginLeft: 21
	},
	image13: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnDần: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam5: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 87,
	  marginTop: 17
	},
	icon3: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image13Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group7: {
	  width: 373,
	  height: 50,
	  flexDirection: "row",
	  marginTop: -106,
	  marginLeft: 21
	},
	group6: {
	  width: 50,
	  height: 50
	},
	image12: {
	  height: 50,
	  width: 50
	},
	trầnHoangKha: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 18
	},
	nam6: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 42,
	  marginTop: 18
	},
	icon4: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 6
	},
	group6Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1
	},
	group5: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: -104,
	  marginLeft: 21
	},
	image11: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	coLamMớiCoAn: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam7: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 27,
	  marginTop: 17
	},
	icon5: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image11Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group11: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 226,
	  marginLeft: 21
	},
	image16: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	dộMixi: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam8: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 96,
	  marginTop: 17
	},
	icon6: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image16Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group10: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: -104,
	  marginLeft: 21
	},
	image15: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnDứcBo: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam9: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 66,
	  marginTop: 17
	},
	icon7: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image15Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	}
  });