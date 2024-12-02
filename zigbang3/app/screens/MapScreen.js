import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null); // 사용자 위치 저장
  const [errorMsg, setErrorMsg] = useState(null); // 오류 메시지 저장

  useEffect(() => {
    (async () => {
      // 위치 권한 요청
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission not granted');
        Alert.alert('Permission Denied', 'We need location permissions to show your position.');
        return;
      }

      // 현재 위치 가져오기
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* 상단 검색창 */}
      <View style={styles.searchContainer}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 }, // 누를 때 투명도 변경
          ]}
          onPress={() => navigation.goBack()}
          >
          <Image
            source={require('../assets/images/mappage/angle.png')}
            style={styles.Angle}
          />
        </Pressable>
        <TextInput
          style={styles.searchInput}
          placeholder="지역, 마을 검색"
          placeholderTextColor="#A2A2A2"
        />
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
              source={require('../assets/images/mappage/home.png')}
              style={styles.homebutton}
              resizeMode="contain"
            />
          </Pressable>
        <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={() => navigation.navigate('MenuScreen')} // 메뉴 열기
          >
            <Image
              source={require('../assets/images/mappage/menu-bar.png')}
              style={styles.menubar}
            />
          </Pressable>
      </View>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude, // 현재 위도
            longitude: location.longitude, // 현재 경도
            latitudeDelta: 0.0922, // 줌 레벨 설정
            longitudeDelta: 0.0421, // 줌 레벨 설정
          }}
          showsUserLocation={true} // 사용자 위치 활성화
          showsMyLocationButton={true} // 위치 버튼 표시
        >
          {/* 마커 추가 */}
          <Marker
            coordinate={{ latitude: 37.009605246272, longitude: 127.26396485292 }}
            title="한경대학교"
            description="안성"
            image={require('../assets/images/mappage/village.png')}
            onPress={() => navigation.navigate('DetailScreen', { 
              id: 1, 
              title: "한경대학교", 
              description: "안성" 
            })} // 관련 페이지로 이동
          />
       </MapView>
       ) : null}

      <View style={styles.bottomContainer}>
        {/* 하단 고정 버튼 */}
        <Pressable style={styles.fixedButton} onPress={() => navigation.navigate('PropertyScreen')}>
          <Text style={styles.buttonText}>이 지역 매물 살펴보기 1개</Text>
        </Pressable>
      </View>
      <StatusBar style="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    width: '100%',
    height: 90,
    paddingLeft: 50,
    paddingRight: 82,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
  },
  Angle: {
    position: 'absolute',
    left: -37,
    top: 38,
    width: 18,
    height: 22,
    flexShrink: 0,
  },
  menubar: {
    position: 'absolute',
    right: -65,
    width: 19,
    height: 18,
    flexShrink: 0,
  },
  homebutton:{
    position: 'absolute',
    right: -35,
    width: 19,
    height: 19,
    flexShrink: 0,
  },
  searchInput: {
    height: 40,
    top:30,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    bottom: 11,
  },
  fixedButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});