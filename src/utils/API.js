import REST_API from "@sergtyapkin/rest-api"
import validateModel from "@sergtyapkin/models-validator";
import * as Models from "~/utils/apiModels";

export default class MY_API extends REST_API {
    login = (email, password, clientBrowser, clientOS) => this.post('/api/user/auth', { _model: Models.User, email, password, clientBrowser, clientOS });
    register = (name, group, telegram, vk, email, phone_number, password, clientBrowser, clientOS) => this.post('/api/user', { _model: Models.User, name, group, telegram, vk, email, phone_number, password, clientBrowser, clientOS });
    logout = () => this.delete('/api/user/session', { _model: {} });
    getUser = () => this.get('/api/user', { _model: Models.User });
    getUserById = (id) => this.get(`/api/user`, { _model: Models.User, id });
    sendConfirmationLetter = (name, email) => this.post('/api/email/confirm', { _model: Models.User, name, email });
    confirmEmailByCode = (secretCode) => this.put('/api/user/email/confirm', { _model: Models.User, secretCode });
    changePassword = (oldPassword, newPassword) => this.put('/api/user/password', { _model: Models.User, oldPassword, newPassword });
    editProfile = (name, group, telegram, vk, email, phone_number) => this.put('/api/user', { _model: Models.User, name, group, telegram, vk, email, phone_number });
    sendRestorePasswordLetter = (secretCode, newPassword) => this.post('/api/user/password/restore', { _model: Models.User, secretCode, newPassword });
    restorePassword = (secretCode, newPassword) => this.put('/api/user/password', { _model: Models.User, secretCode, newPassword });
    authCode = (secretCode, clientBrowser, clientOS) => this.post('/api/user/auth/status', { _model: Models.User, secretCode, clientBrowser, clientOS });

