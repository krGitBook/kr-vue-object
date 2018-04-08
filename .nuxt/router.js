import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4822c2f6 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _19486818 = () => import('..\\pages\\demo\\searchToLocation.vue' /* webpackChunkName: "pages\\demo\\searchToLocation" */).then(m => m.default || m)
const _32b243c6 = () => import('..\\pages\\demo\\fixedTirTop\\index.vue' /* webpackChunkName: "pages\\demo\\fixedTirTop\\index" */).then(m => m.default || m)
const _965426fe = () => import('..\\pages\\demo\\infiniteScroll.vue' /* webpackChunkName: "pages\\demo\\infiniteScroll" */).then(m => m.default || m)
const _4e9e5805 = () => import('..\\pages\\demo\\floorPlan.vue' /* webpackChunkName: "pages\\demo\\floorPlan" */).then(m => m.default || m)
const _376dd18c = () => import('..\\pages\\demo\\englishInput.vue' /* webpackChunkName: "pages\\demo\\englishInput" */).then(m => m.default || m)
const _414f728c = () => import('..\\pages\\demo\\vuePdf.vue' /* webpackChunkName: "pages\\demo\\vuePdf" */).then(m => m.default || m)
const _4ce81880 = () => import('..\\pages\\demo\\flowChart.vue' /* webpackChunkName: "pages\\demo\\flowChart" */).then(m => m.default || m)
const _0a47c8ad = () => import('..\\pages\\demo\\progress.vue' /* webpackChunkName: "pages\\demo\\progress" */).then(m => m.default || m)
const _26613f7c = () => import('..\\pages\\demo\\spin.vue' /* webpackChunkName: "pages\\demo\\spin" */).then(m => m.default || m)
const _91aa64c4 = () => import('..\\pages\\demo\\tree.vue' /* webpackChunkName: "pages\\demo\\tree" */).then(m => m.default || m)
const _6bcd418f = () => import('..\\pages\\demo\\fixedTirTop\\every.vue' /* webpackChunkName: "pages\\demo\\fixedTirTop\\every" */).then(m => m.default || m)



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
			component: _4822c2f6,
			name: "index"
		},
		{
			path: "/demo/searchToLocation",
			component: _19486818,
			name: "demo-searchToLocation"
		},
		{
			path: "/demo/fixedTirTop",
			component: _32b243c6,
			name: "demo-fixedTirTop"
		},
		{
			path: "/demo/infiniteScroll",
			component: _965426fe,
			name: "demo-infiniteScroll"
		},
		{
			path: "/demo/floorPlan",
			component: _4e9e5805,
			name: "demo-floorPlan"
		},
		{
			path: "/demo/englishInput",
			component: _376dd18c,
			name: "demo-englishInput"
		},
		{
			path: "/demo/vuePdf",
			component: _414f728c,
			name: "demo-vuePdf"
		},
		{
			path: "/demo/flowChart",
			component: _4ce81880,
			name: "demo-flowChart"
		},
		{
			path: "/demo/progress",
			component: _0a47c8ad,
			name: "demo-progress"
		},
		{
			path: "/demo/spin",
			component: _26613f7c,
			name: "demo-spin"
		},
		{
			path: "/demo/tree",
			component: _91aa64c4,
			name: "demo-tree"
		},
		{
			path: "/demo/fixedTirTop/every",
			component: _6bcd418f,
			name: "demo-fixedTirTop-every"
		}
    ],
    fallback: false
  })
}
