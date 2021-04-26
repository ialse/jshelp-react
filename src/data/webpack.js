export const rowsData = [
  {
    method: 'npm init --yes',
    description: 'Инициализация проекта. Создание файла package.json с ответами Да на все вопросы',
    example: ``,
  },
  {
    method: 'npm i webpack --save-dev',
    description:
      'Установка Webpack, --save-dev - флаг, что данный модуль нужен только в процессе разработки и не нужен в финальной сборке',
    example: ``,
  },
  {
    method: 'npm i webpack-cli --save-dev',
    description: 'Интерфейс командной строки для Вебпака',
    example: ``,
  },
  {
    method: 'npm i webpack-dev-server --save-dev',
    description: 'Локальный сервер для вебпака. Работает на localhost:8080',
    example: ``,
  },
  {
    method: 'npm i @babel/core --save-dev',
    description: 'Бабель - транспилирует JS код ES6 в старый, поддерживаемый старыми браузерами',
    example: ``,
  },
  {
    method: 'npm i @babel/preset-env --save-dev',
    description:
      'Пресет (правила) для бабеля, по которому он будет транспилировать новый код в старый. Есть и другие. Позволяет указать, в каких версиях браузеров должен работать итоговый код. Данный самый распространенный',
    example: ``,
  },
  {
    method: 'npm i core-js --save',
    description:
      'core-js - полифилы распространенных методов для совсем старых браузеров. Необходим для случаев, когда даже транспиляция не помогает',
    example: ``,
  },
  {
    method: 'npm i babel-loader --save-dev',
    description: 'Пакет, который позволяет подключить бабель к «Вебпаку»',
    example: ``,
  },
  {
    method: 'npm i html-webpack-plugin --save-dev',
    description: 'Плагин для добавления HTML файлов в сборку',
    example: ``,
  },
  {
    method: 'npm i clean-webpack-plugin --save-dev',
    description: 'Плагин, удаляет содержимое папки dist перед сборкой',
    example: ``,
  },
  {
    method: 'npm i css-loader --save-dev',
    description: 'Нужен для того, чтобы научить «Вебпак» работать с файлами CSS',
    example: ``,
  },
  {
    method: 'npm i mini-css-extract-plugin --save-dev',
    description: 'Плагин. Берёт много css-файлов и объединяет их в один',
    example: ``,
  },
  {
    method: 'npm i postcss-loader --save-dev',
    description: 'Препроцессор для обработки CSS',
    example: ``,
  },
  {
    method: 'npm i autoprefixer --save-dev',
    description: 'Плагин для PostCSS. Проставляет или удаляет браузерные префиксы',
    example: ``,
  },
  {
    method: 'npm i cssnano --save-dev',
    description: 'Плагин для PostCSS. Минифицирует CSS код, удаляя пробелы, комменты и прочее',
    example: ``,
  },
];
