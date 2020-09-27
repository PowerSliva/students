// Писать код можно прямо здесь, запускать его пока лучше на jsbin.com, но результат отдать в этом файле!
// Пример оформления ниже

/** 
1. Написать функцию, которая принимает два числа a, b, 
и выводи в консоль строку формата «а больше/меньше/равно b на n”
*/
a = prompt("Введите число а");
b = prompt("ВВедите число b");
function compare(a, b) {
     if (a > b) {
       return console.log(`а больше b на ${a - b}`)
     }
  else
     if (a < b) {
       return console.log(`а меньше b на ${b - a}`)
     }
  else
    return console.log("а равно b")
  }
compare(a, b)
// Можно было и на swatch/case написать, но я не знаю стоит ли
/**
 2. Написать функцию, которая сортирует массив 
 [‘Саша’, ‘Андрей’, ‘Олег’,’Юлия’, ‘Ксения’, ‘Артём’] 
 в алфавитном порядке и выводит новый массив в консоль.
 */
let massname = ['Саша', 'Андрей', 'Олег','Юлия', 'Ксения', 'Артём'];

function sortname(massname) {
  massname.sort();
  return console.log(massname);
}
sortname(massname) 
// Я полагая ипользовать встроенные команды нельзя было)))

/**3. Написать функцию, которая отфильтрует массив 
[1,2,3,4,5,6,7,8,9,10,11,12,13,14] и оставит из него только те числа, 
квадраты которых больше 20, но меньше 100
*/
let masszad3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function sortzad3(masszad3) {
  for (let i=0; i<masszad3.length; i++){
    if(masszad3[i]**2 > 20 && masszad3[i]**2 < 100) {
    }
    else {
      masszad3.splice(i,1)
      i--;
          }
      }
    return console.log(masszad3);
}
sortzad3(masszad3)

/**4. Написать функцию, которая 25 раз выведет в консоль: 
 * «Я номер 1», «я номер 2», «Я номер 3» и так далее до 25. 
 * */
kol = prompt("Сколько повторений вы хотите");
function Inam(kol) {
  for (let i=1; i<=kol; i++) {
       console.log(`Я номер ${i}`);
      }
}
Inam(kol)
/**
 * Написать функцию, которая вернёт из исходного массива
 *  [10,20,30,40,50,60,70] следующий массив [70,60,50,40,30,20,10]
 */
let masszad4 = [10,20,30,40,50,60,70];

function otobmass(masszad4) {
  masszad4.reverse();
  return console.log(masszad4);
}
otobmass(masszad4) 
/**
 * 6. Написать функцию, которая будет принимать на вход имя, 
 * а возвращать массив из букв его имени, то есть: 
 * вход - «Саша», выход - [‘с’, ‘а’, ‘ш’, ‘а’]
 */
names = prompt("Введите имя");
function rasbit(names) {
 let rasname = names.split('');
 return console.log(rasname);
}
rasbit(names)
/**
 * 7. Написать функцию, которая принимает на вход массив из 4 чисел,
 *  и возвращает сумму этих числе. То есть, вход: [1,2,3,4], выход: 10
*/
let masszad7 = [1,2,3,4];
 function massum(masszad7) {
  result = masszad7.reduce((sum, current) => sum + current, 0);
    return console.log(result);
}
massum(masszad7)

/**
 * 8. Написать функцию, которая принимает на вход строку, 
 * и выводит в консоль её длину. 
 * */
/**
let arr = prompt("")
console.log(arr.lenght)
Не понимаю, почему при вводе предложения через ,prompt, выходит неопределенность.
Prompt ведь тоже преобразует введеные в него данные в текст? 
 */
let slovo = "Синяя пртица"
function izdlina(slovo) {
  return console.log(slovo.length);
}
izdlina(slovo)
/**
 * 9. Написать функцию, которая принимает на вход имя и число n,
 *  и выводит в консоль заданное имя n-раз.
 */
let imy = prompt("Введите имя");
let chislo = prompt("Введите число");
function viviod9(imy, chislo) {
  
  for (let i=0; i<=chislo; i++) {
    console.log(imy);
   }
 }
viviod9(imy, chislo)