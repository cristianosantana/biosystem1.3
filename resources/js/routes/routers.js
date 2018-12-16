/**
 * Configuração de rotas do app,
 * Vue.use(VueRouter), essa linha serve para vue reconhecer nossas rotas.
 * routes, array com todas as rotas que a app terá para usar os componentes.
 * router, objeto de VueRouter.
 * por ultimo exportar router
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'

import BranchesComponent from '../components/admin/pages/branches/BranchesComponent'
import FornecedorsComponent from '../components/admin/pages/fornecedors/FornecedorsComponent'
import MaterialsComponent from '../components/admin/pages/materials/MaterialsComponent'
import TipoMaterialsComponent from '../components/admin/pages/tipo_materials/TipoMaterialsComponent'
import FormaFarmaceuticasComponent from '../components/admin/pages/forma_farmaceuticas/FormaFarmaceuticasComponent'
import ClientesComponent from '../components/admin/pages/clientes/ClientesComponent'
import UsuariosComponent from '../components/admin/pages/usuarios/UsuariosComponent'
import SetorsComponent from '../components/admin/pages/setors/SetorsComponent'
import FormaPagtosComponent from '../components/admin/pages/forma_pagtos/FormaPagtosComponent'
import TipoMovimentosComponent from '../components/admin/pages/tipo_movimentos/TipoMovimentosComponent'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AdminComponent,
        children: [
            {path: 'admin', component: DashboardComponent, name: 'admin.dashboard'},

            {path: 'clientes', component: ClientesComponent, name: 'admin.clientes'},
            {path: 'usuarios', component: UsuariosComponent, name: 'admin.usuarios'},

            {path: 'branches', component: BranchesComponent, name: 'admin.branches'},
            {path: 'fornecedors', component: FornecedorsComponent, name: 'admin.fornecedors'},

            {path: 'materials', component: MaterialsComponent, name: 'admin.materials'},

            {path: 'setors', component: SetorsComponent, name: 'admin.setors'},
            {path: 'tipo_movimentos', component: TipoMovimentosComponent, name: 'admin.tipo_movimentos'},
            {path: 'tipo_materials', component: TipoMaterialsComponent, name: 'admin.tipo_materials'},
            {path: 'forma_pagtos', component: FormaPagtosComponent, name: 'admin.forma_pagtos'},
            {path: 'forma_farmaceutica', component: FormaFarmaceuticasComponent, name: 'admin.forma_farmaceuticas'}
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
