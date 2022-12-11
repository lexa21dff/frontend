<template>
    <div>
      <div>
        <h2>Categoria</h2>
        <label>nombre</label>
        <input type="text" v-model="categoria.nombre"/>
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
            categoria:{
                nombre:null
            }  
        }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/categoria/',this.categoria)
        this.$router.push("/categoria")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/categoria")     
       }   
  
    },
  
  }
</script>