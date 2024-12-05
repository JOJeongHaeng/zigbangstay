import { height, screenHeight, width } from "../../globalDimension";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const PostComponent = () => (
  <View>
    <Text>작성한 글이 없습니다.</Text>
  </View>
);
const CommentComponent = () => (
  <View>
    <Text>작성한 댓글이 없습니다.</Text>
  </View>
);

export default function Post() {
  const [selectedTab, setSelectedTab] = useState("Nomal");
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="관심 목록" />
        <View style={styles.content}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={[
                styles.tabButton,
                selectedTab === "Nomal" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Nomal")}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedTab === "Nomal"
                    ? { color: "#fff" }
                    : { color: "#000" },
                ]}
              >
                내가쓴글
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.tabButton,
                selectedTab === "Comment" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Comment")}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedTab === "Comment"
                    ? { color: "#fff" }
                    : { color: "#000" },
                ]}
              >
                댓글
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              height: screenHeight - height * (height * 130),
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedTab === "Nomal" ? <PostComponent /> : <CommentComponent />}
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
  tabButton: {
    width: width * 165,
    height: height * 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 5,
    backgroundColor: "#fff",
    borderWidth: width * 1,
    borderColor: "#E4E4E4",
  },
  tabButtonActive: {
    backgroundColor: "#FF6E40",
  },
});
