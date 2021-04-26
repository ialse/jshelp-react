import ButtonLink from '../../ButtonLink/ButtonLink';

function OperatorThis() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">this</h2>
      <div className="block__info">
        <p className="block__paragraph">
          Ключевое слово this целиком зависит от того, где и как была вызвана функция. И не важно, в каком месте кода
          функция была написана — привязка this происходит при каждом вызове. Чтобы определить, на что ссылается this,
          нужно исследовать точку вызова функции. Это то место в коде, где происходит вызов функции.
        </p>

        <p>Установить значение this в функции в зависимости от точки вызова можно так:</p>
        <ol className="block__paragraph">
          <li>По умолчанию.</li>
          <li>При вызове функции как метода объекта.</li>
          <li>Явной привязкой методами call, apply и bind.</li>
          <li>При вызове функции с оператором new</li>
        </ol>

        <p className="block__paragraph">
          При привязке this по умолчанию в режиме 'use strict' this будет равно undefined, в обычном режиме будет равно
          глобальному объекту window
        </p>

        <p className="block__code"></p>
      </div>
      <ButtonLink url="https://habr.com/ru/post/464163/" />
    </section>
  );
}

export default OperatorThis;
