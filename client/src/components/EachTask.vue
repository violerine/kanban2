<template>
     <div class="board-item">
        <div class="board-item-content">
            <span>{{task}}</span><br>

                <button @click="moveToOnProgress(task)" class="button">
                  
                    <span class="icon is-small">
                        <i class="fas fa-angle-double-right"></i>
                    </span>
                </button>
        </div>
    </div>
</template>

<script>

import {Database}from  '../firebase'

export default {
    props:[
        'task'
    ],
    methods:{
        moveToOnProgress(task){
            Database.ref('/todo').child('onprogress/'+task).set({status:"on progress"})
            Database.ref('/todo').child('willdo/'+task).remove()
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
