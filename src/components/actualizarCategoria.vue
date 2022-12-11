<template>
  <div>
    <div>
      <h2>Actualizar Categoria</h2>
      <label>Categoria</label>
      <input type="text" v-model="categoria.nombre"/>
      <button @click="actualizar(categoria.id)" type="submit">Guardar</button>
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
        categoria:{
          id:  null,
          nombre:null
        }
        
      }
  },
  methods:{
    async actualizar(id){
        await axios.put("http://127.0.0.1:8000/api/categoria/"+id+"/",this.categoria).then(response => {
            console.log(response)
            this.$router.push("/categoria")
        });
    },
    async  cancelar() {
      this.$router.push("/categoria")     
     }
    

  },
  async mounted(){  
    let id = this.$route.params.id
    await axios.get("http://127.0.0.1:8000/api/categoria/"+id+"/").then(response=>{
      this.categoria.id=response.data.id
      this.categoria.nombre=response.data.nombre
      console.log(id)
    });

    },
}
</script>