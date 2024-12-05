import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { width, height } from "../../globalDimension";
import Header from "../components/Header";

export default function Screen() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        {/* 헤더 */}
        <StatusBar barStyle="dark-content" />
        <Header title="관심 목록" />
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={styles.content}>
            <View style={{ gap: height * 20 }}>
              <View style={styles.item}>
                <ImageBackground
                  style={{
                    width: width * 165,
                    height: height * 110,
                    backgroundColor: "#F4F2F7",
                  }}
                  source={require("../assets/images/watchlistpage/room1.png")}
                  resizeMode={"cover"}
                />
                <View style={{ justifyContent: "space-between" }}>
                  <View style={{ gap: height * 1 }}>
                    <Text style={styles.subtitleText}>태안군 감자마을</Text>
                    <Text style={styles.text}>A구역 2호</Text>
                  </View>
                  <Text style={styles.subtitleText}>매매 1000만원</Text>
                </View>
              </View>
              <View style={styles.item}>
                <ImageBackground
                  style={{
                    width: width * 165,
                    height: height * 110,
                    backgroundColor: "#F4F2F7",
                  }}
                  source={require("../assets/images/watchlistpage/room2.png")}
                  resizeMode={"cover"}
                />
                <View style={{ justifyContent: "space-between" }}>
                  <View style={{ gap: height * 1 }}>
                    <Text style={styles.subtitleText}>00시 토마토마을</Text>
                    <Text style={styles.text}>A구역 8호</Text>
                  </View>
                  <Text style={styles.subtitleText}>매매 1000만원</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 18,
  },
  item: {
    flexDirection: "row",
    gap: width * 11,
    borderBottomWidth: width * 1,
    paddingBottom: height * 20,
    borderColor: "#D9D9D9",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainCategoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 24,
    fontWeight: "bold",
  },
  titleText: {
    fontFamily: "Pretendard",
    fontSize: width * 16,
    fontWeight: "bold",
  },
  subtitleText: {
    fontFamily: "Pretendard",
    fontSize: width * 15,
    fontWeight: "semibold",
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "semibold",
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "medium",
  },
});
