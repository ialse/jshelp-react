import ButtonLink from '../../ButtonLink/ButtonLink';
import Highlight from 'react-highlight';

function aboutRedux() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Redux</h2>
      <h3 className="block__title">Сам Redux</h3>
      <p className="block__paragraph">
        Redux — это база данных в программе. Она хранит внутри себя состояние (то есть данные) приложения. Redux, с
        точки зрения кода — это объект, внутри которого лежат данные. Он используется остальными частями приложения для
        их хранения, изменения и извлечения. В терминологии Redux он называется контейнер, так как данные хранятся
        внутри.
      </p>
      <p>Установка:</p>
      <Highlight className="javascript">npm install redux</Highlight>
      <p className="block__paragraph">
        createStore(reducer, initState) - создает локальное хранилище. Первый парамеетр - reducer (ниже о нем написано),
        второй параметр - начальное состояние (например, данные пришедшие с бэкенда или пустой объект или другой
        вариант)
      </p>
      <p className="block__paragraph">
        action - действие. Это обычный js объект, в котором присутствует минимум одно свойство - type
      </p>
      <p className="block__paragraph">
        actionCreator() - функция, которая создаёт действие. Вызов этой функции нужно передавать как аргумент в dispatch
        а в actionCreator передавать необходимое значение. Должна возвращать action (обычный js объект с обязательным
        свойством type)
      </p>
      <p className="block__paragraph">
        reducer(state, action) — чистая функция которая будет отвечать за обновление состояния. Здесь реализовывается
        логика в соответствие с которой будет происходить обновление полей store. Принимает на вход state и action. На
        выходе из функции возвращается новый state . Именно из-за сходства работы этой функции с тем как работает reduce
        , она имеет название reducer
      </p>
      <p className="block__paragraph">.dispatch() - чтобы обновить store необходимо вызвать метод dispatch()</p>

      <h3 className="block__subtitle">Связь Redux и React</h3>
      <p className="block__paragraph">
        Provider - компонент. Необходим, чтобы store стал доступен во всем приложении. Для этого необходимо обернуть все
        приложение в этот компонент и передать пропс store наше хранилище store. Пример использования:
      </p>
      <Highlight className="javascript">
        {`
        ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
        document.getElementById('root'));
        `}
      </Highlight>
      <p className="block__paragraph">
        mapStateToProps() - Этот метод вызывается всякий раз, когда происходит обновление store и именно он передаёт
        необходимые свойства из store в компонент
      </p>
      <p className="block__paragraph">
        mapDispatchToProps() - Эта функция необходима для обратной связи компонента со store. Она передаёт в компонент
        методы для обновления необходимого поля store.
      </p>
      <p className="block__paragraph">
        connect() - Эта функция связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля
        и методы в него. Возвращает она новый компонент-обёртку для вашего компонента
      </p>
      <ButtonLink url="https://habr.com/ru/post/498860" />
    </section>
  );
}

export default aboutRedux;
