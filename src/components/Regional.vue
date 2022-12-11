<template>
  <div>
    <h1>Regional</h1>
    <button @click="crearRegional()">agregar </button>
    <table>
      <thead> 
        <h2>lista</h2>
        <tr>
          <th>nombre </th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="regional in regionales " :key="regional.id" >
          <td>{{ regional.nombre}}</td>
          <td> <button @click="actualizar(regional.id)">actualizar </button></td>
          <td> <button @click="eliminar(regional.id)">eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<script>
import axios from 'axios'
export default{ 
  name:'Regional',
  data(){
      return{
        errors:[],
        regionales:null,
      }
  },
  methods:{
    async getRegional(){
      await axios.get("http://127.0.0.1:8000/api/regional/").then(response=>{
      this.regionales = response.data
      })
    },
    crearRegional(){
      this.$router.push("/crearRegional")
    },
    actualizar(id){
      this.$router.push('/ActualizarRegional/'+id)
    },
    async eliminar (id){
      await axios.delete("http://127.0.0.1:8000/api/regional/"+id+"/")
      await this.getRegional()
    }  
  },   
  async mounted() {  
    await this.getRegional()
    }, 
}
</script>