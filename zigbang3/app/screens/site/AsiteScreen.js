import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, Pressable, Animated, FlatList, Share } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function AsiteScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false); // 하트 상태를 관리
    const images = [
        require('../../assets/images/Asitepage/a1.png'),
        require('../../assets/images/Asitepage/a1.png'),
        require('../../assets/images/Asitepage/a1.png'),
    ];

    const onScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    const toggleHeart = () => {
      setIsLiked(!isLiked); // 하트 상태 변경
    };
    
    return (
        <View style={styles.container}>
          <FlatList
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            renderItem={({ item }) => (
              <ImageBackground source={item} style={styles.imageBackground} resizeMode="cover">
                <Pressable
                  style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1 }, // 누를 때 투명도 변경
                  ]}
                  onPress={() => navigation.goBack()}
                >
                <Image
                  source={require('../../assets/images/Asitepage/angle.png')}
                  style={styles.Angle}
                  resizeMode="contain"
                />
                </Pressable>
                <Image
                  source={require('../../assets/images/Asitepage/share.png')}
                  style={styles.Share}
                resizeMode="contain"
                />
                <Pressable onPress={toggleHeart}>
                  <Image
                    source={
                      isLiked
                        ? require('../../assets/images/Asitepage/fill.png') // 빨간 하트 이미지
                        : require('../../assets/images/Asitepage/heart.png') // 빈 하트 이미지
                    }
                    style={styles.heart}
                    resizeMode="contain"
                  />
                </Pressable>
                <View style={styles.pageIndicator}>
                  <Text style={styles.pageText}>{`${activeIndex + 1} / ${images.length}`}</Text>
                </View>
              </ImageBackground>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.Section1}>

          </View>
          
          <StatusBar style="light" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      imageBackground: {
        width: width,
        height: 280, // 이미지 높이
        paddingTop: 50,
        flexDirection: 'row', // 가로 정렬
        justifyContent: 'left', // 텍스트를 이미지 중앙에 배치
        alignItems: 'top',
      },
      pageIndicator: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // 반투명 검정 배경
        borderRadius: 15, // 타원형
        paddingVertical: 4,
        paddingHorizontal: 10,
      },
      pageText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
      },
      Angle: {
        marginLeft: 13,
        width: 18,
        height: 22,
        flexShrink: 0,
      },
      Share: {
        right: 100,
        width: 18,
        height: 18,
        flexShrink: 0,
      },
      heart:{
        right: 90,
        width: 20,
        height: 20,
        flexShrink: 0,
      },
      Section1: {
        width: width, // 배경 너비
        height: 140, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'collum', // 가로축으로 정렬
        alignItems: 'center', // 세로축 중앙 정렬
        paddingHorizontal: 18, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
      },
    });
