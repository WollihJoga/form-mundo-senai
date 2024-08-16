import * as C from '@chakra-ui/react'
import {useState} from 'react'
import estadosBrasil from '../Components/estadosBrasil'


const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
            <h1> Cadastre seu endereço </h1>
        <C.Input type="text" placeholder="insira seu Cep"/>
        <C.Input type="text" placeholder="insira seu Bairro "/>
        <estadosBrasil/>
        </C.VStack>
    )

}
export default FormEndereco