<template>
  <div id="firstcomponent">
    <h1>来自firstcomponent的内容</h1>
    <a> written by {{ author }} </a>
  </div>
</template>
 
<script type="text/javascript">
export default {
  data () {
    return {
      author: "田野"
    }
  }
}
</script>
 
<style>
</style>