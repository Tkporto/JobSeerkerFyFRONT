import { UsuarioService } from "./../../../../services/usuario.service";
import { Usuario } from "./../../../../models/usuario";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  sobrenome!: string;
  endereco!: string;
  descricao!: string;

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let usuario: Usuario = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      endereco: this.endereco,
      descricao: this.descricao,
    };
    this.service.create(usuario).subscribe((usuario) => {
      console.log(usuario);
      this.router.navigate(["usuario/listar"]);
    });
  }
}
