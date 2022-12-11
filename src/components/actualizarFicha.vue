<template>
  <div>
    <div>
      <h2>actualizar ficha</h2>
      <label>Ficha</label>
      <input type="text" v-model="ficha.codigo"/>
      <label>Fecha inicio</label>
      <input type="date" v-model="ficha.fecha_inicio"/>
      <label>Fecha finalizacion</label>
      <input type="date" v-model="ficha.fecha_finalizacion"/>
      <button @click="actualizar(ficha.id)" type="submit">Guardar</button>
      <button @click="cancelar()" type="submit">Cancelar</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios' 
export default{
  name: 'actualizar',
  data(){
    return{
      errors: [],
      ficha:{
        codigo: null,
        fecha_inicio: null,
        fecha_finalizacion: null,
        programa:null
      } 
    }
  },
  methods:{
    async actualizar(id){
      await axios.put("http://127.0.0.1:8000/api/ficha/"+id+"/",this.ficha).then(response => {
        console.log(response)
        this.$router.push("/ficha")
      });
    },
    async  cancelar() {
      this.$router.push("/ficha")     
     }
    

  }, 
  async mounted(){   
    let id = this.$route.params.id
    await axios.get("http://127.0.0.1:8000/api/ficha/"+id+"/").then(response=>{
        this.ficha.id=response.data.id
        this.ficha.codigo=response.data.codigo
        this.ficha.fecha_inicio=response.data.fecha_inicio
        this.ficha.fecha_finalizacion=response.data.fecha_finalizacion
        this.ficha.programa=response.data.programa
        console.log(id)
    });

    },
}
</script>