    "use strict";
    
    //1

    let x = 20;
    let y = 58;
    let z = 42;

    console.log(x+y+z);

    //2

    const SECOND_IN_MINUTES = 3600;
    const MINUTES_IN_HOURS = 60;
    const HOURS_IN_DAY = 24;
    const DAYS_IN_YEAR = 365;
    let myAge = 29;

    console.log(myAge*DAYS_IN_YEAR*HOURS_IN_DAY*MINUTES_IN_HOURS*SECOND_IN_MINUTES);

    //3


    let count = 42
    let userName = '42'

    let countStr = count+'';
    let countStrSecond = String(count);

    let userNameToNumber = Number(userName);
    let userNameToNumberSecond = +count;

    console.log(userNameToNumberSecond);

    //4

    let a = 1;
    let b = 2;
    let c = "белых медведей";

    console.log(String(a)+String(b)+' '+c);

    //5

    let wordOne = 'доступ';
    let wordTwo = 'морпех';
    let wordThree = 'наледь';
    let wordFour = 'попрек';
    let wordFive = 'рубило';

    let lengthWords = wordFive+wordFour+wordThree+wordTwo+wordOne;

    console.log(lengthWords.length);

    //6

    let firstVar = 42;
    let secondVar = '42';
    let threeVar = false;

    console.log(`Variable:${firstVar} have type: ${typeof (firstVar)}`);
    console.log(`Variable:${secondVar} have type: ${typeof (secondVar)}`);
    console.log(`Variable:${threeVar} have type: ${typeof (threeVar)}`);

    //7

    let nameLocal = prompt(`Введите Ваше имя: `);
    let ageLocal = prompt(`Введите Ваш возраст: `);

    //8

    let variableA = 4;
    let variableB = 3;
    [variableA,variableB]=[variableB,variableA];

    console.log(variableA);
    console.log(variableB);



    //9

    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";

    let cipher = codeWord1[2-1]+codeWord2[2-1]+codeWord3[2-1]+codeWord4[2-1]+codeWord5[2-1];

    console.log(cipher)