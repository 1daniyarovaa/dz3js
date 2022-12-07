// const str ="#";
// while (str.length <= 7){
//     console.log(str+"");
//     str+= '#';
// }
// var i = "#";
// while (i < 7) {
//     alert( i );
//     i++;
//   }
//   console.log(i);

// var num = "#";
// while (num.length <= 7) {
// console.log(num);
// num += "#";
// }


//(задача1)
for (let num = "#"; num.length <=7; num += "#")
console.log(num);

//(задача2)
for( let i = 1; i<= 100; i++ ){
    str="";
    if(i%3==0){
        str+= 'Fizz';
    }
    if(i%5==0){
        str+='Buzz'
    }
    console.log(str ? str : i);
}

//(задача3)

let size = 8;
let dot = "*";
let string = '';
for (let i = 0; i<size; i++){
  for (let j = 0; j<size; j++){
    if (i%2===0){
      if (j%2===0){
        string+=dot;
      }else{
        string+=' ';
      }
    }else{
      if (j%2===1){
        string+=dot;
      }else{
        string+=' ';
      }
    }
  }
  string+="\n";
}
console.log(string);