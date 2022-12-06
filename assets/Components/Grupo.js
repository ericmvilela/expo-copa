import {Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import EquipGroup from "./EquipGroup";
import {css} from "../css/css";

export default function Grupo(props)
{
    const [times, setTimes] = useState(null)

    useEffect(()=> {
        setTimes(props.times.sort((a,b)=> (b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)));
    },[]);

    return(
        <View style={css.grupo}>
            <Text style={css.grupoHeaderText}>Grupo {props.idGrupo}</Text>
            <View style={css.grupoHeader}>
                <Text style={css.grupoHeaderTeam}>Equipe</Text>
                <Text style={css.grupoInfo}>P</Text>
                <Text style={css.grupoInfo}>GP</Text>
                <Text style={css.grupoInfo}>GC</Text>
                <Text style={css.grupoInfo}>SG</Text>
            </View>
            {times !== null && times.map((e, i) => {
                return <EquipGroup key={e.team_id} infoTeam={e} pos={i} />
            })}
        </View>
    )
}