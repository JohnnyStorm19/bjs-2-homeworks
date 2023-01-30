//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        const objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {
            console.log('Из кэша: ' + objectInCache.value);
            return 'Из кэша: ' + objectInCache.value;
        }
        let result = func(...args);
        cache.push({ hash: hash, value: result });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args);
        }, delay);
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}


