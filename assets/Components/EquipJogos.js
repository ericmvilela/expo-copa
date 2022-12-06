import {Image, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {css} from "../css/css";
import {Ionicons} from "@expo/vector-icons";

export default function EquipJogos(props)
{
    const [golsCasa, setGolsCasa] = useState(null)
    const [golsFora, setGolsFora] = useState(null)

    useEffect(()=> {
        setGolsCasa(props.info.home_scorers[0].split(','))
        setGolsFora(props.info.away_scorers[0].split(','));
    },[]);

    return(
        <View>
            <View style={css.equipesJogo}>
                <View style={css.timeJogo}>
                    <Image style={css.jogoLogo} source={{uri: props.info.home_flag}} />
                    <Text style={css.timeJogoText}>{props.info.home_team_en}</Text>
                </View>

                <View style={css.jogoResultado}>
                    {props.info.time_elapsed !== 'notstarted'?
                        <Text style={css.jogoResultadoText}>{props.info.home_score} x {props.info.away_score}</Text>:
                        <Text style={css.jogoResultadoText}> x </Text>
                    }
                </View>

                <View style={css.timeJogo}>
                    <Image style={css.jogoLogo} source={{uri: props.info.away_flag}} />
                    <Text style={css.timeJogoText}>{props.info.away_team_en}</Text>
                </View>
            </View>

            <View style={css.equipesJogoGols}>
                <View style={[css.timeJogo, css.timeGol]}>
                    {golsCasa !== null && golsCasa.map((e) => {
                        if(e !== 'null')
                        {
                            return (
                                <View style={css.gols}>
                                    <Ionicons name="football" size={20} color="#E0E0E0" />
                                    <Text style={css.golText} numberOfLines={2}>{e.replace('\n', '')}</Text>
                                </View>
                            )
                        }
                    })}
                </View>


                <View style={[css.timeJogo, css.timeGol]}>
                    {golsFora !== null && golsFora.map((e) => {
                        if(e !== 'null')
                        {
                            return (
                                <View style={css.gols}>
                                    <Ionicons name="football" size={20} color="#E0E0E0" />
                                    <Text style={css.golText} numberOfLines={2}>{e.replace('\n', '')}</Text>
                                </View>
                            )
                        }
                    })}
                </View>
            </View>
        </View>

    )
}






