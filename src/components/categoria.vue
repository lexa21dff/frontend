<template>
    <div>
      <h1>categorias</h1>
      <button @click="crearCategoria()">agregar </button>
      <table>
        <thead>
          <h2>lista categorias</h2>
          <tr>
            <th>categoria</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias " :key="categoria.id" >
            <td>{{ categoria.nombre}}</td>
            <td> <button @click="actualizar(categoria.id)">actualizar {{categoria.id}} </button></td>
            <td> <button @click="eliminar(categoria.id)">eliminar</button></td>
          </tr>
        </tbody>
    </table>
  
    </div>
    
    
  </template>
  
  <script>
  import axios from 'axios'
  export default{ 
    name:'categoria',
    data(){
        return{
          errors:[],
          categorias:null,
        }
    },
    methods:{
      async getCategoria(){
        await axios.get("http://127.0.0.1:8000/api/categoria/").then(response=>{
        this.categorias = response.data
        })
      },
      crearCategoria(){
        this.$router.push("/crearCategoria")
      },
      actualizar(id){
        this.$router.push('/actualizarCategoria/'+id)
      },
      async eliminar (id){
        await axios.delete("http://127.0.0.1:8000/api/categoria/"+id+"/")
        await this.getCategoria()
      }  
    },   
    computed:{
    },
    components:{
        
    },
    async mounted() {  
      await this.getCategoria()
      },
  
    
  
  }
  </script>