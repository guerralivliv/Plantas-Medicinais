import { Component, OnInit } from '@angular/core';

//cadastrando firebase
import { ListaprodutoService } from '../../listaproduto.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';

//img
import { AngularFireStorage } from '@angular/fire/storage';

//cadastro
import { Produtol } from '../../produtol';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  private selectedFile: File = null;

  produtol: Produtol
  key: string = '';

  id = null;

  constructor(public afAuth: AngularFireAuth,
    private listaprodutoService: ListaprodutoService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private storage: AngularFireStorage) { }

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
            alert("Ops!! Deu erro ao salvar!" + err);
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
            alert("Ops!! Deu erro na atualização!" + err);
          }
        );
    }
    //fim formulario
  }

  //img 
  onFileSelected(event) {
    this.produtol.foto = event.target.files[0].name;
    this.selectedFile =  event.target.files[0];
    console.log(this.produtol);
  }

  onUpload() {
    const fd = new FormData();
    console.log(fd);
    //fd.append('image', this.selectedFile, this.selectedFile.name);
    //const file = event.target.files[0];
    const filePath = '/img/' + this.selectedFile.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(this.selectedFile);
  }
  //img 

}
