import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _1506ad08 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _57b7af3a = () => import('..\\pages\\demo\\fixedTirTop\\index.vue' /* webpackChunkName: "pages\\demo\\fixedTirTop\\index" */).then(m => m.default || m)
const _307658fb = () => import('..\\pages\\demo\\tree.vue' /* webpackChunkName: "pages\\demo\\tree" */).then(m => m.default || m)
const _86f74270 = () => import('..\\pages\\demo\\floorPlan.vue' /* webpackChunkName: "pages\\demo\\floorPlan" */).then(m => m.default || m)
const _6fd3dc0c = () => import('..\\pages\\demo\\objSet\\index.vue' /* webpackChunkName: "pages\\demo\\objSet\\index" */).then(m => m.default || m)
const _661aeb9f = () => import('..\\pages\\demo\\spin.vue' /* webpackChunkName: "pages\\demo\\spin" */).then(m => m.default || m)
const _21309f62 = () => import('..\\pages\\demo\\krImg.vue' /* webpackChunkName: "pages\\demo\\krImg" */).then(m => m.default || m)
const _8a63c17a = () => import('..\\pages\\demo\\flowChart.vue' /* webpackChunkName: "pages\\demo\\flowChart" */).then(m => m.default || m)
const _dc1744ec = () => import('..\\pages\\demo\\progress.vue' /* webpackChunkName: "pages\\demo\\progress" */).then(m => m.default || m)
const _309414d2 = () => import('..\\pages\\demo\\englishInput.vue' /* webpackChunkName: "pages\\demo\\englishInput" */).then(m => m.default || m)
const _def6b0c4 = () => import('..\\pages\\demo\\infiniteScroll.vue' /* webpackChunkName: "pages\\demo\\infiniteScroll" */).then(m => m.default || m)
const _d434caae = () => import('..\\pages\\demo\\vuePdf.vue' /* webpackChunkName: "pages\\demo\\vuePdf" */).then(m => m.default || m)
const _77966016 = () => import('..\\pages\\demo\\searchToLocation.vue' /* webpackChunkName: "pages\\demo\\searchToLocation" */).then(m => m.default || m)
const _0d3f262c = () => import('..\\pages\\demo\\fixedTirTop\\every.vue' /* webpackChunkName: "pages\\demo\\fixedTirTop\\every" */).then(m => m.default || m)
const _03fad861 = () => import('..\\pages\\demo\\objSet\\EditPage.vue' /* webpackChunkName: "pages\\demo\\objSet\\EditPage" */).then(m => m.default || m)
=======
const _7dd822a1 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _440de7bc = () => import('../pages/demo/infiniteScroll.vue' /* webpackChunkName: "pages/demo/infiniteScroll" */).then(m => m.default || m)
const _77a4f2ce = () => import('../pages/demo/tree.vue' /* webpackChunkName: "pages/demo/tree" */).then(m => m.default || m)
const _56d5e9a9 = () => import('../pages/demo/objSet/index.vue' /* webpackChunkName: "pages/demo/objSet/index" */).then(m => m.default || m)
const _8dae7736 = () => import('../pages/demo/flowChart.vue' /* webpackChunkName: "pages/demo/flowChart" */).then(m => m.default || m)
const _8a41f82c = () => import('../pages/demo/floorPlan.vue' /* webpackChunkName: "pages/demo/floorPlan" */).then(m => m.default || m)
const _0c5bcd86 = () => import('../pages/demo/spin.vue' /* webpackChunkName: "pages/demo/spin" */).then(m => m.default || m)
const _5e2ca535 = () => import('../pages/demo/englishInput.vue' /* webpackChunkName: "pages/demo/englishInput" */).then(m => m.default || m)
const _1887d8c7 = () => import('../pages/demo/vuePdf.vue' /* webpackChunkName: "pages/demo/vuePdf" */).then(m => m.default || m)
const _1600e7b0 = () => import('../pages/demo/progress.vue' /* webpackChunkName: "pages/demo/progress" */).then(m => m.default || m)
const _8b22feda = () => import('../pages/demo/searchToLocation.vue' /* webpackChunkName: "pages/demo/searchToLocation" */).then(m => m.default || m)
const _676c95a4 = () => import('../pages/demo/fixedTirTop/index.vue' /* webpackChunkName: "pages/demo/fixedTirTop/index" */).then(m => m.default || m)
const _bef0d926 = () => import('../pages/demo/fixedTirTop/every.vue' /* webpackChunkName: "pages/demo/fixedTirTop/every" */).then(m => m.default || m)
const _2a31a35c = () => import('../pages/demo/objSet/EditPage.vue' /* webpackChunkName: "pages/demo/objSet/EditPage" */).then(m => m.default || m)
>>>>>>> be1a671bb0cbc5b6a0b4a84877b5d884b38e9231



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
<<<<<<< HEAD
			component: _1506ad08,
			name: "index"
		},
		{
			path: "/demo/fixedTirTop",
			component: _57b7af3a,
			name: "demo-fixedTirTop"
		},
		{
			path: "/demo/tree",
			component: _307658fb,
			name: "demo-tree"
		},
		{
			path: "/demo/floorPlan",
			component: _86f74270,
			name: "demo-floorPlan"
		},
		{
			path: "/demo/objSet",
			component: _6fd3dc0c,
			name: "demo-objSet"
		},
		{
			path: "/demo/spin",
			component: _661aeb9f,
			name: "demo-spin"
		},
		{
			path: "/demo/krImg",
			component: _21309f62,
			name: "demo-krImg"
		},
		{
			path: "/demo/flowChart",
			component: _8a63c17a,
			name: "demo-flowChart"
		},
		{
			path: "/demo/progress",
			component: _dc1744ec,
			name: "demo-progress"
		},
		{
			path: "/demo/englishInput",
			component: _309414d2,
			name: "demo-englishInput"
		},
		{
			path: "/demo/infiniteScroll",
			component: _def6b0c4,
			name: "demo-infiniteScroll"
		},
		{
			path: "/demo/vuePdf",
			component: _d434caae,
			name: "demo-vuePdf"
		},
		{
			path: "/demo/searchToLocation",
			component: _77966016,
			name: "demo-searchToLocation"
		},
		{
			path: "/demo/fixedTirTop/every",
			component: _0d3f262c,
=======
			component: _7dd822a1,
			name: "index"
		},
		{
			path: "/demo/infiniteScroll",
			component: _440de7bc,
			name: "demo-infiniteScroll"
		},
		{
			path: "/demo/tree",
			component: _77a4f2ce,
			name: "demo-tree"
		},
		{
			path: "/demo/objSet",
			component: _56d5e9a9,
			name: "demo-objSet"
		},
		{
			path: "/demo/flowChart",
			component: _8dae7736,
			name: "demo-flowChart"
		},
		{
			path: "/demo/floorPlan",
			component: _8a41f82c,
			name: "demo-floorPlan"
		},
		{
			path: "/demo/spin",
			component: _0c5bcd86,
			name: "demo-spin"
		},
		{
			path: "/demo/englishInput",
			component: _5e2ca535,
			name: "demo-englishInput"
		},
		{
			path: "/demo/vuePdf",
			component: _1887d8c7,
			name: "demo-vuePdf"
		},
		{
			path: "/demo/progress",
			component: _1600e7b0,
			name: "demo-progress"
		},
		{
			path: "/demo/searchToLocation",
			component: _8b22feda,
			name: "demo-searchToLocation"
		},
		{
			path: "/demo/fixedTirTop",
			component: _676c95a4,
			name: "demo-fixedTirTop"
		},
		{
			path: "/demo/fixedTirTop/every",
			component: _bef0d926,
>>>>>>> be1a671bb0cbc5b6a0b4a84877b5d884b38e9231
			name: "demo-fixedTirTop-every"
		},
		{
			path: "/demo/objSet/EditPage",
<<<<<<< HEAD
			component: _03fad861,
=======
			component: _2a31a35c,
>>>>>>> be1a671bb0cbc5b6a0b4a84877b5d884b38e9231
			name: "demo-objSet-EditPage"
		}
    ],
    fallback: false
  })
}
