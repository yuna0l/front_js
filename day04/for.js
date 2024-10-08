// for(초기식; 조건식; 증감식){}
// Ex) for(let i = 0; i < 10; i++){
// 		조건식이 참일 때 실행할 문장;
// }

// for(let i = 0; i < 10; i++){
//     console.log("김유나");
// }
// for(let i = 0; i < 10; ++i){
//     console.log("김유나");
// }

// 1부터 10까지 출력
for(let i = 0; i < 10; i++){
    console.log(i+1);
    if(i == 5){
        break;
    }
}