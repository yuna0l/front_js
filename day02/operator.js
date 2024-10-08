// 연산자
// ++, --

// let data1 = 100;
// // data1++;
// // data1--;
// console.log(++data1) //101
// // console.log(data1++) //100

// let data2 = true;
// console.log(!!data2);

// 이항 연산자
// +
// let str1 = "오늘은 JS 2일차!😎";
// let str2 = "너무 재밌다!!😄";
// let num1 = 8.16;
// let num2 = 2024;

// // 문자열로 연결
// // console.log(typeof(str1 + num1));
// // 좌결합성에 의해 연산 후 연결된다.
// console.log(num1 + num2 + str2);

// "/" : 몫 연산자
// let num3 = 50;
// let num4 = 10;

// // console.log(num3 / num4);
// // "%" : 나머지 연산자
// console.log(num3 % num4);

// 누적 복합 연산자
//  +=, -=
// let data5 = 100;
// // data5 = data5 + 100;
// data5 += 100;
// // data5 = data5 - 50;
// data5 -= 50;
// console.log(data5);

// let data6 = "안녕";
// let data7 = "하세요😎";
// data6 += data7;
// // data6 = data6 + data7;

// console.log(data6)

// 5. 관계 연산자
// ==, ===

// let data8 = 100;
// let data9 = "100";
// let data10 = 101;
// console.log(data8 === data9);
// console.log(data8 == data10);

// 6. 논리연산자

// true || true //true
// true || false //true
// false || true //true
// false || false //false

// let isTrue = 10 != 11;
// isTrue && 10 == 10; //true
// isTrue && 10 != 10; //false
// isTrue && !isTrue; //false
// !isTrue || 10 != 10//false

// let result = isTrue || 10 == "10" && 10 != 11; //true
// console.log(result)

//false가 아닌데 false로 취급하는 값
// 0, "", 0.0

// let data = 0;
// console.log(data || 20);

// && : 앞에 값이 false면 뒤에 문장을 실행하지 않는다. (성능 향상을 위해서)
// let data1 = 0;
// 10 === "11" && ++ data1;

// console.log(data1);

// 삼항 연산자( ? : )
console.log(10 == 11 ? "같습니다." : "아닙니다.");

let data1 = "";
let data2 = 20;

let data3 = data1 + data2 ? "정답" : "거짓";
console.log(data3)

// false가 아닌데 false로 취급되는 값
console.log(Boolean(100));
console.log(Boolean(" "));

console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

