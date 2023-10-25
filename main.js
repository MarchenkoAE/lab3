//
//lab3 part 1: by Marchenko Alex 007g1
//
//task1
let admin="", name="John";
admin= name;
alert(admin);
//task 2
let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));
alert(a + b);
//task 3
for (let j = 0; j < 11; j++) {
    if ((j%2==0)&&(j>0))
    console.log(j);
}
//task 4
let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++;
}
//task 5
let n=0;

while (true) {

  let value = prompt("Введите число больше 100: ");

  if ((value>100)||(this.key === "Escape"))
  {
  n = value;
      break;
  }

}
alert( 'Число: ' + n );
//task 6
let n = 10;
next:
for (let i = 2; i <= n; i++)
{
  for (let j = 2; j < i; j++)
  {
    if (i % j == 0) continue next;
  }

  alert( i );
  }
  //
  //lab3 part 2: by Marchenko Alex 007g1
  //
  //task 1
  //1
  let str="123";
  n="";
  function reverseString(str, n)
  {
  n = str.split("").reduce((acc, char) => char + acc, "");
  return n;
  }
  console.log(n);
  //2
  let input="111333456";
  function removeDuplicate(str, n)
      {
          let index = 0;
          for (let i = 0; i < n; i++)
          {
              let j;
              for (j = 0; j < i; j++)
              {
                  if (str[i] == str[j])
                  {
                      break;
                  }
              }

              if (j == i)
              {
                  str[index++] = str[i];
              }
          }

          return str.join("").slice(str, index);
      }
         let str = input.split("");
         let n = str.length;
         console.log(removeDuplicate(str, n));

     ///3
     let str = "1355567";
     let substr = "5";
     let n=0;
     let pos = -1;
     function GetSubStringCount(pos, str, substr, n)
     {     while ((pos = str.indexOf(substr, pos + 1)) != -1) {
             ++n;
           }
           return n;
     }
     console.log(GetSubStringCount(pos, str, substr, n));
     ///4
     let str1 = "245";
     let str2 = "";
     str2= Number(str1).toString(2); //translated into secondary number
     n=str2.length;
     function CountDuplicates(str2, strZeroes)
     {
               let index = 0;

               for (let i = 0; i < n; i++)
               {
                   let j;
                   for (j = 0; j < i; j++)
                   {
                       if (str2[i] == str2[j])
                       {
                           break;
                       }
                       else
                       {
                           strZeroes.push(Zeroes);

                       }
                   }

                   if (j == i)
                   {
                       Zeroes +=i.toString() + j.toString();
                   }

     return strZeroes;
     }
     console.log(CountDuplicates(str2, strZeroes));
     //5
     let str1 = "245";
     let str2 = "";
     str2= Number(str1).toString(2); //translated into secondary number
     function Substring(s)
     {

         let ans = 1, count = 1;
         for (let i = 1; i < s.length; i++) {

             if (s[i] == s[i - 1]) {
                 ++count;
             }
             else {
                 ans = Math.max(ans, count);
                 count = 1;
             }
         }
         ans = Math.max(ans, count);
         return ans;
     }
     console.log( Substring(str2));
     //
     //task 2
     //
     //1
     let input="фывфавыапрс";
function check (s) {
  for (let l of s)
    if (s.indexOf(l) === s.lastIndexOf(l))
      return l
  return null
}
console.log(check(input))
         //2
input=6;
function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i<length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(generateRandomString(input));
         //3

let input="feuifhure";
 let result="";
function UniqueChar(str, result) {
 for (var x=0;x < str.length;x++) {

 if(result.indexOf(str.charAt(x))==-1) {
  result += str[x];  
  
   }
  }
  return result;  
}  
console.log(UniqueChar(input, result));
