import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  // computed의 역활, state를 사용
  getters: {
    allUsersCount: state  => {
      return state.allUsers.length
    },
    countOfSeoul: state => {
        let count = 0
        state.allUsers.forEach(user => {
          if(user.address === 'Seoul') count++
        })
        return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: {
    addUsers: (state,payload) => {
      state.allUsers.push(payload)
    }
  },
  actions: {
    // addUsers: context => {
    //   context.commit('addUsers')
    // }
    addUsers: ({ commit }, payload) => { // function(commit) feat. context
      commit('addUsers', payload)
    }
  }
})
