import { Component, OnInit } from '@angular/core';

//cadastrando firebase
import { ListaprodutoService } from '../../listaproduto.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';

//cadastro
import { Produtol } from '../../produtol';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {


  produtol: Produtol
  key: string = '';

   id = null;

  constructor(public afAuth: AngularFireAuth,
    private listaprodutoService: ListaprodutoService, 
    private router: Router,
    private activeRouter: ActivatedRoute,) { }

//
ngOnInit() {
  this.produtol = new Produtol;
  this.id = this.activeRouter.snapshot.paramMap.get("id");
  if (this.id != null) {
    this.edit(this.id);
  } else {
    this.id = null;
  }
}
//edit
edit(key) {
  this.listaprodutoService.get(key)
}
//fim edit

  //ngOnInit(): void {
    //this.produtol = new Produtol();
    //this.listaprodutoService.currentListaproduto.subscribe(data => {
      //if (data.listaproduto && data.key) {
      //  this.produtol = new Produtol();
      //  this.produtol.nome = data.produtol.nome;
      //  this.produtol.descricao = data.produtol.confpws;
      //  this.key = data.key;
     // }
  //  })
  //}

  onSubmit(form) {
	this.listaprodutoService.save(this.produtol);
    	this.router.navigate(['/produtol']);

      this.produtol = new Produtol();
      
      //formulario 

      if (this.id == null) {
        this.listaprodutoService.save(this.produtol)
          .then(
            res => {
              alert(this.produtol.nome + ". Já tá salvo!");
              form.reset();
              this.produtol = new Produtol;
              this.router.navigate(['/produtol']);
            },
            err => {
              alert( "Ops!! Deu erro ao salvar!" + err);
            }
          )
      } else {
        this.listaprodutoService.update(this.id, this.produtol)
          .then(
            res => {
              this.id = null;
              alert(this.produtol.nome + ". Foi atualizado!");
              form.reset();
              this.produtol = new Produtol;
              this.router.navigate(['/produtol']);
            },
            err => {
              alert( "Ops!! Deu erro na atualização!" + err);
            }
          );
      }
      //fim formulario
  }

}
