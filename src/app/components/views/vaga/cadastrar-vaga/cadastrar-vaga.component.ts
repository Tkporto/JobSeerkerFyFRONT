import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Vaga } from "src/app/models/vaga";
import { VagaService } from "src/app/services/vaga.service";

@Component({
  selector: "app-cadastrar-vaga",
  templateUrl: "./cadastrar-vaga.component.html",
  styleUrls: ["./cadastrar-vaga.component.css"],
})
export class CadastrarVagaComponent implements OnInit {
  nome!: string;
  descricao!: string;

  constructor(private service: VagaService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let vaga: Vaga = {
      nome: this.nome,
      descricao: this.descricao,
    };
    this.service.create(vaga).subscribe((vaga) => {
      console.log(vaga);
      this.router.navigate(["vaga/listar"]);
    });
  }
}
