//***********************************************************************
// 매개변수로 들어온 데이터가 비어있거나 공백으로 구성되어 있으면 
// true 를 리턴, 아니면 false 리턴하는 함수 선언
//***********************************************************************
function isEmpty( 
	str    // 문자열이 저장되는 매개변수
){
	/*
	//------------------------------------------------------
	try{
		var flag = false;
		if( str.split(" ").join("")=="" ) {
			flag = true;
		}
	return flag;		
	}catch(e){															//예외에 대한 구체적인 언급
		alert("isEmpty 함수 호출 시 예외 발생!" + e.message );
		return false;
	}
	*/
		//------------------------------------------------------
		var flag = false;
		//--------------------------------------------------
		// try 구문 선언. try 구문 안에는 예외발생 가능성 있는 코드가 삽입됨
		//--------------------------------------------------
		try{
			//매개변수로 들어온 문자가 길이가 없거나 공백으로 이루어져 있으면
			//flag변수에 true 저장하기
			if( str.split(" ").join("")=="" ) {
				flag = true;
		}
		}


		//--------------------------------------------------
		// catch 구문 선언
		// catch 구문 안에는 try 구문에서 예외발생 시 실행할 코드가 삽입됨
		// catch 구문의 매개변수 e에는 예외를 관리하는 객체의 메위주가 들어온다
		// catch(~){~} 구문은 try 구문에서 예외발생 시 호출하는 일종의 함수와 비슷하다
		// catch 구문 return에 -1을 하는 경우 -- 날짜 관련에서 에러 발생을 넣어야 할 시
		// 오늘날보다 하루 전 상황에 맞춰야 하므로 -1을 준다(추정)
		//--------------------------------------------------
	catch(e){															//예외에 대한 구체적인 언급
		alert("isEmpty 함수 호출 시 예외 발생!" + e.message );
		flag = false;
	}
	//----------------------------------------------------
	// flag 변수 안의 데이터를 리턴하기
	//----------------------------------------------------
	return flag;
}

//***********************************************************************
// 이메일 체크 함수 선언.
// 매개변수로 들어온 이메일 문자가 이메일 문자 패턴에 맞으면 true 리턴하기.
// 틀리면 false 리턴하기.
//***********************************************************************
function isValidEmail( 
	email    // 검사할 문자열, 즉 이메일 문자열이 저장되는 매개변수
){
	//------------------------------------------------------
		var flag = false;
		try{
		//---------------------------------------------------
		// 이메일 문자의 패턴을 관리하는 RegExp 객체 생성하기
		// RegExp 객체의 test 메소드를 호출하여 매개변수로 들어온 분자의
		// 이메일 문자 패턴에 맞는지 여부를 구해 flag 변수에 저장하기
		//---------------------------------------------------
	var regExp = new RegExp(/^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/);
	return regExp.test(email);
}
catch(e){															//예외에 대한 구체적인 언급
		alert("isEmpty 함수 호출 시 예외 발생!" + e.message );
		flag = false;
	}
	//----------------------------------------------------
	// flag 변수 안의 데이터를 리턴하기
	//----------------------------------------------------
	return flag;
}


//--------------------------------------------------------------
try{
	}
catch(e){															//예외에 대한 구체적인 언급
		alert("isEmpty 함수 호출 시 예외 발생!" + e.message );
		flag = false;
	}
//--------------------------------------------------------------

//***********************************************************************
// 핸드폰 체크 함수 선언.
// 매개변수로 들어온 핸드폰 번호가 핸드폰 번호 패턴에 맞으면 true 리턴하기.
// 틀리면 false 리턴하기.
//***********************************************************************
function isValidphone_num( 
	phone_num    // 검사할 문자열, 즉 이메일 문자열이 저장되는 매개변수
){
	var regExp = new RegExp(/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/);
	return regExp.test(phone_num);
}



//***********************************************************************
// 문자열의 패턴 체크 함수 선언.
// 매개변수로 들어온 RegExp 객체와 검사 문자열을 이용하여 
// 검사 문자열이  RegExp 객체가 관리하는 문자 패턴에 맞으면 true 리턴하기.
// 틀리면 false 리턴하기.
//***********************************************************************
/*
function isValidPattern(  
	regExpObj      // RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
	, targetStr    // 패턴을 검사할 문자열이 저장되는 매개변수
){
	return regExpObj.test(targetStr);
}
*/

function isValidPattern(  
	regExpObj      // RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
	, targetStr    // 패턴을 검사할 문자열이 저장되는 매개변수
){
	var flag = false;
		try{
			flag = regExpObj.test(targetStr);
}
catch(e){															//예외에 대한 구체적인 언급
		alert("isEmpty 함수 호출 시 예외 발생!" + e.message );
		flag = false;
	}
return flag;
}





