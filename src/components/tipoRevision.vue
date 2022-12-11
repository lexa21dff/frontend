<template>
    <div>
      <h1>Tipo de Revision</h1>
      <button @click="crearTipoRevision()">agregar</button>
      <table>
        <thead> 
          <h2>lista  </h2>
          <tr>
            <th>nombre </th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tipoRevision in tipoRevision " :key="tipoRevision.id" >
            <td>{{ tipoRevision.nombre}}</td>
            <td> <button @click="actualizar(tipoRevision.id)">actualizar </button></td>
            <td> <button @click="eliminar(tipoRevision.id)">eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div> 
  </template>
  
  <script>
  import axios from 'axios'
  export default{ 
    name:'tipoRevision',
    data(){
        return{
          errors:[],
          tipoRevision:null,
        }
    },
    methods:{
      async getTipoRevision(){
        await axios.get("http://127.0.0.1:8000/api/tipo_revision/").then(response=>{
        this.tipoRevision = response.data
        })
      },
      crearTipoRevision(){
        this.$router.push("/crearTipoRevision")
      },
      actualizar(id){
        this.$router.push('/ActualizarTipoRevision/'+id)
      },
      async eliminar (id){
        await axios.delete("http://127.0.0.1:8000/api/tipo_revision/"+id+"/")
        await this.getTipoRevision()
      }  
    },   
    async mounted() {  
      await this.getTipoRevision()
      }, 
  }
  </script>