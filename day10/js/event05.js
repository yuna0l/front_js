//input
const inputs = document.querySelectorAll("input");
console.log(inputs);

// font-size를 25px로 키우기
// border의 스타일 변경하기
// width 200px
// height 40px

// 단, inputs[0] 방번호로 들고오지 않는다.
// inputs 반복문을 사용해서 변경하기

inputs.forEach((input) => {
    input.style.fontsize = "25px";
    input.style.border = "solid 2px green";
    input.style.width = "200px";
    input.style.height = "40px";
})