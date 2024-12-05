import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import { height, width } from "../../globalDimension";

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="프로필 설정" />
        <View style={styles.content}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              paddingTop: height * 48,
              paddingBottom: height * 30,
              borderBottomWidth: width * 1,
              borderColor: "#E3E3E3",
            }}
          >
            <View style={styles.imgCon}>
              <ImageBackground
                style={{
                  width: width * 100,
                  height: width * 100,
                  backgroundColor: "#F4F2F7",
                }}
                source={require("./../assets/images/MenuScreen/yunzi.png")}
                resizeMode={"contain"}
              />
            </View>
            <Text
              style={{
                paddingTop: height * 10,
                color: "#FF6804",
                fontFamily: "Pretendard",
                fontSize: width * 12,
                fontWeight: "bold",
              }}
            >
              사진 수정
            </Text>
          </View>
          <View
            style={{
              paddingTop: height * 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingBottom: height * 20,
              }}
            >
              <View style={{ marginRight: width * 50 }}>
                <Text style={styles.categoryText}>이름</Text>
              </View>
              <Text style={styles.categoryText}>A 10호 박윤지</Text>
              <Text
                style={[
                  styles.categoryText,
                  { color: "#D9D9D9", marginLeft: width * 7 },
                ]}
              >
                * 이름은 실명제로 변경이 불가합니다.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: height * 20,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: width * 40 }}>
              <Text style={styles.categoryText}>이메일</Text>
            </View>
            <Text style={[styles.categoryText, { marginRight: width * 5 }]}>
              yuuunji2@gmail.com
            </Text>
            <Image
              source={require("./../assets/images/edit-2.png")}
              resizeMode={"contain"}
            />
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
  imgCon: {
    borderRadius: width * 100,
    overflow: "hidden",
    width: width * 100,
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "500",
  },
});
