<template>
  <div>
    <h1>Rol</h1>
      <button @click="crearRol()">agregar</button>
    <table>
      <thead>
        <h2>lista </h2>
        <tr>
          <th>nombre </th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rol in rol " :key="rol.id" >
          <td>{{ rol.nombre}}</td>
          <td> <button @click="actualizar(rol.id)">actualizar</button></td>
          <td> <button @click="eliminar(rol.id)">eliminar</button></td>
        </tr>
      </tbody>
  </table>

  </div>
  
  
  
</template>

<script>
import axios from 'axios'
export default{ 
  name:'rol',
  data(){
      return{
        errors:[],
        rol:null,
      }
  },
  methods:{
    async getRol(){
      await axios.get("http://127.0.0.1:8000/api/rol/").then(response=>{
      this.rol= response.data
      })
    },
    crearRol(){
      this.$router.push("/crearRol")
    },
    actualizar(id){
      this.$router.push('/actualizarRol/'+id)
    },
    async eliminar (id){
      await axios.delete("http://127.0.0.1:8000/api/rol/"+id+"/")
      await this.getRol()
    }  
  },   
  async mounted() {  
    await this.getRol()
    }, 
}
</script>