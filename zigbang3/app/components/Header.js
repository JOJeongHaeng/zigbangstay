import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { height, width } from "../../globalDimension";

export default function Header({ title = "" }) {
  const [menu, setMenu] = useState(false);

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };
  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }], // 홈 화면으로 스택 재설정
      })
    );
  };

  const toggleMenu = () => {
    setMenu(!menu);
    navigation.navigate("MenuScreen");
  };

  return (
    <>
      <View>
        <View style={styles.header}>
          {/* 뒤로가기 */}
          <View style={styles.left}>
            <Pressable onPress={back}>
              <View style={styles.leftView}>
                <Image source={require("../assets/images/Back.png")} />
              </View>
            </Pressable>
            {/* 제목 */}
            <Text style={styles.headerText}>{title}</Text>
          </View>

          <View style={styles.menuView}>
            <Pressable onPress={goHome}>
              <Image source={require("../assets/images/Home.png")} />
            </Pressable>
            <Pressable onPress={toggleMenu}>
              <Image source={require("../assets/images/Menu.png")} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height * 49,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: width * 12,
    borderBottomWidth: 1,
    borderBlockColor: "#ddd",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 18,
  },
  leftView: {
    width: width * 28,
    height: width * 28,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#000",
    fontSize: width * 17,
    fontWeight: "bold",
  },
  menuView: {
    // width: width * 28,
    // height: width * 28,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: width * 10,
  },
});
