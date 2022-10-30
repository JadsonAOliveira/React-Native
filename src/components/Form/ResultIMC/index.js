import React from "react"
import { View, Text } from "react-native"

/* As Props em React Native, são as propriedades que podemos passar de um componente para outro podendo ser utilizada
 internamente, seja para exibir ou aplicar alguma lógica própria do componente.
 
 Os States são valores que utilizamos em nossos componentes React que causam o efeito de renderização instantânea
 toda vez que o valor do State for alterado, isso da o efeito dinâmico e reativo para nossas aplicações.
 */

export default function ResultIMC(props){
    return(
        <View>
            <Text>{props.messageResultIMC}</Text>
            <Text>{props.resultIMC}</Text>       
        </View>
    )
}