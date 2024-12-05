import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import { CommonActions } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const interestItems = [
  {
    id: 1,
    image: require("../assets/images/modulepage/room1.png"),
    title: "매매 1000만원",
    description: "태안군 감자마을 A구역 2호",
  },
  {
    id: 2,
    image: require("../assets/images/modulepage/room2.png"),
    title: "매매 1000만원",
    description: "00시 토마토마을 A구역 8호",
  },
];

const recentItems = [
  {
    id: 1,
    image: require("../assets/images/modulepage/room2.png"),
    title: "매매 1000만원",
    description: "00시 토마토마을 A구역 8호",
  },
  {
    id: 2,
    image: require("../assets/images/modulepage/room1.png"),
    title: "매매 1000만원",
    description: "태안군 감자마을 A구역 2호",
  },
  {
    id: 3,
    image: require("../assets/images/modulepage/room3.png"),
    title: "매매 3000만원",
    description: "태안군 감자마을 c구역 2호",
  },
];

export default function ModuleHomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/modulepage/modulehouse1.png")}
          style={styles.moduleHouse1}
        >
          <View style={{flexDirection: 'row', marginTop: 50}}>
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require("../assets/images/modulepage/angle.png")}
                style={styles.angle}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => {
                navigation.navigate("ChatScreen");
              }}
            >
              <Image
                source={require("../assets/images/modulepage/chat.png")}
                style={[styles.topButton, {marginLeft: 240}]}
                resizeMode="contain"
              />
            </Pressable>
            
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "HomeScreen" }],
                  })
                );
              }}
            >
              <Image
                source={require("../assets/images/modulepage/home.png")}
                style={[styles.topButton, {marginLeft: 10}]}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => {
                navigation.navigate("MenuScreen");
              }}
            >
              <Image
                source={require("../assets/images/modulepage/menu-bar.png")}
                style={[styles.topButton, {marginLeft: 10}]}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          
          <Text style={styles.mainCategoryText}>직방스테이</Text>
          <Text style={styles.mainsubText}>
            나만의 쉼터, 모듈하우스로 경험해보세요.
          </Text>

          <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'center', gap: 20,}}>
            <Pressable
              style={({ pressed }) => [
                styles.whiteBox,
                { backgroundColor: pressed ? "#f0f0f0" : "#fff" },
              ]}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <Image
                source={require("../assets/images/modulepage/search.png")}
                style={styles.search}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.whiteBox,
                { backgroundColor: pressed ? "#f0f0f0" : "#fff" },
              ]}
              onPress={() => navigation.navigate("VillageNewsScreen")}
            >
                <Image
                  source={require("../assets/images/modulepage/our-village.png")}
                  style={styles.ourVillage}
                  resizeMode="contain"
                />
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.section}>
          <Text style={styles.seeAllText}>전체보기</Text>
          <Text style={styles.interestText}>관심 매물</Text>
          <FlatList
            data={interestItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate("WatchlistScreen")}>
                <View style={styles.interestItem}>
                  <Image source={item.image} style={styles.interestImage} />
                  <Text style={styles.interestTitle}>{item.title}</Text>
                  <Text style={styles.interestDescription}>
                    {item.description}
                  </Text>
                </View>
              </Pressable>
            )}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <View style={[styles.section, {borderBottomWidth: 1, borderBottomColor: "#E0E0E0"}]}>
          <Image
            source={require("../assets/images/modulepage/ad.png")}
            style={styles.ad}
            resizeMode="contain"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.viewedText}>최근 본</Text>
          <FlatList
            data={recentItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.interestItem}>
                <Image source={item.image} style={styles.interestImage} />
                <Text style={styles.interestTitle}>{item.title}</Text>
                <Text style={styles.interestDescription}>
                  {item.description}
                </Text>
              </View>
            )}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  moduleHouse1: {
    width: width,
    height: 270,
  },
  angle: {
    marginLeft: 16,
    width: 18,
    height: 22,
  },
  mainCategoryText: {
    paddingTop: 60,
    left: 20,
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },
  mainsubText: {
    left: 20, 
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
  topButton: {
    width: 22,
    height: 22,
  },
  whiteBox: {
    width: width * 0.4,
    height: height * 0.12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  search: {
    width: width * 0.14,
    height: height * 0.07,
  },
  ourVillage: {
    width: width * 0.16,
    height: height * 0.07,
  },
  section: {
    marginTop: 40,
    width: width,
    marginHorizontal: 20,
  },
  seeAllText: {
    top: 10,
    alignSelf: "flex-end",
    color: "#CACACA",
    fontSize: 10,
    fontWeight: "600",
  },
  interestText: {
    color: "#404040",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  interestItem: {
    width: width * 0.4,
    marginRight: 16,
  },
  interestImage: {
    width: width * 0.33,
    height: height * 0.15,
    marginBottom: 10,
  },
  interestTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#404040",
  },
  interestDescription: {
    fontSize: 12,
    color: "#BCBCBC",
    textAlign: "center",
  },
  viewedText: {
    color: "#404040",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  ad: {
    width: width - 40,
    height: height * 0.15,
    resizeMode: "contain",
  },
});
