//더미데이터입니다

// export const dataA = [
//   {
//     category: "A",
//     id: "1",
//     title: "A구역 1호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 A구역 1호",
//   },
//   {
//     category: "A",
//     id: "2",
//     title: "A구역 2호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 A구역 2호",
//   },
//   {
//     category: "A",
//     id: "3",
//     title: "A구역 3호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 A구역 3호",
//   },
//   {
//     category: "A",
//     id: "4",
//     title: "A구역 4호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 A구역 4호",
//   },
//   {
//     category: "A",
//     id: "5",
//     title: "A구역 5호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 A구역 5호",
//   },
// ];

// export const dataB = [
//   {
//     category: "B",
//     id: "1",
//     title: "B구역 1호",
//     discripte: "6평",
//     price: "200",
//     address: "태안군 00리 374-12 B구역 1호",
//   },
//   {
//     category: "B",
//     id: "2",
//     title: "B구역 2호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 B구역 2호",
//   },
//   {
//     category: "B",
//     id: "3",
//     title: "B구역 3호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 B구역 3호",
//   },
//   {
//     category: "B",
//     id: "4",
//     title: "B구역 4호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 B구역 4호",
//   },
//   {
//     category: "B",
//     id: "5",
//     title: "B구역 5호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 B구역 5호",
//   },
// ];

// export const dataC = [
//   {
//     category: "C",
//     id: "1",
//     title: "C구역 1호",
//     discripte: "6평",
//     price: "100",
//     address: "태안군 00리 374-12 C구역 1호",
//   },
//   {
//     category: "C",
//     id: "2",
//     title: "C구역 2호",
//     discripte: "6평",
//     price: "000",
//     address: "태안군 00리 374-12 C구역 2호",
//   },
// ];

//공지사항데이터
export const Announcementdata = [
  {
    id: "1",
    essential: true,
    discripte: "수돗물 단수 안내",
    title: "금일 오후 5시까지 단수",
    content: `오늘 공유시설 상수관로 정비를 위해 수돗물 단수가 진행될 예정입니다. 주민분들은 주의해서 사용해주세요!`,
    date: "2024.11.29",
    img: require("./../assets/images/Announcement/item1.png"),
  },
  {
    id: "2",
    essential: false,
    discripte: "",
    title: `할로윈 맞이 이벤트 공지`,
    content: `31일 카페 라운지에서 사탕 및 초콜릿 나눔이 진행됩니다. 주민분들은 오셔서 ‘트릿 오얼 트릿’을 외쳐주세요😏`,
    date: "2024.10.21",
    img: require("./../assets/images/Announcement/item2.png"),
  },
  {
    id: "3",
    essential: false,
    discripte: "",
    title: "카페 신메뉴!",
    content: `공유시설 카페 ‘메이디’에 새로운 메뉴가 나왔습니다! 달달한 달고나가 들어간 달고나 라떼 먹어보세요.`,
    date: "2024.10.19",
    img: require("./../assets/images/Announcement/item3.png"),
  },
  {
    id: "4",
    essential: true,
    discripte: "3번 세탁기 고장 안내",
    title: "3번 세탁기 고장",
    content: `3번 세탁기가 고장났습니다. 10월 22일까지 사용을 금합니다.😢`,
    date: "2024.10.17",
    img: require("./../assets/images/Announcement/item4.png"),
  },
  {
    id: "5",
    essential: true,
    discripte: "조경 훼손 안내",
    title: "주변 조경 훼손 금지",
    content: `조경도 저희의 소중한 자산입니다...   조경 훼손하는 사람 목격시 연락주시면 조치 취하겠습니다. `,
    date: "2024.10.05",
    img: require("./../assets/images/Announcement/item5.png"),
  },
];

export const NoticeBoardData = [
  {
    img: require("./../assets/images/NoticeBoard/item1.png"),
    id: "A 9호 김연우",
    content: `좋은 향이 나는 방향제를 많이 얻게돼서 나눔합니당!!
오늘 21시까지 라운지에 오시면 무료로 드려용 향 졈말 좋습니다!!`,
    date: "2024.11.18   09:14",
    heart: 12,
    comment: 3,
    commentArray: [
      {
        sender: "A 6호 김동인",
        date: "1분 전",
        img: require("./../assets/images/NoticeBoard/item5.png"),
        text: "받으러 갑니다",
      },
      {
        sender: "A 9호 김연우",
        date: "지금",
        img: require("./../assets/images/NoticeBoard/item1.png"),
        text: `네넵`,
      },
      {
        sender: "A 9호 김연우",
        date: "지금",
        img: require("./../assets/images/NoticeBoard/item1.png"),
        text: `지금 오시죠?`,
      },
    ],
  },
  {
    img: require("./../assets/images/NoticeBoard/item2.png"),
    id: "B 7호 김준미",
    content: `벌레 나왔는데 잡아주실 분 구합니다ㅠㅠㅠㅠ
작아요... 아마...?`,
    date: "2024.11.7   20:48",
    heart: 5,
    comment: 3,
    commentArray: [
      {
        sender: "A 6호 김동인",
        date: "13분 전",
        img: require("./../assets/images/NoticeBoard/item5.png"),
        text: "저 벌레 잘 잡아요!",
      },
      {
        sender: "B 7호 김준미",
        date: "5분 전",
        img: require("./../assets/images/NoticeBoard/item1.png"),
        text: "진짜 제발 살려주세요ㅠㅠㅠ 사라짐!!!! 제가 왕맛있는 과자 드릴게요ㅠㅠ",
      },
      {
        sender: "A 6호 김동인",
        date: "지금",
        img: require("./../assets/images/NoticeBoard/item5.png"),
        text: "헉... 지금 갈게요",
      },
    ],
  },
  {
    img: require("./../assets/images/NoticeBoard/item3.png"),
    id: "A 1호 최서현",
    content: `보드게임 챙겨왔는데 혹시 같이 하실 분! 라운지에서 오후 3시에 같이 해용`,
    date: "2024.10.31   12:37",
    heart: 4,
    comment: 2,
    commentArray: [],
  },
  {
    img: require("./../assets/images/NoticeBoard/item4.png"),
    id: "B 6호 박지윤",
    content: `누가 카페에 노트 두고가신 것 같은데 찾아가세용!
노란색 줄무늬 노트입니당`,
    date: "2024.10.22   17:22",
    heart: 2,
    comment: 0,
    commentArray: [],
  },
];
