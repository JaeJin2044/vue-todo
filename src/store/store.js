import Vue from 'vue'
import Vuex from 'vuex'

//Vue.use vue의 플러그인 ... 
Vue.use(Vuex);

//Vuex 기술요소 
// state : 여러 컴포넌트에 공유되는 데이터 (data)
// getters : 연산된 state값을 접근하는 속성  (computed)
// mutations : state값을 변경하는 이벤트 로직 * 메서드 (methods)
// actions : 비동기 처리 로직을 선언하는 메서드 (aysnc methods)

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length ; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state : {
        todoItems : storage.fetch()
    },
    getters : {
        storedTodoItems(state){
            return state.todoItems;
        }
    },
    mutations :{
        addOneItem(state,todoItem){
            // 저장하는 로직
             const obj = {completed : false, item : todoItem};
             localStorage.setItem(todoItem, JSON.stringify(obj));
             state.todoItems.push(obj);
         },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        toggleOneItem(state,payload){
            //todoItem.completed = !todoItem.completed; 다시 올라갔다 내려가는거 좋지 않음..
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //localStorage의 저장소를 갱신
            //updated라는 api가 없기 때문에 삭제하고 다시 넣어줘야 할 수 밖에 없음 
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
         clearAllitem(state){
            localStorage.clear();
            state.todoItems = [];
        },


    }
});