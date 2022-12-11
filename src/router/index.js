import Vue from 'vue'
import VueRouter from 'vue-router'

import RolViews from '../views/rolViews.vue'

import RegionalViews from '../views/regionalViews.vue'
import CrearRegional from '@/components/crearRegional.vue'
import ActualizarRegional from '@/components/actualizarRegional.vue'

import CentroFormacionViews from '../views/centroFormacionViews'

import CategoriaViews from '@/views/categoriaViews'
import CrearCategoria from '@/components/crearCategoria.vue'
import ActualizarCategoria from '@/components/actualizarCategoria.vue'

import FichaViews from '@/views/fichaViews.vue'
import CrearFicha from '@/components/crearFicha.vue'
import ActualizarFicha from '@/components/actualizarFicha.vue'

import TipoRevisionViews from '../views/tipoRevisionViews.vue'
import CrearTipoRevision from '@/components/crearTipoRevision.vue'
import ActualizarTipoRevision from '@/components/actualizarTipoRevision.vue'


import ProgramaViews from '../views/programaViews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/rol',
    name: 'rol',
    component: RolViews
  },
  

  {
    path: '/regional',
    name: 'regional',
    component: RegionalViews
  },
  {
    path: '/crearRegional',
    name: 'crearRegional',
    component: CrearRegional
  },
  {
    path: '/actualizarRegional/:id',
    name: 'actualizarRegional',
    component: ActualizarRegional
  },

  {
    path: '/centroFormacion',
    name: 'centroFormacion',
    component: CentroFormacionViews
  },


  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaViews
  },
  {
    path: '/crearCategoria',
    name: 'crearcategoria',
    component: CrearCategoria
  },
  {
    path: '/actualizarCategoria/:id',
    name: 'actualizarCategoria',
    component: ActualizarCategoria
  },

  {
    path: '/ficha',
    name: 'ficha',
    component: FichaViews
  },
  {
    path: '/crearFicha',
    name: 'crearFicha',
    component: CrearFicha
  },
  {
    path: '/actualizarFicha/:id',
    name: 'actualizarFicha',
    component: ActualizarFicha
  },

  {
    path: '/tipoRevision',
    name: 'tipoRevision',
    component: TipoRevisionViews
  },
  {
    path: '/crearTipoRevision',
    name: 'crearTipoRevision',
    component: CrearTipoRevision
  },
  {
    path: '/actualizarTipoRevision/:id',
    name: 'actualizarTipoRevision',
    component: ActualizarTipoRevision
  },
  {
    path: '/programa',
    name: 'programa',
    component: ProgramaViews
  },
  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
