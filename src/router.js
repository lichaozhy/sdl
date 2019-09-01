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

import PageDesktopOverview from './component/page/desktop/vulnerability/Overview';
import PageDesktopVulDetail from './component/page/desktop/vulnerability/Detail';
import SoureRFC from './component/page/desktop/vulnerability/sourceReference';
import GroupVulRank from './component/page/desktop/vulnerability/charts/GroupVulRank';
import BatchVulRank from './component/page/desktop/vulnerability/charts/BatchVulRank';
import VulRepairDuration from './component/page/desktop/vulnerability/charts/VulRepairDuration';
import VulAppearTimes from './component/page/desktop/vulnerability/charts/VulAppearTimes';
import ProjectVulRank from './component/page/desktop/vulnerability/charts/ProjectVulRank';

import ScanTaskOverview from './component/page/desktop/tool/ScanTaskOverview';
import ExecuteOverview from './component/page/desktop/tool/ExecuteOverview';
import ScanResultOverview from './component/page/desktop/tool/ScanResultOverview';
import ToolSetting from './component/page/desktop/tool/Setting';

import Trend from './component/page/desktop/trend/Trend';
import Compare from './component/page/desktop/trend/Compare';
import Statistic from './component/page/desktop/trend/Statistic';

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
				},
				{
					path: 'vulnerability/overview',
					component: PageDesktopOverview,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/detail/:vulId',
					component: PageDesktopVulDetail,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/sourcerfc',
					component: SoureRFC,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/groupvulrank',
					component: GroupVulRank,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/batchvulrank',
					component: BatchVulRank,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/vulrepairduration',
					component: VulRepairDuration,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/vulappeartimes',
					component: VulAppearTimes,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'vulnerability/projectvulrank',
					component: ProjectVulRank,
					// meta: {
					// 	administratorRequired: true
					// }
				},
				{
					path: 'tool/scantask',
					component: ScanTaskOverview
				},
				{
					path: 'tool/execute',
					component: ExecuteOverview
				},
				{
					path: 'tool/result',
					component: ScanResultOverview
				},
				{
					path: 'tool/setting',
					component: ToolSetting
				},
				{
					path: 'situation/trend',
					component: Trend
				},
				{
					path: 'situation/statistic',
					component: Statistic
				},
				{
					path: 'situation/compare',
					component: Compare
				},
			]
		}
	],
	
});