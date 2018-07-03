import Vue from 'vue'
import Vuex from 'vuex'
import './firebase'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    willdo:'',
    onProgress:'',
    done:''
  },
  mutations: {
    readWillDo(state,payload){
      state.willdo=payload
    },
    readOnProgress(state,payload){
      state.onProgress=payload
    },
    readDone(state,payload){
      state.done=payload
    }

  },
  actions: {
    getWilldo({commit},payload){
      firebase.database().ref('todo').child('/willdo').on("value",function(snapshot){
        var snapshotValue = Object.keys(snapshot.val()).slice(0,Object.keys(snapshot.val()).length-1)
        commit('readWillDo',snapshotValue)
      })
    },
    getOnProgress({commit},payload){
      firebase.database().ref('todo').child('/onprogress').on("value",function(snapshot){
        // console.log("INI SNAPSHOT .VAL",snapshot.val())
        var snapshotValue = Object.keys(snapshot.val()).slice(0,Object.keys(snapshot.val()).length-1)
          commit('readOnProgress',snapshotValue)
          // console.log("task",task)
        // }
      })
    },
    getDone:function({commit}){
      firebase.database().ref('todo').child('/done').on("value",function(snapshot){
          var snapshotValue = Object.keys(snapshot.val()).slice(0,Object.keys(snapshot.val()).length-1)
          commit('readDone',snapshotValue)
      })
    }

  }
})
