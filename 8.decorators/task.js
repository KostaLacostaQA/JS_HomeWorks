//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (timeoutId === null) {
      func(args);
      wrapper.count++;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
}
