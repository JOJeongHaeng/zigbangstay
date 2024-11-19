import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, Pressable } from 'react-native';

const { width, height } = Dimensions.get('window');

const relativeWidth = (value) => (width / 375) * value;
const relativeHeight = (value) => (height / 812) * value;

export default function ModuleHomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/modulepage/modulehouse1.png')}
          style={styles.moduleHouse1}
        >
          <Text style={styles.mainCategoryText}>모듈하우스</Text>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 }, // 누를 때 투명도 변경
            ]}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Image
              source={require('../assets/images/modulepage/angle.png')}
              style={styles.Angle}
            />
          </Pressable>
          <Image
            source={require('../assets/images/modulepage/menu-bar.png')}
            style={styles.menuBar}
          />

          {/* whiteBoxFirst를 클릭하면 MapScreen으로 이동 */}
          <Pressable 
              style={({ pressed }) => [
                styles.whiteBoxFirst,
                { backgroundColor: pressed ? '#f0f0f0' : '#fff' }, // 눌렀을 때 배경색 변화
              ]}
              onPress={() => navigation.navigate('MapScreen')}
            >
            <Image
              source={require('../assets/images/modulepage/search.png')}
              style={styles.Search}
            />
          </Pressable>

          <View style={styles.whiteBoxSecond}>
            <Image
              source={require('../assets/images/modulepage/our-village.png')}
              style={styles.Ourvillage}
            />
          </View>
        </ImageBackground>

        <View style={styles.Section1}>
          <Text style={styles.seeallText}>전체보기</Text>
          <Text style={styles.interestText}>관심 매물</Text>
        </View>
        <View style={styles.Section2}>
          <Image
            source={require('../assets/images/modulepage/ad.png')}
            style={styles.ad}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.Section3}>
          <Text style={styles.viewedText}>최근 본</Text>
        </View>

        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moduleHouse1: {
    width: width,
    height: relativeHeight(271.396),
    flexShrink: 0,
    backgroundColor: 'lightgray',
  },
  Angle: {
    position: 'absolute',
    left: relativeWidth(16.33),
    top: relativeHeight(57),
    width: relativeWidth(18),
    height: relativeHeight(22),
    flexShrink: 0,
  },
  mainCategoryText: {
    position: 'absolute',
    left: relativeWidth(21.96),
    top: relativeHeight(135.61),
    color: '#FFF',
    fontFamily: 'Pretendard',
    fontSize: relativeWidth(24),
    fontWeight: '700',
    lineHeight: relativeWidth(24),
  },
  menuBar: {
    position: 'absolute',
    left: relativeWidth(338.88),
    top: relativeHeight(59.65),
    width: relativeWidth(19),
    height: relativeHeight(19),
    flexShrink: 0,
  },
  whiteBoxFirst: {
    position: 'absolute',
    left: relativeWidth(16.33),
    top: relativeHeight(225.23),
    width: relativeWidth(163.85),
    height: relativeHeight(91.78),
    flexShrink: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  whiteBoxSecond: {
    position: 'absolute',
    right: relativeWidth(16.33),
    top: relativeHeight(225.23),
    width: relativeWidth(163.85),
    height: relativeHeight(91.78),
    flexShrink: 0,
    backgroundColor: '#fff', // 배경색 흰색으로 설정
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // 모서리 둥글게 설정 (옵션)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  Search: {
    width: relativeWidth(53.827),
    height: relativeHeight(50),
  },
  Ourvillage: {
    width: relativeWidth(65),
    height: relativeHeight(50),
  },
  Section1: {
    position: 'absolute',
    top: relativeHeight(328), // y = 328 위치
    width: relativeWidth(375), // 배경 너비
    height: relativeHeight(195.95), // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  seeallText: {
    position: 'absolute',
    right: relativeWidth(20.27),
    top: relativeHeight(13.21),
    color: '#CACACA',
    fontFamily: 'Pretendard',
    fontSize: relativeWidth(10),
    fontWeight: '600',
    lineHeight: relativeWidth(24),
  },
  interestText: {
    position: 'absolute',
    left: relativeWidth(18.02),
    top: relativeHeight(10.21),
    color: '#404040',
    fontFamily: 'Pretendard',
    fontSize: relativeWidth(15),
    fontWeight: '600',
    lineHeight: relativeWidth(24),
  },
  Section2: {
    position: 'absolute',
    top: relativeHeight(523.37), // y = 328 위치
    width: relativeWidth(375), // 배경 너비
    height: relativeHeight(130.95), // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },

  Section3: {
    position: 'absolute',
    top: relativeHeight(653), // y = 328 위치
    width: relativeWidth(375), // 배경 너비
    height: relativeHeight(195.95), // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewedText: {
    position: 'absolute',
    left: relativeWidth(18.02),
    top: relativeHeight(10.21),
    color: '#404040',
    fontFamily: 'Pretendard',
    fontSize: relativeWidth(15),
    fontWeight: '600',
    lineHeight: relativeWidth(24),
  },
  ad: {
    width: relativeWidth(width - 10),
    height: relativeHeight(100),
  },
});