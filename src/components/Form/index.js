import React, { useState } from 'react'
import { View, Text, TextInput, Button } from "react-native"
import ResultIMC from './ResultIMC'

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
    const [IMC, setIMC]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")

    function IMCCalculator(){
        return setIMC((weight/(height*height)).toFixed(2)) //toFixed é usado pra retornar quantas casas decimais o dev escolher
    }

    function validationIMC(){
        if(weight != null && height != null){
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura")
    }

    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight} // onChangeText serve para alterar o estado do Input
                value={height}
                placeholder="Ex. 1.75"
                KeyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 95.456"
                KeyboardType="numeric"
                />
                <Button 
                onPress={() => validationIMC()}
                title={textButton}
                />
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC}/>
        </View>
    )
}