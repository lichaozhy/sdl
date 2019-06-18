import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import PageSignIn from './component/page/SignIn';
import PageDesktop from './component/page/Desktop';

import PageDesktopProfile from './component/page/desktop/Profile';
import PageDesktopAbout from './component/page/desktop/About';

import PageDesktopProjectOverview from './component/page/desktop/project/Overview';
import PageDesktopProjectAll from './component/page/desktop/project/All';
import PageDesktopProjectVulnerability from './component/page/desktop/project/Vulnerability';
import PageDesktopProjectDetail from './component/page/desktop/project/Detail';
import PageDesktopProjectTeam from './component/page/desktop/project/Team';
import PageDesktopProjectVersion from './component/page/desktop/project/Version';

import PageDesktopOverview from './component/page/desktop/admin/Overview';

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/desktop'
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
					redirect: 'project'
				},
				{
					path: 'about',
					component: PageDesktopAbout
				},
				{
					path: 'profile',
					component: PageDesktopProfile
				},
				{
					path: 'project',
					component: PageDesktopProjectOverview
				},
				{
					path: 'project/all',
					component: PageDesktopProjectAll
				},
				{
					path: 'project/vulnerability',
					component: PageDesktopProjectVulnerability
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
						administratorRequired: true
					}
				},
				{
					path: 'admin/service',
					meta: {
						administratorRequired: true
					}
				},
				{
					path: 'admin/service/:identifier',
					meta: {
						administratorRequired: true
					}
				},
				{
					path: 'admin/account',
					meta: {
						administratorRequired: true
					}
				}
			]
		}
	],
	
});