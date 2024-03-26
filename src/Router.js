import { createRouter, createWebHistory } from 'vue-router'

import Registration from "./views/User/Registration.vue";
import Login from "./views/User/Login.vue";
import Profile from "./views/User/Profile.vue";
import ChangePassword from "./views/User/ChangePassword.vue";
import Page404 from "./views/Page404.vue";
import RestorePassword from "./views/User/RestorePassword.vue";
import PageNews from "~/views/PageNews.vue";
import PageCalendar from "~/views/PageCalendar.vue";
import PageMainStart from "~/views/Miss/PageMainStart.vue";
import PageMainVote from "~/views/Miss/PageMainVote.vue";
import PageMainFinal from "~/views/Miss/PageMainFinal.vue";
import PageMain from "~/views/Miss/PageMain.vue";
import PageAbout from "~/views/Miss/PageAbout.vue";
import PageContacts from "~/views/Miss/PageContacts.vue";
import pagePartners from "~/views/Miss/PagePartners.vue";
import PageMissProfile from "~/views/Miss/PageMissProfile.vue";

export default function createVueRouter(Store) {
    const routes = [
        {path: '/', name: 'default', component: PageNews, meta: {}},
        {path: '/news', name: 'news', component: PageNews, meta: {}},
        {path: '/calendar', name: 'calendar', component: PageCalendar, meta: {}},

        {path: '/register', name: 'register', component: Registration, meta: {noLoginRequired: true}},
        {path: '/login', name: 'login', component: Login, meta: {noLoginRequired: true}},
        {path: '/login/email', name: 'signInByEmail', component: Login, meta: {noLoginRequired: true}},
        {path: '/profile', name: 'profile', component: Profile, meta: {loginRequired: true}},
        {path: '/password/change', name: 'changePassword', component: ChangePassword, meta: {loginRequired: true}},
        {path: '/password/restore', name: 'restorePassword', component: RestorePassword, meta: {noLoginRequired: true}},
        // {path: '/admin', name: 'admin', component: Admin, meta: {adminRequired: true}},

        {path: '/miss', component: PageMain, meta: {}, children: [
            {path: '/miss/start', name: 'miss', component: PageMainStart, meta: {}},
            {path: '/miss/start', name: 'missMainStart', component: PageMainStart, meta: {}},
            {path: '/miss/vote', name: 'missMainVote', component: PageMainVote, meta: {}},
            {path: '/miss/final', name: 'missMainFinal', component: PageMainFinal, meta: {}},
            {path: '/miss/partners', name: 'missPartners', component: pagePartners, meta: {}},
            {path: '/miss/about', name: 'missAbout', component: PageAbout, meta: {}},
            {path: '/miss/contacts', name: 'missContacts', component: PageContacts, meta: {}},
            {path: '/miss/profile/:missId', name: 'missProfile', component: PageMissProfile, meta: {}},
        ]},

        {path: '/:pathMatch(.*)*', name: 'page404', component: Page404},
    ];

    const Router = createRouter({
        history: createWebHistory(),
        routes: routes,
    });

    let router_got_user = false;
    Router.beforeEach(async (to, from, next) => {
        if (!router_got_user) {
            await Store.dispatch('GET_USER');
            router_got_user = true;
        }

        const notLoginedRedirect = {
            name: 'login'
        }
        const loginedRedirect = {
            name: 'profile',
        }

        // if (to.path === '/' || to.path === '') {
        //     if (Store.state.user.isSignedIn) {
        //         next(loginedRedirect);
        //         return;
        //     }
        //     next(notLoginedRedirect);
        //     return;
        // }

        // Login required redirects
        if (to.matched.some(record => record.meta.loginRequired === true || record.meta.adminRequired === true)) {
            if (Store.state.user.isSignedIn) {
                next();
                return;
            }
            next(notLoginedRedirect);
            return;
        } else if (to.matched.some(record => record.meta.noLoginRequired === true)) {
            if (!Store.state.user.isSignedIn) {
                next();
                return;
            }
            next(loginedRedirect);
            return;
        }
        if (to.matched.some(record => record.meta.adminRequired === true)) {
            if (Store.state.user.isAdmin) {
                next();
                return;
            }
            next(loginedRedirect);
            return;
        }
        next();
    });

    Router.beforeResolve(async (to) => {
        if (window?.onbeforeunload) {
            if (confirm("Изменения не сохранены. Вы уверены, что хотите покинуть страницу?"))
                window.onbeforeunload = null;
            else
                return false;
        }
    });

    return Router;
}