    getEvents = (startDate, endDate) => ({
        ok: true, status: 200, data: {
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
        }
    })
    // this.get(`/api/events`, {_model: Models.Events, start_date: startDate.toISOString(), end_date: endDate.toISOString()});
    getNews = () => ({
        ok: true, status: 200, data: {
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
            ]
        }
    })
    // this.get(`/api/feed`, {_model: Models.Feeds});
    getNew = (id) => this.get(`/api/feed`, { _model: Models.Feed, id });
    deleteNew = (id) => this.delete(`/api/feed`, { _model: Models.Feed, id });

    getStudNums = () => ({
        ok: true, status: 200, data: {
            studNumbers: [
                { num: ">360", description: "выездов" },
                { num: "100+", description: "мероприятий" },
                { num: "34", description: "клубов и организаций" },
                { num: ">1300", description: "активистов" },
                { num: "30 000", description: "охват студентов" },
                { num: "5", description: "программистов" },
                { num: "6", description: "программистов" },
            ]
        }
    })

    getClubsList = () => ({
        ok: true, status: 200, data: {
            clubsList: [
                {title: "1", imgUrl: "https://sun9-50.userapi.com/impg/uSedlZUFrFDcSHnMGEAs2UbLnv2QvYdh69yv8Q/whDSLD5i8z0.jpg?size=1080x1080&quality=95&sign=8d4d152db6054c19dbabbf72c6f7173b&type=album", redirectLink: "https://sun9-50.userapi.com/impg/uSedlZUFrFDcSHnMGEAs2UbLnv2QvYdh69yv8Q/whDSLD5i8z0.jpg?size=1080x1080&quality=95&sign=8d4d152db6054c19dbabbf72c6f7173b&type=album"},
                {title: "2", imgUrl: "https://sun9-17.userapi.com/impg/PJs3t2qnB8Iy4yly4iDc1kErgoIqjjq965VefA/U2wj4QvLgpo.jpg?size=1280x1280&quality=95&sign=cbfd9f808bba91a310cac1c1abc1ee71&type=album"},
                {title: "3", imgUrl: "https://sun9-60.userapi.com/impg/Bq-V12ARb-8YF0Nf3cQnjxokO0HkBS7gsxbxgQ/zq-1_X5Nzb8.jpg?size=1280x1280&quality=95&sign=2786febb0e173008def67951a183e0e9&type=album"},
                {title: "4", imgUrl: "https://sun9-76.userapi.com/impg/0e7XYEpKcMi9IcaqZkJTsNI3OPFN2hVGJuP5uQ/-md9G-wbHdY.jpg?size=1280x1280&quality=95&sign=82e5fc908838f9efc4d71b719f2a9a41&type=album"},
                {title: "5", imgUrl: "https://sun9-69.userapi.com/impg/YFHiI01b7xeTEFm-rMsD0POdJ2YvLglGuqDxRQ/PcLlgW3nrbY.jpg?size=1280x1280&quality=95&sign=f310d658369792c1e8b3253fc8f1f7a8&type=album"},
                {title: "6", imgUrl: "https://sun9-59.userapi.com/impg/3INu08QEp8rkk-uUxI2ymBnLQKkChIMBgG-eMA/JY4aU_YT4j4.jpg?size=1280x1280&quality=95&sign=b67e703cef4298d3054be1681849a959&type=album"},
                // {title: "7", imgUrl: "https://sun9-77.userapi.com/impg/8PkgH7hW8pW3vIq_Dek1HAvmKU1EmSlUv5UVIQ/GbByQW22rSM.jpg?size=1080x1080&quality=95&sign=97091a9c4119180e3db8edb070cbffaf&type=album"},
                // {title: "8", imgUrl: "https://sun9-2.userapi.com/impg/4BpH7AlsxwrelYzdE7Rp0kNyZ9xQ-OFNbT08FA/7epWyQ8n_TE.jpg?size=800x800&quality=95&sign=ca1cec7c94cf4accad0029d992557d6d&type=album"},
                // {title: "9", imgUrl: "https://sun9-44.userapi.com/impg/ht0S0-EKUAScuxykwYdq2EFK5FfO-ikEf6Y4Ag/TbUjDSjoYp4.jpg?size=1280x1280&quality=95&sign=b5622cc87e2916915fbf708d7ee32f99&type=album"},
                // {title: "10", imgUrl: "https://sun9-79.userapi.com/impg/j9jyQHARxclWWZ22CujlA6_c5aO5ax1LaahgXw/nzKg0cLg13M.jpg?size=1280x1280&quality=96&sign=c9945e0beb6fb7315fb5f119de006c77&type=album"},
                // {title: "11", imgUrl: "https://sun9-50.userapi.com/impg/uSedlZUFrFDcSHnMGEAs2UbLnv2QvYdh69yv8Q/whDSLD5i8z0.jpg?size=1080x1080&quality=95&sign=8d4d152db6054c19dbabbf72c6f7173b&type=album"},
                // {title: "12", imgUrl: "https://sun9-17.userapi.com/impg/PJs3t2qnB8Iy4yly4iDc1kErgoIqjjq965VefA/U2wj4QvLgpo.jpg?size=1280x1280&quality=95&sign=cbfd9f808bba91a310cac1c1abc1ee71&type=album"},
                // {title: "13", imgUrl: "https://sun9-60.userapi.com/impg/Bq-V12ARb-8YF0Nf3cQnjxokO0HkBS7gsxbxgQ/zq-1_X5Nzb8.jpg?size=1280x1280&quality=95&sign=2786febb0e173008def67951a183e0e9&type=album"},
                // {title: "14", imgUrl: "https://sun9-76.userapi.com/impg/0e7XYEpKcMi9IcaqZkJTsNI3OPFN2hVGJuP5uQ/-md9G-wbHdY.jpg?size=1280x1280&quality=95&sign=82e5fc908838f9efc4d71b719f2a9a41&type=album"},
                // {title: "15", imgUrl: "https://sun9-69.userapi.com/impg/YFHiI01b7xeTEFm-rMsD0POdJ2YvLglGuqDxRQ/PcLlgW3nrbY.jpg?size=1280x1280&quality=95&sign=f310d658369792c1e8b3253fc8f1f7a8&type=album"},
                // {title: "16", imgUrl: "https://sun9-59.userapi.com/impg/3INu08QEp8rkk-uUxI2ymBnLQKkChIMBgG-eMA/JY4aU_YT4j4.jpg?size=1280x1280&quality=95&sign=b67e703cef4298d3054be1681849a959&type=album"},
                // {title: "17", imgUrl: "https://sun9-77.userapi.com/impg/8PkgH7hW8pW3vIq_Dek1HAvmKU1EmSlUv5UVIQ/GbByQW22rSM.jpg?size=1080x1080&quality=95&sign=97091a9c4119180e3db8edb070cbffaf&type=album"},
                // {title: "18", imgUrl: "https://sun9-2.userapi.com/impg/4BpH7AlsxwrelYzdE7Rp0kNyZ9xQ-OFNbT08FA/7epWyQ8n_TE.jpg?size=800x800&quality=95&sign=ca1cec7c94cf4accad0029d992557d6d&type=album"},
                // {title: "19", imgUrl: "https://sun9-44.userapi.com/impg/ht0S0-EKUAScuxykwYdq2EFK5FfO-ikEf6Y4Ag/TbUjDSjoYp4.jpg?size=1280x1280&quality=95&sign=b5622cc87e2916915fbf708d7ee32f99&type=album"},
                // {title: "20", imgUrl: "https://sun9-79.userapi.com/impg/j9jyQHARxclWWZ22CujlA6_c5aO5ax1LaahgXw/nzKg0cLg13M.jpg?size=1280x1280&quality=96&sign=c9945e0beb6fb7315fb5f119de006c77&type=album"},
            ]
        }
    })

    getBigNews = () => ({
        ok: true, status: 200, data: {
            studBigNews: [
                { title: "Мисс Сон", description: "Только сегодня только сейчас Успен спит!!!!", imgUrl: "res/images/big-new-one.png", redirectLink: "https://vk.com/antoshka_uspenskiy?from=search" },
                { title: "Мисс Очарование", description: "Антошка Успенский грустно и очаровательно лежит", imgUrl: "res/images/big-new-two.png", redirectLink: "https://vk.com/miss_bmstu" },
                { title: "Мисс Тарелка", description: "Как классно сидит!!! 10/10 пусть теперь поест", imgUrl: "res/images/big-new-three.png", redirectLink: "https://vk.com/antoshka_uspenskiy?from=search" },
            ]
        }
    })


    async modelParsedRequest(requestFunc, path, data = {}) {
        if (!data._model) {
            throw SyntaxError(`Model for request '${path}' not specified`);
        }
        data = Object.assign({}, data);
        const _model = data._model;
        delete data._model;
        const { ok, data: dataRes, status } = await requestFunc.bind(this.__proto__)(path, data);
        if (!ok) {
            return { ok, data: dataRes, status };
        }
        return { ok, data: validateModel(_model, dataRes), status };
    }
    post(path, data = {}) { return this.modelParsedRequest(super.post, path, data) }
    get(path, data = {}) { return this.modelParsedRequest(super.get, path, data) }
    put(path, data = {}) { return this.modelParsedRequest(super.put, path, data) }
    delete(path, data = {}) { return this.modelParsedRequest(super.delete, path, data) }
}
