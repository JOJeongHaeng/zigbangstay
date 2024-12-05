import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, Animated, PanResponder, ScrollView, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function DetailScreen({ route, navigation }) {
  const slideAnim = useRef(new Animated.Value(height * 0.2)).current; // 초기 위치
  const { id, title, description } = route.params;
  const scrollPosition = useRef(0); // 스크롤 위치

  // 메뉴 열기 애니메이션
  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: height * 0.2, // 초기 위치
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>{
        // 스크롤이 최상단에서만 PanResponder 활성화
        return scrollPosition.current === 0 && Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        // 슬라이드 위치 조정
        const newPosition = Math.min(
          Math.max(0, slideAnim._value + gestureState.dy),
          height
        );
        slideAnim.setValue(newPosition);
      },
      onPanResponderRelease: (_, gestureState) => {
        const isAtInitialPosition = slideAnim._value === height * 0.2;
        const isAtFullScreen = slideAnim._value === 0;

        if (gestureState.dy > 150 && isAtInitialPosition && scrollPosition.current === 0) {
          // 초기 위치에서 아래로 드래그 → 창 닫기
          Animated.timing(slideAnim, {
            toValue: height * 0.2,
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            navigation.dispatch((state) => {
              const routes = state.routes.slice(0, -1); // 마지막 화면 제거
              return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1, // 새로운 마지막 화면으로 이동
              });
            });
          });
        } else if (gestureState.dy < -150 && isAtInitialPosition && scrollPosition.current === 0) {
          // 초기 위치에서 위로 드래그 → 전체화면 확장
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } 
      },
    })
  ).current;

  const handleScroll = (event) => {
    scrollPosition.current = event.nativeEvent.contentOffset.y;
  };

  return (
    <Animated.View
      style={[styles.container, { top: slideAnim }]}
      {...panResponder.panHandlers} // PanResponder 적용
    >
      <ScrollView
          onScroll={handleScroll} // 스크롤 이벤트
          scrollEventThrottle={16} // 스크롤 이벤트 호출 빈도
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        >
      <ImageBackground
          source={require('../assets/images/Detailpage/module.png')}
          style={[styles.imageBackground]} // 상단에서 237px 고정
          imageStyle={styles.imageStyle} // 이미지 자체 스타일
          resizeMode="cover"
        >
        <Image
          source={require('../assets/images/Detailpage/bar.png')}
          style={styles.bar}
        />
        
        <View>
          <Text style={styles.title}>감자 마을</Text>
          <Text style={styles.inforText}>태안군 00면 374-12</Text>
          <Text style={styles.inforText2}>모던한 건물과 자연의 조화 </Text>
          <Text style={styles.inforText2}>나만의 공간과, 다양한 공유 공간을 즐겨 보세요</Text>            
        </View>
        <View style={styles.whiteBoxFirst}>
          <Text style={styles.inbox}>가격: 1000~3000만원</Text>
        </View>
        <View style={styles.whiteBoxSecond}>
          <Text style={styles.inbox}>매달 관리비 20만원</Text>
        </View>
        <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', left: 18, top: 90 }}>부지</Text>
        <Text style={{ fontSize: 10, color: '#BCBCBC', fontWeight: '500', left: 52, top: 78}}>주차 가능</Text>
      </ImageBackground>
      <View style={styles.Section1}>
        <Image
          source={require('../assets/images/Detailpage/lot.png')}
          style={{ width: 340, height: 200, }}
        />
      </View>
      <View style={styles.Section2}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={() => {
          navigation.dispatch((state) => {
            // 현재 스택에서 마지막 한 개를 제거
            const routes = state.routes.slice(0, -1);
            return CommonActions.reset({
              ...state,
              routes: [...routes, { name: 'PotatoListScreen' }], // 마지막에 PotatoListScreen 추가
              index: routes.length, // 새로운 스택의 마지막 화면으로 인덱스 설정
            });
          });
        }}
      >
        <Image
          source={require('../assets/images/Detailpage/search.png')}
          style={{ width: 340, height: 40 }}
        />
      </Pressable>
        <Text style={{ fontSize: 10, color: '#BCBCBC', fontWeight: '600', top: 7}}>* 현재 12개의 방이 당신을 기다립니다</Text>
      </View>
      <View style={styles.Section3}>
        <View>
          <Image
            source={require('../assets/images/Detailpage/kitchen.png')}
            style={{ width: 165, height: 110, marginRight: 10, marginBottom: 6}}
          />
          <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', marginBottom: 10}}>주방</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/Detailpage/cafe.png')}
            style={{ width: 165, height: 110,  marginBottom: 6}}
          />
          <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', marginBottom: 10}}>카페/라운지</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/Detailpage/toilet.png')}
            style={{ width: 165, height: 110, marginRight: 10, marginBottom: 6}}
          />
          <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', marginBottom: 10}}>공용 화장실</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/Detailpage/shower.png')}
            style={{ width: 165, height: 110,  marginBottom: 6}}
          />
          <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', marginBottom: 10}}>공용 샤워실</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/Detailpage/Laundry.png')}
            style={{ width: 165, height: 110,  marginBottom: 6}}
          />
          <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600'}}>런드리 룸</Text>
        </View>
      </View>
      </ScrollView>
      <StatusBar style="light" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  imageBackground: {
    width: '100%', // 부모 컨테이너와 동일한 너비
    height: '340'
  },
  imageStyle: {
    height: 250,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 700,
    textAlignVertical: 'top', // 세로 방향 상단 정렬 (Android)
    paddingLeft: 19, // 텍스트 시작 위치 조정
    paddingTop: 80,
  },
  inforText:{
    fontSize: 15,
    color: '#FFF',
    fontWeight: 600,
    paddingLeft: 19, // 텍스트 시작 위치 조정
    paddingBottom: 47,
  },
  inforText2:{
    fontSize: 12,
    color: '#FFF',
    fontWeight: 500,
    paddingLeft: 19, // 텍스트 시작 위치 조정
  },
  bar:{
    position: 'absolute',
    width: 134,
    height: 4.5,
    top: 12,
    marginHorizontal: 120,
  },
  whiteBoxFirst: {
    position: 'absolute',
    left: 16.33,
    top: 220,
    width: 165,
    height: 55,
    flexShrink: 0,
    backgroundColor: '#fff', // 배경색 흰색으로 설정
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5, // 테두리 두께
    borderColor: '#e0e0e0', // 테두리 색상 (흰색에 가까운 회색)
    borderRadius: 5, // 모서리 둥글게 설정 (옵션)
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },
  whiteBoxSecond: {
    position: 'absolute',
    right: 16.33,
    top: 220,
    width: 165,
    height: 55,
    flexShrink: 0,
    backgroundColor: '#fff', // 배경색 흰색으로 설정
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5, // 테두리 두께
    borderColor: '#e0e0e0', // 테두리 색상 (흰색에 가까운 회색)
    borderRadius: 5, // 모서리 둥글게 설정 (옵션)
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },
  inbox:{
    fontSize: 12,
    color: '#535353',
    fontWeight: 600,
  },
  Section1: {
    width: width, // 배경 너비
    height: 195.95, // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },
  Section2: {
    width: width, // 배경 너비
    height: 95, // 배경 높이
    backgroundColor: '#fff', // 흰 배경
    alignItems: 'center',
    justifyContent: 'center',
  },
  Section3: {
    width: width, // 배경 너비
    backgroundColor: '#fff', // 흰 배경
    flexDirection: 'row', // 가로 정렬
    flexWrap: 'wrap', // 공간 부족 시 줄바꿈
    justifyContent: 'flex-start', // 왼쪽 정렬
    padding: 17, // 내부 여백
  },
});
