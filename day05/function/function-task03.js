// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수

// 입력받은 매개변수가 홀수인지 알아낸다.
// 홀수는: num1 % 2 == 1
// function sumOdd(num1, num2, num3){
//     let result = 0;
//     num1 % 2 == 1 ? result += num1 : 0;
//     num2 % 2 == 1 ? result += num2 : 0;
//     num3 % 2 == 1 ? result += num3 : 0;
//     return result;
// }

// let result = sumOdd(10, 21, 23);
// console.log(result);

// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
// 1. 값을 입력 받는다. (사용자가 반복할 숫자)

// function sumEven(limit)
// {
//     let result = 0;
//     for(let i = 0; i <= limit; i++){
//         let even = i % 2 == 0;
//         // even ? result += i : 0;
//         // if(even){result += i};
//         if(!even){ continue; }
//         result += i;
//     }
//     return result;
// }
// let result2 = 0;
// result2 = sumEven(10);
// console.log(result2)


// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바a" -> "가나다라마바"
// let input = "가a나a다a라a마a바a";
// function removeA(content){
//     let result = "";
//     for(let i = 0; i < content.length; i++){
//         if(content.charAt(i) == "a"){continue;}
//         result += content.charAt(i);
//     }
//     return result;
// }
// let result3 = "";
// result3 = removeA(input);
// console.log(result3)

// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// pargeInt() : 정수를 바꿔주는 함수
// console.log(parseInt(1.7))
// function getFloatOrInt(num1){
//     let isInt = num1 == parseInt(num1);
//     let result = isInt ? "정수입니다" : "실수입니다.";
//     return result;
// }
// let result4 = 0;
// result4 = getFloatOrInt(11);
// console.log(result4)

// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";
// function reverse(content){
//     let result = ""; 
//     for(let i = 0; i < content.length; i++){
//         result += content.charAt(content.length - 1 - i);
//     }
//     return result;
// }
// let result5 = "";
// result5 = reverse("abcdefg");
// console.log(result5);