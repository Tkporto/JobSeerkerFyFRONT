import { Categoria } from "src/app/models/categoria";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriaService } from "src/app/services/categoria.service";

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

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let categoria: Categoria = {
      nome: this.nome,
      piso: this.piso,
      teto: this.teto,
      descricao: this.descricao,
    };
    this.service.create(categoria).subscribe((categoria) => {
      console.log(categoria);
      this.router.navigate(["catergoria/listar"]);
    });
  }
}
