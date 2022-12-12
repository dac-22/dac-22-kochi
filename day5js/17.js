function hello(p1) {}

let i = 1;
hello(1);
hello(i);

let price = 99.99;
hello(99.99);
hello(price);

let username = "rahul";
hello("rahul");
hello(username);

let fn1 = () => {};
hello(fn1);
hello(() => {}); // CALLBACK FUNCTION, P1 is callback funcn
