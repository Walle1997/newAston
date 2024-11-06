/* Алгоритмы сортировок:
1. Сортировка пузырьком (Bubble sort)
Его суть заключается в том, что данный алгоритм пробегает по массиву и последовательно сравнивает соседние элементы и меняет их местами,
если предыдущий оказывается больше последующего. Иными словами говоря, элементы массива "всплывают" до нужной позиции.

Пример:
*/
const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    // Объявляем переменную swapped, значение которой показывает был ли совершен
    //обмен элементов во время перебора массива
    let swapped;
    do {
        swapped = false;
        // Перебираем массив и меняем местами элементы, если предыдущий больше, чем следующий
        for (let i = 0; i < stepsCount; i += 1) {
            if (coll[i] > coll[i + 1]) {
                // temp - временная константа для хранения текущего элемента
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                // Если сработал if  и была совершена перестановка, присваиваем swapped значение true
                swapped = true;
            }
        }
        // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится в конце массива
        stepsCount -= 1;
    } while (swapped);
    return coll;
};
console.log(bubbleSort([3, 2, 10, -2, 0])); // [-2, 0, 2, 3, 10]

// 2. Сортировка массива с помщью метода sort():
const numbers = [8, 3, 10];
numbers.sort((a, b) => a - b);// сортировка по возрастанию
console.log(numbers);// [3, 8, 10]

/* 3. Сортировка выбором
Этот алгоритм сортировки при каждой итерации проходит по неотсортированной части массива, находит минимальный элемент и переносит его в начало массива.
Может быть как стабильным, так и нестабильным алгоритмом, в зависимости от реализации. В данном примере приведена стабильная реализация.
*/
const selectedSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j; // Меняем значение переменной на наибольшее значение
        }
      }
  
      [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
    }
  };

/* 4. Циклическая сортировка
Основной идеей алгоритма циклической сортировки является разложение массива на циклы. Затем, внутри этих циклов происходят перестановки элементов до тех пор, пока все циклы не завершатся и массив не будет отсортирован.
Алгоритм циклической сортировки является нестабильным.
Хотя алгоритм циклической сортировки не является простым в понимании, он ценится за то, что изменения элементов массива происходят только тогда, когда элемент ставится на своё место. Это особенно важно, если изменение элементов массива является затратным.
*/
function cycleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      let position = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < value) {
          position++;
        }
      }
      if (position === i) {
        continue;
      }
      while (value === arr[position]) { // Избавляемся от дубликатов
        position++;
      }
  
      [arr[position], value] = [value, arr[position]]; // Меняем значения переменных
  
      while (position !== i) { // Запускаем цикл в обратную сторону
        position = i;
        for (let k = i + 1; k < arr.length; k++) {
          if (arr[k] < value) {
            position++;
          }
        }
        while (value === arr[position]) { // Избавляемся от дубликатов
          position++;
        }
        [arr[position], value] = [value, arr[position]]; // Меняем значения пременных
      }
    }
    return arr;
  }
/* 5. Быстрая сортировка
Алгоритм быстрой сортировки работает следующим образом: он определяет так называемый «‎стержень» и разбивает массив на подмассивы относительно «‎стержня», которые затем сортируются.
Этот алгоритм сортировки является нестабильным.
*/
const partition = (arr, start, end) => {
    const pivot = arr[end]; // Определяем опорный элемент
    let i = start; // Определяем индекс, по которому делим массив на две части
  
    for (let j = start; j <= end - 1; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем значения переменных
        i++;
      }
    }
  
    [arr[i], arr[end]] = [arr[end], arr[i]]; // Меняем значения переменных
    return i;
  };
  
  const quickSort = (arr, start, end) => {
    if (start < end) { // Условия запуска рекурсии
      const pi = partition(arr, start, end); // Получаем индекс
  
      quickSort(arr, start, pi - 1);
      quickSort(arr, pi + 1, end);
    }
  };

// Создание объекта Person через функцию-конструктор
function Person(name, secondName) {
    this.name = name;
    this.secondName = secondName;
}

Person.prototype.getInfo = function () {
    return `${this.name} ${this.secondName} is programmer`;
};

    const person1 = new Person('Farid', 'Aliev');

function.prototype.logInfo = function() {
    console.log(this.getInfo());
};

function person2(name, secondName, job) {
    Person.call(this, name, secondName);
    this.job = job;
}

    person2.prototype = Object.create(Person.prototype);
    person2.prototype.constructor = person2;

const person2 = new person2('Stive', 'Jobs', 'developer');

console.log(person1.getInfo()); // Farid Aliev is programmer
console.log(person2.getInfo()); // Stive Jobs is programmer

person1.logInfo(); // Farid Aliev is programmer
person2.logInfo(); // Stive Jobs is programmer

// Создание объекта Person с использованием класса
class Person {
  constructor(name, secondName) {
    this.name = name;
    this.secondName = secondName;
  }
  getInfo() {
    return `${this.name} ${this.secondName} is programmer`;
  }
}

class Person2 extends Person {
  constructor(name, secondName, job) {
    super(name, secondName);
    this.job = job;
  }
}

Person.prototype.logInfo = function() {
  console.log(this.getInfo())
};

const person1 = new Person('Farid', 'Aliev');
const person2 = new Person2('Stive', 'Jobs', 'developer');

console.log(person1.getInfo()); // Farid Aliev is programmer
console.log(person2.getInfo()); // Stive Jobs is programmer


// Создание класса PersonThree с get и set, класс наследник от Person

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    return this_name = value;
  }
}

class PersonThree extends Person {
  constructor(name) {
    super(name);
  }
}

const person = new PersonThree('Farid');
console.log(person.name); // Farid
person.name = 'Andrey';
console.log(person.name); // Andrey


// Бонус-задание

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === total) {
              return [arr[i], arr[j]];
          }
      }
  }
  return null; // Если пара не найдена
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

console.log(firstSum(arr, total)); // [4, 9]
