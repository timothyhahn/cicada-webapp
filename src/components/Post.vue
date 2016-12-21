<template>
  <div class="post">
  	<div class="post-username">{{ post.username }}:</div>
  	<div class="post-message">{{ post.message }}</div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['post'],
};
</script>

<style scoped lang="sass?outputStyle=expanded">
	.post {
		.post-username {
			margin-bottom: 4px;
		}
		.post-message {
			padding: 8px;
		}
		border: 1px #031630 solid;
		border-bottom: none;
		clear: both;
		min-height: 50px;
		padding: 4px;
		text-align: left;
	}
</style>
