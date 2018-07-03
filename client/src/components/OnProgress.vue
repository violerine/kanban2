<template>
     <div class="board-item">
        <div class="board-item-content">
            <span>{{progress}}</span><br>
                <button @click="moveToWilldo(progress)" class="button">
                    <span class="icon is-small">
                        <i class="fas fa-angle-double-left"></i>
                    </span>
                </button>
                <button  @click="moveToDone(progress)" class="button">
                    <span class="icon is-small">
                        <i class="fas fa-angle-double-right"></i>
                    </span>
                </button>
        </div>
    </div>
</template>


<script>

import {Database}from  '../firebase'
import { mapState, mapActions } from 'vuex'

export default {
    props:['progress'],
    methods:{
        moveToDone(val){
            // console.log("MOVE TO DONE WORK?")
            Database.ref('/todo').child('done/'+val).set({status:"done"})
            Database.ref('/todo').child('onprogress/'+val).remove()
        },
        moveToWilldo(val){
            Database.ref('/todo').child('willdo/'+val).set({status:"willdo"})
            Database.ref('/todo').child('onprogress/'+val).remove()
        }
    }
}

</script>



<style scoped>
.board-item {
  margin: 5px 0;
  will-change: transform;
}

.board-item-content {
  word-wrap: normal;
  position: relative;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  margin: 5px;
}
</style>