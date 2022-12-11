<template>
  <div id="app">
    <nav>
      <router-link to="/rol">Rol</router-link> |
      <router-link to="/regional">Regional</router-link> |
      <router-link to="/categoria">categoria</router-link> |
      <router-link to="/tipoRevision">Tipo Revision</router-link> |
      <router-link to="/ficha">Ficha</router-link> |
      <router-link to='/centroFormacion'>Centro Formacion</router-link> |
      <router-link to="/programa">Programa</router-link> |
    </nav>
    <router-view/>
  </div>
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
