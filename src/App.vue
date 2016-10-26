<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="item in items">{{ item.text }}</li>
    </ul>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

window.testRef = firebase.database().ref('/test')

export default {
  name: 'app',
  components: {
    Hello
  },
  firebase: {
    items: testRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
