import * as C from '@chakra-ui/react'
import {useState} from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'


const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
             <h1> Cadastre seus Dados </h1>
        <C.Input type="email" placeholder="insira seu e-mail"/>
        <C.Input type="text" placeholder="insira seu nome"/>
        <C.Input type="text" placeholder="insira seu CPF"/>
        <C.Input type="text" placeholder="insira seu telefone"/>

        </C.VStack>
    )

}
export default FormPessoal