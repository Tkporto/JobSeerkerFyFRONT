import { Categoria } from "src/app/models/categoria";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastrar-categoria",
  templateUrl: "./cadastrar-categoria.component.html",
  styleUrls: ["./cadastrar-categoria.component.css"],
})
export class CadastrarCategoriaComponent implements OnInit {
  nome!: string;
  piso!: number;
  teto!: number;
  descricao!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    this.router.navigate([""]);
  }
}
