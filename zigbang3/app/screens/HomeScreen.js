import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, Pressable, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>어떤 집을 찾고 계신가요?</Text>

        <View style={styles.Section1}>
          <View style={{flexDirection: 'row', paddingBottom: 8, gap: 8}}>
            <View style={styles.whiteBox1}>
              <Image
                source={require('../assets/images/homepage/apart.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>아파트</Text>
            </View>

            <View style={styles.whiteBox1}>
              <Image
                source={require('../assets/images/homepage/villa.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>빌라/투룸+</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingBottom: 8, gap: 8}}>
            <View style={styles.whiteBox1}>
              <Image
                source={require('../assets/images/homepage/oneroom.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>원룸</Text>
            </View>

            <View style={[styles.whiteBox1]}>
              <Image
                source={require('../assets/images/homepage/officetel.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>오피스텔</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingBottom: 8, gap: 8}}>
            <View style={[styles.whiteBox1]}>
              <Image
                source={require('../assets/images/homepage/sell.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.boxText}>집 내놓기</Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.whiteBox1,
                { backgroundColor: pressed ? '#f0f0f0' : '#fff' }, // 눌렀을 때 배경색 변화
              ]}
              onPress={() => navigation.navigate('ModuleHomeScreen')}
            >
              <Image
                source={require('../assets/images/homepage/module.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={styles.boxText}>직방스테이</Text>
                <Image
                  source={require('../assets/images/homepage/new.png')}
                  style={styles.New}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.Section2}>
          <Image
            source={require('../assets/images/homepage/ad.png')}
            style={styles.ad}
            resizeMode="contain"
          />
          <Text style={styles.secText}>창업을 고민중이신가요?</Text>
          
          <View style={[styles.whiteBox1]}>
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
        <View style={{flexDirection: 'row', gap: 130}}>
          <Image
            source={require('../assets/images/homepage/real.png')}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/homepage/myhome.png')}
            style={[styles.logo]}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 20,
    marginTop: 90,
    color: '#252525',
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  Section1: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Section2: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
  },
  whiteBox1: {
    width: (width - 40) / 2,
    height: 105,
    flexShrink: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 0.8,
    borderColor: '#E4E4E4',
    shadowColor: '#E4E4E4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  boxText: {
    textAlign: 'center',
    color: '#252525',
    fontSize: 12,
    fontWeight: '600',
  },
  logo: {
    width: 43.5,
    height: 43.5,
  },
  New: {
    width: 11,
    height: 11,
  },
  ad: {
    width: width - 10,
    height: 100,
  },
  secText: {
    textAlign: 'left',
    marginTop: 29,
    marginLeft: 15,
    paddingBottom: 8,
    color: '#A2A2A2',
    fontSize: 12,
    fontWeight: '600',
  },
  fixedBox: {
    width: width,
    height: 92,
    flexShrink: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: '#E4E4E4',
    shadowColor: '#E4E4E4',
    elevation: 3,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 130,
    justifyContent: 'flex-start',
  },
});
