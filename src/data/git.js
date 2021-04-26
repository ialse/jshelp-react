export const rowsData = [
  {
    method: 'git clone Адрес_репозитория',
    description: 'Клонирование репозитория из гитхаба на локальное место. Клонирует сразу папку проекта',
    example: ``,
  },
  {
    method: 'git add .',
    description: 'Добавить все файлы в коммит',
    example: ``,
  },
  {
    method: 'git add -A',
    description: 'Добавить все файлы в коммит',
    example: ``,
  },
  {
    method: 'git add -all',
    description: 'Добавить все файлы в коммит',
    example: ``,
  },
  {
    method: 'git commit -m "комментарий"',
    description: 'Сделать коммит',
    example: ``,
  },
  {
    method: 'git push',
    description: 'Запушить коммит. Коммит загружается в репозиторий на гитхаб (или другой сервис)',
    example: ``,
  },
  {
    method: 'git pull',
    description: 'Запуллить коммит. Из репозитотрия загружаются последние коммиты на локальный компьютер',
    example: ``,
  },
  {
    method: 'git branch',
    description: 'Посмотреть все существующие ветки',
    example: ``,
  },
  {
    method: 'git branch Название_ветки',
    description: 'Создается новая ветка',
    example: ``,
  },
  {
    method: 'git checkout Название_ветки',
    description: 'Переход в нужную ветку',
    example: ``,
  },
  {
    method: 'git checkout -b Название_ветки',
    description: 'Создать ветку и перейти в эту ветку',
    example: ``,
  },
  {
    method: 'git branch -d Название_ветки',
    description: 'Удалить ветку. Нужно находиться в другой ветке',
    example: ``,
  },
  {
    method: 'git merge Название_ветки',
    description: 'Слияние. Скопировать все изменения из ветки "Название_ветки" в текущую ветку, в которой находишься',
    example: ``,
  },
  {
    method: 'git remote add origin Адрес_репозитория',
    description: 'Посмотреть подробный лог коммитов',
    example: ``,
  },
  {
    method: 'git log --oneline',
    description: 'Посмотреть короткий просмотр коммитов',
    example: ``,
  },
  {
    method: 'git diff',
    description: 'Посмотреть изменения в «рабочей зоне»; они маркируются гитом как modifided, new или deleted',
    example: ``,
  },
  {
    method: 'git diff --staged',
    description: 'Посмотреть изменения, добавленные в staged',
    example: ``,
  },
  {
    method: 'git diff a9928ab 11bada1',
    description: 'Сравнить изменения двух коммитов. a9928ab - первые 7 символов хэша',
    example: ``,
  },
  {
    method: 'git commit --amend',
    description: 'Добавить изменения к последнему коммиту',
    example: ``,
  },
  {
    method: 'git revert -m основной_родитель хеш_коммита',
    description:
      'Отмена коммита слияния веток. Опция -m со значением больше 0 указывает на основную ветку, которая будет сохранена',
    example: ``,
  },
  {
    method: 'git revert хеш_коммита',
    description: 'Отмена изменений выбранного коммита. Он не был создан при слиянии, поэтому имеет одного предка',
    example: ``,
  },
  {
    method: 'git stash',
    description:
      'Скрытие незакоммиченных изменений в текущей рабочей ветке. Опция save название_стэша даёт этим изменениям имена',
    example: ``,
  },
  {
    method: 'git ',
    description: '111',
    example: ``,
  },
];
