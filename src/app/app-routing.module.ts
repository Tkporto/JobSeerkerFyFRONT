import { CadastrarVagaComponent } from "./components/views/vaga/cadastrar-vaga/cadastrar-vaga.component";
import { ListarVagaComponent } from "./components/views/vaga/listar-vaga/listar-vaga.component";
import { AlterarUsuarioComponent } from "./components/views/usuario/alterar-usuario/alterar-usuario.component";
import { DeletarUsuarioComponent } from "./components/views/usuario/deletar-usuario/deletar-usuario.component";
import { CadastrarUsuarioComponent } from "./components/views/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { ListarUsuarioComponent } from "./components/views/usuario/listar-usuario/listar-usuario.component";
import { AlterarCategoriaComponent } from "./components/views/categoria/alterar-categoria/alterar-categoria.component";
import { DeletarCategoriaComponent } from "./components/views/categoria/deletar-categoria/deletar-categoria.component";
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
    component: DeletarCategoriaComponent,
  },
  {
    path: "categoria/alterar",
    component: AlterarCategoriaComponent,
  },
  //FIM CADATRAR
  //INICIO USUARIO
  {
    path: "usuario/listar",
    component: ListarUsuarioComponent,
  },
  {
    path: "usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "usuario/deletar",
    component: DeletarUsuarioComponent,
  },
  {
    path: "usuario/alterar",
    component: AlterarUsuarioComponent,
  },
  //FIM USUARIO
  //INICIO VAGA
  {
    path: "vaga/listar",
    component: ListarVagaComponent,
  },
  {
    path: "vaga/cadastrar",
    component: CadastrarVagaComponent,
  },
  {
    path: "vaga/deletar",
    component: DeletarUsuarioComponent,
  },
  {
    path: "vaga/alterar",
    component: AlterarUsuarioComponent,
  },
  //FIM VAGA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
