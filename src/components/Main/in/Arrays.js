import { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Paper,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';

function Arrays() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const rows = [
    { method: '.length', description: 'Длина массива (это свойство, не метод)' },
    { method: '.pop()', description: 'Извлекает элемент с конца' },
    { method: '.push (...items)', description: 'Добавляет элементы в конец' },
    { method: '.shift()', description: 'Извлекает элемент с начала' },
    { method: '.unshift(...items)', description: 'Добавляет элементы в начало' },
    {
      method: '.slice(start, end)',
      description:
        'Возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая)',
    },
    {
      method: '.splice(pos, deleteCount, ...items)',
      description: 'Начиная с индекса pos, удаляет deleteCount элементов и вставляет items, возвращает новый массив',
    },
    {
      method: '.concat(array, ...)',
      description: 'Создаёт новый массив, в который копирует данные из других массивов',
    },
    {
      method: '.indexOf(item, pos)',
      description: 'Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено',
    },
    {
      method: '.lastIndexOf(item, pos)',
      description:
        'Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено. Ищет с конца',
    },
    {
      method: '.includes(value)',
      description: 'Возвращает true, если в массиве имеется элемент value, в противном случае false',
    },
    {
      method: '.filter(func)',
      description:
        'Фильтрует элементы через функцию и отдаёт массив значений, при прохождении которых через функцию возвращается true',
    },
    {
      method: '.find(func)',
      description:
        'Ищет элементы через функцию и отдаёт первое значение, при прохождении которых через функцию возвращается true',
    },
    {
      method: '.findIndex()',
      description: 'Похож на find, но возвращает индекс вместо значения',
    },
    {
      method: '.forEach(func)',
      description: 'Вызывает func для каждого элемента. Ничего не возвращает',
    },
    {
      method: '.map(func)',
      description: 'Возвращает новый массив из результатов вызова func для каждого элемента',
    },
    {
      method: '.sort(func)',
      description: 'Сортирует массив «на месте», а потом возвращает его',
    },
    {
      method: '.reverse()',
      description: 'Меняет порядок следования элементов на противоположный «на месте» и возвращает изменённый массив',
    },
    {
      method: '.split()',
      description: 'Преобразует строку в массив',
    },
    {
      method: '.join()',
      description: 'Преобразует массив в строку',
    },
    {
      method: '.reduce(func, initial)',
      description:
        'Вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами',
    },
    {
      method: 'Array.isArray(arr)',
      description: 'Проверяет, является ли arr массивом',
    },
    {
      method: '.every(func)',
      description:
        'Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции, возвращает true или false',
    },
    {
      method: '.some(func)',
      description:
        'Проверяет, удовлетворяют ли хоть один элемент массива условию, заданному в передаваемой функции, возвращает true или false',
    },
  ];

  function Row({ row }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <TableRow onClick={() => setOpen(!open)}>
          <TableCell>{row.method}</TableCell>
          <TableCell>{row.description}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              1212
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <section className="block block_size_big block_array-metod">
      <h2 className="block__title">Методы для массивов</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Метод</TableCell>
              <TableCell>Описание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <a href="https://learn.javascript.ru/array-methods" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Arrays;
