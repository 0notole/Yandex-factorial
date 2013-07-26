/*

Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:
4! + 0! + 5! + 8! + 5! = 40585

*/

var numbers = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

for(var k = 0; k < 60000; k++)
    {
        k = k.toString();
        var calc = 0;
        for(var q = 0; q < k.length; q++)
            {
                calc += numbers[k[q]];
            }
        if(k == calc) console.log("k = " + k + " and calc = " + calc);
    }

// k = 1 and calc = 1
// k = 2 and calc = 2
// k = 145 and calc = 145
// k = 40585 and calc = 40585