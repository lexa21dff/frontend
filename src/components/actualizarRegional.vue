<template>
  <div>
    <div>
      <h2>Actualizar Regional</h2>
      <label>id</label>
      <input type="text" v-model="regional.id"/>
      <label>regional</label>
      <input type="text" v-model="regional.nombre"/>
      <button @click="actualizar(regional.id)" type="submit">Guardar</button>
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
      regional:{
        id: null,
        nombre:null
      }
      
    }
  },
  methods:{
    async actualizar(id){
      await axios.put("http://127.0.0.1:8000/api/regional/"+id+"/",this.regional).then(response => {
        console.log(response)
        this.$router.push("/regional")
      });
    },
    async  cancelar() {
      this.$router.push("/regional")     
     }
    

  }, 
  async mounted(){   
    let id = this.$route.params.id
    await axios.get("http://127.0.0.1:8000/api/regional/"+id+"/").then(response=>{
        this.regional.id=response.data.id
        this.regional.nombre=response.data.nombre
        console.log(id)
    });

    },
}
</script>