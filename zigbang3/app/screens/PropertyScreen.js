import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, Pressable, Animated, SafeAreaView } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function ModuleHomeScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.Section1}>
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1 }, // 누를 때 투명도 변경
                ]}
                onPress={() => navigation.goBack()}
                >
                <Image
                    source={require('../assets/images/Propertypage/angle.png')}
                    style={styles.Angle}
                />
            </Pressable>
            <Text style={{ left: 16.67, fontSize: 16, color: '#535353', fontWeight: '700'}}>이 지역 매물 살펴보기</Text>
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
                source={require('../assets/images/Propertypage/home.png')}
                style={styles.homebutton}
                resizeMode="contain"
                />
            </Pressable>
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={() => navigation.navigate('MenuScreen')} // 메뉴 열기
            >
                <Image
                source={require('../assets/images/Propertypage/menu-bar.png')}
                style={styles.menubar}
                />
            </Pressable>
        </View>
        <Pressable
            style={({ pressed }) => [
                styles.Section2, // 기본 스타일
                { opacity: pressed ? 0.5 : 1 }, // 터치 시 투명도 변화
            ]}
            onPress={() =>
                navigation.navigate('DetailScreen', {
                id: 1,
                title: '한경대학교',
                description: '안성',
                })
            }
            >  
            <Image
                source={require('../assets/images/Propertypage/potato.png')}
                style={styles.picture}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>태안군 감자마을</Text>
                <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: 16}}>태안군 00면 374-12</Text>
                
                <Text style={{ top: 59, left: 11, fontSize: 15, color: '#404040', fontWeight: '600', }}>남은 매물 12개</Text>
            </View>
        </Pressable>
        <Pressable
            style={({ pressed }) => [
                styles.Section2, // 기본 스타일
                { opacity: pressed ? 0.5 : 1 }, // 터치 시 투명도 변화
            ]}
            onPress={() =>
                navigation.navigate('DetailScreen', {
                id: 1,
                title: '한경대학교',
                description: '안성',
                })
            }
            >  
            <Image
                source={require('../assets/images/Propertypage/tomato.png')}
                style={styles.picture}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={{ left: 11, fontSize: 15, color: '#404040', fontWeight: '600'}}>토마토 마을</Text>
                <Text style={{ left: 11, fontSize: 12, color: '#404040', fontWeight: '500', lineheight: 16}}>00군 00면 000-00</Text>
                
                <Text style={{ top: 59, left: 11, fontSize: 15, color: '#404040', fontWeight: '600', }}>남은 매물 8개</Text>
            </View>
        </Pressable>
        </SafeAreaView>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Section1: {
        width: width, // 배경 너비
        height: 90, // 배경 높이
        flexDirection: 'row', // 가로축으로 정렬
        alignItems: 'center', // 세로축 중앙 정렬
        paddingHorizontal: 16.15, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
      },
    Angle: {
      width: 18,
      height: 22,
      flexShrink: 0,
    },
    menubar: {
      left: 135,
      width: 19,
      height: 18,
      flexShrink: 0,
    },
    homebutton:{
      left: 123,
      width: 19,
      height: 19,
      flexShrink: 0,
    },
    Section2: {
        width: width, // 배경 너비
        height: 150, // 배경 높이
        flexDirection: 'row', // 가로축으로 정렬
        paddingTop: 19,
        paddingHorizontal: 16.15, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
      },
    picture:{
        width: 165,
        height: 110,
    },
    textContainer: {
        flexDirection: 'column', // 텍스트를 세로로 정렬
      },
  });