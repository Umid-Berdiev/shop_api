const a = [12, 13, 14, 15, 16, 17];
const b = [22, 12, 13, 14, 24, 66];
const c = [44, 33, 17, 22, 46, 25];
const d = [44, 33, 44, 33, 33, 25];

function count(arr) {
  return arr.reduce((acc, cur) => {
    const obj = acc.find((item) => item.son === cur);
    obj
      ? obj.takrorlandi++
      : acc.push({
          son: cur,
          takrorlandi: 1,
        });
    return acc;
  }, []);
}

// console.log(count(a));
// console.log(count(b));
// console.log(count(c));
console.log(count(d));
