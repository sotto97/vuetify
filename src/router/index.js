import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/enterprise",
		name: "enterprise",
		component: () => import("../views/Enterprise.vue"),
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/discord-community",
		name: "discord-community",
		component: () => import("../views/DiscordCommunity.vue"),
	},
	{
		path: "/support",
		name: "support",
		component: () => import("../views/Support.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
