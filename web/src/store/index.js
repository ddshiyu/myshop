import Vue from 'vue'
import Vuex from 'vuex'
import {addCart} from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    cart: [],
    sum: 0 // 结算价格
  },
  mutations: {
    addUsername (state, name) {
      state.username = name
    },
    addCart( state, {id}){
      const flag = state.cart.find(n => n.id === id)
      if(!flag){
        state.cart.push({
          id: id,
          num: 1
        })
      }else{
        flag.num ++
      }
    },
    fetchCart(state, {data}){
      state.cart = data
    },
    increaceCartNum(state,id){
      console.log(id)
      for(let key of state.cart){
        if(key._id === id){
          key.num ++
        }
      }
    },
    decreaceCartNum(state,id){
      for(let key of state.cart){
        if(key._id === id && key.num > 0){
          key.num --
        }
      }
    }
  },
  actions: {
    addUsername ({commit},name){
      commit('addUsername',name)
    },
    addCart ({commit}, item){
      //await addCart({user:localStorage.username,goods:item._id})
      commit('addCart', {id:item._id})
    },
    asyncFetchCart({commit},data){
      commit('fetchCart',{data})
    },
    asyncIncreaceCartNum({commit}, data){
      
    }
  },
  modules: {
  }
})
