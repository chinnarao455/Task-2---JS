let arr=[1,"string",true,null,undefined,[],{}]
arr[0]=20
 console.log(arr.slice(0,2))

let fruits=["banana","orange","lemon","mango"];
console.log(fruits.slice(1))

let names=["aplle","samsung","galaxy"]
console.log(names.slice(1))
arr.push("chinna")
console.log(arr)
arr.push("dasari")
console.log(arr)
arr.push("hi")
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift("hi")
console.log(arr)
arr.unshift("good")
console.log(arr)
arr.unshift("chinna")
console.log(arr)

arr.shift()
console.log(arr)
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(0,1,"hi")
console.log(arr)
arr.splice(4,1)
console.log(arr)
arr.splice(3,0,"hi")
console.log(arr)
//sort
arr=[1,2,3,4,5,6,9,8,7]
arr.sort()
console.log(arr)
arr=[1,2,3,4,10,11,15]
arr.sort()
console.log(arr)
arr=[1,4,7,8,5,3]
arr.sort()
console.log(arr)
//reverse
arr=[1,2,3,4,5,6,7,]
arr.reverse()
console.log(arr)
arr=[1,3,6,7,5,4]
arr.reverse()
console.log(arr)
arr=[10,11,12,13,14,15]
arr.reverse()
console.log(arr)
//join

// console.log(arr1.join("-"))
let num = [1,2,3,4]
// let num1 = [5,6,7,8]
console.log(num.join('-'))
let num1=[5,6,7,8]
console.log(num1.join('-'))
let num2=[9,10,11,12]
console.log(num2.join('-'))
//concat
let a=[1,2,3,4]
let b=[4,5,6,7]
console.log(a.concat(b))
let str1=["chinnarao","Dasari"]
let str2=["how","are","you"]
console.log(str1.concat(str2))
let str3=["lenovo","dell"]
let str4=["apple","microsoft"]
console.log(str3.concat(str4))
//flat
let flat1 =[[1,2,3],[4,5,6],[7,8,9]]
let flat2=flat1.flat()
console.log(flat2)
let flat3=[[1,2,3],[4,5,6],[7,8,9]]
let flat4=flat3.flat()
console.log(flat4)

//even numbers code

let ev=[1,2,3,4,5,6,7,8,9,10]
function even(ev){
for(i=0;i<=ev.length+1;i++){
    if(ev[i]%2==0){
        console.log(ev[i])

    }
}
}
even(ev)