import React, { useState } from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function quandoMuda(infosDoEvento) {
        setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
        );
    }

    return (
    <PageDefault> 
        <h1>Cadastro de Categoria: 
            {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
                ...categorias,
                values
            ]);

            setValues(valoresIniciais)
        }}>

            <FormField
                label="Nome da Categoria"
                type="text"
                name="nome"
                value={values.nome}
                onChange={quandoMuda}
            />

            <FormField
                label="Descrição"
                type="textarea"
                name="area"
                value={values.area}
                onChange={quandoMuda}
            />
            {/*<div>
                <label>
                    Descrição:
                    <textarea
                        type="text"
                        value={values.descricao}
                        name="descricao"
                        onChange={quandoMuda}
                    />
                </label>
            </div>*/}

            <FormField
                label="Cor"
                type="color"
                name="cor"
                value={values.cor}
                onChange={quandoMuda}
            />

            {/*<div>
                <label>
                    Cor:
                    <input
                        type="color"
                        value={values.cor}
                        name="cor"
                        onChange={quandoMuda}
                    />
                </label>
            </div>*/}
            <button>
                Cadastrar
            </button>
        </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        
        <Link to="/">
            Ir para home
        </Link>
    </PageDefault>
    )
}

export default CadastroCategoria;