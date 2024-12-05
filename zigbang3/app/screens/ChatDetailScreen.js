import { height, screenWidth, width } from "../../globalDimension";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";

export default function ({ route }) {
  console.log(route, "routerouteroute");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title={route.params.title} />
        <View style={styles.content}>
          <View style={{}}>
            {/* 채팅내용ㅇ */}

            {route.params?.title === "B 7호 김준미" ? (
              <>
                <View
                  style={{
                    borderRadius: width * 100,
                    overflow: "hidden",
                    width: width * 33,
                    height: width * 33,
                    top: height * 40,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: width * 33,
                      height: height * 33,
                      backgroundColor: "#F4F2F7",
                    }}
                    source={require("./../assets/images/chatpage/profile1.png")}
                    resizeMode={"contain"}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                  }}
                >
                  <Text>지금 방이야?</Text>
                </View>
                <ImageBackground
                  style={{
                    width: width * 35,
                    height: width * 35,
                    position: "absolute",
                    left: width * 40,
                    top: height * 40,
                  }}
                  source={require("./../assets/images/chatpage/Subtract.png")}
                  resizeMode={"contain"}
                />
                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                    top: height * 40,
                  }}
                >
                  <Text>{route.params.data}</Text>
                </View>
                <Text
                  style={{
                    color: "gray",
                    position: "absolute",
                    top: height * 55,
                    left: width * 280,
                  }}
                >
                  4분전
                </Text>
              </>
            ) : (
              <>
                <View style={styles.imgCon}>
                  <ImageBackground
                    style={{
                      width: width * 33,
                      height: width * 33,
                      backgroundColor: "#F4F2F7",
                    }}
                    source={
                      route.params.title === "B 4호 김우인"
                        ? require("./../assets/images/chatpage/profile2.png")
                        : route.params.title === "A 6호 김동인"
                        ? require("./../assets/images/chatpage/profile3.png")
                        : require("./../assets/images/chatpage/profile4.png")
                    }
                    resizeMode={"cover"}
                  />
                </View>

                <ImageBackground
                  style={{
                    width: width * 35,
                    height: width * 35,
                    position: "absolute",
                    left: width * 40,
                    top: route.params.title !== "B 4호 김우인" ? height * 5 : 0,
                  }}
                  source={require("./../assets/images/chatpage/Subtract.png")}
                  resizeMode={"contain"}
                />
                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                    top: route.params.title !== "B 4호 김우인" ? height * 5 : 0,
                  }}
                >
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ maxWidth: width * 240 }}
                  >
                    {route.params.data}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: height * 30,
            borderTopWidth: height * 1,
            width: screenWidth,
            paddingHorizontal: height * 18,
            paddingVertical: height * 12,
            borderColor: "#D9D9D9",
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{
                color: "#D9D9D9",
              }}
            >
              메세지 입력
            </Text>
            <View
              style={{
                backgroundColor: "#FF6804",
                width: width * 44,
                height: height * 20,
                borderRadius: width * 5,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: width * 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width * 10,
                }}
              >
                전송
              </Text>
              <Image
                source={require("./../assets/images/VillageNews/direct-right.png")}
                resizeMode="contain"
              />
            </View>
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
    padding: width * 20,
  },
  imgCon: {
    borderRadius: width * 100,
    overflow: "hidden",
    width: width * 33,
    height: width * 33,
    backgroundColor: "red",
    top: height * 10,
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "500",
  },
});
