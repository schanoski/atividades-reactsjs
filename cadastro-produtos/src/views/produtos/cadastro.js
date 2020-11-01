import React from 'react';

import Card from '../../components/card'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

const estadoInicial  = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
    atualizando : false
} 

class CadastroProduto extends React.Component{

    state = estadoInicial;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) =>{
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo] : valor })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }
        try{
            this.service.salvar(produto);
            this.limpaCampo();
            this.setState({sucesso: true})
        }catch(erro){
            const errors = erro.errors
            this.setState({errors : errors}) 
        }
    }

    limpaCampo = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
        const sku = this.props.match.params.sku

        if(sku){
            const resultado = this
                .service
                .obterProdutos().filter(produto => produto.sku === sku)

            if(resultado.length === 1){
                const produtoEncontrado = resultado[0]
                this.setState({...produtoEncontrado, atualizando: true})
            }
        }
    }

    render(){
        return(
            <Card header={this.state.atualizando ? 'Atualização de Produto' : 'Cadastro de Produto'}>

                <form id="frmProduto" onSubmit={this.onSubmit}>
                    { this.state.sucesso &&


                        <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Enviado!</strong> Cadastrado com sucesso.
                        </div>
                    }

                    { this.state.errors.length > 0 &&

                        this.state.errors.map(msg =>{
                            return(
                                <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Ocorreu um erro!</strong>{msg}
                                </div>
                            )
                        })

                    }
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nome: *</label>
                                <input type="text" name="nome" onChange={this.onChange} value={this.state.nome} class="form-control" />
                            </div>

                            <div class="col-md-6">
                                <label>SKU: *</label>
                                <input type="text" name="sku" disabled={this.state.atualizando} onChange={this.onChange} value={this.state.sku} class="form-control" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Descrição: *</label>
                                    <textarea name="descricao" onChange={this.onChange} value={this.state.descricao} class="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <label>Preço: *</label>
                                <input type="text" name="preco" onChange={this.onChange} value={this.state.preco} class="form-control" />
                            </div>

                            <div class="col-md-6">
                                <label>Fornecedor: *</label>
                                <input type="text" name="fornecedor" onChange={this.onChange} value={this.state.fornecedor} class="form-control" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-1">
                                <button type="submit" class="btn btn-success">
                                    {this.state.atualizando ? 'Atualizar' : 'Salvar'}
                                </button>
                            </div>
                            <div class="col-md-1">
                                <button onClick={this.limpaCampo} class="btn btn-primary">Limpar</button>
                            </div>
                        </div>
                    </form>
            </Card>
        )
    }

}

export default withRouter(CadastroProduto);