import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Announcementdata, NoticeBoardData } from "../lib/data";
import {
  height,
  screenHeight,
  screenWidth,
  width,
} from "../../globalDimension";
import Header from "../components/Header";

// 인덱스 페이지 변경할때 보더 폴더로 이동

// 공지사항
const AnnouncementComponent = ({ selectedTab, setSelectedTab }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            gap: width * 10,
            paddingVertical: height * 20,
            borderBottomWidth: width * 0.5,
            borderColor: "#D9D9D9",
          }}
        >
          <ImageBackground
            style={{
              width: width * 165,
              height: height * 110,
              backgroundColor: "#F4F2F7",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            source={item.img}
            resizeMode={"cover"}
          >
            {item.essential && (
              <View
                style={{
                  zIndex: 3,
                }}
              >
                <Text style={[styles.categoryText, { color: "#fff" }]}>
                  {item.discripte}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#D9D9D9",
                    fontSize: width * 10,
                  }}
                >
                  필독바람
                </Text>
              </View>
            )}
          </ImageBackground>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: width * 2,
                alignItems: "center",
              }}
            >
              <Image
                source={require("./../assets/images/VillageNews/volume-high.png")}
                style={styles.homebutton}
                resizeMode="contain"
              />
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{ flex: 1, width: width * 160, fontSize: width * 10 }}
            >
              {item.content}
            </Text>
            <Text style={{ color: "#D9D9D9", fontSize: width * 10 }}>
              {item.date}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: height * 18,
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
              selectedTab === "Nomal" ? { color: "#fff" } : { color: "#000" },
            ]}
          >
            공지사항
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
              selectedTab === "Comment" ? { color: "#fff" } : { color: "#000" },
            ]}
          >
            게시판
          </Text>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={Announcementdata}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      decelerationRate="fast"
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
// 게시판
const NoticeBoardCommentComponent = ({
  selectedTab,
  setSelectedTab,
  route,
}) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          route(item);
        }}
      >
        <View
          style={{
            gap: width * 10,
            paddingTop: height * 20,
            paddingBottom: height * 12,
            borderBottomWidth: width * 0.5,
            borderColor: "#D9D9D9",
            width: screenWidth - width * 36,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: width * 7,
            }}
          >
            <View
              style={{
                width: width * 25,
                height: width * 25,
                borderRadius: width * 25,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <ImageBackground
                style={{
                  width: width * 25,
                  height: width * 25,
                  backgroundColor: "#F4F2F7",
                }}
                source={item.img}
                resizeMode={"contain"}
              />
            </View>
            <Text style={styles.categoryText}>{item.id}</Text>
          </View>

          <View
            style={{
              gap: 10,
            }}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                width: width * 300,
                fontSize: width * 10,
                paddingBottom: height * 17,
              }}
            >
              {item.content}
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View>
                <Text style={{ color: "#D9D9D9", fontSize: width * 10 }}>
                  {item.date}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  gap: width * 17,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text>{item.heart}</Text>

                  <Image
                    source={require("./../assets/images/VillageNews/heart.png")}
                    style={styles.homebutton}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",

                    gap: 6,
                  }}
                >
                  <Text>{item.comment}</Text>
                  <Image
                    source={require("./../assets/images/VillageNews/message.png")}
                    style={styles.homebutton}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: height * 18,
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
              selectedTab === "Nomal" ? { color: "#fff" } : { color: "#000" },
            ]}
          >
            공지사항
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
              selectedTab === "Comment" ? { color: "#fff" } : { color: "#000" },
            ]}
          >
            게시판
          </Text>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={NoticeBoardData}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Screen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Nomal");
  const route = (data) => {
    navigation.navigate("VillageNewsDetailScreen", {
      data,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="dark-content" />
        <Header title="우리 마을 소식" />
        <View style={styles.content}>
          <View
            style={{
              height: screenHeight - height * (height * 110),
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedTab === "Nomal" ? (
              <AnnouncementComponent
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            ) : (
              <NoticeBoardCommentComponent
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                route={route}
              />
            )}
          </View>
        </View>
        <Pressable style={styles.button}>
          <Image
            source={require("./../assets/images/VillageNews/messages-3.png")}
            style={styles.homebutton}
            resizeMode="contain"
          />
        </Pressable>
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
    // paddingVertical: height * 16,
    paddingHorizontal: width * 18,
  },
  homebutton:{
    width: 24,
    height: 24,
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
  tabButton: {
    width: width * 165,
    height: height * 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 5,
    backgroundColor: "#fff",
    elevation: 5, // 안드로이드에서 그림자
    shadowColor: "#000", // iOS에서    그림자
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  tabButtonActive: {
    backgroundColor: "#FF6840",
  },
  button: {
    position: "absolute",
    bottom: height * 28,
    right: width * 18,
    width: width * 50,
    height: width * 50,
    borderRadius: width * 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    // 안드로이드 그림자
    elevation: 5,
    // iOS 그림자
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
