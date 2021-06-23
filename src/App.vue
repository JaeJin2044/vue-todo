<template>
  <div id="app">
    <div class="content-wrap">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름='현재컴포넌트의 메서드 명 '></TodoInput> -->
      <!-- <TodoList v-bind:내려보낼 프롭스 속성이름 = "현재 컴포넌트"></TodoList> -->
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
//   data : function(){
//     return{
//       todoItems : []
//     }
//   },
  methods : {
    // addOneItem(todoItem){
    //    // 저장하는 로직
    //     const obj = {completed : false, item : todoItem};
    //     localStorage.setItem(todoItem, JSON.stringify(obj));
    //     this.todoItems.push(obj);
    // },

    // removeOneItem(todoItem,index){
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index,1);
    // },

    // clearAllitem(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
   // vue 라이프 사이클 
  // 인스턴스 생성 하자마자 created -> mounted ->  updated -> destory
  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #f6f6f6;
}

input {
  border-style: groove;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
