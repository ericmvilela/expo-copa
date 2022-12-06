import React, {useState} from "react";
import {Dimensions, FlatList, Text, TouchableOpacity, View} from "react-native";
import {css} from "../css/css";

export default function ListaHorizontal(props)
{
    const {width} = Dimensions.get('window')
    const [selected, setSelected] = useState(props.inicial);

    const handleSelected = (value) => {
        setSelected(value);
        props.sendData(convertDateToAPI(value))
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={[css.dataLista, { backgroundColor: selected === item ? "#555": "#ccc"}]}
                onPress={() => handleSelected(item)}
            >
                <Text style={{textAlign: 'center'}}>{item}</Text>
            </TouchableOpacity>
        )
    };

    function convertDateToAPI(value)
    {
        let initial = value.split(/\//);
        return( [ initial[1], parseInt(initial[0], 10), initial[2] ].join('/'));
    }

    return(
        <FlatList
            data={props.data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item)}
            horizontal
            snapToOffsets={[...Array(props.data.length)].map((x, i) => i * (width*0.8 - 40) + (i-1) * 40)}
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate='fast'
            style={{marginTop: 10}}
            renderItem={renderItem}
        />
    )
}