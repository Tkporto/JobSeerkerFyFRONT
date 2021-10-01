import { Component, OnInit } from "@angular/core";
import { Vaga } from "src/app/models/vaga";
import { VagaService } from "src/app/services/vaga.service";

@Component({
  selector: "app-listar-vaga",
  templateUrl: "./listar-vaga.component.html",
  styleUrls: ["./listar-vaga.component.css"],
})
export class ListarVagaComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private service: VagaService) {}

  ngOnInit(): void {
    this.service.list().subscribe((vagas) => {
      this.vagas = vagas;
      for (let vaga of vagas) {
        console.log(vaga);
      }
    });
  }
}
