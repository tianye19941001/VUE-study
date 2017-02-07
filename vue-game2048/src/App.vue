<template>
  <div id="app">
    <div class="ty_box">
      <ul v-for="num in numbers">
        <li>{{num}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      numbers: [1,2223,4,4,1,2223,4,4,1,2223,4,4,1,2223,4,4]
    }
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

.ty_box{
  width: 500px;
  height: 500px;
  margin:0 auto;
  background-color:#b8af9e;
  border-radius:5px;
}
.ty_box li{
  width: 100px;
  height: 100px;
  line-height:100px;
  font-size:30px;
  border-radius:10px;
  float: left;
  margin: 20px 0 0 20px;
  background-color:#ccc0b2;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
