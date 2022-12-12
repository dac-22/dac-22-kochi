let list = ["delhi", "calcutta", "kochin"];

let fn1 = function () {};
list.forEach(fn1);

// this is prefered
list.forEach(function () {});

let fn2 = () => {};
list.forEach(fn2);

// this is SUPER DUPER RECOMMENDED
list.forEach(() => {});
