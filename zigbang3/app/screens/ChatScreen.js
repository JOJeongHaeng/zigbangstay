import { height, screenWidth, width } from "../../globalDimension";

import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Chat({ navigation }) {
  const navigate = (title, data) => {
    console.log(title, "title");

    navigation.navigate("ChatDetailScreen", {
      title,
      data,
    });
    // navigate.push({
    //   pathname: "/chatpage/detail",
    //   params: {
    //     title,
    //     data,
    //   },
    // });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="채팅" />
        {/* 1채팅 */}
        <View
          style={{
            borderBottomWidth: width * 1,
            paddingVertical: height * 19,
            paddingHorizontal: width * 18,
            borderBottomColor: "#D9D9D9",
          }}
        >
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() =>
              navigate("B 7호 김준미", "고기 남았는데 줄까? 좀 많이 많음!")
            }
          >
            <View style={styles.chatItem}>
              <View
                style={{
                  flexDirection: "row",
                  gap: width * 10,
                }}
              >
                <View style={styles.bgimg}>
                  <ImageBackground
                    style={styles.imgbg}
                    source={require("./../assets/images/chatpage/profile1.png")}
                    resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
                  />
                </View>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>B 7호 김준미</Text>
                  <Text style={styles.text}>
                    고기 남았는데 줄까? 좀 많이 많음!
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: height * 50,
                  alignItems: "flex-end",
                  gap: height * 4,
                }}
              >
                <Text
                  style={{
                    fontSize: width * 10,
                    color: "gray",
                    fontWeight: "medium",
                  }}
                >
                  4분전
                </Text>
                <View
                  style={{
                    backgroundColor: "#F8543E",
                    borderRadius: width * 10,
                    width: width * 18,
                    height: width * 16,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}>2</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        {/* 2채팅 */}
        <View
          style={{
            borderBottomWidth: width * 1,
            paddingVertical: height * 19,
            paddingHorizontal: width * 18,
            borderBottomColor: "#D9D9D9",
          }}
        >
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() =>
              navigate(
                "B 4호 김우인",
                "아니 저번에 이불 갈았는데, 향이 진짜 미쳤어 향기로워 죽는 줄..."
              )
            }
          >
            <View style={styles.chatItem}>
              <View
                style={{
                  flexDirection: "row",
                  gap: width * 10,
                }}
              >
                <View style={styles.bgimg}>
                  <ImageBackground
                    style={styles.imgbg}
                    source={require("./../assets/images/chatpage/profile2.png")}
                    resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
                  />
                </View>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>B 4호 김우인</Text>
                  <Text
                    style={[styles.text, { width: width * 220 }]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    아니 저번에 이불 갈았는데, 향이 진짜 미쳤어 향기로워 죽는
                    줄...
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: height * 50,
                  alignItems: "flex-end",
                  gap: height * 4,
                }}
              >
                <Text
                  style={{
                    fontSize: width * 10,
                    color: "gray",
                    fontWeight: "medium",
                  }}
                >
                  어제
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        {/* 3채팅 */}
        <View
          style={{
            borderBottomWidth: width * 1,
            paddingVertical: height * 19,
            paddingHorizontal: width * 18,
            borderBottomColor: "#D9D9D9",
          }}
        >
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => navigate("A 6호 김동인", "산책 ㄱㄱ 8시 라운지 앞")}
          >
            <View style={styles.chatItem}>
              <View
                style={{
                  flexDirection: "row",
                  gap: width * 10,
                }}
              >
                <View style={styles.bgimg}>
                  <ImageBackground
                    style={styles.imgbg}
                    source={require("./../assets/images/chatpage/profile3.png")}
                    resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
                  />
                </View>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>A 6호 김동인</Text>
                  <Text style={styles.text}>산책 ㄱㄱ 8시 라운지 앞</Text>
                </View>
              </View>
              <View
                style={{
                  height: height * 50,
                  alignItems: "flex-end",
                  gap: height * 4,
                }}
              >
                <Text
                  style={{
                    fontSize: width * 10,
                    color: "gray",
                    fontWeight: "medium",
                  }}
                >
                  11.2
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        {/* 4채팅 */}
        <View
          style={{
            borderBottomWidth: width * 1,
            paddingVertical: height * 19,
            paddingHorizontal: width * 18,
            borderBottomColor: "#D9D9D9",
          }}
        >
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => navigate("A 7호 한혜인", "넵 감사합니당")}
          >
            <View style={styles.chatItem}>
              <View
                style={{
                  flexDirection: "row",
                  gap: width * 10,
                }}
              >
                <View style={styles.bgimg}>
                  <ImageBackground
                    style={styles.imgbg}
                    source={require("./../assets/images/chatpage/profile4.png")}
                    resizeMode={"cover"}
                  />
                </View>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>A 7호 한혜인</Text>
                  <Text style={styles.text}>넵 감사합니당</Text>
                </View>
              </View>
              <View
                style={{
                  height: height * 50,
                  alignItems: "flex-end",
                  gap: height * 4,
                }}
              >
                <Text
                  style={{
                    fontSize: width * 10,
                    color: "gray",
                    fontWeight: "medium",
                  }}
                >
                  10.21
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",
            position: "absolute",
            bottom: Platform.OS === "android" ? height * 40 : 0,
            width: screenWidth,
          }}
        >
          <View style={styles.search}>
            <View style={{ left: width * 17, position: "absolute" }}>
              <Image source={require("./../assets/images/Search.png")} />
            </View>
            <Text style={styles.searchText}>거주자 검색하기</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    fontWeight: 600,
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
  bgimg: {
    width: width * 50,
    height: height * 50,
    borderRadius: width * 50,
    overflow: "hidden",
  },
  imgbg: {
    width: width * 50,
    height: height * 50,
    backgroundColor: "#F4F2F7",
  },
  chatItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    bottom:20,
    width: width * 275,
    height: height * 30,
    borderRadius: width * 20,
    borderWidth: width * 1,
    borderColor: "#BCBCBC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  searchText: {
    fontSize: width * 11,
    fontWeight: "500",
    color: "#BCBCBC",
  },
});
