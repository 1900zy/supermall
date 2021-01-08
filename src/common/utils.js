/* 防抖debounce函数，作用：对于refresh非常频繁的问题，进行防抖操作
返回新函数，并不会非常频繁的调用，如果下一次执行的非常快，那么会把上一次取消掉 */
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}