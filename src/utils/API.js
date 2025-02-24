import REST_API from "@sergtyapkin/rest-api"
import validateModel from "@sergtyapkin/models-validator";
import * as Models from "~/utils/apiModels";

export default class MY_API extends REST_API {
    login = (login, password) => this.post('/guard/login/', { _model: {}, login, password});
    register = (member) => this.post('/guard/register/', { _model: Models.RegisterMember, ...member});
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


    // this.get(`/api/events`, {_model: Models.Events, start_date: startDate.toISOString(), end_date: endDate.toISOString()});
    getNews = () => this.get(`/feed/`, { _model: Models.Feeds })
    getNewsByQuery = (query) => this.get(`/feed/search/${query}`, { _model: Models.Feeds })
    // this.get(`/api/feed`, {_model: Models.Feeds});
    getNew = (id) => this.get(`/feed/${id}`, { _model: Models.Feed });
    deleteNew = (id) => this.delete(`/feed/${id}`, { _model: Models.Feed });

    getEncounters = (id) => this.get(`/feed/encounters/${id}`, { _model: Models.Encounters })

    getActiveMainVideo = () => this.get(`/media/main/video`, { _model: Models.MainVideo })

    getClubsList = (id) => this.get(`/clubs/type/${id}`, { _model: Models.Clubs })

    getFacList = () => ({    })

    getBigNews = () => ({
        ok: true, status: 200, data: {
            studBigNews: [
                { title: "Мисс Сон", description: "Только сегодня только сейчас Успен спит!!!!", imgUrl: "static/images/big-new-one.png", redirectLink: "https://vk.com/antoshka_uspenskiy?from=search" },
                { title: "Мисс Очарование", description: "Антошка Успенский грустно и очаровательно лежит. Давайте ему похлопаем. Он молодец, хорошо лежит. Жалко, что грустно. Мисс очерование масштаюный конкурс много денег, сил и красивых техподов.", imgUrl: "static/images/big-new-two.png", redirectLink: "https://vk.com/miss_bmstu" },
                { title: "Мисс Тарелка", description: "Как классно сидит!!! 10/10 пусть теперь поест", imgUrl: "static/images/big-new-three.png", redirectLink: "https://vk.com/antoshka_uspenskiy?from=search" },
            ]
        }
    })

    getEvents = () => this.get(`/events/`, { _model: Models.Events })


    getOrgs = () => this.get(`/clubs`, {_model: Models.Clubs});
    getOrgsByType = (type) => this.get(`/clubs/type/${type}`, {_model: Models.Clubs});
    getOrgsByQuery = (query) => this.get(`/clubs/search/${query}`, {_model: Models.Clubs});

    getOrgInfo = (orgId) => this.get(`/clubs/${orgId}`, {_model: Models.Club});
    getOrgPhotos = (orgId) => this.get(`/clubs/media/${orgId}`, {_model: Models.ClubPhotos});

    getMembers = () => this.get(`/members`, { _model: Models.Members})
    getMembersByQuery = (query) => this.get(`/members/search/${query}`, {_model: Models.Members});
    getMember = (memberId) => this.get(`/members/${memberId}`, { _model: Models.Member})


    putClub = (club, club_id) => this.put(`/clubs/${club_id}`, { _model: Models.Empty, ...club })
    postClub = (club) => this.post(`/clubs/`, { _model: Models.Empty, ...club })
    putClubMedia = (club_id, photos) => this.put(`/clubs/media/${club_id}`, { _model: Models.Empty, photos })
    postMedia = (data, name) => this.post('/media/private/', {_model:Models.MediaPost, data, name})
    putMember = (member, member_id) => this.put(`/members/${member_id}`, {_model: {}, ...member})

    async modelParsedRequest(requestFunc, path, data = {}) {
        if (!data._model) {
            throw SyntaxError(`Model for request '${path}' not specified`);
        }
        data = Object.assign({}, data);
        const _model = data._model;
        delete data._model;
        const { ok, data: dataRes, status } = await requestFunc.bind(this)(path, data);

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
