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
    authCode = (secretCode, clientBrowser, clientOS) => this.post('/api/user/auth/code', {_model: Models.User, secretCode, clientBrowser, clientOS});

    getEvents = (startDate, endDate) => ({ok: true, code: 200, data: {
        events: [
            {
                id: 1,
                description: "Большое и красивое событие 1",
                date: new Date('2024-03-16'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 2,
                description: "Большое и красивое событие 2",
                date: new Date('2024-03-17'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
            {
                id: 3,
                description: "Большое и красивое событие 3",
                date: new Date('2024-03-18'),
                approved: true,
                created_at: new Date('2024-03-20'),
                reg_url: 'http://ya.ru',
                reg_open_date: new Date('2024-03-16'),
                feedback_url: 'http://google.com',
            },
        ]
    }})
    // this.get(`/api/events`, {_model: Models.Events, start_date: startDate, end_date: endDate});
    getNews = () => ({ok: true, code: 200, data: {
        news: []
    }})
    // this.get(`/api/feed`, {_model: Models.Feeds});




    modelParsedRequest(func, path, data = {}) {
        if (!data._model) {
            throw SyntaxError(`Model for request '${path}' not specified`);
        }
        data = Object.assign({}, data);
        const _model = data._model;
        delete data._model;
        const {ok, data: dataRes, status} = func.bind(this.__proto__)(path, data);
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
