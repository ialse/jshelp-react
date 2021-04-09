import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';

function Git() {
  const classes = useStyles();

  return (
    <section className="block block_size_big block_git">
      <h2 className="block__title">Команды Git</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git clone Адрес_репозитория</span>
            </td>
            <td className="table__cell table__cell_right">
              Клонирование репозитория из гитхаба на локальное место. Клонирует сразу папку проекта
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git add .</span>
            </td>
            <td className="table__cell table__cell_right">Добавить все файлы в коммит.</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git add -A</span>
            </td>
            <td className="table__cell table__cell_right">Добавить все файлы в коммит.</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git add -all</span>
            </td>
            <td className="table__cell table__cell_right">Добавить все файлы в коммит.</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git commit -m "комментарий"</span>
            </td>
            <td className="table__cell table__cell_right">Сделать коммит</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git push</span>
            </td>
            <td className="table__cell table__cell_right">
              Запушить коммит. Коммит загружается в репозиторий на гитхаб
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git pull</span>
            </td>
            <td className="table__cell table__cell_right">
              Запуллить коммит. Из репозитотрия загружаются последние коммиты на локальный компьютер
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git branch Название_ветки</span>
            </td>
            <td className="table__cell table__cell_right">Создается новая ветка</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git checkout Название_ветки</span>
            </td>
            <td className="table__cell table__cell_right">Переход в нужную ветку</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git checkout -b Название_ветки</span>
            </td>
            <td className="table__cell table__cell_right">Создать ветку и перейти в эту ветку</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git branch -d Название_ветки</span>
            </td>
            <td className="table__cell table__cell_right">Удалить ветку. Нужно находиться в другой ветке</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git merge Название_ветки</span>
            </td>
            <td className="table__cell table__cell_right">
              Скопировать все изменения из ветки "Название_ветки" в текущую ветку, в которой находишься
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git remote add origin Адрес_репозитория</span>
            </td>
            <td className="table__cell table__cell_right">
              Привязываем локальный репозиторий к удаленному. Удаленный должен быть создан на Гитхабе
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git log</span>
            </td>
            <td className="table__cell table__cell_right">Посмотреть подробный лог коммитов</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git log --oneline</span>
            </td>
            <td className="table__cell table__cell_right">Посмотреть короткий просмотр коммитов</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git diff</span>
            </td>
            <td className="table__cell table__cell_right">
              Посмотреть изменения в «рабочей зоне»; они маркируются гитом как modifided, new или deleted
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git diff --staged</span>
            </td>
            <td className="table__cell table__cell_right">Посмотреть изменения, добавленные в staged</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git diff a9928ab 11bada1</span>
            </td>
            <td className="table__cell table__cell_right">
              Сравнить изменения двух коммитов. a9928ab - первые 7 символов хэша{' '}
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git commit --amend</span>
            </td>
            <td className="table__cell table__cell_right">Добавить изменения к последнему коммиту</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git revert -m основной_родитель хеш_коммита</span>
            </td>
            <td className="table__cell table__cell_right">
              Отмена коммита слияния веток. Опция -m со значением больше 0 указывает на основную ветку, которая будет
              сохранена.
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git revert хеш_коммита</span>
            </td>
            <td className="table__cell table__cell_right">
              Отмена изменений выбранного коммита. Он не был создан при слиянии, поэтому имеет одного предка.
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">git stash</span>
            </td>
            <td className="table__cell table__cell_right">
              Скрытие незакоммиченных изменений в текущей рабочей ветке. Опция save название_стэша даёт этим изменениям
              имена
            </td>
          </tr>
        </tbody>
      </table>
      <a href="https://githowto.com/ru" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Git;
