import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MenuScreen({ navigation }) {
  const slideAnim = useRef(new Animated.Value(250)).current; // 초기 위치: 오른쪽 화면 밖

  // 메뉴 열기 애니메이션
  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // 화면 안으로 슬라이딩
      duration: 300, // 애니메이션 시간
      useNativeDriver: false,
    }).start();
  }, []);

  // 메뉴 닫기 애니메이션
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: 250, // 다시 화면 밖으로 이동
      duration: 300,
      useNativeDriver: false,
    }).start(() => navigation.goBack()); // 애니메이션 종료 후 이전 화면으로 돌아감
  };

  return (
    <View style={styles.container}>
      {/* 서브 창 */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <Pressable style={styles.closeButton} onPress={closeMenu}>
            <Image
            source={require('../assets/images/MenuScreen/closebutton.png')}
            style={styles.closeButton}
            resizeMode="contain"
            />
        </Pressable>
        <View style={styles.topContent}>
            <Image
            source={require('../assets/images/MenuScreen/bell.png')}
            style={styles.Bell}
            resizeMode="contain"
            />
            <Image
            source={require('../assets/images/MenuScreen/setting.png')}
            style={styles.Setting}
            resizeMode="contain"
            />
            <Image
            source={require('../assets/images/MenuScreen/yunzi.png')}
            style={styles.yun}
            resizeMode="contain"
            />
            <Text style={styles.name}>박윤지</Text>
            <Text style={styles.email}>yuuunji@gmail.com</Text>
        </View>
        <View style={styles.menuContent}>
          <View style={styles.row}>
            <Image
              source={require('../assets/images/MenuScreen/bookmark.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.menutext}>관심 목록</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../assets/images/MenuScreen/sell.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.menutext}>집 내놓기</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../assets/images/MenuScreen/comment.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.menutext}>내가 쓴 글/댓글</Text>
          </View>
          <View style={[styles.row, styles.withBorder]}>
            <Image
              source={require('../assets/images/MenuScreen/chat.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.menutext}>채팅</Text>
          </View>
          <Text style={styles.text1}>문의하기</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 검정 배경
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  sideMenu: {
    width: 250, // 서브 화면 너비
    height: height,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 10,
  },
  closeButton: {
    width: 24, // 배경 너비
    height: 24, // 배경 높이
    top: 20,
    left: 8,
    color: '#000',
  },
  Bell: {
    width: 24, // 배경 너비
    height: 24, // 배경 높이
    top: -8,
    right: -160,
    color: '#000',
  },
  Setting: {
    width: 24, // 배경 너비
    height: 24, // 배경 높이
    top: -33,
    right: -190,
    color: '#000',
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  topContent: {
    padding: 20,
  },
  row: {
    flexDirection: 'row', // 이미지와 텍스트를 가로로 배치
    alignItems: 'center', // 세로 중앙 정렬
    marginBottom: 20, // 각 행 사이의 간격
  },
  menuContent: {
    top: -30,
    padding: 20,
  },
  menutext: {
    left: 23,
    fontSize: 18,
    marginVertical: 10,
  },
  yun: {
    width: 50, // 배경 너비
    height: 50, // 배경 높이
    color: '#000',
    borderRadius: 10,
  },
  name:{
    top: -50 ,
    left: 60,
    fontWeight: 'bold',
    fontSize: 18,
  },
  email:{
    top: -48,
    left: 60,
    fontSize: 12,
    color: '#BCBCBC',
  },
  icon:{
    left: 10,
    width: 25, // 배경 너비
    height: 25, // 배경 높이
  },
  withBorder: {
    borderBottomWidth: 1, // 경계선 두께
    borderBottomColor: '#e0e0e0', // 경계선 색상
    paddingBottom: 10, // 경계선과 텍스트 사이 여백
  },
  text1: {
    fontSize: 12,
    color: '#BCBCBC',
  }
  
});
