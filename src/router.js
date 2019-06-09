import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import PageSignIn from './component/page/SignIn';
import PageDesktop from './component/page/Desktop';

import PageDesktopOverview from './component/page/desktop/Overview';
import PageDesktopAccountProfile from './component/page/desktop/Account';
import PageDesktopProjectOverview from './component/page/desktop/project/Detail';
import PageDesktopProjectDetail from './component/page/desktop/project/Detail';
import PageDesktopProjectTeam from './component/page/desktop/project/Team';
import PageDesktopProjectVersion from './component/page/desktop/project/Version';

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: 'signin'
		},
		{
			name: 'signin',
			path: '/signin',
			component: PageSignIn,
			meta: {
				unsignedIn: true
			}
		},
		{
			path: '/desktop',
			meta: {
				signedIn: true
			},
			component: PageDesktop,
			children: [
				{
					path: '',
					redirect: 'overview'
				},
				{
					path: 'account/profile',
					component: PageDesktopAccountProfile
				},
				{
					path: 'project',
					component: PageDesktopProjectOverview
				},
				{
					path: 'project/:hash',
					component: PageDesktopProjectDetail
				},
				{
					path: 'project/:hash/team',
					component: PageDesktopProjectTeam
				},
				{
					path: 'project/:hash/version/:semver',
					component: PageDesktopProjectVersion
				},
				{
					path: 'admin/overview',
					component: PageDesktopOverview,
					meta: {
						maintainer: true
					}
				},
				{
					path: 'admin/service',
					meta: {
						maintainer: true
					}
				},
				{
					path: 'admin/service/:identifier',
					meta: {
						maintainer: true
					}
				},
				{
					path: 'admin/account',
					meta: {
						maintainer: true
					}
				}
			]
		}
	],
	
});