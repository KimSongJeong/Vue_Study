<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |
    <router-link to="/formBinding">FormBinding</router-link> |
    <router-link to="/vBindingVue">Vbinding</router-link> |
    <router-link to="/listRenderingVue">ListRenderingVue</router-link> |
    <router-link to="/computedView">Computed</router-link> |
    <router-link to="/watchView">Watch</router-link> |
    <router-link to="/routerParamterView">RouterParamter</router-link> |
    <router-link to="/propsParentView">Props</router-link> |
    <router-link to="/provideInject">Provide_Inject</router-link> |
    <router-link to="/slot">Slot</router-link> |
    <router-link to="/axiosView">Axios</router-link> |
    <router-link to="/vuexView">vuex</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
}

nav a {
  font-weight: unset;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  font-size: 25px;
  font-weight: bold;
  color: #ff0000;
}

.mr-1 {
  margin-right: 1rem;
}

.mb-5 {
  margin-bottom: 1.5rem;
}
</style>
