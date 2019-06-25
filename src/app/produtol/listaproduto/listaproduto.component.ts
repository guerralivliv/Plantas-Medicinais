import { Component, OnInit } from '@angular/core';

//produto
import { ListaprodutoService } from '../listaproduto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {

  private produtos: Observable<any>;

  constructor(
    private prodService: ListaprodutoService,
  ) { 
    this.produtos = this.prodService.getAll();   
  }

  ngOnInit() {
  }

}
