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
    increaceCartNum(state,{id}){
      for(let key of state.cart){
        if(key._id === id){
          key.num ++
        }
      }
    },
    decreaceCartNum(state,{id}){
      for(let key of state.cart){
        if(key._id === id && key.num > 0){
          key.num --
        }
      }
    },
    caculateSum(state,form){
      state.sum = 0
      for(let key of form){
        for(let s of state.cart){
          if(key === s._id){
            state.sum += parseInt(s.goods.price) * parseInt(s.num)
          }
        }
      }
    },
    deleteCart(state, id){
      state.cart.forEach( (item, i) => {
        if(item._id === id) {
          state.cart.splice(i, 1)
        }
      })
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
    asyncIncreaceCartNum({commit}, {id,form}){
      commit('increaceCartNum',{id})
      commit('caculateSum',form)
    },
    asyncDecreaceCartNum({commit}, {id,form}){
      commit('decreaceCartNum',{id})
      commit('caculateSum',form)
    },
  },
  modules: {
  }
})
