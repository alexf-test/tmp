
function foo(bar, baz) {
  return bar + baz;
}

foo(1, 2)

foo('x')

let x = 0;
x = 1;
x = 2;
x = 3;
x = 4;
x = foo(x++, --x);


alert('foo');

function bar(x, y) {
  return y + y;
}

bar(1);
