import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _f30c7f10 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _4a2d62ff = () => import('../pages/demo/progress.vue' /* webpackChunkName: "pages/demo/progress" */).then(m => m.default || m)
const _2855388c = () => import('../pages/demo/englishInput.vue' /* webpackChunkName: "pages/demo/englishInput" */).then(m => m.default || m)
const _231d80ad = () => import('../pages/demo/fixedTirTop/index.vue' /* webpackChunkName: "pages/demo/fixedTirTop/index" */).then(m => m.default || m)
const _265f0153 = () => import('../pages/demo/infiniteScroll.vue' /* webpackChunkName: "pages/demo/infiniteScroll" */).then(m => m.default || m)
const _448e60f0 = () => import('../pages/demo/tree.vue' /* webpackChunkName: "pages/demo/tree" */).then(m => m.default || m)
const _20fe7d00 = () => import('../pages/demo/objSet/index.vue' /* webpackChunkName: "pages/demo/objSet/index" */).then(m => m.default || m)
const _4cdf906a = () => import('../pages/demo/searchToLocation.vue' /* webpackChunkName: "pages/demo/searchToLocation" */).then(m => m.default || m)
const _5d9d19fe = () => import('../pages/demo/turnPage.vue' /* webpackChunkName: "pages/demo/turnPage" */).then(m => m.default || m)
const _7a32f394 = () => import('../pages/demo/spin.vue' /* webpackChunkName: "pages/demo/spin" */).then(m => m.default || m)
const _0b6c07f3 = () => import('../pages/demo/floorPlan.vue' /* webpackChunkName: "pages/demo/floorPlan" */).then(m => m.default || m)
const _041b795e = () => import('../pages/demo/vuePdf.vue' /* webpackChunkName: "pages/demo/vuePdf" */).then(m => m.default || m)
const _09b5c86e = () => import('../pages/demo/flowChart.vue' /* webpackChunkName: "pages/demo/flowChart" */).then(m => m.default || m)
const _5e50a6fa = () => import('../pages/demo/krImg.vue' /* webpackChunkName: "pages/demo/krImg" */).then(m => m.default || m)
const _52b9479b = () => import('../pages/demo/objSet/EditPage.vue' /* webpackChunkName: "pages/demo/objSet/EditPage" */).then(m => m.default || m)
const _5c387e76 = () => import('../pages/demo/fixedTirTop/every.vue' /* webpackChunkName: "pages/demo/fixedTirTop/every" */).then(m => m.default || m)



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
			component: _f30c7f10,
			name: "index"
		},
		{
			path: "/demo/progress",
			component: _4a2d62ff,
			name: "demo-progress"
		},
		{
			path: "/demo/englishInput",
			component: _2855388c,
			name: "demo-englishInput"
		},
		{
			path: "/demo/fixedTirTop",
			component: _231d80ad,
			name: "demo-fixedTirTop"
		},
		{
			path: "/demo/infiniteScroll",
			component: _265f0153,
			name: "demo-infiniteScroll"
		},
		{
			path: "/demo/tree",
			component: _448e60f0,
			name: "demo-tree"
		},
		{
			path: "/demo/objSet",
			component: _20fe7d00,
			name: "demo-objSet"
		},
		{
			path: "/demo/searchToLocation",
			component: _4cdf906a,
			name: "demo-searchToLocation"
		},
		{
			path: "/demo/turnPage",
			component: _5d9d19fe,
			name: "demo-turnPage"
		},
		{
			path: "/demo/spin",
			component: _7a32f394,
			name: "demo-spin"
		},
		{
			path: "/demo/floorPlan",
			component: _0b6c07f3,
			name: "demo-floorPlan"
		},
		{
			path: "/demo/vuePdf",
			component: _041b795e,
			name: "demo-vuePdf"
		},
		{
			path: "/demo/flowChart",
			component: _09b5c86e,
			name: "demo-flowChart"
		},
		{
			path: "/demo/krImg",
			component: _5e50a6fa,
			name: "demo-krImg"
		},
		{
			path: "/demo/objSet/EditPage",
			component: _52b9479b,
			name: "demo-objSet-EditPage"
		},
		{
			path: "/demo/fixedTirTop/every",
			component: _5c387e76,
			name: "demo-fixedTirTop-every"
		}
    ],
    fallback: false
  })
}
