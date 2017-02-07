<template>
  <div id="firstcomponent">
    <h1 v-on:click="onClickMe">来自firstcomponent的内容</h1>
    <a> written by {{ author }} </a>
  </div>
</template>
 
<script type="text/javascript">
export default {
  data () {
    return {
      author: "田野"
    }
  },
  props: ["fatherO"],
  methods: {
  	onClickMe: function() {
  		console.log(this.fatherO)
  		this.$emit("child-tell", this.author)
  	}
  }
}
</script>
 
<style>
</style>