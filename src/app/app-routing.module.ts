import { CadastrarCategoriaComponent } from "./components/views/categoria/cadastrar-categoria/cadastrar-categoria.component";
import { ListarCategoriaComponent } from "./components/views/categoria/listar-categoria/listar-categoria.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ListarCategoriaComponent,
  },
  //INICIO CADATRAR
  {
    path: "categoria/listar",
    component: ListarCategoriaComponent,
  },
  {
    path: "categoria/cadastrar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "categoria/deletar",
    component: ListarCategoriaComponent,
  },
  {
    path: "categoria/alterar",
    component: CadastrarCategoriaComponent,
  },
  //FIM CADATRAR
  //INICIO USUARIO
  {
    path: "usuario/listar",
    component: ListarCategoriaComponent,
  },
  {
    path: "usuario/cadastrar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "usuario/deletar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "usuario/alterar",
    component: CadastrarCategoriaComponent,
  },
  //FIM USUARIO
  //INICIO VAGA
  {
    path: "vaga/listar",
    component: ListarCategoriaComponent,
  },
  {
    path: "vaga/cadastrar",
    component: CadastrarCategoriaComponent,
  },
  {
    path: "vaga/deletar",
    component: ListarCategoriaComponent,
  },
  {
    path: "vaga/alterar",
    component: CadastrarCategoriaComponent,
  },
  //FIM VAGA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
