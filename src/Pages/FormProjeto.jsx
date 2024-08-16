import * as C from '@chakra-ui/react'
import {useState} from 'react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
             <h1> Cadastre seu Projeto </h1>
        <C.Input type="text" placeholder="insira seu Projeto"/>
        <C.Input type="text" placeholder="insira sua Área de atuação"/>
        <C.Input type="text" placeholder="insira sua Escola"/>
        <C.Input type="text" placeholder="insira seu Coordenador/Professor"/>
        </C.VStack>
    )

}

export default FormProjeto