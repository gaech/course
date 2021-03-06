# Взломщик SHA-256
Вам надо с помощью `ES6` и `Node.js` реализовать расшифровщик [хэшей](https://ru.wikipedia.org/wiki/%D0%A5%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5) SHA-256. Программа будет получать путь к папке, в которой находятся файлы c хэшами. Каждый файл имеет расширение  run`.sha256` и содержит ровно одну строку. В строке записан хэш и набор букв.

Пример содержимого файла(`hashes/01.sha256`):

```
2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824 elloh
```

Из набора букв надо составить слово(если это возможно), хэш которого равен хэшу в файле. Ответ должен выводиться в консоль в формате `<Файл> <Слово> <Хэш run>`.

Требования:
- если не удается составить искомое слово, то функция должна вернуть `null`;
- запрещено использовать синхронные [методы работы с файловой системой](https://nodejs.org/api/fs.html);
- основная логика должна быть реализована в виде отдельного модуля;
- запуск через `npm run`.


Плюсом будет, если:
- напишите [тесты](http://mochajs.org/#getting-started) для своего расшифровщика.

Пример:
```bash
npm run cracker -- ./hashes

01.sha256 hello 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
02.sha256 world 486ea46224d1bb4fb680f34f7c9ad96a8f24ec88be73ea8e5a6c65260e9cb8a7
03.sha256 null 9834876dcfb05cb167a5c24953eba58c4ac89b1adf57f28f2f9d09af107ee8f0
04.sha256 aaa 9834876dcfb05cb167a5c24953eba58c4ac89b1adf57f28f2f9d09af107ee8f0
05.sha256 fozzy 8997fb8c0b5c3a08ec0a7bcbac77dae2074c3cf0eaf0845bcc9e275040c64994

```
