import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
			name: "demo-fixedTirTop-every"
		},
		{
			path: "/demo/objSet/EditPage",
			component: _2a31a35c,
			name: "demo-objSet-EditPage"
		}
    ],
    fallback: false
  })
}
