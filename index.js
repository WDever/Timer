const tableCreator = () => {
  const test = [
    {
      id: 1,
      confirm_name: "(주)코인원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2,
      confirm_name: "유비쿼스",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3,
      confirm_name: "오투웹스",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4,
      confirm_name: "(주)헬로네이처",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 5,
      confirm_name: "(주)케이지에듀원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 6,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 7,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 8,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 9,
      confirm_name: "(주)티모넷",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 10,
      confirm_name: "LIG넥스원(주)",
      work:
        "기술영업,기계·기계설비,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어· 소프트웨어,연구소·R&D",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 용인시,대전 &gt; 대전전체,경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 11,
      confirm_name: "(주)디지비데이터시스템",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨 어",
      address:
        "대구 &gt; 대구전체,대구 &gt; 남구,대구 &gt; 동구,대구 &gt; 수성구,아시아·중동 &gt; 캄보디아",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 12,
      confirm_name: "커리어인사이트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 13,
      confirm_name: "(주)이마트24",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 14,
      confirm_name: "(주)스카우트플랜",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 15,
      confirm_name: "보람상조개발(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 16,
      confirm_name: "엔터웨이파트너스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 17,
      confirm_name: "(주)페이넷아이앤씨",
      work: "영업기획·관리·지원,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 18,
      confirm_name: "(주)드림잡스쿨",
      work: "AS·서비스·수리,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "광주 &gt; 광산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 19,
      confirm_name: "주식회사 이니시움",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 20,
      confirm_name: "척시원병원",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "부산 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 21,
      confirm_name: "커리어인사이트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 22,
      confirm_name: "(주)사람인에이치에스",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 23,
      confirm_name: "커리어인사이트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 34,
      confirm_name: "(주)그라비티",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 35,
      confirm_name: "아이티벨리",
      work: "서버·네트워크·보안",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 26,
      confirm_name: "화순전남대병원",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "전남 &gt; 화순군",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 27,
      confirm_name: "(주)헬로서치",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 28,
      confirm_name: "유니원아이앤씨(주)",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 8~15년"
    },
    {
      id: 29,
      confirm_name: "(주)컴트루테크놀로지",
      work: "기술영업,웹마스터·QA·테스터,서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 30,
      confirm_name: "(주)엔텍정보통신",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 31,
      confirm_name: "씨앤토트플러스(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력7년↓"
    },
    {
      id: 32,
      confirm_name: "제이정보기술주식회사",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 33,
      confirm_name: "(주)시큐디션",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 34,
      confirm_name: "토니서치",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 35,
      confirm_name: "아이와이씨앤씨(주)",
      work: "서버·네트워크·보안,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 36,
      confirm_name: "아이와이씨앤씨(주)",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 37,
      confirm_name: "아이와이씨앤씨(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 38,
      confirm_name: "링솔류션즈",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 39,
      confirm_name: "아이와이씨앤씨(주)",
      work: "웹마스터·QA·테스터,서버·네트워크·보안",
      address: "경기 &gt; 용인시 수지구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 40,
      confirm_name: "(주)컴트루테크놀로지",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: " 신입/경력"
    },
    {
      id: 41,
      confirm_name: "(주)온피아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 42,
      confirm_name: "티엔엠에스주식회사",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 43,
      confirm_name: "(주)선테크",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 44,
      confirm_name: "NHN(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 45,
      confirm_name: "(주)지케스",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 46,
      confirm_name: "(주)탑앤스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이 상",
      careear: "경력무관"
    },
    {
      id: 47,
      confirm_name: "에이치디씨신라면세점(주)",
      work: "기획·전략·경영,회계·재무·세무·IR,서버·네트워크·보안",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 48,
      confirm_name: "(주)KFC KOREA/주식회사 케이에프씨 코리아",
      work:
        "총무·법무·사무,인사·교육·노무,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서 울 &gt; 서울전체,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 49,
      confirm_name: "(주)비아이씨엔에스",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 50,
      confirm_name: "현대디지텍코어(주)",
      work: "AS·서비스·수리,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "부산 &gt; 부산진구",
      education: "고등학교졸업이상",
      careear: "신입/ 경력"
    },
    {
      id: 51,
      confirm_name: "(주)맨토스파워",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 마포구,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 52,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 53,
      confirm_name: "노바루트",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 54,
      confirm_name: "(주)아이티원",
      work: "서버·네트워크·보안,통신·모바일,현장·시공·감리·공무",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 55,
      confirm_name: "주식회사 커리어라임즈",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 56,
      confirm_name: "에이스파트너스",
      work: "서버·네트워크·보안,웹기획·PM,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 57,
      confirm_name: "(주)유트론",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 58,
      confirm_name: "(주)디벨네트웍스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 59,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 60,
      confirm_name: "(주)이스턴네트웍스",
      work: "서버·네트워크·보안",
      address: "충북 &gt; 청주시 흥덕구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 61,
      confirm_name: "(주)이스턴네트웍스",
      work: "서버·네트워크·보안",
      address: "충북 &gt; 청주시 흥덕구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 62,
      confirm_name: "(주)이스턴네트웍스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 63,
      confirm_name: "대흥정보기술(주)",
      work: "판매·매장관리,IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 64,
      confirm_name: "(주)파빌리온텍",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 65,
      confirm_name: "탑커리어인사이트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 66,
      confirm_name: "엔터웨이파트너스",
      work: "IT·솔루션영업,영업기획·관리·지원,서버·네트워크·보안",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 67,
      confirm_name: "(주) 루미가넷 네일스파",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 68,
      confirm_name: "엔터웨이파트너스",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경 력7년↑"
    },
    {
      id: 69,
      confirm_name: "라인게임즈 주식회사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 70,
      confirm_name: "아이텍(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 71,
      confirm_name: "(주)베스트에치알 (Best HR)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "인천 &gt; 인천전체,인천 &gt; 부평구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 72,
      confirm_name: "윤시스템",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 73,
      confirm_name: "윤시스템",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 74,
      confirm_name: "(주)비즈온정보기술",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 안성시,충남 &gt; 아산시,충남 &gt; 천안시 서북구",
      education: " 학력무관",
      careear: "신입/경력"
    },
    {
      id: 75,
      confirm_name: "(주)클라우드씨아이",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~19년"
    },
    {
      id: 76,
      confirm_name: "켈리서비스 유한회사",
      work: "구매·자재·재고,영업기획·관리·지원,서버·네트워크·보안",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 77,
      confirm_name: "(재)의료기관평가인증원",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 78,
      confirm_name: "(주)에스에스알",
      work: "기획·전략·경영,서버·네트워크·보안",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 79,
      confirm_name: "(주)제로웹",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 80,
      confirm_name: "(주)제로웹",
      work: "서버·네트워크·보안,웹개발",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 81,
      confirm_name: "(주)소모비전",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 82,
      confirm_name: "후지쯔코리아테크놀러지(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 83,
      confirm_name: "(주)인동에프엔",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~6년"
    },
    {
      id: 84,
      confirm_name: "메타넷엠씨씨",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 85,
      confirm_name: "(주)만도",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 용인시 기흥구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 86,
      confirm_name: "(주)이카운트",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 87,
      confirm_name: "(주)잉카인터넷",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 88,
      confirm_name: "(주)바른테크놀로지",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 89,
      confirm_name: "주식회사 헤드트리",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 90,
      confirm_name: "(주)위비스",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~11년"
    },
    {
      id: 91,
      confirm_name: "재단법인 한국지식재산보호원",
      work: "총무·법무·사무,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 92,
      confirm_name: "(주)테스",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 용인시 처인구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↓"
    },
    {
      id: 93,
      confirm_name: "랜스(주)",
      work: "서버·네트워크·보안",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 94,
      confirm_name: "(주)에이치엔에스커뮤니케이션",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 95,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구,경기 &gt; 고양시 일산동구,경기 &gt; 이 천시",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 96,
      confirm_name: "퓨렌스(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경 력"
    },
    {
      id: 97,
      confirm_name: "(주)두아이티",
      work: "서버·네트워크·보안",
      address: "대구 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 98,
      confirm_name: "쿨클라우드",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 99,
      confirm_name: "우미건설(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계,본사·관리·전산",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 100,
      confirm_name: "appknot (앱노트)",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 101,
      confirm_name: "(주)드림시큐리티",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~5년"
    },
    {
      id: 102,
      confirm_name: "(주)인큐브시스템",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 103,
      confirm_name: "(주)인디앤드코리아",
      work:
        "상품기획·MD,일반영업,영업기획·관리·지원,서버·네트워크·보안,웹개발,컨텐츠·사이트운영",
      address:
        "경기 &gt;  부천시,경기 &gt; 시흥시,경기 &gt; 안산시,인천 &gt; 연수구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 104,
      confirm_name: "(주)유창",
      work:
        "구매·자재·재고,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,생산관리·품질관리,서버·네트워크·보안,ERP·시스템분석·설계,본사·관리·전산",
      address:
        "서울 &gt; 강서구,서울 &gt; 양천구,서울 &gt; 영등포구,경기 &gt; 시흥시,대전 &gt; 동구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 105,
      confirm_name: "아이라자스(주)",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↓"
    },
    {
      id: 106,
      confirm_name: "에스맥(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 평택시",
      education: "학력무관",
      careear: "경력 3~9년"
    },
    {
      id: 107,
      confirm_name: "(주)마티아솔루션",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 108,
      confirm_name: "(주)밸류플러스",
      work:
        "구매·자재·재고,총무·법무·사무,사무보조·문서작성,기계·기계설비,전기·전자·제어,생산관리·품질관리, 반도체·디스플레이·LCD,생산·제조·포장·조립,설계·CAD·CAM,서버·네트워크·보안,ERP·시스템분석·설계,전기·소방·통 신·설비",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 109,
      confirm_name: "알타플렉스(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 110,
      confirm_name: "(주)리앤파트너",
      work: "금융·보험영업,TM·아웃바운드,서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~12년"
    },
    {
      id: 111,
      confirm_name: "커머스파크(주)",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 112,
      confirm_name: "리스펙트마케팅",
      work: "홍보·PR·사보,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~4년"
    },
    {
      id: 113,
      confirm_name: "(주)리치앤코",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 114,
      confirm_name: "(주)에센루",
      work:
        "물류·유통·운송,해외영업·무역영업,상품기획·MD,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,제품·산 업디자인,의류·패션·잡화디자인,일반영업,영업기획·관리·지원,고객센터·CS,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,사진·포토그라퍼",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 115,
      confirm_name: "주식회사 버츄얼넥스트",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 116,
      confirm_name: "리스펙트마케팅",
      work: "홍보·PR·사보,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 117,
      confirm_name: "(주)헬로서치",
      work: "해외영업·무역영업,상품기획·MD,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 118,
      confirm_name: "(주)헬로서치",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 119,
      confirm_name: "(주)프로그레스미디어",
      work: "마케팅·광고·분석,영업기획·관리·지원,웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 120,
      confirm_name: "(주)아이룩스",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,사진·포토그라퍼",
      address: "부산 &gt; 부산전체,부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 121,
      confirm_name: "미래피앤티 주식회사",
      work: "웹기획·PM,웹디자인",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 122,
      confirm_name: "(주)청담러닝",
      work:
        "기획·전략·경영,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 강남구,서울 &gt; 노원구,서울 &gt; 성동구",
      education: "대학졸업(2,3 년)이상",
      careear: "신입/경력"
    },
    {
      id: 123,
      confirm_name: "한국터치스크린(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 124,
      confirm_name: "(주)리플렉션",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 125,
      confirm_name: "(주)리플렉션",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~15년"
    },
    {
      id: 126,
      confirm_name: "골든비 네트워크",
      work: "화학·에너지,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 127,
      confirm_name: "영어몰닷컴",
      work: "웹마스터·QA·테스터,웹기획·PM",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 128,
      confirm_name: "주식회사 커리어라임즈",
      work: "기획·전략·경영,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구",
      education: "대학교졸 업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 129,
      confirm_name: "주식회사 커리어라임즈",
      work: "기획·전략·경영,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구",
      education: "대학교졸 업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 130,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 131,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 132,
      confirm_name: "에이스파트너스",
      work: "서버·네트워크·보안,웹기획·PM,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 133,
      confirm_name: "(주)에이치알비즈코리아",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 134,
      confirm_name: "런코리아 주식회사",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 135,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 136,
      confirm_name: "주식회사 칸미디어",
      work: "상품기획·MD,의류·패션·잡화디자인,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 137,
      confirm_name: "(주)모바일이앤엠애드",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 138,
      confirm_name: "(주)투믹스",
      work: "캐릭터·만화·애니,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 139,
      confirm_name: "빅박스 주식회사",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 수영구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 140,
      confirm_name: "주식회사 한량",
      work: "웹기획·PM",
      address: "인천 &gt; 부평구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 141,
      confirm_name: "주식회사 에어라파",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 142,
      confirm_name: "(주)트리",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 143,
      confirm_name: "제일저지(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 144,
      confirm_name: "(주)와이즈버즈",
      work:
        "홍보·PR·사보,마케팅·광고·분석,광고영업,웹기획·PM,게임·Game,인공지능(AI)·빅데이터,광고·카피·CF",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 145,
      confirm_name: "(주)지오코칭",
      work: "웹기획·PM",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 146,
      confirm_name: "나우써치",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 147,
      confirm_name: "(주)에듀스파박문각",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 5~8년"
    },
    {
      id: 148,
      confirm_name: "쁨클리닉",
      work:
        "해외영업·무역영업,기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,웹기획·PM,컨텐츠·사 이트운영,웹디자인,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 149,
      confirm_name: "쁨클리닉",
      work:
        "기획·전략·경영,사무보조·문서작성,인사·교육·노무,마케팅·광고·분석,영업기획·관리·지원,웹기획·PM,설문· 통계·리서치",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 150,
      confirm_name: "(주)씨엠에이글로벌",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 151,
      confirm_name: "커리어케어",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 9~20년"
    },
    {
      id: 152,
      confirm_name: "(주)태향",
      work: "웹기획·PM",
      address: "서울 &gt; 노원구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 153,
      confirm_name: "넥스브레인(주)",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 154,
      confirm_name: "(주)에이치알그룹",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~9년"
    },
    {
      id: 155,
      confirm_name: "(주)태향",
      work: "웹기획·PM",
      address: "서울 &gt; 노원구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 156,
      confirm_name: "(주)바이오믹스",
      work: "상품기획·MD,마케팅·광고·분석,웹기획·PM",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 157,
      confirm_name: "(주)바이오믹스",
      work: "상품기획·MD,마케팅·광고·분석,웹기획·PM",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 158,
      confirm_name: "주식회사 럭스드림프로덕션",
      work: "웹기획·PM",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 159,
      confirm_name: "주식회사 헤드트리",
      work: "IT·솔루션영업,영업기획·관리·지원,웹기획·PM",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 160,
      confirm_name: "주식회사 헤드트리",
      work: "웹마스터·QA·테스터,웹기획·PM",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 161,
      confirm_name: "(주)퍼스트메카",
      work: "기획·전략·경영,마케팅·광고·분석,웹기획·PM",
      address:
        "서울 &gt; 서울전체,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 양천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 162,
      confirm_name: "(주)와이디",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 김포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 163,
      confirm_name: "(주)위비스",
      work: "상품기획·MD,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 164,
      confirm_name: "(주)아프리카티비",
      work: "웹기획·PM,동영상·편집·코덱,방송연출·PD·감독",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 165,
      confirm_name: "주식회사 이상투자그룹",
      work: "기획·전략·경영,사무보조·문서작성,웹기획·PM",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 166,
      confirm_name: "(주)아비브",
      work: "제품·산업디자인,광고·시각디자인,웹기획·PM",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 2~7년"
    },
    {
      id: 167,
      confirm_name: "(주)오케이토마토",
      work: "웹기획·PM",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 168,
      confirm_name: "(주)브랜디",
      work:
        "상품기획·MD,홍보·PR·사보,레저·스포츠,미용·피부관리·애견,인사·교육·노무,마케팅·광고·분석,그래픽디자 인·CG,광고·시각디자인,광고영업,영업기획·관리·지원,고객센터·CS,QA·CS강사·수퍼바이저,웹기획·PM,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,카메라·조명·미술,광고·카피·CF",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 169,
      confirm_name: "(주)오케이토마토",
      work: "웹기획·PM",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 170,
      confirm_name: "비하인드(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 171,
      confirm_name: "(주)인큐브시스템",
      work: "웹기획·PM,웹개발,데이터베이스·DBA",
      address: "인천 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 172,
      confirm_name: "(주)인싸이트에이치알지",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 173,
      confirm_name: "(주)지오투정보기술",
      work: "웹기획·PM",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 174,
      confirm_name: "(주)프로매치코리아",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년) 이상",
      careear: "경력5년↑"
    },
    {
      id: 175,
      confirm_name: "(주)타이탄인베스트",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹마스터·QA·테스터,웹기획·PM,웹개발,퍼블 리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 연제구,부산 &gt; 영도구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 176,
      confirm_name: "(주)케이시크",
      work: "마케팅·광고·분석,웹기획·PM,방송연출·PD·감독",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 177,
      confirm_name: "(주)에스와이소프트",
      work:
        "기획·전략·경영,그래픽디자인·CG,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,사진·포토그라퍼,부동산·개발·경매·분양",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 178,
      confirm_name: "(주)올리브스톤",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 179,
      confirm_name: "(주)모티브플럭스인터렉티브",
      work:
        "그래픽디자인·CG,디자인기타,광고·시각디자인,웹기획·PM,게임·Game,컨텐츠·사이트운영,웹디자 인,동영상·편집·코덱",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 180,
      confirm_name: "이스트웨스트(주)",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로 그램개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 영도구,경남 &gt; 경남전체",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 181,
      confirm_name: "넥스브레인(주)",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 182,
      confirm_name: "(주)유니씨앤씨",
      work:
        "물류·유통·운송,구매·자재·재고,총무·법무·사무,사무보조·문서작성,마케팅·광고·분석,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 용산구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 183,
      confirm_name: "(주)스마트브레인",
      work: "웹기획·PM",
      address: "경북 &gt; 김천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 184,
      confirm_name: "비비트리(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 185,
      confirm_name: "(주)위런에듀",
      work: "그래픽디자인·CG,웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 186,
      confirm_name: "(주)대성문",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개 발,퍼블리싱·UI개발",
      address:
        "부산 &gt; 부산전체,부산 &gt; 사하구,부산 &gt; 연제구,부산 &gt; 영도구,울산 &gt; 남구,경남 &gt; 거제 시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 187,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹기획·PM",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~16년"
    },
    {
      id: 188,
      confirm_name: "주식회사 엘리튜드",
      work: "서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 189,
      confirm_name: "(주)피노텍",
      work: "기획·전략·경영,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 190,
      confirm_name: "JW커리어",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 191,
      confirm_name: "Dream Communications Company",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 192,
      confirm_name: "(주)알볼로에프앤씨",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,홍보·PR·사보,외식·식음료,요리·제빵사·영양사,인사 ·교육·노무,마케팅·광고·분석,광고·시각디자인,일반영업,판매·매장관리,영업기획·관리·지원,QA·CS강사·수퍼바이저,생 산관리·품질관리,바이오·제약·식품,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,데이터베이스·DBA,경영분석·컨설턴트,설문·통계·리서치,법률·특허·상표,연구소·R&D,교육기획·교재,부동산·개발·경매·분양",
      address: "서울 &gt; 서울전체,서울 &gt; 양천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 193,
      confirm_name: "(주)블루포트",
      work:
        "구매·자재·재고,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,영업기획·관리·지원,서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어,웹디자인,경영분석·컨설턴트,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 194,
      confirm_name: "(주)티씨컴퍼니",
      work: "웹기획·PM,교육기획·교재",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 195,
      confirm_name: "(주)인조이웍스",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 196,
      confirm_name: "주식회사 오픈소스컨설팅",
      work: "웹마스터·QA·테스터,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 197,
      confirm_name: "주식회사와우비엔비",
      work: "웹기획·PM",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 198,
      confirm_name: "오브잇겟주식회사",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 199,
      confirm_name: "(주)로봇마트",
      work: "상품기획·MD,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 200,
      confirm_name: "휴머레인컨설팅",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 201,
      confirm_name: "(주)마이더스에이치알",
      work: "그래픽디자인·CG,웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 202,
      confirm_name: "(주)헤렌",
      work: "고객센터·CS,웹기획·PM",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 203,
      confirm_name: "(주)팍스넷",
      work: "기획·전략·경영,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 204,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 205,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 206,
      confirm_name: "(주)티에이나인",
      work: "서버·네트워크·보안,웹기획·PM,웹개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 207,
      confirm_name: "(주)세일창조",
      work: "기획·전략·경영,웹마스터·QA·테스터,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 208,
      confirm_name: "주식회사 컴스웨이",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 209,
      confirm_name: "주식회사 컴스웨이",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 210,
      confirm_name: "(주)위더스애드",
      work:
        "기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니, 광고·시각디자인,일반영업,광고영업,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,작가·시나리오,광고·카피·CF,방송연출·PD·감독",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 211,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 212,
      confirm_name: "열린기획(주)",
      work: "마케팅·광고·분석,IT·솔루션영업,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 213,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work:
        "TM·인바운드,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,동영상·편 집·코덱,데이터베이스·DBA,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 214,
      confirm_name: "세렌디피티",
      work:
        "그래픽디자인·CG,출판·편집디자인,제품·산업디자인,웹기획·PM,웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 215,
      confirm_name: "앱케터",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 216,
      confirm_name: "(주)트라이씨클",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 217,
      confirm_name: "(주)펫츠비",
      work: "웹기획·PM,웹개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 218,
      confirm_name: "미래메디케어",
      work: "웹기획·PM",
      address: "대구 &gt; 달서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 219,
      confirm_name: "(주)티지알앤",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 도봉구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 220,
      confirm_name: "(주)해븐메이드",
      work: "총무·법무·사무,웹기획·PM,웹디자인",
      address: "광주 &gt; 광산구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 221,
      confirm_name: "주식회사 이노아이티",
      work: "웹기획·PM,웹개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 222,
      confirm_name: "(주)그리드원",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~15년"
    },
    {
      id: 223,
      confirm_name: "(주)누리어시스템",
      work: "웹개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력10년↑"
    },
    {
      id: 224,
      confirm_name: "(주)케이피앤피",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 225,
      confirm_name: "유한회사 이아이홀딩스",
      work: "웹개발",
      address: "아시아·중동 &gt; 필리핀",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 226,
      confirm_name: "(주)인써어치컨설팅",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 227,
      confirm_name: "갤리언컨설팅그룹",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 228,
      confirm_name: "(주)넷티드",
      work: "웹개발",
      address: "세종 &gt; 세종특별자치시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~9년"
    },
    {
      id: 229,
      confirm_name: "(주)에임투지",
      work: "웹마스터·QA·테스터,웹개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 230,
      confirm_name: "(주)코인원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 231,
      confirm_name: "썬웨이 주식회사",
      work: "웹개발",
      address: "부산 &gt; 서구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 232,
      confirm_name: "주식회사 투그램시스템즈",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천 구,서울 &gt; 노원구,서울 &gt; 도봉구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 233,
      confirm_name: "아키테카 주식회사",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력6년↑"
    },
    {
      id: 234,
      confirm_name: "아키테카 주식회사",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 235,
      confirm_name: "아키테카 주식회사",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 236,
      confirm_name: "오투웹스",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 237,
      confirm_name: "(주)헬로네이처",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 238,
      confirm_name: "(주)미오내츄럴",
      work: "웹개발",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 239,
      confirm_name: "(주)케이지에듀원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 240,
      confirm_name: "(주)아이엔에쓰",
      work: "웹개발,응용프로그램개발",
      address: "충북 &gt; 청주시 흥덕구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 241,
      confirm_name: "(주)아이엔에쓰",
      work: "웹개발,응용프로그램개발",
      address: "충북 &gt; 청주시 흥덕구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 242,
      confirm_name: "(주)커널시스템",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 243,
      confirm_name: "(주)수커뮤니케이션",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 244,
      confirm_name: "(주)리치빔",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 245,
      confirm_name: "BIMPeers",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 246,
      confirm_name: "(주)디지비데이터시스템",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨 어",
      address:
        "대구 &gt; 대구전체,대구 &gt; 남구,대구 &gt; 동구,대구 &gt; 수성구,아시아·중동 &gt; 캄보디아",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 247,
      confirm_name: "커리어인사이트",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 248,
      confirm_name: "인포뱅크(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 249,
      confirm_name: "커리어인사이트",
      work: "웹개발",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 250,
      confirm_name: "커리어인사이트",
      work: "웹개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 251,
      confirm_name: "(주)글로벌네트웍스",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 252,
      confirm_name: "(주)이지소프트랩",
      work: "웹개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 253,
      confirm_name: "보람상조개발(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 254,
      confirm_name: "(주)씨에스플러스",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 255,
      confirm_name: "C&C KOREA",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구,서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력8년↑"
    },
    {
      id: 256,
      confirm_name: "(주)나인에스티",
      work: "웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 257,
      confirm_name: "더화이트커뮤니케이션(주)",
      work: "웹개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 258,
      confirm_name: "주식회사 이니시움",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 259,
      confirm_name: "주식회사 핌아시아",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 260,
      confirm_name: "커리어인사이트",
      work: "웹개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 261,
      confirm_name: "(주)하이윌테크놀로지",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 262,
      confirm_name: "(주)제이투이",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 263,
      confirm_name: "(주)제이투이",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력6년↑"
    },
    {
      id: 264,
      confirm_name: "(주)제이투이",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 265,
      confirm_name: "시큐어레터(주)",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~12년"
    },
    {
      id: 266,
      confirm_name: "(주)제이투이",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 267,
      confirm_name: "(주)에코정보기술",
      work: "웹개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 268,
      confirm_name: "커리어인사이트",
      work: "웹개발",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 269,
      confirm_name: "찍고바(주)",
      work: "웹개발,IT·디자인·컴퓨터교육,본사·관리·전산",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 270,
      confirm_name: "메이크잇",
      work: "웹개발",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 271,
      confirm_name: "(주)마켓링크",
      work: "웹개발",
      address: "서울 &gt; 서대문구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 272,
      confirm_name: "엔터웨이파트너스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~12년"
    },
    {
      id: 273,
      confirm_name: "(주) 워터정보",
      work: "웹개발",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 274,
      confirm_name: "(주)리치앤코",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 275,
      confirm_name: "커리어인사이트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 276,
      confirm_name: "(주)핀샷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 277,
      confirm_name: "(주)핀샷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 278,
      confirm_name: "(주)컴트루테크놀로지",
      work: "웹개발,병역특례",
      address: "서울 &gt; 마포구,세종 &gt; 세종특별자치시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 279,
      confirm_name: "(주)다담리테일",
      work: "웹개발",
      address: "광주 &gt; 광산구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 280,
      confirm_name: "포커스미디어코리아(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 281,
      confirm_name: "(주)헬로서치",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 282,
      confirm_name: "(주)와이쓰리에스",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 283,
      confirm_name: "SMALLWORLD",
      work: "웹개발,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 284,
      confirm_name: "전주대학교",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,도서관사서,교육기획·교재,대학교수·행정직",
      address: "전북 &gt; 전북전체,전북 &gt; 전주시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 285,
      confirm_name: "(주)아이룩스",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,사진·포토그라퍼",
      address: "부산 &gt; 부산전체,부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 286,
      confirm_name: "(주)온피아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 287,
      confirm_name: "(주)와이쓰리에스",
      work: "웹개발",
      address: "인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 288,
      confirm_name: "NHN(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 289,
      confirm_name: "(주)정인네트웍스",
      work: "웹개발,퍼블리싱·UI개발",
      address: "인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 290,
      confirm_name: "시큐라",
      work: "웹개발",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 291,
      confirm_name: "(주)로엠씨",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 292,
      confirm_name: "알에셋마스터리스(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 293,
      confirm_name: "(주)애니컨",
      work: "웹개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 294,
      confirm_name: "(주)도우테크",
      work: "웹마스터·QA·테스터,웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년 ↑"
    },
    {
      id: 295,
      confirm_name: "주식회사 코어라운드",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 296,
      confirm_name: "(주)파이온즈",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 297,
      confirm_name: "(주)파이온즈",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 298,
      confirm_name: "(주)맨토스파워",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 마포구,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 299,
      confirm_name: "(주)커머스웨어",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 300,
      confirm_name: "(주)청담러닝",
      work:
        "기획·전략·경영,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 강남구,서울 &gt; 노원구,서울 &gt; 성동구",
      education: "대학졸업(2,3 년)이상",
      careear: "신입/경력"
    },
    {
      id: 301,
      confirm_name: "(주)인터파크비즈마켓",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 302,
      confirm_name: "HR 킴벌리",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 303,
      confirm_name: "(주)미래정보기술",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 304,
      confirm_name: "주식회사 해줌",
      work: "웹개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 305,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 306,
      confirm_name: "(주)에스에스비정보기술",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 307,
      confirm_name: "린오토",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 308,
      confirm_name: "울랄라랩 주식회사",
      work: "웹개발,웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 309,
      confirm_name: "(주)비비파트너스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 310,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 311,
      confirm_name: "관세법인 천지인",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 312,
      confirm_name: "스냅스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 313,
      confirm_name: "스냅스",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 314,
      confirm_name: "(주)에이치알비즈코리아",
      work: "웹개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 315,
      confirm_name: "베스트네트워크(주)",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 316,
      confirm_name: "(주)소프트상상",
      work: "웹개발",
      address: "충북 &gt; 청주시 청원구",
      education: "학력무관",
      careear: "경력 1~20년"
    },
    {
      id: 317,
      confirm_name: "(주)블루웨이브컨설팅",
      work: "웹개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 318,
      confirm_name: "(주)큐씨엔",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~2년"
    },
    {
      id: 319,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 320,
      confirm_name: "(주)빅케어리저브",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 동작구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 321,
      confirm_name: "주식회사 페이체크",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 322,
      confirm_name: "(주)파인스태프",
      work: "웹개발,컨텐츠·사이트운영,시스템개발",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 양천구,서울 &gt; 영등포 구,서울 &gt; 은평구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구,경기 &gt; 부천시,경기 &gt; 부천시 소사구,경기 &gt; 부천시 오정구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 323,
      confirm_name: "(주)혜민생활건강",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 324,
      confirm_name: "(주)크라우드베이스",
      work: "웹개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 325,
      confirm_name: "(재)경기도일자리재단",
      work: "웹개발",
      address: "중국.홍콩 &gt; 홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 326,
      confirm_name: "(주)제이엠에스컨설팅",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 327,
      confirm_name: "SCI평가정보(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 328,
      confirm_name: "(주)교림소프트",
      work: "웹개발",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 6~15년"
    },
    {
      id: 329,
      confirm_name: "주식회사 이커머스테크",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력9년↑"
    },
    {
      id: 330,
      confirm_name: "라인게임즈 주식회사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 331,
      confirm_name: "에이스파트너스",
      work: "게임·Game,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~18년"
    },
    {
      id: 332,
      confirm_name: "타겟컨설팅그룹",
      work: "웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 333,
      confirm_name: "(주)우리와미래",
      work: "일반영업,게임·Game",
      address: "경기 &gt; 의정부시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 334,
      confirm_name: "(주)서드스테이지",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 335,
      confirm_name: "건솔루션(주)",
      work: "게임·Game,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 안양시 만안구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 336,
      confirm_name: "(주)키루스",
      work: "그래픽디자인·CG,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 337,
      confirm_name: "알서포트(주)",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 338,
      confirm_name: "(주) 컴투스",
      work: "마케팅·광고·분석,그래픽디자인·CG,게임·Game,웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 339,
      confirm_name: "(주)스튜디오미르",
      work: "회계·재무·세무·IR,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 340,
      confirm_name: "라인파이낸셜플러스(주)",
      work: "게임·Game,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 341,
      confirm_name: "(주)이엔피게임즈",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 342,
      confirm_name: "(주)이엔피게임즈",
      work: "게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 343,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work: "웹기획·PM,웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 344,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work:
        "서버·네트워크·보안,게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 345,
      confirm_name: "타겟컨설팅그룹",
      work: "웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 346,
      confirm_name: "(주) 컴투스",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 347,
      confirm_name: "(주) 컴투스",
      work:
        "기획·전략·경영,마케팅·광고·분석,웹기획·PM,게임·Game,설문·통계·리서치",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 348,
      confirm_name: "(주) 컴투스",
      work:
        "게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt;  금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 349,
      confirm_name: "(주) 컴투스",
      work:
        "기획·전략·경영,게임·Game,응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "학력 무관",
      careear: "경력"
    },
    {
      id: 350,
      confirm_name: "(주) 컴투스",
      work: "기획·전략·경영,마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 351,
      confirm_name: "(주) 컴투스",
      work: "기획·전략·경영,게임·Game",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 352,
      confirm_name: "(주) 컴투스",
      work: "고객센터·CS,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 353,
      confirm_name: "(주) 컴투스",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 354,
      confirm_name: "(주)에이치알인재그룹",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 355,
      confirm_name: "(주) 컴투스",
      work: "회계·재무·세무·IR,게임·Game,설문·통계·리서치",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 356,
      confirm_name: "(주) 컴투스",
      work: "게임·Game,응용프로그램개발",
      address: "북·중미 &gt; 미국",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 357,
      confirm_name: "(주) 컴투스",
      work: "해외영업·무역영업,기획·전략·경영,마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 금천구,아시아·중동 &gt; 태국",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 358,
      confirm_name: "(주) 컴투스",
      work: "인사·교육·노무,게임·Game,헤드헌팅·노무·직업상담",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 359,
      confirm_name: "코커리어",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 360,
      confirm_name: "코커리어",
      work: "웹개발,게임·Game,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 361,
      confirm_name: "(주)크로스리얼",
      work: "그래픽디자인·CG,게임·Game",
      address: "광주 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 362,
      confirm_name: "한스컨설팅",
      work: "게임·Game,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 363,
      confirm_name: "한스컨설팅",
      work: "캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 364,
      confirm_name: "한스컨설팅",
      work: "웹마스터·QA·테스터,게임·Game,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 365,
      confirm_name: "한스컨설팅",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 366,
      confirm_name: "한스컨설팅",
      work: "해외영업·무역영업,게임·Game,외국어·번역·통역",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 367,
      confirm_name: "한스컨설팅",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 368,
      confirm_name: "한스컨설팅",
      work: "해외영업·무역영업,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~7년"
    },
    {
      id: 369,
      confirm_name: "한스컨설팅",
      work: "웹기획·PM,게임·Game,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 8~10년"
    },
    {
      id: 370,
      confirm_name: "한스컨설팅",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 371,
      confirm_name: "한스컨설팅",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 372,
      confirm_name: "한스컨설팅",
      work: "캐릭터·만화·애니,게임·Game,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 373,
      confirm_name: "한스컨설팅",
      work: "웹기획·PM,게임·Game,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 8~10년"
    },
    {
      id: 374,
      confirm_name: "한스컨설팅",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 375,
      confirm_name: "한스컨설팅",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 376,
      confirm_name: "켈리서비스 유한회사",
      work: "마케팅·광고·분석,게임·Game,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 377,
      confirm_name: "주식회사 갤럭틱엔터테인먼트",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 378,
      confirm_name: "(주)해머엔터테인먼트",
      work: "게임·Game,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 379,
      confirm_name: "(주)웹젠",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재 무·세무·IR,마케팅·광고·분석,캐릭터·만화·애니,광고영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,QA·CS강사 ·수퍼바이저,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역·통역,카메라·조명·미술",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 380,
      confirm_name: "(주)엔씨아이티에스",
      work: "서버·네트워크·보안,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 381,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,게임·Game,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 382,
      confirm_name: "(주)엔씨아이티에스",
      work:
        "웹개발,게임·Game,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 383,
      confirm_name: "HR컨설팅(주)",
      work: "게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 384,
      confirm_name: "제트로닉스코리아(주)",
      work: "서버·네트워크·보안,게임·Game,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 385,
      confirm_name: "(주)아프리카티비",
      work: "웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 4~5년"
    },
    {
      id: 386,
      confirm_name: "민코넷(주)",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 387,
      confirm_name: "(주)라티스글로벌커뮤니케이션스",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 388,
      confirm_name: "(주)코웰메디",
      work: "게임·Game,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 389,
      confirm_name: "커리어커넥트(주)",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 강남구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 390,
      confirm_name: "(주)액토즈소프트",
      work: "캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 391,
      confirm_name: "(주)액토즈소프트",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 392,
      confirm_name: "(주)액토즈소프트",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~8년"
    },
    {
      id: 393,
      confirm_name: "(주)액토즈소프트",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 394,
      confirm_name: "(주)스카우트",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 395,
      confirm_name: "(주)핸디커뮤니케이션즈",
      work: "게임·Game,컨텐츠·사이트운영",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천구,경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 396,
      confirm_name: "라인컴퓨터아트아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,설계·CAD·CAM,웹기획·PM,웹개발,게임·Game,웹디자인,퍼블리싱·UI개발,건축·인테리어·설계,현장·시공·감리·공무",
      address:
        "경기 &gt; 시흥시,경기 &gt; 안산시,경기 &gt; 안산시 단원구,경기 &gt; 안산시 상록구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 397,
      confirm_name: "(주)베스트에치알 (Best HR)",
      work: "고객센터·CS,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 398,
      confirm_name: "(주)드림아이디어소프트",
      work: "게임·Game",
      address: "인천 &gt; 미추홀구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 399,
      confirm_name: "(주)한빛소프트",
      work: "출판·편집디자인,게임·Game,동영상·편집·코덱",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 400,
      confirm_name: "(주)매스씨앤지",
      work: "캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 401,
      confirm_name: "(주)웨스토",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 402,
      confirm_name: "(주)매스씨앤지",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~14년"
    },
    {
      id: 403,
      confirm_name: "두루이디에스(주)",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 404,
      confirm_name: "트리노드(주)",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 405,
      confirm_name: "(주)공게임즈",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 406,
      confirm_name: "터닝포인트HR",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 6~10년"
    },
    {
      id: 407,
      confirm_name: "파워에이치알",
      work: "게임·Game,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 408,
      confirm_name: "한국통신인터넷기술(주)",
      work: "서버·네트워크·보안,게임·Game",
      address: "서울 &gt; 양천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 409,
      confirm_name: "주식회사 토즈",
      work: "게임·Game,응용프로그램개발",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 410,
      confirm_name: "햄파트너스",
      work: "인사·교육·노무,게임·Game,헤드헌팅·노무·직업상담",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 411,
      confirm_name: "아이지에스(주)",
      work: "게임·Game,컨텐츠·사이트운영,외국어·어학원",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 412,
      confirm_name: "아이지에스(주)",
      work: "웹마스터·QA·테스터,게임·Game,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~8년"
    },
    {
      id: 413,
      confirm_name: "(주)커리어코리아",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 414,
      confirm_name: "에이스파트너스",
      work: "게임·Game,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~18년"
    },
    {
      id: 415,
      confirm_name: "(주)훌리악",
      work: "캐릭터·만화·애니,게임·Game,동영상·편집·코덱",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 416,
      confirm_name: "오렌지스텝",
      work: "게임·Game",
      address:
        "부산 &gt; 부산전체,부산 &gt; 강서구,부산 &gt; 부산진구,부산 &gt; 북구,부산 &gt; 사상구,경남 &gt;  김해시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 417,
      confirm_name: "(주)푸른밤",
      work: "고객센터·CS,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 418,
      confirm_name: "현대건설기계(주)",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,전 시·공간디자인,광고·시각디자인,일반영업,QA·CS강사·수퍼바이저,생산관리·품질관리,설계·CAD·CAM,게임·Game,컨텐츠·사 이트운영,ERP·시스템분석·설계,카메라·조명·미술",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 용인시,울산 &gt; 울산전체,충북 &gt; 음성군",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 419,
      confirm_name: "오픈포지션",
      work: "서버·네트워크·보안,게임·Game,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 420,
      confirm_name: "오픈포지션",
      work: "게임·Game,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 421,
      confirm_name: "오픈포지션",
      work: "게임·Game,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 422,
      confirm_name: "드래곤플라이",
      work: "게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 423,
      confirm_name: "(주)뉴빛테크놀러지",
      work: "그래픽디자인·CG,게임·Game,동영상·편집·코덱",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 424,
      confirm_name: "(주)위메이드",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 425,
      confirm_name: "(주)넥슨네트웍스",
      work: "웹마스터·QA·테스터,게임·Game,외국어·번역·통역",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 426,
      confirm_name: "터닝포인트HR",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~10년"
    },
    {
      id: 427,
      confirm_name: "드래곤플라이",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 428,
      confirm_name: "(주)펄어비스",
      work: "기획·전략·경영,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 429,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "기획·전략·경영,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 430,
      confirm_name: "(주)펄어비스",
      work: "기획·전략·경영,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 431,
      confirm_name: "(주)펄어비스",
      work: "기획·전략·경영,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 432,
      confirm_name: "코리아써치",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 433,
      confirm_name: "드래곤플라이",
      work: "게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 434,
      confirm_name: "(주)펄어비스",
      work: "게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 435,
      confirm_name: "(주)소니인터랙티브엔터테인먼트코리아",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 서초구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 436,
      confirm_name: "(주)팻마우스",
      work: "광고영업,영업기획·관리·지원,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 437,
      confirm_name: "(주)소니인터랙티브엔터테인먼트코리아",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 서초구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 438,
      confirm_name: "(주)게임스프링",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 439,
      confirm_name: "KOG",
      work: "마케팅·광고·분석,웹기획·PM,게임·Game",
      address: "대구 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 440,
      confirm_name: "NHN AD",
      work:
        "홍보·PR·사보,마케팅·광고·분석,일반영업,광고영업,영업기획·관리·지원,게임·Game,광고·카피·CF",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 441,
      confirm_name: "(주)큐로컴",
      work: "컨텐츠·사이트운영,ERP·시스템분석·설계,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 442,
      confirm_name: "(주)스마트크루",
      work: "TM·인바운드,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 구로구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 443,
      confirm_name: "한맥식품",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "경력 2~8년"
    },
    {
      id: 444,
      confirm_name: "이스트 컴퍼니",
      work: "상품기획·MD,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 445,
      confirm_name: "선일공구",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 446,
      confirm_name: "(주)미미박스",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 447,
      confirm_name: "(주)이디엠에듀케이션",
      work:
        "웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 448,
      confirm_name: "(주)한방",
      work: "웹개발,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 449,
      confirm_name: "(주)하이웨이원",
      work:
        "그래픽디자인·CG,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1 년↑"
    },
    {
      id: 450,
      confirm_name: "(주)유나이티드디자이너스",
      work: "컨텐츠·사이트운영,웹디자인,사진·포토그라퍼",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력 1~3년"
    },
    {
      id: 451,
      confirm_name: "(주)디자인토모",
      work: "컨텐츠·사이트운영,웹디자인,건축·인테리어·설계",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 452,
      confirm_name: "코닉",
      work: "상품기획·MD,의류·패션·잡화디자인,컨텐츠·사이트운영",
      address: "대구 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 453,
      confirm_name: "(주)제이에프키즈",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 454,
      confirm_name: "(주)크리에이티비젼",
      work:
        "홍보·PR·사보,마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영,작가·시나리오",
      address: "서울 &gt; 동작구",
      education: "대학 졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 455,
      confirm_name: "(주)씨앤투스성진",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 456,
      confirm_name: "(주)윌인터내셔날",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 457,
      confirm_name: "플랜온(주)",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 과천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 458,
      confirm_name: "(주)미광금속",
      work: "상품기획·MD,의류·패션·잡화디자인,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 459,
      confirm_name: "(주)제이제이글로벌그룹",
      work: "그래픽디자인·CG,광고·시각디자인,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 460,
      confirm_name: "홍익무역",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 461,
      confirm_name: "아라정보",
      work: "물류·유통·운송,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 462,
      confirm_name: "(주)대형네트웍스",
      work: "광고영업,컨텐츠·사이트운영,웹디자인",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 463,
      confirm_name: "(주)카페캠프통",
      work: "일반영업,컨텐츠·사이트운영,문화·예술·종교",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 464,
      confirm_name: "(주)아밍제이",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 465,
      confirm_name: "다인푸드",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 광주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 466,
      confirm_name: "(주)크리스에프앤씨",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 467,
      confirm_name: "(주)더블유플래닛",
      work:
        "마케팅·광고·분석,그래픽디자인·CG,디자인기타,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 468,
      confirm_name: "마니스포츠",
      work: "상품기획·MD,사무보조·문서작성,컨텐츠·사이트운영",
      address: "인천 &gt; 미추홀구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 469,
      confirm_name: "(주)이엔커머스",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 470,
      confirm_name: "(주)리앤소프트크리에이티브",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 471,
      confirm_name: "(주)허밍어스",
      work: "홍보·PR·사보,컨텐츠·사이트운영",
      address: "서울 &gt; 성북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 472,
      confirm_name: "(주)알앤제이",
      work: "TM·인바운드,웹기획·PM,컨텐츠·사이트운영",
      address: "충북 &gt; 청주시 서원구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 473,
      confirm_name: "비비아노",
      work: "구매·자재·재고,납품·배송·택배,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 474,
      confirm_name: "(주)야나두",
      work: "사무보조·문서작성,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 475,
      confirm_name: "이엘치과병원",
      work: "제품·산업디자인,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 대덕구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 476,
      confirm_name: "갤리언컨설팅그룹",
      work: "물류·유통·운송,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~18년"
    },
    {
      id: 477,
      confirm_name: "쿠키커머스",
      work: "TM·인바운드,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 478,
      confirm_name: "그루마케팅",
      work: "사무보조·문서작성,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 479,
      confirm_name: "(주)케이비아이",
      work: "영업기획·관리·지원,컨텐츠·사이트운영",
      address: "경기 &gt; 고양시 일산서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 480,
      confirm_name: "프롬벳",
      work: "컨텐츠·사이트운영",
      address: "경북 &gt; 경산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 481,
      confirm_name: "(주)웨딩북",
      work: "웨딩·행사·이벤트,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 482,
      confirm_name: "디유넷",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 483,
      confirm_name: "한국베름(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "강원 &gt; 원주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 484,
      confirm_name: "한국베름(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 485,
      confirm_name: "(주)눈사람이노베이션",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 양천구,인천 &gt; 인천전체",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 486,
      confirm_name: "(주)미스터로맨스",
      work: "웹기획·PM,컨텐츠·사이트운영,광고·카피·CF",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 487,
      confirm_name: "(주)다봄씨엔에스",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 488,
      confirm_name: "(주)인뎀바움",
      work: "컨텐츠·사이트운영",
      address: "대구 &gt; 동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 489,
      confirm_name: "(주)비원시스템",
      work: "물류·유통·운송,판매·매장관리,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 490,
      confirm_name: "빅박스 주식회사",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 수영구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 491,
      confirm_name: "(주)글로벌네트웍스",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 492,
      confirm_name: "(주)완벽한우리들",
      work:
        "사무보조·문서작성,그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,사진·포 토그라퍼",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 493,
      confirm_name: "(주)위메프",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 494,
      confirm_name: "(주)벡셀",
      work:
        "해외영업·무역영업,상품기획·MD,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,기술영업,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 495,
      confirm_name: "비비아노",
      work: "고객센터·CS,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 496,
      confirm_name: "(주)인뎀바움",
      work: "컨텐츠·사이트운영",
      address: "대구 &gt; 동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 497,
      confirm_name: "(주)디케이비즈니스",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,광고영업,영업 기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,QA·CS강사·수퍼바이저,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 498,
      confirm_name: "우리들마당(주)",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 499,
      confirm_name: "우리들마당(주)",
      work: "상품기획·MD,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 500,
      confirm_name: "비오큐코퍼레이션",
      work:
        "기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,의류·패션·잡화디자인,디자인기타,광고·시각디자인,광고영업,웹기획·PM,컨텐츠·사이트운영,웹디자인,광고·카피·CF",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 501,
      confirm_name: "홍반장",
      work: "마케팅·광고·분석,광고영업,컨텐츠·사이트운영",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 502,
      confirm_name: "(주)신디코리아",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 503,
      confirm_name: "찍고바(주)",
      work: "상품기획·MD,총무·법무·사무,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 504,
      confirm_name: "K-ration(케이레이션)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 505,
      confirm_name: "(주)태영에이치엔씨",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 506,
      confirm_name: "K-ration(케이레이션)",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 507,
      confirm_name: "커머스파크(주)",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 508,
      confirm_name: "선일공구",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 509,
      confirm_name: "주식회사 두리보매",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 510,
      confirm_name: "(주)에센루",
      work:
        "물류·유통·운송,해외영업·무역영업,상품기획·MD,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,제품·산 업디자인,의류·패션·잡화디자인,일반영업,영업기획·관리·지원,고객센터·CS,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,사진·포토그라퍼",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 511,
      confirm_name: "비알엔팜",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 512,
      confirm_name: "세이버투플러스",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 513,
      confirm_name: "(주)다다르다",
      work: "홍보·PR·사보,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 514,
      confirm_name: "(주)비비파트너스",
      work: "상품기획·MD,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 515,
      confirm_name: "아이와이씨앤씨(주)",
      work: "서버·네트워크·보안,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 516,
      confirm_name: "(주)아이룩스",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,사진·포토그라퍼",
      address: "부산 &gt; 부산전체,부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 517,
      confirm_name: "영남이공대학교 산학협력단",
      work: "컨텐츠·사이트운영,동영상·편집·코덱",
      address: "대구 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 518,
      confirm_name: "오노레(ONORE)",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 1~3년"
    },
    {
      id: 519,
      confirm_name: "도깨비트래블",
      work:
        "총무·법무·사무,사무보조·문서작성,호텔·카지노·콘도,여행·관광·항공,마케팅·광고·분석,TM·아웃바운드,TM·인바운드,컨텐츠·사이트운영,외국어·번역·통역",
      address: "서울 &gt; 종로구,서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 520,
      confirm_name: "케이알피엠에듀센터",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 521,
      confirm_name: "씨에스랩 주식회사",
      work: "컨텐츠·사이트운영,동영상·편집·코덱,카메라·조명·미술",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 522,
      confirm_name: "(주)스타일엠",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 광진구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 523,
      confirm_name: "빅피싱",
      work: "판매·매장관리,컨텐츠·사이트운영",
      address: "경기 &gt; 안성시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 524,
      confirm_name: "(주)케이원파트너스컴퍼니",
      work: "상품기획·MD,화학·에너지,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 525,
      confirm_name: "(주)에이스탁",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 526,
      confirm_name: "(주)효성컴퍼니",
      work: "TM·인바운드,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 동대문구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 527,
      confirm_name: "(주)청담러닝",
      work:
        "기획·전략·경영,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 강남구,서울 &gt; 노원구,서울 &gt; 성동구",
      education: "대학졸업(2,3 년)이상",
      careear: "신입/경력"
    },
    {
      id: 528,
      confirm_name: "(주)아이텍코리아",
      work: "경리·출납·결산,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 529,
      confirm_name: "한국터치스크린(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 530,
      confirm_name: "골든비 네트워크",
      work: "화학·에너지,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 531,
      confirm_name: "더블유컴퍼니",
      work: "컨텐츠·사이트운영,웹디자인,동영상·편집·코덱",
      address: "광주 &gt; 북구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 532,
      confirm_name: "재진가로등(주)",
      work: "영업기획·관리·지원,컨텐츠·사이트운영",
      address: "세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 533,
      confirm_name: "앤코튼",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 김포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 534,
      confirm_name: "법률사무소 율평",
      work: "컨텐츠·사이트운영,동영상·편집·코덱",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 535,
      confirm_name: "(주)크리에이저",
      work: "마케팅·광고·분석,광고·시각디자인,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 마포구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 536,
      confirm_name: "올웨이즈",
      work: "물류·유통·운송,중장비·화물,컨텐츠·사이트운영",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 537,
      confirm_name: "(주)패션포유",
      work: "웹마스터·QA·테스터,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 538,
      confirm_name: "(주)세토리",
      work: "마케팅·광고·분석,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 539,
      confirm_name: "대한전산",
      work: "TM·인바운드,고객센터·CS,컨텐츠·사이트운영",
      address:
        "대구 &gt; 대구전체,대구 &gt; 남구,대구 &gt; 달서구,대구 &gt; 북구,대구 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 540,
      confirm_name: "HNT 아웃소싱시스템",
      work: "상품기획·MD,사무보조·문서작성,컨텐츠·사이트운영",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,인천 &gt; 인천전체,인천 &gt; 부평구,인천 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 541,
      confirm_name: "런코리아 주식회사",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 542,
      confirm_name: "아이지에스(주)",
      work: "마케팅·광고·분석,게임·Game,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~9년"
    },
    {
      id: 543,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 544,
      confirm_name: "(주)인투어",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 545,
      confirm_name: "주식회사 가원",
      work: "물류·유통·운송,구매·자재·재고,컨텐츠·사이트운영",
      address: "경기 &gt; 파주시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 546,
      confirm_name: "(주)태평양에프에스",
      work: "컨텐츠·사이트운영",
      address: "경남 &gt; 양산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 547,
      confirm_name: "(주)태평양에프에스",
      work: "컨텐츠·사이트운영",
      address: "경남 &gt; 양산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 548,
      confirm_name: "(주)아이에스이커머스",
      work: "상품기획·MD,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 549,
      confirm_name: "(주)투믹스",
      work: "캐릭터·만화·애니,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 550,
      confirm_name: "빅박스 주식회사",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 수영구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 551,
      confirm_name: "(주)인텍솔루션",
      work: "웹개발,응용프로그램개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 영등포구,서울 &gt; 용산구,서울 &gt; 종로구,서울 &gt; 중구,인천 &gt; 인천전체,인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "경력9년↑"
    },
    {
      id: 552,
      confirm_name: "(주)디지캡",
      work: "응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 553,
      confirm_name: "현대중공업모스",
      work:
        "보안·경호·안전,회계·재무·세무·IR,전기·전자·제어,응용프로그램개발,세무·회계·CPA,전기·소방·통신 ·설비,안전·품질·검사·관리",
      address: "울산 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 554,
      confirm_name: "(주)두두원",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 555,
      confirm_name: "주식회사 커리어포커스",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 556,
      confirm_name: "(주)씨엠이소프트",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 557,
      confirm_name: "(주)에스에스비정보기술",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 558,
      confirm_name: "(주)두두원",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 559,
      confirm_name: "(주)엔터미디어",
      work: "응용프로그램개발",
      address: "경기 &gt; 부천시 오정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 560,
      confirm_name: "(주)대명코퍼레이션",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 군포시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 561,
      confirm_name: "(주)필드큐어",
      work: "그래픽디자인·CG,응용프로그램개발",
      address: "서울 &gt; 성북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 562,
      confirm_name: "허브커리어",
      work: "전기·전자·제어,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 563,
      confirm_name: "(주)더라이징스타헤딩",
      work: "응용프로그램개발,ERP·시스템분석·설계,경영분석·컨설턴트",
      address:
        "서울 &gt; 강남구,경기 &gt; 과천시,경기 &gt; 성남시 수정구,경기 &gt; 하남시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 564,
      confirm_name: "반석써치(주)",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 565,
      confirm_name: "(주)소프트원",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 566,
      confirm_name: "(주)블루문소프트",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 567,
      confirm_name: "리드정보기술(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 568,
      confirm_name: "(주)서커스컴퍼니",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,응용프로그램개발,동영상·편집·코덱,카메라·조명·미술,본사·관리·전산",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 569,
      confirm_name: "아이엔디엠(INDM)",
      work: "응용프로그램개발",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 570,
      confirm_name: "위지언",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 571,
      confirm_name: "(주)코인원트랜스퍼",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 572,
      confirm_name: "주식회사 시드플러스",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "대구 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 573,
      confirm_name: "슈어소프트테크(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 574,
      confirm_name: "코커리어",
      work: "웹개발,게임·Game,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 575,
      confirm_name: "(주)인터바일",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 576,
      confirm_name: "(주)다울디엔에스",
      work: "웹개발,응용프로그램개발",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 577,
      confirm_name: "트렌비",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 578,
      confirm_name: "(주)바디프랜드",
      work: "전기·전자·제어,설계·CAD·CAM,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 579,
      confirm_name: "(주)에이치알맨파워그룹",
      work: "응용프로그램개발",
      address: "경기 &gt; 용인시 기흥구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 580,
      confirm_name: "(주)지이씨엘코리아",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 581,
      confirm_name: "(주)엑시더스",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 수원시 권선구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 582,
      confirm_name: "(주)해커스교육그룹",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 583,
      confirm_name: "아몽솔루션(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 584,
      confirm_name: "(주)별난사람들",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 585,
      confirm_name: "(주)아이디맥스",
      work: "응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 586,
      confirm_name: "(주)더유니파이",
      work: "응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 587,
      confirm_name: "어니컴(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 588,
      confirm_name: "양정인력개발센터",
      work:
        "물류·유통·운송,무역사무·수출입,경리·출납·결산,사무보조·문서작성,여행·관광·항공,회계·재무·세무·IR,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 589,
      confirm_name: "(주)스마일게이트알피지",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 590,
      confirm_name: "(주)이디엠에듀케이션",
      work:
        "웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 591,
      confirm_name: "(주)HR컨설팅그룹",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~15년"
    },
    {
      id: 592,
      confirm_name: "더 휴먼",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 593,
      confirm_name: "(주)피플온(People On)",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~6년"
    },
    {
      id: 594,
      confirm_name: "(주)에이텍에이피",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 595,
      confirm_name: "(주)지에스아이엘",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 596,
      confirm_name: "(주)씨제스걸리버스튜디오",
      work: "그래픽디자인·CG,웹마스터·QA·테스터,응용프로그램개발",
      address: "경기 &gt; 고양시 일산서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 597,
      confirm_name: "(주)퍼브",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 598,
      confirm_name: "(주)유비포럼",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 599,
      confirm_name: "(주)케이에이알",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "울산 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 600,
      confirm_name: "(주)디지털다임",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 601,
      confirm_name: "(주)제이브이엠",
      work: "제품·산업디자인,응용프로그램개발,연구소·R&D",
      address: "서울 &gt; 서울전체,대구 &gt; 달서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 602,
      confirm_name: "(주)휴먼아이씨티",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 603,
      confirm_name: "(주)휴먼아이씨티",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 604,
      confirm_name: "(주)한컴MDS",
      work: "IT·솔루션영업,기술영업,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 605,
      confirm_name: "(주)에이텍에이피",
      work: "응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 606,
      confirm_name: "(주)휴먼아이씨티",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 607,
      confirm_name: "(주)씨이랩",
      work:
        "기획·전략·경영,마케팅·광고·분석,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버· 네트워크·보안,웹기획·PM,웹개발,게임·Game,응용프로그램개발,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 608,
      confirm_name: "주식회사 오토인",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 609,
      confirm_name: "대아티아이(주)",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 부천시 오정구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 610,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 구로구,서울 &gt; 용산구",
      education: "고등학교졸업이상",
      careear: "경력 4~20년"
    },
    {
      id: 611,
      confirm_name: "(주)애니파이브",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 612,
      confirm_name: "(주)아젠텍",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 613,
      confirm_name: "(주)메먼트",
      work: "웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 614,
      confirm_name: "(주)인써어치컨설팅",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 615,
      confirm_name: "(주)그리드원",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~15년"
    },
    {
      id: 616,
      confirm_name: "(주)케이피앤피",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 617,
      confirm_name: "(주)코인원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 618,
      confirm_name: "주식회사 투그램시스템즈",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천 구,서울 &gt; 노원구,서울 &gt; 도봉구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 619,
      confirm_name: "아키테카 주식회사",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 620,
      confirm_name: "(주)아젠텍",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 621,
      confirm_name: "(주)새눈",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 622,
      confirm_name: "(주)퀀텀솔루션",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 623,
      confirm_name: "(주)케이지에듀원",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 624,
      confirm_name: "파워에이치알",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 625,
      confirm_name: "(주)아이엔에쓰",
      work: "웹개발,응용프로그램개발",
      address: "충북 &gt; 청주시 흥덕구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 626,
      confirm_name: "(주)아이엔에쓰",
      work: "웹개발,응용프로그램개발",
      address: "충북 &gt; 청주시 흥덕구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 627,
      confirm_name: "갤리언컨설팅그룹",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 628,
      confirm_name: "(주)티모넷",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 629,
      confirm_name: "(주)커널시스템",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 630,
      confirm_name: "(주)수커뮤니케이션",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 631,
      confirm_name: "LIG넥스원(주)",
      work:
        "기술영업,기계·기계설비,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어· 소프트웨어,연구소·R&D",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 용인시,대전 &gt; 대전전체,경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 632,
      confirm_name: "BIMPeers",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 633,
      confirm_name: "(주)디지비데이터시스템",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨 어",
      address:
        "대구 &gt; 대구전체,대구 &gt; 남구,대구 &gt; 동구,대구 &gt; 수성구,아시아·중동 &gt; 캄보디아",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 634,
      confirm_name: "인포뱅크(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 635,
      confirm_name: "커리어인사이트",
      work: "응용프로그램개발",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 636,
      confirm_name: "커리어인사이트",
      work: "응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 637,
      confirm_name: "(주)글로벌네트웍스",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 638,
      confirm_name: "(주)에이치알그룹",
      work: "응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 639,
      confirm_name: "(주)스카우트플랜",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 640,
      confirm_name: "(주)와이즈넛",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 641,
      confirm_name: "(주)에이치알그룹",
      work: "응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 642,
      confirm_name: "보람상조개발(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 643,
      confirm_name: "amano korea(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 644,
      confirm_name: "(주)코리아웹데이터센터",
      work: "응용프로그램개발",
      address: "울산 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 645,
      confirm_name: "(주)제이엘유",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력9년↑"
    },
    {
      id: 646,
      confirm_name: "주식회사 핌아시아",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 647,
      confirm_name: "(주)텔러스",
      work: "응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 648,
      confirm_name: "(주)하이윌테크놀로지",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 649,
      confirm_name: "인터비전테크놀러지(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 650,
      confirm_name: "(주)케이에스티모빌리티",
      work: "응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 651,
      confirm_name: "시큐어레터(주)",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~12년"
    },
    {
      id: 652,
      confirm_name: "한스컨설팅",
      work: "웹마스터·QA·테스터,게임·Game,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 653,
      confirm_name: "(주)시스젠",
      work: "응용프로그램개발",
      address: "전북 &gt; 전주시 완산구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 654,
      confirm_name: "엔터웨이파트너스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~12년"
    },
    {
      id: 655,
      confirm_name: "(주)리치앤코",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 656,
      confirm_name: "커리어인사이트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 657,
      confirm_name: "주식회사 버츄얼넥스트",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 658,
      confirm_name: "(주)핀샷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 659,
      confirm_name: "(주)핀샷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 660,
      confirm_name: "네이버시스템(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 661,
      confirm_name: "(주)남전사",
      work: "시스템개발",
      address: "경남 &gt; 김해시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 662,
      confirm_name: "유비쿼스",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 663,
      confirm_name: "(주)피플렙",
      work: "서버·네트워크·보안,웹기획·PM,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 664,
      confirm_name: "동인엔지니어링(주)",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 665,
      confirm_name: "사브오토모티브",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 666,
      confirm_name: "현대에이치디에스(주)",
      work: "서버·네트워크·보안,응용프로그램개발,시스템개발",
      address: "충남 &gt; 아산시",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 667,
      confirm_name: "FNR Consulting",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 668,
      confirm_name: "(주)인큐브시스템",
      work: "기계·기계설비,전기·전자·제어,시스템개발",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 669,
      confirm_name: "(주)인큐브시스템",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 평택시",
      education: "학력무관",
      careear: "경력9년↑"
    },
    {
      id: 670,
      confirm_name: "SK엠앤서비스(주)",
      work:
        "총무·법무·사무,경리·출납·결산,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그 램개발,시스템개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 671,
      confirm_name: "(주)케어메디",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 672,
      confirm_name: "JS TEX CO.,LTD",
      work: "서버·네트워크·보안,웹개발,시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~4년"
    },
    {
      id: 673,
      confirm_name: "교보라이프플래닛생명보험(주)",
      work: "웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,연구소·R&D",
      address: "서울 &gt; 영등포구",
      education: "대 학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 674,
      confirm_name: "(주)한메가",
      work:
        "기계·기계설비,전기·전자·제어,응용프로그램개발,시스템개발,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: " 대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 675,
      confirm_name: "(주)비투코리아",
      work:
        "전기·전자·제어,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 수원시,대 전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 676,
      confirm_name: "스카우트피플",
      work: "시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 677,
      confirm_name: "엠코테크놀로지코리아(주)",
      work:
        "기술영업,전기·전자·제어,반도체·디스플레이·LCD,응용프로그램개발,시스템개발,인공지능(AI)·빅 데이터,연구소·R&D",
      address: "광주 &gt; 광주전체,인천 &gt; 부평구,인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 678,
      confirm_name: "(주)골프존데카",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 679,
      confirm_name: "엠코테크놀로지코리아(주)",
      work:
        "기술영업,전기·전자·제어,반도체·디스플레이·LCD,응용프로그램개발,시스템개발,인공지능(AI)·빅 데이터,연구소·R&D,안전·품질·검사·관리",
      address: "광주 &gt; 광주전체,인천 &gt; 부평구,인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 680,
      confirm_name: "(주)코리아센터",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 681,
      confirm_name: "굿커리어",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~11년"
    },
    {
      id: 682,
      confirm_name: "(주)엠티에프씨",
      work: "화학·에너지,전기·전자·제어,시스템개발",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 683,
      confirm_name: "(주)쁘띠엘린",
      work:
        "상품기획·MD,무역사무·수출입,총무·법무·사무,홍보·PR·사보,인사·교육·노무,마케팅·광고·분석,영업기획 ·관리·지원,웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 684,
      confirm_name: "티엔에이치(주)",
      work:
        "IT·솔루션영업,전기·전자·제어,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,연구소·R&D",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 서초구,서울 &gt; 송파구,경기 &gt; 경기전체,경기 &gt; 광주시,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 수원시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 685,
      confirm_name: "(주)엠코프",
      work: "기계·기계설비,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 686,
      confirm_name: "(주)마크로젠",
      work:
        "기획·전략·경영,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,일반영업,기술영업,영업기획·관리 ·지원,바이오·제약·식품,응용프로그램개발,시스템개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 687,
      confirm_name: "(주)카마드",
      work:
        "사무보조·문서작성,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,퍼블리싱·UI개발,대학교수·행정직,본사·관리·전산",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 688,
      confirm_name: "(주)베네통코리아",
      work:
        "해외영업·무역영업,무역사무·수출입,사무보조·문서작성,회계·재무·세무·IR,의류·패션·잡화디자인,디자인기타,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 689,
      confirm_name: "에이치디씨영창(주)",
      work: "시스템개발",
      address: "인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 690,
      confirm_name: "(주)디피솔루션",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 군포시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 691,
      confirm_name: "(주)디피솔루션",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 군포시",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 692,
      confirm_name: "(주)에이텍티앤",
      work:
        "경리·출납·결산,AS·서비스·수리,회계·재무·세무·IR,일반영업,IT·솔루션영업,기술영업,영업기획·관리· 지원,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,하드웨어·소프트웨어,데이터베이스·DBA,세무·회계 ·CPA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 용산구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구,세종 &gt; 세종특별자치시",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 693,
      confirm_name: "주식회사 케이에이치에이",
      work: "시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 694,
      confirm_name: "(주)엔터핀",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 695,
      confirm_name: "(주)하나금융티아이",
      work:
        "인사·교육·노무,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,채권·보험·보상·심사",
      address:
        "서울 &gt; 강남구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 고양시,인천 &gt; 인천전체,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 696,
      confirm_name: "KTH(주)",
      work:
        "물류·유통·운송,마케팅·광고·분석,그래픽디자인·CG,전시·공간디자인,영업기획·관리·지원,시스템개발,인공지능(AI)·빅데이터,설문·통계·리서치,영화제작·배급,방송연출·PD·감독",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 697,
      confirm_name: "(주)인트로메딕",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 698,
      confirm_name: "(주)스카우트",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 699,
      confirm_name: "(주)포오스",
      work:
        "AS·서비스·수리,IT·솔루션영업,기술영업,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 700,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work:
        "서버·네트워크·보안,게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 701,
      confirm_name: "(주)일산테크",
      work: "전기·전자·제어,시스템개발",
      address: "경북 &gt; 경주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 702,
      confirm_name: "(주) 컴투스",
      work:
        "게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt;  금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 703,
      confirm_name: "엘비텍(주)",
      work:
        "사무보조·문서작성,일반영업,IT·솔루션영업,영업기획·관리·지원,웹개발,응용프로그램개발,시스템개발,ERP·시스 템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 704,
      confirm_name: "주식회사 오아시스템",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 용인시 기흥구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 705,
      confirm_name: "하이잡",
      work: "응용프로그램개발,시스템개발",
      address: "인천 &gt; 남동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 706,
      confirm_name: "(주)코아칩스",
      work: "시스템개발,통신·모바일,연구소·R&D",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 707,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "IT·솔루션영업,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 708,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 709,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 710,
      confirm_name: "주식회사 와이즈덴",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 711,
      confirm_name: "한국철도시설공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,보안·경호·안전,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,고객센터·CS,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,세무·회계·CPA,토 목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리,부동산· 개발·경매·분양",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 712,
      confirm_name: "ds소프트",
      work: "시스템개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 713,
      confirm_name: "주식회사 맥크리오트",
      work: "시스템개발",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 용인시 기흥구",
      education: "대학졸업(2,3년)이상",
      careear: "경력15년↑"
    },
    {
      id: 714,
      confirm_name: "미디어텍코리아(주)",
      work: "반도체·디스플레이·LCD,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: " 경력2년↑"
    },
    {
      id: 715,
      confirm_name: "에스앤에스이앤지(주)",
      work:
        "사무보조·문서작성,기계·기계설비,설계·CAD·CAM,시스템개발,ERP·시스템분석·설계,연구소·R&D",
      address: "서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 716,
      confirm_name: "(주)티앤아이씨티",
      work: "서버·네트워크·보안,시스템개발,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 717,
      confirm_name: "(주)에스에이피",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 718,
      confirm_name: "(주)비엔케이시스템",
      work: "웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 강서구,부산 &gt; 남 구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 719,
      confirm_name: "(주)씨앤유글로벌",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 720,
      confirm_name: "위드로봇(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 721,
      confirm_name: "한국시험인증원(주)",
      work:
        "전기·전자·제어,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 722,
      confirm_name: "갤리언컨설팅그룹",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "석사졸업이상",
      careear: "경력 3~10년"
    },
    {
      id: 723,
      confirm_name: "(주)옴니테크인",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "경기 &gt; 양주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 724,
      confirm_name: "(주)알파플러스칩",
      work:
        "전기·전자·제어,설계·CAD·CAM,응용프로그램개발,시스템개발,퍼블리싱·UI개발,연구소·R&D",
      address:
        "경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 용인시,경기 &gt; 용인시 기흥구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 725,
      confirm_name: "나은시스템 주식회사",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "세종 &gt; 세종특별자치시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 726,
      confirm_name: "세인트존스베리아카데미 제주",
      work: "사무보조·문서작성,시스템개발,대학교수·행정직,안전·품질·검사·관리",
      address: "제주 &gt; 서귀포시",
      education: "학 력무관",
      careear: "경력3년↑"
    },
    {
      id: 727,
      confirm_name: "에이에스이코리아 (주)",
      work:
        "회계·재무·세무·IR,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,토목·조경·도시·측량,전기·소방·통신·설비,환경·플랜트,안전·품질·검사·관리",
      address: "경기 &gt; 파주시",
      education: "대학졸업(2,3년)이상",
      careear: "신 입/경력"
    },
    {
      id: 728,
      confirm_name: "롯데정보통신",
      work:
        "IT·솔루션영업,기술영업,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,퍼블리싱·UI개발,인공지능(AI)·빅데이터,본사·관리·전산",
      address:
        "서울 &gt; 강남구,서울 &gt; 금천구,서울 &gt; 송파구,서울 &gt; 용산구,경기 &gt; 안성시,경기 &gt; 용인시,경기 &gt; 의왕시,광주 &gt; 광산구,울산 &gt; 울산전체",
      education: " 대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 729,
      confirm_name: "스카우트피플",
      work: "시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 730,
      confirm_name: "(주)센텍코리아",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 파주시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 731,
      confirm_name: "주식회사 케이에이치에이",
      work: "시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 732,
      confirm_name: "(주)이베이코리아",
      work: "웹기획·PM,웹개발,응용프로그램개발,시스템개발,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 733,
      confirm_name: "(주)스카우트파트너스",
      work: "IT·솔루션영업,기술영업,시스템개발",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 734,
      confirm_name: "(주)에스더블유엠",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,경기 &gt; 경기전체,경기 &gt; 안양시 동안구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 735,
      confirm_name: "(주)에버스핀",
      work: "서버·네트워크·보안,응용프로그램개발,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 736,
      confirm_name: "(주)제이앤피에이치알컨설팅",
      work: "서버·네트워크·보안,시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 737,
      confirm_name: "스포홀딩스",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 738,
      confirm_name: "(주)이노그리드",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 739,
      confirm_name: "(주)금영엔터테인먼트",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 740,
      confirm_name: "(주)파인에이치알",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 남동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 741,
      confirm_name: "보성테크",
      work: "시스템개발",
      address: "부산 &gt; 금정구,충북 &gt; 청주시 청원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 742,
      confirm_name: "(주)이지메디컴",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 743,
      confirm_name: "동원그룹",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,총무·법무·사무,보안·경호·안전,요리·제빵 사·영양사,마케팅·광고·분석,일반영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전자·제어,생산관리·품질관리,생산·제조·포장·조립,비금속·요업·신소재,바이오·제약·식품,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시 스템분석·설계,하드웨어·소프트웨어,연구소·R&D,전기·소방·통신·설비,안전·품질·검사·관리",
      address:
        "서울 &gt; 서울전체,경기 &gt; 부천시,경기 &gt; 안성시,광주 &gt; 광주전체,대전 &gt; 대전전체,부산 &gt; 부산전체,전북 &gt; 전북전체,충북 &gt; 충북전 체,충남 &gt; 아산시,전국 &gt; 전국",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 744,
      confirm_name: "에이피써치",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~11년"
    },
    {
      id: 745,
      confirm_name: "(주)인텔리안테크놀로지스",
      work:
        "해외영업·무역영업,기술영업,고객센터·CS,금속·금형,전기·전자·제어,설계·CAD·CAM,서버·네트 워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,웹디자 인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 746,
      confirm_name: "(주)이엠넷",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,IT·솔루션영업,광고영업,영업기획·관리 ·지원,웹기획·PM,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,동영상·편집·코덱,데이터베이스·DBA,카메라· 조명·미술,광고·카피·CF",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 747,
      confirm_name: "(주)이지다이아텍",
      work:
        "약사,화학·에너지,바이오·제약·식품,응용프로그램개발,시스템개발,연구소·R&D",
      address: "경기 &gt; 경기전체,경기 &gt; 안양시,경기 &gt; 안양시 동안구",
      education: "박사졸업",
      careear: "경력무관"
    },
    {
      id: 748,
      confirm_name: "우원소프트(주)",
      work: "웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 749,
      confirm_name: "(주)텔리언",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 750,
      confirm_name: "넥센타이어(주)",
      work:
        "제품·산업디자인,광고·시각디자인,일반영업,기술영업,영업기획·관리·지원,화학·에너지,전기·전자·제어,설계·CAD·CAM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강서구,경남 &gt; 창녕군",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 751,
      confirm_name: "한솔시큐어주식회사",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↓"
    },
    {
      id: 752,
      confirm_name: "(주)다보링크",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,퍼블리싱 ·UI개발",
      address:
        "서울 &gt; 금천구,경기 &gt; 광명시,경기 &gt; 안산시,경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 753,
      confirm_name: "스카우트피플",
      work: "시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 754,
      confirm_name: "(주)피타소프트",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 755,
      confirm_name: "(주)아이센스",
      work:
        "해외영업·무역영업,총무·법무·사무,AS·서비스·수리,의료기사,일반영업,화학·에너지,전기·전자·제어,생산관리·품질관리,바이오·제약·식품,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,연구소·R&D,환경·플랜트,안전·품질·검사·관리",
      address:
        "서울 &gt; 노원구,서울 &gt; 서초구,인천 &gt; 연수구,강원 &gt; 원주시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 756,
      confirm_name: "(주)다온시스템즈",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 757,
      confirm_name: "(주)태성환경연구소",
      work: "시스템개발,연구소·R&D",
      address: "울산 &gt; 울주군",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 758,
      confirm_name: "대한상공회의소 서울기술교육센터",
      work:
        "기계·기계설비,전기·전자·제어,웹기획·PM,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 759,
      confirm_name: "넵코어스(주)",
      work: "시스템개발,통신·모바일,IT·디자인·컴퓨터교육",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 760,
      confirm_name: "주식회사 케이에이치에이",
      work: "시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 761,
      confirm_name: "현진제업(주)",
      work:
        "구매·자재·재고,화학·에너지,전기·전자·제어,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램 개발,시스템개발,하드웨어·소프트웨어,데이터베이스·DBA,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 762,
      confirm_name: "(주)더열림",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 763,
      confirm_name: "(주)슈프리마",
      work:
        "전기·전자·제어,설계·CAD·CAM,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개 발,통신·모바일,하드웨어·소프트웨어,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 764,
      confirm_name: "한국직업능력교육원 안산",
      work:
        "물류·유통·운송,구매·자재·재고,제품·산업디자인,생산관리·품질관리,서버·네트워크·보안,응용 프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address:
        "경기 &gt; 군포시,경기 &gt; 시흥시,경기 &gt; 안산시,경기 &gt; 안산시 단원구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 765,
      confirm_name: "싱크팩토리",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "경남 &gt; 김해시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 766,
      confirm_name: "(주)파우컴퍼니",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,동영상·편집·코덱,데 이터베이스·DBA,카메라·조명·미술,사진·포토그라퍼",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 767,
      confirm_name: "(주)카네비컴",
      work: "전기·전자·제어,시스템개발",
      address: "인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 768,
      confirm_name: "(주)새론테크놀로지",
      work: "시스템개발",
      address: "경기 &gt; 의왕시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 769,
      confirm_name: "(주)유즈브레인넷",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 770,
      confirm_name: "(주)유즈브레인넷",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 771,
      confirm_name: "인지컨트롤스(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 시흥시",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 772,
      confirm_name: "(주)투비파트너즈",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학교 졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 773,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 774,
      confirm_name: "수협은행",
      work:
        "IT·솔루션영업,금융·보험영업,기술영업,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 775,
      confirm_name: "(주)투비파트너즈",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학교 졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 776,
      confirm_name: "골든비 네트워크",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "중국.홍콩 &gt; 광동성",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~15년"
    },
    {
      id: 777,
      confirm_name: "산일전기(주)",
      work: "사무보조·문서작성,회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 778,
      confirm_name: "(주)인케이션",
      work: "ERP·시스템분석·설계",
      address: "대구 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 779,
      confirm_name: "람정엔터테인먼트코리아 주식회사",
      work: "ERP·시스템분석·설계",
      address: "제주 &gt; 서귀포시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 780,
      confirm_name: "(주)비즈테크파트너스",
      work: "웹기획·PM,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 781,
      confirm_name: "비에스엔씨(주)",
      work: "ERP·시스템분석·설계,경영분석·컨설턴트",
      address: "서울 &gt; 강서구,인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 782,
      confirm_name: "유진초저온(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 783,
      confirm_name: "(주) 허브브레인",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 784,
      confirm_name: "(주) 허브브레인",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 785,
      confirm_name: "(주)지엠피아이티",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 786,
      confirm_name: "(주)유투바이오",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 787,
      confirm_name: "지인커리어",
      work: "시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 788,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 789,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 790,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 791,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 792,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 793,
      confirm_name: "굿커리어",
      work: "총무·법무·사무,ERP·시스템분석·설계,부동산·개발·경매·분양",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 794,
      confirm_name: "커리어스타",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 795,
      confirm_name: "HnF Partners",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 796,
      confirm_name: "HnF Partners",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력9년↑"
    },
    {
      id: 797,
      confirm_name: "HnF Partners",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력9년↑"
    },
    {
      id: 798,
      confirm_name: "한스컨설팅",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 799,
      confirm_name: "한스컨설팅",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 800,
      confirm_name: "한스컨설팅",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~12년"
    },
    {
      id: 801,
      confirm_name: "한스컨설팅",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 802,
      confirm_name: "디노MES",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,경기 &gt; 용인시 기흥구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 803,
      confirm_name: "디노MES",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "경력9년↑"
    },
    {
      id: 804,
      confirm_name: "(주) 잡뉴스솔로몬서치",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~18년"
    },
    {
      id: 805,
      confirm_name: "(주)썩쎄스앤휴먼컨설팅",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 806,
      confirm_name: "(주)썩쎄스앤휴먼컨설팅",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 807,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "IT·솔루션영업,생산관리·품질관리,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7 년↑"
    },
    {
      id: 808,
      confirm_name: "에버브레인컨설팅(주)",
      work: "전기·전자·제어,반도체·디스플레이·LCD,ERP·시스템분석·설계",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~12년"
    },
    {
      id: 809,
      confirm_name: "(주)글로벌트러스트네트웍스코리아",
      work: "응용프로그램개발,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "아시아·중동 &gt; 일본",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 810,
      confirm_name: "(주)성진하이텍",
      work: "웹기획·PM,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 811,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "아시아·중동 &gt; 인도",
      education: "대학교졸업(4년)이 상",
      careear: "경력7년↑"
    },
    {
      id: 812,
      confirm_name: "에이치알코어스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,본사·관리·전산",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~17년"
    },
    {
      id: 813,
      confirm_name: "AJ셀카(주)",
      work:
        "무역사무·수출입,기획·전략·경영,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,마케팅·광고·분석,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,세무·회계·CPA",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 814,
      confirm_name: "영인크로매스(주)",
      work:
        "마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,화학·에너지,전기·전자·제어,웹마스터·QA·테스터,응용프로그램개발,시스템개발,ERP·시스템분석·설계,연구소·R&D",
      address: "경기 &gt; 안양시,경기 &gt; 안양시 동 안구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 815,
      confirm_name: "(주)벤처피플",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 816,
      confirm_name: "경동물류(주)",
      work:
        "물류·유통·운송,총무·법무·사무,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,보험심사과,고객 센터·CS,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,설문·통계·리서치,법률·특허·상표,세무·회계 ·CPA,채권·보험·보상·심사,안전·품질·검사·관리",
      address: "경기 &gt; 경기전체,경기 &gt; 김포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 817,
      confirm_name: "보보스링크(주)",
      work: "웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 818,
      confirm_name: "보보스링크(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4 년↑"
    },
    {
      id: 819,
      confirm_name: "보보스링크(주)",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 820,
      confirm_name: "(주)이너버스",
      work: "기술영업,서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 821,
      confirm_name: "인탑스주식회사",
      work: "ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경북 &gt; 구미시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 822,
      confirm_name: "(주)네패스",
      work: "인사·교육·노무,회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "충북 &gt; 청주시 청원구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 823,
      confirm_name: "와이제이링크(주)",
      work: "회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "대구 &gt; 달성군",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 824,
      confirm_name: "세림티에스지(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력6년↑"
    },
    {
      id: 825,
      confirm_name: "금문산업(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "부산 &gt; 강서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 826,
      confirm_name: "에이치알니즈",
      work: "회계·재무·세무·IR,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력 8~16년"
    },
    {
      id: 827,
      confirm_name: "(주)엠쓰리모바일",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 광진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 828,
      confirm_name: "한울회계법인",
      work: "총무·법무·사무,사무보조·문서작성,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 829,
      confirm_name: "농업회사법인아시아종묘(주)",
      work: "컨텐츠·사이트운영,ERP·시스템분석·설계",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 830,
      confirm_name: "(주)루센아이티",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↓"
    },
    {
      id: 831,
      confirm_name: "롯데관광개발(주)",
      work:
        "구매·자재·재고,무역사무·수출입,총무·법무·사무,홍보·PR·사보,사무보조·문서작성,웨딩·행사·이벤트,보안·경호·안전,외식·식음료,호텔·카지노·콘도,요리·제빵사·영양사,인사·교육·노무,회계·재무·세무·IR,마케팅·광 고·분석,그래픽디자인·CG,전시·공간디자인,일반영업,판매·매장관리,영업기획·관리·지원,생산관리·품질관리,ERP·시스템분석·설계,데이터베이스·DBA,법률·특허·상표,건축·인테리어·설계,안전·품질·검사·관리",
      address: "서울 &gt; 종로구,제주 &gt; 서귀 포시,제주 &gt; 제주시",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 832,
      confirm_name: "현대중공업파워시스템(주)",
      work:
        "기획·전략·경영,총무·법무·사무,홍보·PR·사보,인사·교육·노무,회계·재무·세무·IR,일반영업,금융·보험영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전자·제어,설계·CAD·CAM,ERP·시스템분석·설계,인공 지능(AI)·빅데이터,세무·회계·CPA,전기·소방·통신·설비,환경·플랜트",
      address: "경기 &gt; 성남시 분당구,울산 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 833,
      confirm_name: "마리오쇼핑(주)",
      work:
        "상품기획·MD,총무·법무·사무,홍보·PR·사보,비서·안내·수행원,회계·재무·세무·IR,마케팅·광고·분석, 의류·패션·잡화디자인,판매·매장관리,영업기획·관리·지원,웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천 구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 834,
      confirm_name: "(주)그라비티",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 835,
      confirm_name: "우피휠터스코리아(유)",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 김포시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 836,
      confirm_name: "(주)골드윙파트너스",
      work: "전기·전자·제어,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학 교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 837,
      confirm_name: "(주) 허브브레인",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 838,
      confirm_name: "(주) 악어디지털",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 성남시  수정구,경기 &gt; 성남시 중원구,경기 &gt; 용인시 기흥구,경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 839,
      confirm_name: "(주)컬처닷컴",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 840,
      confirm_name: "(주)비즈테크파트너스",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 841,
      confirm_name: "신화정보시스템",
      work: "영업기획·관리·지원,ERP·시스템분석·설계",
      address: "대구 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 842,
      confirm_name: "(주)씨엘정보기술",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 843,
      confirm_name: "(주)씨엘정보기술",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 844,
      confirm_name: "파워에이치알",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 845,
      confirm_name: "비에스지파트너스",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 846,
      confirm_name: "(주) 다솜소프트",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 847,
      confirm_name: "주식회사 케이에이치에이",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 848,
      confirm_name: "한국야금(주)",
      work:
        "해외영업·무역영업,인사·교육·노무,일반영업,영업기획·관리·지원,기계·기계설비,화학·에너지,생산관리·품 질관리,생산·제조·포장·조립,설계·CAD·CAM,응용프로그램개발,ERP·시스템분석·설계,연구소·R&D",
      address:
        "서울 &gt; 금천구,경남 &gt; 창원시,충북 &gt; 진천군,충북 &gt; 청주시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 849,
      confirm_name: "파워에이치알",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 평택시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~9년"
    },
    {
      id: 850,
      confirm_name: "브리스캔영어쏘시에이츠(주)",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~13년"
    },
    {
      id: 851,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "ERP·시스템분석·설계",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 852,
      confirm_name: "(주)인싸이트에이치알지",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 853,
      confirm_name: "탑커리어인사이트",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 854,
      confirm_name: "위더스파트너스 주식회사",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,경기 &gt; 경기전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 855,
      confirm_name: "(주)메타넷티플랫폼",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 856,
      confirm_name: "(주)메타넷티플랫폼",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 857,
      confirm_name: "헬로우파트너스",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "대전 &gt; 대전전체",
      education: "대학교졸업(4년)이상",
      careear: "경력9년↑"
    },
    {
      id: 858,
      confirm_name: "에버브레인컨설팅(주)",
      work: "서버·네트워크·보안,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~13년"
    },
    {
      id: 859,
      confirm_name: "(주)케이맨파워",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년 ↑"
    },
    {
      id: 860,
      confirm_name: "건솔루션(주)",
      work: "그래픽디자인·CG,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 안양시 만안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 861,
      confirm_name: "(주)인큐브시스템",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~15년"
    },
    {
      id: 862,
      confirm_name: "(주)디오",
      work: "회계·재무·세무·IR,응용프로그램개발,ERP·시스템분석·설계",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력 7~12년"
    },
    {
      id: 863,
      confirm_name: "건솔루션(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 안양시 만안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 864,
      confirm_name: "한국엔드레스하우저(주)",
      work: "구매·자재·재고,생산관리·품질관리,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 865,
      confirm_name: "(주)바디프랜드",
      work:
        "해외영업·무역영업,구매·자재·재고,납품·배송·택배,상품기획·MD,기획·전략·경영,총무·법무·사무,경리 ·출납·결산,홍보·PR·사보,AS·서비스·수리,외식·식음료,요리·제빵사·영양사,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,광고·시각디자인,일반영업,판매·매장관리,광고영업,영업기획·관리·지 원,TM·인바운드,고객센터·CS,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,웹디자인,데이터베이스·DBA,증권·투자·펀드·외환,세무·회계·CPA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체,광주 &gt; 광주전체,대구 &gt; 대구전체,대전 &gt; 대전전체,부산 &gt; 부산전체,울산 &gt; 울산전체,충북 &gt; 음성군",
      education: "고등학교졸업이상",
      careear: "경 력무관"
    },
    {
      id: 866,
      confirm_name: "(주)벤처피플",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 9~13년"
    },
    {
      id: 867,
      confirm_name: "(주)벤처피플",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 868,
      confirm_name: "(주)에이젝코리아",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 869,
      confirm_name: "(주)위즈아이앤씨",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 870,
      confirm_name: "교보라이프플래닛생명보험(주)",
      work: "웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,연구소·R&D",
      address: "서울 &gt; 영등포구",
      education: "대 학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 871,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 872,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 873,
      confirm_name: "(주)비코스 코리아",
      work: "ERP·시스템분석·설계",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 874,
      confirm_name: "(주)심시스글로벌",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 875,
      confirm_name: "(주)코리아센터",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 876,
      confirm_name: "헤리티지서치코어",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 877,
      confirm_name: "(주)공차코리아",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,본사·관리·전산",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 878,
      confirm_name: "유비스 코리아",
      work: "회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 879,
      confirm_name: "굿커리어",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~11년"
    },
    {
      id: 880,
      confirm_name: "(주)컴윈스",
      work: "생산관리·품질관리,서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 881,
      confirm_name: "코리아써치",
      work: "통신·모바일",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~18년"
    },
    {
      id: 882,
      confirm_name: "(주)그린카",
      work: "통신·모바일",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 883,
      confirm_name: "링솔류션즈",
      work: "서버·네트워크·보안,통신·모바일",
      address: "대전 &gt; 대덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 884,
      confirm_name: "(주)노르마",
      work: "서버·네트워크·보안,웹기획·PM,통신·모바일",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt;  성동구,서울 &gt; 송파구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 885,
      confirm_name: "(주)노르마",
      work: "IT·솔루션영업,서버·네트워크·보안,통신·모바일",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 성동구,서울 &gt; 송파구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 886,
      confirm_name: "(주)공팔리터",
      work:
        "웹기획·PM,웹개발,응용프로그램개발,통신·모바일,웹디자인,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 887,
      confirm_name: "미르네트웍(주)",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 888,
      confirm_name: "(주)포맨파워",
      work: "웹마스터·QA·테스터,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 889,
      confirm_name: "(주)티아젠정보",
      work: "서버·네트워크·보안,통신·모바일,경영분석·컨설턴트",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 890,
      confirm_name: "한국정보통신기술협회",
      work: "통신·모바일,하드웨어·소프트웨어,교육기획·교재",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 891,
      confirm_name: "(주)LG유플러스",
      work: "TM·아웃바운드,TM·인바운드,통신·모바일",
      address: "전남 &gt; 여수시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 892,
      confirm_name: "(주)에스유스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 893,
      confirm_name: "(주)더원테크",
      work: "웹개발,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 894,
      confirm_name: "(주)애버커스",
      work: "웹개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 895,
      confirm_name: "LGU+ 이엔네트워크",
      work: "통신·모바일",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 896,
      confirm_name: "미디어텍코리아(주)",
      work: "반도체·디스플레이·LCD,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 897,
      confirm_name: "한국네트워크산업협회",
      work: "기획·전략·경영,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 898,
      confirm_name: "(주)헤리트",
      work: "전기·전자·제어,응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 899,
      confirm_name: "(주)엔씨에스",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 900,
      confirm_name: "(주)포오스",
      work:
        "AS·서비스·수리,IT·솔루션영업,기술영업,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 901,
      confirm_name: "한국씨텍(주)",
      work: "일반영업,IT·솔루션영업,기술영업,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 902,
      confirm_name: "(주)티오이십일콤즈",
      work: "IT·솔루션영업,통신·모바일",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 903,
      confirm_name: "(주)지에스네오텍서비스",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 904,
      confirm_name: "진원전자",
      work: "통신·모바일",
      address: "부산 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 905,
      confirm_name: "한국씨텍(주)",
      work: "IT·솔루션영업,기술영업,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 906,
      confirm_name: "한국씨텍(주)",
      work: "IT·솔루션영업,기술영업,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 907,
      confirm_name: "(주)투아이피",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 908,
      confirm_name: "일신씨엔에스(주)",
      work: "서버·네트워크·보안,통신·모바일,IT·디자인·컴퓨터교육",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 909,
      confirm_name: "(주)씨그널정보통신",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,설계·CAD·CAM,웹개발,응용프로그램개발,통신·모바일,하드웨어·소프트웨어,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 안양시,경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 910,
      confirm_name: "지에스네오텍(주)",
      work: "통신·모바일",
      address: "경남 &gt; 창원시",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 911,
      confirm_name: "하이잡",
      work: "전기·전자·제어,통신·모바일",
      address: "인천 &gt; 남동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 912,
      confirm_name: "(주)코아칩스",
      work: "시스템개발,통신·모바일,연구소·R&D",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 913,
      confirm_name: "한국철도시설공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,보안·경호·안전,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,고객센터·CS,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,세무·회계·CPA,토 목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리,부동산· 개발·경매·분양",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 914,
      confirm_name: "(주)씨앤코",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 915,
      confirm_name: "(주)키삭",
      work: "통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 916,
      confirm_name: "미디어텍코리아(주)",
      work: "반도체·디스플레이·LCD,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 917,
      confirm_name: "(주)스마일쓰리",
      work: "통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 918,
      confirm_name: "(주)티앤아이씨티",
      work: "서버·네트워크·보안,시스템개발,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 919,
      confirm_name: "에이치알클릭",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 920,
      confirm_name: "에이치알클릭",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 921,
      confirm_name: "에이치알클릭",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 922,
      confirm_name: "(주)비플",
      work:
        "IT·솔루션영업,기술영업,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,통신·모바일",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 923,
      confirm_name: "대원전기(주)",
      work:
        "사무보조·문서작성,전기·전자·제어,통신·모바일,전기·소방·통신·설비,현장·시공·감리·공무",
      address: "충북 &gt; 진천군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 924,
      confirm_name: "중앙넷",
      work: "통신·모바일",
      address: "경기 &gt; 광주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 925,
      confirm_name: "이리앤코(주)",
      work: "총무·법무·사무,경리·출납·결산,통신·모바일",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 926,
      confirm_name: "갤리언컨설팅그룹",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "석사졸업이상",
      careear: "경력 3~10년"
    },
    {
      id: 927,
      confirm_name: "(주)대고",
      work: "기획·전략·경영,통신·모바일",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 928,
      confirm_name: "이루온",
      work: "응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 929,
      confirm_name: "(주)에스알티",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 상록구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 930,
      confirm_name: "(주)에스알티",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 상록구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 931,
      confirm_name: "오름정보통신(주)",
      work: "통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 932,
      confirm_name: "(주)메타GIS컨설팅",
      work: "통신·모바일,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 933,
      confirm_name: "씨앤씨모바일",
      work: "AS·서비스·수리,전기·전자·제어,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 934,
      confirm_name: "(주)씨에스비즈",
      work: "통신·모바일",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 935,
      confirm_name: "이지지아이에스(주)",
      work: "웹개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 936,
      confirm_name: "(주)파인에이치알",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 남동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 937,
      confirm_name: "서울텔엔지니어링(주)",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 938,
      confirm_name: "오티씨테크놀로지(주)",
      work: "통신·모바일",
      address: "경기 &gt; 광명시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 939,
      confirm_name: "주식회사 인엘씨테크놀러지",
      work: "안경·렌즈·광학,웹개발,통신·모바일",
      address: "대전 &gt; 유성구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 940,
      confirm_name: "(주)해양정보기술",
      work: "통신·모바일,토목·조경·도시·측량",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 941,
      confirm_name: "신플렛(주)",
      work: "전기·전자·제어,응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 942,
      confirm_name: "(주)재민정보기술",
      work: "AS·서비스·수리,IT·솔루션영업,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 943,
      confirm_name: "(주)재민정보기술",
      work: "기술영업,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 944,
      confirm_name: "(주)재민정보기술",
      work: "기술영업,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 945,
      confirm_name: "(주)노마진닷컴",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 946,
      confirm_name: "(주)노마진닷컴",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 947,
      confirm_name: "헬로나라",
      work: "통신·모바일",
      address: "서울 &gt; 성북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 948,
      confirm_name: "(주)커밀리아",
      work: "웹개발,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 949,
      confirm_name: "(주)피너클써치",
      work: "기획·전략·경영,웹기획·PM,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 950,
      confirm_name: "(주)유원지리정보시스템",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 의왕시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 951,
      confirm_name: "(주)청아정보통신",
      work: "IT·솔루션영업,통신·모바일",
      address: "서울 &gt; 서대문구",
      education: "고등학교졸업이상",
      careear: "경력 3~10년"
    },
    {
      id: 952,
      confirm_name: "(사)한국스마트그리드협회",
      work:
        "화학·에너지,전기·전자·제어,통신·모바일,외국어·번역·통역,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 953,
      confirm_name: "(주)제이에스솔루션",
      work: "전기·전자·제어,통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 부평구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 954,
      confirm_name: "한국원자력환경공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,기계·기계설비,화학·에너지,전기·전자·제어,통신·모바일,경영분석·컨설턴트,연구소·R&D,전기·소방·통신·설비,환경·플랜트",
      address: "서울 &gt; 서울전체,경 북 &gt; 경주시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 955,
      confirm_name: "(주)인텔리안테크놀로지스",
      work:
        "해외영업·무역영업,기술영업,고객센터·CS,금속·금형,전기·전자·제어,설계·CAD·CAM,서버·네트 워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,웹디자 인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 956,
      confirm_name: "콘텔라(주)",
      work:
        "웹마스터·QA·테스터,웹개발,응용프로그램개발,ERP·시스템분석·설계,통신·모바일,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 957,
      confirm_name: "(주)다온시스템즈",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 958,
      confirm_name: "네오리플렉션",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "대전 &gt; 대전전체,대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 959,
      confirm_name: "(주)오픈벡스",
      work: "서버·네트워크·보안,통신·모바일,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 960,
      confirm_name: "콘텔라(주)",
      work:
        "전기·전자·제어,웹마스터·QA·테스터,웹개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 961,
      confirm_name: "넵코어스(주)",
      work: "시스템개발,통신·모바일,IT·디자인·컴퓨터교육",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 962,
      confirm_name: "(주)우리정보기술",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 963,
      confirm_name: "코리아에스",
      work: "통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 964,
      confirm_name: "와우CCTV",
      work: "AS·서비스·수리,통신·모바일",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 965,
      confirm_name: "(주)슈프리마",
      work:
        "전기·전자·제어,설계·CAD·CAM,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개 발,통신·모바일,하드웨어·소프트웨어,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 966,
      confirm_name: "(주)비에스엠컴퍼니",
      work:
        "구매·자재·재고,사무보조·문서작성,일반영업,영업기획·관리·지원,통신·모바일",
      address:
        "경기 &gt; 광주시,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 967,
      confirm_name: "(주)리얼메이커",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 968,
      confirm_name: "(주)와이파트너즈",
      work: "웹기획·PM,웹개발,응용프로그램개발,통신·모바일,특수직",
      address: "경남 &gt; 진주시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 969,
      confirm_name: "한국국제교류재단",
      work:
        "사무보조·문서작성,회계·재무·세무·IR,영업기획·관리·지원,서버·네트워크·보안,통신·모바일,IT·디자인·컴퓨터교육,증권·투자·펀드·외환,채권·보험·보상·심사",
      address: "서울 &gt; 중구,부산 &gt; 해운대구,제주 &gt; 서귀포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 970,
      confirm_name: "(주)대정정보통신",
      work: "사무보조·문서작성,통신·모바일",
      address: "대구 &gt; 대구전체,대구 &gt; 달서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 971,
      confirm_name: "(주)시큐인네트",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "울산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 972,
      confirm_name: "에이블시스템",
      work: "통신·모바일",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 973,
      confirm_name: "진우산전(주)",
      work: "통신·모바일",
      address: "대전 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 974,
      confirm_name: "(주)지에스네트웍스",
      work: "서버·네트워크·보안,통신·모바일",
      address: "부산 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 975,
      confirm_name: "썬더소프트 코리아",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 976,
      confirm_name: "썬더소프트 코리아",
      work: "전기·전자·제어,시스템개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 977,
      confirm_name: "티아이스퀘어",
      work: "통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 978,
      confirm_name: "(주)제이커뮤니케이션",
      work: "사무보조·문서작성,고객센터·CS,통신·모바일",
      address:
        "경기 &gt; 용인시,경기 &gt; 용인시 기흥구,경기 &gt; 용 인시 수지구,경기 &gt; 용인시 처인구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 979,
      confirm_name: "(주)더스토리부산",
      work: "통신·모바일",
      address: "부산 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 980,
      confirm_name: "(주)비전콜",
      work: "통신·모바일",
      address: "인천 &gt; 부평구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 981,
      confirm_name: "에이치알코어스",
      work: "ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력15년↑"
    },
    {
      id: 982,
      confirm_name: "퍼스트휴먼",
      work: "그래픽디자인·CG,의료기타직,통신·모바일",
      address: "부산 &gt; 해운대구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 983,
      confirm_name: "에이스파트너스",
      work: "서버·네트워크·보안,웹기획·PM,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 984,
      confirm_name: "(주)건우통신",
      work: "통신·모바일",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 985,
      confirm_name: "한국철도시설공단",
      work:
        "총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,기계·기계설비,전기·전자·제어,설계·CAD·CAM, 통신·모바일,세무·회계·CPA,토목·조경·도시·측량,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,강원 &gt; 원주시,경북 &gt; 영주시,경북 &gt; 포항시 북구",
      education: " 학력무관",
      careear: "경력무관"
    },
    {
      id: 986,
      confirm_name: "위너콤(주)",
      work: "전기·전자·제어,통신·모바일,연구소·R&D",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 987,
      confirm_name: "SK텔레콤(주)",
      work:
        "총무·법무·사무,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,QA·CS강사·수퍼바이저,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 988,
      confirm_name: "켈리서비스 유한회사",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 989,
      confirm_name: "(주)이엠웨이브",
      work: "시스템개발,통신·모바일,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 수정구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 990,
      confirm_name: "(주)커리어넷",
      work: "컨텐츠·사이트운영,통신·모바일",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 991,
      confirm_name: "(주)브레인솔루션",
      work: "일반영업,하드웨어·소프트웨어",
      address: "대구 &gt; 수성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 992,
      confirm_name: "(주)에코정보기술",
      work: "웹개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 993,
      confirm_name: "(주)서광시스템",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 994,
      confirm_name: "화순전남대병원",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "전남 &gt; 화순군",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 995,
      confirm_name: "(주)솔루션에이",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 996,
      confirm_name: "파워에이치알",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 997,
      confirm_name: "(주)온리정보통신",
      work: "IT·솔루션영업,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 998,
      confirm_name: "티엔엠에스주식회사",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 999,
      confirm_name: "(주)선테크",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 1000,
      confirm_name: "(주)선테크",
      work: "시스템개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1001,
      confirm_name: "(주)글로벌에이치알코리아",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1002,
      confirm_name: "케이포시큐리티(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1003,
      confirm_name: "(주)트윔",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "경기 &gt; 화성시",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 1004,
      confirm_name: "(주)지케스",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1005,
      confirm_name: "재단법인 청년재단",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 안산시 단원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1006,
      confirm_name: "제이피아이 헬스케어(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이 상",
      careear: "경력5년↑"
    },
    {
      id: 1007,
      confirm_name: "(주)KFC KOREA/주식회사 케이에프씨 코리아",
      work:
        "총무·법무·사무,인사·교육·노무,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서 울 &gt; 서울전체,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1008,
      confirm_name: "(주)탑앤스카우트",
      work: "전기·전자·제어,반도체·디스플레이·LCD,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1009,
      confirm_name: "아이쓰리시스템(주)",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1010,
      confirm_name: "골프유닷넷(주)",
      work: "기술영업,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1011,
      confirm_name: "(주)에이텍시스템",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1012,
      confirm_name: "인포그램 주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1013,
      confirm_name: "(주)온넷시스템즈코리아",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1014,
      confirm_name: "현대디지텍코어(주)",
      work: "AS·서비스·수리,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "부산 &gt; 부산진구",
      education: "고등학교졸업이상",
      careear: "신입/ 경력"
    },
    {
      id: 1015,
      confirm_name: "노바루트",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1016,
      confirm_name: "주식회사 케이에이치에이",
      work: "전기·전자·제어,반도체·디스플레이·LCD,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1017,
      confirm_name: "(주)지넷시스템",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1018,
      confirm_name: "동아전기부품(주)",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1019,
      confirm_name: "(주)케이원정보통신",
      work: "하드웨어·소프트웨어",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1020,
      confirm_name: "(주)화인스텍",
      work: "기술영업,고객센터·CS,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1021,
      confirm_name: "파워에이치알",
      work: "생산관리·품질관리,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1022,
      confirm_name: "(주)이노에이치알컨설팅그룹",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 1023,
      confirm_name: "(주)유트론",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 1024,
      confirm_name: "(주)알에스포",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 양천구, 서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1025,
      confirm_name: "(주)인코리아 프로페셔널(In Korea Professional)",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~13년"
    },
    {
      id: 1026,
      confirm_name: "(주)바쉔메디케이션",
      work: "설계·CAD·CAM,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 관악구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1027,
      confirm_name: "주식회사 큐버",
      work: "전기·전자·제어,하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1028,
      confirm_name: "(주)이씨스",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1029,
      confirm_name: "(주)파빌리온텍",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 1030,
      confirm_name: "(주)금호에이치티",
      work: "하드웨어·소프트웨어",
      address: "광주 &gt; 광산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1031,
      confirm_name: "(주)인비즈소프트",
      work: "일반영업,IT·솔루션영업,하드웨어·소프트웨어",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1032,
      confirm_name: "FNR Consulting",
      work: "시스템개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↓"
    },
    {
      id: 1033,
      confirm_name: "(주)지엠티",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1034,
      confirm_name: "팅크웨어(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1035,
      confirm_name: "(주)비즈온정보기술",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 안성시,충남 &gt; 아산시,충남 &gt; 천안시 서북구",
      education: " 학력무관",
      careear: "신입/경력"
    },
    {
      id: 1036,
      confirm_name: "(주)비아이큐브",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1037,
      confirm_name: "(주)오엠티",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~6년"
    },
    {
      id: 1038,
      confirm_name: "(주)오엠티",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~6년"
    },
    {
      id: 1039,
      confirm_name: "(주)신도리코중앙센터",
      work: "AS·서비스·수리,영업기획·관리·지원,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1040,
      confirm_name: "(주)자바네트웍스",
      work: "AS·서비스·수리,컨텐츠·사이트운영,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1041,
      confirm_name: "언스트앤영코리아솔루션(주)",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~2년"
    },
    {
      id: 1042,
      confirm_name: "메타넷엠씨씨",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1043,
      confirm_name: "주식회사 대건소프트",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1044,
      confirm_name: "(주)퓨처로봇",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력 2~10년"
    },
    {
      id: 1045,
      confirm_name: "(주)와이즈스톤",
      work: "전기·전자·제어,웹마스터·QA·테스터,하드웨어·소프트웨어",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체,경기 &gt; 과천시,경기 &gt; 군포시,경기 &gt; 성남시,경기 &gt; 용인시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1046,
      confirm_name: "(주)위비스",
      work: "상품기획·MD,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 1047,
      confirm_name: "휴멘(주)",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1048,
      confirm_name: "영인에이스 주식회사",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1049,
      confirm_name: "(주)인피닉",
      work: "전기·전자·제어,웹마스터·QA·테스터,게임·Game,하드웨어·소프트웨어",
      address: "인천 &gt; 인천전체,인천 &gt; 서구",
      education: "대학 졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1050,
      confirm_name: "퓨렌스(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경 력"
    },
    {
      id: 1051,
      confirm_name: "(주)어피니티",
      work: "일반영업,기술영업,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1052,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,하드웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 1053,
      confirm_name: "(주)인큐브시스템",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 1054,
      confirm_name: "스마트스터디(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1055,
      confirm_name: "(주)티머니",
      work: "기획·전략·경영,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1056,
      confirm_name: "(주)온넷시스템즈코리아",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~7년"
    },
    {
      id: 1057,
      confirm_name: "(주)글로벌스탠다드테크놀로지",
      work:
        "해외영업·무역영업,일반영업,기술영업,고객센터·CS,전기·전자·제어,생산관리·품질관리,설계 ·CAD·CAM,응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 경기전체,경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 1058,
      confirm_name: "전자부품연구원",
      work:
        "화학·에너지,전기·전자·제어,반도체·디스플레이·LCD,웹개발,응용프로그램개발,시스템개발,통신·모바일,하 드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address:
        "서울 &gt; 마포구,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 성남 시 분당구,경기 &gt; 안산시,경기 &gt; 하남시,전북 &gt; 전주시,전북 &gt; 전주시 덕진구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1059,
      confirm_name: "아남전자(주)",
      work: "전기·전자·제어,설계·CAD·CAM,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1060,
      confirm_name: "에스티앤코리아",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1061,
      confirm_name: "(주)엔지테크",
      work:
        "사무보조·문서작성,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴 퓨터교육,연구소·R&D,교육기획·교재",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,광주 &gt; 광주전체,부산 &gt; 부산전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1062,
      confirm_name: "(주)에듀씨엔에스",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1063,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 1064,
      confirm_name: "(주)알피바이오",
      work:
        "구매·자재·재고,약사,일반영업,영업기획·관리·지원,바이오·제약·식품,설계·CAD·CAM,ERP·시스템분석·설계,하드웨어·소프트웨어,연구소·R&D,건축·인테리어·설계,현장·시공·감리·공무",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신 입/경력"
    },
    {
      id: 1065,
      confirm_name: "(주)블루포트",
      work:
        "구매·자재·재고,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,영업기획·관리·지원,서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어,웹디자인,경영분석·컨설턴트,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1066,
      confirm_name: "(주)위칸소프트",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1067,
      confirm_name: "(주)엔텍로직",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1068,
      confirm_name: "(주)지씨에스씨",
      work: "하드웨어·소프트웨어",
      address: "부산 &gt; 연제구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1069,
      confirm_name: "주식회사 오픈소스컨설팅",
      work: "웹마스터·QA·테스터,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1070,
      confirm_name: "(주)비아트론",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경 력"
    },
    {
      id: 1071,
      confirm_name: "잡스테이션코리아",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1072,
      confirm_name: "(주)트론트",
      work: "하드웨어·소프트웨어",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1073,
      confirm_name: "(주)싸인텔레콤",
      work: "총무·법무·사무,하드웨어·소프트웨어,현장·시공·감리·공무",
      address: "경기 &gt; 파주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1074,
      confirm_name: "엠에스피정보기술(주)",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1075,
      confirm_name: "에이치알파트너스",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1076,
      confirm_name: "엠에스피정보기술(주)",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1077,
      confirm_name: "리더스손해사정(주)",
      work: "총무·법무·사무,사무보조·문서작성,하드웨어·소프트웨어",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1078,
      confirm_name: "(주)IDS&TRUST",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1079,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1080,
      confirm_name: "에이치알파트너스",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1081,
      confirm_name: "(주)탑앤스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 1082,
      confirm_name: "웰스바이오(주)",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1083,
      confirm_name: "(주)인텍플러스",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1084,
      confirm_name: "(주)태인씨앤에스",
      work: "일반영업,IT·솔루션영업,하드웨어·소프트웨어",
      address: "서울 &gt; 강동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1085,
      confirm_name: "(주)골든듀",
      work:
        "회계·재무·세무·IR,그래픽디자인·CG,의류·패션·잡화디자인,서버·네트워크·보안,ERP·시스템분석·설계,하드 웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1086,
      confirm_name: "(주)지씨에스씨",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "부산 &gt; 연제구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1087,
      confirm_name: "주식회사 케이티엔에프",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1088,
      confirm_name: "유디엠텍",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1089,
      confirm_name: "포스투게더",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "경기 &gt; 남양주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1090,
      confirm_name: "소프트웨어공학엑스퍼트그룹(주)",
      work: "하드웨어·소프트웨어,경영분석·컨설턴트",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1091,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1092,
      confirm_name: "펜타시큐리티시스템(주)",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 1093,
      confirm_name: "(주)아토웨이브",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 1094,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1095,
      confirm_name: "(주)스카우트",
      work: "시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 1096,
      confirm_name: "(주)한솔루션",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "인천 &gt; 미추홀구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1097,
      confirm_name: "(주)피플웍스",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1098,
      confirm_name: "(주)케이원정보통신",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력10년↑"
    },
    {
      id: 1099,
      confirm_name: "(주)티모넷코리아",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1100,
      confirm_name: "멜콘 주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시,전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1101,
      confirm_name: "민지콩",
      work: "광고·시각디자인,웹디자인",
      address: "경기 &gt; 안산시 상록구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1102,
      confirm_name: "(주)한방",
      work: "웹개발,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1103,
      confirm_name: "에이치알코어스",
      work: "웹디자인,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 1104,
      confirm_name: "(주)하이웨이원",
      work:
        "그래픽디자인·CG,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1 년↑"
    },
    {
      id: 1105,
      confirm_name: "(주)유나이티드디자이너스",
      work: "컨텐츠·사이트운영,웹디자인,사진·포토그라퍼",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력 1~3년"
    },
    {
      id: 1106,
      confirm_name: "(주)태석광학",
      work: "웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1107,
      confirm_name: "(주)디자인토모",
      work: "컨텐츠·사이트운영,웹디자인,건축·인테리어·설계",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1108,
      confirm_name: "에이치알코어스",
      work: "웹디자인,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 1109,
      confirm_name: "코푸드(주)",
      work: "웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1110,
      confirm_name: "다인푸드",
      work: "그래픽디자인·CG,제품·산업디자인,웹디자인",
      address: "경기 &gt; 광주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1111,
      confirm_name: "(주)지큐브랩",
      work: "웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1112,
      confirm_name: "(주)씨앤투스성진",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1113,
      confirm_name: "플랜온(주)",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 과천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1114,
      confirm_name: "(주)에이텍에이피",
      work: "응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1115,
      confirm_name: "(주)마인즈랩",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1116,
      confirm_name: "(주)씨이랩",
      work:
        "기획·전략·경영,마케팅·광고·분석,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버· 네트워크·보안,웹기획·PM,웹개발,게임·Game,응용프로그램개발,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1117,
      confirm_name: "홍익무역",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1118,
      confirm_name: "(주)바비즈코리아",
      work: "웹디자인",
      address: "서울 &gt; 노원구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1119,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 구로구,서울 &gt; 용산구",
      education: "고등학교졸업이상",
      careear: "경력 4~20년"
    },
    {
      id: 1120,
      confirm_name: "(주)매스티지",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 동대문구,서울 &gt; 마포구,서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1121,
      confirm_name: "포켓프린세스",
      work: "상품기획·MD,웹디자인",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1122,
      confirm_name: "(주)대형네트웍스",
      work: "광고영업,컨텐츠·사이트운영,웹디자인",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1123,
      confirm_name: "(주)아밍제이",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1124,
      confirm_name: "(주)더블유플래닛",
      work:
        "마케팅·광고·분석,그래픽디자인·CG,디자인기타,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1125,
      confirm_name: "오픈트레이드(주)",
      work: "광고·시각디자인,웹디자인",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1126,
      confirm_name: "(주)메먼트",
      work: "웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1127,
      confirm_name: "네오피크인터내셔날",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1128,
      confirm_name: "(주)이엔커머스",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1129,
      confirm_name: "갤리언컨설팅그룹",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 1130,
      confirm_name: "(주)에스제이듀코",
      work: "의류·패션·잡화디자인,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1131,
      confirm_name: "주식회사 더헤르첸",
      work: "웹디자인",
      address: "경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1132,
      confirm_name: "(주)밀라노리빙",
      work: "그래픽디자인·CG,웹디자인",
      address: "대전 &gt; 대전전체,대전 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1133,
      confirm_name: "(주)빅스트로",
      work: "홍보·PR·사보,웹디자인",
      address: "울산 &gt; 남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~8년"
    },
    {
      id: 1134,
      confirm_name: "(주)미키펫코리아",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1135,
      confirm_name: "복만네(주)",
      work: "경리·출납·결산,사무보조·문서작성,웹디자인",
      address: "대구 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1136,
      confirm_name: "이엘치과병원",
      work: "제품·산업디자인,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 대덕구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1137,
      confirm_name: "아이엠씨코퍼레이션",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1138,
      confirm_name: "(주)네오큐",
      work: "사무보조·문서작성,웹디자인",
      address: "경기 &gt; 안양시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1139,
      confirm_name: "제이코프",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1140,
      confirm_name: "주식회사 줌마렐라",
      work: "웹디자인",
      address: "경남 &gt; 창원시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1141,
      confirm_name: "제이코프",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1142,
      confirm_name: "주식회사 틴토랩",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1143,
      confirm_name: "(주)에스티크리에이티브",
      work: "웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~4년"
    },
    {
      id: 1144,
      confirm_name: "(주)디렉티브",
      work: "웹디자인",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1145,
      confirm_name: "주방25",
      work: "웹디자인",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1146,
      confirm_name: "(주)루치니",
      work: "상품기획·MD,마케팅·광고·분석,의류·패션·잡화디자인,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1147,
      confirm_name: "주식회사 조인스엠",
      work: "디자인기타,광고·시각디자인,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1148,
      confirm_name: "(주)로드커뮤니케이션",
      work: "웹디자인",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1149,
      confirm_name: "팩플러스",
      work: "웹디자인",
      address: "경기 &gt; 광주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1150,
      confirm_name: "한국베름(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "강원 &gt; 원주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1151,
      confirm_name: "한국베름(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1152,
      confirm_name: "(주)오드",
      work: "고객센터·CS,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1153,
      confirm_name: "(주)제이엠아이엔티엘",
      work: "물류·유통·운송,웹디자인",
      address: "인천 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 1154,
      confirm_name: "(주)베스트원테크",
      work: "제품·산업디자인,웹디자인",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1155,
      confirm_name: "(주)영광푸드",
      work: "웹디자인",
      address: "부산 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1156,
      confirm_name: "(주)넥스트플레이어",
      work: "마케팅·광고·분석,디자인기타,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1157,
      confirm_name: "(주)완벽한우리들",
      work:
        "사무보조·문서작성,그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,사진·포 토그라퍼",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1158,
      confirm_name: "(주)위메프",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1159,
      confirm_name: "농업회사법인(주)한스팜",
      work: "웹디자인",
      address: "경기 &gt; 여주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1160,
      confirm_name: "비비아노",
      work: "고객센터·CS,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1161,
      confirm_name: "(주)경원모빌텍",
      work: "사무보조·문서작성,영업기획·관리·지원,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 동대문구",
      education: "대학졸업(2,3년)이 상",
      careear: "경력무관"
    },
    {
      id: 1162,
      confirm_name: "영일엠(주)",
      work: "마케팅·광고·분석,웹디자인",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1163,
      confirm_name: "(주)셀텍",
      work:
        "해외영업·무역영업,총무·법무·사무,경리·출납·결산,사무보조·문서작성,인사·교육·노무,기술영업,기계·기계설 비,전기·전자·제어,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,웹디자인",
      address: "인천 &gt; 인천전체,인천 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1164,
      confirm_name: "우리들마당(주)",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1165,
      confirm_name: "비오큐코퍼레이션",
      work:
        "기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,의류·패션·잡화디자인,디자인기타,광고·시각디자인,광고영업,웹기획·PM,컨텐츠·사이트운영,웹디자인,광고·카피·CF",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1166,
      confirm_name: "(주)신디코리아",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1167,
      confirm_name: "(주)모두컴",
      work: "웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 1168,
      confirm_name: "K-ration(케이레이션)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1169,
      confirm_name: "(주)태영에이치엔씨",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1170,
      confirm_name: "찍고바(주)",
      work: "총무·법무·사무,웹디자인",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 1171,
      confirm_name: "(주)닥터U와 함께",
      work: "웹디자인",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1172,
      confirm_name: "(주) 워터정보",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1173,
      confirm_name: "(주)누리서치",
      work: "웹디자인",
      address: "서울 &gt; 동작구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1174,
      confirm_name: "주식회사 두리보매",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1175,
      confirm_name: "(주)에센루",
      work:
        "물류·유통·운송,해외영업·무역영업,상품기획·MD,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,제품·산 업디자인,의류·패션·잡화디자인,일반영업,영업기획·관리·지원,고객센터·CS,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,사진·포토그라퍼",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 1176,
      confirm_name: "주식회사 버츄얼넥스트",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1177,
      confirm_name: "리스펙트마케팅",
      work: "그래픽디자인·CG,출판·편집디자인,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1178,
      confirm_name: "(주)대한의료기",
      work: "상품기획·MD,웹디자인",
      address: "경기 &gt; 용인시 기흥구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1179,
      confirm_name: "비알엔팜",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 1180,
      confirm_name: "세이버투플러스",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1181,
      confirm_name: "전주대학교",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,도서관사서,교육기획·교재,대학교수·행정직",
      address: "전북 &gt; 전북전체,전북 &gt; 전주시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1182,
      confirm_name: "아이엘투어(주)",
      work: "그래픽디자인·CG,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1183,
      confirm_name: "(주)아이룩스",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,사진·포토그라퍼",
      address: "부산 &gt; 부산전체,부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1184,
      confirm_name: "베스트전자",
      work: "웹디자인",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1185,
      confirm_name: "(주)코데즈컴바인",
      work: "섬유·의류·패션,웹디자인,사진·포토그라퍼",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1186,
      confirm_name: "(주)아임닥터홀딩스",
      work: "마케팅·광고·분석,웹디자인",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1187,
      confirm_name: "(주)선테크",
      work: "제품·산업디자인,전시·공간디자인,웹디자인",
      address: "경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1188,
      confirm_name: "미래피앤티 주식회사",
      work: "웹기획·PM,웹디자인",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1189,
      confirm_name: "(주)애니컨",
      work: "웹개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 1190,
      confirm_name: "(주)해오름",
      work: "마케팅·광고·분석,웹디자인",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1191,
      confirm_name: "송이기획",
      work: "출판·편집디자인,광고·시각디자인,웹디자인",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력 4~6년"
    },
    {
      id: 1192,
      confirm_name: "(주)동인인터내셔날",
      work: "웹디자인",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 1193,
      confirm_name: "(주)아이텍코리아",
      work: "경리·출납·결산,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1194,
      confirm_name: "농업회사법인(주)개성상인",
      work: "웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1195,
      confirm_name: "한국터치스크린(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 1196,
      confirm_name: "(주)리플렉션",
      work: "웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 1197,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1198,
      confirm_name: "주식회사 드림즈컴",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1199,
      confirm_name: "더헤리티지",
      work: "웹디자인",
      address: "전북 &gt; 익산시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1200,
      confirm_name: "The즐거운사람들",
      work: "출판·편집디자인,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1201,
      confirm_name: "더블유컴퍼니",
      work: "컨텐츠·사이트운영,웹디자인,동영상·편집·코덱",
      address: "광주 &gt; 북구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1202,
      confirm_name: "(주)티아라",
      work: "웹디자인",
      address: "경기 &gt; 양주시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1203,
      confirm_name: "울랄라랩 주식회사",
      work: "웹개발,웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1204,
      confirm_name: "(주)피에이트랜드",
      work: "웹디자인,동영상·편집·코덱",
      address: "서울 &gt; 동대문구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1205,
      confirm_name: "(주)오누이",
      work: "웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1206,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1207,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1208,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1209,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1210,
      confirm_name: "메이크",
      work: "웹디자인",
      address:
        "경기 &gt; 부천시 원미구,인천 &gt; 계양구,인천 &gt; 미추홀구,인천 &gt; 남동구,인천 &gt; 동구,인천 &gt; 부평구",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 1211,
      confirm_name: "(주)캐럿글로벌",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1212,
      confirm_name: "(주)크래프톤",
      work:
        "기획·전략·경영,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,캐릭터·만화·애니,광고·시각디자인,웹기획·PM,웹개발,게임·Game,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA, 광고·카피·CF",
      address:
        "서울 &gt; 강남구,서울 &gt; 서초구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1213,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,전문직업·IT강사",
      address: "서울 &gt; 서울전체, 서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1214,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,웹기획·PM,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강동구,서울 &gt; 강서구,서울 &gt; 서대문구,서울 &gt; 성동구,서울 &gt; 용산구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1215,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1216,
      confirm_name: "이노브(주)",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1217,
      confirm_name: "효성ITX(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강서구,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 양천구,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 1218,
      confirm_name: "주식회사 위시드",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt;  영등포구,경기 &gt; 부천시,경기 &gt; 안양시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1219,
      confirm_name: "구루넷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~13년"
    },
    {
      id: 1220,
      confirm_name: "구루넷",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1221,
      confirm_name: "웹송LAD",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1222,
      confirm_name: "한스컨설팅",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1223,
      confirm_name: "(주)파인트리시스템",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1224,
      confirm_name: "(주)썩쎄스앤휴먼컨설팅",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1225,
      confirm_name: "(주)디자인커뮤니케이션",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1226,
      confirm_name: "주식회사 가온소프트",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~16년"
    },
    {
      id: 1227,
      confirm_name: "(주) 하이브랩",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1228,
      confirm_name: "(주)매스티지",
      work: "웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,서울 &gt; 강서구,서울 &gt; 마포구,서울 &gt; 서대문구,서울 &gt;  영등포구,인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1229,
      confirm_name: "(주)니트로아이",
      work: "퍼블리싱·UI개발",
      address: "경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1230,
      confirm_name: "마켓에이치",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1231,
      confirm_name: "(주)소프트체인",
      work: "웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1232,
      confirm_name: "메이드바이위",
      work:
        "물류·유통·운송,상품기획·MD,사무보조·문서작성,그래픽디자인·CG,판매·매장관리,고객센터·CS,QA·CS강사· 수퍼바이저,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,사진·포토그라퍼",
      address:
        "서울 &gt; 강남구,서울 &gt; 광진구,서울 &gt; 성 동구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1233,
      confirm_name: "(주)디자인랩",
      work: "제품·산업디자인,웹디자인,퍼블리싱·UI개발",
      address:
        "경기 &gt; 수원시,경기 &gt; 안산시,경기 &gt; 안양시,경기 &gt; 평 택시,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1234,
      confirm_name: "(주)와이즈버즈",
      work: "웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 1235,
      confirm_name: "(주)이트라이브",
      work:
        "기획·전략·경영,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소 프트웨어,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1236,
      confirm_name: "(주)무상엠에스마트",
      work:
        "홍보·PR·사보,웹기획·PM,웹개발,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,카메라·조명·미술,기자,방송연출·PD·감독",
      address: "강원 &gt; 강원전체,강원 &gt; 춘천시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1237,
      confirm_name: "(주)아발론교육",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1238,
      confirm_name: "아람멀티미디어",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1239,
      confirm_name: "(주)아발론교육",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1240,
      confirm_name: "아람멀티미디어",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1241,
      confirm_name: "아람멀티미디어",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1242,
      confirm_name: "(주)진학사",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1243,
      confirm_name: "(주)인컴",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1244,
      confirm_name: "(주)비알스톰",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1245,
      confirm_name: "비엔케이캐피탈(주)",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,금융·보험영업,웹개발,게임·Game,응용프로그 램개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address:
        "부산 &gt; 부산전체,부산 &gt; 남구,부산 &gt; 동구,부산 &gt; 동래구,부산 &gt; 부산진구,부산 &gt; 북구,부산 &gt; 사상구,부산 &gt; 연제구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1246,
      confirm_name: "내가그린기린그림",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1247,
      confirm_name: "(주)아톤",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1248,
      confirm_name: "앰진시큐러스",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 서초구,서울 &gt; 송파구,경기 &gt; 성남시 수정구,경기 &gt; 하남시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 1249,
      confirm_name: "한전KPS(주)",
      work:
        "운전·기사,총무·법무·사무,홍보·PR·사보,사무보조·문서작성,AS·서비스·수리,요리·제빵사·영양사,마케팅·광고·분석,그래픽디자인·CG,기계·기계설비,전기·전자·제어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,특수직,카메라·조명·미술,작가·시나리오,광고·카피·CF,방송연출·PD·감독,진행·아나운서,전기·소방·통신·설비",
      address: "전남 &gt; 나주시,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1250,
      confirm_name: "주식회사 산업마케팅",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1251,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,웹기획·PM,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1252,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1253,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1254,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1255,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1256,
      confirm_name: "헤리티지서치코어",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 1257,
      confirm_name: "(주)하이블럭스",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 1258,
      confirm_name: "씨엔알리서치",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1259,
      confirm_name: "위즈코어주식회사",
      work: "퍼블리싱·UI개발",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1260,
      confirm_name: "(주)디지털포토",
      work:
        "기획·전략·경영,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1261,
      confirm_name: "(주)아이스크림에듀",
      work:
        "해외영업·무역영업,기획·전략·경영,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,출판·편집디자인,광고·시각디자인,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,통신·모바일,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,교육기획·교재,초 중고·특수학교,인쇄·출판·편집",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1262,
      confirm_name: "(주)다비오",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1263,
      confirm_name: "휴머레인컨설팅",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1264,
      confirm_name: "(주)아람커뮤니케이션",
      work: "퍼블리싱·UI개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1265,
      confirm_name: "휴머레인컨설팅",
      work: "웹디자인,퍼블리싱·UI개발,동영상·편집·코덱",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1266,
      confirm_name: "유미코리아",
      work: "웹디자인,퍼블리싱·UI개발,동영상·편집·코덱",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1267,
      confirm_name: "유미코리아",
      work: "웹디자인,퍼블리싱·UI개발,동영상·편집·코덱",
      address: "광주 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1268,
      confirm_name: "잔다(Janda)",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1269,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1270,
      confirm_name: "휴머레인컨설팅",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1271,
      confirm_name: "휴머레인컨설팅",
      work: "웹디자인,퍼블리싱·UI개발,동영상·편집·코덱",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1272,
      confirm_name: "휴머레인컨설팅",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1273,
      confirm_name: "(주)제윤",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 달서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1274,
      confirm_name: "(주)큐피플",
      work: "웹개발,컨텐츠·사이트운영,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1275,
      confirm_name: "유한책임회사아이비트레이드",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 마포구,서울 &gt; 서대문구,서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1276,
      confirm_name: "(주)에스앤씨랩",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1277,
      confirm_name: "(주)에스앤씨랩",
      work: "웹기획·PM,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1278,
      confirm_name: "(주)노르마",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1279,
      confirm_name: "노써치",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1280,
      confirm_name: "(주)에이젝코리아",
      work: "웹마스터·QA·테스터,퍼블리싱·UI개발",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 1281,
      confirm_name: "행복한성공컨설팅 (주)",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1282,
      confirm_name: "이든앤앨리스마케팅",
      work: "웹디자인,퍼블리싱·UI개발,동영상·편집·코덱",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1283,
      confirm_name: "(주)지에스에이",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 중구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1284,
      confirm_name: "중고나라",
      work:
        "기획·전략·경영,경리·출납·결산,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석,광고·시각디자인,광고 영업,웹기획·PM,웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1285,
      confirm_name: "(주)네오오라",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1286,
      confirm_name: "(주)세일창조",
      work: "마케팅·광고·분석,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1287,
      confirm_name: "(주)유웨이써치앤컨설팅",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1288,
      confirm_name: "이니텍(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~6년"
    },
    {
      id: 1289,
      confirm_name: "(주)세일창조",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1290,
      confirm_name: "주식회사 세무통",
      work: "웹디자인,퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1291,
      confirm_name: "만두커뮤니케이션",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1292,
      confirm_name: "(주)코리아센터",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1293,
      confirm_name: "주식회사 메디쿼터스",
      work: "제품·산업디자인,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 1294,
      confirm_name: "(주)디알텍",
      work:
        "총무·법무·사무,인사·교육·노무,기계·기계설비,전기·전자·제어,반도체·디스플레이·LCD,생산·제조·포장· 조립,설계·CAD·CAM,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,연구소·R&D",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 성남시 중원구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1295,
      confirm_name: "(주)오픈잇",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 1296,
      confirm_name: "(주)카마드",
      work:
        "사무보조·문서작성,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,퍼블리싱·UI개발,대학교수·행정직,본사·관리·전산",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1297,
      confirm_name: "(주)푸시버튼스페이스",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 관악구,서울 &gt; 동대문구,서울 &gt; 동작구,서 울 &gt; 마포구,서울 &gt; 양천구,서울 &gt; 영등포구,서울 &gt; 용산구,서울 &gt; 종로구,서울 &gt; 중구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1298,
      confirm_name: "(주)에이블유컴즈",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 6~10년"
    },
    {
      id: 1299,
      confirm_name: "(주)플레이스엠",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1300,
      confirm_name: "(주)어빌리터즈",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1301,
      confirm_name: "(주)에프터먼데이",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1302,
      confirm_name: "(주)메건",
      work: "출판·편집디자인,응용프로그램개발,퍼블리싱·UI개발",
      address: "대구 &gt; 달서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1303,
      confirm_name: "주식회사 디케이테크인",
      work: "웹개발,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1304,
      confirm_name: "(주)피처링",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1305,
      confirm_name: "더넷(주)",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 1306,
      confirm_name: "주식회사 디케이테크인",
      work: "웹개발,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 1307,
      confirm_name: "(주)지우컴퍼니",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1308,
      confirm_name: "랭킹볼코리아(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 1309,
      confirm_name: "(주)이씨오",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1310,
      confirm_name: "(주)뉴프롬",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1311,
      confirm_name: "주식회사 아이비아이",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1312,
      confirm_name: "교세라커넥터프로덕츠코리아(주)",
      work:
        "AS·서비스·수리,금속·금형,기계·기계설비,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,웹개발,응용프로그램개발,퍼블리싱·UI개발,연구소·R&D",
      address: "경기 &gt; 안산시 단원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 1313,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,컨텐츠·사이트운영,퍼블리싱·UI개발",
      address:
        "서울 &gt; 광진구,서울 &gt; 노원구,서울 &gt; 마포구,서울 &gt; 용산구,서울 &gt; 은평구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1314,
      confirm_name: "주식회사 유니데카",
      work: "마케팅·광고·분석,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1315,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work:
        "서버·네트워크·보안,게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1316,
      confirm_name: "(주)아이투맥스",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 동구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 1317,
      confirm_name: "한국미디어",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 1318,
      confirm_name: "(주) 컴투스",
      work:
        "게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt;  금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1319,
      confirm_name: "(주)아이디노",
      work: "응용프로그램개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1320,
      confirm_name: "상생소프트",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1321,
      confirm_name: "스콥정보통신(주)",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 1322,
      confirm_name: "(주)에이치알그룹",
      work: "웹기획·PM,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~13년"
    },
    {
      id: 1323,
      confirm_name: "메이킹협동조합",
      work: "IT·디자인·컴퓨터교육,연구소·R&D,전문직업·IT강사",
      address: "대전 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1324,
      confirm_name: "지아이티아카데미부산",
      work: "웹디자인,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "부산 &gt; 부산진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1325,
      confirm_name: "메트로내과의원",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1326,
      confirm_name: "(주)엠아이티능력개발원",
      work: "사무보조·문서작성,IT·디자인·컴퓨터교육,대학교수·행정직",
      address: "경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1327,
      confirm_name: "다이앤디자인",
      work: "웹디자인,퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1328,
      confirm_name: "(주)파인리조트",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 용인시 처인구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1329,
      confirm_name: "넷마블(주)",
      work: "웹마스터·QA·테스터,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1330,
      confirm_name: "(주)이엠웨이브",
      work: "시스템개발,통신·모바일,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 수정구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1331,
      confirm_name: "한화시스템/시스템",
      work:
        "구매·자재·재고,회계·재무·세무·IR,간호사,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨 어·소프트웨어,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,경기 &gt; 성남시 분당구,경기 &gt; 용인시,경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1332,
      confirm_name: "실로암시각장애인복지회",
      work: "IT·디자인·컴퓨터교육,초중고·특수학교,전문직업·IT강사",
      address: "서울 &gt; 관악구",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 1333,
      confirm_name: "전진상사",
      work: "판매·매장관리,컨텐츠·사이트운영,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1334,
      confirm_name: "세이지의원",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,동영상· 편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술,방송연출·PD·감독",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경 력2년↑"
    },
    {
      id: 1335,
      confirm_name: "대호아이엔티(주)",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "광주 &gt; 북구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1336,
      confirm_name: "(주)키움",
      work: "IT·디자인·컴퓨터교육,초중고·특수학교",
      address: "인천 &gt; 남동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1337,
      confirm_name: "(주)해커스교육그룹",
      work:
        "물류·유통·운송,구매·자재·재고,기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보, 사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니,광고·시각디자인,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,QA·CS강사·수퍼바이저,전기·전 자·제어,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역· 통역,연구소·R&D,교육기획·교재,학원관리·운영·상담,외국어·어학원,카메라·조명·미술,광고·카피·CF,방송연출·PD·감독,인쇄·출판·편집,전기·소방·통신·설비,안전·품질·검사·관리",
      address:
        "서울 &gt; 강남구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 송파구,서울 &gt; 영등포구,서울 &gt; 종로구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1338,
      confirm_name: "(주)한위드정보기술",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신 입/경력"
    },
    {
      id: 1339,
      confirm_name: "(주)해커스교육그룹",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1340,
      confirm_name: "(주)해커스교육그룹",
      work:
        "그래픽디자인·CG,웹기획·PM,웹디자인,퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1341,
      confirm_name: "주식회사 커리어포커스",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 1342,
      confirm_name: "시원컴퓨터학원",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사,입시·보습·속셈학원",
      address:
        "경기 &gt; 부천시,인천 &gt; 인천전체,인천 &gt; 남동구,인천 &gt; 부평구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1343,
      confirm_name: "보맵 주식회사",
      work: "웹개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 1344,
      confirm_name: "(주)굿피플네트웍스",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 용인시 기흥구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1345,
      confirm_name: "더휴먼컴퓨터아트아카데미",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 수원시 팔달구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1346,
      confirm_name: "국가보안기술연구소",
      work:
        "기획·전략·경영,총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,전기·전자·제어,서버·네트워크·보안,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,IT·디자인·컴퓨터교육,연구소·R&D",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1347,
      confirm_name: "시큐레터(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1348,
      confirm_name: "주식회사 제이에스디원",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 1349,
      confirm_name: "(주)코아아이티",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "충북 &gt; 청원군",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1350,
      confirm_name: "에이치아이티(주)",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: " 경력 3~5년"
    },
    {
      id: 1351,
      confirm_name: "(주)웹타임",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1352,
      confirm_name: "일그램",
      work: "동영상·편집·코덱,IT·디자인·컴퓨터교육,방송연출·PD·감독",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1353,
      confirm_name: "(주)엘에스컴퍼니",
      work: "서버·네트워크·보안,웹개발,IT·디자인·컴퓨터교육",
      address: "제주 &gt; 제주시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1354,
      confirm_name: "인비즈써치",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1355,
      confirm_name: "(주)스페이사콤",
      work: "통신·모바일,IT·디자인·컴퓨터교육,전기·소방·통신·설비",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1356,
      confirm_name: "더조은컴퓨터아트학원 천호캠퍼스",
      work: "IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,전문직업·IT강사",
      address: "서울 &gt; 강동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1357,
      confirm_name: "현대중공업그린에너지(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학 졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1358,
      confirm_name: "한국표준협회",
      work:
        "그래픽디자인·CG,전기·전자·제어,설계·CAD·CAM,응용프로그램개발,시스템개발,통신·모바일,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체,경기 &gt; 용인시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1359,
      confirm_name: "(주)두루컴즈",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1360,
      confirm_name: "하나렌탈",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "경기 &gt; 동두천시,경기 &gt; 양주시,경기 &gt; 의정부시,경기 &gt; 포천시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1361,
      confirm_name: "(주)로지올",
      work: "웹개발,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 1362,
      confirm_name: "(주)산하정보기술",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1363,
      confirm_name: "그린컴퓨터아카데미광주학원",
      work: "사무보조·문서작성,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "광주 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1364,
      confirm_name: "(주)성원정보기술",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "대구 &gt; 대구전체,대구 &gt; 달서구,대구 &gt; 달성군",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~8년"
    },
    {
      id: 1365,
      confirm_name: "(주)유승산업개발",
      work: "호텔·카지노·콘도,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 연천군",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 1366,
      confirm_name: "한국경영원 인재개발원",
      work: "웹개발,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "광주 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1367,
      confirm_name: "주식회사 피플케어코리아",
      work: "웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 1368,
      confirm_name: "(주)티에이나인",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사,학원관리·운영·상담",
      address: "경기 &gt; 의왕시",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1369,
      confirm_name: "(주)시드아이티",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1370,
      confirm_name: "(주)씨아이솔루션",
      work: "IT·디자인·컴퓨터교육",
      address: "경기 &gt; 과천시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1371,
      confirm_name: "(주)스마일코리아",
      work: "동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1372,
      confirm_name: "(주)지원파트너스",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "인천 &gt; 연수구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1373,
      confirm_name: "하나렌탈",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "경기 &gt; 동두천시,경기 &gt; 양주시,경기 &gt; 의정부시,경기 &gt; 포천시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1374,
      confirm_name: "연세대학교 의과대학 약리학교실",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서대문구",
      education: "대 학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1375,
      confirm_name: "주식회사 커리어포커스",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1376,
      confirm_name: "실로암시각장애인복지회",
      work: "서버·네트워크·보안,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 관악구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1377,
      confirm_name: "주식회사 커리어포커스",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1378,
      confirm_name: "(주)오상헬스케어",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1379,
      confirm_name: "(주)블록체인기술연구소",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 강북구,서울 &gt; 강서구,인천 &gt; 인천전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 1380,
      confirm_name: "(주)헬로서치",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1381,
      confirm_name: "영통아이티 컴퓨터학원",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1382,
      confirm_name: "영통아이티 컴퓨터학원",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1383,
      confirm_name: "(주)뤼드코리아",
      work: "총무·법무·사무,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "서울 &gt; 서울전체,서울 &gt; 영등포구,서울 &gt; 용산구,서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1384,
      confirm_name: "나모웹비즈(주)",
      work: "그래픽디자인·CG,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1385,
      confirm_name: "동의대학교",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address:
        "부산 &gt; 남구,부산 &gt; 동구,부산 &gt; 동래구,부산 &gt; 부산진구,부 산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1386,
      confirm_name: "(주)성원애드피아",
      work: "웹개발,웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1387,
      confirm_name: "(주)에스씨네트",
      work: "서버·네트워크·보안,통신·모바일,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1388,
      confirm_name: "(주)인키움",
      work: "사무보조·문서작성,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1389,
      confirm_name: "그린컴퓨터아트학원",
      work: "그래픽디자인·CG,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 수원시 팔달구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1390,
      confirm_name: "하나렌탈",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "경기 &gt; 동두천시,경기 &gt; 양주시,경기 &gt; 의정부시,경기 &gt; 포천시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1391,
      confirm_name: "(주)성원애드피아",
      work: "웹개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1392,
      confirm_name: "모아시스(주)",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1393,
      confirm_name: "주식회사 아이나비시스템즈",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1394,
      confirm_name: "디지털오에이시스템",
      work: "IT·디자인·컴퓨터교육",
      address: "전북 &gt; 군산시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1395,
      confirm_name: "(주)아이시에스솔루션스",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "인천 &gt; 인천전체,인천 &gt; 연수구,전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1396,
      confirm_name: "주식회사 드림정보",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "충북 &gt; 충북전체,세종 &gt; 세종특별자치시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1397,
      confirm_name: "(주)한승교육",
      work: "사무보조·문서작성,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 안양시 동안구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1398,
      confirm_name: "새부산컴퓨터전산회계학원",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "부산 &gt; 동래구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1399,
      confirm_name: "한국IT교육원",
      work: "IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,전문직업·IT강사",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1400,
      confirm_name: "흥인",
      work: "IT·디자인·컴퓨터교육",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1401,
      confirm_name: "HNT 아웃소싱시스템",
      work: "IT·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1402,
      confirm_name: "(주)모토벨로",
      work: "웹기획·PM,웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1403,
      confirm_name: "(주)나눔디지털디자인학원",
      work:
        "경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,그래픽디자인·CG,광고·시각디자인,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,세무·회계·CPA,카메라·조명·미술",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1404,
      confirm_name: "비트포비아",
      work: "전기·전자·제어,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1405,
      confirm_name: "(주)시드아이티",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1406,
      confirm_name: "(주)서울게임",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1407,
      confirm_name: "메를로랩(주)",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 1408,
      confirm_name: "(주)네이블커뮤니케이션즈",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1409,
      confirm_name: "(주)네이블커뮤니케이션즈",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1410,
      confirm_name: "(주)이노블록",
      work: "웹마스터·QA·테스터,웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1411,
      confirm_name: "(주)에이치아이티",
      work: "IT·디자인·컴퓨터교육",
      address: "경북 &gt; 포항시 북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~4년"
    },
    {
      id: 1412,
      confirm_name: "ISFnet Korea (한국법인)",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "충북 &gt; 진천군",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1413,
      confirm_name: "(주)이루미소프트",
      work: "응용프로그램개발,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1414,
      confirm_name: "(주)오픈소스잡",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 1415,
      confirm_name: "템프인주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1416,
      confirm_name: "골든서퍼(주)",
      work: "그래픽디자인·CG,게임·Game,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1417,
      confirm_name: "비트컴퓨터학원",
      work: "웹디자인,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1418,
      confirm_name: "(주)강림직업전문학교",
      work: "웹개발,퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1419,
      confirm_name: "한국IT교육원",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1420,
      confirm_name: "(주)옻향",
      work: "시스템개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1421,
      confirm_name: "부천우리직업전문학교",
      work: "웹디자인,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 부천시 원미구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1422,
      confirm_name: "그린컴퓨터아카데미",
      work: "웹개발,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "울산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1423,
      confirm_name: "주식회사 칸정보기술",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1424,
      confirm_name: "코딩골드스쿨컴퓨터학원",
      work: "IT·디자인·컴퓨터교육,초중고·특수학교,전문직업·IT강사",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 1425,
      confirm_name: "(주)퓨처젠",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1426,
      confirm_name: "(주)이노아이앤티",
      work: "IT·디자인·컴퓨터교육",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1427,
      confirm_name: "스콥정보통신(주)",
      work: "웹개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1428,
      confirm_name: "(주)엠아이티능력개발원",
      work: "IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,전문직업·IT강사",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1429,
      confirm_name: "한국보그워너티에스",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "충북 &gt; 음성군",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1430,
      confirm_name: "하나렌탈",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "경기 &gt; 동두천시,경기 &gt; 양주시,경기 &gt; 의정부시,경기 &gt; 포천시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1431,
      confirm_name: "(주)크래프톤",
      work:
        "기획·전략·경영,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,캐릭터·만화·애니,광고·시각디자인,웹기획·PM,웹개발,게임·Game,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA, 광고·카피·CF",
      address:
        "서울 &gt; 강남구,서울 &gt; 서초구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1432,
      confirm_name: "유진초저온(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1433,
      confirm_name: "울산병원",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "울산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1434,
      confirm_name: "휴먼웍스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1435,
      confirm_name: "(주)엘로이큐브",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1436,
      confirm_name: "브랜드미",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1437,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1438,
      confirm_name: "비전서치",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1439,
      confirm_name: "비전서치",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 1440,
      confirm_name: "(주)대아정보시스템",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1441,
      confirm_name: "주식회사 위시드",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt;  영등포구,경기 &gt; 부천시,경기 &gt; 안양시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1442,
      confirm_name: "(주)티지360테크놀로지스",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1443,
      confirm_name: "(주)쓰리에치시스템",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: " 신입/경력"
    },
    {
      id: 1444,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1445,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1446,
      confirm_name: "(주)지앤아이테크놀로지스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1447,
      confirm_name: "파워에이치알",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1448,
      confirm_name: "한스컨설팅",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 1449,
      confirm_name: "라온서치",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~15년"
    },
    {
      id: 1450,
      confirm_name: "(주)조인스에이치알코리아",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 1451,
      confirm_name: "사운드파이프코리아(주)",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1452,
      confirm_name: "(주)이원티엔에스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1453,
      confirm_name: "(주)메이크인",
      work: "웹기획·PM,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1454,
      confirm_name: "(주)인터마케팅",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "제주 &gt; 제주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1455,
      confirm_name: "(주)산하정보기술",
      work:
        "기획·전략·경영,인사·교육·노무,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그 램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 금천구,제주 &gt; 제주전체",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1456,
      confirm_name: "주식회사 피플케어코리아",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 6~10년"
    },
    {
      id: 1457,
      confirm_name: "(주)코마스인터렉티브",
      work: "웹개발,시스템개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1458,
      confirm_name: "(주)핀커스코리아",
      work: "마케팅·광고·분석,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1459,
      confirm_name: "(주)아이디노",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1460,
      confirm_name: "(주)유니텍",
      work: "응용프로그램개발,데이터베이스·DBA",
      address:
        "서울 &gt; 강남구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 서초구,서울 &gt; 영등포구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 수원시,경기 &gt; 안양시,경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1461,
      confirm_name: "(주)유더블유에스",
      work:
        "사무보조·문서작성,서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: " 경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1462,
      confirm_name: "마준소프트(주)",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1463,
      confirm_name: "인탑스주식회사",
      work: "ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경북 &gt; 구미시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1464,
      confirm_name: "(주)엔투엠",
      work: "하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1465,
      confirm_name: "(주)인라이플",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천 구,서울 &gt; 용산구,경기 &gt; 경기전체,경기 &gt; 고양시,경기 &gt; 광명시,경기 &gt; 부천시,경기 &gt; 안산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1466,
      confirm_name: "(주)웰데이타시스템",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1467,
      confirm_name: "(주)링인터랙티브",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1468,
      confirm_name: "(주)에이플러스소프트",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1469,
      confirm_name: "(주)진학사",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1470,
      confirm_name: "KCC정보통신(주)",
      work: "서버·네트워크·보안,웹기획·PM,웹개발,데이터베이스·DBA",
      address: "전국 &gt; 전국",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 1471,
      confirm_name: "굿커리어",
      work: "IT·솔루션영업,기술영업,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1472,
      confirm_name: "아주대학교의료원",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,데이터베이스·DBA",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1473,
      confirm_name: "피플워크(주)",
      work: "웹개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 1474,
      confirm_name: "리드피플(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1475,
      confirm_name: "캐시워크",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1476,
      confirm_name: "주식회사 키움YES저축은행",
      work:
        "기획·전략·경영,회계·재무·세무·IR,금융·보험영업,영업기획·관리·지원,응용프로그램개발,데이터베이스·DBA,경영분석·컨설턴트,증권·투자·펀드·외환,설문·통계·리서치,채권·보험·보상·심사,부동산·개발·경매·분양",
      address: "서울 &gt; 강남구,서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1477,
      confirm_name: "(주)포위즈시스템",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "대구 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1478,
      confirm_name: "더 에이치알더(주)",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1479,
      confirm_name: "율시스템(주)",
      work: "웹개발,데이터베이스·DBA",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1480,
      confirm_name: "엔센스코리아(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: " 경력"
    },
    {
      id: 1481,
      confirm_name: "롯데관광개발(주)",
      work:
        "구매·자재·재고,무역사무·수출입,총무·법무·사무,홍보·PR·사보,사무보조·문서작성,웨딩·행사·이벤트,보안·경호·안전,외식·식음료,호텔·카지노·콘도,요리·제빵사·영양사,인사·교육·노무,회계·재무·세무·IR,마케팅·광 고·분석,그래픽디자인·CG,전시·공간디자인,일반영업,판매·매장관리,영업기획·관리·지원,생산관리·품질관리,ERP·시스템분석·설계,데이터베이스·DBA,법률·특허·상표,건축·인테리어·설계,안전·품질·검사·관리",
      address: "서울 &gt; 종로구,제주 &gt; 서귀 포시,제주 &gt; 제주시",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1482,
      confirm_name: "(주)조아라",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1483,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1484,
      confirm_name: "(주)에스에스알",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1485,
      confirm_name: "동은정보기술(주)",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,데이터베이스·DBA",
      address: "경기 &gt; 부천시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1486,
      confirm_name: "(주)비스텔",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1487,
      confirm_name: "(주)디지털포토",
      work:
        "기획·전략·경영,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1488,
      confirm_name: "(주)씨엘정보기술",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1489,
      confirm_name: "(주)사우정보기술",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 금천구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1490,
      confirm_name: "엔지엘(주)",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "부산 &gt; 동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1491,
      confirm_name: "이케이 주식회사",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1492,
      confirm_name: "(주)아이스크림에듀",
      work:
        "해외영업·무역영업,기획·전략·경영,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,출판·편집디자인,광고·시각디자인,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,통신·모바일,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,교육기획·교재,초 중고·특수학교,인쇄·출판·편집",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1493,
      confirm_name: "(주)이노베이션팩토리",
      work: "웹개발,데이터베이스·DBA",
      address:
        "경기 &gt; 성남시,경기 &gt; 수원시,경기 &gt; 용인시,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~18년"
    },
    {
      id: 1494,
      confirm_name: "주식회사 케이에이치에이",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1495,
      confirm_name: "(주)태광데이터시스템",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "아시아·중동 &gt; 베트남",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1496,
      confirm_name: "인포보스(주)",
      work: "웹개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1497,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1498,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1499,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1500,
      confirm_name: "(주)비티씨코리아닷컴",
      work: "웹마스터·QA·테스터,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1501,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1502,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1503,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1504,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1505,
      confirm_name: "(주)스맥",
      work: "응용프로그램개발,통신·모바일,데이터베이스·DBA",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1506,
      confirm_name: "(주)헬로서치",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1507,
      confirm_name: "(주)헬로서치",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1508,
      confirm_name: "(의)혜광의료재단",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "대전 &gt; 동구,충북 &gt; 청주시,충북 &gt; 충주시",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1509,
      confirm_name: "구루넷",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 1510,
      confirm_name: "구루넷",
      work: "생산관리·품질관리,응용프로그램개발,데이터베이스·DBA",
      address: "충북 &gt; 진천군",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1511,
      confirm_name: "구루넷",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "경력 2~15년"
    },
    {
      id: 1512,
      confirm_name: "헬로우파트너스",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "대전 &gt; 대전전체",
      education: "대학교졸업(4년)이상",
      careear: "경력9년↑"
    },
    {
      id: 1513,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1514,
      confirm_name: "(주)에스앤씨랩",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1515,
      confirm_name: "(주)엔터인",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1516,
      confirm_name: "SK엠앤서비스(주)",
      work:
        "총무·법무·사무,경리·출납·결산,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그 램개발,시스템개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 1517,
      confirm_name: "AJ전시몰",
      work:
        "마케팅·광고·분석,판매·매장관리,영업기획·관리·지원,서버·네트워크·보안,웹개발,하드웨어·소프트웨어,웹디자 인,데이터베이스·DBA",
      address: "서울 &gt; 송파구,경기 &gt; 파주시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1518,
      confirm_name: "(주)프로매치코리아",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1519,
      confirm_name: "(주)바디프랜드",
      work:
        "해외영업·무역영업,구매·자재·재고,납품·배송·택배,상품기획·MD,기획·전략·경영,총무·법무·사무,경리 ·출납·결산,홍보·PR·사보,AS·서비스·수리,외식·식음료,요리·제빵사·영양사,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,광고·시각디자인,일반영업,판매·매장관리,광고영업,영업기획·관리·지 원,TM·인바운드,고객센터·CS,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,웹디자인,데이터베이스·DBA,증권·투자·펀드·외환,세무·회계·CPA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체,광주 &gt; 광주전체,대구 &gt; 대구전체,대전 &gt; 대전전체,부산 &gt; 부산전체,울산 &gt; 울산전체,충북 &gt; 음성군",
      education: "고등학교졸업이상",
      careear: "경 력무관"
    },
    {
      id: 1520,
      confirm_name: "(주)벤처피플",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 9~13년"
    },
    {
      id: 1521,
      confirm_name: "주식회사 뮤엠교육",
      work:
        "기획·전략·경영,사무보조·문서작성,웹기획·PM,웹개발,데이터베이스·DBA,연구소·R&D,교육기획·교재,인 쇄·출판·편집",
      address: "경기 &gt; 고양시,경기 &gt; 파주시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1522,
      confirm_name: "(주)티피헬스케어",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1523,
      confirm_name: "지오시스 유한회사",
      work:
        "상품기획·MD,마케팅·광고·분석,서버·네트워크·보안,웹개발,컨텐츠·사이트운영,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1524,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1525,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1526,
      confirm_name: "(주)에스유스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 1527,
      confirm_name: "(주)유웨이써치앤컨설팅",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1528,
      confirm_name: "(주)유웨이써치앤컨설팅",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 1529,
      confirm_name: "(주)아이티노매즈",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1530,
      confirm_name: "(주)코리아센터",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1531,
      confirm_name: "(주)더원테크",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 1532,
      confirm_name: "(주)위메프",
      work:
        "웹개발,응용프로그램개발,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1533,
      confirm_name: "(의)석영의료재단 창원제일종합병원",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "경남 &gt; 창원시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 1534,
      confirm_name: "(주)베네통코리아",
      work:
        "해외영업·무역영업,무역사무·수출입,사무보조·문서작성,회계·재무·세무·IR,의류·패션·잡화디자인,디자인기타,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1535,
      confirm_name: "(주)에이텍티앤",
      work:
        "경리·출납·결산,AS·서비스·수리,회계·재무·세무·IR,일반영업,IT·솔루션영업,기술영업,영업기획·관리· 지원,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,하드웨어·소프트웨어,데이터베이스·DBA,세무·회계 ·CPA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 용산구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구,세종 &gt; 세종특별자치시",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 1536,
      confirm_name: "(주)네오데이즈",
      work: "웹개발,데이터베이스·DBA",
      address:
        "대구 &gt; 대구전체,대구 &gt; 남구,대구 &gt; 북구,대구 &gt; 수성구,대구 &gt; 중구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1537,
      confirm_name: "이니텍(주)",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1538,
      confirm_name: "(주)알스피릿",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1539,
      confirm_name: "(주) 쓰리뷰",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력무 관"
    },
    {
      id: 1540,
      confirm_name: "위더스파트너스 주식회사",
      work: "물류·유통·운송,데이터베이스·DBA,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~15년"
    },
    {
      id: 1541,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 1542,
      confirm_name: "(주)마이더스에이치알",
      work: "서버·네트워크·보안,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1543,
      confirm_name: "HR컨설팅(주)",
      work: "ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1544,
      confirm_name: "HR컨설팅(주)",
      work: "기획·전략·경영,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~20년"
    },
    {
      id: 1545,
      confirm_name: "(주)스마트모빌러티",
      work: "인공지능(AI)·빅데이터,토목·조경·도시·측량",
      address: "서울 &gt; 동대문구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1546,
      confirm_name: "(주)컨셉터스",
      work: "웹개발,웹디자인,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~3년"
    },
    {
      id: 1547,
      confirm_name: "에이치알파트너스",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1548,
      confirm_name: "에이치알파트너스",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1549,
      confirm_name: "에이치알파트너스",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1550,
      confirm_name: "(주)스카우트",
      work: "인공지능(AI)·빅데이터,경영분석·컨설턴트,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1551,
      confirm_name: "(주)스카우트",
      work: "인공지능(AI)·빅데이터,경영분석·컨설턴트,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1552,
      confirm_name: "(주)스카우트",
      work: "ERP·시스템분석·설계,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5 년↑"
    },
    {
      id: 1553,
      confirm_name: "(주)프로매치코리아",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 1554,
      confirm_name: "(주)데이터리퍼블릭",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1555,
      confirm_name: "(주)엠로",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1556,
      confirm_name: "(주)스카우트",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 1557,
      confirm_name: "(주)모든바이오",
      work: "인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 구로구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 1558,
      confirm_name: "중앙직업전문학교",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "대구 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1559,
      confirm_name: "KY컨설팅그룹",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "석사졸업이상",
      careear: "경력 8~14년"
    },
    {
      id: 1560,
      confirm_name: "교원",
      work:
        "기획·전략·경영,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,웹디자인,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1561,
      confirm_name: "(주)조인스에이치알코리아",
      work: "인공지능(AI)·빅데이터,연구소·R&D",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 1562,
      confirm_name: "(주)조인스에이치알코리아",
      work: "인공지능(AI)·빅데이터,연구소·R&D",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 1563,
      confirm_name: "SK플래닛(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 1564,
      confirm_name: "메이븐코리아(주)",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년 ↑"
    },
    {
      id: 1565,
      confirm_name: "(주)투비파트너즈",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~9년"
    },
    {
      id: 1566,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1567,
      confirm_name: "수협은행",
      work:
        "IT·솔루션영업,금융·보험영업,기술영업,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1568,
      confirm_name: "에스피테크놀러지",
      work: "웹개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 관악구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력4 년↑"
    },
    {
      id: 1569,
      confirm_name: "에스피테크놀러지",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1570,
      confirm_name: "(주)시큐레이어",
      work: "IT·솔루션영업,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1571,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1572,
      confirm_name: "(주)자이트론",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1573,
      confirm_name: "주식회사 아이키",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "부산 &gt; 부산진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1574,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,전문직업·IT강사",
      address: "서울 &gt; 서울전체, 서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1575,
      confirm_name: "구름바이에이치 - (주)제범",
      work: "마케팅·광고·분석,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1576,
      confirm_name: "(주)내프터",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1577,
      confirm_name: "브랜드미",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1578,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1579,
      confirm_name: "효성ITX(주)",
      work: "웹기획·PM,응용프로그램개발,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 강서구,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 양천구,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1580,
      confirm_name: "비전서치",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1581,
      confirm_name: "비전서치",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 1582,
      confirm_name: "비전서치",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 1583,
      confirm_name: "(주)와이디생명과학",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1584,
      confirm_name: "비전서치",
      work: "통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 1585,
      confirm_name: "비전서치",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 1586,
      confirm_name: "헬로우파트너스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1587,
      confirm_name: "소스팜(주)",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1588,
      confirm_name: "(주)HR컨설팅그룹",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 1589,
      confirm_name: "(주)HR컨설팅그룹",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력8년↑"
    },
    {
      id: 1590,
      confirm_name: "(주)HR컨설팅그룹",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1591,
      confirm_name: "(주)티지360테크놀로지스",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1592,
      confirm_name: "에이스파트너스",
      work: "게임·Game,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~18년"
    },
    {
      id: 1593,
      confirm_name: "에이스파트너스",
      work: "서버·네트워크·보안,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 1594,
      confirm_name: "비전서치",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구,경기 &gt; 경기전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 1595,
      confirm_name: "에너지엑스(주)",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 1596,
      confirm_name: "(주)코리아서버호스팅",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 1597,
      confirm_name: "한스컨설팅",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 1598,
      confirm_name: "한스컨설팅",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 1599,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "IT·솔루션영업,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~15년"
    },
    {
      id: 1600,
      confirm_name: "에이스파트너스",
      work: "인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1601,
      confirm_name: "(주)씨앤에이코리아",
      work: "기획·전략·경영,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1602,
      confirm_name: "(주)씨앤에이코리아",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1603,
      confirm_name: "(주)휴이노",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1604,
      confirm_name: "에이스파트너스",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1605,
      confirm_name: "(주)올원",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1606,
      confirm_name: "(주)스카우트",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 1607,
      confirm_name: "(주)스카우트",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 1608,
      confirm_name: "(주)비타",
      work: "인공지능(AI)·빅데이터",
      address: "전북 &gt; 완주군,전북 &gt; 전주시 완산구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1609,
      confirm_name: "(주)리파인",
      work: "기획·전략·경영,회계·재무·세무·IR,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1610,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "아시아·중동 &gt; 인도",
      education: "대학교졸업(4년)이 상",
      careear: "경력7년↑"
    },
    {
      id: 1611,
      confirm_name: "(주)한국마스터",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무 관"
    },
    {
      id: 1612,
      confirm_name: "HeNny & McCoy",
      work: "마케팅·광고·분석,영업기획·관리·지원,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력15년↑"
    },
    {
      id: 1613,
      confirm_name: "에스알디네트웍스(주)",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "고등학교졸업이상",
      careear: "경력 3~10년"
    },
    {
      id: 1614,
      confirm_name: "(주)스카우트",
      work: "마케팅·광고·분석,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 1615,
      confirm_name: "보보스링크(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4 년↑"
    },
    {
      id: 1616,
      confirm_name: "(주)유더블유에스",
      work:
        "사무보조·문서작성,서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: " 경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1617,
      confirm_name: "(주)유니콤넷",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 1618,
      confirm_name: "(주)데이터몬스터즈",
      work: "인공지능(AI)·빅데이터",
      address: "세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1619,
      confirm_name: "(주)네패스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터,병역특례",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1620,
      confirm_name: "뉴런어웨어",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1621,
      confirm_name: "(주)엔투엠",
      work: "하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1622,
      confirm_name: "(주)웰데이타시스템",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력 2~20년"
    },
    {
      id: 1623,
      confirm_name: "주식회사 모빌테크",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "신입/경 력"
    },
    {
      id: 1624,
      confirm_name: "(주)지음지식서비스",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 수정구,대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1625,
      confirm_name: "굿커리어",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1626,
      confirm_name: "비엔케이캐피탈(주)",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,금융·보험영업,웹개발,게임·Game,응용프로그 램개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address:
        "부산 &gt; 부산전체,부산 &gt; 남구,부산 &gt; 동구,부산 &gt; 동래구,부산 &gt; 부산진구,부산 &gt; 북구,부산 &gt; 사상구,부산 &gt; 연제구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1627,
      confirm_name: "에이치알니즈",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 1628,
      confirm_name: "굿커리어",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력10년↑"
    },
    {
      id: 1629,
      confirm_name: "주식회사 모빌테크",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1630,
      confirm_name: "(주)헬로서치",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1631,
      confirm_name: "(주)피엘케이 테크놀로지",
      work: "전기·전자·제어,인공지능(AI)·빅데이터,병역특례",
      address: "서울 &gt; 영등포구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 1632,
      confirm_name: "더 에이치알더(주)",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1633,
      confirm_name: "엔센스코리아(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: " 경력"
    },
    {
      id: 1634,
      confirm_name: "지디에프랩",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1635,
      confirm_name: "(주)비글",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1636,
      confirm_name: "뉴런어웨어",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1637,
      confirm_name: "현대중공업파워시스템(주)",
      work:
        "기획·전략·경영,총무·법무·사무,홍보·PR·사보,인사·교육·노무,회계·재무·세무·IR,일반영업,금융·보험영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전자·제어,설계·CAD·CAM,ERP·시스템분석·설계,인공 지능(AI)·빅데이터,세무·회계·CPA,전기·소방·통신·설비,환경·플랜트",
      address: "경기 &gt; 성남시 분당구,울산 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 1638,
      confirm_name: "(주)사람인에이치알",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1639,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "웹기획·PM,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1640,
      confirm_name: "현대중공업파워시스템(주)",
      work:
        "기획·전략·경영,총무·법무·사무,홍보·PR·사보,인사·교육·노무,회계·재무·세무·IR,기술영업,영업기획·관리·지원,인공지능(AI)·빅데이터,세무·회계·CPA,연구소·R&D,환경·플랜트",
      address: "경기 &gt; 성남시 분당구,울산 &gt; 울산전체",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1641,
      confirm_name: "헤리티지서치코어",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 1642,
      confirm_name: "(주)케이티",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,전기·전자·제어,서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1643,
      confirm_name: "타겟컨설팅그룹",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~9년"
    },
    {
      id: 1644,
      confirm_name: "피플워크(주)",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1645,
      confirm_name: "(주) 악어디지털",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 성남시  수정구,경기 &gt; 성남시 중원구,경기 &gt; 용인시 기흥구,경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1646,
      confirm_name: "브리스캔영어쏘시에이츠(주)",
      work: "웹개발,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1647,
      confirm_name: "엔지엘(주)",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "부산 &gt; 동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1648,
      confirm_name: "(주)케이맨파워",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1649,
      confirm_name: "온스퀘어",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1650,
      confirm_name: "(주)에스알포스트",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1651,
      confirm_name: "주식회사 엘리튜드",
      work: "서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1652,
      confirm_name: "JW커리어",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 1653,
      confirm_name: "JW커리어",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1654,
      confirm_name: "(주)에듀씨엔에스",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1655,
      confirm_name: "동화그룹",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,일반영업,영업기획·관리·지원,기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 서울전체,서울 &gt; 영등포구,인천 &gt; 인천전체,인천 &gt; 중구,충남 &gt; 충남전체,충남 &gt; 아산시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1656,
      confirm_name: "(주)블루포트",
      work:
        "구매·자재·재고,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,영업기획·관리·지원,서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어,웹디자인,경영분석·컨설턴트,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1657,
      confirm_name: "(주)월급날",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1658,
      confirm_name: "페가트론서비스코리아 유한회사",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1659,
      confirm_name: "(주)마이더스에이치알",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1660,
      confirm_name: "메가존(주)",
      work:
        "해외영업·무역영업,무역사무·수출입,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA,세무·회계·CPA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1661,
      confirm_name: "(주)마이더스에이치알",
      work: "서버·네트워크·보안,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1662,
      confirm_name: "(주)티에이나인",
      work: "서버·네트워크·보안,웹기획·PM,웹개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1663,
      confirm_name: "엠에스피정보기술(주)",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1664,
      confirm_name: "HR컨설팅(주)",
      work: "서버·네트워크·보안,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~20년"
    },
    {
      id: 1665,
      confirm_name: "우리산업(주)",
      work: "회계·재무·세무·IR,서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 1666,
      confirm_name: "(주)피너클써치",
      work: "서버·네트워크·보안,경영분석·컨설턴트",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1667,
      confirm_name: "에이치알파트너스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1668,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1669,
      confirm_name: "에이치알파트너스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1670,
      confirm_name: "(주)탑앤스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 1671,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work:
        "TM·인바운드,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,동영상·편 집·코덱,데이터베이스·DBA,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1672,
      confirm_name: "(주)유니오코리아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1673,
      confirm_name: "(주)엘링크시스템",
      work: "전기·전자·제어,서버·네트워크·보안,통신·모바일",
      address:
        "서울 &gt; 관악구,서울 &gt; 동대문구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1674,
      confirm_name: "(주)골든듀",
      work:
        "회계·재무·세무·IR,그래픽디자인·CG,의류·패션·잡화디자인,서버·네트워크·보안,ERP·시스템분석·설계,하드 웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1675,
      confirm_name: "(주)프라임엔시스템",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1676,
      confirm_name: "(주)대곤아이엔씨",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 은평구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1677,
      confirm_name: "(주)프로매치코리아",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 1678,
      confirm_name: "(주)마티아솔루션",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1679,
      confirm_name: "넷세븐주식회사",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1680,
      confirm_name: "펜타시큐리티시스템(주)",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 1681,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1682,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1683,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1684,
      confirm_name: "주식회사 스타랩스",
      work: "서버·네트워크·보안,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1685,
      confirm_name: "(주)지니뮤직",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1686,
      confirm_name: "(주)클라우즈랩",
      work: "서버·네트워크·보안",
      address: "인천 &gt; 중구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 1687,
      confirm_name: "제이씨현시스템(주)",
      work: "IT·솔루션영업,기술영업,서버·네트워크·보안",
      address: "서울 &gt; 서울전체,서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력 2~15년"
    },
    {
      id: 1688,
      confirm_name: "이이넥서스",
      work: "서버·네트워크·보안,게임·Game,웹디자인",
      address: "일본 &gt; 도쿄",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1689,
      confirm_name: "이이넥서스",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1690,
      confirm_name: "이이넥서스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "일본 &gt; 도쿄",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1691,
      confirm_name: "(주)성산씨엔에스",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1692,
      confirm_name: "굿네트워크",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1693,
      confirm_name: "(주)뉴젠씨앤아이",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1694,
      confirm_name: "이루온",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1695,
      confirm_name: "교원",
      work:
        "기획·전략·경영,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,웹디자인,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1696,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 구로구,전남 &gt; 나주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 1697,
      confirm_name: "(주)SPC네트웍스",
      work:
        "경리·출납·결산,서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1698,
      confirm_name: "키다리식품(주)",
      work:
        "구매·자재·재고,상품기획·MD,기획·전략·경영,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계· 재무·세무·IR,일반영업,판매·매장관리,영업기획·관리·지원,생산관리·품질관리,바이오·제약·식품,설계·CAD·CAM,서버· 네트워크·보안,응용프로그램개발,임원·CEO,건축·인테리어·설계",
      address:
        "서울 &gt; 송파구,대전 &gt; 대덕구,대전 &gt; 서구,강원 &gt; 홍천군,전남 &gt; 곡성군,충북 &gt; 보은군,충남 &gt; 공주시",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1699,
      confirm_name: "씨앤토트플러스(주)",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1700,
      confirm_name: "(주)이노비드",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1701,
      confirm_name: "(주)씨앤아이",
      work: "서버·네트워크·보안",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1702,
      confirm_name: "주식회사 쿠캣",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1703,
      confirm_name: "(주)엠브레이스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1704,
      confirm_name: "(주)투비파트너즈",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~9년"
    },
    {
      id: 1705,
      confirm_name: "(주)패션플러스",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1706,
      confirm_name: "SK플래닛(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 1707,
      confirm_name: "인지컨트롤스(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 시흥시",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 1708,
      confirm_name: "(주)인밸류비즈",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1709,
      confirm_name: "(주)에스엔티웍스",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1710,
      confirm_name: "유빈스(주)",
      work:
        "마케팅·광고·분석,IT·솔루션영업,기술영업,영업기획·관리·지원,전기·전자·제어,설계·CAD·CAM,서버·네트워 크·보안,통신·모바일,전기·소방·통신·설비,본사·관리·전산",
      address:
        "서울 &gt; 서울전체,서울 &gt; 금천구,서울 &gt; 서초구,서울 &gt; 중구,경기 &gt; 고양시,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구,부산 &gt; 부산전체,부산 &gt; 동래구",
      education: "대학 졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1711,
      confirm_name: "(주)엠씨에스텍",
      work: "서버·네트워크·보안",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 동작구,서울 &gt; 양천구,서울 &gt; 영등포구,경기 &gt; 광명시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1712,
      confirm_name: "(주)듀크린",
      work: "총무·법무·사무,서버·네트워크·보안",
      address: "인천 &gt; 계양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1713,
      confirm_name: "서울데이타통신(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1714,
      confirm_name: "(주)엠씨에스텍",
      work: "서버·네트워크·보안",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 동작구,서울 &gt; 양천구,서울 &gt; 영등포구,경기 &gt; 광명시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1715,
      confirm_name: "위더스파트너스 주식회사",
      work: "서버·네트워크·보안,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체",
      education: " 대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1716,
      confirm_name: "(주)골든듀",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1717,
      confirm_name: "코츠테크놀로지(주)",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발, 시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1718,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1719,
      confirm_name: "에스케이지씨",
      work: "서버·네트워크·보안",
      address: "전북 &gt; 완주군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1720,
      confirm_name: "(주)레디아테크놀러지",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구,서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1721,
      confirm_name: "(주)베스트텍시스템",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1722,
      confirm_name: "KY컨설팅그룹",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 1723,
      confirm_name: "(주)이슬림코리아",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1724,
      confirm_name: "수협은행",
      work:
        "IT·솔루션영업,금융·보험영업,기술영업,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1725,
      confirm_name: "(주)아이템베이",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 양천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1726,
      confirm_name: "(주)비브로스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1727,
      confirm_name: "(주)아이티커머스코리아",
      work: "기술영업,서버·네트워크·보안,대학교수·행정직",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1728,
      confirm_name: "에스피테크놀러지",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 관악구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1729,
      confirm_name: "(주)베스트텍시스템",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 1730,
      confirm_name: "(주)업사이드",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1731,
      confirm_name: "디케이유엔씨(주)",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1732,
      confirm_name: "대성공업(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1733,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1734,
      confirm_name: "(주)두잇시스템",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 1735,
      confirm_name: "인포뱅크(주)",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력7년↓"
    },
    {
      id: 1736,
      confirm_name: "(주)해밀아이티",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1737,
      confirm_name: "(주)커리어코리아",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1738,
      confirm_name: "(주)시스로그",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1739,
      confirm_name: "(주)서울문고",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1740,
      confirm_name: "파워에이치알",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 6~14년"
    },
    {
      id: 1741,
      confirm_name: "딥웹기술개발",
      work: "서버·네트워크·보안",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1742,
      confirm_name: "대명호텔앤리조트",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,서버·네트워크·보안,통신·모바일,안전·품질·검사·관리",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1743,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,전문직업·IT강사",
      address: "서울 &gt; 서울전체, 서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1744,
      confirm_name: "(주)튠시스템",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~3년"
    },
    {
      id: 1745,
      confirm_name: "(주)튠시스템",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1746,
      confirm_name: "(주)튠시스템",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1747,
      confirm_name: "엔시큐어(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1748,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,웹기획·PM,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강동구,서울 &gt; 강서구,서울 &gt; 서대문구,서울 &gt; 성동구,서울 &gt; 용산구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1749,
      confirm_name: "울산병원",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "울산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1750,
      confirm_name: "(주) 허브브레인",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1751,
      confirm_name: "(주)등대씨엔씨",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1752,
      confirm_name: "휴먼웍스",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1753,
      confirm_name: "코아이비인후과",
      work: "총무·법무·사무,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경북 &gt; 포항시 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1754,
      confirm_name: "(주)하우리씨엔에스",
      work: "AS·서비스·수리,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1755,
      confirm_name: "(주)지에프앤엘",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1756,
      confirm_name: "부동산일일사(주)",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1757,
      confirm_name: "(주)송현홀딩스",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "충북 &gt; 충주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1758,
      confirm_name: "디에스지엔(주)",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1759,
      confirm_name: "넥시큐어시스템테크놀로지 주식회사",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1760,
      confirm_name: "필라테크",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1761,
      confirm_name: "(주)르누베르",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "전북 &gt; 익산시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1762,
      confirm_name: "홀리츠",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1763,
      confirm_name: "(주)레뷰코퍼레이션",
      work: "웹기획·PM,웹개발,웹디자인,외국어·번역·통역",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1764,
      confirm_name: "(주)유빅스컴퓨팅",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1765,
      confirm_name: "대광계측기(주)",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 1766,
      confirm_name: "(주)비원시스템",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1767,
      confirm_name: "헤리티지서치코어",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 1768,
      confirm_name: "유니웹스(주)",
      work: "IT·솔루션영업,웹기획·PM",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1769,
      confirm_name: "(주)영구크린",
      work: "총무·법무·사무,웹마스터·QA·테스터,웹기획·PM",
      address: "서울 &gt; 강남구,경기 &gt; 성남시 수정구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1770,
      confirm_name: "에이프로젠제약(주)",
      work:
        "총무·법무·사무,회계·재무·세무·IR,생산관리·품질관리,웹기획·PM,웹개발,응용프로그램개발,시스템개 발,ERP·시스템분석·설계,웹디자인,세무·회계·CPA",
      address:
        "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 중원구,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1771,
      confirm_name: "(주)더위버크리에이티브",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1772,
      confirm_name: "마인드원(주)",
      work: "웹마스터·QA·테스터,웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~15년"
    },
    {
      id: 1773,
      confirm_name: "라붐팩토리(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 1774,
      confirm_name: "에스씨엠케이(주)",
      work:
        "물류·유통·운송,구매·자재·재고,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1775,
      confirm_name: "(주)현솔루션",
      work: "웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 1776,
      confirm_name: "(주)인텔릭",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1777,
      confirm_name: "굿에이치알",
      work: "웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1778,
      confirm_name: "(주)오마이선글라스",
      work: "상품기획·MD,전시·공간디자인,웹기획·PM",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1779,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~9년"
    },
    {
      id: 1780,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1781,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~12년"
    },
    {
      id: 1782,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1783,
      confirm_name: "(주)이랜드리테일",
      work: "상품기획·MD,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1784,
      confirm_name: "(주)바른씨푸드",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 동작구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1785,
      confirm_name: "(주)스카우트",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 1786,
      confirm_name: "(주)스카우트",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1787,
      confirm_name: "(주)고릴라디스트릭트",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,동영상·편집·코덱,카메라·조명·미술,기자",
      address: "서울 &gt; 서울전체,서울 &gt; 종로구,서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1788,
      confirm_name: "(주)아이템베이",
      work: "기획·전략·경영,웹기획·PM,웹개발",
      address: "서울 &gt; 양천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 1789,
      confirm_name: "(주)아이템베이",
      work: "웹기획·PM,웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 1790,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "일반영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력12년↑"
    },
    {
      id: 1791,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "일반영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1792,
      confirm_name: "(주)코지텍",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 북구,부산 &gt; 사상구,경남 &gt; 김해시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1793,
      confirm_name: "(주)글라스바바안경체인",
      work:
        "해외영업·무역영업,구매·자재·재고,상품기획·MD,기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,전시·컨벤션·세미나,제품·산업디자인,광고·시각디자인,판매·매장관리,영업기획·관리·지원,웹기획·PM,광고·카피·CF",
      address:
        "경기 &gt; 고양시 덕양구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1794,
      confirm_name: "(주)온리스타일",
      work:
        "구매·자재·재고,사무보조·문서작성,출판·편집디자인,제품·산업디자인,디자인기타,웹기획·PM,컨텐츠·사이 트운영,웹디자인",
      address:
        "서울 &gt; 구로구,경기 &gt; 부천시 소사구,경기 &gt; 부천시 오정구,경기 &gt; 부천시 원미구,인천 &gt; 계양 구,인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1795,
      confirm_name: "(주)45스페이스",
      work: "TM·인바운드,고객센터·CS,웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 고양시 덕양구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1796,
      confirm_name: "(주)캐럿글로벌",
      work:
        "마케팅·광고·분석,일반영업,영업기획·관리·지원,TM·인바운드,웹기획·PM,웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발,외국어·번역·통역,연구소·R&D,학원관리·운영·상담",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,대전 &gt; 대전전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1797,
      confirm_name: "(주)디케이비즈니스",
      work:
        "사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,TM·인바운드,고객센터·CS,웹기획·PM,컨텐츠· 사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1798,
      confirm_name: "(주)에스아이알소프트",
      work: "웹기획·PM,웹개발,웹디자인",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 과천시,경기 &gt; 성남시,경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1799,
      confirm_name: "(주)브랜디",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1800,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 1801,
      confirm_name: "(주)애드포러스",
      work: "그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1802,
      confirm_name: "SMI",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 1803,
      confirm_name: "에이제이인터내셔날",
      work: "고객센터·CS,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1804,
      confirm_name: "(주)디케이커뮤니티",
      work: "웹기획·PM,웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1805,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1806,
      confirm_name: "BOB네트웍스",
      work: "웹기획·PM,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~17년"
    },
    {
      id: 1807,
      confirm_name: "(주)경성리츠",
      work: "웹기획·PM",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1808,
      confirm_name: "(주)헬로서치",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 1809,
      confirm_name: "(주)헬로서치",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1810,
      confirm_name: "주식회사 써머스플랫폼",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1811,
      confirm_name: "주식회사 써머스플랫폼",
      work: "광고영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1812,
      confirm_name: "(주)크래프톤",
      work:
        "기획·전략·경영,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,캐릭터·만화·애니,광고·시각디자인,웹기획·PM,웹개발,게임·Game,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA, 광고·카피·CF",
      address:
        "서울 &gt; 강남구,서울 &gt; 서초구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 1813,
      confirm_name: "(주)비즈테크파트너스",
      work: "웹기획·PM,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1814,
      confirm_name: "(주) 딥노이드",
      work: "웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1815,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,전문직업·IT강사",
      address: "서울 &gt; 서울전체, 서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1816,
      confirm_name: "(주)다하미커뮤니케이션즈",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1817,
      confirm_name: "한미반도체(주)",
      work: "반도체·디스플레이·LCD,웹기획·PM,응용프로그램개발",
      address: "인천 &gt; 서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1818,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,웹기획·PM,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강동구,서울 &gt; 강서구,서울 &gt; 서대문구,서울 &gt; 성동구,서울 &gt; 용산구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1819,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1820,
      confirm_name: "휴먼웍스",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1821,
      confirm_name: "예지솔루션",
      work: "마케팅·광고·분석,광고영업,웹기획·PM",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구,경기 &gt; 부천시 소사구,경기 &gt; 안산시 단원구,경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1822,
      confirm_name: "예지솔루션",
      work: "마케팅·광고·분석,광고영업,웹기획·PM",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구,경기 &gt; 부천시 소사구,경기 &gt; 안산시 단원구,경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1823,
      confirm_name: "(주)성진켐",
      work: "생산관리·품질관리,웹기획·PM,웹디자인",
      address: "경기 &gt; 안성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1824,
      confirm_name: "(주)성진켐",
      work: "생산관리·품질관리,웹기획·PM,웹디자인",
      address: "경기 &gt; 안성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1825,
      confirm_name: "(주)사랑방미디어",
      work: "기획·전략·경영,웹기획·PM",
      address: "광주 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1826,
      confirm_name: "(주)사랑방미디어",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "광주 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1827,
      confirm_name: "하이잉글리쉬",
      work: "웹마스터·QA·테스터,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1828,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1829,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1830,
      confirm_name: "효성ITX(주)",
      work: "웹기획·PM,응용프로그램개발,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 강서구,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 양천구,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1831,
      confirm_name: "비전서치",
      work: "웹기획·PM",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 1832,
      confirm_name: "(주)오텍",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 군포시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1833,
      confirm_name: "(주)에이트엠",
      work: "웹마스터·QA·테스터,웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 1834,
      confirm_name: "(주)미래아이엔씨",
      work: "홍보·PR·사보,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1835,
      confirm_name: "(주)에이치알그룹",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1836,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력8년↑"
    },
    {
      id: 1837,
      confirm_name: "에이스파트너스",
      work: "그래픽디자인·CG,웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~12년"
    },
    {
      id: 1838,
      confirm_name: "(주)나인위시스",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1839,
      confirm_name: "굿커리어",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1840,
      confirm_name: "플레이스비 주식회사",
      work: "웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1841,
      confirm_name: "에너지엑스(주)",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 1842,
      confirm_name: "한스컨설팅",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1843,
      confirm_name: "주식회사 세노컴퍼니",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1844,
      confirm_name: "(주)다노",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1845,
      confirm_name: "주식회사 볼드코퍼레이션 (Bold Corporation)",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1846,
      confirm_name: "(주)두리비즈",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력 5~11년"
    },
    {
      id: 1847,
      confirm_name: "(주)에이치알그룹",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 10~20년"
    },
    {
      id: 1848,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1849,
      confirm_name: "(주)투비파트너즈",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1850,
      confirm_name: "그레이프 파트너즈",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 1851,
      confirm_name: "(주)별에서온컴퓨터",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1852,
      confirm_name: "주식회사 크로바",
      work: "출판·편집디자인,웹기획·PM,웹디자인",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1853,
      confirm_name: "주식회사 디앤디랩",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1854,
      confirm_name: "(주)딜루션",
      work: "전시·공간디자인,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1855,
      confirm_name: "(주)딜루션",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 1856,
      confirm_name: "(주) 하이브랩",
      work: "웹기획·PM",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1857,
      confirm_name: "인파트너스",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1858,
      confirm_name: "로그인디",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1859,
      confirm_name: "커리어케어",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 1860,
      confirm_name: "로그인디",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1861,
      confirm_name: "더화이트커뮤니케이션(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력 3~6년"
    },
    {
      id: 1862,
      confirm_name: "(주)메이크인",
      work: "웹기획·PM,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1863,
      confirm_name: "(주)HR컨설팅그룹",
      work: "IT·솔루션영업,웹기획·PM",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~16년"
    },
    {
      id: 1864,
      confirm_name: "메가MD 주식회사",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1865,
      confirm_name: "(주)성진하이텍",
      work: "웹기획·PM,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1866,
      confirm_name: "(주)링인터랙티브",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 고양시 일산동구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년 ↑"
    },
    {
      id: 1867,
      confirm_name: "(주)교원",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1868,
      confirm_name: "(주)매스티지",
      work: "웹기획·PM",
      address:
        "서울 &gt; 강남구,서울 &gt; 강서구,서울 &gt; 동대문구,서울 &gt; 마포구,서울 &gt; 서대문구,인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1869,
      confirm_name: "(주)이랜드리테일",
      work: "웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1870,
      confirm_name: "(주)케이알마케팅",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인,광고·카피·CF",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1871,
      confirm_name: "윤시스템",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 1872,
      confirm_name: "윤시스템",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 1873,
      confirm_name: "(주)칸테크",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1874,
      confirm_name: "MK(매경닷컴)",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1875,
      confirm_name: "(주)비아이큐브",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1876,
      confirm_name: "한일네트웍스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1877,
      confirm_name: "한일네트웍스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 1878,
      confirm_name: "(주)제로웹",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1879,
      confirm_name: "(주)제로웹",
      work: "서버·네트워크·보안,웹개발",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1880,
      confirm_name: "씨앤토트플러스(주)",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력 5~10년"
    },
    {
      id: 1881,
      confirm_name: "(주)아이엠아이",
      work: "웹개발,퍼블리싱·UI개발",
      address: "전북 &gt; 전주시 덕진구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1882,
      confirm_name: "한아이덴티티",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1883,
      confirm_name: "(주)인텍솔루션",
      work: "웹개발,응용프로그램개발",
      address:
        "경기 &gt; 경기전체,경기 &gt; 오산시,경기 &gt; 평택시,충남 &gt; 충남전체,충남 &gt; 아산시,충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 1884,
      confirm_name: "주식회사 대건소프트",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1885,
      confirm_name: "(주)트랜스코스모스코리아",
      work:
        "웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "학력무 관",
      careear: "경력무관"
    },
    {
      id: 1886,
      confirm_name: "(주)인포젠",
      work: "웹개발",
      address: "경기 &gt; 안양시 만안구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~18년"
    },
    {
      id: 1887,
      confirm_name: "(주)위드피플",
      work: "웹개발,응용프로그램개발",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 1888,
      confirm_name: "(주)프리다임",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 의왕시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1889,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구,경기 &gt; 이천시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1890,
      confirm_name: "(주)판도라티비",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1891,
      confirm_name: "(주)큐씨엔",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강동구,서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1892,
      confirm_name: "(주)잉카인터넷",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1893,
      confirm_name: "(주)코드팜",
      work: "웹개발",
      address: "경기 &gt; 오산시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1894,
      confirm_name: "주식회사 헤드트리",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1895,
      confirm_name: "이에스티",
      work: "웹개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1896,
      confirm_name: "주식회사 베스텍글로벌",
      work: "웹개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1897,
      confirm_name: "(주)에이치엔에스커뮤니케이션",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1898,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구,경기 &gt; 고양시 일산동구,경기 &gt; 이 천시",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 1899,
      confirm_name: "주식회사 북레일",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1900,
      confirm_name: "(주)제이쎄노",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1901,
      confirm_name: "(주)조이앤비즈",
      work: "웹개발",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1902,
      confirm_name: "주식회사 리치솔루션",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1903,
      confirm_name: "(주)오케이토마토",
      work: "웹개발",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 1904,
      confirm_name: "글로우데이즈",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1905,
      confirm_name: "(주)인포젠",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경북 &gt; 구미시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~20년"
    },
    {
      id: 1906,
      confirm_name: "(주)뉴아틀란",
      work: "웹개발",
      address: "인천 &gt; 부평구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1907,
      confirm_name: "(주)커리어앤스카우트",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1908,
      confirm_name: "(주)인큐브시스템",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 1909,
      confirm_name: "appknot (앱노트)",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1910,
      confirm_name: "(주)드림시큐리티",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~5년"
    },
    {
      id: 1911,
      confirm_name: "(주)인사이드알에프",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1912,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,하드웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 1913,
      confirm_name: "(주)인피니크",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1914,
      confirm_name: "(주)인큐브시스템",
      work: "웹기획·PM,웹개발,데이터베이스·DBA",
      address: "인천 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 1915,
      confirm_name: "(주)인큐브시스템",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 1916,
      confirm_name: "(주)인디앤드코리아",
      work:
        "상품기획·MD,일반영업,영업기획·관리·지원,서버·네트워크·보안,웹개발,컨텐츠·사이트운영",
      address:
        "경기 &gt;  부천시,경기 &gt; 시흥시,경기 &gt; 안산시,인천 &gt; 연수구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1917,
      confirm_name: "(주)인큐브시스템",
      work: "회계·재무·세무·IR,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 1918,
      confirm_name: "(주)앤드",
      work: "웹개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 2~8년"
    },
    {
      id: 1919,
      confirm_name: "아이라자스(주)",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↓"
    },
    {
      id: 1920,
      confirm_name: "(주)앤드",
      work: "웹개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 2~8년"
    },
    {
      id: 1921,
      confirm_name: "(주)온넷시스템즈코리아",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~7년"
    },
    {
      id: 1922,
      confirm_name: "(주)타이탄인베스트",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹마스터·QA·테스터,웹기획·PM,웹개발,퍼블 리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 연제구,부산 &gt; 영도구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1923,
      confirm_name: "(주)에스와이소프트",
      work:
        "기획·전략·경영,그래픽디자인·CG,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,사진·포토그라퍼,부동산·개발·경매·분양",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 1924,
      confirm_name: "스키넵",
      work: "웹개발",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1925,
      confirm_name: "이스트웨스트(주)",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로 그램개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 영도구,경남 &gt; 경남전체",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1926,
      confirm_name: "전자부품연구원",
      work:
        "화학·에너지,전기·전자·제어,반도체·디스플레이·LCD,웹개발,응용프로그램개발,시스템개발,통신·모바일,하 드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address:
        "서울 &gt; 마포구,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 성남 시 분당구,경기 &gt; 안산시,경기 &gt; 하남시,전북 &gt; 전주시,전북 &gt; 전주시 덕진구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 1927,
      confirm_name: "(주)써머스플랫폼",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1928,
      confirm_name: "주식회사 인터퍼슨",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~7년"
    },
    {
      id: 1929,
      confirm_name: "스키넵",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1930,
      confirm_name: "(주)제너시스템",
      work: "웹개발",
      address: "서울 &gt; 도봉구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1931,
      confirm_name: "(주)엔지테크",
      work:
        "사무보조·문서작성,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴 퓨터교육,연구소·R&D,교육기획·교재",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,광주 &gt; 광주전체,부산 &gt; 부산전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1932,
      confirm_name: "(주)채움씨앤아이",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 1933,
      confirm_name: "(주)인텔리콘연구소",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1934,
      confirm_name: "(주)대성문",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개 발,퍼블리싱·UI개발",
      address:
        "부산 &gt; 부산전체,부산 &gt; 사하구,부산 &gt; 연제구,부산 &gt; 영도구,울산 &gt; 남구,경남 &gt; 거제 시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 1935,
      confirm_name: "(주)씨인플러스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1936,
      confirm_name: "(주)씨인플러스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1937,
      confirm_name: "대신네트웍스(주)",
      work: "웹개발",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1938,
      confirm_name: "(주)넥스트비즈",
      work: "웹개발,웹디자인",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1939,
      confirm_name: "동화그룹",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,일반영업,영업기획·관리·지원,기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 서울전체,서울 &gt; 영등포구,인천 &gt; 인천전체,인천 &gt; 중구,충남 &gt; 충남전체,충남 &gt; 아산시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 1940,
      confirm_name: "(주) 제이랩시스템",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1941,
      confirm_name: "(주)알볼로에프앤씨",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,홍보·PR·사보,외식·식음료,요리·제빵사·영양사,인사 ·교육·노무,마케팅·광고·분석,광고·시각디자인,일반영업,판매·매장관리,영업기획·관리·지원,QA·CS강사·수퍼바이저,생 산관리·품질관리,바이오·제약·식품,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,데이터베이스·DBA,경영분석·컨설턴트,설문·통계·리서치,법률·특허·상표,연구소·R&D,교육기획·교재,부동산·개발·경매·분양",
      address: "서울 &gt; 서울전체,서울 &gt; 양천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1942,
      confirm_name: "(주)와이지파트너스앤어드바이저리",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1943,
      confirm_name: "(주) 하이브랩",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 1944,
      confirm_name: "(주)티지360테크놀로지스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1945,
      confirm_name: "(주)티지360테크놀로지스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 1946,
      confirm_name: "(주)모렌소프트",
      work: "웹개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1947,
      confirm_name: "(주)이튜",
      work: "웹개발",
      address: "대구 &gt; 수성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1948,
      confirm_name: "(주)유비젠 S&T",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1949,
      confirm_name: "(주)인조이웍스",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1950,
      confirm_name: "주식회사 페이오티",
      work: "그래픽디자인·CG,웹개발,웹디자인",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1951,
      confirm_name: "(주)세계일보",
      work: "웹마스터·QA·테스터,웹개발,웹디자인",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1952,
      confirm_name: "(주)유비젠 S&T",
      work: "웹개발",
      address: "경기 &gt; 고양시 일산서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1953,
      confirm_name: "클루피(주)",
      work: "웹개발,데이터베이스·DBA",
      address: "대구 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1954,
      confirm_name: "한국금융안전(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1955,
      confirm_name: "코코네주식회사(영업소)",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1956,
      confirm_name: "코코네주식회사(영업소)",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1957,
      confirm_name: "펑타이그레이터차이나(유)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력 2~7년"
    },
    {
      id: 1958,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "회계·재무·세무·IR,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1959,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 1960,
      confirm_name: "(주)마이더스에이치알",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1961,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 1962,
      confirm_name: "(주)티에이나인",
      work: "서버·네트워크·보안,웹기획·PM,웹개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1963,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1964,
      confirm_name: "(주)세일창조",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1965,
      confirm_name: "HR컨설팅(주)",
      work: "서버·네트워크·보안,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~20년"
    },
    {
      id: 1966,
      confirm_name: "(주)코어비드넷",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1967,
      confirm_name: "(주)코어비드넷",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 1968,
      confirm_name: "(주)펄어비스",
      work: "웹개발,퍼블리싱·UI개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1969,
      confirm_name: "이지솔루션",
      work: "웹개발",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1970,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~13년"
    },
    {
      id: 1971,
      confirm_name: "(주)헤렌",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 1972,
      confirm_name: "(주)노블레스미디어인터내셔날",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 1973,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 1974,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 1975,
      confirm_name: "블루엠테크",
      work: "웹개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1976,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work:
        "TM·인바운드,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,동영상·편 집·코덱,데이터베이스·DBA,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 1977,
      confirm_name: "(주)컨셉터스",
      work: "웹개발,웹디자인,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 2~3년"
    },
    {
      id: 1978,
      confirm_name: "세렌디피티",
      work:
        "그래픽디자인·CG,출판·편집디자인,제품·산업디자인,웹기획·PM,웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1979,
      confirm_name: "(주)유니오코리아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 1980,
      confirm_name: "(주)퀄리소프트",
      work: "웹마스터·QA·테스터,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 1981,
      confirm_name: "엔터웨이파트너스",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 1982,
      confirm_name: "주식회사 게임덱스",
      work: "게임·Game,외국어·번역·통역",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1983,
      confirm_name: "(주)큐로드",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1984,
      confirm_name: "(주)드림에이치알",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 1985,
      confirm_name: "(주)아이티몰즈",
      work: "그래픽디자인·CG,설계·CAD·CAM,게임·Game",
      address: "전북 &gt; 군산시",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 1986,
      confirm_name: "(주)엘엔케이로직코리아",
      work: "웹기획·PM,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1987,
      confirm_name: "데브시스터즈(주)",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1988,
      confirm_name: "(주)에이치알인재그룹",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1989,
      confirm_name: "(주)메이킹브라더스",
      work: "기계·기계설비,설계·CAD·CAM,게임·Game",
      address: "충북 &gt; 청주시 흥덕구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1990,
      confirm_name: "(주)코핀 커뮤니케이션즈",
      work:
        "기획·전략·경영,경리·출납·결산,회계·재무·세무·IR,그래픽디자인·CG,출판·편집디자인,캐릭터 ·만화·애니,광고·시각디자인,게임·Game,웹디자인,광고·카피·CF,인쇄·출판·편집",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 1991,
      confirm_name: "라인게임즈 주식회사",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1992,
      confirm_name: "(주)카카오게임즈",
      work: "웹기획·PM,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 1993,
      confirm_name: "(주)제페토",
      work: "게임·Game",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 1994,
      confirm_name: "(주)제페토",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 1995,
      confirm_name: "(주)유니디자인경영연구소",
      work: "광고·시각디자인,게임·Game,카메라·조명·미술",
      address: "인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 1996,
      confirm_name: "(주)오르고소프트",
      work: "게임·Game,외국어·번역·통역,외국어·어학원",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1997,
      confirm_name: "(주)네시삼십삼분",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 1998,
      confirm_name: "겜툰",
      work: "게임·Game,컨텐츠·사이트운영,기자",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 1999,
      confirm_name: "어니컴(주)",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2000,
      confirm_name: "클래피게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2001,
      confirm_name: "(주)유니코써치",
      work: "게임·Game",
      address: "북·중미 &gt; 캐나다",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 2002,
      confirm_name: "(주)룽투코리아",
      work: "그래픽디자인·CG,광고·시각디자인,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2003,
      confirm_name: "(주)웨스토",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2004,
      confirm_name: "(주)인벤",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,광고영업,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,게임·Game,외국어·번역·통역,기자",
      address:
        "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2005,
      confirm_name: "(주)에스지에이부산",
      work: "게임·Game,전문직업·IT강사",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2006,
      confirm_name: "(주)페이퍼게임즈코리아",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 2007,
      confirm_name: "(주)네시삼십삼분",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2008,
      confirm_name: "(주)핑고엔터테인먼트",
      work: "게임·Game",
      address: "광주 &gt; 남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2009,
      confirm_name: "(주)펄어비스",
      work: "마케팅·광고·분석,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2010,
      confirm_name: "(주)네시삼십삼분",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2011,
      confirm_name: "주식회사 볼트러스트",
      work: "웹개발,게임·Game,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 2012,
      confirm_name: "(주)에이치알인재그룹",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2013,
      confirm_name: "(주)에이치알인재그룹",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2014,
      confirm_name: "텔로스",
      work: "그래픽디자인·CG,게임·Game",
      address: "전북 &gt; 전주시 완산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2015,
      confirm_name: "그랙션",
      work: "출판·편집디자인,캐릭터·만화·애니,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2016,
      confirm_name: "(주)펄어비스",
      work: "게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2017,
      confirm_name: "코코네주식회사(영업소)",
      work: "서버·네트워크·보안,게임·Game,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2018,
      confirm_name: "하이스트써치",
      work: "캐릭터·만화·애니,게임·Game,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2019,
      confirm_name: "하이스트써치",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2020,
      confirm_name: "하이스트써치",
      work: "웹개발,게임·Game,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2021,
      confirm_name: "하이스트써치",
      work: "서버·네트워크·보안,게임·Game,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2022,
      confirm_name: "하이스트써치",
      work: "웹기획·PM,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2023,
      confirm_name: "인플랩(주)",
      work: "게임·Game,웹디자인,동영상·편집·코덱",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2024,
      confirm_name: "(주)카카오게임즈",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2025,
      confirm_name: "(주)아성다이소",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,무역사무·수출입,기획·전략·경영,홍보 ·PR·사보,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,제품·산업디자인,캐릭터·만화·애니,의류·패션·잡화디자인,디자인기타,광고·시각디자인,일반영업,판매·매장관리,영업기획·관리·지원,고객센터·CS,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,응용프로그램개발,ERP·시스템분석·설계,웹디자인,동영상·편집·코덱,헤드헌팅·노무·직업상담,세무 ·회계·CPA,카메라·조명·미술,사회복지·요양·봉사",
      address:
        "서울 &gt; 강남구,경기 &gt; 용인시,부산 &gt; 부산전체,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2026,
      confirm_name: "(주)아이닉스소프트",
      work: "게임·Game",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2027,
      confirm_name: "(주)아이닉스소프트",
      work: "게임·Game",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2028,
      confirm_name: "(주)그라비티",
      work: "영업기획·관리·지원,게임·Game,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2029,
      confirm_name: "게임랜드주식회사 (영업소)",
      work: "그래픽디자인·CG,광고·시각디자인,게임·Game",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2030,
      confirm_name: "엔에이치엔서비스(주)",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2031,
      confirm_name: "디엔소프트(주)",
      work: "그래픽디자인·CG,게임·Game,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2032,
      confirm_name: "주식회사 토즈",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2033,
      confirm_name: "(주)이스터씨앤아이",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2034,
      confirm_name: "(주)플랜비크리에이티브",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구,서울 &gt; 성동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2035,
      confirm_name: "(주)게임펍",
      work: "게임·Game",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2036,
      confirm_name: "(주)카카오게임즈",
      work: "게임·Game,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2037,
      confirm_name: "스포라이브",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 2038,
      confirm_name: "(주)채플린게임",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2039,
      confirm_name: "(주)게임베리",
      work: "기획·전략·경영,게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2040,
      confirm_name: "(주)게임베리",
      work: "기획·전략·경영,게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2041,
      confirm_name: "(주)미디어큐빗",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2042,
      confirm_name: "(주)마상소프트",
      work: "게임·Game",
      address: "부산 &gt; 해운대구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2043,
      confirm_name: "(주)오리진스튜디오",
      work: "게임·Game,작가·시나리오",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2044,
      confirm_name: "민코넷(주)",
      work: "기획·전략·경영,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2045,
      confirm_name: "플레이큐브",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "경기 &gt; 의왕시",
      education: "학력무관",
      careear: "경력 1~3년"
    },
    {
      id: 2046,
      confirm_name: "(주)인싸이트",
      work: "상품기획·MD,게임·Game",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2047,
      confirm_name: "(주)팻마우스",
      work: "마케팅·광고·분석,영업기획·관리·지원,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2048,
      confirm_name: "(주)멀틱스",
      work: "그래픽디자인·CG,게임·Game",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2049,
      confirm_name: "(주)디에이트게임즈",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2050,
      confirm_name: "게임빌",
      work: "게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2051,
      confirm_name: "(주)온페이스게임즈",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 2052,
      confirm_name: "(주)온페이스게임즈",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 2053,
      confirm_name: "(주)온페이스게임즈",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 2054,
      confirm_name: "(주)잔디소프트",
      work: "캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2055,
      confirm_name: "(주)테라핀테크",
      work: "고객센터·CS,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2056,
      confirm_name: "주식회사 카이엔터테인먼트",
      work: "게임·Game",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2057,
      confirm_name: "(주)스마일게이트홀딩스",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,전시·컨벤션·세미나,그래픽디자인·CG,캐릭터·만화·애니,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 강남구,서울 &gt; 송파구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2058,
      confirm_name: "주식회사 호두랩스",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2059,
      confirm_name: "(주)꿈꾸는이웃",
      work: "게임·Game,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2060,
      confirm_name: "(주)마더브레인",
      work:
        "총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,광고영업,웹기획·PM,게임·Game,컨텐츠·사이트운영,웹디자인,광고·카피·CF",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2061,
      confirm_name: "에픽코리아 주식회사",
      work: "그래픽디자인·CG,전시·공간디자인,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2062,
      confirm_name: "이모션웨이브(주)",
      work: "게임·Game,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2063,
      confirm_name: "(주)아이덴티티게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력5년↑"
    },
    {
      id: 2064,
      confirm_name: "(주)아이덴티티게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2065,
      confirm_name: "주식회사 카이엔터테인먼트",
      work: "게임·Game,응용프로그램개발",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2066,
      confirm_name: "(주)지티에스골프",
      work: "그래픽디자인·CG,게임·Game",
      address: "경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2067,
      confirm_name: "(주)로켓츠게임즈",
      work: "게임·Game,응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2068,
      confirm_name: "(주)드림모션",
      work: "기획·전략·경영,게임·Game,외국어·번역·통역",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2069,
      confirm_name: "골든서퍼(주)",
      work: "그래픽디자인·CG,게임·Game,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2070,
      confirm_name: "핑거스튜디오",
      work: "게임·Game",
      address: "인천 &gt; 부평구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2071,
      confirm_name: "스포라이브",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2072,
      confirm_name: "주식회사 알레그레",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2073,
      confirm_name: "에스제이에이치스튜디오",
      work: "웹기획·PM,웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2074,
      confirm_name: "에스제이에이치스튜디오",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2075,
      confirm_name: "(주) 몬드라곤 서울IT직업전문학교지점",
      work: "게임·Game,인공지능(AI)·빅데이터,전문직업·IT강사",
      address: "서울 &gt; 서울전체,서울 &gt; 마 포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2076,
      confirm_name: "(주)아이펀팩토리",
      work: "게임·Game,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2077,
      confirm_name: "(주)올룰로",
      work: "고객센터·CS,QA·CS강사·수퍼바이저,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2078,
      confirm_name: "(주)로커스",
      work: "마케팅·광고·분석,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2079,
      confirm_name: "(주)레드벅스튜디오",
      work: "웹기획·PM,게임·Game",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2080,
      confirm_name: "그리다",
      work: "그래픽디자인·CG,캐릭터·만화·애니,게임·Game",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2081,
      confirm_name: "(주)에이스프로젝트",
      work: "그래픽디자인·CG,게임·Game,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2082,
      confirm_name: "(주)아우름",
      work: "게임·Game,인쇄·출판·편집",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2083,
      confirm_name: "데브시스터즈(주)",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 2084,
      confirm_name: "지앤아이소프트(주)",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2085,
      confirm_name: "지앤아이소프트(주)",
      work: "게임·Game",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2086,
      confirm_name: "엠더블유엔테크 주식회사",
      work: "게임·Game,컨텐츠·사이트운영,교육기획·교재",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무 관"
    },
    {
      id: 2087,
      confirm_name: "(주)베스파",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2088,
      confirm_name: "(주)큐피스트",
      work: "고객센터·CS,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2089,
      confirm_name: "주식회사 에스알유니버스",
      work: "게임·Game",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2090,
      confirm_name: "(주)디자인레벨",
      work: "기획·전략·경영,게임·Game,카메라·조명·미술",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2091,
      confirm_name: "(주)파인스태프",
      work: "웹개발,컨텐츠·사이트운영,시스템개발",
      address:
        "서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 양천구,서울 &gt; 영등포 구,서울 &gt; 은평구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구,경기 &gt; 부천시,경기 &gt; 부천시 소사구,경기 &gt; 부천시 오정구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2092,
      confirm_name: "(주)한국맨프로",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2093,
      confirm_name: "한국한인홍(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2094,
      confirm_name: "주식회사 링키지랩",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 2095,
      confirm_name: "엔터웨이파트너스",
      work: "영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~4년"
    },
    {
      id: 2096,
      confirm_name: "(주)올애즈컴퍼니",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2097,
      confirm_name: "인프라커뮤니케이션즈(주)",
      work: "사무보조·문서작성,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 관악구",
      education: "대학졸업(2,3년)이상",
      careear: " 경력무관"
    },
    {
      id: 2098,
      confirm_name: "주식회사 에어라파",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2099,
      confirm_name: "하이코디",
      work: "화학·에너지,컨텐츠·사이트운영",
      address: "대구 &gt; 달성군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2100,
      confirm_name: "주식회사 디에트팜",
      work: "상품기획·MD,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "부산 &gt; 수영구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2101,
      confirm_name: "(주)지엠홀딩스",
      work: "물류·유통·운송,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2102,
      confirm_name: "(주)지피클럽",
      work: "그래픽디자인·CG,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2103,
      confirm_name: "제일저지(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2104,
      confirm_name: "쁨클리닉",
      work:
        "해외영업·무역영업,기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,웹기획·PM,컨텐츠·사 이트운영,웹디자인,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2105,
      confirm_name: "(주)씨엠에이글로벌",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2106,
      confirm_name: "주식회사 스마일벤처스",
      work: "물류·유통·운송,기획·전략·경영,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년 ↑"
    },
    {
      id: 2107,
      confirm_name: "(주)한스월드코리아",
      work: "TM·인바운드,고객센터·CS,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2108,
      confirm_name: "뷰티나",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2109,
      confirm_name: "(주)제이엠제이",
      work: "상품기획·MD,섬유·의류·패션,컨텐츠·사이트운영",
      address: "서울 &gt; 광진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2110,
      confirm_name: "뷰티나",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2111,
      confirm_name: "(주)하이프스",
      work: "물류·유통·운송,컨텐츠·사이트운영",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2112,
      confirm_name: "소아벨라",
      work: "판매·매장관리,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2113,
      confirm_name: "(주)아구스팩토리",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2114,
      confirm_name: "(주)트랜스코스모스코리아",
      work:
        "TM·아웃바운드,TM·인바운드,고객센터·CS,컨텐츠·사이트운영,외국어·번역·통역",
      address:
        "서울 &gt; 강북구,서울 &gt; 구로구,서울 &gt; 용산구,서울 &gt; 은평구,서울 &gt; 중구,경기 &gt; 고양시 덕양구,경기 &gt; 광명시,경기 &gt; 부천시,경기 &gt; 수원시,경기 &gt; 안양시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2115,
      confirm_name: "소아벨라",
      work: "판매·매장관리,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2116,
      confirm_name: "다담다 주식회사",
      work: "TM·인바운드,컨텐츠·사이트운영",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2117,
      confirm_name: "(주)자바네트웍스",
      work: "AS·서비스·수리,컨텐츠·사이트운영,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2118,
      confirm_name: "(주)다니카",
      work: "경리·출납·결산,컨텐츠·사이트운영",
      address: "경기 &gt; 김포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2119,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2120,
      confirm_name: "(주)트랜스코스모스코리아",
      work:
        "웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "학력무 관",
      careear: "경력무관"
    },
    {
      id: 2121,
      confirm_name: "필네이처(주)",
      work: "상품기획·MD,컨텐츠·사이트운영",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 관악구,서울 &gt; 송파구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구,경기 &gt; 용인시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2122,
      confirm_name: "(주)인스토어",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2123,
      confirm_name: "씨씨펫(주)",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "경기 &gt; 안양시 만안구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 2124,
      confirm_name: "(주)위즈애드",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2125,
      confirm_name: "(주)주연홈쇼핑",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2126,
      confirm_name: "몬스터(주)",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2127,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2128,
      confirm_name: "엔터웨이파트너스",
      work: "그래픽디자인·CG,광고·시각디자인,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2129,
      confirm_name: "(주)와이디",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 김포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2130,
      confirm_name: "(주)포에버링",
      work: "비서·안내·수행원,사무보조·문서작성,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 2~7년"
    },
    {
      id: 2131,
      confirm_name: "알렌 컴퍼니(ALLEN COMPANY)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2132,
      confirm_name: "이엘마케팅",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "인천 &gt; 미추홀구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2133,
      confirm_name: "진원에프엠(주)",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2134,
      confirm_name: "(주)스탭솔루션",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2135,
      confirm_name: "(주)방주",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2136,
      confirm_name: "주식회사 이상투자그룹",
      work: "사무보조·문서작성,컨텐츠·사이트운영,기자",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2137,
      confirm_name: "설성푸드 주식회사",
      work: "마케팅·광고·분석,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2138,
      confirm_name: "주식회사 유니드",
      work: "상품기획·MD,컨텐츠·사이트운영",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2139,
      confirm_name: "(주)나무인터내셔널",
      work: "상품기획·MD,기획·전략·경영,컨텐츠·사이트운영",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2140,
      confirm_name: "(주)키스템프",
      work: "광고·시각디자인,컨텐츠·사이트운영,영화제작·배급",
      address:
        "서울 &gt; 서울전체,서울 &gt; 마포구,서울 &gt; 서대문구, 서울 &gt; 은평구,서울 &gt; 종로구,경기 &gt; 고양시,경기 &gt; 고양시 덕양구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2141,
      confirm_name: "(주)마이에듀",
      work: "컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2142,
      confirm_name: "위시컴퍼니(주)",
      work: "컨텐츠·사이트운영,카메라·조명·미술,방송연출·PD·감독",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2143,
      confirm_name: "건솔루션(주)",
      work: "컨텐츠·사이트운영,ERP·시스템분석·설계",
      address: "경기 &gt; 안양시 만안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 2144,
      confirm_name: "(주)인디앤드코리아",
      work:
        "상품기획·MD,일반영업,영업기획·관리·지원,서버·네트워크·보안,웹개발,컨텐츠·사이트운영",
      address:
        "경기 &gt;  부천시,경기 &gt; 시흥시,경기 &gt; 안산시,인천 &gt; 연수구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2145,
      confirm_name: "애플마트",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2146,
      confirm_name: "(주)퍼즐사랑",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 구리시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2147,
      confirm_name: "(주)오유인터내셔널",
      work:
        "상품기획·MD,경리·출납·결산,홍보·PR·사보,마케팅·광고·분석,일반영업,판매·매장관리,영업기획·관 리·지원,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2148,
      confirm_name: "(주)컴퓨터랜드",
      work: "일반영업,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2149,
      confirm_name: "(주)스퍼셀",
      work: "사무보조·문서작성,디자인기타,컨텐츠·사이트운영",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2150,
      confirm_name: "(주)프로매치코리아",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년) 이상",
      careear: "경력5년↑"
    },
    {
      id: 2151,
      confirm_name: "(주)스퍼셀",
      work: "구매·자재·재고,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2152,
      confirm_name: "(주)모티브플럭스인터렉티브",
      work:
        "그래픽디자인·CG,디자인기타,광고·시각디자인,웹기획·PM,게임·Game,컨텐츠·사이트운영,웹디자 인,동영상·편집·코덱",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2153,
      confirm_name: "(주)온엑스",
      work:
        "물류·유통·운송,구매·자재·재고,상품기획·MD,중장비·화물,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 수원시,경기 &gt; 수원시 팔달구,경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2154,
      confirm_name: "이스트웨스트(주)",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로 그램개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 영도구,경남 &gt; 경남전체",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2155,
      confirm_name: "(주)벨페스타",
      work: "상품기획·MD,고객센터·CS,컨텐츠·사이트운영",
      address: "경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2156,
      confirm_name: "에이치컴퍼니",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 수영구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2157,
      confirm_name: "재이앤재이(주)",
      work: "그래픽디자인·CG,컨텐츠·사이트운영",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2158,
      confirm_name: "(주)에이프릴컴퍼니",
      work: "마케팅·광고·분석,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2159,
      confirm_name: "(주)유니씨앤씨",
      work:
        "물류·유통·운송,구매·자재·재고,총무·법무·사무,사무보조·문서작성,마케팅·광고·분석,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 용산구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2160,
      confirm_name: "어스",
      work: "컨텐츠·사이트운영",
      address: "세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2161,
      confirm_name: "비비트리(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2162,
      confirm_name: "(주)대성문",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개 발,퍼블리싱·UI개발",
      address:
        "부산 &gt; 부산전체,부산 &gt; 사하구,부산 &gt; 연제구,부산 &gt; 영도구,울산 &gt; 남구,경남 &gt; 거제 시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 2163,
      confirm_name: "(주)드림커머스",
      work: "TM·아웃바운드,컨텐츠·사이트운영",
      address: "경기 &gt; 의정부시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2164,
      confirm_name: "(주)바이럴마케팅",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,광고·카피·CF",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2165,
      confirm_name: "(주)알볼로에프앤씨",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,홍보·PR·사보,외식·식음료,요리·제빵사·영양사,인사 ·교육·노무,마케팅·광고·분석,광고·시각디자인,일반영업,판매·매장관리,영업기획·관리·지원,QA·CS강사·수퍼바이저,생 산관리·품질관리,바이오·제약·식품,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,데이터베이스·DBA,경영분석·컨설턴트,설문·통계·리서치,법률·특허·상표,연구소·R&D,교육기획·교재,부동산·개발·경매·분양",
      address: "서울 &gt; 서울전체,서울 &gt; 양천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2166,
      confirm_name: "오브잇겟주식회사",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2167,
      confirm_name: "(주)유엔제이코리아",
      work: "기술영업,TM·인바운드,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2168,
      confirm_name: "포시티",
      work: "납품·배송·택배,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2169,
      confirm_name: "(주)팍스넷",
      work: "기획·전략·경영,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2170,
      confirm_name: "(주)다비앙",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2171,
      confirm_name: "(주)희현아이티",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 6~15년"
    },
    {
      id: 2172,
      confirm_name: "아이헤이트플라잉버그스(주)",
      work: "일반영업,컨텐츠·사이트운영,외국어·어학원",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2173,
      confirm_name: "(주)에프이씨",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 2174,
      confirm_name: "(주)피엘에스파츠",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2175,
      confirm_name: "주식회사 컴스웨이",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2176,
      confirm_name: "주식회사 컴스웨이",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2177,
      confirm_name: "(주)위더스애드",
      work:
        "기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니, 광고·시각디자인,일반영업,광고영업,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,작가·시나리오,광고·카피·CF,방송연출·PD·감독",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2178,
      confirm_name: "주식회사 아이누리",
      work: "물류·유통·운송,상품기획·MD,컨텐츠·사이트운영",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2179,
      confirm_name: "(주)컨셉터스",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2180,
      confirm_name: "(주)에스제이더블유인터내셔널",
      work:
        "TM·인바운드,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,웹디자인,동영상·편 집·코덱,데이터베이스·DBA,교육기획·교재,외국어·어학원",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2181,
      confirm_name: "(주)케이포터 한국지사",
      work:
        "물류·유통·운송,상품기획·MD,기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,의류·패션· 잡화디자인,일반영업,영업기획·관리·지원,컨텐츠·사이트운영,설문·통계·리서치",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 양천구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2182,
      confirm_name: "(주)아리아스트레이드",
      work: "판매·매장관리,컨텐츠·사이트운영",
      address: "인천 &gt; 남동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2183,
      confirm_name: "(주)아리아스트레이드",
      work: "판매·매장관리,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2184,
      confirm_name: "주식회사 디케이티",
      work: "영업기획·관리·지원,컨텐츠·사이트운영,웹디자인",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2185,
      confirm_name: "(주)펫츠비",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2186,
      confirm_name: "(주)그린웹서비스",
      work: "사무보조·문서작성,컨텐츠·사이트운영,도서관사서",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서 울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2187,
      confirm_name: "(주)포탈하이웨이",
      work:
        "상품기획·MD,경리·출납·결산,의류·패션·잡화디자인,일반영업,판매·매장관리,영업기획·관리·지원,컨텐 츠·사이트운영",
      address:
        "서울 &gt; 광진구,서울 &gt; 서초구,경기 &gt; 남양주시,경기 &gt; 부천시,경기 &gt; 수원시,경기 &gt; 오산시, 경기 &gt; 평택시,충남 &gt; 아산시,충남 &gt; 천안시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2188,
      confirm_name: "(주)구구스영남",
      work: "컨텐츠·사이트운영,카메라·조명·미술,사진·포토그라퍼",
      address: "대구 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2189,
      confirm_name: "(주)마이에듀",
      work: "컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2190,
      confirm_name: "(주)준광아이티",
      work: "경리·출납·결산,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2191,
      confirm_name: "더피피",
      work: "컨텐츠·사이트운영,웹디자인",
      address:
        "서울 &gt; 서울전체,서울 &gt; 광진구,서울 &gt; 노원구,서울 &gt; 동대문구,서울 &gt; 중 랑구,경기 &gt; 경기전체,경기 &gt; 남양주시,경기 &gt; 의정부시",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2192,
      confirm_name: "(주)진원무역",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2193,
      confirm_name: "스토리재팬",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2194,
      confirm_name: "(주)엠스토리허브",
      work:
        "해외영업·무역영업,무역사무·수출입,캐릭터·만화·애니,컨텐츠·사이트운영,외국어·번역·통역",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2195,
      confirm_name: "스토리재팬",
      work: "화학·에너지,컨텐츠·사이트운영",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2196,
      confirm_name: "(주)르누베르",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "전북 &gt; 익산시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2197,
      confirm_name: "현진이앤에스 주식회사",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2198,
      confirm_name: "삼소니",
      work: "컨텐츠·사이트운영",
      address: "경기 &gt; 평택시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2199,
      confirm_name: "(주)유빅스컴퓨팅",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2200,
      confirm_name: "원진바른얼굴치과의원",
      work: "사무보조·문서작성,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2201,
      confirm_name: "포커스미디어코리아(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2202,
      confirm_name: "(주)헬로서치",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2203,
      confirm_name: "빌포스트(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 광진구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2204,
      confirm_name: "사이버이메지네이션",
      work: "응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2205,
      confirm_name: "(주)솔루션에이",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 2206,
      confirm_name: "(주)솔루션에이",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "석사졸업이상",
      careear: "경력 5~15년"
    },
    {
      id: 2207,
      confirm_name: "(주)엔텍정보통신",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2208,
      confirm_name: "파워에이치알",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2209,
      confirm_name: "SMALLWORLD",
      work: "웹개발,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2210,
      confirm_name: "전주대학교",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,도서관사서,교육기획·교재,대학교수·행정직",
      address: "전북 &gt; 전북전체,전북 &gt; 전주시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2211,
      confirm_name: "(주)비비파트너스",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2212,
      confirm_name: "엠아이큐브솔루션(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 무관"
    },
    {
      id: 2213,
      confirm_name: "(주)컴트루테크놀로지",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: " 신입/경력"
    },
    {
      id: 2214,
      confirm_name: "(주)온피아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2215,
      confirm_name: "(주)선테크",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 2216,
      confirm_name: "(주)글로벌에이치알코리아",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2217,
      confirm_name: "케이포시큐리티(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2218,
      confirm_name: "(주)지엔테크",
      work: "전기·전자·제어,반도체·디스플레이·LCD,응용프로그램개발",
      address: "경북 &gt; 경북전체,경북 &gt; 경주시",
      education: "대학졸업(2,3 년)이상",
      careear: "경력무관"
    },
    {
      id: 2219,
      confirm_name: "탑커리어인사이트",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 2220,
      confirm_name: "(주)트윔",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "경기 &gt; 화성시",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 2221,
      confirm_name: "HR컨설팅(주)",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2222,
      confirm_name: "NHN(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2223,
      confirm_name: "(주)탑앤스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이 상",
      careear: "경력무관"
    },
    {
      id: 2224,
      confirm_name: "(주)엠포스",
      work: "응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 4~6년"
    },
    {
      id: 2225,
      confirm_name: "제이피아이 헬스케어(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이 상",
      careear: "경력5년↑"
    },
    {
      id: 2226,
      confirm_name: "(주)HR컨설팅그룹",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2227,
      confirm_name: "아이쓰리시스템(주)",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2228,
      confirm_name: "인포그램 주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2229,
      confirm_name: "알에셋마스터리스(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2230,
      confirm_name: "(주)도우테크",
      work: "웹마스터·QA·테스터,웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년 ↑"
    },
    {
      id: 2231,
      confirm_name: "주식회사 코어라운드",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2232,
      confirm_name: "(주)탑앤스카우트",
      work: "기획·전략·경영,응용프로그램개발",
      address: "서울 &gt; 서초구,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~9년"
    },
    {
      id: 2233,
      confirm_name: "(주)엠젠",
      work: "응용프로그램개발",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2234,
      confirm_name: "(주)파이온즈",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2235,
      confirm_name: "(주)파이온즈",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2236,
      confirm_name: "(주)페어",
      work: "응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2237,
      confirm_name: "(주)케이씨이아이",
      work: "응용프로그램개발",
      address: "서울 &gt; 구로구,대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2238,
      confirm_name: "(주)맨토스파워",
      work: "응용프로그램개발",
      address: "서울 &gt; 마포구,서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2239,
      confirm_name: "(주)에스에이티",
      work: "응용프로그램개발",
      address: "경기 &gt; 군포시",
      education: "석사졸업이상",
      careear: "경력5년↑"
    },
    {
      id: 2240,
      confirm_name: "(주)커머스웨어",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 2241,
      confirm_name: "(주)연우테크놀러지",
      work: "응용프로그램개발,데이터베이스·DBA,건축·인테리어·설계",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2242,
      confirm_name: "(주)인터파크비즈마켓",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2243,
      confirm_name: "(주)지넷시스템",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2244,
      confirm_name: "(주)미래정보기술",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 2245,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2246,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2247,
      confirm_name: "(주)에스에스비정보기술",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2248,
      confirm_name: "(주)티티에스",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2249,
      confirm_name: "HR네트워크",
      work: "응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 2250,
      confirm_name: "(주)원익로보틱스",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2251,
      confirm_name: "(주)오케이포스",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2252,
      confirm_name: "(주)비비파트너스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 2253,
      confirm_name: "주식회사 커리어라임즈",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2254,
      confirm_name: "관세법인 천지인",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 2255,
      confirm_name: "(주)이노에이치알컨설팅그룹",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 2256,
      confirm_name: "(주)제이엔에스",
      work: "기계·기계설비,전기·전자·제어,응용프로그램개발",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 2257,
      confirm_name: "스냅스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2258,
      confirm_name: "베스트네트워크(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 2259,
      confirm_name: "그랙션",
      work: "캐릭터·만화·애니,게임·Game,응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2260,
      confirm_name: "(주)렛시",
      work: "기획·전략·경영,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2261,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2262,
      confirm_name: "(주)브레인커머스",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2263,
      confirm_name: "(주)빅케어리저브",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 동작구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2264,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2265,
      confirm_name: "(주)카카오페이",
      work: "웹마스터·QA·테스터,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2266,
      confirm_name: "(주)제이엠에스컨설팅",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2267,
      confirm_name: "시어스랩",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2268,
      confirm_name: "SCI평가정보(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 2269,
      confirm_name: "주식회사 이커머스테크",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력9년↑"
    },
    {
      id: 2270,
      confirm_name: "라인게임즈 주식회사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2271,
      confirm_name: "아이텍(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2272,
      confirm_name: "(주)베스트에치알 (Best HR)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "인천 &gt; 인천전체,인천 &gt; 부평구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2273,
      confirm_name: "팅크웨어(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2274,
      confirm_name: "주식회사 위저드",
      work: "응용프로그램개발,인공지능(AI)·빅데이터,외국어·번역·통역",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2275,
      confirm_name: "엔터웨이파트너스",
      work: "전기·전자·제어,응용프로그램개발,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 2276,
      confirm_name: "커리어케어",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 9~20년"
    },
    {
      id: 2277,
      confirm_name: "헌터스그룹",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~12년"
    },
    {
      id: 2278,
      confirm_name: "유비벨록스(주)",
      work: "기획·전략·경영,인사·교육·노무,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2279,
      confirm_name: "한일네트웍스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2280,
      confirm_name: "한일네트웍스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2281,
      confirm_name: "(주)제로웹",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2282,
      confirm_name: "(주)조인시스",
      work: "응용프로그램개발",
      address: "경기 &gt; 고양시 일산동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2283,
      confirm_name: "(주)팍트라인터내셔널",
      work: "물류·유통·운송,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2284,
      confirm_name: "한아이덴티티",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2285,
      confirm_name: "(주)인동에프엔",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~6년"
    },
    {
      id: 2286,
      confirm_name: "(주)인텍솔루션",
      work: "웹개발,응용프로그램개발",
      address:
        "경기 &gt; 경기전체,경기 &gt; 오산시,경기 &gt; 평택시,충남 &gt; 충남전체,충남 &gt; 아산시,충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 2287,
      confirm_name: "주식회사 대건소프트",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2288,
      confirm_name: "(주)위드피플",
      work: "웹개발,응용프로그램개발",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 2289,
      confirm_name: "(주)프리다임",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 의왕시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2290,
      confirm_name: "네모시스템즈",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 2291,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구,경기 &gt; 이천시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2292,
      confirm_name: "(주)판도라티비",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2293,
      confirm_name: "(주)위비스",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~11년"
    },
    {
      id: 2294,
      confirm_name: "(주)리얼시큐",
      work: "응용프로그램개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 2295,
      confirm_name: "영인에이스 주식회사",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2296,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2297,
      confirm_name: "(주)에이치엔에스커뮤니케이션",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2298,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구,경기 &gt; 고양시 일산동구,경기 &gt; 이 천시",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 2299,
      confirm_name: "국립낙동강생물자원관",
      work:
        "운전·기사,총무·법무·사무,가사·청소·육아,인사·교육·노무,회계·재무·세무·IR,응용프로그램개발,교육기획·교재,토목·조경·도시·측량,안전·품질·검사·관리",
      address: "경북 &gt; 상주시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2300,
      confirm_name: "(주)모빌씨앤씨",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2301,
      confirm_name: "주식회사 북레일",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2302,
      confirm_name: "주식회사 리치솔루션",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2303,
      confirm_name: "글로우데이즈",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2304,
      confirm_name: "(주)서울문고",
      work: "응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2305,
      confirm_name: "(주)인포젠",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경북 &gt; 구미시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~20년"
    },
    {
      id: 2306,
      confirm_name: "우미건설(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계,본사·관리·전산",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2307,
      confirm_name: "(주)드림시큐리티",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~5년"
    },
    {
      id: 2308,
      confirm_name: "(주)인사이드알에프",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2309,
      confirm_name: "스마트스터디(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2310,
      confirm_name: "(주)인큐브시스템",
      work: "응용프로그램개발",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 2311,
      confirm_name: "(주)이노씨앤에스",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 고양시 덕양구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2312,
      confirm_name: "주식회사 테크맥스",
      work: "영업기획·관리·지원,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2313,
      confirm_name: "썬더소프트 코리아",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2314,
      confirm_name: "썬더소프트 코리아",
      work: "전기·전자·제어,시스템개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 2315,
      confirm_name: "(주)셀프라스디자인센터",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2316,
      confirm_name: "(주)핀커스코리아",
      work: "기획·전략·경영,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~15년"
    },
    {
      id: 2317,
      confirm_name: "현대코어모션",
      work:
        "회계·재무·세무·IR,전기·전자·제어,설계·CAD·CAM,시스템개발,세무·회계·CPA,연구소·R&D,전기·소방·통 신·설비",
      address: "경기 &gt; 성남시 분당구,울산 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 2318,
      confirm_name: "현대코어모션",
      work:
        "기획·전략·경영,회계·재무·세무·IR,기계·기계설비,전기·전자·제어,시스템개발",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 용인시,울산 &gt; 울산전체,충북 &gt; 음성군",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2319,
      confirm_name: "(주)이엠웨이브",
      work: "시스템개발,통신·모바일,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 수정구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2320,
      confirm_name: "한화시스템/시스템",
      work:
        "구매·자재·재고,회계·재무·세무·IR,간호사,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨 어·소프트웨어,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,경기 &gt; 성남시 분당구,경기 &gt; 용인시,경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2321,
      confirm_name: "성광의료재단 차병원",
      work:
        "기획·전략·경영,인사·교육·노무,마케팅·광고·분석,그래픽디자인·CG,사무·원무·코디,영업기획·관 리·지원,생산관리·품질관리,바이오·제약·식품,웹개발,시스템개발,웹디자인,연구소·R&D",
      address:
        "서울 &gt; 강남구,서울 &gt; 용산구,경기 &gt; 고양시,경기 &gt; 성남시 분당구,경기 &gt; 시흥시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2322,
      confirm_name: "(주)하나텍시스템",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 광명시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2323,
      confirm_name: "퀘스트글로벌코리아 유한회사",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 2324,
      confirm_name: "퀘스트글로벌코리아 유한회사",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 2325,
      confirm_name: "(주)위메프",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2326,
      confirm_name: "(주)에코써치",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~15년"
    },
    {
      id: 2327,
      confirm_name: "(주)나온웍스",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2328,
      confirm_name: "스카우트피플",
      work: "시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2329,
      confirm_name: "(주)넷맨",
      work:
        "총무·법무·사무,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,그래픽디자인·CG,광고·시각디자인,일 반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발, 하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 금천구,대구 &gt; 대구전체,대구 &gt; 수성구",
      education: " 학력무관",
      careear: "신입/경력"
    },
    {
      id: 2330,
      confirm_name: "(주)테크너",
      work: "웹마스터·QA·테스터,응용프로그램개발,시스템개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2331,
      confirm_name: "주식회사 위저드",
      work: "전기·전자·제어,서버·네트워크·보안,시스템개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 2332,
      confirm_name: "(주)에이다스원",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2333,
      confirm_name: "(주)씨앤에이코리아",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~9년"
    },
    {
      id: 2334,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2335,
      confirm_name: "주식회사 사이테크놀로지",
      work: "응용프로그램개발,시스템개발",
      address: "전남 &gt; 나주시",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2336,
      confirm_name: "(주)해커스교육그룹",
      work:
        "물류·유통·운송,구매·자재·재고,기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보, 사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니,광고·시각디자인,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,QA·CS강사·수퍼바이저,전기·전 자·제어,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역· 통역,연구소·R&D,교육기획·교재,학원관리·운영·상담,외국어·어학원,카메라·조명·미술,광고·카피·CF,방송연출·PD·감독,인쇄·출판·편집,전기·소방·통신·설비,안전·품질·검사·관리",
      address:
        "서울 &gt; 강남구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 송파구,서울 &gt; 영등포구,서울 &gt; 종로구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2337,
      confirm_name: "(주)해커스교육그룹",
      work:
        "회계·재무·세무·IR,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베 이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2338,
      confirm_name: "(주)한맥아이피에스",
      work:
        "AS·서비스·수리,일반영업,IT·솔루션영업,기술영업,전기·전자·제어,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA",
      address:
        "경기 &gt; 성남시 분당구,광주 &gt; 광주전체,광 주 &gt; 광산구,대구 &gt; 대구전체,대구 &gt; 수성구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2339,
      confirm_name: "(주)해커스교육그룹",
      work:
        "서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2340,
      confirm_name: "컴트리",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2341,
      confirm_name: "INTERLINE주식회사",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "일본 &gt; 도쿄",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2342,
      confirm_name: "(주)서울데이타시스템",
      work: "서버·네트워크·보안,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2343,
      confirm_name: "에이엠텔레콤(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2344,
      confirm_name: "(주)세보시스템즈",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서 울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2345,
      confirm_name: "(주)솔리티",
      work: "상품기획·MD,전기·전자·제어,시스템개발",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2346,
      confirm_name: "주식회사 디벨로퍼그룹",
      work: "서버·네트워크·보안,웹개발,시스템개발",
      address: "대전 &gt; 서구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2347,
      confirm_name: "(주)제트에이치티",
      work: "시스템개발,연구소·R&D",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2348,
      confirm_name: "국가보안기술연구소",
      work:
        "기획·전략·경영,총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,전기·전자·제어,서버·네트워크·보안,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,IT·디자인·컴퓨터교육,연구소·R&D",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2349,
      confirm_name: "(주)한컴MDS",
      work: "기술영업,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2350,
      confirm_name: "(주)휴먼트리월드와이드",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2351,
      confirm_name: "(주)휴먼트리월드와이드",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2352,
      confirm_name: "(주)휴먼트리월드와이드",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2353,
      confirm_name: "(주)휴먼트리월드와이드",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2354,
      confirm_name: "(주)휴먼트리월드와이드",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~11년"
    },
    {
      id: 2355,
      confirm_name: "주식회사 피플케어코리아",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강북구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10 년"
    },
    {
      id: 2356,
      confirm_name: "디오티스",
      work: "서버·네트워크·보안,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 2357,
      confirm_name: "(주)플루토솔루션",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2358,
      confirm_name: "(주)맨파워그룹코리아",
      work: "반도체·디스플레이·LCD,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 2359,
      confirm_name: "노츠주식회사",
      work: "웹마스터·QA·테스터,시스템개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2360,
      confirm_name: "(주)맨파워그룹코리아",
      work: "응용프로그램개발,시스템개발,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2361,
      confirm_name: "(주)텔레칩스",
      work:
        "해외영업·무역영업,구매·자재·재고,기획·전략·경영,총무·법무·사무,기술영업,영업기획·관리·지원,전기· 전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2362,
      confirm_name: "SK하이닉스",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "경기 &gt; 이천시",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2363,
      confirm_name: "SK하이닉스",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "경기 &gt; 이천시,충북 &gt; 청주시",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2364,
      confirm_name: "자비스테크",
      work: "시스템개발,하드웨어·소프트웨어",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안양시,경기 &gt; 안양시 동안구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2365,
      confirm_name: "자비스테크",
      work: "기술영업,시스템개발,하드웨어·소프트웨어",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안양시,경기 &gt; 안양시 동안구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2366,
      confirm_name: "(주)게스",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2367,
      confirm_name: "닥터애니케어(주)",
      work: "시스템개발,통신·모바일",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2368,
      confirm_name: "팅크웨어(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2369,
      confirm_name: "한국표준협회",
      work:
        "그래픽디자인·CG,전기·전자·제어,설계·CAD·CAM,응용프로그램개발,시스템개발,통신·모바일,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체,경기 &gt; 용인시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2370,
      confirm_name: "(주)테크너",
      work: "웹마스터·QA·테스터,응용프로그램개발,시스템개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~14년"
    },
    {
      id: 2371,
      confirm_name: "(주)이씨스",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2372,
      confirm_name: "(주)아이에이알시스템즈코리아",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2373,
      confirm_name: "지에스엘텍",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 대덕구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2374,
      confirm_name: "(주)휴먼디지탈",
      work: "시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2375,
      confirm_name: "(주)탑앤스카우트",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2376,
      confirm_name: "(주)온피아",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2377,
      confirm_name: "(주)대주메디테크엔지니어링",
      work: "반도체·디스플레이·LCD,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2378,
      confirm_name: "(주)에스엔테크놀로지",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학 졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2379,
      confirm_name: "(주)HR컨설팅그룹",
      work: "반도체·디스플레이·LCD,설계·CAD·CAM,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2380,
      confirm_name: "(주)인프로",
      work: "시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2381,
      confirm_name: "에스아이오티(주)",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2382,
      confirm_name: "(주)커리어앤스카우트",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "인천 &gt; 남동구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2383,
      confirm_name: "(주)포텍",
      work: "응용프로그램개발,시스템개발",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2384,
      confirm_name: "(주)아메바",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2385,
      confirm_name: "노리시스템(주)",
      work: "컨텐츠·사이트운영,시스템개발,하드웨어·소프트웨어",
      address:
        "충남 &gt; 아산시,충남 &gt; 천안시,충남 &gt; 천안시 동 남구,충남 &gt; 천안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2386,
      confirm_name: "스마클(주)",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2387,
      confirm_name: "(주)썬플라워즈",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "인천 &gt; 부평구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2388,
      confirm_name: "(주)하솜정보기술",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2389,
      confirm_name: "(주)세이프웨이",
      work: "전기·전자·제어,설계·CAD·CAM,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2390,
      confirm_name: "네이버비즈니스플랫폼(주)",
      work:
        "IT·솔루션영업,기술영업,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP ·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2391,
      confirm_name: "(주)메티스",
      work: "기술영업,시스템개발",
      address: "충남 &gt; 천안시 동남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2392,
      confirm_name: "(주)힐링페이퍼",
      work:
        "해외영업·무역영업,마케팅·광고·분석,TM·아웃바운드,TM·인바운드,전기·전자·제어,웹개발,응용프로그램개 발,시스템개발,통신·모바일,퍼블리싱·UI개발,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2393,
      confirm_name: "대영채비(주)",
      work: "시스템개발,하드웨어·소프트웨어,웹디자인",
      address: "대구 &gt; 달성군",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2394,
      confirm_name: "(주)코리아센터",
      work: "서버·네트워크·보안,웹개발,시스템개발",
      address: "서울 &gt; 금천구,경기 &gt; 광명시",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2395,
      confirm_name: "이노넷(주)",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2396,
      confirm_name: "(주)가스트론",
      work:
        "납품·배송·택배,경리·출납·결산,회계·재무·세무·IR,일반영업,기술영업,영업기획·관리·지원,화학·에너지,전기·전자·제어,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,시스템개발,외국어·번역·통역,연구소·R&D,환경·플랜트",
      address: "경기 &gt; 군포시,부산 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2397,
      confirm_name: "(주)케이엘씨앤에스",
      work: "서버·네트워크·보안,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2398,
      confirm_name: "(주)에버스핀",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2399,
      confirm_name: "원캐스트",
      work: "응용프로그램개발,시스템개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2400,
      confirm_name: "(주)바디프랜드",
      work: "기계·기계설비,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2401,
      confirm_name: "주식회사 엠펙스 메디칼",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2402,
      confirm_name: "(주)오큐브이엔지",
      work: "시스템개발,하드웨어·소프트웨어",
      address:
        "경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 수원시,경기 &gt; 안 양시,경기 &gt; 용인시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2403,
      confirm_name: "(주)아이시에스솔루션스",
      work: "전기·전자·제어,시스템개발",
      address: "인천 &gt; 인천전체,인천 &gt; 연수구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2404,
      confirm_name: "(주)다보링크",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2405,
      confirm_name: "(주)브라이센코리아",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 팔달구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년 ↑"
    },
    {
      id: 2406,
      confirm_name: "테크브릿지",
      work: "전기·전자·제어,시스템개발",
      address: "충북 &gt; 청주시 청원구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2407,
      confirm_name: "(주)세보시스템즈",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2408,
      confirm_name: "(주)나연테크",
      work: "응용프로그램개발,시스템개발,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2409,
      confirm_name: "(주)아이펜",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2410,
      confirm_name: "주식회사 네스텍",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2411,
      confirm_name: "(주)넥스트아이씨티",
      work: "웹개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2412,
      confirm_name: "(주)멀티캠퍼스",
      work:
        "설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2413,
      confirm_name: "(주)길온",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2414,
      confirm_name: "(주)비덴트",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2415,
      confirm_name: "주식회사 윈텍",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 광명시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2416,
      confirm_name: "주식회사 큐버",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2417,
      confirm_name: "(주)윈텍에스에이",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2418,
      confirm_name: "주식회사 큐버",
      work: "시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~15년"
    },
    {
      id: 2419,
      confirm_name: "주식회사 큐버",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2420,
      confirm_name: "퀘스트글로벌코리아 유한회사",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/ 경력"
    },
    {
      id: 2421,
      confirm_name: "(주)소프트허브",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2422,
      confirm_name: "(주)엠코프",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강동구",
      education: "대학교졸업(4 년)이상",
      careear: "경력무관"
    },
    {
      id: 2423,
      confirm_name: "(주)온페이스에스디씨",
      work: "ERP·시스템분석·설계",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 2424,
      confirm_name: "(주)마크로젠",
      work:
        "기획·전략·경영,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,일반영업,기술영업,영업기획·관리 ·지원,바이오·제약·식품,응용프로그램개발,시스템개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2425,
      confirm_name: "(주)카마드",
      work:
        "사무보조·문서작성,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,퍼블리싱·UI개발,대학교수·행정직,본사·관리·전산",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2426,
      confirm_name: "(주)베네통코리아",
      work:
        "해외영업·무역영업,무역사무·수출입,사무보조·문서작성,회계·재무·세무·IR,의류·패션·잡화디자인,디자인기타,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2427,
      confirm_name: "(주)인큐브시스템",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 양천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2428,
      confirm_name: "엔터웨이파트너스",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2429,
      confirm_name: "(주)인큐브시스템",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 2430,
      confirm_name: "(주) 쓰리뷰",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력무 관"
    },
    {
      id: 2431,
      confirm_name: "(주)벨아이앤에스",
      work:
        "IT·솔루션영업,기술영업,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA, 인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서대문구,경기 &gt; 안산시,경기 &gt; 안산시 단원구,충남 &gt; 천안시, 충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2432,
      confirm_name: "(주)넥스트아이씨티",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 강서구,서울 &gt; 구로구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2433,
      confirm_name: "주식회사 케이에이치에이",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2434,
      confirm_name: "(주)하나금융티아이",
      work:
        "인사·교육·노무,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,채권·보험·보상·심사",
      address:
        "서울 &gt; 강남구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 고양시,인천 &gt; 인천전체,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 2435,
      confirm_name: "(주)레디엔터테인먼트",
      work: "서버·네트워크·보안,웹기획·PM,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2436,
      confirm_name: "울산직업전문학교",
      work:
        "물류·유통·운송,무역사무·수출입,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,생산관리·품질관리,설계·CAD·CAM,ERP·시스템분석·설계",
      address: "울산 &gt; 울산전체,울산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2437,
      confirm_name: "(주)종근당바이오",
      work:
        "물류·유통·운송,약사,생산관리·품질관리,바이오·제약·식품,ERP·시스템분석·설계,연구소·R&D",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안산시,경기 &gt; 안산시 단원구,충남 &gt; 충남전체,충남 &gt; 예산군",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2438,
      confirm_name: "(주)스카우트",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2439,
      confirm_name: "터닝포인트HR",
      work: "마케팅·광고·분석,ERP·시스템분석·설계",
      address: "부산 &gt; 사하구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2440,
      confirm_name: "터닝포인트HR",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "아시아·중동 &gt; 베트남",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2441,
      confirm_name: "터닝포인트HR",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "아시아·중동 &gt; 베트남",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2442,
      confirm_name: "뉴젠홀딩스(주)",
      work: "IT·솔루션영업,영업기획·관리·지원,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2443,
      confirm_name: "(주)위메프",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2444,
      confirm_name: "뉴젠홀딩스(주)",
      work: "ERP·시스템분석·설계",
      address: "부산 &gt; 부산전체,부산 &gt; 부산진구,경남 &gt; 경남전체",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2445,
      confirm_name: "(주)아이트리온",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2446,
      confirm_name: "엘비텍(주)",
      work:
        "사무보조·문서작성,일반영업,IT·솔루션영업,영업기획·관리·지원,웹개발,응용프로그램개발,시스템개발,ERP·시스 템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2447,
      confirm_name: "(주)크린컨테크",
      work: "사무보조·문서작성,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력10년↑"
    },
    {
      id: 2448,
      confirm_name: "주식회사 피플케어코리아",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력13년↑"
    },
    {
      id: 2449,
      confirm_name: "CW Grp",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address:
        "유럽 &gt; 체코,유럽 &gt; 폴란드,유럽 &gt; 헝가리,유럽 &gt; 슬로바키아",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2450,
      confirm_name: "한국철도시설공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,보안·경호·안전,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,고객센터·CS,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,세무·회계·CPA,토 목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리,부동산· 개발·경매·분양",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2451,
      confirm_name: "(주)시몬스",
      work:
        "물류·유통·운송,구매·자재·재고,납품·배송·택배,상품기획·MD,중장비·화물,총무·법무·사무,경리·출납·결 산,AS·서비스·수리,회계·재무·세무·IR,일반영업,판매·매장관리,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,응용프로그램개발,ERP·시스템분석·설계,설문·통계·리서치,세무·회계·CPA",
      address:
        "서울 &gt; 강남구,경기 &gt; 이천시,대구 &gt; 대구전체,부산 &gt; 부산전체,세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2452,
      confirm_name: "(주)엔솔루션스",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 2453,
      confirm_name: "에스앤에스이앤지(주)",
      work:
        "사무보조·문서작성,기계·기계설비,설계·CAD·CAM,시스템개발,ERP·시스템분석·설계,연구소·R&D",
      address: "서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2454,
      confirm_name: "(주)이스트포토닉스",
      work: "물류·유통·운송,영업기획·관리·지원,ERP·시스템분석·설계",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2455,
      confirm_name: "현대무벡스(주)",
      work:
        "기획·전략·경영,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,일반영업,IT·솔루션영업,영업기 획·관리·지원,기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,경영분석·컨설턴트,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 종로구,경기 &gt; 경기전체,경기 &gt; 이천시,부산 &gt; 부산전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2456,
      confirm_name: "현대모비스(주)",
      work:
        "총무·법무·사무,금속·금형,기계·기계설비,전기·전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,생산·제조·포장·조립,설계·CAD·CAM,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 경기전체,경기 &gt; 용인시,경기 &gt; 의왕시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2457,
      confirm_name: "(주)웹젠",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재 무·세무·IR,마케팅·광고·분석,캐릭터·만화·애니,광고영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,QA·CS강사 ·수퍼바이저,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역·통역,카메라·조명·미술",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2458,
      confirm_name: "(주)엔씨아이티에스",
      work:
        "웹개발,게임·Game,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2459,
      confirm_name: "(주)제이앤에스팩토리",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2460,
      confirm_name: "(주)에이치알허브",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 12~20년"
    },
    {
      id: 2461,
      confirm_name: "한국시험인증원(주)",
      work:
        "전기·전자·제어,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2462,
      confirm_name: "한국후지제록스(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2463,
      confirm_name: "에스앤에스아이앤씨(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력 1~12년"
    },
    {
      id: 2464,
      confirm_name: "경남정보대학교산학협력단",
      work: "ERP·시스템분석·설계,대학교수·행정직",
      address: "부산 &gt; 사상구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2465,
      confirm_name: "에이치알브로스",
      work: "회계·재무·세무·IR,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: " 경력5년↑"
    },
    {
      id: 2466,
      confirm_name: "(주)제이앤에스팩토리",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2467,
      confirm_name: "(주)굿센",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2468,
      confirm_name: "나은시스템 주식회사",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "세종 &gt; 세종특별자치시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2469,
      confirm_name: "(주)더파트너스경영지원센터",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~7년"
    },
    {
      id: 2470,
      confirm_name: "(주)더파트너스경영지원센터",
      work: "회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 2471,
      confirm_name: "에이에스이코리아 (주)",
      work:
        "회계·재무·세무·IR,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,토목·조경·도시·측량,전기·소방·통신·설비,환경·플랜트,안전·품질·검사·관리",
      address: "경기 &gt; 파주시",
      education: "대학졸업(2,3년)이상",
      careear: "신 입/경력"
    },
    {
      id: 2472,
      confirm_name: "롯데정보통신",
      work:
        "IT·솔루션영업,기술영업,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,퍼블리싱·UI개발,인공지능(AI)·빅데이터,본사·관리·전산",
      address:
        "서울 &gt; 강남구,서울 &gt; 금천구,서울 &gt; 송파구,서울 &gt; 용산구,경기 &gt; 안성시,경기 &gt; 용인시,경기 &gt; 의왕시,광주 &gt; 광산구,울산 &gt; 울산전체",
      education: " 대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2473,
      confirm_name: "주식회사 케이에이치에이",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2474,
      confirm_name: "(주)창신INC",
      work:
        "구매·자재·재고,상품기획·MD,무역사무·수출입,기획·전략·경영,총무·법무·사무,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,그래픽디자인·CG,제품·산업디자인,의류·패션·잡화디자인,광고·시각디자인,기계·기계설비, 화학·에너지,섬유·의류·패션,생산관리·품질관리,설계·CAD·CAM,서버·네트워크·보안,응용프로그램개발,ERP·시스템분석· 설계,웹디자인,세무·회계·CPA,현장·시공·감리·공무",
      address:
        "부산 &gt; 부산전체,부산 &gt; 사하구,부산 &gt; 서구,부산 &gt; 중구, 아시아·중동 &gt; 인도네시아",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2475,
      confirm_name: "(주)케이에스엠",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 김포시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2476,
      confirm_name: "(주)아이엔솔루션",
      work: "웹개발,ERP·시스템분석·설계,퍼블리싱·UI개발",
      address: "대구 &gt; 달서구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2477,
      confirm_name: "(주)바인컨설팅",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 광진구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2478,
      confirm_name: "(주)사람인HS",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2479,
      confirm_name: "주식회사 올트",
      work: "웹기획·PM,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2480,
      confirm_name: "(주)스카우트파트너스",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2481,
      confirm_name: "(주)사람과기술",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,경남 &gt; 창원시 성산구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2482,
      confirm_name: "(주)금영엔터테인먼트",
      work: "인사·교육·노무,회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2483,
      confirm_name: "(주)노랑풍선",
      work: "ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 2484,
      confirm_name: "(주)온도기술SENTECH",
      work:
        "기술영업,금속·금형,기계·기계설비,생산관리·품질관리,반도체·디스플레이·LCD,바이오·제약·식품,설 계·CAD·CAM,ERP·시스템분석·설계,연구소·R&D",
      address: "서울 &gt; 구로구,서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2485,
      confirm_name: "(주)브레인뱅크",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,경북 &gt; 경북전체",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2486,
      confirm_name: "(주)브레인뱅크",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,충북 &gt; 충북전체",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2487,
      confirm_name: "(주)브레인뱅크",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2488,
      confirm_name: "(주)브레인뱅크",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2489,
      confirm_name: "(주) 허브브레인",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2490,
      confirm_name: "(주)룩옵틱스",
      work:
        "해외영업·무역영업,상품기획·MD,경리·출납·결산,사무보조·문서작성,그래픽디자인·CG,의류·패션·잡화디자인,일반영업,판매·매장관리,영업기획·관리·지원,생산관리·품질관리,웹개발,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템 분석·설계,동영상·편집·코덱,카메라·조명·미술,장애인·국가유공자",
      address:
        "서울 &gt; 강남구,광주 &gt; 광주전체,대구 &gt; 대구전체,대전 &gt; 대전전체,부산 &gt; 부산전체",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2491,
      confirm_name: "(주) 허브브레인",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2492,
      confirm_name: "(주) 허브브레인",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2493,
      confirm_name: "비츠로그룹",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 2494,
      confirm_name: "(주)대성사",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경남 &gt; 양산시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2495,
      confirm_name: "(주)나눔기술부산",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "부산 &gt; 연제구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2496,
      confirm_name: "(주)더라이징스타헤딩",
      work: "서버·네트워크·보안,웹기획·PM,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,서울 &gt; 용산구,서울 &gt;  중구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2497,
      confirm_name: "(주)넷앤드",
      work: "ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2498,
      confirm_name: "동원그룹",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,총무·법무·사무,보안·경호·안전,요리·제빵 사·영양사,마케팅·광고·분석,일반영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전자·제어,생산관리·품질관리,생산·제조·포장·조립,비금속·요업·신소재,바이오·제약·식품,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시 스템분석·설계,하드웨어·소프트웨어,연구소·R&D,전기·소방·통신·설비,안전·품질·검사·관리",
      address:
        "서울 &gt; 서울전체,경기 &gt; 부천시,경기 &gt; 안성시,광주 &gt; 광주전체,대전 &gt; 대전전체,부산 &gt; 부산전체,전북 &gt; 전북전체,충북 &gt; 충북전 체,충남 &gt; 아산시,전국 &gt; 전국",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2499,
      confirm_name: "(주)테라닉스",
      work:
        "기획·전략·경영,회계·재무·세무·IR,전기·전자·제어,반도체·디스플레이·LCD,웹개발,응용프로그램개발,ERP ·시스템분석·설계,데이터베이스·DBA,연구소·R&D,현장·시공·감리·공무",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안산시,경기 &gt; 안산시 단원구,경기 &gt; 안산시 상록구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2500,
      confirm_name: "(주)블루비즈",
      work: "웹개발,ERP·시스템분석·설계",
      address: "전북 &gt; 전주시 덕진구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 2501,
      confirm_name: "(주)인텔리안테크놀로지스",
      work:
        "해외영업·무역영업,기술영업,고객센터·CS,금속·금형,전기·전자·제어,설계·CAD·CAM,서버·네트 워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,웹디자 인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2502,
      confirm_name: "삼호산업",
      work: "응용프로그램개발,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "아시아·중동 &gt; 베트남",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2503,
      confirm_name: "이니스트바이오제약(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구, 서울 &gt; 관악구,서울 &gt; 서초구,서울 &gt; 송파구,경기 &gt; 경기전체,경기 &gt; 용인시,경기 &gt; 용인시 기흥구,경기 &gt; 용인시 수지구,경기 &gt; 용인시 처인구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2504,
      confirm_name: "(주)코암테크",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2505,
      confirm_name: "넥센타이어(주)",
      work:
        "제품·산업디자인,광고·시각디자인,일반영업,기술영업,영업기획·관리·지원,화학·에너지,전기·전자·제어,설계·CAD·CAM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강서구,경남 &gt; 창녕군",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2506,
      confirm_name: "HeNny & McCoy",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2507,
      confirm_name: "(주)비즈앤테크컨설팅",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2508,
      confirm_name: "(주)맑은기술",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2509,
      confirm_name: "(주)피플스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~12년"
    },
    {
      id: 2510,
      confirm_name: "(주)티라유텍",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~13년"
    },
    {
      id: 2511,
      confirm_name: "(주)티라유텍",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~13년"
    },
    {
      id: 2512,
      confirm_name: "데상트코리아(주)",
      work:
        "상품기획·MD,기획·전략·경영,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석,제품·산업디자인, 의류·패션·잡화디자인,영업기획·관리·지원,고객센터·CS,웹기획·PM,ERP·시스템분석·설계,동영상·편집·코덱,세무·회계 ·CPA,연구소·R&D",
      address: "서울 &gt; 송파구,경기 &gt; 안성시,부산 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 2513,
      confirm_name: "(주)아이센스",
      work:
        "해외영업·무역영업,총무·법무·사무,AS·서비스·수리,의료기사,일반영업,화학·에너지,전기·전자·제어,생산관리·품질관리,바이오·제약·식품,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,연구소·R&D,환경·플랜트,안전·품질·검사·관리",
      address:
        "서울 &gt; 노원구,서울 &gt; 서초구,인천 &gt; 연수구,강원 &gt; 원주시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2514,
      confirm_name: "스톤브릿지",
      work: "웹기획·PM,ERP·시스템분석·설계,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력15년↑"
    },
    {
      id: 2515,
      confirm_name: "콘텔라(주)",
      work:
        "웹마스터·QA·테스터,웹개발,응용프로그램개발,ERP·시스템분석·설계,통신·모바일,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2516,
      confirm_name: "(주)오토인더스트리",
      work:
        "기계·기계설비,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,ERP·시스템분석·설계",
      address: "경북 &gt; 경북전체,경북 &gt; 경주시",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 2517,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2518,
      confirm_name: "콘텔라(주)",
      work:
        "전기·전자·제어,웹마스터·QA·테스터,웹개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2519,
      confirm_name: "(주)스마트어스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 2520,
      confirm_name: "(주)인큐브시스템",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~17년"
    },
    {
      id: 2521,
      confirm_name: "(주)인큐브시스템",
      work: "ERP·시스템분석·설계",
      address: "인천 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~13년"
    },
    {
      id: 2522,
      confirm_name: "한솔테크닉스(주)",
      work:
        "해외영업·무역영업,인사·교육·노무,일반영업,영업기획·관리·지원,서버·네트워크·보안,ERP·시스템분석 ·설계,헤드헌팅·노무·직업상담,외국어·번역·통역",
      address: "경기 &gt; 수원시,충북 &gt; 진천군,아시아·중동 &gt; 태국",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2523,
      confirm_name: "(주)웰크론",
      work: "ERP·시스템분석·설계,본사·관리·전산",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2524,
      confirm_name: "(주)클라우즈랩",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 2525,
      confirm_name: "반석써치(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 용인시 처인구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2526,
      confirm_name: "한국직업능력교육원 안산",
      work:
        "물류·유통·운송,구매·자재·재고,제품·산업디자인,생산관리·품질관리,서버·네트워크·보안,응용 프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address:
        "경기 &gt; 군포시,경기 &gt; 시흥시,경기 &gt; 안산시,경기 &gt; 안산시 단원구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2527,
      confirm_name: "(주)수아랩",
      work: "웹마스터·QA·테스터,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2528,
      confirm_name: "(주)한국에프디엑스네트웍스",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무 관"
    },
    {
      id: 2529,
      confirm_name: "제너럴바이오(주)",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,무역사무·수출입,중장비·화물,기획· 전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,광고·시각디자인,일반영업,화학·에너지,생산관리·품질관리,생산·제조 ·포장·조립,서버·네트워크·보안,웹개발,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,세무·회계·CPA,연구소·R&D,카메라·조명·미술,사진·포토그라퍼,장애인·국가유공자",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구,전북 &gt; 전북전체,전북 &gt; 남원시,아시아·중동 &gt; 베트남,아시아·중동 &gt; 태국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2530,
      confirm_name: "(주)제이앤케이씨(JNKC Company)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2531,
      confirm_name: "(주)에이치알엔",
      work: "구매·자재·재고,총무·법무·사무,통신·모바일",
      address:
        "서울 &gt; 동대문구,서울 &gt; 마포구,서울 &gt; 서대문구,서 울 &gt; 은평구,서울 &gt; 종로구,인천 &gt; 계양구,인천 &gt; 미추홀구,인천 &gt; 남동구,인천 &gt; 동구,인천 &gt; 부평구",
      education: "고 등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2532,
      confirm_name: "대한상공회의소 경기인력개발원",
      work:
        "AS·서비스·수리,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,통신 ·모바일,인공지능(AI)·빅데이터,연구소·R&D,건축·인테리어·설계,전기·소방·통신·설비",
      address: "경기 &gt; 파주시",
      education: "고등학교졸업이 상",
      careear: "경력무관"
    },
    {
      id: 2533,
      confirm_name: "(주)나온웍스",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2534,
      confirm_name: "(주)성남",
      work: "일반영업,고객센터·CS,통신·모바일",
      address: "부산 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2535,
      confirm_name: "아이픽 충장로점 광주아이폰수리센터",
      work: "통신·모바일",
      address:
        "광주 &gt; 광주전체,광주 &gt; 남구,광주 &gt; 동구,광주 &gt; 북구,광주 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2536,
      confirm_name: "케이원홀딩스(주)",
      work: "고객센터·CS,통신·모바일",
      address: "부산 &gt; 연제구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2537,
      confirm_name: "(주)케이티엠앤에스",
      work: "통신·모바일",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2538,
      confirm_name: "더 휴먼",
      work: "통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 2539,
      confirm_name: "(주)스파이어테크놀로지",
      work: "통신·모바일",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2540,
      confirm_name: "(주)스파이어테크놀로지",
      work: "통신·모바일",
      address: "경기 &gt; 고양시 일산동구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2541,
      confirm_name: "(주)투넘버",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2542,
      confirm_name: "(주)스마트비전",
      work: "AS·서비스·수리,통신·모바일,하드웨어·소프트웨어",
      address: "대전 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2543,
      confirm_name: "(주)넷채널",
      work: "생산관리·품질관리,웹마스터·QA·테스터,통신·모바일",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2544,
      confirm_name: "(주)한맥아이피에스",
      work:
        "AS·서비스·수리,일반영업,IT·솔루션영업,기술영업,전기·전자·제어,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA",
      address:
        "경기 &gt; 성남시 분당구,광주 &gt; 광주전체,광 주 &gt; 광산구,대구 &gt; 대구전체,대구 &gt; 수성구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2545,
      confirm_name: "스피드정보통신기술주식회사",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2546,
      confirm_name: "주식회사 셀콤",
      work: "통신·모바일",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2547,
      confirm_name: "한국산업기술시험원",
      work:
        "기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,보안·경호·안전,가사·청소·육아,인사·교육·노무,회계·재무·세무·IR,기술영업,영업기획·관리·지원,고객센터·CS,서버·네트워크·보안,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치,법률·특허·상표,세무 ·회계·CPA,연구소·R&D,토목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,환경·플랜트,현장·시공·감리·공무,안전·품질·검사·관리",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,경기 &gt; 안산시,강원 &gt; 원주시,경남 &gt; 진주시,경 남 &gt; 창원시,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2548,
      confirm_name: "어니컴(주)",
      work: "웹마스터·QA·테스터,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 2549,
      confirm_name: "중앙하이텔(주)",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2550,
      confirm_name: "(주)에이티엔씨",
      work: "사무보조·문서작성,판매·매장관리,통신·모바일",
      address: "경기 &gt; 평택시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2551,
      confirm_name: "(주)위드아이에스",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구,대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2552,
      confirm_name: "아임에버(주)",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2553,
      confirm_name: "M&A통신",
      work: "TM·아웃바운드,통신·모바일",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2554,
      confirm_name: "웨이즈원(주)",
      work: "전기·전자·제어,통신·모바일,토목·조경·도시·측량",
      address: "경기 &gt; 의왕시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2555,
      confirm_name: "(주)준정보통신",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 광주시,경기 &gt; 여주시,경기 &gt; 이천시",
      education: " 학력무관",
      careear: "경력무관"
    },
    {
      id: 2556,
      confirm_name: "(주)네콘",
      work: "IT·솔루션영업,통신·모바일",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 8~14년"
    },
    {
      id: 2557,
      confirm_name: "(주)디지탈라인",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 의왕시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2558,
      confirm_name: "(주)시소아이티",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2559,
      confirm_name: "국가보안기술연구소",
      work:
        "기획·전략·경영,총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,전기·전자·제어,서버·네트워크·보안,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,IT·디자인·컴퓨터교육,연구소·R&D",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2560,
      confirm_name: "(주)아이에스엠",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2561,
      confirm_name: "오소트론(주)",
      work: "통신·모바일",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2562,
      confirm_name: "한국그린에너지(주)",
      work: "전기·전자·제어,통신·모바일",
      address: "전북 &gt; 완주군",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2563,
      confirm_name: "(주)디지털우민",
      work: "구매·자재·재고,사무보조·문서작성,통신·모바일",
      address: "서울 &gt; 서대문구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2564,
      confirm_name: "(주)디지털우민",
      work: "AS·서비스·수리,통신·모바일",
      address: "서울 &gt; 서대문구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2565,
      confirm_name: "(주)국민",
      work: "통신·모바일",
      address: "광주 &gt; 남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2566,
      confirm_name: "노아솔루션",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2567,
      confirm_name: "노아솔루션",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2568,
      confirm_name: "미디어텍코리아(주)",
      work: "반도체·디스플레이·LCD,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2569,
      confirm_name: "미디어텍코리아(주)",
      work: "반도체·디스플레이·LCD,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2570,
      confirm_name: "(주)한길WIT",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 계양구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2571,
      confirm_name: "(주)제로투세븐",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 2572,
      confirm_name: "(주)텔레칩스",
      work:
        "해외영업·무역영업,구매·자재·재고,기획·전략·경영,총무·법무·사무,기술영업,영업기획·관리·지원,전기· 전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2573,
      confirm_name: "지티비(주)",
      work: "통신·모바일",
      address: "충남 &gt; 서산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2574,
      confirm_name: "지티비(주)",
      work: "통신·모바일",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2575,
      confirm_name: "지티비(주)",
      work: "통신·모바일",
      address: "경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2576,
      confirm_name: "(주)아이티엠티",
      work: "판매·매장관리,고객센터·CS,통신·모바일",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2577,
      confirm_name: "(주)스페이사콤",
      work: "통신·모바일,IT·디자인·컴퓨터교육,전기·소방·통신·설비",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2578,
      confirm_name: "(주)혁산정보시스템",
      work: "AS·서비스·수리,기술영업,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2579,
      confirm_name: "다인정보통신",
      work: "AS·서비스·수리,컨텐츠·사이트운영,통신·모바일",
      address: "인천 &gt; 미추홀구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2580,
      confirm_name: "켈리서비스 유한회사",
      work: "전기·전자·제어,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2581,
      confirm_name: "주식회사 엠케이텔레콤",
      work: "서버·네트워크·보안,통신·모바일",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2582,
      confirm_name: "주식회사 엠케이텔레콤",
      work: "서버·네트워크·보안,통신·모바일",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2583,
      confirm_name: "닥터애니케어(주)",
      work: "시스템개발,통신·모바일",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2584,
      confirm_name: "한국정보기술(주)",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력 2~15년"
    },
    {
      id: 2585,
      confirm_name: "(주)케이엠더블유",
      work:
        "해외영업·무역영업,구매·자재·재고,무역사무·수출입,회계·재무·세무·IR,일반영업,기계·기계설비,전기 ·전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,통신·모바일,외국어·번역·통역,세무·회계·CPA, 연구소·R&D",
      address: "경기 &gt; 경기전체,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2586,
      confirm_name: "(주)하나씨엔아이",
      work: "AS·서비스·수리,통신·모바일",
      address: "인천 &gt; 계양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2587,
      confirm_name: "(주)라인테크놀로지",
      work: "사무보조·문서작성,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2588,
      confirm_name: "한국표준협회",
      work:
        "그래픽디자인·CG,전기·전자·제어,설계·CAD·CAM,응용프로그램개발,시스템개발,통신·모바일,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서초구,경기 &gt; 경기전체,경기 &gt; 용인시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2589,
      confirm_name: "(주)룰루랩",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 2590,
      confirm_name: "한국전파기지국주식회사",
      work: "통신·모바일",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2591,
      confirm_name: "(주)이씨스",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "인천 &gt; 연수구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2592,
      confirm_name: "주식회사 위츠",
      work:
        "구매·자재·재고,기획·전략·경영,인사·교육·노무,일반영업,기술영업,영업기획·관리·지원,금속·금형,전기 ·전자·제어,생산관리·품질관리,비금속·요업·신소재,설계·CAD·CAM,통신·모바일,연구소·R&D",
      address: "경기 &gt; 수원시 영통구",
      education: "고 등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2593,
      confirm_name: "청방네트웍스(주)",
      work: "통신·모바일",
      address: "경남 &gt; 경남전체,경남 &gt; 창원시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2594,
      confirm_name: "주광네오텍",
      work: "통신·모바일",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2595,
      confirm_name: "(주)모바일에코",
      work: "통신·모바일",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 2596,
      confirm_name: "부전전자(주)",
      work:
        "구매·자재·재고,총무·법무·사무,인사·교육·노무,금속·금형,기계·기계설비,전기·전자·제어,생산관리·품 질관리,설계·CAD·CAM,응용프로그램개발,통신·모바일,하드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address:
        "경기 &gt; 안산시,경기 &gt; 안양시,아시아·중동 &gt; 베트남,아시아·중동 &gt; 중국.홍콩",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2597,
      confirm_name: "(주)유비라인",
      work: "ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2598,
      confirm_name: "(주)노르마",
      work: "응용프로그램개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2599,
      confirm_name: "(주)신영이에스디",
      work: "통신·모바일,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2600,
      confirm_name: "(주)엠쓰리모바일",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 광진구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2601,
      confirm_name: "대일전기통신(주)",
      work: "사무보조·문서작성,설계·CAD·CAM,통신·모바일",
      address: "경기 &gt; 고양시 덕양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2602,
      confirm_name: "(주)에스엘솔루션",
      work:
        "기획·전략·경영,사무보조·문서작성,웹기획·PM,웹개발,응용프로그램개발,통신·모바일,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 마포구,서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2603,
      confirm_name: "(주)지디네트웍스",
      work: "통신·모바일",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2604,
      confirm_name: "(주)케이씨엠솔루션",
      work: "사무보조·문서작성,통신·모바일,연구소·R&D",
      address: "부산 &gt; 사상구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2605,
      confirm_name: "아주통신",
      work: "통신·모바일",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2606,
      confirm_name: "(주)디지팍스",
      work: "통신·모바일",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2607,
      confirm_name: "(주)유진시스템",
      work: "통신·모바일,하드웨어·소프트웨어,전기·소방·통신·설비",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2608,
      confirm_name: "엑티브정보통신(주)",
      work: "일반영업,영업기획·관리·지원,통신·모바일",
      address: "경기 &gt; 수원시 장안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2609,
      confirm_name: "명신정보통신(주)",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2610,
      confirm_name: "(주)아이티엠티",
      work: "판매·매장관리,고객센터·CS,통신·모바일",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2611,
      confirm_name: "명신정보통신(주)",
      work: "구매·자재·재고,통신·모바일,전기·소방·통신·설비",
      address: "대전 &gt; 대덕구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2612,
      confirm_name: "(주)대국지앤에스",
      work: "통신·모바일,토목·조경·도시·측량",
      address: "경북 &gt; 경산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2613,
      confirm_name: "옵티시스(주)",
      work: "통신·모바일,하드웨어·소프트웨어,병역특례",
      address: "경기 &gt; 성남시 분당구",
      education: "석사졸업이상",
      careear: "신입"
    },
    {
      id: 2614,
      confirm_name: "(주)유니테크",
      work: "통신·모바일",
      address: "부산 &gt; 기장군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2615,
      confirm_name: "(주)영하아이앤티",
      work: "통신·모바일",
      address: "대전 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2616,
      confirm_name: "(주)소암컨설턴트",
      work: "전기·전자·제어,통신·모바일",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2617,
      confirm_name: "엑스파워정보통신",
      work: "TM·아웃바운드,고객센터·CS,통신·모바일",
      address: "인천 &gt; 부평구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2618,
      confirm_name: "(주)디씨아이어드벤스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,통신·모바일",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2619,
      confirm_name: "자비스테크",
      work: "통신·모바일,하드웨어·소프트웨어",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안양시,경기 &gt; 안양시 동안구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 2620,
      confirm_name: "(주)넷플렉스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2621,
      confirm_name: "(주)피플앤드테크놀러지",
      work: "웹개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 2622,
      confirm_name: "(주)에이텔시스텍",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 2623,
      confirm_name: "(주)에스씨네트",
      work: "서버·네트워크·보안,통신·모바일,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2624,
      confirm_name: "(주)힐링페이퍼",
      work:
        "해외영업·무역영업,마케팅·광고·분석,TM·아웃바운드,TM·인바운드,전기·전자·제어,웹개발,응용프로그램개 발,시스템개발,통신·모바일,퍼블리싱·UI개발,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2625,
      confirm_name: "(주)어빌리티시스템즈",
      work: "사무보조·문서작성,영업기획·관리·지원,통신·모바일",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2626,
      confirm_name: "코리아에스",
      work: "통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2627,
      confirm_name: "이노넷(주)",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2628,
      confirm_name: "주식회사 엠케이텔레콤",
      work: "서버·네트워크·보안,통신·모바일",
      address: "경기 &gt; 수원시 장안구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2629,
      confirm_name: "(주)엠엘소프트",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2630,
      confirm_name: "(주)서진테크놀로지",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 단원구,인천 &gt; 인천전체",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2631,
      confirm_name: "(주)서진테크놀로지",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 단원구,인천 &gt; 인천전체",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2632,
      confirm_name: "팔(8)",
      work: "IT·솔루션영업,통신·모바일",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2633,
      confirm_name: "우암정보통신(주)",
      work: "통신·모바일",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2634,
      confirm_name: "(주)엠토스솔루션스",
      work: "IT·솔루션영업,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2635,
      confirm_name: "(주)이앤비원",
      work: "서버·네트워크·보안,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 구로구,경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2636,
      confirm_name: "누리씨앤아이(주)",
      work: "통신·모바일",
      address: "전남 &gt; 광양시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2637,
      confirm_name: "(주)엔컴즈",
      work: "웹개발,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2638,
      confirm_name: "(주)코맥스씨에스",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 중원구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 2639,
      confirm_name: "새빛기술(주)",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "경북 &gt; 경주시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2640,
      confirm_name: "새빛기술(주)",
      work: "서버·네트워크·보안,통신·모바일,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2641,
      confirm_name: "(주)에프에스알엔티",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "부산 &gt; 금정구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2642,
      confirm_name: "(주)성주컴텍",
      work: "IT·솔루션영업,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2643,
      confirm_name: "교원",
      work:
        "기획·전략·경영,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,웹디자인,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2644,
      confirm_name: "(주)조인스에이치알코리아",
      work: "하드웨어·소프트웨어,연구소·R&D",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2645,
      confirm_name: "유버(주)",
      work: "전기·전자·제어,반도체·디스플레이·LCD,하드웨어·소프트웨어",
      address: "경기 &gt; 안산시 상록구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2646,
      confirm_name: "유버(주)",
      work: "전기·전자·제어,반도체·디스플레이·LCD,하드웨어·소프트웨어",
      address: "경기 &gt; 안산시 상록구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2647,
      confirm_name: "(주)SPC네트웍스",
      work:
        "경리·출납·결산,서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2648,
      confirm_name: "(주)조인스에이치알코리아",
      work: "하드웨어·소프트웨어,연구소·R&D",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2649,
      confirm_name: "(주)아이티글로비스",
      work:
        "마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,제품·산업디자인,광고·시각디자인,하드웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2650,
      confirm_name: "(주)이노비드",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 2651,
      confirm_name: "(주)티제이이노베이션",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 부천시",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2652,
      confirm_name: "(주)토모큐브",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2653,
      confirm_name: "(주)티제이이노베이션",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 부천시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2654,
      confirm_name: "SK플래닛(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 2655,
      confirm_name: "(주)화진메디칼",
      work: "전기·전자·제어,바이오·제약·식품,하드웨어·소프트웨어",
      address: "충남 &gt; 천안시 동남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2656,
      confirm_name: "(주)티스퀘어",
      work: "웹마스터·QA·테스터,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2657,
      confirm_name: "(주)동국일렉콘스",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 부천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2658,
      confirm_name: "(주)리번드",
      work: "웹개발,하드웨어·소프트웨어",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2659,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "박사졸업",
      careear: " 경력무관"
    },
    {
      id: 2660,
      confirm_name: "코츠테크놀로지(주)",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,웹마스터·QA·테스터,서버·네트워크·보안,응용프로그램개발, 시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2661,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "전기·전자·제어,반도체·디스플레이·LCD,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구, 전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~11년"
    },
    {
      id: 2662,
      confirm_name: "(주)어니솔루션",
      work: "IT·솔루션영업,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2663,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "대 학교졸업(4년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 2664,
      confirm_name: "(주)디알젬",
      work: "기계·기계설비,전기·전자·제어,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,경기 &gt; 경기전체,경기 &gt; 광명시",
      education: " 대학교졸업(4년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 2665,
      confirm_name: "(주)아이템베이",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 양천구",
      education: "고등학교졸업이상",
      careear: "경력 1~5년"
    },
    {
      id: 2666,
      confirm_name: "(주)투비파트너즈",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학교 졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2667,
      confirm_name: "해성손해사정(주)",
      work: "웹개발,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 2668,
      confirm_name: "(주)이슬림코리아",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2669,
      confirm_name: "수협은행",
      work:
        "IT·솔루션영업,금융·보험영업,기술영업,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2670,
      confirm_name: "골든비 네트워크",
      work: "안경·렌즈·광학,응용프로그램개발,하드웨어·소프트웨어",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학교졸업(4년)이상",
      careear: " 경력 3~15년"
    },
    {
      id: 2671,
      confirm_name: "(주)투비파트너즈",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구,경기 &gt; 경기전체",
      education: "대학교 졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2672,
      confirm_name: "원텍(주)",
      work: "하드웨어·소프트웨어,연구소·R&D",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2673,
      confirm_name: "(주)투비파트너즈",
      work: "응용프로그램개발,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 서울전체,충남 &gt; 충남전체",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2674,
      confirm_name: "주식회사 아이엠랩",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 2675,
      confirm_name: "베이다스",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경북 &gt; 포항시 남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2676,
      confirm_name: "(주)소프트베르크",
      work: "IT·솔루션영업,영업기획·관리·지원,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2677,
      confirm_name: "(주)업사이드",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2678,
      confirm_name: "(주)한위드정보기술",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신 입/경력"
    },
    {
      id: 2679,
      confirm_name: "파란손해사정(주)",
      work: "총무·법무·사무,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2680,
      confirm_name: "파란손해사정(주)",
      work: "총무·법무·사무,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2681,
      confirm_name: "(주)보강시스템",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대구 &gt; 달서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2682,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 2683,
      confirm_name: "세기정보통신(주)",
      work: "하드웨어·소프트웨어",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2684,
      confirm_name: "세기정보통신(주)",
      work: "하드웨어·소프트웨어",
      address: "대구 &gt; 달성군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2685,
      confirm_name: "(주)크레온유니티",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "부산 &gt; 사상구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2686,
      confirm_name: "(주)아스템즈",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 광진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2687,
      confirm_name: "(주)아스템즈",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 광진구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2688,
      confirm_name: "(주)큐드",
      work: "전기·전자·제어,웹마스터·QA·테스터,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2689,
      confirm_name: "(주)시스로그",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2690,
      confirm_name: "(주)골드윙파트너스",
      work: "전기·전자·제어,생산관리·품질관리,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10 년↑"
    },
    {
      id: 2691,
      confirm_name: "(주)크레온유니티",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address:
        "서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 강북구,서울 &gt; 구로구,경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2692,
      confirm_name: "(주)글로벌모터서비스",
      work: "운전·기사,전기·전자·제어,하드웨어·소프트웨어",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2693,
      confirm_name: "(주)나눔기술",
      work: "웹개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2694,
      confirm_name: "이지미디어",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2695,
      confirm_name: "메가존(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,전문직업·IT강사",
      address: "서울 &gt; 서울전체, 서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2696,
      confirm_name: "(주)심네트",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2697,
      confirm_name: "(주)한국피엠그룹",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 2698,
      confirm_name: "코아이비인후과",
      work: "총무·법무·사무,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경북 &gt; 포항시 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2699,
      confirm_name: "(주)하우리씨엔에스",
      work: "AS·서비스·수리,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2700,
      confirm_name: "(주)지이모션",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2701,
      confirm_name: "(주)에스에이치텍",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2702,
      confirm_name: "(주)송현홀딩스",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "충북 &gt; 충주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2703,
      confirm_name: "(주)모디엠",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 2704,
      confirm_name: "비전서치",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 2705,
      confirm_name: "(주)에스디텍",
      work: "전기·전자·제어,하드웨어·소프트웨어,연구소·R&D",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2706,
      confirm_name: "(주)소프트베르크",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2707,
      confirm_name: "필라테크",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2708,
      confirm_name: "(주)쓰리에치시스템",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: " 신입/경력"
    },
    {
      id: 2709,
      confirm_name: "잡코디골드(주)",
      work: "기술영업,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~13년"
    },
    {
      id: 2710,
      confirm_name: "잡코디골드(주)",
      work: "기술영업,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~13년"
    },
    {
      id: 2711,
      confirm_name: "위더스파트너스 주식회사",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 7~15년"
    },
    {
      id: 2712,
      confirm_name: "지인커리어",
      work: "시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 2713,
      confirm_name: "(주)아이옵스",
      work: "하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2714,
      confirm_name: "(주)노트닷컴",
      work: "AS·서비스·수리,판매·매장관리,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2715,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 2716,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 2717,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 2718,
      confirm_name: "위키에이드",
      work: "웹마스터·QA·테스터,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,경기 &gt; 경기전체,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2719,
      confirm_name: "에이아이빔",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 장안구",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 2720,
      confirm_name: "(주)우디",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~15년"
    },
    {
      id: 2721,
      confirm_name: "(주)유진아이티",
      work: "하드웨어·소프트웨어",
      address: "전북 &gt; 전주시 덕진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2722,
      confirm_name: "요다정보기술(주)",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 구로구,부산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2723,
      confirm_name: "(주)휴이노",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 1~2년"
    },
    {
      id: 2724,
      confirm_name: "(주)휴이노",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2725,
      confirm_name: "(주)조인스에이치알코리아",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 양주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2726,
      confirm_name: "(주)조인스에이치알코리아",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2727,
      confirm_name: "(주)휴먼디지탈",
      work: "전기·전자·제어,설계·CAD·CAM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 2728,
      confirm_name: "(주)에이텍씨앤",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경북 &gt; 구미시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2729,
      confirm_name: "(주)로킷헬스케어",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2730,
      confirm_name: "(주)오키",
      work: "하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 안양시 동안구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 2731,
      confirm_name: "반석써치(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 2732,
      confirm_name: "(주)와플",
      work: "하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2733,
      confirm_name: "(주)조인스에이치알코리아",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2734,
      confirm_name: "(주)시스코어",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 용인시 기흥구",
      education: "학력무관",
      careear: "경력 3~16년"
    },
    {
      id: 2735,
      confirm_name: "(주)딜루션",
      work: "전시·공간디자인,웹기획·PM,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2736,
      confirm_name: "(주)성운컴네트",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 송파구,경기 &gt; 수원시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2737,
      confirm_name: "세인에스앤씨(주)",
      work: "전기·전자·제어,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 영등포구,인천 &gt; 인천전체",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2738,
      confirm_name: "(주)성진하이텍",
      work: "웹기획·PM,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2739,
      confirm_name: "주식회사 정도시스템",
      work: "기술영업,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2740,
      confirm_name: "(주)앤츠",
      work: "IT·솔루션영업,시스템개발,하드웨어·소프트웨어",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2741,
      confirm_name: "(주)다이네트웍스",
      work: "AS·서비스·수리,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2742,
      confirm_name: "(주)파인정보통신",
      work: "하드웨어·소프트웨어",
      address: "충남 &gt; 공주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2743,
      confirm_name: "씨트립코리아",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,홍보·PR·사보,호텔·카지노·콘도,여행·관광·항공,인사·교 육·노무,마케팅·광고·분석,영업기획·관리·지원,TM·아웃바운드,TM·인바운드,고객센터·CS,하드웨어·소프트웨어",
      address:
        "서울 &gt; 서울전체,서울 &gt; 종로구,부산 &gt; 부산전체,부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2744,
      confirm_name: "(주)한국마스터",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무 관"
    },
    {
      id: 2745,
      confirm_name: "경동물류(주)",
      work:
        "물류·유통·운송,총무·법무·사무,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,보험심사과,고객 센터·CS,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,설문·통계·리서치,법률·특허·상표,세무·회계 ·CPA,채권·보험·보상·심사,안전·품질·검사·관리",
      address: "경기 &gt; 경기전체,경기 &gt; 김포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2746,
      confirm_name: "팸텍(주)",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시,경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력10년↓"
    },
    {
      id: 2747,
      confirm_name: "(주)메타씨티",
      work:
        "AS·서비스·수리,IT·솔루션영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경 기 &gt; 경기전체,경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2748,
      confirm_name: "에스에프시스템 주식회사",
      work: "하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 2749,
      confirm_name: "(주)투앤정보",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "대구 &gt; 수성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2750,
      confirm_name: "(주)제오네트웍스",
      work: "통신·모바일,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2751,
      confirm_name: "잇츠라이팅",
      work: "사무보조·문서작성,그래픽디자인·CG,웹디자인",
      address: "경남 &gt; 진주시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2752,
      confirm_name: "스냅스",
      work: "웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 2753,
      confirm_name: "스냅스",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2754,
      confirm_name: "기린아",
      work: "광고·시각디자인,웹디자인,카메라·조명·미술",
      address: "강원 &gt; 강릉시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2755,
      confirm_name: "(주)케이마켓",
      work: "그래픽디자인·CG,웹디자인",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2756,
      confirm_name: "(주)리얼코코글로벌",
      work: "섬유·의류·패션,웹디자인",
      address: "부산 &gt; 부산진구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2757,
      confirm_name: "(주)라온비엔피",
      work: "웹디자인",
      address: "인천 &gt; 연수구",
      education: "고등학교졸업이상",
      careear: "경력5년↑"
    },
    {
      id: 2758,
      confirm_name: "(주)인투어",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2759,
      confirm_name: "사치앤사치",
      work: "웹디자인",
      address: "서울 &gt; 성북구",
      education: "학력무관",
      careear: "경력 1~20년"
    },
    {
      id: 2760,
      confirm_name: "(주)씨소프트",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력 3~9년"
    },
    {
      id: 2761,
      confirm_name: "(주)모바일이앤엠애드",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2762,
      confirm_name: "(주)빅케어리저브",
      work: "그래픽디자인·CG,웹디자인",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2763,
      confirm_name: "(주)삼안",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2764,
      confirm_name: "아이피아 코스메틱",
      work: "제품·산업디자인,광고·시각디자인,웹디자인",
      address: "부산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2765,
      confirm_name: "(주)재인",
      work: "웹디자인",
      address: "서울 &gt; 종로구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2766,
      confirm_name: "(주)레디엔터테인먼트",
      work: "그래픽디자인·CG,광고·시각디자인,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2767,
      confirm_name: "한국한인홍(주)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2768,
      confirm_name: "다올원(주)",
      work: "사무보조·문서작성,영업기획·관리·지원,웹디자인",
      address:
        "충북 &gt; 청주시,충북 &gt; 청주시 상당구,충북 &gt; 청주시 흥덕구,충북 &gt; 청주시 청원구,충북 &gt; 청주시 서원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2769,
      confirm_name: "주식회사매핑",
      work: "그래픽디자인·CG,출판·편집디자인,웹디자인",
      address: "충북 &gt; 청주시 흥덕구,충북 &gt; 청주시 서원구",
      education: "대학교졸업(4년) 이상",
      careear: "경력무관"
    },
    {
      id: 2770,
      confirm_name: "(주)아이엠판다",
      work: "웹디자인",
      address: "경기 &gt; 의정부시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2771,
      confirm_name: "주식회사 에이와이엔터테인먼트",
      work: "총무·법무·사무,경리·출납·결산,웹디자인",
      address:
        "경기 &gt; 수원시 영통구,경기 &gt; 수원시 팔달구,경기 &gt; 오산시,경기 &gt; 평택시,경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2772,
      confirm_name: "(주)올애즈컴퍼니",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2773,
      confirm_name: "(주)한책협",
      work: "총무·법무·사무,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2774,
      confirm_name: "(주)비디에스랩",
      work: "화학·에너지,웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2775,
      confirm_name: "주식회사 에어라파",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2776,
      confirm_name: "(주)트리",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2777,
      confirm_name: "(주)지엠홀딩스",
      work: "물류·유통·운송,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2778,
      confirm_name: "(주)지피클럽",
      work: "그래픽디자인·CG,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2779,
      confirm_name: "제일저지(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2780,
      confirm_name: "쁨클리닉",
      work:
        "해외영업·무역영업,기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,웹기획·PM,컨텐츠·사 이트운영,웹디자인,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2781,
      confirm_name: "(주)두빛나래소프트",
      work: "광고·시각디자인,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2782,
      confirm_name: "교토삼굴",
      work: "웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2783,
      confirm_name: "아나시스",
      work: "그래픽디자인·CG,광고·시각디자인,웹디자인",
      address: "경기 &gt; 의왕시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 2784,
      confirm_name: "커리어케어",
      work: "웹기획·PM,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 9~20년"
    },
    {
      id: 2785,
      confirm_name: "센트럴팜(주)",
      work: "제품·산업디자인,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2786,
      confirm_name: "주한인도문화원 부산",
      work: "총무·법무·사무,사무보조·문서작성,웹디자인",
      address: "부산 &gt; 남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2787,
      confirm_name: "소아벨라",
      work: "판매·매장관리,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2788,
      confirm_name: "주식회사 메이아이",
      work: "웹디자인",
      address:
        "대전 &gt; 대덕구,대전 &gt; 동구,대전 &gt; 서구,대전 &gt; 유성구,대전 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2789,
      confirm_name: "(주)세주",
      work:
        "구매·자재·재고,상품기획·MD,그래픽디자인·CG,출판·편집디자인,제품·산업디자인,의류·패션·잡화디자인,디자인 기타,영업기획·관리·지원,게임·Game,웹디자인",
      address: "경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2790,
      confirm_name: "소아벨라",
      work: "판매·매장관리,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2791,
      confirm_name: "(주)나인위드",
      work:
        "전시·컨벤션·세미나,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니,의류·패션·잡화디자인,전시·공간디자인,광고·시각디자인,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2792,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2793,
      confirm_name: "(주)트랜스코스모스코리아",
      work:
        "웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "학력무 관",
      careear: "경력무관"
    },
    {
      id: 2794,
      confirm_name: "(주)인스토어",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2795,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2796,
      confirm_name: "(주)씨스콜씨앤에스",
      work: "웹디자인",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2797,
      confirm_name: "(주)와이디",
      work: "웹디자인",
      address: "경기 &gt; 김포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2798,
      confirm_name: "(주)삼성스포츠",
      work: "웹디자인",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2799,
      confirm_name: "(주)베러웨이시스템즈",
      work: "그래픽디자인·CG,출판·편집디자인,웹디자인",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2800,
      confirm_name: "알렌 컴퍼니(ALLEN COMPANY)",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2801,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2802,
      confirm_name: "요블림",
      work: "웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2803,
      confirm_name: "아미정보통신",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2804,
      confirm_name: "엘모 컴퍼니 (elmo company)",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2805,
      confirm_name: "명진조명",
      work: "웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2806,
      confirm_name: "(주)흥복",
      work: "출판·편집디자인,웹디자인",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2807,
      confirm_name: "쵸코조명",
      work: "기획·전략·경영,제품·산업디자인,웹디자인",
      address: "서울 &gt; 동대문구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2808,
      confirm_name: "(주)아만타",
      work: "출판·편집디자인,캐릭터·만화·애니,웹디자인",
      address: "서울 &gt; 관악구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 2809,
      confirm_name: "(주)브랜디",
      work:
        "상품기획·MD,홍보·PR·사보,레저·스포츠,미용·피부관리·애견,인사·교육·노무,마케팅·광고·분석,그래픽디자 인·CG,광고·시각디자인,광고영업,영업기획·관리·지원,고객센터·CS,QA·CS강사·수퍼바이저,웹기획·PM,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,카메라·조명·미술,광고·카피·CF",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2810,
      confirm_name: "수익나는사람들",
      work: "금융·보험영업,TM·아웃바운드,웹디자인",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2811,
      confirm_name: "(주)티월드글로벌",
      work: "웹디자인",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 2812,
      confirm_name: "(주)오케이토마토",
      work: "웹디자인",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2813,
      confirm_name: "(주)커리어앤스카우트",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2814,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,하드웨어·소프트웨어,웹디자인",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 5~9년"
    },
    {
      id: 2815,
      confirm_name: "(주)커리어앤스카우트",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2816,
      confirm_name: "애플마트",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2817,
      confirm_name: "(주)해오름",
      work: "마케팅·광고·분석,웹디자인",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2818,
      confirm_name: "(주)오유인터내셔널",
      work:
        "상품기획·MD,경리·출납·결산,홍보·PR·사보,마케팅·광고·분석,일반영업,판매·매장관리,영업기획·관 리·지원,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2819,
      confirm_name: "(주)페이스푸드",
      work: "웹디자인",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2820,
      confirm_name: "라인프렌즈(주)",
      work: "웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2821,
      confirm_name: "(주)에스와이소프트",
      work:
        "기획·전략·경영,그래픽디자인·CG,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,사진·포토그라퍼,부동산·개발·경매·분양",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 2822,
      confirm_name: "(주)글로벌능력개발원",
      work: "그래픽디자인·CG,웹디자인,전문직업·IT강사",
      address: "경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2823,
      confirm_name: "(주)조은조명",
      work: "고객센터·CS,웹디자인",
      address: "인천 &gt; 미추홀구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2824,
      confirm_name: "(주)올리브스톤",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2825,
      confirm_name: "(주)모티브플럭스인터렉티브",
      work:
        "그래픽디자인·CG,디자인기타,광고·시각디자인,웹기획·PM,게임·Game,컨텐츠·사이트운영,웹디자 인,동영상·편집·코덱",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2826,
      confirm_name: "(주)온엑스",
      work:
        "물류·유통·운송,구매·자재·재고,상품기획·MD,중장비·화물,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 수원시,경기 &gt; 수원시 팔달구,경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2827,
      confirm_name: "(주)가포넷",
      work: "웹디자인",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 1~3년"
    },
    {
      id: 2828,
      confirm_name: "(주)인피아드",
      work: "웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2829,
      confirm_name: "비비트리(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2830,
      confirm_name: "에이스휴먼파워(주)",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2831,
      confirm_name: "(주)위런에듀",
      work: "그래픽디자인·CG,웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2832,
      confirm_name: "(주)티르티르",
      work: "그래픽디자인·CG,웹디자인,동영상·편집·코덱",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2833,
      confirm_name: "(주)씨아이템프러리",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 동작구,서울 &gt; 영등포구,경기 &gt; 경기전체,경기 &gt; 고양시,경기 &gt; 광명시,경기 &gt; 부천시,경기 &gt; 안양시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2834,
      confirm_name: "(주)개념원리",
      work: "마케팅·광고·분석,영업기획·관리·지원,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2835,
      confirm_name: "Dream Communications Company",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2836,
      confirm_name: "팀(T.I.M.)",
      work: "상품기획·MD,웹디자인",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2837,
      confirm_name: "팀(T.I.M.)",
      work: "상품기획·MD,웹디자인",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2838,
      confirm_name: "팀(T.I.M.)",
      work: "웹디자인",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2839,
      confirm_name: "(주)넥스트비즈",
      work: "웹개발,웹디자인",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2840,
      confirm_name: "(주)이인벤션",
      work: "그래픽디자인·CG,광고·시각디자인,웹디자인",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2841,
      confirm_name: "(주)블루포트",
      work:
        "구매·자재·재고,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,영업기획·관리·지원,서버·네트워크·보안,웹기획·PM,하드웨어·소프트웨어,웹디자인,경영분석·컨설턴트,외국어·번역·통역",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2842,
      confirm_name: "(주) 하이브랩",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2843,
      confirm_name: "(주)마인드그룹",
      work: "제품·산업디자인,웹디자인,동영상·편집·코덱",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 2844,
      confirm_name: "주식회사 페이오티",
      work: "그래픽디자인·CG,웹개발,웹디자인",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2845,
      confirm_name: "(주)세계일보",
      work: "웹마스터·QA·테스터,웹개발,웹디자인",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2846,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2847,
      confirm_name: "잡스테이션코리아",
      work: "웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2848,
      confirm_name: "(주)마이더스에이치알",
      work: "그래픽디자인·CG,웹기획·PM,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 2849,
      confirm_name: "(주)팍스넷",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2850,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2851,
      confirm_name: "서로커뮤니케이션",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 1~6년"
    },
    {
      id: 2852,
      confirm_name: "(주)마이더스에이치알",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2853,
      confirm_name: "제이투엠 네트웍스",
      work: "웹디자인",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2854,
      confirm_name: "(주)비엠크리에이티브컴퍼니",
      work: "마케팅·광고·분석,그래픽디자인·CG,광고영업,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2855,
      confirm_name: "(주)헤렌",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2856,
      confirm_name: "(주)본인터네셔널",
      work: "웹디자인",
      address: "부산 &gt; 수영구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2857,
      confirm_name: "(주)에이디파트너스코리아",
      work: "그래픽디자인·CG,출판·편집디자인,광고·시각디자인,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2858,
      confirm_name: "(주)위더스애드",
      work:
        "기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,캐릭터·만화·애니, 광고·시각디자인,일반영업,광고영업,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영,웹디자인,동영상·편집·코덱,카메라·조명·미술,작가·시나리오,광고·카피·CF,방송연출·PD·감독",
      address: "서울 &gt; 서울전체,서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2859,
      confirm_name: "CH 그룹",
      work: "그래픽디자인·CG,웹디자인,카메라·조명·미술",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2860,
      confirm_name: "소유템",
      work: "상품기획·MD,그래픽디자인·CG,웹디자인",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2861,
      confirm_name: "인플루엔셜",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2862,
      confirm_name: "코커리어",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2863,
      confirm_name: "코커리어",
      work: "웹개발,게임·Game,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2864,
      confirm_name: "(주)옷딜",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2865,
      confirm_name: "주식회사 한신정보기술",
      work: "웹개발,퍼블리싱·UI개발",
      address: "충북 &gt; 청주시 상당구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2866,
      confirm_name: "한스컨설팅",
      work: "게임·Game,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 2867,
      confirm_name: "한스컨설팅",
      work: "웹기획·PM,게임·Game,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 8~10년"
    },
    {
      id: 2868,
      confirm_name: "한스컨설팅",
      work: "캐릭터·만화·애니,게임·Game,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~10년"
    },
    {
      id: 2869,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2870,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2871,
      confirm_name: "매드업",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2872,
      confirm_name: "원진성형외과",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~3년"
    },
    {
      id: 2873,
      confirm_name: "한국철도시설공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,보안·경호·안전,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,고객센터·CS,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,세무·회계·CPA,토 목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리,부동산· 개발·경매·분양",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2874,
      confirm_name: "리테일테크",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 2875,
      confirm_name: "디자인아이엠",
      work: "응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "광주 &gt; 광주전체,광주 &gt; 광산구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2876,
      confirm_name: "누리보듬(주)",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "충북 &gt; 충주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2877,
      confirm_name: "(주)레드에이트홀딩스",
      work: "홍보·PR·사보,TM·아웃바운드,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2878,
      confirm_name: "(주)비엔케이시스템",
      work: "웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 강서구,부산 &gt; 남 구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2879,
      confirm_name: "(주)모아티티",
      work: "웹개발,퍼블리싱·UI개발",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2880,
      confirm_name: "(주)웹젠",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재 무·세무·IR,마케팅·광고·분석,캐릭터·만화·애니,광고영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,QA·CS강사 ·수퍼바이저,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역·통역,카메라·조명·미술",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2881,
      confirm_name: "(주)굿헬스케어",
      work: "웹기획·PM,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2882,
      confirm_name: "(주)티몬",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2883,
      confirm_name: "(주)엔씨아이티에스",
      work:
        "웹개발,게임·Game,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2884,
      confirm_name: "라온공구",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 구리시",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2885,
      confirm_name: "(주)메이커퍼즐",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2886,
      confirm_name: "(주)레몬헬스케어",
      work:
        "기획·전략·경영,회계·재무·세무·IR,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,퍼블리싱 ·UI개발,세무·회계·CPA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2887,
      confirm_name: "(주)트랜스코스모스코리아",
      work:
        "웹개발,컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "학력무 관",
      careear: "경력무관"
    },
    {
      id: 2888,
      confirm_name: "(주)오투콘홀딩스",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 2889,
      confirm_name: "(주)에스앰컬처앤콘텐츠 에스엠타운트래블",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2890,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발,외국어·번역·통역",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2891,
      confirm_name: "(주)서울게임즈",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2892,
      confirm_name: "코너크리에이티브(주)",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 2893,
      confirm_name: "주식회사 플로비",
      work: "웹기획·PM,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2894,
      confirm_name: "(주)알파플러스칩",
      work:
        "전기·전자·제어,설계·CAD·CAM,응용프로그램개발,시스템개발,퍼블리싱·UI개발,연구소·R&D",
      address:
        "경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 용인시,경기 &gt; 용인시 기흥구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 2895,
      confirm_name: "(주)벤처피플",
      work: "제품·산업디자인,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2896,
      confirm_name: "롯데정보통신",
      work:
        "IT·솔루션영업,기술영업,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,퍼블리싱·UI개발,인공지능(AI)·빅데이터,본사·관리·전산",
      address:
        "서울 &gt; 강남구,서울 &gt; 금천구,서울 &gt; 송파구,서울 &gt; 용산구,경기 &gt; 안성시,경기 &gt; 용인시,경기 &gt; 의왕시,광주 &gt; 광산구,울산 &gt; 울산전체",
      education: " 대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2897,
      confirm_name: "(주)유니윤",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2898,
      confirm_name: "(주)클릭커뮤니케이션",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 연제구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2899,
      confirm_name: "엔터웨이파트너스",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2900,
      confirm_name: "뿅카(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2901,
      confirm_name: "제오스페이스",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2902,
      confirm_name: "(주)옐로오투오",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 동대문구,서울 &gt; 마포구,서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 2903,
      confirm_name: "주식회사 수영사랑",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "경남 &gt; 김해시",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2904,
      confirm_name: "(주)아이엔솔루션",
      work: "웹개발,ERP·시스템분석·설계,퍼블리싱·UI개발",
      address: "대구 &gt; 달서구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2905,
      confirm_name: "(주)인터프로커뮤니케이션",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2906,
      confirm_name: "(주)에이치나인",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2907,
      confirm_name: "(주)리앤파트너스코리아",
      work: "웹마스터·QA·테스터,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2908,
      confirm_name: "비투링크(B2LINK)",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2909,
      confirm_name: "(주)민병철교육그룹",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 2910,
      confirm_name: "(주)에스와이엠코퍼레이션",
      work: "의류·패션·잡화디자인,컨텐츠·사이트운영,퍼블리싱·UI개발",
      address: "서울 &gt; 동대문구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2911,
      confirm_name: "(주)이비카드",
      work: "응용프로그램개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 동작구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 2912,
      confirm_name: "(주)스터디맥스",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2913,
      confirm_name: "(주)투믹스",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2914,
      confirm_name: "고르라 주식회사",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "제주 &gt; 제주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2915,
      confirm_name: "위데이터랩(주)",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2916,
      confirm_name: "주식회사 테스시스템",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2917,
      confirm_name: "(주)더퍼스트인베스트먼트",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2918,
      confirm_name: "(주)비아이매트릭스",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2919,
      confirm_name: "파란소프트",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2920,
      confirm_name: "(주)한국인터넷센터",
      work: "웹개발,웹디자인,퍼블리싱·UI개발",
      address: "인천 &gt; 미추홀구,인천 &gt; 남동구,인천 &gt; 부평구",
      education: "학력무관",
      careear: "경력2 년↑"
    },
    {
      id: 2921,
      confirm_name: "에이치로보틱스(주)",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2922,
      confirm_name: "씨아이씨소프트",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2923,
      confirm_name: "인텔리코리아",
      work: "웹기획·PM,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2924,
      confirm_name: "(주)그라픽",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~4년"
    },
    {
      id: 2925,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 2926,
      confirm_name: "주식회사 인터퍼슨",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 2927,
      confirm_name: "(주)이안에스아이티",
      work: "웹개발,퍼블리싱·UI개발",
      address: "인천 &gt; 남동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2928,
      confirm_name: "(주)이셀러스",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 2~4년"
    },
    {
      id: 2929,
      confirm_name: "엔터웨이파트너스",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체,경 기 &gt; 성남시",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 2930,
      confirm_name: "윤디스크(주)",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2931,
      confirm_name: "라인컴퓨터아트아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,설계·CAD·CAM,웹기획·PM,웹개발,게임·Game,웹디자인,퍼블리싱·UI개발,건축·인테리어·설계,현장·시공·감리·공무",
      address:
        "경기 &gt; 시흥시,경기 &gt; 안산시,경기 &gt; 안산시 단원구,경기 &gt; 안산시 상록구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2932,
      confirm_name: "(주)비링크헬스케어",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 2933,
      confirm_name: "(주)인텔리안테크놀로지스",
      work:
        "해외영업·무역영업,기술영업,고객센터·CS,금속·금형,전기·전자·제어,설계·CAD·CAM,서버·네트 워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,웹디자 인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2934,
      confirm_name: "(주)스터디맥스",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2935,
      confirm_name: "우원소프트(주)",
      work: "웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2936,
      confirm_name: "HeNny & McCoy",
      work: "퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2937,
      confirm_name: "(주)사람인에이치알",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2938,
      confirm_name: "(주)로브",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2939,
      confirm_name: "(주)미디어웍스에이아이",
      work:
        "해외영업·무역영업,상품기획·MD,기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,광고·시각디자인,판매·매장관리,광고영업,웹기획·PM,웹디자인,퍼블리싱·UI개발,학습지·과외·방문,광고·카피·CF,인쇄·출판·편집,부동 산·개발·경매·분양",
      address:
        "서울 &gt; 서울전체,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 양천구,서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2940,
      confirm_name: "(주)다보링크",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,퍼블리싱 ·UI개발",
      address:
        "서울 &gt; 금천구,경기 &gt; 광명시,경기 &gt; 안산시,경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 2941,
      confirm_name: "(주)한울정보",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "전북 &gt; 전주시 덕진구,전북 &gt; 전주시 완산구",
      education: "대학졸업(2,3년)이 상",
      careear: "경력 2~5년"
    },
    {
      id: 2942,
      confirm_name: "미트그린케이엘피씨",
      work: "그래픽디자인·CG,웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 금정구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 2943,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2944,
      confirm_name: "해커스랩(주)",
      work: "퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2945,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2946,
      confirm_name: "(주)피타소프트",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2947,
      confirm_name: "콘텔라(주)",
      work:
        "웹마스터·QA·테스터,웹개발,응용프로그램개발,ERP·시스템분석·설계,통신·모바일,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2948,
      confirm_name: "콘텔라(주)",
      work:
        "전기·전자·제어,웹마스터·QA·테스터,웹개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강남구,경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 2949,
      confirm_name: "(주)유웨이어플라이",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2950,
      confirm_name: "유플리트",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2951,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 2952,
      confirm_name: "(주)퓨즈와이어",
      work: "웹기획·PM,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2953,
      confirm_name: "주식회사넷클로버",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "울산 &gt; 남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~7년"
    },
    {
      id: 2954,
      confirm_name: "(주)엔젤",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2955,
      confirm_name: "(주)퀀티파이드이에스지",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 2956,
      confirm_name: "제너럴바이오(주)",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,무역사무·수출입,중장비·화물,기획· 전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,광고·시각디자인,일반영업,화학·에너지,생산관리·품질관리,생산·제조 ·포장·조립,서버·네트워크·보안,웹개발,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,세무·회계·CPA,연구소·R&D,카메라·조명·미술,사진·포토그라퍼,장애인·국가유공자",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구,전북 &gt; 전북전체,전북 &gt; 남원시,아시아·중동 &gt; 베트남,아시아·중동 &gt; 태국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 2957,
      confirm_name: "(주)아이티앤",
      work: "웹기획·PM,웹개발,퍼블리싱·UI개발",
      address:
        "서울 &gt; 강동구,서울 &gt; 광진구,서울 &gt; 노원구,서울 &gt; 송파구,서울 &gt; 중랑구,경기 &gt; 구리시,경기 &gt; 남양주시,경기 &gt; 하남시",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 2958,
      confirm_name: "(주)레이틀리코리아",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2959,
      confirm_name: "(주)위드라인",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2960,
      confirm_name: "(주)쿠노소프트",
      work: "응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "서울 &gt; 성북구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 2961,
      confirm_name: "(주)메이크인",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2962,
      confirm_name: "주식회사 디비나와코리아",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2963,
      confirm_name: "(주)플레이엑스피",
      work: "퍼블리싱·UI개발",
      address: "세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2964,
      confirm_name: "반석써치(주)",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 2965,
      confirm_name: "차일들리 (Childly)",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2966,
      confirm_name: "마인드원(주)",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 2967,
      confirm_name: "(주)스카우트플랜",
      work: "웹기획·PM,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 2968,
      confirm_name: "(주)포인트웹",
      work: "웹디자인,퍼블리싱·UI개발",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 2969,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2970,
      confirm_name: "(주)해래",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2971,
      confirm_name: "(주)조이푸드",
      work: "사무보조·문서작성,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2972,
      confirm_name: "(주)지에프씨생명과학",
      work: "컨텐츠·사이트운영,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력4년 ↑"
    },
    {
      id: 2973,
      confirm_name: "제이씨엠",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "대구 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 2974,
      confirm_name: "로퍼슨로봇&코딩영재학원",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사,학원관리·운영·상담",
      address: "대전 &gt; 대덕구",
      education: "대학졸업(2,3년)이 상",
      careear: "경력무관"
    },
    {
      id: 2975,
      confirm_name: "로퍼슨로봇영재학원",
      work: "IT·디자인·컴퓨터교육,초중고·특수학교,전문직업·IT강사",
      address: "경기 &gt; 안성시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무 관"
    },
    {
      id: 2976,
      confirm_name: "NEW국제직업전문학교",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "광주 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 2977,
      confirm_name: "주식회사 플라",
      work: "제품·산업디자인,컨텐츠·사이트운영,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 시흥시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2978,
      confirm_name: "비욘드코딩",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "서울 &gt; 서초구,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2979,
      confirm_name: "(주)진앤현시큐리티",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 2980,
      confirm_name: "경북산업직업전문학교",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 2981,
      confirm_name: "(주)라온시큐리티",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2982,
      confirm_name: "anakorea",
      work: "웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2983,
      confirm_name: "호스트웨이아이디씨(주)",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2984,
      confirm_name: "(주)퓨처젠",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "부산 &gt; 강서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 2985,
      confirm_name: "더조은컴퓨터아트학원",
      work: "IT·디자인·컴퓨터교육",
      address: "경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2986,
      confirm_name: "(주)네오인터랙티브",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 2987,
      confirm_name: "(주)비에이치씨",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 7~12년"
    },
    {
      id: 2988,
      confirm_name: "(주)우송에이치알컨설팅",
      work: "컨텐츠·사이트운영,동영상·편집·코덱,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2989,
      confirm_name: "(주)디젠트소프트",
      work: "마케팅·광고·분석,IT·솔루션영업,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 2990,
      confirm_name: "(주)큐피플",
      work: "그래픽디자인·CG,웹디자인,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 2991,
      confirm_name: "아담리즈수학 인천송도학원",
      work: "웹개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt; 서구,인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 2992,
      confirm_name: "주식회사 리스트",
      work: "IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 2993,
      confirm_name: "(주) 엠앤케이",
      work: "퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2994,
      confirm_name: "(주) 엠앤케이",
      work: "퍼블리싱·UI개발,IT·디자인·컴퓨터교육",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 2995,
      confirm_name: "삼일회계법인",
      work: "IT·디자인·컴퓨터교육,경영분석·컨설턴트",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 2996,
      confirm_name: "(주)이젠아카데미컴퓨터학원",
      work: "웹디자인,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2997,
      confirm_name: "(주)연무기술",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,연구소·R&D",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 2998,
      confirm_name: "주식회사 오즈컴퍼니",
      work: "하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 2999,
      confirm_name: "(주)파인웰시스템",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강동구,서울 &gt; 광진구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 경기전체,경기 &gt; 고양시,경기 &gt; 부천시,경기 &gt; 수원시, 경기 &gt; 안산시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3000,
      confirm_name: "(주)포원시스템",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경북 &gt; 경산시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 3001,
      confirm_name: "(주)시스젠",
      work: "응용프로그램개발,웹디자인,IT·디자인·컴퓨터교육",
      address: "전북 &gt; 전주시 완산구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3002,
      confirm_name: "주식회사 지오유아이티",
      work: "총무·법무·사무,고객센터·CS,IT·디자인·컴퓨터교육",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3003,
      confirm_name: "(주)에스씨네트",
      work: "통신·모바일,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3004,
      confirm_name: "리카멘트",
      work: "응용프로그램개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "인천 &gt; 계양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3005,
      confirm_name: "(주)이젠아카데미컴퓨터학원",
      work: "웹디자인,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3006,
      confirm_name: "원스탭에이치알(주)",
      work: "총무·법무·사무,인사·교육·노무,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 오산시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무 관"
    },
    {
      id: 3007,
      confirm_name: "아이티존(itzon)",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경남 &gt; 창원시",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3008,
      confirm_name: "아이티존(itzon)",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경남 &gt; 창원시",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3009,
      confirm_name: "(주)네이블커뮤니케이션즈",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3010,
      confirm_name: "(주) 뉴넷정보기술",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3011,
      confirm_name: "(주)현대종합사무기",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "충남 &gt; 당진시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3012,
      confirm_name: "(주)나우코딩",
      work: "IT·디자인·컴퓨터교육,교육기획·교재",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3013,
      confirm_name: "대호아이엔티(주)",
      work: "AS·서비스·수리,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "부산 &gt; 부산전체,부산 &gt; 사상구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3014,
      confirm_name: "SOtM",
      work: "전기·전자·제어,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address:
        "충남 &gt; 아산시,충남 &gt; 천안시 동남구,충남 &gt; 천 안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3015,
      confirm_name: "(주)케이지아이티뱅크학원 종로점",
      work: "TM·아웃바운드,IT·디자인·컴퓨터교육,학원관리·운영·상담",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경 력무관"
    },
    {
      id: 3016,
      confirm_name: "에브리원&플라잉북스",
      work: "그래픽디자인·CG,캐릭터·만화·애니,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3017,
      confirm_name: "(주)노드데이타",
      work: "기술영업,영업기획·관리·지원,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3018,
      confirm_name: "(주)노드데이타",
      work: "기술영업,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "부산 &gt; 금정구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3019,
      confirm_name: "고잉컴",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3020,
      confirm_name: "(주)젠믹스텍",
      work: "전기·전자·제어,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3021,
      confirm_name: "라인컴퓨터아트학원",
      work: "IT·디자인·컴퓨터교육",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3022,
      confirm_name: "라인컴퓨터아트학원",
      work: "IT·디자인·컴퓨터교육",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3023,
      confirm_name: "(주)웹타임",
      work: "IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3024,
      confirm_name: "(유)딜리버리히어로 코리아",
      work: "웹개발,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3025,
      confirm_name: "(유)딜리버리히어로 코리아",
      work: "전기·전자·제어,응용프로그램개발,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3026,
      confirm_name: "(유)딜리버리히어로 코리아",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3027,
      confirm_name: "메가존(주)",
      work:
        "서버·네트워크·보안,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,교육기획·교재",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 3028,
      confirm_name: "한국기술교육직업전문학교",
      work:
        "웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT ·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address:
        "부산 &gt; 부산전체,부산 &gt; 금정구,부산 &gt; 동래구,부산 &gt; 부산진구,부산 &gt; 연제구,부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3029,
      confirm_name: "(주)미래인재개발원",
      work: "컨텐츠·사이트운영,IT·디자인·컴퓨터교육,전문직업·IT강사",
      address: "대구 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3030,
      confirm_name: "(주)한국소프트웨어아이엔씨",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,웹디 자인,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 금천 구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3031,
      confirm_name: "(주)코리아교육그룹",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,영업기획·관리·지원,컨텐츠·사이트운영,IT·디자인·컴퓨터교육,헤드헌팅·노무·직업상담,학원관리·운영·상담",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서대문구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3032,
      confirm_name: "더조은아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,전시·공간디자인,광고·시각디자인,설계·CAD·CAM,게임·Game,하드웨어 ·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술,건축·인테리어·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 관악구,경기 &gt; 경기전체,경기 &gt; 수원시,경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3033,
      confirm_name: "국제컴퓨터아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,전시·공간디자인,광고·시각디자인,설계·CAD·CAM,게임·Game,하드 웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술,건축·인테리어·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 관악구,경기 &gt; 경기전체,경기 &gt; 수원시,경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3034,
      confirm_name: "(주)트루인테크놀로지스",
      work: "하드웨어·소프트웨어,데이터베이스·DBA",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3035,
      confirm_name: "(주)벨아이앤에스",
      work:
        "IT·솔루션영업,기술영업,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA, 인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서대문구,경기 &gt; 안산시,경기 &gt; 안산시 단원구,충남 &gt; 천안시, 충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3036,
      confirm_name: "주식회사 케이에이치에이",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3037,
      confirm_name: "(주)하나금융티아이",
      work:
        "인사·교육·노무,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,채권·보험·보상·심사",
      address:
        "서울 &gt; 강남구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 고양시,인천 &gt; 인천전체,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3038,
      confirm_name: "(주)스카우트파트너스",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3039,
      confirm_name: "로이스에이치알",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3040,
      confirm_name: "위더스파트너스 주식회사",
      work: "구매·자재·재고,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~12년"
    },
    {
      id: 3041,
      confirm_name: "(주)위메프",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3042,
      confirm_name: "(주)세코닉스",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3043,
      confirm_name: "(주)위메프",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↓"
    },
    {
      id: 3044,
      confirm_name: "(주)비원이즈",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 광명시",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 3045,
      confirm_name: "뱅크웨어글로벌(주)",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 3046,
      confirm_name: "(주) 컴투스",
      work:
        "게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt;  금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3047,
      confirm_name: "(주) 컴투스",
      work:
        "기획·전략·경영,게임·Game,응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "학력 무관",
      careear: "경력"
    },
    {
      id: 3048,
      confirm_name: "(주)아이디노",
      work: "응용프로그램개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3049,
      confirm_name: "(주)에이치알인재그룹",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력2년↑"
    },
    {
      id: 3050,
      confirm_name: "(주)위닉스정보",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 성동구,서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3051,
      confirm_name: "코커리어",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3052,
      confirm_name: "(주)제이엔제이 글로벌 컨설팅",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3053,
      confirm_name: "(주)엘림넷",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3054,
      confirm_name: "(주)엘림넷",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3055,
      confirm_name: "(주)조인스에이치알코리아",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3056,
      confirm_name: "(주)조인스에이치알코리아",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3057,
      confirm_name: "한국철도시설공단",
      work:
        "기획·전략·경영,총무·법무·사무,사무보조·문서작성,보안·경호·안전,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,고객센터·CS,기계·기계설비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,세무·회계·CPA,토 목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,현장·시공·감리·공무,안전·품질·검사·관리,부동산· 개발·경매·분양",
      address:
        "서울 &gt; 용산구,광주 &gt; 남구,대전 &gt; 동구,부산 &gt; 중구,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3058,
      confirm_name: "움트(UMT)",
      work: "회계·재무·세무·IR,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3059,
      confirm_name: "ds소프트",
      work: "시스템개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3060,
      confirm_name: "(주)인텍솔루션",
      work: "데이터베이스·DBA",
      address:
        "서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 서초구,서울 &gt; 성동구,서울 &gt; 성북구,경기 &gt; 경기전체,경기 &gt; 남양주시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 3061,
      confirm_name: "(주)위즈아이앤씨",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3062,
      confirm_name: "ACN Korea",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3063,
      confirm_name: "현대무벡스(주)",
      work:
        "기획·전략·경영,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,일반영업,IT·솔루션영업,영업기 획·관리·지원,기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,경영분석·컨설턴트,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 종로구,경기 &gt; 경기전체,경기 &gt; 이천시,부산 &gt; 부산전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3064,
      confirm_name: "(주)웹젠",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재 무·세무·IR,마케팅·광고·분석,캐릭터·만화·애니,광고영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,QA·CS강사 ·수퍼바이저,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역·통역,카메라·조명·미술",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3065,
      confirm_name: "(주)티몬",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3066,
      confirm_name: "(주)위메프",
      work: "웹기획·PM,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3067,
      confirm_name: "(주)엔씨아이티에스",
      work:
        "웹개발,게임·Game,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3068,
      confirm_name: "(주) 지아이티아카데미 역삼2",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3069,
      confirm_name: "(유)딜리버리히어로 코리아",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3070,
      confirm_name: "에스앤에스아이앤씨(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력 1~12년"
    },
    {
      id: 3071,
      confirm_name: "Dream Communications Company",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3072,
      confirm_name: "(주)마인즈랩",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3073,
      confirm_name: "(주)프로매치코리아",
      work: "기획·전략·경영,영업기획·관리·지원,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년 ↑"
    },
    {
      id: 3074,
      confirm_name: "(주)빌트온",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 3075,
      confirm_name: "(주)휴먼앤",
      work: "사무보조·문서작성,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3076,
      confirm_name: "에이에스이코리아 (주)",
      work:
        "회계·재무·세무·IR,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,토목·조경·도시·측량,전기·소방·통신·설비,환경·플랜트,안전·품질·검사·관리",
      address: "경기 &gt; 파주시",
      education: "대학졸업(2,3년)이상",
      careear: "신 입/경력"
    },
    {
      id: 3077,
      confirm_name: "(주)더파트너스경영지원센터",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3078,
      confirm_name: "의료법인 삼광의료재단",
      work:
        "경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,간호사,의료기사,일반영업,기술영업,영업기획·관리·지원,응용프로그램개발,데이터베이스·DBA,연구소·R&D",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 경기전체,대구 &gt; 대구전체,부산 &gt; 부산전체,인천 &gt; 인천전체,강원 &gt; 강원전체,경남 &gt; 창원시,전남 &gt; 전남전체,제주 &gt; 제주전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3079,
      confirm_name: "주식회사 케이에이치에이",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3080,
      confirm_name: "케이비즈소프트(KBIZ-soft)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3081,
      confirm_name: "(주)메쎄이상",
      work:
        "기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,회계·재무·세무·IR,마케팅·광고·분석, 전시·컨벤션·세미나,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 마포구,경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3082,
      confirm_name: "(주)리앤파트너스코리아",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 3083,
      confirm_name: "율시스템(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 용인시 수지구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3084,
      confirm_name: "(주)이비카드",
      work: "응용프로그램개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 동작구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3085,
      confirm_name: "(주)투믹스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3086,
      confirm_name: "(주)메타GIS컨설팅",
      work: "통신·모바일,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3087,
      confirm_name: "(주)노랑풍선",
      work: "ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3088,
      confirm_name: "(주)온고테크",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3089,
      confirm_name: "유건데이타(주)",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3090,
      confirm_name: "(주)제이앤피에이치알컨설팅",
      work: "기획·전략·경영,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3091,
      confirm_name: "맵퍼스",
      work: "응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3092,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "웹마스터·QA·테스터,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4 년)이상",
      careear: "경력무관"
    },
    {
      id: 3093,
      confirm_name: "서울대학교병원",
      work: "서버·네트워크·보안,컨텐츠·사이트운영,데이터베이스·DBA",
      address: "서울 &gt; 종로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3094,
      confirm_name: "(주)비아이매트릭스",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3095,
      confirm_name: "(주)비아이매트릭스",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3096,
      confirm_name: "(주)비아이매트릭스",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3097,
      confirm_name: "(주)후이즈시스템",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 3098,
      confirm_name: "(주)후이즈시스템",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3099,
      confirm_name: "(주)후이즈시스템",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3100,
      confirm_name: "(주)포스토피아",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 광진구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3101,
      confirm_name: "(주)대성사",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경남 &gt; 양산시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3102,
      confirm_name: "에이스파트너스",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3103,
      confirm_name: "(주)넷앤드",
      work: "ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3104,
      confirm_name: "(주)우대칼스",
      work: "데이터베이스·DBA,토목·조경·도시·측량",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3105,
      confirm_name: "(주)테라닉스",
      work:
        "기획·전략·경영,회계·재무·세무·IR,전기·전자·제어,반도체·디스플레이·LCD,웹개발,응용프로그램개발,ERP ·시스템분석·설계,데이터베이스·DBA,연구소·R&D,현장·시공·감리·공무",
      address:
        "경기 &gt; 경기전체,경기 &gt; 안산시,경기 &gt; 안산시 단원구,경기 &gt; 안산시 상록구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3106,
      confirm_name: "(주)피유엠피",
      work: "마케팅·광고·분석,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 3107,
      confirm_name: "(주)이니션",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3108,
      confirm_name: "(주)인텔리안테크놀로지스",
      work:
        "해외영업·무역영업,기술영업,고객센터·CS,금속·금형,전기·전자·제어,설계·CAD·CAM,서버·네트 워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,웹디자 인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,경기 &gt; 평택시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3109,
      confirm_name: "(주)오픈베이스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3110,
      confirm_name: "(주)이엠넷",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,IT·솔루션영업,광고영업,영업기획·관리 ·지원,웹기획·PM,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,동영상·편집·코덱,데이터베이스·DBA,카메라· 조명·미술,광고·카피·CF",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3111,
      confirm_name: "(주)에이치알그룹",
      work: "데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3112,
      confirm_name: "넥센타이어(주)",
      work:
        "제품·산업디자인,광고·시각디자인,일반영업,기술영업,영업기획·관리·지원,화학·에너지,전기·전자·제어,설계·CAD·CAM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강서구,경남 &gt; 창녕군",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3113,
      confirm_name: "HeNny & McCoy",
      work: "홍보·PR·사보,마케팅·광고·분석,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3114,
      confirm_name: "HeNny & McCoy",
      work: "마케팅·광고·분석,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3115,
      confirm_name: "HeNny & McCoy",
      work: "마케팅·광고·분석,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3116,
      confirm_name: "오티아이(주)",
      work:
        "웹기획·PM,웹개발,응용프로그램개발,하드웨어·소프트웨어,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 양천구,경기 &gt; 안산시,충북 &gt; 충북전체,충북 &gt; 진천군",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3117,
      confirm_name: "(주)인포젠",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 3118,
      confirm_name: "(주)OSB저축은행",
      work:
        "총무·법무·사무,사무보조·문서작성,금융·보험영업,웹개발,응용프로그램개발,데이터베이스·DBA,경영분석· 컨설턴트,증권·투자·펀드·외환,채권·보험·보상·심사,부동산·개발·경매·분양",
      address: "서울 &gt; 서울전체,서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3119,
      confirm_name: "(주)오픈벡스",
      work: "서버·네트워크·보안,통신·모바일,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3120,
      confirm_name: "대한상공회의소 서울기술교육센터",
      work:
        "기계·기계설비,전기·전자·제어,웹기획·PM,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3121,
      confirm_name: "(주)케이맨파워",
      work: "마케팅·광고·분석,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년 ↑"
    },
    {
      id: 3122,
      confirm_name: "주식회사 비긴메이트(Beginmate Co. ,Ltd,)",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3123,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 3124,
      confirm_name: "(주)미엘린소프트",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3125,
      confirm_name: "현진제업(주)",
      work:
        "구매·자재·재고,화학·에너지,전기·전자·제어,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램 개발,시스템개발,하드웨어·소프트웨어,데이터베이스·DBA,연구소·R&D,전기·소방·통신·설비",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3126,
      confirm_name: "(주)위메이드",
      work: "서버·네트워크·보안,웹기획·PM,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3127,
      confirm_name: "(주)슈프리마",
      work:
        "전기·전자·제어,설계·CAD·CAM,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개 발,통신·모바일,하드웨어·소프트웨어,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3128,
      confirm_name: "한국직업능력교육원 안산",
      work:
        "물류·유통·운송,구매·자재·재고,제품·산업디자인,생산관리·품질관리,서버·네트워크·보안,응용 프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address:
        "경기 &gt; 군포시,경기 &gt; 시흥시,경기 &gt; 안산시,경기 &gt; 안산시 단원구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3129,
      confirm_name: "제너럴바이오(주)",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,상품기획·MD,무역사무·수출입,중장비·화물,기획· 전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,광고·시각디자인,일반영업,화학·에너지,생산관리·품질관리,생산·제조 ·포장·조립,서버·네트워크·보안,웹개발,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,외국어·번역·통역,세무·회계·CPA,연구소·R&D,카메라·조명·미술,사진·포토그라퍼,장애인·국가유공자",
      address:
        "서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천구,서울 &gt; 영등포구,전북 &gt; 전북전체,전북 &gt; 남원시,아시아·중동 &gt; 베트남,아시아·중동 &gt; 태국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3130,
      confirm_name: "윤디스크(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3131,
      confirm_name: "(주)제이앤케이씨(JNKC Company)",
      work: "응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3132,
      confirm_name: "(주)이랜드시스템스",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3133,
      confirm_name: "(주)인터엠디컴퍼니",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,마케팅·광고·분석,고객센터·CS, 웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3134,
      confirm_name: "(주)파이디지털헬스케어",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구,서울 &gt; 서대문구,경기 &gt; 용인시 처인구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3135,
      confirm_name: "(주)파이디지털헬스케어",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구,서울 &gt; 서대문구,경기 &gt; 용인시 처인구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3136,
      confirm_name: "(주)파우컴퍼니",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,웹디자인,동영상·편집·코덱,데 이터베이스·DBA,카메라·조명·미술,사진·포토그라퍼",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3137,
      confirm_name: "이디코어",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 평택시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3138,
      confirm_name: "(주)레이틀리코리아",
      work: "웹개발,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3139,
      confirm_name: "파킹클라우드 주식회사",
      work: "서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경 력 3~10년"
    },
    {
      id: 3140,
      confirm_name: "(주)헬로서치",
      work: "ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3141,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address:
        "서울 &gt; 광진구,서울 &gt; 노원구,서울 &gt; 마포구,서울 &gt; 용산구,서울 &gt; 은평구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수 원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3142,
      confirm_name: "(주)스카우트",
      work: "응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력10년↑"
    },
    {
      id: 3143,
      confirm_name: "홈넘버(주)",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~7년"
    },
    {
      id: 3144,
      confirm_name: "(주)펨트론",
      work: "응용프로그램개발,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3145,
      confirm_name: "(학)연세대학교연세의료원",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서대문구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 3146,
      confirm_name: "에이스파트너스",
      work: "게임·Game,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~18년"
    },
    {
      id: 3147,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3148,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3149,
      confirm_name: "휴머레인컨설팅",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3150,
      confirm_name: "휴머레인컨설팅",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3151,
      confirm_name: "주식회사 와당",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 3152,
      confirm_name: "휴머레인컨설팅",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3153,
      confirm_name: "휴머레인컨설팅",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구,서울 &gt; 도봉구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3154,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3155,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3156,
      confirm_name: "주식회사 피플케어코리아",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 3157,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3158,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3159,
      confirm_name: "휴머레인컨설팅",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3160,
      confirm_name: "롤즈온 주식회사",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3161,
      confirm_name: "(주)비비파트너스",
      work: "기획·전략·경영,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3162,
      confirm_name: "(주)비비파트너스",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3163,
      confirm_name: "(주)비비파트너스",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3164,
      confirm_name: "(주)비비파트너스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3165,
      confirm_name: "(주)라온버드",
      work: "웹기획·PM,인공지능(AI)·빅데이터",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3166,
      confirm_name: "(주)라온버드",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 수원시 영통구",
      education: "석사졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3167,
      confirm_name: "(주)헬로서치",
      work: "웹개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3168,
      confirm_name: "(주)헬로서치",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3169,
      confirm_name: "구루넷",
      work: "웹개발,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력 2~15년"
    },
    {
      id: 3170,
      confirm_name: "구루넷",
      work: "응용프로그램개발,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력 2~15년"
    },
    {
      id: 3171,
      confirm_name: "구루넷",
      work: "기획·전략·경영,마케팅·광고·분석,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 3172,
      confirm_name: "(주)비아이매트릭스",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3173,
      confirm_name: "(주)스마트소셜",
      work: "웹개발,인공지능(AI)·빅데이터",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3174,
      confirm_name: "(주)스카우트",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~15년"
    },
    {
      id: 3175,
      confirm_name: "(주)큐픽스",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3176,
      confirm_name: "에이치알니즈",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3177,
      confirm_name: "(주)피처링",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~15년"
    },
    {
      id: 3178,
      confirm_name: "(주)공팔리터",
      work:
        "웹기획·PM,웹개발,응용프로그램개발,통신·모바일,웹디자인,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3179,
      confirm_name: "(주)스카우트",
      work: "기술영업,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 3180,
      confirm_name: "베스핀글로벌 주식회사",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3181,
      confirm_name: "엠코테크놀로지코리아(주)",
      work:
        "기술영업,전기·전자·제어,반도체·디스플레이·LCD,응용프로그램개발,시스템개발,인공지능(AI)·빅 데이터,연구소·R&D",
      address: "광주 &gt; 광주전체,인천 &gt; 부평구,인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3182,
      confirm_name: "엠코테크놀로지코리아(주)",
      work:
        "기술영업,전기·전자·제어,반도체·디스플레이·LCD,응용프로그램개발,시스템개발,인공지능(AI)·빅 데이터,연구소·R&D,안전·품질·검사·관리",
      address: "광주 &gt; 광주전체,인천 &gt; 부평구,인천 &gt; 연수구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 3183,
      confirm_name: "(주)더원테크",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력무관"
    },
    {
      id: 3184,
      confirm_name: "(주)더원테크",
      work: "사무보조·문서작성,컨텐츠·사이트운영,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3185,
      confirm_name: "(주)더원테크",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3186,
      confirm_name: "(주)위메프",
      work:
        "웹개발,응용프로그램개발,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3187,
      confirm_name: "주식회사 리본소프트",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3188,
      confirm_name: "(주)애버커스",
      work: "웹개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 3189,
      confirm_name: "(주)마크로젠",
      work:
        "기획·전략·경영,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,일반영업,기술영업,영업기획·관리 ·지원,바이오·제약·식품,응용프로그램개발,시스템개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3190,
      confirm_name: "(주)더아이엠씨",
      work: "웹개발,인공지능(AI)·빅데이터,연구소·R&D",
      address: "대구 &gt; 대구전체,대구 &gt; 수성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무 관"
    },
    {
      id: 3191,
      confirm_name: "(주)메디치소프트",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3192,
      confirm_name: "한국정보기술단",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 무관"
    },
    {
      id: 3193,
      confirm_name: "(주)에스피메드",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "부산 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3194,
      confirm_name: "(주)비링크헬스케어",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3195,
      confirm_name: "(주)알스피릿",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3196,
      confirm_name: "라인파이낸셜플러스(주)",
      work: "서버·네트워크·보안,웹개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3197,
      confirm_name: "메가존(주)",
      work: "서버·네트워크·보안,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~15년"
    },
    {
      id: 3198,
      confirm_name: "(주)벨아이앤에스",
      work:
        "IT·솔루션영업,기술영업,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA, 인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서대문구,경기 &gt; 안산시,경기 &gt; 안산시 단원구,충남 &gt; 천안시, 충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3199,
      confirm_name: "케이티하이텔(주)",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3200,
      confirm_name: "주식회사 케이에이치에이",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3201,
      confirm_name: "(주)하나금융티아이",
      work:
        "인사·교육·노무,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,채권·보험·보상·심사",
      address:
        "서울 &gt; 강남구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 고양시,인천 &gt; 인천전체,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3202,
      confirm_name: "(주)스카우트파트너스",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3203,
      confirm_name: "울랄라랩 주식회사",
      work: "서버·네트워크·보안,웹개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3204,
      confirm_name: "울랄라랩 주식회사",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 안양시 동안구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3205,
      confirm_name: "반석써치(주)",
      work: "인공지능(AI)·빅데이터,연구소·R&D",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 3206,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력 4~15년"
    },
    {
      id: 3207,
      confirm_name: "KTH(주)",
      work:
        "물류·유통·운송,마케팅·광고·분석,그래픽디자인·CG,전시·공간디자인,영업기획·관리·지원,시스템개발,인공지능(AI)·빅데이터,설문·통계·리서치,영화제작·배급,방송연출·PD·감독",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3208,
      confirm_name: "(주)위메프",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3209,
      confirm_name: "(주)위메프",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3210,
      confirm_name: "(주)위메프",
      work: "데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↓"
    },
    {
      id: 3211,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work: "서버·네트워크·보안,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3212,
      confirm_name: "(주)게임빌컴투스플랫폼",
      work:
        "서버·네트워크·보안,게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3213,
      confirm_name: "(주)이앤에프어드바이저",
      work: "인공지능(AI)·빅데이터,경영분석·컨설턴트,설문·통계·리서치",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3214,
      confirm_name: "(주)아이트리온",
      work: "응용프로그램개발,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3215,
      confirm_name: "(주) 컴투스",
      work:
        "게임·Game,응용프로그램개발,시스템개발,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt;  금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3216,
      confirm_name: "(주) 컴투스",
      work:
        "기획·전략·경영,게임·Game,응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "학력 무관",
      careear: "경력"
    },
    {
      id: 3217,
      confirm_name: "(주)에이치알비즈코리아",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3218,
      confirm_name: "테크온미디어 주식회사",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3219,
      confirm_name: "테크온미디어 주식회사",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 3220,
      confirm_name: "하이잡",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3221,
      confirm_name: "하이잡",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3222,
      confirm_name: "하이잡",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3223,
      confirm_name: "라온서치",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력 2~8년"
    },
    {
      id: 3224,
      confirm_name: "휴먼교육센터학원",
      work: "IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,전문직업·IT강사",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: " 경력2년↑"
    },
    {
      id: 3225,
      confirm_name: "King's 통번역",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3226,
      confirm_name: "하이잡",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3227,
      confirm_name: "하이잡",
      work: "인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3228,
      confirm_name: "HR네트워크",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 12~20년"
    },
    {
      id: 3229,
      confirm_name: "한스컨설팅",
      work: "게임·Game,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 3230,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "IT·솔루션영업,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3231,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3232,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3233,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3234,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "전기·전자·제어,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경 력1년↑"
    },
    {
      id: 3235,
      confirm_name: "(주)아임클라우드",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "신 입/경력"
    },
    {
      id: 3236,
      confirm_name: "(주)룰루랩",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3237,
      confirm_name: "움트(UMT)",
      work: "회계·재무·세무·IR,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3238,
      confirm_name: "ds소프트",
      work: "시스템개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3239,
      confirm_name: "메가존(주)",
      work: "서버·네트워크·보안,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3240,
      confirm_name: "에이치웨이(주)",
      work: "응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3241,
      confirm_name: "주식회사 핀텔",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3242,
      confirm_name: "주식회사 핀텔",
      work: "기획·전략·경영,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 3243,
      confirm_name: "(주)에이치알그룹",
      work: "인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3244,
      confirm_name: "에이치알클릭",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3245,
      confirm_name: "에이치알클릭",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3246,
      confirm_name: "에이치알클릭",
      work: "응용프로그램개발,동영상·편집·코덱,인공지능(AI)·빅데이터",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3247,
      confirm_name: "(주)스마트미디어인텐시브",
      work: "마케팅·광고·분석,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3248,
      confirm_name: "(주)에이디티캡스",
      work: "하드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 3249,
      confirm_name: "주식회사 디비엔텍",
      work: "인공지능(AI)·빅데이터",
      address: "인천 &gt; 서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3250,
      confirm_name: "(주)모비젠",
      work: "웹개발,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3251,
      confirm_name: "(주)에이치알허브",
      work: "웹기획·PM,컨텐츠·사이트운영,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3252,
      confirm_name: "(주)웹젠",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재 무·세무·IR,마케팅·광고·분석,캐릭터·만화·애니,광고영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,QA·CS강사 ·수퍼바이저,서버·네트워크·보안,웹기획·PM,웹개발,게임·Game,컨텐츠·사이트운영,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,인공지능(AI)·빅데이터,외국어·번역·통역,카메라·조명·미술",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3253,
      confirm_name: "(주)위메프",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3254,
      confirm_name: "탑커리어인사이트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3255,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3256,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 3257,
      confirm_name: "에이스파트너스",
      work: "서버·네트워크·보안,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20년"
    },
    {
      id: 3258,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3259,
      confirm_name: "서버코리아 주식회사",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3260,
      confirm_name: "(주)HR컨설팅그룹",
      work: "서버·네트워크·보안,응용프로그램개발,동영상·편집·코덱",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3261,
      confirm_name: "(주)HR컨설팅그룹",
      work: "IT·솔루션영업,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3262,
      confirm_name: "구루넷",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "석사졸업이상",
      careear: "경력 3~15년"
    },
    {
      id: 3263,
      confirm_name: "구루넷",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3264,
      confirm_name: "구루넷",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3265,
      confirm_name: "(주)델타시스템",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3266,
      confirm_name: "(사)멋쟁이사자처럼",
      work: "서버·네트워크·보안,웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3267,
      confirm_name: "주식회사 올리브헬스케어",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3268,
      confirm_name: "HnF Partners",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3269,
      confirm_name: "HnF Partners",
      work: "서버·네트워크·보안",
      address: "충북 &gt; 청주시 흥덕구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 3270,
      confirm_name: "(주)코리아서버호스팅",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 3271,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 3272,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3273,
      confirm_name: "한스컨설팅",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 8~12년"
    },
    {
      id: 3274,
      confirm_name: "한스컨설팅",
      work: "IT·솔루션영업,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 3275,
      confirm_name: "파워에이치알",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 오산시",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3276,
      confirm_name: "에이스파트너스",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3277,
      confirm_name: "한시큐리티(주)",
      work: "일반영업,기술영업,서버·네트워크·보안",
      address: "경기 &gt; 과천시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3278,
      confirm_name: "한시큐리티(주)",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 과천시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3279,
      confirm_name: "한시큐리티(주)",
      work: "일반영업,기술영업,서버·네트워크·보안",
      address: "경기 &gt; 과천시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3280,
      confirm_name: "(주)조인스에이치알코리아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3281,
      confirm_name: "(주)에이텍씨앤",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경북 &gt; 구미시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3282,
      confirm_name: "의료법인 성수의료재단 인천백병원",
      work: "사무·원무·코디,서버·네트워크·보안,응용프로그램개발",
      address: "인천 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3283,
      confirm_name: "주식회사 코어인프라",
      work: "서버·네트워크·보안,통신·모바일",
      address: "경기 &gt; 의왕시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3284,
      confirm_name: "(주)썩쎄스앤휴먼컨설팅",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3285,
      confirm_name: "주식회사 유씨아이",
      work: "IT·솔루션영업,서버·네트워크·보안,통신·모바일",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3286,
      confirm_name: "(주)교원",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3287,
      confirm_name: "(주)메이머스트",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3288,
      confirm_name: "한국모바일인증(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3289,
      confirm_name: "(주)스카우트",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "아시아·중동 &gt; 인도",
      education: "대학교졸업(4년)이 상",
      careear: "경력7년↑"
    },
    {
      id: 3290,
      confirm_name: "주식회사 에듀마크",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 고양시 일산동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3291,
      confirm_name: "굿모닝아이텍(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3292,
      confirm_name: "(주)산하정보기술",
      work:
        "기획·전략·경영,인사·교육·노무,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그 램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 금천구,제주 &gt; 제주전체",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3293,
      confirm_name: "에이치알코어스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,본사·관리·전산",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~17년"
    },
    {
      id: 3294,
      confirm_name: "(주)같다",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3295,
      confirm_name: "에이치알코어스",
      work: "서버·네트워크·보안,본사·관리·전산",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 3296,
      confirm_name: "(주)엑스엘게임즈",
      work: "서버·네트워크·보안,게임·Game,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3297,
      confirm_name: "한국정보기술연구원",
      work: "서버·네트워크·보안,IT·디자인·컴퓨터교육",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3298,
      confirm_name: "시스템베이스",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3299,
      confirm_name: "에이스휴먼파워(주)",
      work: "총무·법무·사무,서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력 1~15년"
    },
    {
      id: 3300,
      confirm_name: "경동물류(주)",
      work:
        "물류·유통·운송,총무·법무·사무,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,보험심사과,고객 센터·CS,서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어,설문·통계·리서치,법률·특허·상표,세무·회계 ·CPA,채권·보험·보상·심사,안전·품질·검사·관리",
      address: "경기 &gt; 경기전체,경기 &gt; 김포시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3301,
      confirm_name: "발레오오토모티브코리아(주)",
      work: "서버·네트워크·보안",
      address: "대구 &gt; 달서구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3302,
      confirm_name: "(주)메타씨티",
      work:
        "AS·서비스·수리,IT·솔루션영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "경 기 &gt; 경기전체,경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3303,
      confirm_name: "(주)위덱스정보기술",
      work: "서버·네트워크·보안",
      address: "전남 &gt; 여수시",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3304,
      confirm_name: "(주)투앤정보",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "대구 &gt; 수성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3305,
      confirm_name: "(주)아이디노",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3306,
      confirm_name: "오티아이(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3307,
      confirm_name: "(주)이트라이브",
      work:
        "기획·전략·경영,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소 프트웨어,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3308,
      confirm_name: "(주) 칩스앤미디어",
      work:
        "반도체·디스플레이·LCD,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발, 하드웨어·소프트웨어,연구소·R&D,병역특례",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3309,
      confirm_name: "(주)유더블유에스",
      work:
        "사무보조·문서작성,서버·네트워크·보안,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: " 경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3310,
      confirm_name: "(주)우림에프엠지",
      work: "서버·네트워크·보안,웹개발,하드웨어·소프트웨어",
      address: "서울 &gt; 동작구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3311,
      confirm_name: "이노시큐리티",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3312,
      confirm_name: "보보스링크(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3313,
      confirm_name: "보보스링크(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~11년"
    },
    {
      id: 3314,
      confirm_name: "(주)타임교육",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 3315,
      confirm_name: "보보스링크(주)",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3316,
      confirm_name: "보보스링크(주)",
      work: "서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3317,
      confirm_name: "보보스링크(주)",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3318,
      confirm_name: "보보스링크(주)",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3319,
      confirm_name: "(주)이너버스",
      work: "기술영업,서버·네트워크·보안,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3320,
      confirm_name: "(주)프로매치코리아",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3321,
      confirm_name: "동광클락(주)",
      work: "외식·식음료,호텔·카지노·콘도,서버·네트워크·보안",
      address: "아시아·중동 &gt; 필리핀",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3322,
      confirm_name: "마준소프트(주)",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,데이터베이스·DBA",
      address: "서울 &gt; 서초구,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3323,
      confirm_name: "(주)퓨쳐네트웍스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3324,
      confirm_name: "(주)피플렙",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3325,
      confirm_name: "(주)코리아서버호스팅",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3326,
      confirm_name: "(주)싸이버원",
      work: "서버·네트워크·보안",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3327,
      confirm_name: "(주)싸이버원",
      work: "서버·네트워크·보안",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 3328,
      confirm_name: "(주)코닉글로리",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3329,
      confirm_name: "(주)인라이플",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 관악구,서울 &gt; 구로구,서울 &gt; 금천 구,서울 &gt; 용산구,경기 &gt; 경기전체,경기 &gt; 고양시,경기 &gt; 광명시,경기 &gt; 부천시,경기 &gt; 안산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3330,
      confirm_name: "(주)웰데이타시스템",
      work: "IT·솔루션영업,서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3331,
      confirm_name: "(주)웰데이타시스템",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3332,
      confirm_name: "(주)싸이버원",
      work: "서버·네트워크·보안",
      address: "울산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3333,
      confirm_name: "(주)이테크비전",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3334,
      confirm_name: "(주)웰데이타시스템",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력 2~20년"
    },
    {
      id: 3335,
      confirm_name: "네오위즈",
      work: "서버·네트워크·보안,웹기획·PM,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3336,
      confirm_name: "(주)아이티노매즈",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3337,
      confirm_name: "(주)엑사이엔씨",
      work:
        "일반영업,기술영업,서버·네트워크·보안,하드웨어·소프트웨어,본사·관리·전산",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3338,
      confirm_name: "(주)굿링크",
      work: "서버·네트워크·보안,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "경남 &gt; 진주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3339,
      confirm_name: "(주)씨에이에스",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3340,
      confirm_name: "헤드펌",
      work: "서버·네트워크·보안,연구소·R&D",
      address: "대구 &gt; 남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3341,
      confirm_name: "세림티에스지(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3342,
      confirm_name: "(주)스마일서브",
      work: "서버·네트워크·보안",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3343,
      confirm_name: "KCC정보통신(주)",
      work: "서버·네트워크·보안,웹기획·PM,웹개발,데이터베이스·DBA",
      address: "전국 &gt; 전국",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 3344,
      confirm_name: "에이치알니즈",
      work: "서버·네트워크·보안,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 3345,
      confirm_name: "(주)파인트리시스템",
      work: "서버·네트워크·보안",
      address: "전남 &gt; 나주시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3346,
      confirm_name: "반석써치(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 3347,
      confirm_name: "아주대학교의료원",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,데이터베이스·DBA",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3348,
      confirm_name: "(주)넷세이프",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구,광주 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3349,
      confirm_name: "(주)엠플",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3350,
      confirm_name: "(주)씨브이티",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3351,
      confirm_name: "(주)통일감정평가법인",
      work: "총무·법무·사무,서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3352,
      confirm_name: "캐시워크",
      work: "서버·네트워크·보안,웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3353,
      confirm_name: "보광병원",
      work: "구매·자재·재고,의료기타직,서버·네트워크·보안",
      address: "대구 &gt; 달서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3354,
      confirm_name: "에스케이인포섹(주)",
      work: "서버·네트워크·보안",
      address: "서울 &gt; 서울전체,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3355,
      confirm_name: "(주)디에스티인터내셔날",
      work: "서버·네트워크·보안,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구,대전 &gt; 대전전체",
      education: "학력무관",
      careear: "경력 2~10 년"
    },
    {
      id: 3356,
      confirm_name: "렉스젠(주)",
      work: "서버·네트워크·보안",
      address: "전북 &gt; 전주시 덕진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3357,
      confirm_name: "앰진시큐러스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address:
        "서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 광진구,서울 &gt;  서초구,서울 &gt; 송파구,대전 &gt; 대전전체,대전 &gt; 대덕구,대전 &gt; 서구,대전 &gt; 유성구,대전 &gt; 중구",
      education: "대학졸업(2,3 년)이상",
      careear: "경력무관"
    },
    {
      id: 3358,
      confirm_name: "(주)그라비티",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3359,
      confirm_name: "(주)예스텍",
      work: "기술영업,영업기획·관리·지원,서버·네트워크·보안",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3360,
      confirm_name: "(주)티피코리아",
      work: "서버·네트워크·보안,웹개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강동구,경기 &gt; 경기전체,경기 &gt; 하남시",
      education: "학력 무관",
      careear: "경력1년↑"
    },
    {
      id: 3361,
      confirm_name: "(주)모니터랩",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3362,
      confirm_name: "(주)조아라",
      work: "서버·네트워크·보안,데이터베이스·DBA",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3363,
      confirm_name: "(주)모니터랩",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3364,
      confirm_name: "(주)산하정보기술",
      work:
        "기획·전략·경영,인사·교육·노무,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그 램개발,웹디자인,데이터베이스·DBA",
      address: "서울 &gt; 금천구,제주 &gt; 제주전체",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3365,
      confirm_name: "(주)스타럭스",
      work: "상품기획·MD,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3366,
      confirm_name: "(주)온라인투어",
      work: "웹기획·PM",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3367,
      confirm_name: "AJ셀카(주)",
      work:
        "무역사무·수출입,기획·전략·경영,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,마케팅·광고·분석,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,세무·회계·CPA",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구,경기 &gt; 경기전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3368,
      confirm_name: "(주)카카오페이지",
      work: "웹기획·PM",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3369,
      confirm_name: "주식회사 어댑트",
      work:
        "사무보조·문서작성,마케팅·광고·분석,광고영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: " 신입/경력"
    },
    {
      id: 3370,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3371,
      confirm_name: "(주)온리스타일",
      work:
        "구매·자재·재고,상품기획·MD,기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,의류·패션·잡화디자인,판매·매장관리,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영",
      address:
        "서울 &gt; 구로구,경기 &gt; 부천시 원미구,인천 &gt; 계양구,인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3372,
      confirm_name: "(주)콤파",
      work: "기획·전략·경영,웹기획·PM,웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3373,
      confirm_name: "(주)엠지브이보안시스템",
      work: "웹마스터·QA·테스터,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3374,
      confirm_name: "(주)와이즈버즈",
      work: "웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 3375,
      confirm_name: "(주)이트라이브",
      work:
        "기획·전략·경영,마케팅·광고·분석,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,하드웨어·소 프트웨어,웹디자인,퍼블리싱·UI개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3376,
      confirm_name: "(주)디노마드",
      work:
        "기획·전략·경영,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,웨딩·행사·이벤트,외식·식음료,회계· 재무·세무·IR,마케팅·광고·분석,전시·컨벤션·세미나,고객센터·CS,QA·CS강사·수퍼바이저,웹기획·PM,컨텐츠·사이트운영,세무·회계·CPA,교육기획·교재,광고·카피·CF",
      address:
        "서울 &gt; 강남구,서울 &gt; 구로구,서울 &gt; 마포구,서울 &gt; 서대문구,서 울 &gt; 영등포구,서울 &gt; 종로구,서울 &gt; 중구,광주 &gt; 광주전체,대구 &gt; 대구전체,부산 &gt; 부산전체",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3377,
      confirm_name: "보보스링크(주)",
      work: "웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3378,
      confirm_name: "(주)트라이어스앤컴퍼니",
      work: "상품기획·MD,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3379,
      confirm_name: "(주)더홈건축",
      work: "웹기획·PM,웹디자인",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3380,
      confirm_name: "보보스링크(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3381,
      confirm_name: "(주)글루온",
      work:
        "물류·유통·운송,홍보·PR·사보,마케팅·광고·분석,일반영업,광고영업,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영,광고·카피·CF",
      address: "경기 &gt; 화성시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3382,
      confirm_name: "보보스링크(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3383,
      confirm_name: "보보스링크(주)",
      work: "서버·네트워크·보안,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3384,
      confirm_name: "보보스링크(주)",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3385,
      confirm_name: "(주)무상엠에스마트",
      work:
        "홍보·PR·사보,웹기획·PM,웹개발,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,카메라·조명·미술,기자,방송연출·PD·감독",
      address: "강원 &gt; 강원전체,강원 &gt; 춘천시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3386,
      confirm_name: "닥터마틴에어웨어코리아(주)",
      work: "사무보조·문서작성,웹기획·PM,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3387,
      confirm_name: "케이투웹테크",
      work: "웹기획·PM",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3388,
      confirm_name: "(주)비티몰",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 남양주시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3389,
      confirm_name: "(주)디마코코리아",
      work:
        "기획·전략·경영,총무·법무·사무,홍보·PR·사보,사무보조·문서작성,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,영업기획·관리·지원,웹기획·PM,컨텐츠·사이트운영,세무·회계·CPA,광고·카피·CF",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3390,
      confirm_name: "(주)웰데이타시스템",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3391,
      confirm_name: "(주)가이빙",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3392,
      confirm_name: "네오위즈",
      work: "서버·네트워크·보안,웹기획·PM,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3393,
      confirm_name: "(주)프로그미디어랩",
      work: "사무보조·문서작성,웹기획·PM,교육기획·교재",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3394,
      confirm_name: "트루에이치알",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력 3~8년"
    },
    {
      id: 3395,
      confirm_name: "(주)지오엔티",
      work: "웹기획·PM",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3396,
      confirm_name: "(주)비원비오에프",
      work:
        "구매·자재·재고,상품기획·MD,무역사무·수출입,기획·전략·경영,사무보조·문서작성,마케팅·광고·분석, 일반영업,영업기획·관리·지원,웹기획·PM,방송연출·PD·감독",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3397,
      confirm_name: "KCC정보통신(주)",
      work: "서버·네트워크·보안,웹기획·PM,웹개발,데이터베이스·DBA",
      address: "전국 &gt; 전국",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 3398,
      confirm_name: "덴오믹스",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3399,
      confirm_name: "굿커리어",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3400,
      confirm_name: "(주)옐로우그라운드",
      work:
        "상품기획·MD,회계·재무·세무·IR,마케팅·광고·분석,웹기획·PM,설문·통계·리서치",
      address: "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3401,
      confirm_name: "근영실업(주)",
      work: "웹마스터·QA·테스터,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3402,
      confirm_name: "(주)바른웹",
      work: "영업기획·관리·지원,고객센터·CS,웹기획·PM",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3403,
      confirm_name: "아나테이너코리아",
      work: "웹기획·PM,동영상·편집·코덱,교육기획·교재",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3404,
      confirm_name: "세렌디피티",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3405,
      confirm_name: "(주)아미나블루",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3406,
      confirm_name: "위즈시스템즈(주)",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3407,
      confirm_name: "웹플레이",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,웹기획·PM,컨텐츠·사이 트운영,웹디자인",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3408,
      confirm_name: "(주)마콘컴퍼니",
      work:
        "상품기획·MD,기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,영업기획·관리·지원,웹기획·PM,광고·카 피·CF",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3409,
      confirm_name: "(주)스펙업애드",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3410,
      confirm_name: "(주)신라시스템",
      work: "IT·솔루션영업,웹기획·PM,웹개발",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3411,
      confirm_name: "(주)에브리플레이",
      work:
        "상품기획·MD,일반영업,금융·보험영업,기술영업,영업기획·관리·지원,TM·아웃바운드,고객센터·CS,웹기획·PM,게임·Game,컨텐츠·사이트운영",
      address:
        "서울 &gt; 금천구,대구 &gt; 대구전체,대전 &gt; 대전전체,전남 &gt; 전남전체,전북 &gt; 전 북전체,세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3412,
      confirm_name: "(주)동양인터내쇼널",
      work: "웹기획·PM",
      address: "경기 &gt; 용인시",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3413,
      confirm_name: "태평양물산",
      work: "웹기획·PM,웹개발,웹디자인",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력 4~9년"
    },
    {
      id: 3414,
      confirm_name: "주식회사 아이누리",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3415,
      confirm_name: "디엠케이인터내셔날",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 동래구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3416,
      confirm_name: "(주)엑시아",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 3417,
      confirm_name: "(주)프르다",
      work:
        "기획·전략·경영,사무보조·문서작성,그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address:
        "서울 &gt; 동작구,서울 &gt; 마포구,서울 &gt; 용산구,서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3418,
      confirm_name: "(주)프르다",
      work:
        "기획·전략·경영,사무보조·문서작성,그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3419,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,웹기획·PM,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3420,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "서버·네트워크·보안,웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3421,
      confirm_name: "(주)코리아휴먼리소시스",
      work: "웹기획·PM,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3422,
      confirm_name: "(주)이랜드",
      work:
        "해외영업·무역영업,상품기획·MD,기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,섬유·의류·패션,웹기 획·PM,응용프로그램개발,웹디자인,설문·통계·리서치,카메라·조명·미술",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3423,
      confirm_name: "헤리티지서치코어",
      work: "웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3424,
      confirm_name: "(주)지앤미",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 부산진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3425,
      confirm_name: "(주)컨설트인사이드",
      work: "웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3426,
      confirm_name: "(주)커밀리아",
      work: "웹기획·PM",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3427,
      confirm_name: "벤타스 주식회사",
      work: "서버·네트워크·보안,웹기획·PM,웹개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3428,
      confirm_name: "타겟컨설팅그룹",
      work: "기획·전략·경영,레저·스포츠,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~15년"
    },
    {
      id: 3429,
      confirm_name: "(주)에스브이",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3430,
      confirm_name: "타겟컨설팅그룹",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3431,
      confirm_name: "(주)TV조선",
      work:
        "기획·전략·경영,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,그래픽디자인·CG,웹 기획·PM,동영상·편집·코덱,세무·회계·CPA,카메라·조명·미술,광고·카피·CF,기자,방송연출·PD·감독,진행·아나운서",
      address:
        "서 울 &gt; 서울전체,서울 &gt; 중구,경기 &gt; 경기전체,경기 &gt; 수원시,울산 &gt; 울산전체",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3432,
      confirm_name: "(주)디지털포토",
      work:
        "기획·전략·경영,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3433,
      confirm_name: "(주)아메바",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3434,
      confirm_name: "(주)모두싸인",
      work: "웹기획·PM,웹디자인",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3435,
      confirm_name: "동원대학교",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "경기 &gt; 광주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3436,
      confirm_name: "번개장터(주)",
      work: "기획·전략·경영,웹기획·PM",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3437,
      confirm_name: "(주)맨토스파워",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3438,
      confirm_name: "주식회사 공팔리터",
      work: "기획·전략·경영,마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 3439,
      confirm_name: "(주)비즈니스온커뮤니케이션",
      work: "IT·솔루션영업,웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3440,
      confirm_name: "(주)지아이티아카데미",
      work:
        "기획·전략·경영,인사·교육·노무,웹기획·PM,연구소·R&D,교육기획·교재,전문직업·IT강사,학원관리·운영·상담",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3441,
      confirm_name: "(주)헬로서치",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3442,
      confirm_name: "(주)케이맨파워",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 3443,
      confirm_name: "(주)케이맨파워",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3444,
      confirm_name: "(주)케이맨파워",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3445,
      confirm_name: "(주)케이맨파워",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3446,
      confirm_name: "(주)케이맨파워",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3447,
      confirm_name: "(주)아이퀘스트",
      work: "IT·솔루션영업,웹기획·PM",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3448,
      confirm_name: "(주)케이맨파워",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3449,
      confirm_name: "(주)케이맨파워",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3450,
      confirm_name: "쉬즈홈",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 마포구",
      education: "고등학교졸업이상",
      careear: "경력 1~4년"
    },
    {
      id: 3451,
      confirm_name: "(주)글로벌스카우트",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~9년"
    },
    {
      id: 3452,
      confirm_name: "(주)씨알에스코리아(갈릴레오코리아)",
      work: "여행·관광·항공,웹기획·PM,웹개발",
      address: "서울 &gt; 종로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~3년"
    },
    {
      id: 3453,
      confirm_name: "주식회사 피플케어코리아",
      work: "웹기획·PM",
      address: "서울 &gt; 강남구,전국 &gt; 전국",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3454,
      confirm_name: "(주)우경정보기술",
      work: "기획·전략·경영,웹기획·PM,응용프로그램개발",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3455,
      confirm_name: "(주)아이스크림에듀",
      work:
        "해외영업·무역영업,기획·전략·경영,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,마케팅·광고·분석,출판·편집디자인,광고·시각디자인,웹마스터·QA·테스터,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,시스템개발,통신·모바일,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,데이터베이스·DBA,교육기획·교재,초 중고·특수학교,인쇄·출판·편집",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3456,
      confirm_name: "(주)한라이엔티",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3457,
      confirm_name: "(주)한스넷",
      work: "서버·네트워크·보안,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3458,
      confirm_name: "라온서치",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 3459,
      confirm_name: "에스시티 주식회사",
      work: "웹마스터·QA·테스터,웹기획·PM,컨텐츠·사이트운영",
      address: "세종 &gt; 세종특별자치시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3460,
      confirm_name: "(주)피플렙",
      work: "서버·네트워크·보안,웹기획·PM,시스템개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3461,
      confirm_name: "주식회사크레펀",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구,아시아·중동 &gt; 아랍에미레이트연합국",
      education: "학력무관",
      careear: "경력 무관"
    },
    {
      id: 3462,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,웹기획·PM",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3463,
      confirm_name: "휴머레인컨설팅",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3464,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3465,
      confirm_name: "휴머레인컨설팅",
      work: "물류·유통·운송,웹기획·PM,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,인천 &gt; 인천전체",
      education: "학력 무관",
      careear: "경력5년↑"
    },
    {
      id: 3466,
      confirm_name: "(주)초정한우",
      work: "마케팅·광고·분석,웹기획·PM,웹디자인",
      address: "충북 &gt; 청주시 흥덕구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3467,
      confirm_name: "휴머레인컨설팅",
      work: "웹기획·PM,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3468,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "회계·재무·세무·IR,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3469,
      confirm_name: "드래곤모터스(주)",
      work: "전기·전자·제어,서버·네트워크·보안,웹기획·PM",
      address: "충남 &gt; 당진시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3470,
      confirm_name: "경기관광개발(주)",
      work: "웹기획·PM",
      address: "경기 &gt; 광주시",
      education: "학력무관",
      careear: "경력3년↓"
    },
    {
      id: 3471,
      confirm_name: "휴머레인컨설팅",
      work: "웹기획·PM",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3472,
      confirm_name: "휴머레인컨설팅",
      work: "마케팅·광고·분석,웹기획·PM,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3473,
      confirm_name: "(주)솔비트",
      work: "웹기획·PM,응용프로그램개발",
      address: "경기 &gt; 용인시 기흥구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3474,
      confirm_name: "(주)크레아소프트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구,경북 &gt; 김천시",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 3475,
      confirm_name: "(주)펫츠비",
      work: "웹기획·PM,웹개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3476,
      confirm_name: "(주)크레아소프트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구,경북 &gt; 김천시",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3477,
      confirm_name: "(주)대원씨앤씨",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3478,
      confirm_name: "(주)브릭",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 3479,
      confirm_name: "(주)에이블컨설팅",
      work: "웹개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3480,
      confirm_name: "(주)펫츠비",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3481,
      confirm_name: "(주)폭스소프트",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3482,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3483,
      confirm_name: "(주)소만사",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3484,
      confirm_name: "(주)트라움인포테크",
      work: "웹개발",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3485,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~13년"
    },
    {
      id: 3486,
      confirm_name: "주식회사 스타랩스",
      work: "서버·네트워크·보안,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3487,
      confirm_name: "현진이앤에스 주식회사",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3488,
      confirm_name: "현진이앤에스 주식회사",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3489,
      confirm_name: "(주)레뷰코퍼레이션",
      work: "웹기획·PM,웹개발,웹디자인,외국어·번역·통역",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3490,
      confirm_name: "(주)지니뮤직",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3491,
      confirm_name: "(주)유비소시어스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 3492,
      confirm_name: "제일에듀원격평생교육원",
      work: "웹개발",
      address: "대구 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~7년"
    },
    {
      id: 3493,
      confirm_name: "노드테크",
      work: "웹개발",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3494,
      confirm_name: "이이넥서스",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,웹개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3495,
      confirm_name: "이이넥서스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "일본 &gt; 도쿄",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3496,
      confirm_name: "(주)엔소프트",
      work: "웹개발",
      address: "울산 &gt; 남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3497,
      confirm_name: "굿네트워크",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3498,
      confirm_name: "선진지앤아이(주)",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 3499,
      confirm_name: "(주)뉴젠씨앤아이",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3500,
      confirm_name: "주식회사 짐싸",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 3501,
      confirm_name: "이루온",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3502,
      confirm_name: "(주)해솔데이타",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~5년"
    },
    {
      id: 3503,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구,서울 &gt; 구로구,전남 &gt; 영암군",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3504,
      confirm_name: "(주)사람인에이치알",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3505,
      confirm_name: "교원",
      work:
        "기획·전략·경영,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,웹디자인,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3506,
      confirm_name: "헤리티지서치코어",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3507,
      confirm_name: "(주)커브스코리아",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3508,
      confirm_name: "유니웹스(주)",
      work: "웹개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3509,
      confirm_name: "유니웹스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3510,
      confirm_name: "(주)탑앤스카우트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3511,
      confirm_name: "뉴코아모바일",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3512,
      confirm_name: "솔루션 인코퍼레이티드",
      work: "웹개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 3513,
      confirm_name: "인포뱅크(주)",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3514,
      confirm_name: "유니웹스(주)",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 3515,
      confirm_name: "(주)패션플러스",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 3516,
      confirm_name: "에이프로젠제약(주)",
      work:
        "총무·법무·사무,회계·재무·세무·IR,생산관리·품질관리,웹기획·PM,웹개발,응용프로그램개발,시스템개 발,ERP·시스템분석·설계,웹디자인,세무·회계·CPA",
      address:
        "경기 &gt; 경기전체,경기 &gt; 성남시,경기 &gt; 성남시 중원구,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3517,
      confirm_name: "주식회사 쿠캣",
      work: "서버·네트워크·보안,웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3518,
      confirm_name: "마인드원(주)",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3519,
      confirm_name: "(주)투비파트너즈",
      work: "서버·네트워크·보안,웹개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~9년"
    },
    {
      id: 3520,
      confirm_name: "(주)앰에이치솔루션",
      work: "웹개발",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3521,
      confirm_name: "SK플래닛(주)",
      work:
        "웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치",
      address: "경기 &gt; 성남시,경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 3522,
      confirm_name: "(주)에프앤아이",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3523,
      confirm_name: "에스씨엠케이(주)",
      work:
        "물류·유통·운송,구매·자재·재고,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 강남구,서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3524,
      confirm_name: "(주)씨앤엠소프트",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 동작구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3525,
      confirm_name: "(주)카카오커머스",
      work: "웹개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3526,
      confirm_name: "한아이덴티티",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3527,
      confirm_name: "(주)멀틱스",
      work: "웹개발,응용프로그램개발",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "경력 5~20년"
    },
    {
      id: 3528,
      confirm_name: "엘케이(LK)",
      work: "웹개발,응용프로그램개발",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3529,
      confirm_name: "씨에스랩 주식회사",
      work: "웹개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3530,
      confirm_name: "(주) 플로언스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3531,
      confirm_name: "(주)용된다컴퍼니",
      work: "웹개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력1년↓"
    },
    {
      id: 3532,
      confirm_name: "(주)이삭랜드코리아",
      work: "웹개발",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3533,
      confirm_name: "한국비즈지원센터",
      work: "마케팅·광고·분석,웹개발,웹디자인",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3534,
      confirm_name: "(주)리번드",
      work: "웹개발,하드웨어·소프트웨어",
      address: "대전 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력4년↑"
    },
    {
      id: 3535,
      confirm_name: "앤시정보기술(주)",
      work: "웹개발",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3536,
      confirm_name: "더 휴먼",
      work: "웹개발,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 3537,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~11년"
    },
    {
      id: 3538,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "웹개발,퍼블리싱·UI개발",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3539,
      confirm_name: "(주)아와소프트",
      work: "웹개발,응용프로그램개발",
      address: "경북 &gt; 김천시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3540,
      confirm_name: "맨쉬 컨설팅 주식회사",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "대 학교졸업(4년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 3541,
      confirm_name: "(주)아이템베이",
      work: "기획·전략·경영,웹기획·PM,웹개발",
      address: "서울 &gt; 양천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3542,
      confirm_name: "(주)아이템베이",
      work: "웹기획·PM,웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3543,
      confirm_name: "(주)아이템베이",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 양천구",
      education: "고등학교졸업이상",
      careear: "경력 1~5년"
    },
    {
      id: 3544,
      confirm_name: "해성손해사정(주)",
      work: "웹개발,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 3545,
      confirm_name: "(주)우암코퍼레이션",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3546,
      confirm_name: "제이티넷",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3547,
      confirm_name: "(주)지성아이티",
      work: "웹개발",
      address: "서울 &gt; 구로구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 3548,
      confirm_name: "핀플레이",
      work: "웹개발",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3549,
      confirm_name: "에스피테크놀러지",
      work: "웹개발,퍼블리싱·UI개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 관악구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력4 년↑"
    },
    {
      id: 3550,
      confirm_name: "에스피테크놀러지",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 관악구,경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3551,
      confirm_name: "주식회사 스포카",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3552,
      confirm_name: "대성공업(주)",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3553,
      confirm_name: "(주)시큐레이어",
      work: "IT·솔루션영업,웹개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3554,
      confirm_name: "(주)캐럿글로벌",
      work:
        "마케팅·광고·분석,일반영업,영업기획·관리·지원,TM·인바운드,웹기획·PM,웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발,외국어·번역·통역,연구소·R&D,학원관리·운영·상담",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,대전 &gt; 대전전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3555,
      confirm_name: "아이와이씨앤씨(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3556,
      confirm_name: "(주)온더아이티",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 3557,
      confirm_name: "(주)드림시스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 이천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3558,
      confirm_name: "(주)스폰지",
      work: "웹개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 1~10년"
    },
    {
      id: 3559,
      confirm_name: "(주)에스아이알소프트",
      work: "웹기획·PM,웹개발,웹디자인",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 과천시,경기 &gt; 성남시,경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3560,
      confirm_name: "(주)보강시스템",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "대구 &gt; 달서구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3561,
      confirm_name: "아이와이씨앤씨(주)",
      work: "웹개발",
      address: "경기 &gt; 구리시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3562,
      confirm_name: "(주)브랜디",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3563,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3564,
      confirm_name: "(주)지란지교시큐리티",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3565,
      confirm_name: "제이드 소프트",
      work: "웹개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3566,
      confirm_name: "SMI",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 3567,
      confirm_name: "비트큐브(주)",
      work: "웹개발",
      address: "서울 &gt; 성동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3568,
      confirm_name: "(주)아이멘토",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 3569,
      confirm_name: "아이와이씨앤씨(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3570,
      confirm_name: "(주)커리어코리아",
      work: "서버·네트워크·보안,웹개발,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3571,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 4~14년"
    },
    {
      id: 3572,
      confirm_name: "(주)디케이커뮤니티",
      work: "웹기획·PM,웹개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3573,
      confirm_name: "기웅정보통신(주)",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3574,
      confirm_name: "(주)캐럿글로벌",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3575,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력8년↑"
    },
    {
      id: 3576,
      confirm_name: "(주)미탭스플러스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3577,
      confirm_name: "(주)리턴트루",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3578,
      confirm_name: "(주)맨토스파워",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력8년↑"
    },
    {
      id: 3579,
      confirm_name: "(주)탑앤스카우트",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3580,
      confirm_name: "(주)제니엘",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3581,
      confirm_name: "(주)코세코",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 양천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3582,
      confirm_name: "(주)헬로서치",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3583,
      confirm_name: "와이선웹",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3584,
      confirm_name: "데이타루디",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3585,
      confirm_name: "(주)베스파",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3586,
      confirm_name: "(주)게임에듀",
      work:
        "경리·출납·결산,서버·네트워크·보안,웹개발,게임·Game,응용프로그램개발,웹디자인,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3587,
      confirm_name: "한얼엔지니어링",
      work: "설계·CAD·CAM,게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3588,
      confirm_name: "(주)슈빅",
      work: "IT·솔루션영업,서버·네트워크·보안,게임·Game,응용프로그램개발",
      address:
        "서울 &gt; 광진구,서울 &gt; 동대문구,서울 &gt;  성동구,서울 &gt; 용산구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3589,
      confirm_name: "(주)에이스프로젝트",
      work: "그래픽디자인·CG,게임·Game,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3590,
      confirm_name: "알서포트(주)",
      work: "생산관리·품질관리,웹마스터·QA·테스터,게임·Game",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3591,
      confirm_name: "(주)아이엠씨게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3592,
      confirm_name: "(주)에어에이알",
      work: "그래픽디자인·CG,게임·Game",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3593,
      confirm_name: "(주)아이엠씨게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3594,
      confirm_name: "(주)아이엠씨게임즈",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3595,
      confirm_name: "(주)엘엔케이로직코리아",
      work: "게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3596,
      confirm_name: "(주)네이처크리에이티브",
      work: "게임·Game",
      address: "경기 &gt; 용인시 수지구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 3597,
      confirm_name: "(주)라이온브리지테크놀로지스코리아",
      work: "게임·Game,외국어·번역·통역",
      address: "서울 &gt; 마포구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3598,
      confirm_name: "주식회사 유저해빗",
      work: "게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3599,
      confirm_name: "네오위즈",
      work: "캐릭터·만화·애니,서버·네트워크·보안,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3600,
      confirm_name: "(주)롤큐",
      work: "게임·Game,연예·엔터테인먼트",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3601,
      confirm_name: "그랙션",
      work: "캐릭터·만화·애니,게임·Game,응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3602,
      confirm_name: "(주)큐로드 부산지점",
      work: "게임·Game",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3603,
      confirm_name: "(주)큐로드 부산지점",
      work: "게임·Game",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3604,
      confirm_name: "(주)하운드13",
      work: "총무·법무·사무,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3605,
      confirm_name: "천백십일(주)",
      work: "웹기획·PM,게임·Game,인공지능(AI)·빅데이터",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3606,
      confirm_name: "(주)펄스",
      work: "해외영업·무역영업,게임·Game,외국어·번역·통역",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3607,
      confirm_name: "한길씨앤씨(주)",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3608,
      confirm_name: "(주)사이펀",
      work: "게임·Game",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3609,
      confirm_name: "(주)사이펀",
      work: "게임·Game",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3610,
      confirm_name: "(주)해머엔터테인먼트",
      work: "해외영업·무역영업,웹기획·PM,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3611,
      confirm_name: "제트로닉스코리아(주)",
      work: "서버·네트워크·보안,게임·Game,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3612,
      confirm_name: "주식회사 미리내글로벌",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3613,
      confirm_name: "KOG",
      work: "마케팅·광고·분석,웹기획·PM,게임·Game",
      address: "대구 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3614,
      confirm_name: "믹스콘",
      work: "게임·Game,웹디자인",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3615,
      confirm_name: "(주)레이랩",
      work: "게임·Game,웹디자인",
      address: "부산 &gt; 연제구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3616,
      confirm_name: "(주)잔디소프트",
      work: "게임·Game",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3617,
      confirm_name: "(주)베스트피플컴퍼니코리아",
      work: "게임·Game,컨텐츠·사이트운영",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3618,
      confirm_name: "주식회사 볼트러스트",
      work: "서버·네트워크·보안,게임·Game",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3619,
      confirm_name: "(주)애니펜",
      work: "캐릭터·만화·애니,게임·Game",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3620,
      confirm_name: "(주)아이유디자인",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3621,
      confirm_name: "(주)디에이트게임즈",
      work: "웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3622,
      confirm_name: "NHN(주)",
      work: "캐릭터·만화·애니,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3623,
      confirm_name: "NHN(주)",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3624,
      confirm_name: "NHN(주)",
      work: "게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3625,
      confirm_name: "주식회사 리펀드100",
      work: "그래픽디자인·CG,게임·Game,웹디자인",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 3626,
      confirm_name: "(주)이노컨",
      work: "게임·Game",
      address: "전북 &gt; 전주시 완산구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3627,
      confirm_name: "주식회사 블록트루퍼즈",
      work: "웹개발,게임·Game",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3628,
      confirm_name: "(주)펄어비스",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3629,
      confirm_name: "(주)펄어비스",
      work: "웹마스터·QA·테스터,게임·Game",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3630,
      confirm_name: "(주)글로벌에이치알코리아",
      work: "게임·Game",
      address: "북·중미 &gt; 캐나다",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3631,
      confirm_name: "(주)트랜스코스모스코리아",
      work: "고객센터·CS,게임·Game",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 광진구, 서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3632,
      confirm_name: "(주)아스트라페",
      work: "캐릭터·만화·애니,게임·Game,카메라·조명·미술",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 3633,
      confirm_name: "(주)카카오VX",
      work: "기획·전략·경영,서버·네트워크·보안,게임·Game",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3634,
      confirm_name: "(주)모바인어스",
      work: "게임·Game,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 3635,
      confirm_name: "메가존(주)",
      work:
        "해외영업·무역영업,구매·자재·재고,기획·전략·경영,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루 션영업,금융·보험영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,게임·Game,응용프로그램개발,경영분석·컨설턴트,외국어·번역·통역",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3636,
      confirm_name: "한국디자인진흥원",
      work:
        "그래픽디자인·CG,출판·편집디자인,제품·산업디자인,캐릭터·만화·애니,의류·패션·잡화디자인,디자인기타,전시·공간디자인,광고·시각디자인,설계·CAD·CAM,웹기획·PM,웹개발,게임·Game,웹디자인,퍼블리싱·UI개발,동영상·편집· 코덱,사진·포토그라퍼,건축·인테리어·설계",
      address:
        "서울 &gt; 서울전체,경기 &gt; 경기전체,대구 &gt; 대구전체,부산 &gt; 부산전체, 경북 &gt; 경북전체,전남 &gt; 전남전체,충북 &gt; 충북전체,전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3637,
      confirm_name: "더조은아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,전시·공간디자인,광고·시각디자인,설계·CAD·CAM,게임·Game,하드웨어 ·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술,건축·인테리어·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 관악구,경기 &gt; 경기전체,경기 &gt; 수원시,경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3638,
      confirm_name: "국제컴퓨터아카데미",
      work:
        "그래픽디자인·CG,캐릭터·만화·애니,전시·공간디자인,광고·시각디자인,설계·CAD·CAM,게임·Game,하드 웨어·소프트웨어,웹디자인,퍼블리싱·UI개발,동영상·편집·코덱,IT·디자인·컴퓨터교육,카메라·조명·미술,건축·인테리어·설계",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강서구,서울 &gt; 관악구,경기 &gt; 경기전체,경기 &gt; 수원시,경기 &gt; 수원시 팔달구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3639,
      confirm_name: "(주)휴먼코아",
      work: "상품기획·MD,사무보조·문서작성,컨텐츠·사이트운영",
      address:
        "서울 &gt; 강남구,서울 &gt; 강동구,서울 &gt; 관악구,서울 &gt; 금천구,서울 &gt; 송파구,경기 &gt; 광주시,경기 &gt; 성남시 분당구,경기 &gt; 수원시 영통구,경기 &gt; 안양시,경기 &gt; 용인시 기흥구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3640,
      confirm_name: "KTH",
      work: "그래픽디자인·CG,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 동작구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3641,
      confirm_name: "울트라패션",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "경기 &gt; 부천시 소사구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3642,
      confirm_name: "(주)내추럴홈",
      work: "디자인기타,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3643,
      confirm_name: "모르비도",
      work: "물류·유통·운송,고객센터·CS,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3644,
      confirm_name: "주식회사 크리스탈렌",
      work: "홍보·PR·사보,판매·매장관리,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3645,
      confirm_name: "(주)키스템프",
      work: "상품기획·MD,사무보조·문서작성,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,경기 &gt; 경기전체,경기 &gt; 성남시  분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3646,
      confirm_name: "(주)한강기업",
      work:
        "홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,디자인기타,광고영업,컨텐츠·사이트운 영,웹디자인,동영상·편집·코덱,카메라·조명·미술",
      address: "부산 &gt; 부산전체,부산 &gt; 부산진구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3647,
      confirm_name: "농업회사법인(주)삼흥",
      work:
        "상품기획·MD,홍보·PR·사보,마케팅·광고·분석,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구,서울 &gt; 양천구,경기 &gt; 김포시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 3648,
      confirm_name: "(주)비원시스템",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3649,
      confirm_name: "헤리티지서치코어",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~7년"
    },
    {
      id: 3650,
      confirm_name: "(주)깃털",
      work: "물류·유통·운송,컨텐츠·사이트운영",
      address: "서울 &gt; 도봉구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3651,
      confirm_name: "(주)태영에이치엔씨",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3652,
      confirm_name: "(주)패션플러스",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 3653,
      confirm_name: "(주)유솔",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3654,
      confirm_name: "(주)유솔",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3655,
      confirm_name: "(주)두일씨앤씨",
      work:
        "총무·법무·사무,사무보조·문서작성,일반영업,컨텐츠·사이트운영,웹디자인",
      address:
        "서울 &gt; 동작구,서울 &gt; 서대 문구,서울 &gt; 영등포구,서울 &gt; 용산구,서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3656,
      confirm_name: "라붐팩토리(주)",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 3657,
      confirm_name: "미오컴퍼니",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "대구 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3658,
      confirm_name: "아인스토어",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3659,
      confirm_name: "삼손농업회사법인(주)",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "부산 &gt; 남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3660,
      confirm_name: "(주)사임당화장품",
      work:
        "해외영업·무역영업,상품기획·MD,무역사무·수출입,기획·전략·경영,경리·출납·결산,회계·재무·세무·IR,그래픽디자인·CG,출판·편집디자인,제품·산업디자인,광고·시각디자인,일반영업,화학·에너지,생산관리·품질관리,컨텐츠·사이트운영,웹디자인,세무·회계·CPA,연구소·R&D",
      address: "서울 &gt; 동작구,충북 &gt; 청주시,충북 &gt; 청주시 청원구",
      education: "대학졸업(2,3년) 이상",
      careear: "신입/경력"
    },
    {
      id: 3661,
      confirm_name: "(주)아이룩스",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3662,
      confirm_name: "(주)인텔릭",
      work: "웹기획·PM,컨텐츠·사이트운영,교육기획·교재",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3663,
      confirm_name: "(주)패션플러스",
      work: "상품기획·MD,컨텐츠·사이트운영",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3664,
      confirm_name: "(주)엘포트서비스",
      work: "홍보·PR·사보,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3665,
      confirm_name: "아이앤비인터네셔널",
      work: "상품기획·MD,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 강북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3666,
      confirm_name: "(주)비에이치아이인터내셔날",
      work: "컨텐츠·사이트운영",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 3667,
      confirm_name: "(주)이엔커머스",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3668,
      confirm_name: "한국벤자민무어페인트(주)",
      work: "그래픽디자인·CG,출판·편집디자인,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년) 이상",
      careear: "경력1년↑"
    },
    {
      id: 3669,
      confirm_name: "(주)에스제이 네일",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "인천 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3670,
      confirm_name: "(주)바른씨푸드",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 동작구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3671,
      confirm_name: "(주)블랙홀릭",
      work: "홍보·PR·사보,의류·패션·잡화디자인,컨텐츠·사이트운영",
      address: "전남 &gt; 순천시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3672,
      confirm_name: "라벨영",
      work: "그래픽디자인·CG,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 강서구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3673,
      confirm_name: "(주)카리스",
      work: "상품기획·MD,판매·매장관리,컨텐츠·사이트운영",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 수원시 영통구,경기 &gt; 안양시,경기 &gt; 용인시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3674,
      confirm_name: "(주)고릴라디스트릭트",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,그래픽디자인·CG,광고·시각디자인,웹기획·PM,컨텐츠·사이트운영,동영상·편집·코덱,카메라·조명·미술,기자",
      address: "서울 &gt; 서울전체,서울 &gt; 종로구,서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3675,
      confirm_name: "인파트너스",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 5~12년"
    },
    {
      id: 3676,
      confirm_name: "(주)창성코퍼레이션",
      work: "상품기획·MD,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3677,
      confirm_name: "(주)아이템베이",
      work: "웹기획·PM,웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3678,
      confirm_name: "(주)킨도",
      work: "상품기획·MD,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3679,
      confirm_name: "LYN",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3680,
      confirm_name: "이미지온(주)",
      work: "컨텐츠·사이트운영,사진·포토그라퍼",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 3681,
      confirm_name: "GGCompany",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3682,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "일반영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력12년↑"
    },
    {
      id: 3683,
      confirm_name: "GGCompany",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3684,
      confirm_name: "GGCompany",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 서울전체,인천 &gt; 인천전체,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3685,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "일반영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 3686,
      confirm_name: "(주)코지텍",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "부산 &gt; 북구,부산 &gt; 사상구,경남 &gt; 김해시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3687,
      confirm_name: "(주)온리스타일",
      work:
        "구매·자재·재고,사무보조·문서작성,출판·편집디자인,제품·산업디자인,디자인기타,웹기획·PM,컨텐츠·사이 트운영,웹디자인",
      address:
        "서울 &gt; 구로구,경기 &gt; 부천시 소사구,경기 &gt; 부천시 오정구,경기 &gt; 부천시 원미구,인천 &gt; 계양 구,인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt; 서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3688,
      confirm_name: "(주)45스페이스",
      work: "TM·인바운드,고객센터·CS,웹기획·PM,컨텐츠·사이트운영",
      address: "경기 &gt; 고양시 덕양구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3689,
      confirm_name: "(주)아트밸리",
      work: "전시·컨벤션·세미나,컨텐츠·사이트운영",
      address: "경기 &gt; 양주시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3690,
      confirm_name: "(주)위즈컴퍼니",
      work: "구매·자재·재고,납품·배송·택배,컨텐츠·사이트운영",
      address: "부산 &gt; 사상구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3691,
      confirm_name: "(주)스타일홀딩스",
      work: "해외영업·무역영업,상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3692,
      confirm_name: "(주)얼떨결",
      work: "무역사무·수출입,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3693,
      confirm_name: "(주)디케이비즈니스",
      work:
        "사무보조·문서작성,마케팅·광고·분석,광고·시각디자인,TM·인바운드,고객센터·CS,웹기획·PM,컨텐츠· 사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3694,
      confirm_name: "(주)TGWP-The M Public(엠퍼블릭)",
      work: "홍보·PR·사보,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3695,
      confirm_name: "브랜그루",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,사진·포토그라퍼",
      address: "서울 &gt; 강동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3696,
      confirm_name: "(주)안랩",
      work:
        "기획·전략·경영,홍보·PR·사보,사무보조·문서작성,마케팅·광고·분석,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,하드웨어· 소프트웨어,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D",
      address:
        "서울 &gt;  강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정구,경기 &gt; 성남시 중원구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3697,
      confirm_name: "(주)채온",
      work: "고객센터·CS,컨텐츠·사이트운영,웹디자인",
      address: "대전 &gt; 대전전체,대전 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3698,
      confirm_name: "(주)애드포러스",
      work: "그래픽디자인·CG,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3699,
      confirm_name: "(주)휴로넷",
      work: "사무보조·문서작성,기술영업,컨텐츠·사이트운영",
      address:
        "서울 &gt; 서울전체,서울 &gt; 서대문구,서울 &gt; 성북구,서울 &gt; 종로구,서울 &gt; 중구,인천 &gt; 인천전체,인천 &gt; 계양구,인천 &gt; 미추홀구,인천 &gt; 부평구,인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3700,
      confirm_name: "에이제이인터내셔날",
      work: "고객센터·CS,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3701,
      confirm_name: "(주)코코팜",
      work: "고객센터·CS,컨텐츠·사이트운영,웹디자인",
      address: "인천 &gt; 서구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3702,
      confirm_name: "(주)디에이치인터내셔널",
      work: "상품기획·MD,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "서울 &gt; 강서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3703,
      confirm_name: "(주)장원패키지디자인",
      work: "광고·시각디자인,컨텐츠·사이트운영,웹디자인",
      address: "부산 &gt; 동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 3704,
      confirm_name: "(주)미래이앤아이",
      work: "상품기획·MD,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3705,
      confirm_name: "(주)은빈",
      work: "사무보조·문서작성,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "광주 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3706,
      confirm_name: "주식회사 써머스플랫폼",
      work: "광고영업,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3707,
      confirm_name: "(주)씨엔케이인사이트그룹",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 중랑구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3708,
      confirm_name: "주식회사 써머스플랫폼",
      work: "상품기획·MD,기획·전략·경영,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3709,
      confirm_name: "(주)다하미커뮤니케이션즈",
      work: "사무보조·문서작성,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3710,
      confirm_name: "(주)인스토어",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "서울 &gt; 용산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3711,
      confirm_name: "휴먼웍스",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3712,
      confirm_name: "휴먼웍스",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3713,
      confirm_name: "주식회사 트러스트브릿지",
      work: "일반영업,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3714,
      confirm_name: "(주)애드위즈컴퍼니",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,동영상·편집·코덱",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3715,
      confirm_name: "(주)사랑방미디어",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "광주 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3716,
      confirm_name: "(주)애드픽네트워크",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3717,
      confirm_name: "하이잉글리쉬",
      work: "웹마스터·QA·테스터,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3718,
      confirm_name: "알지오 평생교육원 (명수)",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 의정부시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3719,
      confirm_name: "(주)오텍",
      work: "웹기획·PM,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 군포시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3720,
      confirm_name: "Affix Inc.",
      work: "물류·유통·운송,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3721,
      confirm_name: "Affix Inc.",
      work: "물류·유통·운송,영업기획·관리·지원,컨텐츠·사이트운영",
      address: "경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3722,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 용산구",
      education: "대학졸업(2,3년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3723,
      confirm_name: "(주)연필과지우개",
      work: "경리·출납·결산,컨텐츠·사이트운영",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3724,
      confirm_name: "(주)연필과지우개",
      work: "경리·출납·결산,컨텐츠·사이트운영",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3725,
      confirm_name: "(주)제이에스글로벌",
      work: "해외영업·무역영업,상품기획·MD,컨텐츠·사이트운영",
      address: "경기 &gt; 고양시 일산동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3726,
      confirm_name: "래피태피(LAFFYTAFFY)",
      work: "마케팅·광고·분석,컨텐츠·사이트운영,웹디자인",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3727,
      confirm_name: "(주)나인위시스",
      work: "상품기획·MD,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3728,
      confirm_name: "(주)카이로스컨설팅",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "경력 12~20년"
    },
    {
      id: 3729,
      confirm_name: "(주)비타민스포츠",
      work: "사무보조·문서작성,컨텐츠·사이트운영,웹디자인",
      address: "광주 &gt; 동구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3730,
      confirm_name: "대성스포츠",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3731,
      confirm_name: "(주)바른길커머스",
      work: "상품기획·MD,컨텐츠·사이트운영",
      address: "서울 &gt; 동대문구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3732,
      confirm_name: "(주)그루",
      work: "컨텐츠·사이트운영",
      address: "충남 &gt; 보령시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3733,
      confirm_name: "(주)제이에스플래닛",
      work: "사무보조·문서작성,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3734,
      confirm_name: "구루넷",
      work: "컨텐츠·사이트운영,경영분석·컨설턴트,교육기획·교재",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~15년"
    },
    {
      id: 3735,
      confirm_name: "(사)멋쟁이사자처럼",
      work: "서버·네트워크·보안,웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 3736,
      confirm_name: "(주)앳홈",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3737,
      confirm_name: "굿커리어",
      work: "마케팅·광고·분석,웹기획·PM,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3738,
      confirm_name: "그루마케팅",
      work: "사무보조·문서작성,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3739,
      confirm_name: "웹송LAD",
      work: "컨텐츠·사이트운영,웹디자인,퍼블리싱·UI개발",
      address: "대구 &gt; 동구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3740,
      confirm_name: "(주)브레인커머스",
      work: "컨텐츠·사이트운영",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3741,
      confirm_name: "리앤커뮤니케이션",
      work: "홍보·PR·사보,마케팅·광고·분석,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3742,
      confirm_name: "서광룩스",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "부산 &gt; 동래구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3743,
      confirm_name: "서광룩스",
      work: "고객센터·CS,컨텐츠·사이트운영",
      address: "부산 &gt; 동래구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3744,
      confirm_name: "서광룩스",
      work: "컨텐츠·사이트운영,웹디자인",
      address: "부산 &gt; 동래구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3745,
      confirm_name: "성진에스앤에프(주)",
      work: "마케팅·광고·분석,컨텐츠·사이트운영",
      address:
        "경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 성남시 수정 구,경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~10년"
    },
    {
      id: 3746,
      confirm_name: "프로페셔날핸즈인핸즈코리아(주)",
      work: "웹개발,컨텐츠·사이트운영",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3747,
      confirm_name: "JM",
      work: "웨딩·행사·이벤트,컨텐츠·사이트운영",
      address: "충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3748,
      confirm_name: "(주)모바일펜스",
      work: "TM·인바운드,고객센터·CS,컨텐츠·사이트운영",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3749,
      confirm_name: "(주)티머니",
      work: "기획·전략·경영,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3750,
      confirm_name: "(주)온넷시스템즈코리아",
      work: "웹개발,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 2~7년"
    },
    {
      id: 3751,
      confirm_name: "(주)이너테인먼트",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3752,
      confirm_name: "(주)레뷰코퍼레이션",
      work: "응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3753,
      confirm_name: "(주)글로벌스탠다드테크놀로지",
      work:
        "해외영업·무역영업,일반영업,기술영업,고객센터·CS,전기·전자·제어,생산관리·품질관리,설계 ·CAD·CAM,응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 경기전체,경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 3754,
      confirm_name: "(주)에스와이소프트",
      work:
        "기획·전략·경영,그래픽디자인·CG,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,사진·포토그라퍼,부동산·개발·경매·분양",
      address: "경기 &gt; 성남시 분당구",
      education: "고등학교졸업이상",
      careear: "경력1년↑"
    },
    {
      id: 3755,
      confirm_name: "(주)마크베이스",
      work: "응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3756,
      confirm_name: "주식회사아인",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3757,
      confirm_name: "한국영상기술",
      work: "설계·CAD·CAM,응용프로그램개발",
      address: "서울 &gt; 서울전체,경기 &gt; 경기전체,경기 &gt; 안양시 동안구",
      education: "대학교졸업(4 년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3758,
      confirm_name: "이스트웨스트(주)",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로 그램개발,퍼블리싱·UI개발",
      address: "부산 &gt; 부산전체,부산 &gt; 영도구,경남 &gt; 경남전체",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3759,
      confirm_name: "전자부품연구원",
      work:
        "화학·에너지,전기·전자·제어,반도체·디스플레이·LCD,웹개발,응용프로그램개발,시스템개발,통신·모바일,하 드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address:
        "서울 &gt; 마포구,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 성남 시 분당구,경기 &gt; 안산시,경기 &gt; 하남시,전북 &gt; 전주시,전북 &gt; 전주시 덕진구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 3760,
      confirm_name: "(주)써머스플랫폼",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 중구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3761,
      confirm_name: "스키넵",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3762,
      confirm_name: "(주)엔지테크",
      work:
        "사무보조·문서작성,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,퍼블리싱·UI개발,IT·디자인·컴 퓨터교육,연구소·R&D,교육기획·교재",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,광주 &gt; 광주전체,부산 &gt; 부산전체",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3763,
      confirm_name: "(주)채움씨앤아이",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~6년"
    },
    {
      id: 3764,
      confirm_name: "(주)대성문",
      work:
        "총무·법무·사무,사무보조·문서작성,회계·재무·세무·IR,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개 발,퍼블리싱·UI개발",
      address:
        "부산 &gt; 부산전체,부산 &gt; 사하구,부산 &gt; 연제구,부산 &gt; 영도구,울산 &gt; 남구,경남 &gt; 거제 시",
      education: "고등학교졸업이상",
      careear: "경력"
    },
    {
      id: 3765,
      confirm_name: "(주)씨인플러스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3766,
      confirm_name: "(주)씨인플러스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3767,
      confirm_name: "동화그룹",
      work:
        "기획·전략·경영,회계·재무·세무·IR,마케팅·광고·분석,일반영업,영업기획·관리·지원,기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 서울전체,서울 &gt; 영등포구,인천 &gt; 인천전체,인천 &gt; 중구,충남 &gt; 충남전체,충남 &gt; 아산시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3768,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 3769,
      confirm_name: "(주) 제이랩시스템",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3770,
      confirm_name: "(주)알볼로에프앤씨",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,홍보·PR·사보,외식·식음료,요리·제빵사·영양사,인사 ·교육·노무,마케팅·광고·분석,광고·시각디자인,일반영업,판매·매장관리,영업기획·관리·지원,QA·CS강사·수퍼바이저,생 산관리·품질관리,바이오·제약·식품,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,데이터베이스·DBA,경영분석·컨설턴트,설문·통계·리서치,법률·특허·상표,연구소·R&D,교육기획·교재,부동산·개발·경매·분양",
      address: "서울 &gt; 서울전체,서울 &gt; 양천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3771,
      confirm_name: "(주)미로",
      work: "TM·아웃바운드,고객센터·CS,응용프로그램개발",
      address: "서울 &gt; 강서구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3772,
      confirm_name: "(주)위칸소프트",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3773,
      confirm_name: "(주)티지360테크놀로지스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3774,
      confirm_name: "(주)티지360테크놀로지스",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3775,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 3776,
      confirm_name: "(주)인조이웍스",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 광진구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3777,
      confirm_name: "(주)희원",
      work: "응용프로그램개발",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3778,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3779,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 3780,
      confirm_name: "(주)비아트론",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경 력"
    },
    {
      id: 3781,
      confirm_name: "한국금융안전(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 동작구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3782,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 1~6년"
    },
    {
      id: 3783,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 2~8년"
    },
    {
      id: 3784,
      confirm_name: "(주)마이더스에이치알",
      work: "게임·Game,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3785,
      confirm_name: "코코네주식회사(영업소)",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "서울 &gt; 중구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3786,
      confirm_name: "코코네주식회사(영업소)",
      work: "웹개발,게임·Game,응용프로그램개발",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3787,
      confirm_name: "인파트너스",
      work: "응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서초구",
      education: "석사졸업이상",
      careear: "경력3년↑"
    },
    {
      id: 3788,
      confirm_name: "메가존(주)",
      work:
        "해외영업·무역영업,무역사무·수출입,경리·출납·결산,사무보조·문서작성,회계·재무·세무·IR,서버·네트워크·보안,응용프로그램개발,데이터베이스·DBA,세무·회계·CPA",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3789,
      confirm_name: "펑타이그레이터차이나(유)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "경력 2~7년"
    },
    {
      id: 3790,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력7년↑"
    },
    {
      id: 3791,
      confirm_name: "(주)마이더스에이치알",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3792,
      confirm_name: "양재미디어(주)",
      work: "웹기획·PM,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 3~7년"
    },
    {
      id: 3793,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3794,
      confirm_name: "(주)세일창조",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3795,
      confirm_name: "(주)코어비드넷",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3796,
      confirm_name: "(주)코어비드넷",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3797,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~13년"
    },
    {
      id: 3798,
      confirm_name: "(주)헤렌",
      work: "웹개발,응용프로그램개발,웹디자인",
      address: "서울 &gt; 성동구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3799,
      confirm_name: "(주)HR컨설팅그룹",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3800,
      confirm_name: "HR컨설팅(주)",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 3801,
      confirm_name: "HR컨설팅(주)",
      work: "기획·전략·경영,응용프로그램개발,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~20년"
    },
    {
      id: 3802,
      confirm_name: "HR컨설팅(주)",
      work: "회계·재무·세무·IR,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "경력1년 ↑"
    },
    {
      id: 3803,
      confirm_name: "(주)명성",
      work: "전기·전자·제어,응용프로그램개발,연구소·R&D",
      address: "대구 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3804,
      confirm_name: "(주)탑앤스카우트",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3805,
      confirm_name: "(주)인텍플러스",
      work: "전기·전자·제어,응용프로그램개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3806,
      confirm_name: "홈넷홈(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 3807,
      confirm_name: "(주)유니오코리아",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3808,
      confirm_name: "(주)퀄리소프트",
      work: "웹마스터·QA·테스터,웹개발,응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 1~5년"
    },
    {
      id: 3809,
      confirm_name: "(주)크레아소프트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구,경북 &gt; 김천시",
      education: "학력무관",
      careear: "경력6년↑"
    },
    {
      id: 3810,
      confirm_name: "(주)크레아소프트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구,경북 &gt; 김천시",
      education: "학력무관",
      careear: "경력4년↑"
    },
    {
      id: 3811,
      confirm_name: "(주)대원씨앤씨",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3812,
      confirm_name: "믹스잇",
      work: "응용프로그램개발",
      address: "서울 &gt; 양천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3813,
      confirm_name: "(주)브릭",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 5~15년"
    },
    {
      id: 3814,
      confirm_name: "(주)지씨에스씨",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "부산 &gt; 연제구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3815,
      confirm_name: "(주)프로매치코리아",
      work: "서버·네트워크·보안,응용프로그램개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경 력무관"
    },
    {
      id: 3816,
      confirm_name: "주식회사 아이나비시스템즈",
      work: "응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3817,
      confirm_name: "유디엠텍",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3818,
      confirm_name: "주식회사 크립토라인",
      work: "응용프로그램개발",
      address: "부산 &gt; 중구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 3819,
      confirm_name: "(주)사람과기술",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,경남 &gt; 창원시 성산구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3820,
      confirm_name: "(주)소만사",
      work: "웹마스터·QA·테스터,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3821,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,응용프로그램개발,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3822,
      confirm_name: "(주)소만사",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3823,
      confirm_name: "제로소프트(주)",
      work: "게임·Game,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3824,
      confirm_name: "현진이앤에스 주식회사",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3825,
      confirm_name: "현진이앤에스 주식회사",
      work: "웹개발,컨텐츠·사이트운영,응용프로그램개발",
      address: "경기 &gt; 안산시 단원구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3826,
      confirm_name: "(주)스카우트",
      work: "응용프로그램개발,시스템개발,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~12년"
    },
    {
      id: 3827,
      confirm_name: "홀리츠",
      work: "응용프로그램개발",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3828,
      confirm_name: "(주)한솔루션",
      work: "반도체·디스플레이·LCD,응용프로그램개발,하드웨어·소프트웨어",
      address: "인천 &gt; 미추홀구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3829,
      confirm_name: "(주)지니뮤직",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3830,
      confirm_name: "(주)유비소시어스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 3831,
      confirm_name: "이이넥서스",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "일본 &gt; 도쿄",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3832,
      confirm_name: "(주)성산씨엔에스",
      work: "서버·네트워크·보안,응용프로그램개발",
      address: "광주 &gt; 서구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3833,
      confirm_name: "굿네트워크",
      work: "서버·네트워크·보안,웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3834,
      confirm_name: "(주)세미티에스",
      work: "응용프로그램개발",
      address: "경기 &gt; 수원시 영통구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~10년"
    },
    {
      id: 3835,
      confirm_name: "(주)마이스페이스",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3836,
      confirm_name: "선진지앤아이(주)",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력 4~10년"
    },
    {
      id: 3837,
      confirm_name: "베스트네트워크(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 3838,
      confirm_name: "스타십벤딩머신(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 2~5년"
    },
    {
      id: 3839,
      confirm_name: "(주)뉴젠씨앤아이",
      work: "응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3840,
      confirm_name: "스타십벤딩머신(주)",
      work: "응용프로그램개발",
      address: "서울 &gt; 마포구",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 3841,
      confirm_name: "중앙직업전문학교",
      work: "응용프로그램개발,통신·모바일,인공지능(AI)·빅데이터",
      address: "대구 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3842,
      confirm_name: "(주)케이엠",
      work: "물류·유통·운송,회계·재무·세무·IR,응용프로그램개발",
      address: "경기 &gt; 안성시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3843,
      confirm_name: "주식회사 짐싸",
      work: "웹개발,응용프로그램개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~8년"
    },
    {
      id: 3844,
      confirm_name: "이루온",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3845,
      confirm_name: "멜콘 주식회사",
      work: "응용프로그램개발,하드웨어·소프트웨어",
      address: "경기 &gt; 화성시,전국 &gt; 전국",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3846,
      confirm_name: "이루온",
      work: "웹개발,응용프로그램개발,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3847,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "경력 무관"
    },
    {
      id: 3848,
      confirm_name: "(주)씨엔씨네트웍스",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강서구,서울 &gt; 구로구,전남 &gt; 영암군",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3849,
      confirm_name: "(주)사람인에이치알",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3850,
      confirm_name: "헤리티지서치코어",
      work: "응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3851,
      confirm_name: "교원",
      work:
        "기획·전략·경영,생산관리·품질관리,서버·네트워크·보안,웹개발,응용프로그램개발,하드웨어·소프트웨어,웹디자인,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3852,
      confirm_name: "헤리티지서치코어",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3853,
      confirm_name: "(주)커브스코리아",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3854,
      confirm_name: "유니웹스(주)",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3855,
      confirm_name: "(주)탑앤스카우트",
      work: "웹개발,응용프로그램개발",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3856,
      confirm_name: "뉴코아모바일",
      work: "웹개발,응용프로그램개발",
      address: "부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3857,
      confirm_name: "인포뱅크(주)",
      work: "웹개발,응용프로그램개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3858,
      confirm_name: "(주)큐에스택",
      work: "응용프로그램개발",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3859,
      confirm_name: "베스핀글로벌 주식회사",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~20년"
    },
    {
      id: 3860,
      confirm_name: "(주)구버넷",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3861,
      confirm_name: "씨에스캠",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "광주 &gt; 광산구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3862,
      confirm_name: "(주)피디엠",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3863,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3864,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3865,
      confirm_name: "(주)뷰텔",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 중원구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3866,
      confirm_name: "(주)엔엑스테크놀로지",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3867,
      confirm_name: "(주) KPIT Technologies Ltd",
      work: "시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3868,
      confirm_name: "인포뱅크(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3869,
      confirm_name: "(주)옻향",
      work: "시스템개발,하드웨어·소프트웨어,IT·디자인·컴퓨터교육",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3870,
      confirm_name: "(주)피엘케이 테크놀로지",
      work:
        "그래픽디자인·CG,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,웹디자인",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3871,
      confirm_name: "(주)하이트롤",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 파주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3872,
      confirm_name: "(주)세성",
      work: "전기·전자·제어,시스템개발",
      address: "대구 &gt; 북구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3873,
      confirm_name: "(주)하이텍이피씨",
      work: "전기·전자·제어,시스템개발",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~5년"
    },
    {
      id: 3874,
      confirm_name: "(주)잉카인터넷",
      work: "서버·네트워크·보안,응용프로그램개발,시스템개발",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3875,
      confirm_name: "(주)로터렉스",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3876,
      confirm_name: "(주)이에스브이",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 송파구,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~10년"
    },
    {
      id: 3877,
      confirm_name: "(주)에이캔",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3878,
      confirm_name: "(주)시스콘엔지니어링",
      work: "전기·전자·제어,시스템개발",
      address: "인천 &gt; 서구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3879,
      confirm_name: "(주)드림디엔에스",
      work: "응용프로그램개발,시스템개발,연구소·R&D",
      address: "서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3880,
      confirm_name: "대화기기(주)",
      work: "전기·전자·제어,시스템개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3881,
      confirm_name: "GL컴퍼니",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3882,
      confirm_name: "주식회사 씨메스",
      work: "응용프로그램개발,시스템개발,연구소·R&D",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3883,
      confirm_name: "(주)유비퍼스트대원",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3884,
      confirm_name: "홈넷홈(주)",
      work: "시스템개발",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력 5~10년"
    },
    {
      id: 3885,
      confirm_name: "호스트웨이아이디씨(주)",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3886,
      confirm_name: "대신엔터프라이즈(주)",
      work: "설계·CAD·CAM,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3887,
      confirm_name: "(주)스펙업애드",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "서울 &gt; 강남구,서울 &gt; 서초 구,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3888,
      confirm_name: "가나콘트롤이엔지(주)",
      work: "시스템개발,연구소·R&D",
      address: "경기 &gt; 부천시",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~20년"
    },
    {
      id: 3889,
      confirm_name: "두리시스템",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 안산시 상록구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3890,
      confirm_name: "(주)쿨스",
      work: "웹마스터·QA·테스터,응용프로그램개발,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3891,
      confirm_name: "(주)카카오페이지",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,퍼블리싱·UI개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 3892,
      confirm_name: "KCT",
      work:
        "기계·기계설비,전기·전자·제어,반도체·디스플레이·LCD,생산·제조·포장·조립,설계·CAD·CAM,시스템개발,연구소·R&D,전기·소방·통신·설비",
      address:
        "충남 &gt; 충남전체,충남 &gt; 천안시,충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경 력"
    },
    {
      id: 3893,
      confirm_name: "(주)아이디자인랩",
      work:
        "기획·전략·경영,홍보·PR·사보,마케팅·광고·분석,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,동영상·편집·코덱,경영분석·컨설턴트,교육기획·교재,카메라·조명·미술",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 3894,
      confirm_name: "(주)팡세",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 동대문구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3895,
      confirm_name: "SEW유로드라이브코리아(주)",
      work: "기계·기계설비,전기·전자·제어,시스템개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,서울 &gt; 금천 구,서울 &gt; 마포구,서울 &gt; 영등포구,경기 &gt; 경기전체,경기 &gt; 부천시,경기 &gt; 수원시,경기 &gt; 안산시,경기 &gt;  안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3896,
      confirm_name: "(주)아던트",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 영등포구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3897,
      confirm_name: "(주)티앤에프솔루션",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3898,
      confirm_name: "(주)티센오토모티브",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3899,
      confirm_name: "주식회사 나다",
      work: "응용프로그램개발,시스템개발,데이터베이스·DBA",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3900,
      confirm_name: "엠텍비젼(주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 수정구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 3901,
      confirm_name: "(주)피플웍스",
      work: "시스템개발",
      address: "서울 &gt; 용산구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3902,
      confirm_name: "주식회사 루이스테크코리아",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 평택시,경기 &gt; 화성시",
      education: "고등학교졸업이상",
      careear: "신입"
    },
    {
      id: 3903,
      confirm_name: "(주)뉴엔텍",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 영통구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3904,
      confirm_name: "(주)커넥슨",
      work: "시스템개발,통신·모바일,하드웨어·소프트웨어",
      address: "울산 &gt; 동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3905,
      confirm_name: "(주)오큐브이엔지",
      work: "응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3906,
      confirm_name: "(주)미래시스템",
      work: "응용프로그램개발,시스템개발",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3907,
      confirm_name: "대동테크",
      work: "응용프로그램개발,시스템개발,연구소·R&D",
      address: "경북 &gt; 경산시",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3908,
      confirm_name: "성보전기공업(주)",
      work: "시스템개발",
      address: "부산 &gt; 기장군",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3909,
      confirm_name: "(주)세아에스에이",
      work: "시스템개발",
      address: "경기 &gt; 시흥시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3910,
      confirm_name: "이삭엔지니어링(주)",
      work: "전기·전자·제어,시스템개발",
      address: "경기 &gt; 군포시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3911,
      confirm_name: "휴먼케이(주)",
      work: "설계·CAD·CAM,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3912,
      confirm_name: "(주)입주매니져",
      work: "시스템개발",
      address: "경기 &gt; 파주시",
      education: "학력무관",
      careear: "경력 1~1년"
    },
    {
      id: 3913,
      confirm_name: "(주)한국에이티아이",
      work: "응용프로그램개발,시스템개발,웹디자인",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3914,
      confirm_name: "코스텔(주)",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "경기 &gt; 성남시 중원구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3915,
      confirm_name: "(주)미래시스템",
      work: "전기·전자·제어,시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3916,
      confirm_name: "Control Techniques, a NIDEC company",
      work: "기술영업,전기·전자·제어,시스템개발",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3917,
      confirm_name: "로키사",
      work: "시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "인천 &gt; 연수구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3918,
      confirm_name: "(주)인피니트헬스케어",
      work:
        "총무·법무·사무,인사·교육·노무,회계·재무·세무·IR,일반영업,IT·솔루션영업,기술영업,영업기획· 관리·지원,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 구로구,대구 &gt; 대구전체,대전 &gt; 대전전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3919,
      confirm_name: "(주)스마트제어계측",
      work: "시스템개발,하드웨어·소프트웨어",
      address:
        "대전 &gt; 대덕구,대전 &gt; 동구,대전 &gt; 서구,대전 &gt; 유성구,대전 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3920,
      confirm_name: "(주)자이트론",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3921,
      confirm_name: "(주)코다",
      work: "전기·전자·제어,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3922,
      confirm_name: "(주)티원세미콘",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3923,
      confirm_name: "베이다스",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경북 &gt; 포항시 남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3924,
      confirm_name: "제닉스(주)",
      work: "전기·전자·제어,시스템개발",
      address: "충남 &gt; 천안시 서북구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3925,
      confirm_name: "(주)글로비즈",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 관악구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3926,
      confirm_name: "(주)넥스트아이씨티",
      work: "웹개발,시스템개발",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 구로구,서울 &gt; 서초구,서울 &gt; 종 로구",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 3927,
      confirm_name: "(주)엠브레인",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~10년"
    },
    {
      id: 3928,
      confirm_name: "(주)엔엔에프텍",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3929,
      confirm_name: "(주)라온텍",
      work: "시스템개발",
      address: "충남 &gt; 아산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3930,
      confirm_name: "(주)티에스이노베이션",
      work: "전기·전자·제어,시스템개발",
      address: "경북 &gt; 구미시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3931,
      confirm_name: "(주)세이프웨이",
      work: "전기·전자·제어,설계·CAD·CAM,시스템개발",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3932,
      confirm_name: "(주)한컴로보틱스",
      work:
        "해외영업·무역영업,기획·전략·경영,일반영업,IT·솔루션영업,기술영업,영업기획·관리·지원,기계·기계설 비,전기·전자·제어,설계·CAD·CAM,서버·네트워크·보안,웹기획·PM,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하 드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "경기 &gt; 용인시,경기 &gt; 용인시 처인구",
      education: "고등학 교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3933,
      confirm_name: "(주)LG유플러스",
      work:
        "기획·전략·경영,서버·네트워크·보안,시스템개발,통신·모바일,하드웨어·소프트웨어,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체",
      education: "석사졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3934,
      confirm_name: "메가존(주)",
      work:
        "IT·솔루션영업,기술영업,영업기획·관리·지원,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3935,
      confirm_name: "(주) 넷스루",
      work:
        "IT·솔루션영업,기술영업,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,퍼블리싱·UI개발,인공지능(AI)·빅데이터,경영분석·컨설턴트",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3936,
      confirm_name: "(주)한컴MDS",
      work: "시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "대학교졸업(4년)이상",
      careear: "경력 1~7년"
    },
    {
      id: 3937,
      confirm_name: "(유)딜리버리히어로 코리아",
      work: "웹개발,응용프로그램개발,시스템개발",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3938,
      confirm_name: "대한상공회의소 인천인력개발원",
      work:
        "그래픽디자인·CG,기계·기계설비,전기·전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,생산·제조·포장·조립,설계·CAD·CAM,시스템개발,하드웨어·소프트웨어,연구소·R&D",
      address: "인천 &gt; 인천전체,인천 &gt; 연수구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3939,
      confirm_name: "(주)한컴라이프케어",
      work:
        "구매·자재·재고,기획·전략·경영,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,영업기획·관리·지원,기계·기계설비,화학·에너지,섬유·의류·패션,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,웹기획·PM,응용프로그램개발,시스템개발,세무·회계·CPA,연구소·R&D,안전·품질·검사·관리,본사·관리·전산",
      address: "경기 &gt; 용인시 처인 구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 3940,
      confirm_name: "(주)세스코",
      work: "전기·전자·제어,시스템개발,연구소·R&D",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3941,
      confirm_name: "(주)세스코",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 3942,
      confirm_name: "(주)세스코",
      work: "전기·전자·제어,응용프로그램개발,시스템개발",
      address: "서울 &gt; 강동구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 3943,
      confirm_name: "(주)마이나비코리아",
      work:
        "해외영업·무역영업,호텔·카지노·콘도,일반영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전 자·제어,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,퍼블리싱·UI개발",
      address: "아시아·중동 &gt; 일본",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3944,
      confirm_name: "비즈솔루션코리아",
      work: "AS·서비스·수리,응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력"
    },
    {
      id: 3945,
      confirm_name: "(주)브라이센코리아",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address: "경기 &gt; 수원시 팔달구,경기 &gt; 화성시",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 3946,
      confirm_name: "제닉스 (주)",
      work: "응용프로그램개발,시스템개발,하드웨어·소프트웨어",
      address:
        "경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 용인시  기흥구,경기 &gt; 용인시 수지구,경기 &gt; 용인시 처인구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3947,
      confirm_name: "(주)클라우드노아",
      work:
        "서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이 스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력 3~10년"
    },
    {
      id: 3948,
      confirm_name: "(주)나노텍",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,설계·CAD·CAM,안경·렌즈·광학,시스템개발,하드웨어·소프트웨어,연구소·R&D,병역특례",
      address: "경기 &gt; 경기전체,경기 &gt; 용인시,경기 &gt; 용인시 수지구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3949,
      confirm_name: "(주)한국소프트웨어아이엔씨",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,시스템개발,하드웨어·소프트웨어,웹디 자인,퍼블리싱·UI개발,IT·디자인·컴퓨터교육,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 금천 구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3950,
      confirm_name: "메가존(주)",
      work:
        "마케팅·광고·분석,영업기획·관리·지원,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 3951,
      confirm_name: "현대오트론(주)",
      work:
        "구매·자재·재고,기획·전략·경영,총무·법무·사무,인사·교육·노무,IT·솔루션영업,기술영업,전기·전자· 제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,웹마스터·QA·테스터,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어,인공지능(AI)·빅데이터,경영분석·컨설턴트,연구소·R&D,안 전·품질·검사·관리",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3952,
      confirm_name: "(주)위메프",
      work:
        "웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,시스템개발,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력"
    },
    {
      id: 3953,
      confirm_name: "(주)이랜드시스템스",
      work:
        "서버·네트워크·보안,웹개발,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,웹디자인,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 서울전체",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3954,
      confirm_name: "(주)에이스테크놀로지",
      work: "회계·재무·세무·IR,설계·CAD·CAM,ERP·시스템분석·설계",
      address: "아시아·중동 &gt; 중국.홍콩",
      education: "대학졸업(2,3 년)이상",
      careear: "신입/경력"
    },
    {
      id: 3955,
      confirm_name: "이디코어",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "경기 &gt; 평택시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3956,
      confirm_name: "이화다이아몬드공업(주)",
      work:
        "해외영업·무역영업,회계·재무·세무·IR,마케팅·광고·분석,일반영업,기술영업,영업기획·관리·지원,생산관리·품질관리,응용프로그램개발,ERP·시스템분석·설계,연구소·R&D,전기·소방·통신·설비",
      address:
        "경기 &gt; 경기전체,경기 &gt; 오산시,경기 &gt; 화성시,충북 &gt; 청주시 흥덕구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3957,
      confirm_name: "(주)헬로서치",
      work: "ERP·시스템분석·설계,데이터베이스·DBA,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3958,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address:
        "서울 &gt; 광진구,서울 &gt; 노원구,서울 &gt; 마포구,서울 &gt; 용산구,서울 &gt; 은평구,경기 &gt; 고양시,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 성남시,경기 &gt; 수 원시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3959,
      confirm_name: "엠에프엠코리아(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3960,
      confirm_name: "(주)쿠프마케팅",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무 관"
    },
    {
      id: 3961,
      confirm_name: "쿠도커뮤니케이션(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,경영분석·컨설턴트",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 3962,
      confirm_name: "(주)태광데이터시스템",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 중구,경남 &gt; 김해시",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3963,
      confirm_name: "(주)티지에스",
      work: "ERP·시스템분석·설계",
      address: "부산 &gt; 해운대구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3964,
      confirm_name: "반석써치(주)",
      work: "구매·자재·재고,기획·전략·경영,ERP·시스템분석·설계",
      address: "경기 &gt; 안산시 단원구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3965,
      confirm_name: "반석써치(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 3966,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "웹기획·PM,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력10년↑"
    },
    {
      id: 3967,
      confirm_name: "HR컨설팅(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "충남 &gt; 천안시",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3968,
      confirm_name: "HR컨설팅(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "충남 &gt; 천안시",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3969,
      confirm_name: "HR컨설팅(주)",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,서울 &gt; 중구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3970,
      confirm_name: "HR컨설팅(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 수원시 영통구",
      education: "석사졸업이상",
      careear: "경력4년↑"
    },
    {
      id: 3971,
      confirm_name: "HR컨설팅(주)",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "충남 &gt; 천안시",
      education: "대학교졸업(4년)이상",
      careear: "경력6년↑"
    },
    {
      id: 3972,
      confirm_name: "에이치알코어스",
      work: "ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력15년↑"
    },
    {
      id: 3973,
      confirm_name: "주식회사 피플케어코리아",
      work: "ERP·시스템분석·설계,경영분석·컨설턴트",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력7년↑"
    },
    {
      id: 3974,
      confirm_name: "라온서치",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3975,
      confirm_name: "주식회사 리앤한",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~9년"
    },
    {
      id: 3976,
      confirm_name: "(주)베스트에치알 (Best HR)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "인천 &gt; 인천전체,인천 &gt; 부평구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 3977,
      confirm_name: "(주)휴먼코아",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 도봉구,서울 &gt; 서대문구,서울 &gt; 영등포구,서울 &gt; 용산구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서구,경기 &gt; 과천시,경기 &gt; 광명시,경기 &gt; 부천시",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 3978,
      confirm_name: "(주)맨파워코리아",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "부산 &gt; 수영구,경남 &gt; 경남전체",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년 ↑"
    },
    {
      id: 3979,
      confirm_name: "(주)맨파워코리아",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "부산 &gt; 수영구,아시아·중동 &gt; 베트남",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3980,
      confirm_name: "(주)영림원소프트랩",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "서울 &gt; 강서구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3981,
      confirm_name: "현대건설기계(주)",
      work:
        "기획·전략·경영,총무·법무·사무,홍보·PR·사보,마케팅·광고·분석,그래픽디자인·CG,전시·공간디자인, 일반영업,기술영업,영업기획·관리·지원,기계·기계설비,전기·전자·제어,생산관리·품질관리,설계·CAD·CAM,웹기획·PM,컨텐츠·사이트운영,ERP·시스템분석·설계,웹디자인,연구소·R&D,교육기획·교재,전기·소방·통신·설비",
      address: "경기 &gt; 성남시 분당구,울산 &gt; 동구,충북 &gt; 음성군",
      education: "대학교졸업(4년)이상",
      careear: "경력"
    },
    {
      id: 3982,
      confirm_name: "현대건설기계(주)",
      work:
        "상품기획·MD,기획·전략·경영,총무·법무·사무,마케팅·광고·분석,그래픽디자인·CG,출판·편집디자인,전 시·공간디자인,광고·시각디자인,일반영업,QA·CS강사·수퍼바이저,생산관리·품질관리,설계·CAD·CAM,게임·Game,컨텐츠·사 이트운영,ERP·시스템분석·설계,카메라·조명·미술",
      address:
        "경기 &gt; 성남시 분당구,경기 &gt; 용인시,울산 &gt; 울산전체,충북 &gt; 음성군",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 3983,
      confirm_name: "한화시스템/시스템",
      work:
        "구매·자재·재고,회계·재무·세무·IR,간호사,응용프로그램개발,시스템개발,ERP·시스템분석·설계,하드웨 어·소프트웨어,IT·디자인·컴퓨터교육,인공지능(AI)·빅데이터",
      address:
        "서울 &gt; 서울전체,경기 &gt; 성남시 분당구,경기 &gt; 용인시,경북 &gt; 구미시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 3984,
      confirm_name: "(주)디에스시동탄",
      work: "ERP·시스템분석·설계",
      address: "경기 &gt; 화성시",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~8년"
    },
    {
      id: 3985,
      confirm_name: "(주)피너클써치",
      work: "ERP·시스템분석·설계",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 3986,
      confirm_name: "온라인팜주식회사",
      work: "영업기획·관리·지원,ERP·시스템분석·설계",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3987,
      confirm_name: "더블유씨피(주)",
      work:
        "회계·재무·세무·IR,기계·기계설비,생산관리·품질관리,생산·제조·포장·조립,설계·CAD·CAM,ERP·시스템 분석·설계,세무·회계·CPA",
      address: "충북 &gt; 충주시",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3988,
      confirm_name: "(주)케이맨파워",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력5년 ↑"
    },
    {
      id: 3989,
      confirm_name: "(주)스카우트",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~12년"
    },
    {
      id: 3990,
      confirm_name: "(주)세라젬",
      work: "회계·재무·세무·IR,응용프로그램개발,ERP·시스템분석·설계",
      address: "충남 &gt; 천안시 서북구",
      education: "대학교졸업(4년)이상",
      careear: "경력 2~10년"
    },
    {
      id: 3991,
      confirm_name: "SFA반도체",
      work:
        "해외영업·무역영업,회계·재무·세무·IR,기계·기계설비,전기·전자·제어,생산관리·품질관리,반도체·디스플레이 ·LCD,생산·제조·포장·조립,웹개발,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어,연구소·R&D,안전·품질·검사·관리",
      address:
        "충남 &gt; 천안시,충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 3992,
      confirm_name: "HR네트워크",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~12년"
    },
    {
      id: 3993,
      confirm_name: "(주)아성솔루션밸리",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 파주시",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 3994,
      confirm_name: "주식회사 주원인더스트리",
      work: "서버·네트워크·보안,ERP·시스템분석·설계",
      address: "충남 &gt; 아산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3995,
      confirm_name: "리디안솔루션(주)",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 3996,
      confirm_name: "와프(WAFF)",
      work: "ERP·시스템분석·설계",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 3997,
      confirm_name: "(주)이노소프트기술",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 성동구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 3998,
      confirm_name: "(유)미토모코리아",
      work: "웹개발,ERP·시스템분석·설계",
      address: "전북 &gt; 전주시 덕진구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 3999,
      confirm_name: "한영회계법인",
      work: "회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 4000,
      confirm_name: "(주)투데이시스템즈",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4001,
      confirm_name: "(주)태광데이터시스템",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "아시아·중동 &gt; 베트남",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 4002,
      confirm_name: "(주)엔텔스",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4003,
      confirm_name: "(주)위메프",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,인공지능(AI)·빅데이터",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 4004,
      confirm_name: "로지스팟 주식회사",
      work: "구매·자재·재고,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 4005,
      confirm_name: "(주)IDS&TRUST",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 4006,
      confirm_name: "(주)해커스교육그룹",
      work:
        "회계·재무·세무·IR,서버·네트워크·보안,응용프로그램개발,시스템개발,ERP·시스템분석·설계,데이터베 이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력3년↑"
    },
    {
      id: 4007,
      confirm_name: "(주)코다코",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address:
        "충남 &gt; 천안시,충남 &gt; 천안시 동남구,충남 &gt; 천안시 서북구",
      education: "대학 졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 4008,
      confirm_name: "금호석유화학",
      work:
        "물류·유통·운송,해외영업·무역영업,구매·자재·재고,무역사무·수출입,기획·전략·경영,보안·경호·안전,인 사·교육·노무,회계·재무·세무·IR,일반영업,기술영업,영업기획·관리·지원,기계·기계설비,화학·에너지,전기·전자·제어,생산관리·품질관리,서버·네트워크·보안,ERP·시스템분석·설계,세무·회계·CPA,연구소·R&D,전기·소방·통신·설비,환경· 플랜트,안전·품질·검사·관리",
      address:
        "서울 &gt; 서울전체,경기 &gt; 김포시,대전 &gt; 대전전체,울산 &gt; 울산전체,전남 &gt; 여수시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4009,
      confirm_name: "(주)해커스교육그룹",
      work:
        "회계·재무·세무·IR,그래픽디자인·CG,출판·편집디자인,웹마스터·QA·테스터,웹기획·PM,웹개발,응용프 로그램개발,ERP·시스템분석·설계,퍼블리싱·UI개발,데이터베이스·DBA",
      address:
        "서울 &gt; 서울전체,서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4010,
      confirm_name: "리치앤타임 (주)",
      work: "ERP·시스템분석·설계,하드웨어·소프트웨어,연구소·R&D",
      address: "서울 &gt; 구로구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4011,
      confirm_name: "한국산업기술시험원",
      work:
        "기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사무보조·문서작성,보안·경호·안전,가사·청소·육아,인사·교육·노무,회계·재무·세무·IR,기술영업,영업기획·관리·지원,고객센터·CS,서버·네트워크·보안,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,인공지능(AI)·빅데이터,설문·통계·리서치,법률·특허·상표,세무 ·회계·CPA,연구소·R&D,토목·조경·도시·측량,건축·인테리어·설계,전기·소방·통신·설비,환경·플랜트,현장·시공·감리·공무,안전·품질·검사·관리",
      address:
        "서울 &gt; 서울전체,서울 &gt; 구로구,경기 &gt; 안산시,강원 &gt; 원주시,경남 &gt; 진주시,경 남 &gt; 창원시,전국 &gt; 전국",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4012,
      confirm_name: "(주)지엠테스트",
      work: "반도체·디스플레이·LCD,ERP·시스템분석·설계",
      address: "충남 &gt; 천안시 서북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4013,
      confirm_name: "(주)오토젠",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "경기 &gt; 시흥시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4014,
      confirm_name: "(주)대홍전기",
      work: "ERP·시스템분석·설계",
      address: "부산 &gt; 기장군",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 4015,
      confirm_name: "(주)락앤락",
      work:
        "해외영업·무역영업,구매·자재·재고,상품기획·MD,기획·전략·경영,마케팅·광고·분석,전시·컨벤션·세미나,일 반영업,영업기획·관리·지원,웹마스터·QA·테스터,웹기획·PM,웹개발,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블 리싱·UI개발,경영분석·컨설턴트,부동산·개발·경매·분양",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 4016,
      confirm_name: "(주)경화상사",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,데이터베이스·DBA",
      address: "부산 &gt; 사상구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 4017,
      confirm_name: "케이엘정보통신(주)",
      work: "서버·네트워크·보안,웹기획·PM,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 5~20 년"
    },
    {
      id: 4018,
      confirm_name: "카테노이드(주)",
      work: "IT·솔루션영업,웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력3년↑"
    },
    {
      id: 4019,
      confirm_name: "(주)이튜",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "대구 &gt; 수성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4020,
      confirm_name: "(주)휴먼디지탈",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력5년↑"
    },
    {
      id: 4021,
      confirm_name: "(주)오티디코퍼레이션",
      work:
        "물류·유통·운송,구매·자재·재고,상품기획·MD,기획·전략·경영,홍보·PR·사보,사무보조·문서작성, 웨딩·행사·이벤트,외식·식음료,요리·제빵사·영양사,인사·교육·노무,마케팅·광고·분석,전시·컨벤션·세미나,의류·패션·잡화디자인,판매·매장관리,영업기획·관리·지원,고객센터·CS,QA·CS강사·수퍼바이저,생산관리·품질관리,컨텐츠·사이트운영,ERP·시스템분석·설계,퍼블리싱·UI개발,광고·카피·CF",
      address:
        "서울 &gt; 강서구,서울 &gt; 송파구,서울 &gt; 영등포구,서울 &gt; 중구,경기 &gt; 경기전체,경기 &gt; 고양시,경기 &gt; 수원시,경기 &gt; 용인시,인천 &gt; 중구,충남 &gt; 천안시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4022,
      confirm_name: "주식회사 파소나코리아",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4023,
      confirm_name: "(주)인프라웨어",
      work: "전기·전자·제어,웹개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: " 신입/경력"
    },
    {
      id: 4024,
      confirm_name: "원익그룹",
      work:
        "해외영업·무역영업,구매·자재·재고,총무·법무·사무,경리·출납·결산,인사·교육·노무,회계·재무·세무·IR,마 케팅·광고·분석,영업기획·관리·지원,기계·기계설비,전기·전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,ERP·시스템분석·설계,하드웨어·소프트웨어,세무·회계·CPA,연구소·R&D",
      address:
        "서울 &gt; 강남구,경기 &gt; 성남시,경기 &gt; 성남시 분당구,경기 &gt; 평택시,경기 &gt; 화성시,충북 &gt; 청주시",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 4025,
      confirm_name: "(주)엔정보기술",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "부산 &gt; 해운대구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 4026,
      confirm_name: "(주)잡뉴스솔로몬서치",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구,충남 &gt; 아산시",
      education: "대학교졸업(4년)이상",
      careear: "경력 6~18년"
    },
    {
      id: 4027,
      confirm_name: "람정엔터테인먼트코리아 주식회사",
      work: "호텔·카지노·콘도,ERP·시스템분석·설계",
      address: "제주 &gt; 서귀포시",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4028,
      confirm_name: "(주)리버스아이티",
      work: "웹개발,ERP·시스템분석·설계",
      address: "서울 &gt; 마포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~8년"
    },
    {
      id: 4029,
      confirm_name: "에스엠스틸(주)",
      work: "서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계",
      address: "전북 &gt; 군산시",
      education: "학력무관",
      careear: "경력8년↑"
    },
    {
      id: 4030,
      confirm_name: "(주)에이치알비즈코리아",
      work: "구매·자재·재고,ERP·시스템분석·설계",
      address: "경기 &gt; 안양시 만안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력6년↑"
    },
    {
      id: 4031,
      confirm_name: "(주)지투시스넷",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4032,
      confirm_name: "디오티스",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4033,
      confirm_name: "(주)면사랑",
      work: "ERP·시스템분석·설계,퍼블리싱·UI개발,데이터베이스·DBA",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 3~5년"
    },
    {
      id: 4034,
      confirm_name: "브리스캔영어쏘시에이츠(주)",
      work: "회계·재무·세무·IR,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 4035,
      confirm_name: "(주)텔레칩스",
      work:
        "해외영업·무역영업,구매·자재·재고,기획·전략·경영,총무·법무·사무,기술영업,영업기획·관리·지원,전기· 전자·제어,생산관리·품질관리,반도체·디스플레이·LCD,설계·CAD·CAM,서버·네트워크·보안,웹기획·PM,웹개발,응용프로그램개발,시스템개발,ERP·시스템분석·설계,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4036,
      confirm_name: "SK하이닉스",
      work:
        "전기·전자·제어,반도체·디스플레이·LCD,시스템개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "경기 &gt; 이천시",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 4037,
      confirm_name: "SK하이닉스",
      work: "설계·CAD·CAM,안경·렌즈·광학,ERP·시스템분석·설계",
      address: "경기 &gt; 이천시,충북 &gt; 청주시",
      education: "대학교졸업(4년)이상",
      careear: " 경력3년↑"
    },
    {
      id: 4038,
      confirm_name: "SK하이닉스",
      work:
        "기계·기계설비,설계·CAD·CAM,서버·네트워크·보안,응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨 어",
      address: "경기 &gt; 이천시",
      education: "대학교졸업(4년)이상",
      careear: "경력4년↑"
    },
    {
      id: 4039,
      confirm_name: "SK하이닉스",
      work: "응용프로그램개발,시스템개발,ERP·시스템분석·설계",
      address: "경기 &gt; 이천시,충북 &gt; 청주시",
      education: "대학교졸업(4년)이상",
      careear: "경력2년↑"
    },
    {
      id: 4040,
      confirm_name: "(주)제이엠신용정보",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 4041,
      confirm_name: "(주)코비젼",
      work:
        "기획·전략·경영,마케팅·광고·분석,IT·솔루션영업,웹마스터·QA·테스터,서버·네트워크·보안,웹기획·PM,웹개 발,응용프로그램개발,ERP·시스템분석·설계,데이터베이스·DBA,경영분석·컨설턴트",
      address:
        "서울 &gt; 강서구,서울 &gt; 마포구,서울 &gt; 영등포구,서울 &gt; 용산구,서울 &gt; 종로구,경기 &gt; 고양시 덕양구,경기 &gt; 고양시 일산동구,경기 &gt; 고양시 일산서 구,경기 &gt; 부천시,경기 &gt; 부천시 소사구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 4042,
      confirm_name: "켈리서비스 유한회사",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 4043,
      confirm_name: "켈리서비스 유한회사",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력8년↑"
    },
    {
      id: 4044,
      confirm_name: "프라임티씨에스",
      work: "ERP·시스템분석·설계",
      address: "대전 &gt; 유성구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 4045,
      confirm_name: "서창전기통신(주)",
      work:
        "해외영업·무역영업,구매·자재·재고,총무·법무·사무,보안·경호·안전,회계·재무·세무·IR,일반영업,기 술영업,영업기획·관리·지원,전기·전자·제어,생산관리·품질관리,설계·CAD·CAM,웹개발,응용프로그램개발,ERP·시스템분석·설계,웹디자인,퍼블리싱·UI개발,데이터베이스·DBA,연구소·R&D,전기·소방·통신·설비",
      address: "대구 &gt; 달서구,전남 &gt; 나주시,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4046,
      confirm_name: "(주)넛지파트너즈",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4047,
      confirm_name: "(주)넷케이티아이",
      work: "웹개발,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력 3~20년"
    },
    {
      id: 4048,
      confirm_name: "(주)루멘스",
      work: "구매·자재·재고,생산관리·품질관리,ERP·시스템분석·설계",
      address: "경기 &gt; 용인시 기흥구",
      education: "학력무관",
      careear: "경력 3~15년"
    },
    {
      id: 4049,
      confirm_name: "에스케이엔카닷컴(주)",
      work:
        "구매·자재·재고,상품기획·MD,기획·전략·경영,총무·법무·사무,경리·출납·결산,홍보·PR·사보,사 무보조·문서작성,AS·서비스·수리,회계·재무·세무·IR,마케팅·광고·분석,일반영업,판매·매장관리,기술영업,영업기획·관 리·지원,TM·인바운드,고객센터·CS,서버·네트워크·보안,웹기획·PM,웹개발,컨텐츠·사이트운영,응용프로그램개발,ERP·시스 템분석·설계,하드웨어·소프트웨어,데이터베이스·DBA,경영분석·컨설턴트,세무·회계·CPA,카메라·조명·미술,광고·카피·CF,사진·포토그라퍼,본사·관리·전산",
      address:
        "서울 &gt; 강서구,서울 &gt; 중구,경기 &gt; 김포시,경기 &gt; 부천시,경기 &gt; 수원시 권선구,대구 &gt; 대구전체,대구 &gt; 북구,인천 &gt; 서구,충북 &gt; 청주시 상당구,충남 &gt; 천안시 동남구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4050,
      confirm_name: "현대중공업그린에너지(주)",
      work: "서버·네트워크·보안,ERP·시스템분석·설계,IT·디자인·컴퓨터교육",
      address: "경기 &gt; 성남시 분당구",
      education: "대학 졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4051,
      confirm_name: "주식회사 피플케어코리아",
      work: "응용프로그램개발,ERP·시스템분석·설계,하드웨어·소프트웨어",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 4052,
      confirm_name: "(주)인싸이트에이치알지",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학교졸업(4년)이상",
      careear: "경력3년↑"
    },
    {
      id: 4053,
      confirm_name: "(주)헤드헌트",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 10~15년"
    },
    {
      id: 4054,
      confirm_name: "소마시스템(주)",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 4055,
      confirm_name: "파워에이치알",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 송파구",
      education: "대학교졸업(4년)이상",
      careear: "경력5년↑"
    },
    {
      id: 4056,
      confirm_name: "(주)두타위즈",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 4057,
      confirm_name: "굿어스스마트솔루션(주)",
      work: "IT·솔루션영업,응용프로그램개발,ERP·시스템분석·설계",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력10년↑"
    },
    {
      id: 4058,
      confirm_name: "(주)맨파워그룹코리아",
      work: "응용프로그램개발,ERP·시스템분석·설계",
      address: "서울 &gt; 동대문구",
      education: "학력무관",
      careear: "경력 5~7년"
    },
    {
      id: 4059,
      confirm_name: "(주)휴먼디지탈",
      work: "시스템개발,ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "대학졸업(2,3년)이상",
      careear: "경력1년↑"
    },
    {
      id: 4060,
      confirm_name: "(주)넛지파트너즈",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4061,
      confirm_name: "(주)제이앤씨에이치알",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~7년"
    },
    {
      id: 4062,
      confirm_name: "(주)제이앤씨에이치알",
      work: "ERP·시스템분석·설계",
      address: "서울 &gt; 강남구",
      education: "대학교졸업(4년)이상",
      careear: "경력 4~7년"
    },
    {
      id: 4063,
      confirm_name: "(주)비브이씨피에스에이디티코리아",
      work: "전기·전자·제어,생산관리·품질관리,통신·모바일",
      address: "경기 &gt; 수원시 영통구,경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~6년"
    },
    {
      id: 4064,
      confirm_name: "(주)비브이씨피에스에이디티코리아",
      work: "통신·모바일",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4065,
      confirm_name: "(주)비브이씨피에스에이디티코리아",
      work: "전기·전자·제어,통신·모바일,연구소·R&D",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: " 경력1년↑"
    },
    {
      id: 4066,
      confirm_name: "아임에버(주)",
      work: "서버·네트워크·보안,통신·모바일",
      address: "경기 &gt; 수원시 영통구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4067,
      confirm_name: "(주)하나씨엔아이",
      work: "AS·서비스·수리,통신·모바일",
      address: "서울 &gt; 종로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4068,
      confirm_name: "INZ System",
      work: "통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4069,
      confirm_name: "(주)벨루션네트웍스",
      work: "통신·모바일",
      address: "경기 &gt; 안양시 만안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력2년↑"
    },
    {
      id: 4070,
      confirm_name: "(주)씨엔테크",
      work: "통신·모바일",
      address: "경기 &gt; 군포시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4071,
      confirm_name: "(주)신화엔지니어링",
      work: "통신·모바일,토목·조경·도시·측량,건축·인테리어·설계",
      address: "경기 &gt; 고양시 덕양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4072,
      confirm_name: "(주)에이치앤티솔루션",
      work: "통신·모바일,토목·조경·도시·측량,건축·인테리어·설계",
      address: "경기 &gt; 고양시 덕양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4073,
      confirm_name: "DNT본점",
      work: "판매·매장관리,고객센터·CS,통신·모바일",
      address: "인천 &gt; 계양구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4074,
      confirm_name: "(주)원비즈시스템",
      work: "통신·모바일",
      address: "서울 &gt; 서대문구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 4075,
      confirm_name: "(주)비플",
      work: "IT·솔루션영업,영업기획·관리·지원,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4076,
      confirm_name: "(주)덕산정보통신",
      work: "AS·서비스·수리,통신·모바일",
      address: "충남 &gt; 서천군",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4077,
      confirm_name: "주식회사케이티엔",
      work: "일반영업,통신·모바일",
      address: "부산 &gt; 부산전체,부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4078,
      confirm_name: "주식회사케이티엔",
      work: "일반영업,통신·모바일",
      address: "부산 &gt; 부산전체,부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4079,
      confirm_name: "주식회사케이티엔",
      work: "경리·출납·결산,판매·매장관리,통신·모바일",
      address: "부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4080,
      confirm_name: "주식회사케이티엔",
      work: "고객센터·CS,통신·모바일",
      address: "부산 &gt; 북구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4081,
      confirm_name: "이노아이(주)",
      work: "웹마스터·QA·테스터,통신·모바일",
      address: "경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 4~8년"
    },
    {
      id: 4082,
      confirm_name: "태백(주)",
      work: "통신·모바일",
      address: "부산 &gt; 사상구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 4083,
      confirm_name: "(주)필립이엔씨",
      work: "통신·모바일",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구,전국 &gt; 전국",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4084,
      confirm_name: "(주)멀티캠퍼스",
      work:
        "설계·CAD·CAM,서버·네트워크·보안,웹개발,응용프로그램개발,시스템개발,통신·모바일,하드웨어·소프트웨어,데이터베이스·DBA,인공지능(AI)·빅데이터,연구소·R&D",
      address: "서울 &gt; 서울전체,서울 &gt; 강남구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4085,
      confirm_name: "글로벌텔레콤",
      work: "서버·네트워크·보안,웹기획·PM,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 5~15년"
    },
    {
      id: 4086,
      confirm_name: "케이원홀딩스(주)",
      work: "영업기획·관리·지원,통신·모바일",
      address: "부산 &gt; 연제구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4087,
      confirm_name: "세영종합건설(주)",
      work: "통신·모바일",
      address: "경북 &gt; 안동시",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4088,
      confirm_name: "(주)열린정보통신",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "충북 &gt; 청주시 청원구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4089,
      confirm_name: "(주)에코카",
      work: "전기·전자·제어,통신·모바일,인공지능(AI)·빅데이터",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4090,
      confirm_name: "(주)엔티에스티엔씨",
      work: "통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4091,
      confirm_name: "(주)아성정보",
      work: "통신·모바일",
      address: "부산 &gt; 강서구,경남 &gt; 김해시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4092,
      confirm_name: "우주모바일",
      work: "판매·매장관리,고객센터·CS,통신·모바일",
      address: "인천 &gt; 미추홀구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4093,
      confirm_name: "한국정보기술(주)",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4094,
      confirm_name: "씨엠커뮤니티(주)",
      work: "총무·법무·사무,사무보조·문서작성,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입"
    },
    {
      id: 4095,
      confirm_name: "(주)찬영씨엔씨",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "고등학교졸업이상",
      careear: "신입/경력"
    },
    {
      id: 4096,
      confirm_name: "(주)구버넷",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "대전 &gt; 유성구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4097,
      confirm_name: "(주)비티엘정보통신",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 강서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4098,
      confirm_name: "(주)엔트리연구원",
      work: "전기·전자·제어,통신·모바일,연구소·R&D",
      address: "경기 &gt; 수원시 권선구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 3~15년"
    },
    {
      id: 4099,
      confirm_name: "(주)디케이아이테크놀로지",
      work: "웹개발,응용프로그램개발,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4100,
      confirm_name: "(주)제일텔레콤",
      work: "판매·매장관리,고객센터·CS,통신·모바일",
      address:
        "인천 &gt; 미추홀구,인천 &gt; 남동구,인천 &gt; 부평구,인천 &gt;  연수구,인천 &gt; 중구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4101,
      confirm_name: "(자)미래통신공사",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "충남 &gt; 아산시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4102,
      confirm_name: "(주)상상",
      work: "사무보조·문서작성,회계·재무·세무·IR,통신·모바일",
      address: "대구 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4103,
      confirm_name: "(주)상상",
      work: "사무보조·문서작성,회계·재무·세무·IR,통신·모바일",
      address: "대구 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4104,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 4105,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4106,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "전기·전자·제어,통신·모바일,연구소·R&D",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4107,
      confirm_name: "cctv24",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 서초구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 4108,
      confirm_name: "세하통신",
      work: "통신·모바일,현장·시공·감리·공무",
      address: "경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4109,
      confirm_name: "(주)웨이브일렉트로닉스",
      work: "통신·모바일",
      address: "경기 &gt; 수원시 권선구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 4110,
      confirm_name: "(주)뉴스콤",
      work: "총무·법무·사무,사무보조·문서작성,통신·모바일",
      address: "서울 &gt; 중구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4111,
      confirm_name: "(주)제이티에스코퍼레이션",
      work:
        "사무보조·문서작성,통신·모바일,하드웨어·소프트웨어,전기·소방·통신·설비,본사·관리·전산",
      address: "서울 &gt; 강남구,경기 &gt; 이천시",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4112,
      confirm_name: "(주)에스티엔인포텍",
      work: "통신·모바일",
      address: "경기 &gt; 광명시",
      education: "학력무관",
      careear: "경력 1~5년"
    },
    {
      id: 4113,
      confirm_name: "(주)네이처링크",
      work: "통신·모바일",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4114,
      confirm_name: "(주)나우스넷",
      work: "설계·CAD·CAM,통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 광주시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4115,
      confirm_name: "(주)삼지엔지니어링",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "경기 &gt; 하남시",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4116,
      confirm_name: "(주)텔레스퀘어",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 분당구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4117,
      confirm_name: "삼미정보시스템(주)",
      work: "IT·솔루션영업,통신·모바일",
      address: "경남 &gt; 창원시",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4118,
      confirm_name: "(주)에스테크",
      work: "전기·전자·제어,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 2~8년"
    },
    {
      id: 4119,
      confirm_name: "(주)브이앤지",
      work: "웹개발,통신·모바일,하드웨어·소프트웨어",
      address: "경기 &gt; 성남시 수정구",
      education: "학력무관",
      careear: "신입/경력"
    },
    {
      id: 4120,
      confirm_name: "(주)한국알파시스템",
      work: "응용프로그램개발,통신·모바일,연구소·R&D",
      address: "대구 &gt; 북구",
      education: "학력무관",
      careear: "경력2년↑"
    },
    {
      id: 4121,
      confirm_name: "(주)아이오티플렉스",
      work: "전기·전자·제어,통신·모바일",
      address: "부산 &gt; 해운대구",
      education: "대학교졸업(4년)이상",
      careear: "경력1년↑"
    },
    {
      id: 4122,
      confirm_name: "(주)명지정보기술",
      work: "웹개발,응용프로그램개발,통신·모바일",
      address:
        "전북 &gt; 전북전체,전북 &gt; 전주시 덕진구,전북 &gt; 전주시 완산구",
      education: "대학교졸업(4년)이상",
      careear: "신입"
    },
    {
      id: 4123,
      confirm_name: "세아테크",
      work: "통신·모바일",
      address: "인천 &gt; 부평구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4124,
      confirm_name: "대화기기(주)",
      work: "전기·전자·제어,시스템개발,통신·모바일",
      address: "서울 &gt; 강남구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4125,
      confirm_name: "드림프리덤(주)",
      work: "사무보조·문서작성,통신·모바일",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4126,
      confirm_name: "ONCCTV",
      work: "AS·서비스·수리,통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 구로구",
      education: "학력무관",
      careear: "경력1년↑"
    },
    {
      id: 4127,
      confirm_name: "링솔류션즈",
      work: "서버·네트워크·보안,통신·모바일",
      address: "서울 &gt; 영등포구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4128,
      confirm_name: "주식회사 서원이엔씨",
      work: "설계·CAD·CAM,통신·모바일,현장·시공·감리·공무",
      address: "경기 &gt; 남양주시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 4129,
      confirm_name: "대신네트웍스(주)",
      work: "통신·모바일,전기·소방·통신·설비",
      address: "대전 &gt; 서구",
      education: "학력무관",
      careear: "경력 2~10년"
    },
    {
      id: 4130,
      confirm_name: "(주)에스지",
      work: "서버·네트워크·보안,통신·모바일,데이터베이스·DBA",
      address: "경남 &gt; 창원시",
      education: "학력무관",
      careear: "신입"
    },
    {
      id: 4131,
      confirm_name: "제이엔씨인베스컨",
      work: "통신·모바일",
      address: "서울 &gt; 송파구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4132,
      confirm_name: "(주)유비퍼스트대원",
      work: "응용프로그램개발,시스템개발,통신·모바일",
      address: "서울 &gt; 금천구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4133,
      confirm_name: "(주)오스코",
      work: "생산·제조·포장·조립,통신·모바일",
      address: "경기 &gt; 안양시 동안구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4134,
      confirm_name: "(주)코어엣지네트웍스",
      work: "통신·모바일",
      address: "서울 &gt; 금천구",
      education: "대학졸업(2,3년)이상",
      careear: "경력 10~20년"
    },
    {
      id: 4135,
      confirm_name: "(주)케이티엠앤에스",
      work: "통신·모바일",
      address: "인천 &gt; 서구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4136,
      confirm_name: "(주) 엔젤스테크",
      work: "통신·모바일,현장·시공·감리·공무",
      address: "광주 &gt; 광산구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4137,
      confirm_name: "(주)알티솔루션",
      work: "통신·모바일,하드웨어·소프트웨어",
      address: "서울 &gt; 금천구",
      education: "고등학교졸업이상",
      careear: "경력무관"
    },
    {
      id: 4138,
      confirm_name: "(주)프랭클린테크놀로지",
      work: "웹기획·PM,통신·모바일,연구소·R&D",
      address: "서울 &gt; 금천구",
      education: "대학교졸업(4년)이상",
      careear: "경력무관"
    },
    {
      id: 4139,
      confirm_name: "(주)스프링웨이브",
      work: "웹마스터·QA·테스터,서버·네트워크·보안,통신·모바일",
      address: "경기 &gt; 용인시 기흥구",
      education: "대학졸업(2,3년)이상",
      careear: "신입/경력"
    },
    {
      id: 4140,
      confirm_name: "(주)세스트",
      work: "서버·네트워크·보안,통신·모바일",
      address: "대구 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4141,
      confirm_name: "(주)세스트",
      work: "서버·네트워크·보안,응용프로그램개발,통신·모바일",
      address: "대구 &gt; 북구",
      education: "대학교졸업(4년)이상",
      careear: "신입/경력"
    },
    {
      id: 4142,
      confirm_name: "컴즈(주)",
      work: "통신·모바일",
      address: "서울 &gt; 구로구,경기 &gt; 성남시 분당구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    },
    {
      id: 4143,
      confirm_name: "연우통신(주)",
      work: "총무·법무·사무,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4144,
      confirm_name: "연우통신(주)",
      work: "AS·서비스·수리,통신·모바일,전기·소방·통신·설비",
      address: "서울 &gt; 동작구",
      education: "학력무관",
      careear: "경력무관"
    },
    {
      id: 4145,
      confirm_name: "(주)제노코",
      work: "기계·기계설비,통신·모바일,연구소·R&D",
      address: "경기 &gt; 안양시 동안구",
      education: "대학졸업(2,3년)이상",
      careear: "경력무관"
    }
  ];

  test.map((item, i) => {
    const Tr = document.createElement("Tr");
    const id = document.createElement("td");
    const name = document.createElement("td");
    const work = document.createElement("td");
    const address = document.createElement("td");
    const education = document.createElement("td");
    const careear = document.createElement("td");

    id.appendChild(document.createTextNode(item.id));
    name.appendChild(document.createTextNode(item.confirm_name));
    work.appendChild(document.createTextNode(item.work));
    address.appendChild(document.createTextNode(item.address));
    education.appendChild(document.createTextNode(item.education));
    careear.appendChild(document.createTextNode(item.careear));

    Tr.appendChild(id);
    Tr.appendChild(name);
    Tr.appendChild(work);
    Tr.appendChild(address);
    Tr.appendChild(education);
    Tr.appendChild(careear);

    document.getElementById("table").appendChild(Tr);
  });
};

document.body.onload = tableCreator;
