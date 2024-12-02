import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, Pressable, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const relativeWidth = (value) => (width / 375) * value;
const relativeHeight = (value) => (height / 812) * value;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} >
        <Text style={styles.title}>어떤 집을 찾고 계신가요?</Text>
    
        <View style={styles.Section1}>
            <View style={StyleSheet.flatten([
              styles.whiteBox1,
              {left: relativeWidth(15)}
            ])}>
              <Image
                source={require('../assets/images/homepage/apart.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>아파트</Text>
            </View>
            
            <View style={StyleSheet.flatten([
              styles.whiteBox1,
              {right: relativeWidth(15)}
            ])}
            >
              <Image
                source={require('../assets/images/homepage/villa.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>빌라/투룸+</Text>
            </View>

            <View style={StyleSheet.flatten([
              styles.whiteBox1,
              { top: +95, left: relativeWidth(15)}
            ])}
            >
              <Image
                source={require('../assets/images/homepage/oneroom.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>원룸</Text>
            </View>

            <View style={StyleSheet.flatten([
              styles.whiteBox1,
              {top: +95, right: relativeWidth(15)}
            ])}
            >
              <Image
                source={require('../assets/images/homepage/officetel.png')}
                style={styles.logo}
                resizeMode="contain"
              />
                <Text style={styles.boxText}>오피스텔</Text>
            </View>

            <View style={StyleSheet.flatten([
                styles.whiteBox1,
                { top: +190, left: relativeWidth(15)}
            ])}
            >
              <Image
                source={require('../assets/images/homepage/sell.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>집 내놓기</Text>
            </View>
            
            <Pressable 
              style={({ pressed }) => [
                styles.whiteBox2,
                { backgroundColor: pressed ? '#f0f0f0' : '#fff' }, // 눌렀을 때 배경색 변화
              ]}
              onPress={() => navigation.navigate('ModuleHomeScreen')}
              >
              <Image
                source={require('../assets/images/homepage/module.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>직방스테이</Text>
              <Image
                source={require('../assets/images/homepage/new.png')}
                style={styles.New}
                resizeMode="contain"
              />
            </Pressable>
        </View>

        <View style={styles.Section2}>
          <Image
            source={require('../assets/images/homepage/ad.png')}
            style={styles.ad}
            resizeMode="contain"
          />
          <Text style={styles.secText}>창업을 고민중이신가요?</Text>
          <View style={StyleSheet.flatten([
              styles.whiteBox1,
              { top: +135, left: relativeWidth(15)}
            ])}
            >
            <Image
              source={require('../assets/images/homepage/downtown.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.boxText}>상가</Text>
          </View>
        </View>

        <StatusBar style="black" />
      </ScrollView>

      <View style={styles.fixedBox}>
        <Image
          source={require('../assets/images/homepage/real.png')}
          style={StyleSheet.flatten([
            styles.logo,
            { top: +20, left: relativeWidth(-90)}
          ])}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/homepage/myhome.png')}
          style={StyleSheet.flatten([
            styles.logo,
            { top: -15, left: relativeWidth(90)}
          ])}
          resizeMode="contain"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  title: {
    position: 'absolute',
    left: relativeWidth(18.58),
    top: relativeHeight(89.53),
    color: '#252525',
    fontFamily: 'Pretendard',
    fontSize: relativeWidth(16),
    fontWeight: '700',
    lineHeight: relativeWidth(24),
  },
  Section1: {
    top: relativeHeight(135),
    width: '100%', // 전체 너비 사용
    height: relativeHeight(350), // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },
  Section2: {
    top: relativeHeight(135),
    width: '100%', // 전체 너비 사용
    height: relativeHeight(280), // 배경 높이
    backgroundColor: '#fff', // 흰 배경
  },

  whiteBox1: {
    position: 'absolute',
    top: relativeHeight(0),
    width: relativeWidth((width - 40)/2),
    height: relativeHeight(105.856),
    flexShrink: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 0.8, // 테두리 두께 (0.8px)
    borderColor: '#E4E4E4', // 테두리 색상
    shadowColor: '#E4E4E4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  whiteBox2: {
    position: 'absolute',
    top: relativeWidth(190),
    right: relativeWidth(15),
    width: relativeWidth((width - 40)/2),
    height: relativeHeight(105.856),
    flexShrink: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 0.8, // 테두리 두께 (0.8px)
    borderColor: '#E4E4E4', // 테두리 색상
    shadowColor: '#E4E4E4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  boxText: {
    position: 'absolute',
    top: relativeHeight(75.01),
    textAlign: 'center',
    color: '#252525',
    fontSize: 12,
    fontWeight: 600,
  },

  logo: {
    width: relativeWidth(43.5),
    height: relativeHeight(43.5),
  },

  New: {
    width: relativeWidth(11),
    height: relativeHeight(11),
    left: relativeHeight(45),
    top: relativeHeight(10)
  },
  ad: {
    top: relativeHeight(10),
    width: relativeWidth(width - 10),
    height: relativeHeight(100),
  },
  secText: {
    textAlign: 'left',
    marginTop: 29,
    marginLeft: 15,
    color: '#A2A2A2',
    fontSize: 12,
    fontWeight: 600,
  },
  whiteBox3: {
    width: width,
    height: relativeHeight(93.47),
    flexShrink: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0.8, // 테두리 두께 (0.8px)
    borderColor: '#E4E4E4', // 테두리 색상
    shadowColor: '#E4E4E4',
    elevation: 3,
  },
  fixedBox: {
    width: width,
    height: relativeHeight(92.35),
    flexShrink: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0.8, // 테두리 두께 (0.8px)
    borderColor: '#E4E4E4', // 테두리 색상
    shadowColor: '#E4E4E4',
    elevation: 3,
  },
  scrollContent: {
    flexGrow: 1, // 콘텐츠가 부족할 경우 ScrollView의 크기를 확장
    paddingBottom: relativeHeight(130), // 아래쪽 여백 확보 (고정된 요소와 겹치지 않도록)
    justifyContent: 'flex-start', // 콘텐츠 정렬 (상단에서 시작)
    alignItems: 'center', // 가로축 중앙 정렬
  },
}); 