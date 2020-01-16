<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/page1">Page1</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {}
};
</script>
