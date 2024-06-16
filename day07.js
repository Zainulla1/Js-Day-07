
//Exercise -1

//Find the missing Number in given array 1 to 10

const arrNum=[1,2,3,4,5,6,8,10]
const missArray=[]
const missingValue=(arr)=>{
    const minValue=Math.min(...arr)
    const maxValue=Math.max(...arr)
    for(let i=minValue;i<maxValue;i++){
        if(arr.indexOf(i)<0){
            missArray.push(i)
        }
    }
    return(missArray)
}
console.log(missingValue(arrNum));

//Exercise -2

//Find an even Number and Odd Number in an Array

const numbers=[1,2,3,8,9,12,16]
const even=numbers.filter((item)=>{
    return item%2===0
})
const odd=numbers.filter((item)=>{
    return item%2==!0
})
console.log('even numbers',even);
console.log('odd numbers',odd);


//Exercise -3

//Find the factorial of given numbers by using JS

const inputNum=("please enter number")
const fact=1;
if(inputNum<0){
console.log(`factorial of ${inputNum} is not possible`)
}else{
    for(let i=1;1<inputNum;i++){
        fact=fact*1
    }
}
console.log(`factorial of ${inputNum} is ${fact}`);