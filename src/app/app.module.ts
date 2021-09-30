import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ListarCategoriaComponent } from './components/views/categoria/listar-categoria/listar-categoria.component';
import { CadastrarCategoriaComponent } from './components/views/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { DeletarCategoriaComponent } from './components/views/categoria/deletar-categoria/deletar-categoria.component';
import { AlterarCategoriaComponent } from './components/views/categoria/alterar-categoria/alterar-categoria.component';
import { AlterarUsuarioComponent } from './components/views/usuario/alterar-usuario/alterar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';
import { ListarVagaComponent } from './components/views/vaga/listar-vaga/listar-vaga.component';
import { DeletarVagaComponent } from './components/views/vaga/deletar-vaga/deletar-vaga.component';
import { AlterarVagaComponent } from './components/views/vaga/alterar-vaga/alterar-vaga.component';
import { CadastrarVagaComponent } from './components/views/vaga/cadastrar-vaga/cadastrar-vaga.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { DeletarUsuarioComponent } from './components/views/usuario/deletar-usuario/deletar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCategoriaComponent,
    CadastrarCategoriaComponent,
    DeletarCategoriaComponent,
    AlterarCategoriaComponent,
    AlterarUsuarioComponent,
    ListarUsuarioComponent,
    ListarVagaComponent,
    DeletarVagaComponent,
    AlterarVagaComponent,
    CadastrarVagaComponent,
    CadastrarUsuarioComponent,
    DeletarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
