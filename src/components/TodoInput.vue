<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" v-on:click="addTodo()">
     <i class="fas fa-plus addBtn"></i>
    </span>
      <!-- slot: 특정 컴포넌트의 일부 UI를 재사용하는 기능 -->
      <Modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">경고!
              <!-- Modal이 사라지도록 -->
              <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
          </h3>
          <div slot="body">
            아무것도 입력하지 않았습니다.
          </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  //v-model input입력값을 동적으로 인스턴스에 매핑 해준다.
  data(){
    return {
      newTodoItem :"",
      showModal : false
    }
  },
  methods :{
    addTodo(){ 
      if(this.newTodoItem !== ''){
        //this.$emit('이벤트 이름', 인자1, 인자 2, ... )
        //this.$emit('addTodoItem',this.newTodoItem);
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',text);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
  clearInput(){
      this.newTodoItem = '';
    }
  },
  components: {
      Modal :Modal
  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background:white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 70%;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
}





</style>