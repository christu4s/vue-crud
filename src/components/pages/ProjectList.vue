<template>
    <layout-div>
          <div class="container">
              <h2 class="text-center mt-5 mb-3">Project Manager</h2>
              <div class="card">
                  <div class="card-header">
                      <router-link to="/create"
                          class="btn btn-outline-primary"
                          >Create New Project
                      </router-link>
                  </div>
                  <div class="card-body">
                    <button @click="increment">Count is: {{ count }}</button>
                      <div v-if="!dataCheck">
                        click again
                      </div>
                      <table class="table table-bordered" v-if="dataCheck">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th width="240px">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                               
                              <tr v-for="project in projects" :key="project.id">
                                  <td>{{project.name}}</td>
                                  <td>{{project.description}}</td>
                                  <td>
                                      <router-link :to="`/show/${project.id}`" class="btn btn-outline-info mx-1">Show</router-link>
                                      <router-link :to="`/edit/${project.id}`" class="btn btn-outline-success mx-1">Edit</router-link>
                                      <button 
                                          @click="handleDelete(project.id)"
                                          className="btn btn-outline-danger mx-1">
                                          Delete
                                      </button>
                                  </td>
                              </tr>
                                   
                          </tbody>
                      </table>
                      
                  
                      
                      <div class="box"><ul>
                        <li v-for="book in filteredBooks" :key="book.name">
                            {{ book.name }} {{ book.author }}

                        </li>
                      </ul></div>
                      <div class="box">
                        <input type="text" ref="name"/>
                        <button @click="clickButton">click button</button>
                      </div>
                      <div class="box"></div>
                      <div class="box" @mousemove="handleMouseMove">{{x }} , {{ y }}</div>
                     
                  </div>
              </div>
          </div>
      </layout-div>
  </template>
   
  <script>
  import axios from 'axios';
  import LayoutDiv from '../LayoutDiv.vue';
  import Swal from 'sweetalert2'

  
 
  export default {
    name: 'ProjectList',
    components: {
      LayoutDiv,
    },
    data() {
        
      return {
        projects:[],
        count:0,
        dataCheck:false,
        x:0,
        y:0,
        books:[{name:"christu", author:"antony"},
        {name:"das", author:"antony", isFil:false},
        {name:"sajin", author:"antony", isFil:true},
        {name:"jason", author:"christu", isFil:false},
        {name:"januz", author:"christu", isFil:true}]
      };
    },
    computed: {
         filteredBooks() {
            return this.books.filter((book)=>book.isFil)
         }   
    }
    ,
    created() {
      this.fetchProjectList();
    },
    methods: {
      fetchProjectList() {
        axios.get('/api/projects')
          .then(response => {
              this.projects = response.data;
              return response
          })
          .catch(error => {
            return error
          });
      },
      increment() {
        this.count++;
        this.dataCheck=!this.dataCheck;
      },
      handleMouseMove(e) {
       this.x=e.offsetX,
       this.y=e.offsetY
      },
      handleDelete(id){
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                  axios.delete(`/api/projects/${id}`)
                  .then( response => {
                      Swal.fire({
                          icon: 'success',
                          title: 'Project deleted successfully!',
                          showConfirmButton: false,
                          timer: 1500
                      })
                      this.fetchProjectList();
                      return response
                  })
                  .catch(error => {
                      Swal.fire({
                           icon: 'error',
                          title: 'An Error Occured!',
                          showConfirmButton: false,
                          timer: 1500
                      })
                      return error
                  });
              }
            })
      },
      clickButton() {
        console.log('hello '+this.$refs.name);
        this.$refs.name.focus();
      }
    },
  };
  </script>

<style>
.box {
    padding : 100px 0;
    margin:20px;
    background:#ddd;
    text-align: center;
    width:400px;
    display: inline-block;



}
</style>