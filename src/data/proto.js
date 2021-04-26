export const rowsData = [
  {
    method: '.__proto__',
    description: 'Любой объект имеет это свойство. Содержит ссылку на прототип',
    example: ``,
  },
  {
    method: '.prototype',
    description:
      'Любая функция конструктор (и пользовательская и встроенная (String, Array, Object, Number и другие )) содержит это свойство, в котором содержатся методы объекты',
    example: ``,
  },
  {
    method: 'Оператор new',
    description:
      'При вызове функции с этим оператором по умолчанию происходит создание пустого объекта, присвваивается this и в конце возврат этого объекта (return this). Такие функции называются функции-конструкторы.',
    example: `
    function CreateSong(title, artist) {
        this = {}  // неявно, JS это делает по умолчанию
        
        this.title = title;
        this.artist = artist;
        this.isLiked = artist;
      
        return this; // неявно, JS это делает по умолчанию
        
      }
      
      const song = new CreateSong('Ария', 'Беспечный Ангел');
      `,
  },
];
