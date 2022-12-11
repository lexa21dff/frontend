<template>
    <div>
      <h1>Ficha</h1>
      <button @click="crearFicha()">agregar</button>
      <table>
        <thead>
          <h2>lista</h2>
          <tr>
            <th>Ficha </th>
            <th>Fecha Inicio</th>
            <th>Fecha Finalizacion </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ficha in fichas " :key="ficha.id" >
            <td>{{ ficha.codigo}}</td>
            <td>{{ ficha.fecha_inicio}}</td>
            <td>{{ ficha.fecha_finalizacion}}</td>
            <td> <button @click="actualizar(ficha.id)">actualizar</button></td>
            <td> <button @click="eliminarl(ficha.id)">eliminar</button></td>
          </tr>
        </tbody>
    </table>
  
    </div>
    
    
  </template>
  
<script>
import axios from 'axios'
export default{ 
  name:'ficha',
  data(){
      return{
        errors:[],
        fichas:null,
        programa:null
      }
  },
  methods:{
    async getFicha(){
      await axios.get("http://127.0.0.1:8000/api/ficha/").then(response=>{
      this.fichas= response.data
      })
    },
    crearFicha(){
      this.$router.push("/crearFicha")
    },
    actualizar(id){
      this.$router.push('/actualizarFicha/'+id)
    },
    async eliminar (id){
      await axios.delete("http://127.0.0.1:8000/api/ficha/"+id+"/")
      await this.getFicha()
    }  
  },   
  async mounted() {  
    await this.getFicha()
    }, 
}
</script>