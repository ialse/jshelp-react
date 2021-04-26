export const rowsData = [
  {
    method: 'let, const',
    description:
      'let, const и блочная область видимости. Как мы помним, переменная, объявленная через var, видна везде в функции. Переменные var существуют и до объявления. Переменная, объявленная через let (или const), видна только в рамках блока {...}, в котором объявлена.',
    example: `
    var a = 2;
    {
      let a = 3;
      console.log(a); // 3
    }
    console.log(a); // 2
    `,
  },
  {
    method: 'Промисы',
    description: `
    В ES6 появилась встроенная поддержка промисов. Промис это объект, который ждёт выполнения асинхронной операции, после которого (т.е. после выполнения) промис принимает одно из двух состояний: fulfilled (resolved, успешное выполнение) или rejected (выполнено с ошибкой).`,
    example: `
    //fetch возвращает промис
    fetch('/article/promise-chaining/user.json')
      .then(response => response.json())
      .then(user => fetch('https://api.github.com/users/user'))
      .then(response => response.json())
      .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
        img.remove();
        resolve(githubUser);
        }, 3000);
      }))
      .catch(error => alert(error.message));`,
  },
  {
    method: 'async/await',
    description: `
    Специальный синтаксис для работы с промисами. У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически. Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится. Await можно использовать только внутри async-функций.`,
    example: `
    async function f() {

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
      });
    
      let result = await promise; // будет ждать, пока промис не выполнится (*)
    
      alert(result); // "готово!"
    }
    
    f();
    `,
  },
  {
    method: 'const {name, about} = object',
    description: `
    Деструктуризация объекта или массива. Определяются переменные на основе свойств объекта object. У него соответсвенно должны быть эти свойства.`,
    example: `
    const {name, about} = object
    `,
  },
  {
    method: 'const [name, about] = array',
    description: `
    Деструктуризация массива. Определяются переменные на основе элементов массива array. По порядку.`,
    example: `
    const [name, about] = array
    `,
  },
  {
    method: `(a,b) => {...}`,
    description: `
    Стрелочные функции. Используется для сокращения записи, ососбенно часто, когда в параматерах функции нужен анонимный колбэк. При этом запись может быть someFunc(a => a*b), что значит, что передается параметер a, а возвращается a*b (оператор return опускается)`,
    example: `
    (a,b) => {...}
    `,
  },
  {
    method: '...',
    description: `
    Spread / Rest оператор. При использовании в любом итерируемом объекте (iterable), данный оператор "разбивает" ("spread") его на индивидуальные элементы. Другим распространённым использованием оператора ... является объединение набора значений в один массив. В данном случае оператор работает как "rest"`,
    example: `
    const newArr = [...prevArr, x];
    const newObj = {...prevObj, x};
    `,
  },
];
