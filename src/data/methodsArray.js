export const rows = [
  {
    method: '.length',
    description: 'Длина массива (это свойство, не метод)',
    example: `
    let arr = ["Яблоко", "Апельсин", "Груша"];
    
    console.log(arr.length) // 3;`,
  },
  {
    method: '.pop()',
    description: 'Извлекает элемент с конца',
    example: `
    let fruits = ["Яблоко", "Апельсин", "Груша"];
      
    alert( fruits.pop() ); // удаляем "Груша" и выводим его
      
    alert( fruits ); // Яблоко, Апельсин`,
  },
  {
    method: '.push (...items)',
    description: 'Добавляет элементы в конец',
    example: `
    let fruits = ["Яблоко", "Апельсин"];
      
    fruits.push("Груша");
      
    alert( fruits ); // Яблоко, Апельсин, Груша`,
  },
  {
    method: '.shift()',
    description: 'Извлекает элемент с начала',
    example: `let fruits = ["Яблоко", "Апельсин", "Груша"];
      
      alert( fruits.shift() ); // удаляем Яблоко и выводим его
      
      alert( fruits ); // Апельсин, Груша`,
  },
  {
    method: '.unshift(...items)',
    description: 'Добавляет элементы в начало',
    example: `
    let fruits = ["Апельсин", "Груша"];
    
    fruits.unshift('Яблоко');
    
    alert( fruits ); // Яблоко, Апельсин, Груша`,
  },
  {
    method: '.slice(start, end)',
    description: 'Возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая)',
    example: `
    let arr = ["t", "e", "s", "t"];
      
    alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
    
    alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)`,
  },
  {
    method: '.splice(pos, deleteCount, ...items)',
    description: 'Начиная с индекса pos, удаляет deleteCount элементов и вставляет items, возвращает новый массив',
    example: `
    let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
    
    // удалить 3 первых элемента (начиная с 0) и заменить их другими
    arr.splice(0, 3, "Давай", "танцевать");
    
    alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]`,
  },
  {
    method: '.concat(array, ...)',
    description: 'Создаёт новый массив, в который копирует данные из других массивов',
    example: `
    let arr = [1, 2];
      
    // создать массив из: arr и [3,4]
    alert( arr.concat([3, 4]) ); // 1,2,3,4
    
    // создать массив из: arr и [3,4] и [5,6]
    alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
    
    // создать массив из: arr и [3,4], потом добавить значения 5 и 6
    alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6`,
  },
  {
    method: '.indexOf(item, pos)',
    description: 'Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено',
    example: `
    let arr = [1, 0, false];

    alert( arr.indexOf(0) ); // 1
    alert( arr.indexOf(false) ); // 2
    alert( arr.indexOf(null) ); // -1`,
  },
  {
    method: '.lastIndexOf(item, pos)',
    description:
      'Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено. Ищет с конца',
    example: `
    let arr = [1, 0, false];

    alert( arr.lastIndexOf(0) ); // 1
    alert( arr.lastIndexOf(false) ); // 0
    alert( arr.lastIndexOf(null) ); // -1`,
  },
  {
    method: '.includes(value)',
    description: 'Возвращает true, если в массиве имеется элемент value, в противном случае false',
    example: `
    let arr = [1, 0, false];

    alert( arr.includes(1) ); // true`,
  },
  {
    method: '.filter(func)',
    description:
      'Фильтрует элементы через функцию и отдаёт массив значений, при прохождении которых через функцию возвращается true',
    example: `
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
    // возвращает массив, состоящий из двух первых пользователей
    let someUsers = users.filter(item => item.id < 3);
      
    alert(someUsers.length); // 2`,
  },
  {
    method: '.find(func)',
    description:
      'Ищет элементы через функцию и отдаёт первое значение, при прохождении которых через функцию возвращается true',
    example: `
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
    let user = users.find(item => item.id == 1);
      
     alert(user.name); // Вася`,
  },
  {
    method: '.findIndex()',
    description: 'Похож на find, но возвращает индекс вместо значения',
    example: `
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
    let user = users.findIndex(item => item.id == 1);
      
    alert(user.name); // 0`,
  },
  {
    method: '.forEach(func)',
    description: 'Вызывает func для каждого элемента. Ничего не возвращает',
    example: `
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {

        alert(item + 'имеет позицию ' + index + 'в ' + array);
      });`,
  },
  {
    method: '.map(func)',
    description: 'Возвращает новый массив из результатов вызова func для каждого элемента',
    example: `
    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    alert(lengths); // 5,7,6`,
  },
  {
    method: '.sort(func)',
    description: 'Сортирует массив «на месте», а потом возвращает его',
    example: `
    let arr = [ 1, 2, 15 ];

    // метод сортирует содержимое arr
    arr.sort();

    alert( arr );  // 1, 15, 2`,
  },
  {
    method: '.reverse()',
    description: 'Меняет порядок следования элементов на противоположный «на месте» и возвращает изменённый массив',
    example: `
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();

    alert( arr ); // 5,4,3,2,1`,
  },
  {
    method: '.split()',
    description: 'Преобразует строку в массив',
    example: `
    let names = 'Вася, Петя, Маша';

    let arr = names.split(', ');

    for (let name of arr) {
        alert( 'Сообщение получат: ' + name +'.'); // Сообщение получат: Вася (и другие имена)
    }`,
  },
  {
    method: '.join()',
    description: 'Преобразует массив в строку',
    example: `
    let arr = ['Вася', 'Петя', 'Маша'];

    let str = arr.join(';'); // объединить массив в строку через ;

    alert( str ); // Вася;Петя;Маша`,
  },
  {
    method: '.reduce(func, initial)',
    description:
      'Вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами',
    example: `
    let arr = [1, 2, 3, 4, 5];

    // убрано начальное значение (нет 0 в конце)
    let result = arr.reduce((sum, current) => sum + current);
    
    alert( result ); // 15`,
  },
  {
    method: 'Array.isArray(arr)',
    description: 'Проверяет, является ли arr массивом',
    example: `
    alert(Array.isArray({})); // false

    alert(Array.isArray([])); // true`,
  },
  {
    method: '.every(func)',
    description:
      'Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции, возвращает true или false',
    example: `
    //Проверка размера всех элементов массива

    function isBigEnough(element, index, array) {
        return element >= 10;
    }

    [12, 5, 8, 130, 44].every(isBigEnough);   // false
    [12, 54, 18, 130, 44].every(isBigEnough); // true`,
  },
  {
    method: '.some(func)',
    description:
      'Проверяет, удовлетворяют ли хоть один элемент массива условию, заданному в передаваемой функции, возвращает true или false',
    example: `
    const array = [1, 2, 3, 4, 5];

    // проверяет каждый элемент на деление на 2
    const even = (element) => element % 2 === 0;
    
    console.log(array.some(even)); // true`,
  },
];
