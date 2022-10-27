'use strict'

// for...ofループの復習
const numberArray = [1, 2, 3, 4];
for (const number of numberArray) {
    console.log(number);
}

function getSum(array) {
    let result = 0;
    for (const number of numberArray) {
        result = result + number;
    }
    return result;
}

// ここで終わりじゃありません！実引数を入れて関数を呼び出す作業が必要
console.log(getSum(numberArray)); //console画面に出力を出すには、console.log

// for...in文の復習
const obj = { a: 1, b: 2, c: 3};

for (const key in obj) {
    console.log(key);
}

for (const key in obj) {
    console.log(obj[key]);
}

function getSumValue(object) {
    let result = 0;
    for (const key in object) {
        result = result + object[key];
    }
    return result;
}

console.log(getSumValue(obj));

// for文の構文
// for ([initialization]; [condition]; [final-expression]) {
    // statement;
// }

// initialization: 普通は初期化に使う。
// 　　　　　　　　ループが始まる前に一度だけ評価される（代入式を含む）式or変数宣言
// condition: ループのそれぞれの反復処理が行われる前に評価される式。
// 　　　　　　この式 = true の場合、statementが実行される。省略可能。省略されたら常にtrueとみなされる
// 　　　　　　この式 = false の場合、for{ }に続く後の式に飛ぶ。
// final-expression: ループのそれぞれの反復処理の最後に評価される式。
// 　　　　　　　　　　次のconditionの評価の前に行われる。普通はカウンター変数を更新、増加するのに使う。
// statement: for()の条件がtrueとなった場合に限り実行される。

// ★forループは、初めから終わりまで、決まった数ずつ増減する処理を書くのに適している

// 0から始まる変数の宣言
let num = 0;

// 5未満の数
num < 5;

// 1ずつ加算する
num++; // num = num + 1

// for文で記載し、値を出力
for (let num = 0; num < 5; num++){
    console.log(num);    
}

const numberArray2 = ["zero", "one", "two", "three", "four"];

// console.log(numberArray2[0]);
// console.log(numberArray2[1]);
// console.log(numberArray2[2]);

for (let i = 0; i < 5; i++) {
    console.log(numberArray2[i]);
}

const numberArray3 = ["zero", "one", "two", "three", "four", "five"];

for (let i = 0; i < numberArray3.length; i++) {
    console.log(numberArray3[i]); // ↑条件式は、数値でなくてもよい。プロパティなどでもOK
}

// 課題１
function getTotal(num) {
    let result = 0;
    for (let i = 0; i <= num; i++ ) {
        result = result + i;
    }
    return result;
}

test(getTotal(5), 15);
test(getTotal(10), 55);
test(getTotal(15), 120);

// 課題２
function getByEven(num) {
    let result = [];
    for (let i = 0; i < num ; i = i + 2) {
       result.push(i); 
    }
    return result;
}   

test(getByEven(5), [0, 2, 4]);
test(getByEven(10), [0, 2, 4, 6, 8]);
test(getByEven(16), [0, 2, 4, 6, 8, 10, 12, 14]);

// 課題３
function getDecrement() {
    let result = 11;
    for (let i = 0; i < 10; i++) {
        result = result - 1;
        console.log(result);
    }
}

getDecrement();

// 課題４
function getSumArray(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result[i] = array1[i] + array2[i];
    }
    return result;
}

test(getSumArray([1, 2, 3], [1, 2, 3]), [2, 4, 6]);
test(getSumArray([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(getSumArray([100], [100]), [200]);
test(getSumArray([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]), [7, 7, 7, 7, 7, 7]);
test(getSumArray([1, 2, 3, 4, 5, 6], [-6, -5, -4, -3, -2, -1]), [-5, -3, -1, 1, 3, 5]);

// 課題５
const harryPotter =[
    { volume:1, JP: "ハリー・ポッターと賢者の石", EN: "Harry Potter and the Philosopher's Stone", date: "1997-6-26", data: { pages: 480, hour: 8.0 }},
    { volume:2, JP: "ハリー・ポッターと秘密の部屋", EN: "Harry Potter and the Chamber of Secret", date: "1998-7-2", data: { pages: 532, hour: 8.9 }},
    { volume:3, JP: "ハリー・ポッターとアズカバンの囚人", EN: "Harry Potter and the Prisoner of Azkaban", date: "1999-7-8", data: { pages: 672, hour: 11.2 }},
    { volume:4, JP: "ハリー・ポッターと炎のゴブレット（上）", EN: "Harry Potter and the Goblet of Fire", date: "2000-7-8", data: { pages: 568, hour: 9.5 }},
    { volume:5, JP: "ハリー・ポッターと炎のゴブレット（下）", EN: "Harry Potter and the Goblet of Fire", date: "2000-7-8", data: { pages: 592, hour: 9.9 }},
    { volume:6, JP: "ハリー・ポッターと不死鳥の騎士団（上）", EN: "Harry Potter and the Order of Phoenix", date: "2003-6-21", data: { pages: 680, hour: 11.3 }},
    { volume:7, JP: "ハリー・ポッターと不死鳥の騎士団（下）", EN: "Harry Potter and the Order of Phoenix", date: "2003-6-21", data: { pages: 724, hour: 12.1 }},
    { volume:8, JP: "ハリー・ポッターと謎のプリンス（上）", EN: "Harry Potter and Half-Blood Prince", date: "2005-7-16", data: { pages: 504, hour: 8.4 }},
    { volume:9, JP: "ハリー・ポッターと謎のプリンス（下）", EN: "Harry Potter and Half-Blood Prince", date: "2005-7-16", data: { pages: 520, hour: 8.7 }},
    { volume:10, JP: "ハリー・ポッターと死の秘宝（上）", EN: "Harry Potter and the Deathy Hallows", date: "2007-7-21", data: { pages: 584, hour: 9.7 }},
    { volume:11, JP: "ハリー・ポッターと死の秘宝（下）", EN: "Harry Potter and the Deathy Hallows", date: "2007-7-21", data: { pages: 568, hour: 9.5 }}
  ];

//引数は、（オブジェクトを要素に持つ）配列 
function getJPTitle(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]["JP"]);
    }
    return result;    
}

test(getJPTitle(harryPotter).length, 11);
test(getJPTitle(harryPotter),['ハリー・ポッターと賢者の石', 'ハリー・ポッターと秘密の部屋', 'ハリー・ポッターとアズカバンの囚人', 'ハリー・ポッターと炎のゴブレット（上）', 'ハリー・ポッターと炎のゴブレット（下）', 'ハリー・ポッターと不死鳥の騎士団（上）', 'ハリー・ポッターと不死鳥の騎士団（下）', 'ハリー・ポッターと謎のプリンス（上）', 'ハリー・ポッターと謎のプリンス（下）', 'ハリー・ポッターと死の秘宝（上）', 'ハリー・ポッターと死の秘宝（下）']);


// ADVANCE
// 課題１

function fruitChecker(number) {
    let result = [];
    for (let i = 0; i < number; i++ ) {
        if (i % 3 === 2 && i % 4 !== 3) { //(i + 1) % 3 === 0 && ((i + 1) % 4 !== 0)
            result.push("apple");
        } else if (i % 4 === 3 && i % 3 !== 2) {
            result.push("orange");
        } else if (i % 3 === 2 && i % 4 === 3) {
            result.push("strawberry");
        } else result.push(i + 1);
    }
    return result;
}

test(fruitChecker(3),[1, 2, 'apple']);
test(fruitChecker(4),[1, 2, 'apple', 'orange']);
test(fruitChecker(20),[1, 2, 'apple', 'orange', 5, 'apple', 7, 'orange', 'apple', 10, 11, 'strawberry', 13, 14, 'apple', 'orange', 17, 'apple', 19, 'orange']);
test(fruitChecker(40),[1, 2, 'apple', 'orange', 5, 'apple', 7, 'orange', 'apple', 10, 11, 'strawberry', 13, 14, 'apple', 'orange', 17, 'apple', 19, 'orange', 'apple', 22, 23, 'strawberry', 25, 26, 'apple', 'orange', 29, 'apple', 31, 'orange', 'apple', 34, 35, 'strawberry', 37, 38, 'apple', 'orange']);

// ？？？課題２？？？
// function searchLinkedList(list, data) {
//     for (const key in list) {
//         if (list.key === data) {
//             return true;
//         } else if ((typeof list.key === "object") && list.key !== null) {
//             list = list.key;
//             searchLinkedList(list, data);
//         } else if (list.key === null) {
//             return false;
//         }        
//     }
// }

const linkedList = {
    head: {
      value: 5,
      next: {
        value: 3,
        next: {
          value: 1,
          next: {
            value: 2,
            next: null
          }
        }
      }
    }
  };

// console.log(typeof linkedList.head);

// test(searchLinkedList(linkedList, 1), true);
// test(searchLinkedList(linkedList, 4), false);

// ？？？？？？？？？？？？？

// 課題３
// (1)
function getENTitle(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]["EN"]);
    }
    return result; 
}

test(getENTitle(harryPotter).length, 11)
test(getENTitle(harryPotter), ["Harry Potter and the Philosopher's Stone", 'Harry Potter and the Chamber of Secret', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Order of Phoenix', 'Harry Potter and the Order of Phoenix', 'Harry Potter and Half-Blood Prince', 'Harry Potter and Half-Blood Prince', 'Harry Potter and the Deathy Hallows', 'Harry Potter and the Deathy Hallows']);

// (2)
function getReleaseVolume(array, dateStr) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].date === dateStr) {
            result = array[i];
            return result;
        }
    }    
}

test(getReleaseVolume(harryPotter, "1999-7-8"), { volume:3, JP: "ハリー・ポッターとアズカバンの囚人", EN: "Harry Potter and the Prisoner of Azkaban", date: "1999-7-8", data: { pages: 672, hour: 11.2 }});
test(getReleaseVolume(harryPotter, "2005-7-16"),{ volume:8, JP: "ハリー・ポッターと謎のプリンス（上）", EN: "Harry Potter and Half-Blood Prince", date: "2005-7-16", data: { pages: 504, hour: 8.4 }});

// (3)
function getTotalPages(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        // result = result + array[i].data.pages;
        result += array[i].data.pages;
    }
    return result;
}

test(getTotalPages(harryPotter), 6424);


// (4)
function getAveHours(array) {
    let totalHours = 0;
    for (let i = 0; i < array.length; i++) {
        totalHours += array[i].data.hour;
    }
    return Math.round( totalHours / array.length ); //四捨五入して整数に近似した値を出すメソッドMath.round()
}                                                   //負の値の四捨五入に注意　-5.5=> -5 に丸められる

test(getAveHours(harryPotter), 10);