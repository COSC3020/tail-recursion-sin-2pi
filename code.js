function fib(int) {
  function _fib(n, curr, prev) {
    if (n === 0) return 0;
    if (n === 1) return curr;
    return _fib(n - 1, curr + prev, curr);
  }
  return _fib(int, 1, 0);
}