//***********************************************************************
// checkbox 또는 radio 의 체크 개수구해서 리턴하는 함수선언
//***********************************************************************
function getCheckedCnt( 
	arrObj    // Array 객체의 메위주가 저장되는 매개변수 선언. 
	          // Array 객체 안의 배열 변수안에는 Radio 객체 또는 checkbox 객체의 메위주가 들어 있다.
){
			//--------------------------------------------------
			// Radio 또는 checkbox 의 체크 개수가 저장되는 변수 checkedCnt 선언하고 0 저장..
			//--------------------------------------------------
			var checkedCnt = 0;
		try{
			//--------------------------------------------------
			// len 변수 선언하고 매개변수로 들어온 Array 객체의 배열변수 개수를 구해 저장하기
			//--------------------------------------------------
			var len = arrObj.length
			
			//--------------------------------------------------
			// len 변수안의 undefined 면, 
			// 즉 매개변수로 Array 객체가 안들어오고 다른 객체 즉 Checkbox 객체 또는 Radio 객체가 들어오면 
			// 존재하지 않는 length 라는 속성변수에는 undefined 가 들어 있다.
			// Radio 객체 또는 Checkbox 객체의 메위주 상상도를 살펴봐야 한다.
			//--------------------------------------------------
			if( len==undefined ){
				if( arrObj.checked==false ){
					return 0;
				}else{
					return 1;
				}
			}
			
			//--------------------------------------------------
			// 반복문 선언. 반복문은 0 ~ len변수안의 배열변수 개수 미만 만큼 돈다.
			// 반복문을 돌려서 Array 객체의 배열변수 안에 저장된  Radio 객체 또는 checkbox 객체에 접근하기 위함.
			//--------------------------------------------------
			for( var i=0 ; i<len ; i++){
				// 만약 i 번째 배열변수 안의 Radio 객체 또는 checkbox 객체의 속성변수 checked 에 true 가 저장되어 있으면
				// checkedCnt 변수 안의 숫자를 1 업데이트하기
				// 즉 i 번째 Radio 또는 checkbox 입력양식에 체크가 되어 있으면 checkedCnt 변수 안의 숫자를 1 업데이트하기
				if( arrObj[i].checked ) {checkedCnt++;}
			}
			}catch(e){
			alert( "getCheckedCnt 함수 호출 시 에러가 발생했음")
				checkedCnt = 0;
		}
			//--------------------------------------------------
			// checkedCnt 변수 안의 데이터 리턴하기. 즉 Radio 또는 checkbox 입력양식에 체크 개수 리턴하기
			//--------------------------------------------------
			return checkedCnt;
}


/*
---------------------------------
예외(=exception)
---------------------------------
	자스에서 [예외]란 웹브라우저가 [감지]할수 있는 오류
---------------------------------
예외 처리
---------------------------------
	예외 발생할 경우 try{}catch(e){~}finally{} 구문을 
	사용하여 프로그램의 갑작스런 중단을 막고 
	원하는 방향으로 프로그램을 진행하는 것을 말한다.
---------------------------------
try~catch~finally 구문
---------------------------------
	try{
		예외 발생할 가능성이 있는 코드
	}
	catch(e){
		예외가 발생했을 때 실행할 코드		
	}
	finally{
		예외가 발생하든 안하든 무조건 실행할 코드		
	}

*/

//----------------------------------------------------
//현재 시각의 년-월-일(요일)을 리턴하는 함수 선언
//----------------------------------------------------
function getTodayYMDW(){
	// today 변수 선언. 현재 날짜를 관리하는 Date 객체 생성. Date객체의 메위주
	// 를 today 변수에 저장
	var today = new Date();
	var Year = today.getFullYear();
	var month = today.getMonth()+1
		if( month<10 ) {month = "0"+month;}
	var date = today.getDate();
		if( date<10 ) {date = "0"+date;}
	var week = getTodayWeek().replace("요일","");
	// 현재 시각의 년월일(요일) 문자로 리턴
	return Year 
	+ "-" + month 
	+ "-" + date
	+ "(" + week + ")";
}


function getTodayWeek(){
	// today 변수 선언. 현재 날짜를 관리하는 Date 객체 생성. Date객체의 메위주
	// 를 today 변수에 저장
	var today = new Date();
	// weekNo 변수 선언. Date 객체의 getDay 메소드 호출하여 현재 요일 번호 얻어
	// weekNo 변수에 저장하기
	var weekNo = today.getDay();
	// week 변수 선언. "일요일" 저장하기
	var week = "일요일";
	// 요일 번호에 따라 week 변수에 오늘 요일 문자 저장하기
	if( weekNo==1 )		{week = "월요일"}
	else if( weekNo==2 ){week = "화요일"}
	else if( weekNo==3 ){week = "수요일"}
	else if( weekNo==4 ){week = "목요일"}
	else if( weekNo==5 ){week = "금요일"}
	else if( weekNo==6 ){week = "토요일"}
	// 오늘 요일 문자 리턴하기
	return week;
}



// 똑같은 이름의 함수가 두개 이상이면 마지막 함수가 진짜가 됨
// 위 아래는 똑같은 함수이다
/*
function getTodayWeek(){
	return ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"][new Date().getDate()]
}
*/

