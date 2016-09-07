Самое первое - это необходимо поставить ноду (без этого ничего не получится :)) https://nodejs.org/en/download/

Установка пакетов и модулей
Для этого переходим в папочку с сайтом (т.е. нужно находиться в этой папке) и запускаем команду (оно некоторое время будет собирать и скачивать модули):
npm install


Команда для запуска локального сервера и автоматической сборки при изменении файлов (все запускается в папочке с сайтом): webpack-dev-server
После запуска будет доступен: http://localhost:8080/ (будет еще доступен http://localhost:8080/webpack-dev-server/, там автоматически будет рефрешиться при изменениях, но в таком режиме не очень удобно из-за того, что сайт во фрейме)

Команда для сборки бандла (это когда нужен будет статический бандл, по сути то, что в продакшн идет, для разработки используем webpack-dev-server): webpack

Возможно (если вдруг не будут работать команды webpack и webpack-dev-server), что нужно будет поставить отдельно еще:
npm install webpack -g
npm install webpack-dev-server -g

Доступные урлы:
http://localhost:8080/
http://localhost:8080/#/calendar
http://localhost:8080/#/dialog
http://localhost:8080/#/anthropometry
http://localhost:8080/#/profile

http://localhost:8080/#/login
http://localhost:8080/#/program
http://localhost:8080/#/signin
http://localhost:8080/#/registration
http://localhost:8080/#/training

Также при скомпилированном бандле приложение можно открывать без веб-сервера, т.е. просто открыв в браузере локальный файл index.html (через # к нему можно подставлять все урлы недоступные через меню)

Описание проекта:
Корневой файл index.html
В этом файле в body есть <div id="application" class="page-bg"></div> в который монтируется приложение, а в самом низу идет подключение скрипта <script src="assets/js/bundle.js"></script> (этот скрипт автоматически собирается с помощью webpack, в нем упакован react, его модули и само приложение)

Также, помимо папочек со скриптами, стилями и картинками, присутствует дополнииельное дерево каталогов/файлов:

/node_modules			-- модули ноды, папка появляется после выполнения команды npm install
/src				-- папка содержит приложение react
    /containers			-- папка для визуальных компонентов
        /common			-- папка для общих визуальных компонентов
            Alert.js		-- алерта
            NavLink.js		-- навигационная ссылка с подсветкой согласно роутингу (подсвечивается, если находимся на странице на которую указывает ссылка)
        /pages			-- отдельные страницы
            Login.js		-- страница логина
            Program.js		-- страница выбора тренера
            Registration.js	-- страница профиля при регистрации
            Signin.js		-- страница выбора тарифа
            Training.js		-- страница/виджет тренировки
        /trainee		-- личный кабинет
            /blocks		-- папочка под отдельные визуальные блоки
                LeftMenu.js	-- левое меню
            Anthropometry.js	-- страница антропометрии
            App.js		-- общий лайаут личного кабинета (со вставкой в нужных местах <LeftMenu /> (левое меню) и {this.props.children || <Home/>} (либо страница по роутингу, либо страница "Home"))
            Calendar.js		-- страница с календарем
            Dialog.js		-- страница с диалогами
            Home.js		-- страница Мой день
            Profile.js		-- страница Профиль
    index.js			-- корневой файл всего приложения, содержит подключения всех страниц и роутинг
index.html			-- корневой html-файл с подключением всех стилей, скриптов и каких-то базовых вещей для всего приложения
package.json			-- описание необходимых модулей для ноды
webpack.config.js		-- конфиг webpack`а, он смотрит на файл ./src/index.js, а бандл кладет в папку assets/js/bundle.js. Все файлы прогоняются через babel, который конвертирует новейшие стандарты JS и формат jsx в нативный javascript

Все шаблоны по сути описаны в формате jsx.
При переносе из обычного html (тот, который сейчас имеется) можно столкнуться со следующими ньансами:
1. Все атрибуты class надо заменять на className
2. Все теги должны быть закрыты. Т.е. даже картинки и инпуты должны на конце содержать />
3. Инлайн стили оформляются так: style={{"marginTop: "10px", "padding": "20px"}}, но нам нужно избавится от inline-стилей
4. По мелочи могут сыпаться warnings в консоль браузера по поводу остальных атрибутов, типа readonly должен быть записать как readOnly, а атрибут for для тега <label> должен быть htmlFor.

Документация и примеры:
https://habrahabr.ru/post/245991/
http://prgssr.ru/development/pogruzhenie-v-react-router.html
https://facebook.github.io/react/docs/jsx-in-depth.html
https://github.com/reactjs/react-router-tutorial/tree/master/lessons
