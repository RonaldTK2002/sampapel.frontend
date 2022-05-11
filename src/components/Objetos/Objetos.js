import React from 'react'

function Objetos(){
    
        class ProdutoDestaque {
          constructor(nome, preço, imagem) {
            (this.nome = nome), (this.preço = `${preço},00 R$`);
            this.imagem = imagem;
          }
        }
        const produtosDestaque = [
          new ProdutoDestaque("Borracha Mercur", "2", "/images/borracha.png"),
          new ProdutoDestaque("Lápis", "3", "images/lapis.png"),
        ];

    }

export default Objetos