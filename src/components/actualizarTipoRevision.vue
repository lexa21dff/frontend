<template>
    <div>
      <div>
        <h2>Actualizar Tipo de Revision</h2>
        <label>nombre</label>
        <input type="text" v-model="tipoRevision.nombre"/>
        <button @click="actualizar(tipoRevision.id)" type="submit">Guardar</button>
        <button @click="cancelar()">Cancelar</button>
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
          tipoRevision:{
            id:  null,
            nombre:null
          }
          
        }
    },
    methods:{
      async actualizar(id){
          await axios.put("http://127.0.0.1:8000/api/tipo_revision/"+id+"/",this.tipoRevision).then(response => {
              console.log(response)
              this.$router.push("/tipoRevision")
          });
      },
      async  cancelar() {
        this.$router.push("/tipoRevision")     
       }
      
  
    },
    async mounted(){  
      let id = this.$route.params.id
      await axios.get("http://127.0.0.1:8000/api/tipo_revision/"+id+"/").then(response=>{
        this.tipoRevision.id=response.data.id
        this.tipoRevision.nombre=response.data.nombre
        console.log(id)
      });
  
      },
  }
  </script>