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
  descricao!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    this.router.navigate([""]);
  }
}
