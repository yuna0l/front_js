// 1. 나이는 상수로 임의로 설정, 삼항연산자를 이용한다
// 2. 값은 모두 변수에 담는다

// 실습 문제
// 나이가 19살 이상이면 "입장 가능" 출력
// 나이가 19살 이하면 "입장 불가" 출력

// 나이가 짝수면 "짝수" 출력
// 나이가 홀수면 "홀수" 출력

// &&, || 연산자를 사용한다.
// 나이가 16살이면 "당첨" 출력
// 아니면 "꽝입니다."를 출력

// 콘솔 결과 : [본인이름]님은 [입장가능]이며,
// [나이], [홀수], [꽝입니다]

// const num = 22;
// const name = "김유나";

// let admission = (num >= 19) ? "입장 가능" : "입장 불가";
// let age = (num % 2 === 0) ? "짝수" : "홀수";
// let result = (num === 16 && "당첨") || "꽝입니다.";


// console.log("김유나님은 "+ admission +"이며,"+ "\n" + num +"," + age + "," + result );


const age1 = 22;
const name1 = "김유나";
const baseAge = 19;
const pass = "입장 가능";
const notPass = "입장 불가";
const even = "짝수";
const odd = "홀수";
const lucky = "당첨😎";
const unLucky = "꽝입니다.😥";

// const isEven = age1 % 2 === 0;
// const isLucky = age1 == 16;
// const isAdult = age1 >= baseAge ? pass : notPass;
// const luckyResult = isLucky ? lucky : unLucky;
// const evenResult = isEven ? even : odd;
// const result1 = `${name1}님의 ${isAdult},\n${age1}, ${evenResult}, ${luckyResult}`;
// console.log(result1);

//$$ ||
const isAdult = age1 >= baseAge;
const isEven = age1 % 2 === 0;
const isLucky = age1 ===16;

const result = isAdult && isEven ? "성인이면서 짝수"
    : isAdult ? "성인이면서 홀수" 
        : "성인이 아닙니다.";

console.log(result);