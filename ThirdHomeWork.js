//third homework
/*
Массивы в JavaScript часто описываются как "неправильные" или "особые" структуры данных по нескольким причинам:

1. Гибкость типов данных: В отличие от массивов в некоторых других языках программирования,
где элементы массива должны быть одного типа (например, только числа или только строки),
массивы в JavaScript могут содержать элементы различных типов.
Это означает, что один и тот же массив может содержать числа, строки, объекты, функции и даже другие массивы. Например:

const mixedArray = [1, 'text', { key: 'value' }, [1, 2, 3], () => console.log('Hello')];
2. Ассоциативные массивы: В JavaScript массивы фактически являются объектами,
что позволяет использовать их как ассоциативные массивы (или словари).
Это означает, что вы можете добавлять свойства к массиву, используя строковые ключи,
что не является типичным поведением для массивов в других языках. Например:

const arr = [1, 2, 3];
arr['name'] = 'MyArray';
console.log(arr.name); // Выведет: MyArray

3. Динамическое изменение размера: Массивы в JavaScript динамически изменяют свой размер.
Вы можете добавлять и удалять элементы в любое время, не беспокоясь о выделении памяти или размере массива,
что делает их более гибкими по сравнению с массивами фиксированного размера в других языках.

4. Индексация и порядок: Хотя массивы используют числовую индексацию, 
ни также могут хранить нечисловые ключи (как упоминалось выше).
Это создает некоторую путаницу, так как массивы могут вести себя как объекты,
но их основное предназначение — хранить упорядоченные данные.

5. Методы массивов: JavaScript предоставляет множество встроенных методов для работы с массивами
(например, map, filter, reduce, forEach и др.), которые делают их более мощными,
чем простые массивы в других языках. Эти методы позволяют выполнять сложные операции над массивами,
что делает их более похожими на функциональные структуры данных.
*/
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = {item: "some value"};

logger.call(obj);
// Привязка контекста объекта к функции через call

function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = {item: "some value"};

const newLogger = logger.bind(obj);
newLogger();
// Привязка контекста объекта к функции через bind

function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = {item: "some value"};

logger.apply(obj);
// Привязка контекста объекта к функции через apply


const num = [1, 2, 4, 5, 9];

const calculateSum = (coll) => {
    let sum = 0;
    for (let i = 0; i < coll.length; i += 1) {
        sum += coll[i];
    }
    return sum;
}

console.log(calculateSum(num)); // 21
// Создание массива чисел и поиск суммы элементов массива

const str = ['My', 'name', 'is', 'Farid'];

const joinStr = (coll) => {
    let sum = [];
    for (let i = 0; i < coll.length; i += 1) {
        sum.push(coll[i]);
    }
    return sum.join(' ');
}

console.log(joinStr(str)); // My name is Farid
// Создание массива строк и объединение его в одну строку

const num1 = [23, 45, 99, 1, 65];

const calculateMax = (coll) => {
    if (coll.length === 0) {
        return null;
    }
    let max = coll[0];
    for (let i = 1; i < coll.length; i += 1) {
        const currentElement = coll[i];
        if (currentElement > max) {
            max = currentElement;
        }
    }
    return max;
}
console.log(calculateMax(num1)); // 99
// Создание функции для поиска максимального значения в массиве чисел

const num1 = [23, 45, 99, 1, 65];

const calculateMin = (coll) => {
    if (coll.length === 0) {
        return null;
    }
    let min = coll[0];
    for (let i = 1; i < coll.length; i += 1) {
        const currentElement = coll[i];
        if (currentElement < min) {
            min = currentElement;
        }
    }
    return min;
}
console.log(calculateMin(num1)); // 1
// Создание функции для поиска минимального значения в массиве чисел

class Stack {
    constructor() {
        this.items = [];
    }

    // Метод для добавления элемента на верх стека
    push(element) {
        this.items.push(element);
    }

    // Метод для удаления элемента с верхушки стека и его возврата
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    // Метод для получения элемента на верхушке стека без его удаления
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Метод для проверки, пуст ли стек
    isEmpty() {
        return this.items.length === 0;
    }

    // Метод для получения размера стека
    size() {
        return this.items.length;
    }

    // Метод для вывода всех элементов стека
    print() {
        console.log(this.items);
    }
}


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        /** Добавляет элемент в конец очереди. */
        this.items.push(item);
    }

    dequeue() {
        /** Удаляет элемент из начала очереди и возвращает его. Если очередь пуста, возвращает null. */
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift(); // Удаляет и возвращает первый элемент массива
    }

    front() {
        /** Возвращает элемент в начале очереди без его удаления. Если очередь пуста, возвращает null. */
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        /** Проверяет, пуста ли очередь. */
        return this.items.length === 0;
    }

    size() {
        /** Возвращает количество элементов в очереди. */
        return this.items.length;
    }

    printQueue() {
        /** Выводит все элементы очереди. */
        console.log(this.items);
    }
}
// Имитация работы очереди на примере ожидания на кассе
const queue = new Queue();

// Люди приходят в очередь
queue.enqueue("Клиент 1");
queue.enqueue("Клиент 2");
queue.enqueue("Клиент 3");

console.log("Текущая очередь на кассе:");
queue.printQueue(); // Выводит: ['Клиент 1', 'Клиент 2', 'Клиент 3']

// Обслуживаем клиентов
console.log("Обслуживаем:", queue.dequeue()); // Выводит: Клиент 1
console.log("Обслуживаем:", queue.dequeue()); // Выводит: Клиент 2

console.log("Текущая очередь на кассе:");
queue.printQueue(); // Выводит: ['Клиент 3']

// Добавляем нового клиента
queue.enqueue("Клиент 4");
console.log("Текущая очередь на кассе:");
queue.printQueue(); // Выводит: ['Клиент 3', 'Клиент 4']

// Обслуживаем оставшихся клиентов
console.log("Обслуживаем:", queue.dequeue()); // Выводит: Клиент 3
console.log("Обслуживаем:", queue.dequeue()); // Выводит: Клиент 4

console.log("Текущая очередь на кассе:");
queue.printQueue(); // Выводит: []


// Напишем метод .bind() своими руками

const bind = function(fn, coll) {
    let newBind = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return fn.apply(coll, newBind.concat(fnArgs));
    }
}
const bindedSum = bind(sum, {sum: 10}, 20, 30);
bindedSum(40, 50, 60); // 210
