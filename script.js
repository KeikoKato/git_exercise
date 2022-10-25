'use strict'

// git add
// git commit
// git rm


// Q1
// const arr = ['a', 'b', 'c'];

// function addValueToTopOfArray(array, value) {
//     // array.unshift(value);
//     // // console.log(array);
//     // return array;
//     const arr2 = arr.slice(); // 【ポイント！】arrのコピーを作成
//     arr.unshift(value); //arr2の先頭にvalueを追加
//     return arr2;
// }

// // return [value].concat(arr); でもできる

// test(addValueToTopOfArray(arr, 'z'), ['z', 'a', 'b', 'c']);
// test(addValueToTopOfArray(arr, 10), [10, 'a', 'b', 'c']);

// // Q2
// // const arr = [1, 2, 3, 4, 5];

// function dropArrayValue(array, index) {
//     const arr2 = array.slice();
//     array.splice(index, 1);
//     return array;
// }

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     //// とかでもできる！　知っている知識でも。
// }

// test(dropArrayValue(arr, 2), [1, 2, 4, 5]);
// test(dropArrayValue(arr, 3), [1, 2, 3, 5]);

// // Q3
// // ここにコードを書きましょう

// const englishPoint = [
//     {"name": '赤柳', "point": 98},
//     {"name": '井上', "point": 34},
//     {"name": '鵜川', "point": 77},
//     {"name": '遠藤', "point": 90},
//     {"name": '大桃', "point": 100},
//     {"name": '上川', "point": 76},
//     {"name": '菊池', "point": 63},
//     {"name": '工藤', "point": 30},
//     {"name": '剣持', "point": 74},
//     {"name": '九重', "point": 42}
// ]

// const englishResult = {
//     "平均点": 68.4,
//     "赤点者": ['井上', '工藤', '九重'],
// }

// const mathPoint = [
//     {"name": '赤柳', "point": 94},
//     {"name": '井上', "point": 40},
//     {"name": '鵜川', "point": 73},
//     {"name": '遠藤', "point": 98},
//     {"name": '大桃', "point": 100},
//     {"name": '上川', "point": 82},
//     {"name": '菊池', "point": 57},
//     {"name": '工藤', "point": 53},
//     {"name": '剣持', "point": 23},
//     {"name": '九重', "point": 99}
// ]

// const mathResult = {
//     "平均点": 71.9,
//     "赤点者": ['井上', '菊池', '工藤', '剣持']
// }

// function getResult(obj) {
// 	const result = {"平均点": "", "赤点者": []};
//     let pointResult = 0; //平均点
//     let redLine = []; // 赤点者の名前入れる用
//     for (let index of obj) {
//         pointResult += index.point;
//         if (index.point <= 59) {
//             redLine.push(index.name);
//         }
//     }
//     pointResult = pointResult / obj.length;
//     result.平均点 = pointResult;
//     result.赤点者 = redLine;
//     return result;
// }

// test(getResult(englishPoint), englishResult);
// test(getResult(mathPoint), mathResult);


// ADVANCE
// Q1
const value_set = [
    {"name": "Tanaka", "height": 179},
    {"name": "Doi", "height": 155},
    {"name": "Takahashi", "height": 189},
    {"name": "Miyata", "height": 168},
    {"name": "Sakamoto", "height": 180},
    {"name": "Ito", "height": 152},
    {"name": "Kawada", "height": 177},
    {"name": "Koyama", "height": 169}
];

function getEdge(value_set) {
// 	let result = {"max": "", "min": ""}; //result = {};でも行ける
//     let heightArray = [];
//     heightArray = value_set.map( function(value) {
//         return value.height;
//     })
//     console.log(heightArray);
//     let maxHeight = Math.max(...heightArray); // heightArray.reduce(function(a,b) {}
//     let minHeight = Math.min(...heightArray);
//     result = {"max": maxHeight, "min": minHeight};
//     return result;
// }

    let result = value_set.map(elem => elem.height).sort((a, b) => a - b);
    return {"max": result[arrayOfArray.length - 1], "min": result[0]};
}
// これでも書ける！

test(getEdge(value_set), {"max": 189, "min": 152});

// ...array: スプレッド構文
// ...args: 残余引数

// Q2
const str = "今日の晩御飯はカレーだ。";

function getNgram(str, ngram) {
	// ここに処理を記述
}

test(getNgram(str, 1), ["今", "日", "の", "晩", "御", "飯", "は", "カ", "レ", "ー", "だ", "。"]);
test(getNgram(str, 2), ["今日", "日の", "の晩", "晩御", "御飯", "飯は", "はカ", "カレ", "レー", "ーだ", "だ。"]);