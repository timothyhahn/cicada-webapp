<template>
  <div class="thread-view">
    <post v-for="post in posts" :key="post.id" :post="post"></post>
    <form 
      class="pure-form" 
      v-on:submit.prevent
      v-on:submit="contribute">
      <fieldset>
        <div class="pure-g">
          <div class="pure-u-4-5">
            <input type="text" class="message-text" v-model="text" />
          </div>
          <div class="pure-u-1-5">
            <button type="submit" class="pure-button pure-button-primary">Contribute</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Post from './Post';

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

export default {
  name: 'thread-view',
  data() {
    return {
      posts: testData,
      text: '',
    };
  },
  components: {
    Post,
  },
  methods: {
    contribute: function contribute() {
      this.posts.push({
        username: 'tim',
        message: this.text,
        id: Math.random(),
      });

      this.text = '';
    },
  },
};
</script>

<style lang="sass?outputStyle=expanded">
  .thread-view {
    .pure-form fieldset {
      padding: 8px;
      .message-text {
        width: 100%;
      }
    }
    .post:nth-last-child(2){
      border-bottom: 1px #031630 solid; // TODO: Use a global set of variables for this
    }
  }

</style>
