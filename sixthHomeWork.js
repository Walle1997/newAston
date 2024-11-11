let promiseTwo = new Promise((resolve, reject) => {
    resolve("a"); // 1. Создание промиса с присваиванием значения "а"
 });
 
 promiseTwo
 .then((res) => {
    return res + "b"; // 2. "ab"
 })
 .then((res) => {
    return res + "с";// 3. "abc"
 })
 .finally((res) => {
    return res + "!!!!!!!"; // 4. 'undefined', т.к. не передано значение из предыдущего шага.
 })
 .catch((res) => {
    return res + "d"; // 5. Т.к. catch должен отлавливать ошибку, а ошибки как таковой нет, то данный обработчик просто не срабатывает и пропускается
 })
 .then((res) => {
    console.log(res); // 6. Вывод в консоль из последнего then => 'abc'
 });
 // abc


 function doSmth() {
    return Promise.resolve("123"); // 1. возврат промиса со значением "123"
 }
 
 doSmth() // 2. Вызов функции со значением "123"
 .then(function (a) {
    console.log("1", a); // 3. "1 123"
    return a;
 })
 .then(function (b) {
    console.log("2", b); // 4. "2 123"
    return Promise.reject("321");
 })
 .catch(function (err) {
    console.log("3", err); // 5. "3 321"
 })
 .then(function (c) {
    console.log("4", c); // 6. "4 undefined"
 return c;
 });
 /* Итоговый порядок вывода в консоли:
 '1 123'
 '2 123'
 '3 321'
 '4 undefined'
 */

 /*Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]
 */

function indexOfArray(arr) {
    arr.forEach((element, index) => {
        setTimeout(() => {
            console.log(`Index of element ${element} is ${index}`);
        }, index * 3000);
    });
}

const array = [10, 12, 15, 21];
indexOfArray(array); /*
Index of element 10 is 0
Index of element 12 is 1
Index of element 15 is 2
Index of element 15 is 2

P.S. asciinema: https://asciinema.org/a/2l0duCyd78ixNmhe8R8rwY1hE
*/

/* Top Level Await** — это возможность, введенная в спецификацию языка JavaScript,
которая позволяет использовать оператор `await` вне асинхронных функций.
Это значительно упрощает работу с асинхронным кодом, особенно в модулях ES.

Вот основные моменты, которые стоит знать о Top Level Await:

- Использование `await` вне функции `async`**: С помощью Top Level Await вы можете использовать `await`
непосредственно на верхнем уровне файла модульного кода (в модулях ES),
без необходимости оборачивать его в асинхронную функцию. Это особенно полезно для загрузки данных
или выполнения асинхронных операций сразу после импорта модулей.

Ограничения:

1. Модули ES: Top Level Await доступен только в модулях ES (то есть в файлах с расширением `.mjs` или в скриптах,
где указана `type="module"` в HTML). В обычных скриптах (файлах .js без модуля) `await` все еще нужно использовать только внутри асинхронных функций.
   
2. Не блокирующее поведение: Хотя использование Top Level Await позволяет писать более простой
и читаемый асинхронный код, оно также может ввести некоторую блокировку на уровне загрузки.
Если есть много Top Level Await выражений, это может замедлить скрипт,
так как каждая операция `await` будет блокировать выполнение до ее завершения.

Поддержка в браузерах и приложениях:

На момент последнего обновления информации (октябрь 2021 года), Top Level Await поддерживается в большинстве современных браузеров
и средах выполнения JavaScript, таких как Node.js (начиная с версии 14.8). Тем не менее, всегда стоит проверять совместимость с конкретными версиями браузеров
и окружений, которые вы используете.
*/
/* 
Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject
fetchUrl('https://google/com&#39;)
.then(...)
.catch(...) - сatch должен сработать только после 5 неудачных попыток
получить содержимое страницы внутри fetchUrl
*/


function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const maxAttempts = 5;
        let attempts = 0;

        function attemptFetch() {
            attempts++;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка!');
                    }
                    return response.text();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    if (attempts < maxAttempts) {
                        console.log(`Попытка ${attempts} не удалась. Повторяем...`);
                        attemptFetch();
                    } else {
                        reject(`Не удалось получить данные после ${maxAttempts} попыток: ${error}`);
                    }
                });
        }

        attemptFetch();
    });
}

fetchUrl('https://google.com')
    .then(data => {
        console.log('Данные получены:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });