import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit{

  constructor(private service: CategoriaService) { }
    
    ngOnInit(): void {
    this.service.list().subscribe(categorias => { console.log(categorias) });
  }
  
}
