// console.log('Ok');

// let daySecondWar = prompt('В каком году началась 2 мировая?'); //погружаем в контейнер для сохр данных=забираем данные вписанные пользователем в окно
// console.log(daySecondWar);

// console.log(daySecondWar);
// console.log(typeof daySecondWar);

// if(daySecondWar>1939){
//     alert('Поздно');
// } else if(daySecondWar<1939){
//     alert('Рано');
// }else if(daySecondWar!==daySecondWar){
//     alert('ВВедите корректные данные'); //защита от "дурака меняющего код"
// }

// if(1==2){ //null, false, 0,undefined
//     alert('Это модальное окно,которое никогда не появится');
// }

// let age=prompt('Сколько вам лет?',''); //забираем данные от пользователя с помощью prompt
// let accessAllowed; // здесь хранится доступ,если пользователю есть 18 лет
// if(age>=18){
// accessAllowed=true;
// } else {
// accessAllowed=false;
// }

// accessAllowed=(age>=18)?true:('доступ закрыт'); //(тернарный оператор)если пользователю 18 и более, то тру,если нет, то фолс
// alert(accessAllowed);

//accessAllowed=(age>=18)?(age>=33 && age<=44)?'Зрелый пользователь':'Молодеж или пенсионер':('доступ закрыт');
// alert(accessAllowed);

//parseInt - пользователь пишет число буквами и программа их видет как надо 

// switch (4) {
//     case 2:
//         alert('Маловато');
//         break; //для выхода из свеча
//     case 4:
//         alert('В точку!');
//         break;
//     case 5:
//         alert('Перебор');
//         break;
//     default:
//         alert('Нет таких значений');
// }

// console.log('Задача №1');
// let a = parseInt(prompt('Введите первое число'));
// let b = parseInt(prompt('Введите второе число'));
// if(a>b){
//     alert(a);
// } else if (b>a) {
//     alert(b);
// }
// else if (a!==a) {
//     alert ('Введите коректно данные');
// } else if (b!==b) {
//     alert ('Введите коректно данные');
// } else {
//     alert ('Числа равны');
// }

// console.log('Задача №2');
// for (let i=0; i<=15; i++){
//     if (i % 2 == 0) {
//         console.log(i + ' - Число четное');
//     } 
//     else {
//         console.log(i + ' - Число нечетное')
//     }
// }

// console.log('Задача №3');
// for(let i=1; i<=5; i++){
//     for(let j=0; j<i; j++){
//         document.write('*');
//     }
//     document.write('<br>')
// }

// console.log('Задача №4');
// let sum = 0;
// for( let i = 0; i < 1000; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//         sum += i;
//     }
// }
// document.write(sum);






console.log('Задача №1');
let i=1;
while(i<=42){
    console.log(i);
    i++;
}


