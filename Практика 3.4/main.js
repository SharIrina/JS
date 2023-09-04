// console.log('Ok');

/*Написать ф-цию, которая принимает 2 числа и возвращает результат их умножения */

// function calcMulti (a,b){ //а и б-параметр
//     return a*b;
// };
// console.log(calcMulti(3, 2)); //а и б -аргумент

/*написать ф-цию которой передаем ФИО, возраст, и получаем строку "Привет <Иван> <ПЕтров> с возрастом <17 лет>"*/
    
//     let nameUser = prompt('Введите ваше имя');
//     let surname = prompt('Введите вашу фамилию');
//     let age = prompt('Введите ваш возраст');

//     function getInfo(name, surname, age) {
//         return 'Привет ' + ' ' + name + ' '+ surname + 'С возрастом ' + age + ' Лет';
//     }
// console.log(getInfo(nameUser, surname, age));

/*написать ф-цию, которая принимает пол чел в виде строки, результат ф-ции возвращает строку "Ваш пол мужской/женский" или " ваш пол не определен" */

// let genderUser = prompt("Какой у вас пол M (Мужчина) или F (Женщина)?");

// function getGenderUser(gender){
//     if(gender=="F"){
//         return "Ваш пол Женский";
//     } else if (gender=="M") {
//         return "Ваш пол Мужской";
//     } else {
//         return "Ваш пол не определен";
//     }
// }
// alert(getGenderUser(genderUser));

/*сделать ф-цию, которая принимает число от 1 до 7, а возвращает день неде ли на рус.яз */

// let day = prompt("Введите день недели цифрой от 1 до 7");
// function getDayWeek(day){
//     switch(day){/*в скобках значение,которое сравниваем с значением в кейсах - case*/
//     case '1':
//         return 'Понедельник';
//     case '2':
//         return 'Вторник';
//     case '3':
//         return 'Среда';
//     case '4':
//         return 'Четверк';
//     case '5':
//         return 'Пятница';
//     case '61':
//         return 'Суббота';
//     case '7':
//         return 'Воскресенье';
//     default: /*если ничего не вводят, то default */
//         return 'Укажите корректное значение';
//     } 
// }
// alert(getDayWeek(day));

/*Сделать ф-цию, которая принимает параметром число от 1 до 100. К переданному значению в ф-цию вывести сообщение о сост возраста */

let age = parseInt(prompt('Сколько вам полных лет?'));

function getAgeUser(age){
    if(age >= 0 && age <= 17){
        return 'Ребенок';
    } else if (age > 17 && age <= 30){
        return 'Молодой';
    } else if (age > 30 && age < 55){
        return 'Зрелый';
    } else if (age >= 55 && age < 90){
        return 'Опытный';
    } else if (age >= 90 && age <= 100){
        return 'ОГО, вы долгожитель!';
    } else {
        return 'Введите корректно данные';
    }
}
alert(getAgeUser(age));