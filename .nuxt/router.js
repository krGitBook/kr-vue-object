import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0c1b969c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _68256f12 = () => import('../pages/demo/infiniteScroll.vue' /* webpackChunkName: "pages/demo/infiniteScroll" */).then(m => m.default || m)
const _495ef5d8 = () => import('../pages/demo/tree.vue' /* webpackChunkName: "pages/demo/tree" */).then(m => m.default || m)
const _4efc3d24 = () => import('../pages/demo/objSet/index.vue' /* webpackChunkName: "pages/demo/objSet/index" */).then(m => m.default || m)
const _08189aca = () => import('../pages/demo/flowChart.vue' /* webpackChunkName: "pages/demo/flowChart" */).then(m => m.default || m)
const _09ceda4f = () => import('../pages/demo/floorPlan.vue' /* webpackChunkName: "pages/demo/floorPlan" */).then(m => m.default || m)
const _10f517b8 = () => import('../pages/demo/spin.vue' /* webpackChunkName: "pages/demo/spin" */).then(m => m.default || m)
const _5652f8b0 = () => import('../pages/demo/englishInput.vue' /* webpackChunkName: "pages/demo/englishInput" */).then(m => m.default || m)
const _1a35b6fc = () => import('../pages/demo/vuePdf.vue' /* webpackChunkName: "pages/demo/vuePdf" */).then(m => m.default || m)
const _a58e55ba = () => import('../pages/demo/progress.vue' /* webpackChunkName: "pages/demo/progress" */).then(m => m.default || m)
const _700ec2e4 = () => import('../pages/demo/searchToLocation.vue' /* webpackChunkName: "pages/demo/searchToLocation" */).then(m => m.default || m)
const _0b263709 = () => import('../pages/demo/fixedTirTop/index.vue' /* webpackChunkName: "pages/demo/fixedTirTop/index" */).then(m => m.default || m)
const _444134d2 = () => import('../pages/demo/fixedTirTop/every.vue' /* webpackChunkName: "pages/demo/fixedTirTop/every" */).then(m => m.default || m)
const _5ef3e4f7 = () => import('../pages/demo/objSet/EditPage.vue' /* webpackChunkName: "pages/demo/objSet/EditPage" */).then(m => m.default || m)



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
			component: _0c1b969c,
			name: "index"
		},
		{
			path: "/demo/infiniteScroll",
			component: _68256f12,
			name: "demo-infiniteScroll"
		},
		{
			path: "/demo/tree",
			component: _495ef5d8,
			name: "demo-tree"
		},
		{
			path: "/demo/objSet",
			component: _4efc3d24,
			name: "demo-objSet"
		},
		{
			path: "/demo/flowChart",
			component: _08189aca,
			name: "demo-flowChart"
		},
		{
			path: "/demo/floorPlan",
			component: _09ceda4f,
			name: "demo-floorPlan"
		},
		{
			path: "/demo/spin",
			component: _10f517b8,
			name: "demo-spin"
		},
		{
			path: "/demo/englishInput",
			component: _5652f8b0,
			name: "demo-englishInput"
		},
		{
			path: "/demo/vuePdf",
			component: _1a35b6fc,
			name: "demo-vuePdf"
		},
		{
			path: "/demo/progress",
			component: _a58e55ba,
			name: "demo-progress"
		},
		{
			path: "/demo/searchToLocation",
			component: _700ec2e4,
			name: "demo-searchToLocation"
		},
		{
			path: "/demo/fixedTirTop",
			component: _0b263709,
			name: "demo-fixedTirTop"
		},
		{
			path: "/demo/fixedTirTop/every",
			component: _444134d2,
			name: "demo-fixedTirTop-every"
		},
		{
			path: "/demo/objSet/EditPage",
			component: _5ef3e4f7,
			name: "demo-objSet-EditPage"
		}
    ],
    fallback: false
  })
}
