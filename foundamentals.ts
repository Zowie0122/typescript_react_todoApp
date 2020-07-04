function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);
// error in ts 👉sum("1", 2);

// Data types in ts
// boolean, number, string, array, tuple, enum, any, void, null, undefined , never, object

let isDone: boolean = false;
let myNum: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let another_list: Array<number> = [1, 2, 3];
//Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
let x: [string, number];
x = ["hello", 2];
//enum is for declearing object with index ?
enum Color {
  Red,
  Green,
  Blue,
}
let r = Color.Red;
let g = Color[1];

console.log(r, g);

function noValueReturn(): void {
  console.log("This is my warning message");
}

//Different between void and never
// void型は値がないことを指している。ただし、void型にはundefinedが含まれる。JavaScriptの関数でreturnを省略、または戻り値のないreturnをするとundefinedが返される。
const hello_void = (name: string): void => {
  console.log("hello", name);
  return undefined; // or return
};

//never型は発生し得ない値のことを指している。関数内部で例外を投げる場合や無限ループをする場合など、戻り値が得られないときにしか使えない。void型と違いundefinedも受け付けないため、戻り値の型にneverを指定した場合はreturnすることはできない。

// ↓はコンパイルエラーになる
const hello_never = (name: string): never => {
  console.log("hello", name);
  // returnが省略されている場合はundefinedを返すためnever型にならない
};

// Q: is never more for excution another function inside and while loop ? 