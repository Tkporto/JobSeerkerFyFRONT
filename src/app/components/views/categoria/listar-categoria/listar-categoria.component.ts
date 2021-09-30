import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
   categorias: Categoria[] = [];

    constructor(private service: CategoriaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((categorias) => {
            this.categorias = categorias;
            for (let categoria of categorias) {
                console.log(categoria);
            }
        });
    }

}
