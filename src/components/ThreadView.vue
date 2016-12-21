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

export default {
  name: 'thread-view',
  props: ['posts'],
  data() {
    return {
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
      this.$emit('contribute', this.text);

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
