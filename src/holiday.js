const Holidaylist = () => {
    return (

        <div>
            <h1>2022년 공휴일</h1>
            <li>1월 1일   토요일   새해</li>
            <li>1월 31일 ~ 2월 2일   월요일 ~ 수요일   설날</li>
            <li>3월 1일   화요일   3·1 운동/삼일절</li>
            <li>5월 5일   목요일   어린이날</li>
            <li>5월 8일   일요일   부처님 오신 날</li>
            <li>6월 6일   월요일   현충일</li>
            <li>8월 15일   월요일   광복절</li>
            <li>9월 9일 ~ 9월 12일   금요일 ~ 월요일   추석</li>
            <li>10월 3일   월요일   개천절</li>
            <li>10월 9일   일요일   한글날</li>
            <li>10월 10일   월요일   한글날 휴일</li>
            <li>12월 25일   일요일   크리스마스</li>
        </div>  
    );
}

const Holiday = () => {
    return (
        <div>
            <Holidaylist />
        </div>
    );
}

export default Holiday;