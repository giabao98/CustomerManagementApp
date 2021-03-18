import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import { StyleSheet, View, Image } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton_1";
import CupertinoSearchBarWithCancelButton1 from "../components/CupertinoSearchBarWithCancelButton1_1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
export default function ({ navigation }) {
	return (
		<Layout navigation={navigation}>
			<View style={styles.container}>
      <CupertinoHeaderWithActionButton
        style={styles.cupertinoHeaderWithActionButton1}
      ></CupertinoHeaderWithActionButton>
      <CupertinoSearchBarWithCancelButton1
        style={styles.cupertinoSearchBarWithCancelButton1}
      ></CupertinoSearchBarWithCancelButton1>
      <View style={styles.rect1StackRow}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <Text style={styles.lọc}>Lọc</Text>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon1}></EntypoIcon>
        </View>
        <View style={styles.lọc1StackStack}>
          <View style={styles.lọc1Stack}>
            <Text style={styles.lọc1}>Lọc</Text>
            <View style={styles.rect2}>
              <Text style={styles.tangDần}>Tăng dần</Text>
            </View>
            <EntypoIcon name="chevron-down" style={styles.icon12}></EntypoIcon>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon11}></EntypoIcon>
        </View>
      </View>
      <View style={styles.group1}>
        <View style={styles.user1Row}>
          <Text style={styles.user1}>User</Text>
          <Text style={styles.name1}>Name</Text>
          <Text style={styles.giớiTinh1}>Giới tính</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.image1Row}>
          <Image
            source={require("../assets/images/image_QKIa..png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.nguyễnTuấnHuy1}>Nguyễn Tuấn Huy</Text>
          <Text style={styles.nam2}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon2}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/image_PkKT..png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.trầnThanhTam1}>Trần Thanh Tâm</Text>
          <Text style={styles.nữ1}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon3}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.image3Row}>
          <Image
            source={require("../assets/images/image_vpc7..png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.trứngRanCầnMỡ1}>Trứng Rán Cần mỡ</Text>
          <Text style={styles.nữ2}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.image4Row}>
          <Image
            source={require("../assets/images/image_EJMW..png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.coLamMớiCoAn1}>Có Làm Mới Có Ăn</Text>
          <Text style={styles.nam3}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon5}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group6}>
        <View style={styles.group7Row}>
          <View style={styles.group7}>
            <Image
              source={require("../assets/images/image_R0CS..png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </View>
          <Text style={styles.trầnHoangKha1}>Trần Hoàng Kha</Text>
          <Text style={styles.nam4}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon6}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group8}>
        <View style={styles.image6Row}>
          <Image
            source={require("../assets/images/image_QGyl..png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Text style={styles.trầnDần1}>Trần Dần</Text>
          <Text style={styles.nam5}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon7}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group9}>
        <View style={styles.image7Row}>
          <Image
            source={require("../assets/images/image_O7cf..png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <Text style={styles.traXanh1}>Trà Xanh</Text>
          <Text style={styles.nữ3}>Nữ</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon8}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group10}>
        <View style={styles.image8Row}>
          <Image
            source={require("../assets/images/image_u2Fc..png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Text style={styles.trầnDứcBo1}>Trần Đức Bo</Text>
          <Text style={styles.nam6}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon9}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.group11}>
        <View style={styles.image9Row}>
          <Image
            source={require("../assets/images/image_g8jP..png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <Text style={styles.dộMixi1}>Độ Mixi</Text>
          <Text style={styles.nam7}>Nam</Text>
          <FontAwesomeIcon
            name="exclamation-circle"
            style={styles.icon10}
          ></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles.rect3Row}>
        <View style={styles.rect3}>
          <View style={styles.filter1Row}>
            <Text style={styles.filter1}>filter 1</Text>
            <EntypoIcon
              name="circle-with-cross"
              style={styles.icon13}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.filter2Row}>
            <Text style={styles.filter2}>filter 2</Text>
            <EntypoIcon
              name="circle-with-cross"
              style={styles.icon14}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.rect5}>
          <View style={styles.filter3Row}>
            <Text style={styles.filter3}>filter 3</Text>
            <EntypoIcon
              name="circle-with-cross"
              style={styles.icon15}
            ></EntypoIcon>
          </View>
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
	cupertinoHeaderWithActionButton1: {
	  height: 47,
	  width: 389,
	  marginTop: 22,
	  marginLeft: 17
	},
	cupertinoSearchBarWithCancelButton1: {
	  height: 49,
	  width: 390,
	  backgroundColor: "rgba(255,255,255,1)",
	  marginTop: 13,
	  marginLeft: 12
	},
	rect1: {
	  top: 2,
	  left: 0,
	  width: 119,
	  height: 30,
	  position: "absolute",
	  backgroundColor: "rgba(206,205,205,1)",
	  borderRadius: 7
	},
	lọc: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 6,
	  marginLeft: 10
	},
	icon1: {
	  top: 0,
	  left: 88,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 31
	},
	rect1Stack: {
	  width: 119,
	  height: 35
	},
	lọc1: {
	  top: 8,
	  left: 10,
	  position: "absolute",
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16
	},
	rect2: {
	  top: 2,
	  left: 0,
	  width: 119,
	  height: 30,
	  position: "absolute",
	  backgroundColor: "rgba(206,205,205,1)",
	  borderRadius: 7
	},
	tangDần: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  fontSize: 16,
	  marginTop: 6,
	  marginLeft: 10
	},
	icon12: {
	  top: 0,
	  left: 88,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 31
	},
	lọc1Stack: {
	  top: 0,
	  left: 0,
	  width: 119,
	  height: 35,
	  position: "absolute"
	},
	icon11: {
	  top: 0,
	  left: 88,
	  position: "absolute",
	  color: "rgba(128,128,128,1)",
	  fontSize: 31
	},
	lọc1StackStack: {
	  width: 119,
	  height: 35,
	  marginLeft: 20
	},
	rect1StackRow: {
	  height: 35,
	  flexDirection: "row",
	  marginTop: 5,
	  marginLeft: 21,
	  marginRight: 135
	},
	group1: {
	  width: 257,
	  height: 16,
	  flexDirection: "row",
	  marginTop: 65,
	  marginLeft: 31
	},
	user1: {
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	name1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 36
	},
	giớiTinh1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 104
	},
	user1Row: {
	  height: 16,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group2: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 11,
	  marginLeft: 21
	},
	image1: {
	  height: 50,
	  width: 50
	},
	nguyễnTuấnHuy1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 33,
	  marginTop: 17
	},
	icon2: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image1Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group3: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 5,
	  marginLeft: 21
	},
	image2: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnThanhTam1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 42,
	  marginTop: 17
	},
	icon3: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 103,
	  marginTop: 5
	},
	image2Row: {
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
	image3: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trứngRanCầnMỡ1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ2: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 26,
	  marginTop: 17
	},
	icon4: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 104,
	  marginTop: 5
	},
	image3Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1
	},
	group5: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 4,
	  marginLeft: 21
	},
	image4: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	coLamMớiCoAn1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam3: {
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
	image4Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group6: {
	  width: 373,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 4,
	  marginLeft: 21
	},
	group7: {
	  width: 50,
	  height: 50
	},
	image5: {
	  height: 50,
	  width: 50
	},
	trầnHoangKha1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 18
	},
	nam4: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 42,
	  marginTop: 18
	},
	icon6: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 6
	},
	group7Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1
	},
	group8: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 6,
	  marginLeft: 21
	},
	image6: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnDần1: {
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
	icon7: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image6Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group9: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 6,
	  marginLeft: 21
	},
	image7: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	traXanh1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nữ3: {
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
	image7Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group10: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 6,
	  marginLeft: 21
	},
	image8: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	trầnDứcBo1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam6: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 66,
	  marginTop: 17
	},
	icon9: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image8Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	group11: {
	  width: 372,
	  height: 50,
	  flexDirection: "row",
	  marginTop: 4,
	  marginLeft: 21
	},
	image9: {
	  height: 50,
	  width: 50,
	  borderRadius: 100
	},
	dộMixi1: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 25,
	  marginTop: 17
	},
	nam7: {
	  fontFamily: "roboto-regular",
	  color: "#121212",
	  marginLeft: 96,
	  marginTop: 17
	},
	icon10: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 40,
	  marginLeft: 92,
	  marginTop: 5
	},
	image9Row: {
	  height: 50,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: -1
	},
	rect3: {
	  width: 88,
	  height: 27,
	  backgroundColor: "#E6E6E6",
	  flexDirection: "row"
	},
	filter1: {
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	icon13: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 15,
	  height: 16,
	  width: 15,
	  marginLeft: 24
	},
	filter1Row: {
	  height: 16,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: 5,
	  marginLeft: 5,
	  marginTop: 5
	},
	rect4: {
	  width: 88,
	  height: 27,
	  backgroundColor: "#E6E6E6",
	  flexDirection: "row",
	  marginLeft: 18
	},
	filter2: {
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	icon14: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 15,
	  height: 16,
	  width: 15,
	  marginLeft: 20
	},
	filter2Row: {
	  height: 16,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: 5,
	  marginLeft: 8,
	  marginTop: 5
	},
	rect5: {
	  width: 88,
	  height: 27,
	  backgroundColor: "#E6E6E6",
	  flexDirection: "row",
	  marginLeft: 28
	},
	filter3: {
	  fontFamily: "roboto-regular",
	  color: "#121212"
	},
	icon15: {
	  color: "rgba(128,128,128,1)",
	  fontSize: 15,
	  height: 16,
	  width: 15,
	  marginLeft: 18
	},
	filter3Row: {
	  height: 16,
	  flexDirection: "row",
	  flex: 1,
	  marginRight: 5,
	  marginLeft: 11,
	  marginTop: 5
	},
	rect3Row: {
	  height: 27,
	  flexDirection: "row",
	  marginTop: -571,
	  marginLeft: 26,
	  marginRight: 78
	}
  });