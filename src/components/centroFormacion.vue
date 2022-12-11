<template>
  <div>
    <h1>Centros de  Formacion</h1>
      <button @click="crearCentroFormacion()">agregar</button>
    <table>
      <thead>
        <h2>lista </h2>
        <tr>
          <th>nombre </th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="centroFormacion in centroFormacion" :key="centroFormacion.id" >
          <td>{{ centroFormacion.nombre}}</td>
          <td> <button @click="actualizar(centroFormacion.id)">actualizar</button></td>
          <td> <button @click="eliminar(centroFormacion.id)">eliminar</button></td>
        </tr>
      </tbody>
  </table>

  </div>
</template>

<script>
import axios from 'axios'
export default{ 
  name:'centroFormacion',
  data(){
      return{
        errors:[],
        centroFormacion:null
      }
  },
  methods:{
    async getCentroFormacion(){
      await axios.get("http://127.0.0.1:8000/api/centro/").then(response=>{
      this.centroFormacion= response.data
      })
    },
    crearCentroFormacion(){
      this.$router.push("/crearCentroFormacion")
    },
    actualizar(id){
      this.$router.push('/actualizarCentroFormacion/'+id)
    },
    async eliminar (id){
      await axios.delete("http://127.0.0.1:8000/api/centro/"+id+"/")
      await this.getCentroFormacion()
    }  
  },   
  async mounted() {  
    await this.getCentroFormacion()
    }, 
}
</script>