<template>
  <div id="cicada-app">
    <thread-view :posts="posts" v-on:contribute="contribute"></thread-view>
  </div>
</template>

<script>
import ThreadView from './components/ThreadView';

export default {
  name: 'app',
  props: ['posts'],
  components: {
    ThreadView,
  },
  methods: {
    contribute: function contribute(message) {
      this.$emit('contribute', message);
    },
  },
};
</script>

<style lang="sass?outputStyle=expanded">
  #cicada-app {
    font-family: "Gill Sans","Gill Sans MT",Calibri,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
</style>
#