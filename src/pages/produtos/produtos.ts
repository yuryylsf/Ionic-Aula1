import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PRODUTOS } from '../../config/api.config';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  produtos: Produto[] = PRODUTOS;

  navProdutoDetalhe(produto : Produto){
    this.navCtrl.push('ProdutoDetalhePage', {produto : produto});
  }

}
