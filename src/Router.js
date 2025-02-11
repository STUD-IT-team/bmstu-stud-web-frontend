import { createRouter, createWebHistory } from 'vue-router'

import Registration from "./views/User/Registration.vue";
import Login from "./views/User/Login.vue";
import Profile from "./views/User/Profile.vue";
import ChangePassword from "./views/User/ChangePassword.vue";
import Page404 from "./views/Page404.vue";
import RestorePassword from "./views/User/RestorePassword.vue";
import PageNews from "~/views/PageNews.vue";
import PageCalendar from "~/views/PageCalendar.vue";

import PageOrganizations from "~/views/PageOrganizations.vue";
import PageOrganization from "~/views/PageOrganization.vue";


import PageAdminMenu from "~/views/Admin/AdminMenu.vue";
import AdminClubs from "~/views/Admin/AdminClubs.vue";
import AdminMembers from "~/views/Admin/AdminMembers.vue";
import AdminClubEdit from "~/views/Admin/AdminClubEdit.vue";
import AdminMemberEdit from "~/views/Admin/AdminMemberEdit.vue";
import AdminNews from "~/views/Admin/AdminNews.vue";
import AdminNewEdit from "~/views/Admin/AdminNewEdit.vue";

export default function createVueRouter(Store) {
    const routes = [
        {path: '/', name: 'default', redirect: '/news'},
        {path: '/news', name: 'news', component: PageNews, meta: {}},
        {path: '/events', name: 'events', component: PageCalendar, meta: {}},
        {path: '/calendar', name: 'calendar', component: PageCalendar, meta: {}},
        {path: '/organizations', name: 'organizations', component: PageOrganizations, meta: {}},
        //{path: '/organization', name: 'organization', component: PageOrganization, meta: {}},
        {path: '/organizations/:orgId', name: 'organization', component: PageOrganization, meta: {}},
        {path: '/about', name: 'about', component: PageOrganization, meta: {}},


        {path: '/register', name: 'register', component: Registration, meta: {noLoginRequired: true}},
        {path: '/login', name: 'login', component: Login, meta: {noLoginRequired: true}},
        {path: '/login/email', name: 'signInByEmail', component: Login, meta: {noLoginRequired: true}},
        {path: '/profile', name: 'profile', component: Profile, meta: {loginRequired: true}},
        {path: '/password/change', name: 'changePassword', component: ChangePassword, meta: {loginRequired: true}},
        {path: '/password/restore', name: 'restorePassword', component: RestorePassword, meta: {noLoginRequired: true}},
        // {path: '/admin', name: 'admin', component: Admin, meta: {adminRequired: true}},

        {path: '/admin', component: PageAdminMenu, meta: {}, children: [
            {path: '/admin/clubs', name: 'adminClubs', component: AdminClubs, meta: {}},  
            {path: '/admin/members', name: 'adminMembers', component: AdminMembers, meta: {}},
            {path: '/admin/news', name: 'adminNews', component: AdminNews, meta: {}},
        ]},
        {path: '/admin/clubs/:orgId', name: 'adminClubEdit', component: AdminClubEdit, meta: {}},
        {path: '/admin/clubs/create', name: 'adminClubCreate', component: AdminClubEdit, meta: {noLoginRequired: true}},
        {path: '/admin/members/:id', name: 'adminMemberEdit', component: AdminMemberEdit, meta: {noLoginRequired: true}},
        {path: '/admin/members/create', name: 'adminMemberCreate', component: AdminMemberEdit, meta: {noLoginRequired: true}},
        {path: '/admin/new/:newId', name: 'adminNewEdit', component: AdminNewEdit, meta: {noLoginRequired: true}},

        //{path: '/:pathMatch(.*)*', name: 'page404', component: Page404},
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
