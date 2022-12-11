<template>
    <div>
      <h1>Programa</h1>
      <button @click="crearPrograma()">agregar</button>
      <table>
        <thead> 
          <h2>lista </h2>
          <tr>
            <th>programa </th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="programa in programas " :key="programa.id" >
            <td>{{ programa.nombre}}</td>
            <td> <button @click="actualizar(programa.id)">actualizar </button></td>
            <td> <button @click="eliminar(programa.id)">eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div> 
  </template>
  
  <script>
  import axios from 'axios'
  export default{ 
    name:'programa',
    data(){
        return{
          errors:[],
          programas:null,
        }
    },
    methods:{
      async getPrograma(){
        await axios.get("http://127.0.0.1:8000/api/programa/").then(response=>{
        this.programas = response.data
        })
      },
      crearPrograma(){
        this.$router.push("/crearRegional")
      },
      actualizar(id){
        this.$router.push('/ActualizarRegional/'+id)
      },
      async eliminar (id){
        await axios.delete("http://127.0.0.1:8000/api/programa/"+id+"/")
        await this.getPrograma()
      }  
    },   
    async mounted() {  
      await this.getPrograma()
      }, 
  }
  </script>