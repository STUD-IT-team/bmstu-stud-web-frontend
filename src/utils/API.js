import REST_API from "@sergtyapkin/rest-api"
import validateModel from "@sergtyapkin/models-validator";
import * as Models from "~/utils/apiModels";

export default class MY_API extends REST_API {
    login = (email, password, clientBrowser, clientOS) => this.post('/api/user/auth', {_model: Models.User, email, password, clientBrowser, clientOS});
    register = (name, group, telegram, vk, email, phone_number, password, clientBrowser, clientOS) => this.post('/api/user', {_model: Models.User, name, group, telegram, vk, email, phone_number, password, clientBrowser, clientOS});
    logout = () => this.delete('/api/user/session', {_model: {}});
    getUser = () => this.get('/api/user', {_model: Models.User});
    getUserById = (id) => this.get(`/api/user`, {_model: Models.User, id});
    sendConfirmationLetter = (name, email) => this.post('/api/email/confirm', {_model: Models.User, name, email});
    confirmEmailByCode = (secretCode) => this.put('/api/user/email/confirm', {_model: Models.User, secretCode});
    changePassword = (oldPassword, newPassword) => this.put('/api/user/password', {_model: Models.User, oldPassword, newPassword});
    editProfile = (name, group, telegram, vk, email, phone_number) => this.put('/api/user', {_model: Models.User, name, group, telegram, vk, email, phone_number});
    sendRestorePasswordLetter = (secretCode, newPassword) => this.post('/api/user/password/restore', {_model: Models.User, secretCode, newPassword});
    restorePassword = (secretCode, newPassword) => this.put('/api/user/password', {_model: Models.User, secretCode, newPassword});
    authCode = (secretCode, clientBrowser, clientOS) => this.post('/api/user/auth/status', {_model: Models.User, secretCode, clientBrowser, clientOS});

