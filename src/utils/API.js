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
