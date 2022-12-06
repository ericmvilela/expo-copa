import {View} from "react-native";
import React, {useEffect} from "react";
import {css} from "../css/css";
import EquipJogos from "./EquipJogos";

export default function Jogos(props)
{
    return(
        <View style={css.jogos}>
            <EquipJogos key={props.chave} info={props.info}/>
        </View>
    )
}