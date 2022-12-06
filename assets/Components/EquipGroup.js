import {Image, Text, View} from "react-native";
import React from "react";
import {css} from "../css/css";

export default function EquipGroup(props)
{
    return(
        <View style={css.equipes}>
            <View style={css.equipesNomeLogo}>
                <Image style={css.equipesLogo} source={{uri: props.infoTeam.flag}} />
                {props.pos <= 1 ?
                    <Text style={[css.equipesText, css.equipesClassificados]}>{props.infoTeam.name_en}</Text>:
                    <Text style={css.equipesText}>{props.infoTeam.name_en}</Text>
                }

            </View>
            <Text style={css.grupoInfo}>{props.infoTeam.pts}</Text>
            <Text style={css.grupoInfo}>{props.infoTeam.gf}</Text>
            <Text style={css.grupoInfo}>{props.infoTeam.ga}</Text>
            <Text style={css.grupoInfo}>{props.infoTeam.gd}</Text>
        </View>
    )
}