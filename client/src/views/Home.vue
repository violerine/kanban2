<template>
  <div class="home">
    <Navbar/>
    <!-- <img src="../assets/logo.png"> -->
    <section class="hero is-info">
      <div class="hero-body">
          <div class="container">
              <div class="card">
                  <div class="card-content">
                      <div class="content">
                          <div class="control has-icons-left has-icons-right">
                              <input v-model="newTask" class="input is-large" type="search" placeholder="Write new task here :)" />
                              <span class="icon is-medium is-left">
                                <!-- <button class="button"> -->
                                  <i class="fa fa-plus"></i>
                                <!-- </button> -->
                              </span>
                          </div><br>
                          <!-- <span class="icon is-medium is-right"> -->
                                <button @click="addNewTask" class="button">
                                  <i class="fa fa-plus"></i> 
                                    Add New Task
                                </button>
                          <!-- </span> -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section><br><br>
    

    <div class="content">
        <section class="container">
        <div class="columns  is-centered" id="sectioncontainer">
            <div class="column is-narrow">
                <article class="message is-danger">
                    <div class="message-header">
                        <p>Will do</p>
                         <!-- <button class="delete" aria-label="delete"></button>  -->
                    </div>
                    <div class="message-body">
                        <EachTask v-for="(task,index) in willdo" :key=index :task=task></EachTask>
                    </div>
                </article>
            </div>
            <div class="column is-narrow">
                <article class="message is-success">
                    <div class="message-header">
                        <p>On Progress</p>  
                        <!-- <button class="delete" aria-label="delete"></button> -->
                    </div>
                    <div class="message-body">
                         <onProgress v-for="(progress,index) in onProgress" :key="index" :progress="progress"></onProgress>
                    </div>
                </article>
            </div>
            <div class="column is-narrow">
                <article class="message is-warning">
                    <div class="message-header">
                        <p>Done</p>
                    </div>
                    <div class="message-body">
                      <Done v-for="(done,index) in done" :key="index" :done="done"></Done>
                    </div>
                </article>
            </div>
        </div>
        </section>
        <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow"></div>
        </div>
        <!-- <footer>
        <div class="box cta">
            <div class="columns is-mobile is-centered">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                        <div class="tags has-addons"><a class="tag is-link" href="https://github.com/dansup/bulma-templates">Bulma Templates</a><span class="tag is-light">Daniel Supernault</span></div>
                    </div>
                    <div class="control">
                        <div class="tags has-addons"><a class="tag is-link">The source code is licensed</a><span class="tag is-light">MIT  <i class="fa fa-github"></i></span></div>
                    </div>
                </div>
            </div>
        </div>
        </footer> -->
        </div>



    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import '../firebase'
import firebase from 'firebase'
import EachTask from '@/components/EachTask.vue'
import onProgress from '@/components/OnProgress.vue'
import Done from '@/components/Done.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  data:function(){
    return{
      newTask:''
    }
  },
  computed:{
      ...mapState([
          'willdo',
          'onProgress',
          'done'
      ])
  },
  created:function(){
      this.getWilldo(),
      this.getOnProgress(),
      this.getDone()
  },
  components: {
    HelloWorld,
    Navbar,
    EachTask,
    onProgress,
    Done
  },
  methods:{
    ...mapActions([
        'getWilldo',
        'getOnProgress',
        'getDone'
    ]),
    addNewTask(){
    //    console.log("LENGTHNYA",this.newTask.length)
      firebase.database().ref('/todo').child('willdo/'+this.newTask).set({status:'will do this'})
      this.newTask=''
    },
    moveToOnProgress(){
        database.ref('/todo').child('onprogress/'+val).set({status:"on progress"})
        database.ref('/todo').child('willdo/'+val).remove()
        this.getWilldo()
        this.getOnProgress()
        this.getDone()
    }
  }
}
</script>

<style>
/* .message-body{
    max-width:500px;
    word-wrap:break-word;
} */
</style>

