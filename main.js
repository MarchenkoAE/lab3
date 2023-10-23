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