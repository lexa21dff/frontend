<template>
    <div>
      <div>
        <h2>Ficha</h2>
        <label>codigo</label>
        <input type="number" v-model="ficha.codigo"/>
        <label>Fecha inicio</label>
        <input type="date" v-model="ficha.fecha_inicio"/>
        <label>Fecha finalizacion</label>
        <input type="date" v-model="ficha.fecha_finalizacion"/>
        <button @click="crear()" type="submit">Guardar</button>
        <button @click="cancelar()" type="submit">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  
  import axios from 'axios' 
  export default{
    name: 'crear',
    data(){
      return{
        errors: [],
        ficha:{
            codigo: null,
            fecha_inicio: null,
            fecha_finalizacion: null
        }  
      }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/ficha/',this.ficha) 
        this.$router.push("/ficha")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/ficha")     
       }   
  
    },
  
  }
</script>