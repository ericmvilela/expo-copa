import {Image, ScrollView, Text, View} from "react-native";
import {css} from "../../assets/css/css";
import {useEffect, useState} from "react";
import Jogos from "../../assets/Components/Jogos";
import ListaHorizontal from "../../assets/Components/ListaHorizontal";
import Spinner from "react-native-loading-spinner-overlay/src";
import {ActivityIndicator} from 'react-native-paper'
import axios from "axios";
import config from '../../config/config.json'

export default function MatchDay()
{
    const [date, setDate] = useState('11/20/2022')
    const [jogos, setJogos] = useState(null)
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false)

    const datas = ['20/11/2022', '21/11/2022', '22/11/2022', '23/11/2022', '24/11/2022', '25/11/2022', '26/11/2022',
        '27/11/2022', '28/11/2022', '29/11/2022', '30/11/2022', '01/12/2022', '02/12/2022', '03/12/2022',
        '04/12/2022', '05/12/2022', '06/12/2022', '09/12/2022', '10/12/2022', '13/12/2022', '14/12/2022',
        '17/12/2022', '18/12/2022']

    async function formAxios()
    {
        try {
            let response = await axios({
                method: 'post',
                url: 'http://api.cup2022.ir/api/v1/bydate',
                timeout: 10000, // only wait for 10s
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.token
                },
                data: `{"date": "${date}"}`
            })
            let json = await response.data
            setJogos(json.data)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            setErro(true)
        }
    }

    function convertDateToBR(value)
    {
        let initial = value.split(/\//);
        return( [ initial[1], initial[0], initial[2] ].join('/'));
    }

    useEffect(()=> {
        setLoading(true);
        setJogos(null)
        formAxios();
    },[date]);

    return(
        <View style={css.container}>
            <ScrollView style={css.scrollGroups} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <ListaHorizontal data={datas} sendData={setDate} inicial={convertDateToBR(date)}/>
                <Spinner
                    visible={loading}
                    textContent={'Carregando...'}
                    customIndicator={<ActivityIndicator size="medium" color="#4D8B31"/>}
                    textStyle={{color: '#e0e0e0'}}
                />
                {erro &&
                    <View style={css.error}>
                        <Image source={{ uri: 'https://http.cat/504.jpg'}} style={css.errorImage} />
                        <Text style={css.errorText}>Ocorreu um erro tente novamente mais tarde</Text>
                    </View>
                }

                {jogos !== null && jogos.map((e, i) => {
                    return <Jogos key={i} chave={i} info={e}/>;
                })}
            </ScrollView>


        </View>
    )
}