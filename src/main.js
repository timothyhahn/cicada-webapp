/* global WebSocket */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

require('../node_modules/purecss/build/pure-min.css');
require('../node_modules/purecss/build/grids-responsive-min.css');

const ws = new WebSocket('ws://localhost:8888/ws');
const testData = [
  {
    username: 'tim',
    message: 'Hey!',
    timestamp: 0,
    id: 1,
  },
  {
    username: 'pim',
    message: 'Morbi hendrerit, odio in porttitor scelerisque, massa risus viverra dolor, sed porttitor turpis nulla in nibh. Suspendisse sagittis, nisi in cursus dignissim, ipsum ante aliquet nulla, eget maximus est sapien ut erat. Pellentesque gravida justo vitae libero dictum rhoncus. Pellentesque semper fringilla est ac aliquam. Mauris sit amet ex a tortor egestas dignissim sit amet quis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum efficitur nunc, non dignissim nunc accumsan sit amet. Praesent at nunc ullamcorper, molestie dolor in, condimentum nulla. Vestibulum a nisl urna. Ut in justo eget sem congue finibus. Vivamus porttitor placerat tortor et facilisis. Aenean laoreet malesuada molestie. Aenean sed vestibulum eros, ut elementum turpis',
    timestamp: 10,
    id: 2,
  },
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :posts="posts" v-on:contribute="contribute"/>',
  components: { App },
  data() {
    return {
      posts: testData,
    };
  },
  created() {
    ws.onmessage = (data) => {
      this.posts.push({
        username: 'pim',
        message: data.data,
        id: Math.random(),
      });
    };
  },
  methods: {
    contribute: (message) => {
      ws.send(message);
    },
  },
});
