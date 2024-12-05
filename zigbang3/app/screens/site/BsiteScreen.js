import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, Pressable, ScrollView, FlatList, Share } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function BsiteScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false); // 하트 상태를 관리
    const images = [
        require('../../assets/images/sitepage/sB1.png'),
        require('../../assets/images/sitepage/sB1.png'),
        require('../../assets/images/sitepage/sB1.png'),
    ];
    const reviewsA = [
      {
        id: 1,
        rating: 5,
        text: `아니 진짜 정말 오래 고민한 제가 바보라고 느껴질만큼 너무 만족 중이에요... 매번 숙소 잡기도 귀찮았는데, 확정된 나만의 공간 최곱니다 힐링 완료!!`,
        date: "2024.9.23",
      },
      {
        id: 2,
        rating: 5,
        text: `이거 친구랑 반띵해서 내면 개꿀이더라구요 매번 힐링해야 한다고 캠핑, 글램핑, 여행 같이 다니던 친구가 있었는데 여기로 정착했습니다 ㅎㅎ😙`,
        date: "2024.8.9",
      },
      {
        id: 3,
        rating: 5,
        text: "자연 속에 있는 나...? 꽤나 흥미롭군~",
        date: "2024.7.15",
      },
      {
        id: 4,
        rating: 5,
        text: "여기 카페 커피 존맛탱입니다 ㅎㅎㅎㅎ",
        date: "2024.7.15",
      },
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
        <ScrollView contentContainerStyle={styles.scrollContent} >
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
                  source={require('../../assets/images/sitepage/angle.png')}
                  style={styles.Angle}
                  resizeMode="contain"
                />
                </Pressable>
                <Image
                  source={require('../../assets/images/sitepage/share.png')}
                  style={styles.Share}
                  resizeMode="contain"
                />
                <Pressable onPress={toggleHeart}>
                  <Image
                    source={
                      isLiked
                        ? require('../../assets/images/sitepage/fill.png') // 빨간 하트 이미지
                        : require('../../assets/images/sitepage/heart.png') // 빈 하트 이미지
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
            <View style={styles.blackBox}>
              <Text style={{ color: '#FFF', fontWeight: '500', fontsize: 10, lineheight: 16}}>등록번호 104</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#404040', fontWeight: '500', lineheight: 16, marginBottom: 4,}}>태안군 00리 374-12 B구역 3호</Text>
            <Text style={{ fontSize: 20, color: '#404040', fontWeight: '700', marginBottom: 3 }}>매매 1700</Text>
            <Text style={{ fontSize: 12, color: '#404040', fontWeight: '500', lineheight: 16, letterspacing: 0.12}}>관리비 20만원</Text>
          </View>
          <Image
            source={require('../../assets/images/sitepage/ad.png')}
            style={styles.ad}
            resizeMode="contain"
          />
          <View style={styles.Section2}>
            <View style= {{flexDirection: 'row', marginBottom: 30,}}>
              <Image
                source={require('../../assets/images/sitepage/area.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', lineheight: 18, letterspacing: 0.12}}>실내 면적 26.45㎡ (8평)</Text>
            </View>
            <View style= {{flexDirection: 'row', marginBottom: 30,}}>
              <Image
                source={require('../../assets/images/sitepage/house.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', lineheight: 18, letterspacing: 0.12}}>2~3인용 모듈하우스</Text>
            </View>
            <View style= {{flexDirection: 'row', marginBottom: 30,}}>
              <Image
                source={require('../../assets/images/sitepage/wifi.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', lineheight: 18, letterspacing: 0.12}}>와이파이 보유</Text>
            </View>
            <View style= {{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/sitepage/immed.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 12, color: '#404040', fontWeight: '600', lineheight: 18, letterspacing: 0.12}}>즉시 입주 가능</Text>
            </View>
          </View>    

          <View style={styles.Section3}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 15, color: '#404040', fontWeight: '600'}}>거주민 리뷰</Text>
              <Image
                source={require('../../assets/images/sitepage/star.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{ left: -12, fontSize: 12, color: '#404040', fontWeight: '600'}}>4.9</Text>
              <Text style={{ paddingLeft: 160, fontSize: 10, color: '#FF6804', fontWeight: '600'}}>더보기 {'>'}</Text>
            </View>
            <View style={{ marginLeft: width * 16 }}>
          </View>
          <FlatList
            data={reviewsA}
            horizontal // 가로 스크롤
            showsHorizontalScrollIndicator={false} // 스크롤바 숨기기
            keyExtractor={(item) => item.id.toString()} // 각 아이템의 고유 키
            renderItem={({ item }) => (
              <View style={styles.reviewCard}>
                {/* 별과 상태 */}
                <View style={styles.reviewHeader}>
                  <View style={styles.starsContainer}>
                    {Array(item.rating) // 별 개수만큼 렌더링
                      .fill()
                      .map((_, index) => (
                        <Image
                          key={index}
                          source={require('../../assets/images/sitepage/star.png')}
                          style={styles.starIcon}
                          resizeMode="contain"
                        />
                      ))}
                  </View>
                  <Text style={styles.reviewStatus}>현재 거주 중</Text>
                </View>

                {/* 리뷰 텍스트 */}
                <Text style={styles.reviewText}>{item.text}</Text>

                {/* 날짜 */}
                <Text style={styles.reviewDate}>{item.date}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.Section4}>
          <Text style={{ fontSize: 15, color: '#404040', fontWeight: '600'}}>옵션</Text>
            <View style={styles.optionContainer}>
              <View style={styles.columnContainer}>
                <Image
                  source={require('../../assets/images/sitepage/clothes.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: '500', lineheight: 12}}>옷장</Text>
              </View>
              <View style={styles.columnContainer}>
                <Image
                  source={require('../../assets/images/sitepage/refri.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: '500', lineheight: 12}}>냉장고</Text>
              </View>
              <View style={styles.columnContainer}>
                <Image
                  source={require('../../assets/images/sitepage/aircon.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: '500', lineheight: 12}}>에어컨</Text>
              </View>
              <View style={styles.columnContainer}>
                <Image
                  source={require('../../assets/images/sitepage/bed.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: '500', lineheight: 12}}>침대</Text>
              </View>
              <View style={styles.columnContainer}>
                <Image
                  source={require('../../assets/images/sitepage/bookcase.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: '500', lineheight: 12}}>책장, 책상</Text>
              </View>
            </View>
        </View>
        

        </ScrollView>
        
        <View style={styles.fixedContainer}>
          <Text style={styles.fixedText}>매매 1700</Text>
          <Pressable style={styles.fixedButton} onPress={() => alert("계약 날짜 잡기")}>
            <Text style={{fontSize: 14, color: '#fff', fontWeight: '600', lineheight: 18,}}>계약하기</Text>
          </Pressable>
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
        marginTop: 50,
        marginLeft: 13,
        width: 18,
        height: 22,
        flexShrink: 0,
      },
      Share: {
        marginTop: 50,
        right: 100,
        width: 18,
        height: 18,
        flexShrink: 0,
      },
      heart:{
        marginTop: 50,
        right: 90,
        width: 20,
        height: 20,
        flexShrink: 0,
      },
      scrollContent: {
        flexGrow: 1, // 콘텐츠가 부족할 경우 ScrollView의 크기를 확장
        paddingBottom: 130, // 아래쪽 여백 확보 (고정된 요소와 겹치지 않도록)
      },
      Section1: {
        width: width, // 배경 너비
        height: 160, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start', // 콘텐츠 정렬 (상단에서 시작)
        paddingHorizontal: 18, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
        marginBottom: 10,
        paddingTop:20,
      },
      blackBox: {
        width: 100,
        height: 30,
        flexShrink: 0,
        backgroundColor: '#000', // 배경색 흰색으로 설정
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5, // 테두리 두께
        borderColor: '#e0e0e0', // 테두리 색상 (흰색에 가까운 회색)
        borderRadius: 15, // 모서리 둥글게 설정 (옵션)
        marginBottom: 18,
      },
      ad:{
        paddingHorizontal: 18,
        width: 370,
        height: 100,
      },

      Section2: {
        width: width, // 배경 너비
        height: 220, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start', // 콘텐츠 정렬 (상단에서 시작)
        paddingHorizontal: 18, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
        marginBottom: 30,
        paddingTop:20,
      },
      icon:{
        marginRight: 12,
        width: 24,
        height: 24,
      },

      Section3: {
        width: width, // 배경 너비
        height: 200, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start', // 콘텐츠 정렬 (상단에서 시작)
        paddingLeft: 18, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
        paddingBottom:20,
      },
      reviewCard: {
        width: 280, // 카드의 너비
        marginRight: 16, // 카드 간 간격
        padding: 16, // 내부 여백
        backgroundColor: '#FFFFFF', // 카드 배경색
        borderRadius: 10, // 모서리 둥글게
        borderWidth: 1, // 테두리 두께
        borderColor: '#E0E0E0', // 연한 회색 테두리
        shadowColor: '#000', // 그림자 색상
        shadowOffset: { width: 0, height: 2 }, // 그림자 위치
        shadowOpacity: 0.1, // 그림자 투명도
        shadowRadius: 4, // 그림자 퍼짐 정도
        elevation: 3, // Android 그림자
      },
      
      reviewHeader: {
        flexDirection: 'row', // 가로 방향 정렬
        alignItems: 'center', // 수직 중앙 정렬
      },
      starsContainer: {
        flexDirection: 'row', // 별을 가로로 나열
        marginRight: 10, // 별과 상태 텍스트 간격
      },
      starIcon: {
        width: 24, // 별 크기
        height: 24,
        marginRight: -10, // 별 간 간격
      },
      reviewStatus: {
        fontSize: 12, // 상태 텍스트 크기
        color: '#A0A0A0', // 텍스트 색상
      },
      reviewText: {
        fontSize: 14, // 본문 텍스트 크기
        color: '#404040', // 본문 텍스트 색상
        lineHeight: 20, // 줄 간격
        marginBottom: 8, // 아래 여백
      },
      reviewDate: {
        fontSize: 12, // 날짜 텍스트 크기
        color: '#A0A0A0', // 날짜 텍스트 색상
        textAlign: 'left', // 오른쪽 정렬
      },

      Section4: {
        width: width, // 배경 너비
        height: 200, // 배경 높이
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start', // 콘텐츠 정렬 (상단에서 시작)
        paddingLeft: 18, // 좌우 여백 추가
        borderBottomWidth: 1, // 선 두께
        borderBottomColor: '#E0E0E0', // 선 색상 (연한 회색)
        paddingTop:20,
        paddingBottom:20,
      },
      columnContainer: {
        flexDirection: 'column', // 가로 정렬
        padding: 25,
      },
      optionContainer: {
        flexDirection: 'row', // 가로 배치
        flexWrap: 'wrap', // 화면 너비 초과 시 개행
        justifyContent: 'flex-start', // 좌측 정렬
        alignItems: 'center', // 세로 방향 중앙 정렬
      },
      

      fixedContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 90,
        backgroundColor: '#ffffff',
        flexDirection: 'row', // 가로 정렬
        // 그림자 스타일
        elevation: 5, // Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: -2 }, // 그림자 방향 (위쪽으로)
        shadowOpacity: 0.1, // 그림자 투명도
        shadowRadius: 4, // 그림자 퍼짐
      },
      fixedText: {
        fontSize: 14,
        color: '#404040',
        fontWeight: '600',
        paddingTop: 25,
        paddingLeft: 18,
        paddingRight: 70,
      },
      fixedButton: {
        marginTop: 13,
        width: 200,
        height: 40,
        backgroundColor: '#FFA500',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    });
