<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h1 v-text="msg"></h1>
    <h1 v-html="msgH"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="[liClass,{finished:item.isFinished}]" v-on:click="toggleFinished(item)">
        {{item.lable}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Todo list',
      msgH: '<span>hello ty</span>',
      items:[],
      liClass:"thisisLiClass",
      newItem:""
    }
  },
  methods:{
    toggleFinished:function(item){
      item.isFinished = !item.isFinished;
    },
    addNew:function(){
      this.items.push({
        lable:this.newItem,
        isFinished:false
      })
      this.newItem = "";
    }
  }
}
</script>

<style>
.finished{
  text-decoration:underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
