import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import './Cadastro.css'
import { useLocation, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
 
const Alterar = () => {
 
    const {produto} = useLocation().state;
    const [dados, setDados] = useState({})
    const [clicou, setClicou] = useState(false)
    const [navegar, setNavegar] = useState(false)
 
    useEffect(()=>{
        if(clicou){
            setNavegar(true)
        }
       
        return () =>{
            setNavegar(false)
            setClicou(false)
        }
    }, [clicou])
 
    function enviarDados(){
        axios.put("http://localhost:8080/tecnico",
            dados
        ).then(response => console.log(response))
        .then(dados => {
            alert('Dados alterados com sucesso');
           
        })
        .catch(error => console.log(error))
    }
    
   
    useEffect(()=>{
        if (clicou) {
            enviarDados()
            setNavegar(true)
        }
        else {
            console.log('app no ar')
        }
       return (()=>{
            setClicou(false);
            setNavegar(false);
        })
    }, [clicou])

    const dadosMostrados = (e) => {
        e.preventDefault()
        console.log(dados)
    }
   
    return (
    <div>
        <h1>Alterar Tecnico</h1>
        <Formik
            initialValues={{
                id: produto.id,
                nome: produto.nome,
                email: produto.email,
                telefone: produto.telefone,
                cnpj: produto.cnpj,
                especialidade: produto.especialidade,
                dataNascimento: produto.dataNascimento,
                estado: produto.estado,
                cidade: produto.cidade,
                bairro: produto.bairro,
                rua: produto.rua,
                casa: produto.casa,
                complemento: produto.complemento
            }}
            onSubmit={(values, actions) => {
 
                if(values.nome.length > 0){
                        setTimeout(() => {
                        setDados({
                            id: values.id,
                            nome: values.nome,
                            email: values.email,
                            telefone: values.telefone,
                            cnpj: values.cnpj,
                            especialidade: values.especialidade,
                            dataNascimento: values.dataNascimento,
                            estado: values.estado,
                            cidade: values.cidade,
                            bairro: values.bairro,
                            rua: values.rua,
                            casa: values.casa,
                            complemento: values.complemento
 
                        })
                        setClicou(true)
                    }, 1000);
                } else {
                    alert('Favor preencher informações!')
                }
               
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                     <div>
                        <input
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.id}
                            placeholder='0'
                            name="id"
                            disabled
                        />
                        {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                    </div>
 
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.nome}
                            placeholder="Nome do Tecnico"
                            name="nome"
                        />
                        {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                    </div>
 
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.descricao}
                            name="email"
                            placeholder="@gmail.com"
                        />
                        {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.telefone}
                            name="telefone"
                            placeholder="(11)11111111"
                        />
                        {props.errors.telefone && <div id="feedback">{props.errors.telefone}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.cnpj}
                            name="cnpj"
                            placeholder="CNPJ"
                        />
                        {props.errors.cnpj && <div id="feedback">{props.errors.cnpj}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.especialidade}
                            name="especialidade"
                            placeholder="especialidade"
                        />
                        {props.errors.especialidade && <div id="feedback">{props.errors.especialidade}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.dataNascimento}
                            name="dataNascimento"
                            placeholder="01/02/1998"
                        />
                        {props.errors.dataNascimento && <div id="feedback">{props.errors.dataNascimento}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.estado}
                            name="estado"
                            placeholder="São Paulo"
                        />
                        {props.errors.estado && <div id="feedback">{props.errors.estado}</div>}
                    </div>
                    <div>
                        <input
                        type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.cidade}
                            name="cidade"
                            placeholder="Barueri"
                        />
                           
                        {props.errors.cidade && <div id="feedback">{props.errors.cidade}</div>}
                    </div>
                    <div>
                        <input
                        type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.bairro}
                            name="bairro"
                            placeholder="Belval"
                        />
                           
                        {props.errors.bairro && <div id="feedback">{props.errors.bairro}</div>}
                    </div>
                    <div>
                        <input
                        type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.rua}
                            name="rua"
                            placeholder="Rua Marte"
                        />
                           
                        {props.errors.rua && <div id="feedback">{props.errors.rua}</div>}
                    </div>
                    <div>
                        <input
                        type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.casa}
                            name="casa"
                            placeholder="123"
                        />
                           
                        {props.errors.casa && <div id="feedback">{props.errors.casa}</div>}
                    </div>
                    <div>
                        <input
                        type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.complemento}
                            name="complemento"
                            placeholder="apto.3124"
                        />
                           
                        {props.errors.complemento && <div id="feedback">{props.errors.complemento}</div>}
                    </div>
                    {(navegar) ? <Navigate
                        to="/listagem"
                        replace={true}
                    /> : <></>}
 
                    <Button
                        variant="primary"
                        type="submit">ALTERAR</Button>
                        <button onClick={dadosMostrados}>Clicar</button>
                </form>
            )}
        </Formik>
    </div>
    );
}
 
export default Alterar