    getEvents = (startDate, endDate) => ({ok: true, status: 200, data: {
        events: [
            {
                id: 1,
                description: "Cобытие 1",
                date: new Date('2024-03-16'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 2,
                description: "Cобытие 2",
                date: new Date('2024-03-17'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 3,
                description: "Cобытие 3",
                date: new Date('2024-03-18'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 4,
                description: "Cобытие 4",
                date: new Date('2024-03-16'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 5,
                description: "Cобытие 5",
                date: new Date('2024-03-15'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
        ]
    }})
    // this.get(`/api/events`, {_model: Models.Events, start_date: startDate.toISOString(), end_date: endDate.toISOString()});
    getNews = () => ({ok: true, status: 200, data: {
        feed: [
            {
                id: 1,
                title: "Наши цели и задачи",
                description: "Наше дело не так однозначно, как может показаться: курс на социально-ориентированный национальный проект позволяет выполнить важные задания по разработке укрепления моральных ценностей. Равным образом, сложившаяся структура организации предоставляет широкие возможности для вывода текущих активов. Равным образом, выбранный нами инновационный путь представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. Но социально-экономическое развитие влечет за собой процесс внедрения и модернизации поставленных обществом задач",
                media: {},
                registration_url: null,
                created_by: 1,
                updated_at: new Date('2024-03-10'),
                created_at: new Date('2024-03-08'),
            },
            {
                id: 2,
                title: "Наши цели и задачи",
                description: "Наше дело не так однозначно, как может показаться: курс на социально-ориентированный национальный проект позволяет выполнить важные задания по разработке укрепления моральных ценностей. Равным образом, сложившаяся структура организации предоставляет широкие возможности для вывода текущих активов. Равным образом, выбранный нами инновационный путь представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. Но социально-экономическое развитие влечет за собой процесс внедрения и модернизации поставленных обществом задач",
                media: {},
                registration_url: null,
                created_by: 1,
                updated_at: new Date('2024-03-10'),
                created_at: new Date('2024-03-08'),
            },
            {
                id: 3,
                title: "Наши цели и задачи",
                description: "Наше дело не так однозначно, как может показаться: курс на социально-ориентированный национальный проект позволяет выполнить важные задания по разработке укрепления моральных ценностей. Равным образом, сложившаяся структура организации предоставляет широкие возможности для вывода текущих активов. Равным образом, выбранный нами инновационный путь представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. Но социально-экономическое развитие влечет за собой процесс внедрения и модернизации поставленных обществом задач",
                media: {},
                registration_url: null,
                created_by: 1,
                updated_at: new Date('2024-03-10'),
                created_at: new Date('2024-03-08'),
            },
            {
                id: 45,
                title: "Наши цели и задачи",
                description: "Наше дело не так однозначно, как может показаться: курс на социально-ориентированный национальный проект позволяет выполнить важные задания по разработке укрепления моральных ценностей. Равным образом, сложившаяся структура организации предоставляет широкие возможности для вывода текущих активов. Равным образом, выбранный нами инновационный путь представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. Но социально-экономическое развитие влечет за собой процесс внедрения и модернизации поставленных обществом задач",
                media: {},
                registration_url: null,
                created_by: 1,
                updated_at: new Date('2024-03-10'),
                created_at: new Date('2024-03-08'),
            },
            {
                id: 67,
                title: "Наши цели и задачи",
                description: "Наше дело не так однозначно, как может показаться: курс на социально-ориентированный национальный проект позволяет выполнить важные задания по разработке укрепления моральных ценностей. Равным образом, сложившаяся структура организации предоставляет широкие возможности для вывода текущих активов. Равным образом, выбранный нами инновационный путь представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. Но социально-экономическое развитие влечет за собой процесс внедрения и модернизации поставленных обществом задач",
                media: {},
                registration_url: null,
                created_by: 1,
                updated_at: new Date('2024-03-10'),
                created_at: new Date('2024-03-08'),
            },
        ]
    }})
    // this.get(`/api/feed`, {_model: Models.Feeds});
    getNew = (id) => this.get(`/api/feed`, {_model: Models.Feed, id});
    deleteNew = (id) => this.delete(`/api/feed`, {_model: Models.Feed, id});


    getOrgs = () => ({ok: true, status: 200, data: {
        orgs: [
            {
                id: 1,
                title: "MediaBMSTU",
                description: "Спасибо медиа",
                head_title: "Руководитель",
                head_name: "Егор Федорук",
                tag: "Отдел",
            },
            {
                id: 2,
                title: "ISCRA",
                description: "Приходите на конференцию",
                head_title: "Руководитель",
                head_name: "Полина Третьяк (навсегда)",
                tag: "Клуб",
            },
            {
                id: 3,
                title: "Студенческий Совет факультета ИУ",
                description: "ITS пиво",
                head_title: "Председатель",
                head_name: "Иван Токарев",
                tag: "ССФ",
            },
            {
                id: 2,
                title: "IT-отдел",
                description: "Мы в телявизоре",
                head_title: "Руководитель",
                head_name: "Антон Павленко",
                tag: "Отдел",
            },
            {
                id: 2,
                title: "Техническая поддержка",
                description: "Suiiii",
                head_title: "Руководитель",
                head_name: "Егор Клевлин (солнышко)",
                tag: "Отдел",
            },
        ]
    }}
    )

    getOrgsByTag = (tag) => ({ok: true, status: 200, data: {
        orgs: [
            {
                id: 1,
                title: "MediaBMSTU",
                description: "Спасибо медиа",
                head_title: "Руководитель",
                head_name: "Егор Федорук",
                tag: "Отдел",
            },
            {
                id: 2,
                title: "ISCRA",
                description: "Приходите на конференцию",
                head_title: "Руководитель",
                head_name: "Полина Третьяк (навсегда)",
                tag: "Клуб",
            },
            {
                id: 3,
                title: "Студенческий Совет факультета ИУ",
                description: "ITS пиво",
                head_title: "Председатель",
                head_name: "Иван Токарев",
                tag: "ССФ",
            },
            {
                id: 2,
                title: "IT-отдел",
                description: "Мы в телявизоре",
                head_title: "Руководитель",
                head_name: "Антон Павленко",
                tag: "Отдел",
            },
            {
                id: 2,
                title: "Техническая поддержка",
                description: "Suiiii",
                head_title: "Руководитель",
                head_name: "Егор Клевлин (солнышко)",
                tag: "Отдел",
            },
        ].filter((item)=>(item.tag==tag))
    }}
    )

    getOrgsByQuery = (query) => ({ok: true, status: 200, data: {
        orgs: [
            {
                id: 1,
                title: query,
                description: "Какая-то орга",
                head_title: "Руководитель",
                head_name: "Какой-то мужик",
                tag: "Отдел",
            },
        ]
    }}
    )

    getLeads = () => ({ok: true, status: 200, data: {
        leads: [
            {
                id: 1,
                name: "Иван Токарев",
                title: "Председатель",
                description: "Председатель ССФИУ",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: true,
            },
            {
                id: 2,
                name: "Анастасия Евдокимова",
                title: "Медиа",
                description: "Заместитель председателя ССФИУ, глава направления медиа",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 3,
                name: "Адам Ливанский",
                title: "Слоняра",
                description: "Советник председатела ССФИУ",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 4,
                name: "Василий Леденев",
                title: "Координаторы",
                description: "Глава отдела координаторов",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 5,
                name: "Ольга Пасько",
                title: "Техподдержка",
                description: "Глава отдела технической поддержки",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 6,
                name: "Роман Ленчин",
                title: "ITS BMSTU",
                description: "Глава ITS BMSTU",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 7,
                name: "Патя Кучкова",
                title: "Отдел вайба",
                description: "Глава отдела внутреннего взаимодействия",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 8,
                name: "Илья Чистяков",
                title: "Сотрудничество",
                description: "Глава отдела сотрудничества",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 9,
                name: "Фёдор Кривоносов",
                title: "Видео",
                description: "Глава отдела видео",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
            {
                id: 10,
                name: "Иван Павлов",
                title: "ITS TECH",
                description: "Глава ITS TECH",
                linkTg: "https://t.me/ivantokarev",
                linkVk: "https://vk.com/ivanvolzhskiy",
                head: false,
            },
        ]

    }})


    getOrgPhotos = () => ({ok: true, status: 200, data: {
        photos: [
            {
                id: 1,
                src: "https://sun9-68.userapi.com/impg/WeboL-Q1QA4u7oBwHOysqOA7Ej0Yq3xZlZTqeg/T7aqVm4kIPQ.jpg?size=1280x853&quality=95&sign=cd83b34b75225c864c3e49f77f54ba50&type=album",
            },
            {
                id: 2,
                src: "https://sun9-79.userapi.com/impg/7kN9tzNtU277N-PwnBATJoB7E3aoezlbc9D1iQ/Iee7EKGVjqA.jpg?size=1280x853&quality=95&sign=e4d090e703feff77c146222f3ac9b114&type=album",
            },
            {
                id: 3,
                src: "https://sun9-63.userapi.com/impg/2c14z0G7jNVg2dT-7XiPqweXjuMh8tpnWJ3jbg/OqoJm7QZ4Ao.jpg?size=1280x853&quality=95&sign=c2b228a1b5581e7a9b801273c33397c8&type=album",
            },
            {
                id: 4,
                src: "https://sun9-77.userapi.com/impg/ZGURGAldQfLtct4gAq5qQub7UiEvxcD18oM5kw/c9AgIlBFx6o.jpg?size=1280x853&quality=95&sign=dcd43f8bcf5fedf6792d047855cbe8db&type=album",
            },
            {
                id: 5,
                src: "https://sun9-47.userapi.com/impg/HxwXImMnb1FuNU5F0i0U4MenEtJZIExD8sFtBw/vlGvWd5l0Po.jpg?size=1280x853&quality=95&sign=0f2925662e879cde553e56981cd15cc0&type=album",
            },
        ]

    }})

    async modelParsedRequest(requestFunc, path, data = {}) {
        if (!data._model) {
            throw SyntaxError(`Model for request '${path}' not specified`);
        }
        data = Object.assign({}, data);
        const _model = data._model;
        delete data._model;
        const {ok, data: dataRes, status} = await requestFunc.bind(this.__proto__)(path, data);
        if (!ok) {
            return {ok, data: dataRes, status};
        }
        return {ok, data: validateModel(_model, dataRes), status};
    }
    post(path, data = {}) {return this.modelParsedRequest(super.post, path, data)}
    get(path, data = {}) {return this.modelParsedRequest(super.get, path, data)}
    put(path, data = {}) {return this.modelParsedRequest(super.put, path, data)}
    delete(path, data = {}) {return this.modelParsedRequest(super.delete, path, data)}
}
