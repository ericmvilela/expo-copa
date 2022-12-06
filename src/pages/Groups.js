import {Image, ScrollView, Text, View} from "react-native";
import {css} from "../../assets/css/css";
import {useEffect, useState} from "react";
import Grupo from "../../assets/Components/Grupo";
import {ActivityIndicator} from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay/src";
import axios from "axios";
import config from "../../config/config.json";

export default function Groups()
{
    const [grupos, setGrupos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false)

    async function formAxios()
    {
        try {
            let response = await axios({
                method: 'get',
                url: 'http://api.cup2022.ir/api/v1/standings',
                timeout: 10000, // only wait for 10s
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.token
                }
            })
            let json = await response.data
            setGrupos(json.data)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            setErro(true)
        }
    }

    useEffect(()=> {
        setLoading(true);
        formAxios();
    },[]);

    return(
        <View style={css.container}>
            <Spinner
                visible={loading}
                textContent={'Carregando...'}
                customIndicator={<ActivityIndicator size="medium" color="#4D8B31"/>}
                textStyle={{color: '#e0e0e0'}}
            />
            <ScrollView style={css.scrollGroups} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                {erro &&
                    <View style={css.error}>
                        <Image source={{ uri: 'https://http.cat/504.jpg'}} style={css.errorImage} />
                        <Text style={css.errorText}>Ocorreu um erro tente novamente mais tarde</Text>
                    </View>
                }
                {grupos !== null && grupos.map((e) => {
                    return <Grupo key={e._id} times={e.teams} idGrupo={e.group}/>;
                })}
            </ScrollView>
        </View>
    )
}