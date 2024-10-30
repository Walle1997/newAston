const counter = {};
// Создание объекта с помощью фигурных скобок без описания свойств

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
}
// Создание объекта с описанием свойств

const counter = {
    vegetables: ['potato', 'cucumber'],
    fruits: {
        green: 'apple',
        yellow: 'banana',
    },
}
// Создание объекта со свойствами, представленными в виде объекта и массива

const counter = {
    fruits: 'apple',
    taste: function () {
        console.log('very tasty!')
    },
}
counter.taste(); // very tasty!
// Создание объекта со свойством, представленном в виде функции

const counter = new Object(
    {fruits: 'apple', vegetables: 'cucumber'}
)
// Создание объекта с помощью конструктора new Object()

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
};
const copyOfCounter = {...counter};
console.log(copyOfCounter);//{ vegetables: 'cucumber', fruits: 'apple' }
// Создание поверхностной копии объекта counter в переменной copyOfCounter с помощью оператора расширения {...counter}

const copyOfCounter = Object.assign({}, counter);
console.log(copyOfCounter);//{ vegetables: 'cucumber', fruits: 'apple' }
// Создание поверхностной копии объекта counter в переменной copyOfCounter с помощью метода Object.assign({}, counter)

import _ from 'lodash';

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
};

const copyOfCounter = _.cloneDeep(counter);
//Глубокое копирование с импользованием библиотеки lodash

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
};
const copyOfCounter = JSON.parse(JSON.stringify(counter));
//Глубокое копирование с помощью JSON.parse() и JSON.stringify()

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
};
const copyOfCounter = Object.create(counter);
// Копирование с использованием метода Object.create()

const counter = {
    vegetables: 'cucumber',
    fruits: 'apple'
};
const copyOfcounter = {};
for (let key in counter) {
    if (counter.hasOwnProperty(key)) {
        copy[key] = counter[key];
    }
}
// Копирование с помощью цикла for ... in

const counter = [{
    vegetables: 'cucumber',
    fruits: 'apple'
}];
const copyOfCounter = counters.map(counter => ({
    ...counter
}));
// Копирование метода Array.prototype.map() для массивов объектов

function makeCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter1 = makeCounter();
counter1.increment();
console.log(counter1.getCount()); // 1
// Создание функции makeCounter с использованием функции с объектом и методом

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    return Object.assign({}, counter);
}

const counter2 = makeCounter();
counter2.increment();
console.log(counter2.getCount()); // 1
// Создание функции makeCounter с поверхностным копированием с Object.assign()

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    return { ...counter };
}

const counter3 = makeCounter();
counter3.increment();
console.log(counter3.getCount()); // 1
// Создание функции makeCounter с поверхностным копированием с оператором расширения

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    return JSON.parse(JSON.stringify(counter)); // Не будет работать с методами
}

const counter4 = makeCounter();
console.log(counter4.increment); // undefined
// Создание функции makeCounter с глубоким копированием с JSON.parse() и JSON.stringify()

import _ from 'lodash';

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    return _.cloneDeep(counter);
}

const counter5 = makeCounter();
counter5.increment();
console.log(counter5.getCount()); // 1
// Создание функции makeCounter с использованием lodash

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    return Object.create(counter);
}

const counter6 = makeCounter();
counter6.increment();
console.log(counter6.getCount()); // 1
// Создание функции makeCounter с использованием копирования с Object.create()

function makeCounter() {
    let count = 0;

    const counter = {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };

    const copy = {};
    for (let key in counter) {
        if (counter.hasOwnProperty(key)) {
            copy[key] = counter[key];
        }
    }

    return copy;
}

const counter7 = makeCounter();
counter7.increment();
console.log(counter7.getCount()); // 1
// Создание функции makeCounter с использованием копирования с помощью цикла for ... in

function makeCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counters = [makeCounter(), makeCounter()];
counters[0].increment();
console.log(counters[0].getCount()); // 1
console.log(counters[1].getCount()); // 0
// Создание функции makeCounter с использованием метода Array.prototype.map() для массивов объектов

const obj1 = { here: { is: "on", other: "3" }, object: Z };

const obj2 = { here: { is: "on", other: "2" }, object: Z };
const deepEqual = (obj1, obj2) => {
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
};


function reverseStr(str) {
    return str.split('').reverse().join('');
}