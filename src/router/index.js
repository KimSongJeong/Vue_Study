import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import FormBinding from "../views/FormBinding.vue";
import VBindingVue from "../views/VBinding.vue";
import ListRenderingVue from "../views/ListRendering.vue";
import VOnView from "../views/VOnView.vue";
import ComputedView from "../views/ComputedView.vue";
import WatchView from "../views/WatchView.vue";
import RouterParamterView from "../views/RouterParamterView.vue";
import RouterParamterDetailView from "../views/RouterParamterDetailView.vue";
import PropsParentView from "../views/PropsViews/PropsParentView.vue";
import ProvideInject from "../views/Provide_Inject/RootView.vue";
import Slot from "../views/Slot/RootView.vue";
import AxiosView from "../views/AxiosView.vue";
import VueXView from "../views/VueX/VueXView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // DataBinding
  {
    path: "/dataBinding",
    name: "dataBinding",
    component: DataBinding,
  },
  // FormBinding
  {
    path: "/formBinding",
    name: "formBinding",
    component: FormBinding,
  },
  // VBindingVue
  {
    path: "/vBindingVue",
    name: "vBindingVue",
    component: VBindingVue,
  },
  // ListRenderingVue
  {
    path: "/listRenderingVue",
    name: "listRenderingVue",
    component: ListRenderingVue,
  },
  // VOnView
  {
    path: "/vOnView",
    name: "vOnView",
    component: VOnView,
  },
  // ComputedView
  {
    path: "/computedView",
    name: "computedView",
    component: ComputedView,
  },
  // WatchView
  {
    path: "/watchView",
    name: "WatchView",
    component: WatchView,
  },
  {
    path: "/routerParamterView",
    name: "RouterParamterView",
    component: RouterParamterView,
  },
  {
    path: "/routerParamterDetailView/:id",
    name: "RouterParamterDetailView",
    component: RouterParamterDetailView,
  },
  {
    path: "/propsParentView",
    name: "PropsParentView",
    component: PropsParentView,
  },
  {
    path: "/provideInject",
    name: "ProvideInject",
    component: ProvideInject,
  },
  {
    path: "/slot",
    name: "Slot",
    component: Slot,
  },
  {
    path: "/axiosView",
    name: "AxiosView",
    component: AxiosView,
  },
  {
    path: "/vueXView",
    name: "VueXView",
    component: VueXView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// beforeEach, afterEach는 생략가능
// router.beforeEach((to, from, next) => {
//   console.log("===== Router BeforeEach =====");
//   console.log("to : ", to);
//   console.log("from : ", from);
//   console.log("=============================");
//   next(); // 다음페이지 이동
// });

// router.afterEach((to, from) => {
//   console.log("===== Router AfterEach =====");
//   console.log("to : ", to);
//   console.log("from : ", from);
//   console.log("=============================");
// });

export default router;