/*
function isToday( dateStr ){
	try{
		var arr = dateStr.split("_");
		//------------------------------
		var year = arr[0];
		var month = arr[1];
		var date = arr[2];
		//------------------------------
		year = parseInt(year, 10);
		month = parseInt(month, 10);
		date = parseInt(date, 10);
		//------------------------------
		var today = new Date();
		var today_year = today.getFullYear();
		var today_month = today.getFullmonth()+1;
		var today_date = today.getFullDate();
		//------------------------------
		return year==today_year && month==today_month && date==today_date;
		}
}
*/	
// 앞 뒤 공백 조심!
//---------------------------------------------------------
// 매개변수로 들어온 날짜문자가 오늘날짜와 동일하면 true 리턴하는 함수. 아니면
// false 리턴.
//---------------------------------------------------------
function isToday( dateStr ){
	try{
		//----------------------------------------------------
		// 변수 arr 선언. dateStr 매개변수 안의 날짜 문자를 - 기준으로 토막내어
		// Array 객체 안에 담기.
		//----------------------------------------------------
		var arr = dateStr.split("-");
		//-----------------------------------------------------
		// Array 객체 안의 배열변수 안의 데이터 꺼내어 year, month, date 변수에 저장
		// String 객체의 trim 메소드 호출로 앞뒤 공백 제거하기
		//-----------------------------------------------------
		var year = arr[0];		
		var month = arr[1];		
		var date = arr[2];		
		//-----------------------------------------------------
		// parseInt라는 내장 함수를 호출하여
		// year, month, date 변수 안의 숫자문자를 정수 숫자로 바꾸기
		//-----------------------------------------------------
		year = parseInt(year, 10);
		month = parseInt(month, 10);
		date = parseInt(date, 10);
		//-----------------------------------------------------
		// 변수 today 선언. 오늘 날짜를 관리하는 Date 객체 생성하고 메위주를 today에 저장하기
		// Date 객체의 getFullYear 메소드 호출로 년도 얻어 변수 today_year에 저장하기
		// Date 객체의 getmonth 메소드 호출로 년도 얻어 변수 today_month에 저장하기
		// Date 객체의 getdate 메소드 호출로 년도 얻어 변수 today_date에 저장하기
		//-----------------------------------------------------
		var today = new Date();
		var today_year = today.getFullYear();
		var today_month = today.getMonth()+1;
		var today_date = today.getDate();
		//-----------------------------------------------------
		// 매개 변수로 들어온 년월일 이 오늘 날짜의 년월일과 동일하면 true 리턴하기
		// 아니면 false 리턴하기
		//-----------------------------------------------------
		return year == today_year && month == today_month && date == today_date;
	}

catch(e){
	alert("isToday 함수 에서 에러발생!")
	return false;
}
}


//-----------------------------------------------------------------
// 매개변수로 들어온 문자에서 모든 공백을 제거하고 난 후의 문자 리턴하기
//-----------------------------------------------------------------
function deleteBlank( str ){
	try{
		//----------------------------------------
		//공백 제거한 문자 저장할 변수 result 선언
		//----------------------------------------
		result = "";
		//----------------------------------------
		//반복문 돌리면서 매개변수로 들어온 문자열 중 한개씩 접근해서 
		//공백이 아닌 문자만 result 변수에 누적시키는 반복문
		//----------------------------------------
		for(var i=0 ; i<str.length; i++){
			//만약 i번째 문자가 공백이 아니면 i번째 문자를 result변수에 누적시키기
			if( str.charAt(i) != " "){
				result = result + str.charAt(i);
			}
		}
		return result;

		
}
catch(e){
	alert("deleteBlank 함수 에서 에러발생!")
	return false;
}
}

//-----------------------------------------------------------------
// D-Day
//-----------------------------------------------------------------

function get_dDay(date) {


		var futureday = date.split("-");
		//-----------------------------------------------------
		// Array 객체 안의 배열변수 안의 데이터 꺼내어 year, month, date 변수에 저장
		// String 객체의 trim 메소드 호출로 앞뒤 공백 제거하기
		//-----------------------------------------------------
		var year = futureday[0];		
		var month = futureday[1];		
		var date = futureday[2];		
		//-----------------------------------------------------
		// parseInt라는 내장 함수를 호출하여
		// year, month, date 변수 안의 숫자문자를 정수 숫자로 바꾸기
		//-----------------------------------------------------
		year = parseInt(year, 10);
		month = parseInt(month, 10);
		date = parseInt(date, 10);


		var todayObj = new Date( );

		var x_dayObj = new Date( year,month-1,date );
	
		var interval = Math.ceil(  (x_dayObj.getTime() - todayObj.getTime())/(60*60*24*1000)  );

		return interval;

}


//---------------------------------------------------------
// 매개변수로 들어온 한글 이름이 한글이면서 2~20자 사이면 true 리턴
// 아니면 false 리턴하기
//---------------------------------------------------------
function isHangeulName( HangeulName ) {

	return isValidPattern(/^[가-힣]{2,20}$/,HangeulName);
}

function isMem_id( mem_id ) {

	return isValidPattern(/^[a-z][a-z0-9]{4,9}$/,mem_id);
}

function isMem_pwd( pwd ) {

	return isValidPattern(/^[a-z0-9]{5,8}$/,pwd);
}