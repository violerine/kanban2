<template>
     <div class="board-item">
        <div class="board-item-content">
            <span>{{done}}</span><br>
               <button @click="moveToProgress(done)" class="button is-small">
                    <span class="icon is-small">
                        <i class="fas fa-angle-double-left"></i>
                    </span>
                </button>
                <button @click="deleteDone(done)" class="button is-small">
                    <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                    </span>
                </button>
        </div>
    </div>
</template>

<script>

import {Database}from  '../firebase'
export default {
    props:['done'],
    methods:{
        moveToProgress(val){
            // console.log("MOVE TO DONE WORK?")
            Database.ref('/todo').child('onprogress/'+val).set({status:"onprogress"})
            Database.ref('/todo').child('done/'+val).remove()
        },
        deleteDone(val){
            Database.ref('/todo').child('done/'+val).remove()
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