<template>
    <div>
      <div>
        <h2>Tipo Revision</h2>
        <label>nombre</label>
        <input type="text" v-model="tipoRevision.nombre"/>
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
            tipoRevision:{
                nombre:null
            }  
        }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/tipo_revision/',this.tipoRevision)
        this.$router.push("/tipoRevision")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/tipoRevision")     
       }   
  
    },
  
  }
</script>