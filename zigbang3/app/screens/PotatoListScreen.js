import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function PotatoListScreen( {navigation} ) {
    const [selectedTab, setSelectedTab] = useState("Nomal");

    return (
    <View style={styles.container}>
        <View style={styles.Section1}>
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1 }, // 누를 때 투명도 변경
                ]}
                onPress={() => navigation.goBack()}
                >
                <Image
                    source={require('../assets/images/PotatoListpage/angle.png')}
                    style={styles.Angle}
                />
            </Pressable>
            <Text style={{ left: 16.67, fontSize: 16, color: '#535353', fontWeight: '700'}}>감자 마을 매물</Text>
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={() => {
                navigation.dispatch(
                    CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }], // 홈 화면으로 스택 재설정
                    })
                );
                }}
            >
                <Image
                source={require('../assets/images/PotatoListpage/home.png')}
                style={styles.homebutton}
                resizeMode="contain"
                />
            </Pressable>
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={() => navigation.navigate('MenuScreen')} // 메뉴 열기
            >
                <Image
                source={require('../assets/images/PotatoListpage/menu-bar.png')}
                style={styles.menubar}
                />
            </Pressable>
        </View>
        <View style={styles.Section2}>
            <Text style={{ fontSize: 15, color: '#404040', fontWeight: '600'}}>부지</Text>
            <Image
                style={styles.mainpicture}
                source={
                    selectedTab === "Nomal"
                      ? require("../assets/images/PotatoListpage/a/a_img.png")
                      : selectedTab === "Expandable"
                      ? require("../assets/images/PotatoListpage/b/b_img.png")
                      : selectedTab === "HighEnd"
                      ? require("../assets/images/PotatoListpage/c/c_img.png")
                      : require("../assets/images/PotatoListpage/a/a_img.png")
                  }
                  resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
            />
        </View>
            {/* Tabs Section */}
        <View style={styles.tabs}>
            <TouchableOpacity
                style={[
                    styles.tabButton,
                    selectedTab === "Nomal" && styles.tabButtonActive,
                ]}
                onPress={() => setSelectedTab("Nomal")}
                >
                <Text
                    style={[
                    styles.tabText,
                    selectedTab === "Nomal" && styles.tabTextActive,
                    ]}
                >
                    일반형
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.tabButton,
                    selectedTab === "Expandable" && styles.tabButtonActive,
                ]}
                onPress={() => setSelectedTab("Expandable")}
                >
                <Text
                    style={[
                    styles.tabText,
                    selectedTab === "Expandable" && styles.tabTextActive,
                    ]}
                >
                    확장형
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.tabButton,
                    selectedTab === "HighEnd" && styles.tabButtonActive,
                ]}
                onPress={() => setSelectedTab("HighEnd")}
                >
                <Text
                    style={[
                    styles.tabText,
                    selectedTab === "HighEnd" && styles.tabTextActive,
                    ]}
                >
                    고급형
                </Text>
            </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.Section3}>
            {selectedTab === "Nomal" && (
                <View>
                    <View style={styles.rowContainer}>
                        <Pressable
                            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                            onPress={() => navigation.navigate('AsiteScreen')}
                        >
                        <Image
                            source={require('../assets/images/PotatoListpage/a/a1.png')}
                            style={styles.picture}
                        />
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                            onPress={() => navigation.navigate('AsiteScreen')}
                        >
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>A구역 2호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>6평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1000만원</Text>
                        </View>
                        </Pressable>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/a/a2.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>A구역 3호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>6평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1000만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/a/a3.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>A구역 4호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>6평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1000만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/a/a4.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>A구역 5호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>6평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1000만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/a/a5.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>A구역 8호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>6평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1000만원</Text>
                        </View>
                    </View>
                </View>
            )}
            {selectedTab === "Expandable" && (
                <View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/b/b1.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>B구역 1호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>8평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1700만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/b/b2.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>B구역 2호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>8평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1700만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/b/b3.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>B구역 3호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>8평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1700만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/b/b4.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>B구역 4호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>8평</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 1700만원</Text>
                        </View>
                    </View>
                </View>
            )}
            {selectedTab === "HighEnd" && (
                <View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/c/c1.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>C구역 1호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>10평, 개인 화장실O</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 3000만원</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/PotatoListpage/c/c2.png')}
                            style={styles.picture}
                        />
                        <View style={styles.textContainer}>
                            <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>C구역 3호</Text>
                            <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: '12',}}>10평, 개인 화장실O</Text>
                            <Text style={{ top:55, left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>매매 3000만원</Text>
                        </View>
                    </View>
                </View>
            )}
            </View>
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
        flexGrow: 1, // 스크롤 가능한 영역 확장
        paddingBottom: 20, // 하단 여백 추가
      },
    Section1: {
        width: width, // 배경 너비
        height: 70, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'row', // 가로축으로 정렬
        alignItems: 'center', // 세로축 중앙 정렬
        paddingHorizontal: 16.15, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
      },
    Section2: {
        width: width, // 배경 너비
        height: 270, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'collum',
        paddingTop: 19,
        paddingHorizontal: 16.15, // 좌우 여백 추가
    },
    Angle: {
      width: 18,
      height: 22,
      flexShrink: 0,
    },
    menubar: {
      left: 185,
      width: 19,
      height: 18,
      flexShrink: 0,
    },
    homebutton:{
      left: 173,
      width: 19,
      height: 19,
      flexShrink: 0,
    },
    mainpicture:{
        paddingTop: 10,
        width: 340,
        height: 200,
    },
    picture:{
        width: 165,
        height: 110,
    },
    textContainer: {
        flexDirection: 'column', // 텍스트를 세로로 정렬
      },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'left',
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingHorizontal: 16,
      },
    tabButton: {
        width: 76,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 5, // 모서리 둥글게
        borderWidth: 1, // 테두리 두께
        borderColor: '#D3D3D3', // 회색 테두리 색상
        backgroundColor: '#FFF', // 기본 배경색
      },
    tabButtonActive: {
        backgroundColor: '#FFA500',
      },
    tabText: {
        fontSize: 14,
        color: '#A2A2A2',
        fontWeight: '600',
      },
    tabTextActive: {
        color: '#FFF',
        fontWeight: '700',
      },
    Section3: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'collum',
        paddingHorizontal: 16.15, // 좌우 여백 추가
    },
    rowContainer: {
        flexDirection: 'row', // 가로 정렬
        marginBottom: 20, // 요소 간 간격 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
        paddingBottom: 20,
      },
    textContainer: {
        flex: 1, // 텍스트가 남은 공간 차지
    },
  });