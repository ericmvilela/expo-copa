import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window')

export const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollGroups: {
        width: '100%',
    },
    grupo: {
        backgroundColor: '#1E212B',
        width: '85%',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10
    },
    grupoHeader: {
        borderColor: '#000',
        padding: 5,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',

    },
    grupoHeaderText: {
        color: '#E0E0E0',
        fontSize: 20,
        textAlign: "center",
    },
    equipes: {
        padding: 5,
        borderColor: '#000',
        borderBottomWidth: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    equipesText: {
        color: '#E0E0E0',
        fontSize: 16,
    },
    grupoHeaderTeam: {
        width: '50%',
        color: '#BBB',
        fontSize: 13,
    },
    grupoInfo: {
        width: '10%',
        textAlign: 'center',
        color: '#BBB',
        fontSize: 13,
    },
    equipesLogo: {
        width: 20,
        height: 12,
        marginRight: 5,
    },
    equipesNomeLogo: {
        flexDirection: "row",
        width: '50%',
        alignItems: "center",
    },
    equipesClassificados: {
        color: '#88d964'
    },
    jogos: {
        backgroundColor: '#1E212B',
        width: '85%',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    equipesJogo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    timeJogo: {
        alignItems: 'center',
        padding: 5,
        width: '40%',
    },
    jogoResultado: {
        width: '20%',
        alignItems: 'center'
    },
    jogoLogo: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 5
    },
    jogoResultadoText: {
        color: '#E0E0E0',
        fontSize: 25,
        fontWeight: 'bold'
    },
    timeJogoText: {
        color: '#E0E0E0',
        fontSize: 15
    },
    equipesJogoGols: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    gols: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 5,

    },
    timeGol: {
        justifyContent: "center",
        width: '42%'
    },
    golText: {
        flex: 1,
        fontSize: 14,
        marginLeft: 5,
        color: '#e0e0e0',
        alignSelf: 'center',
        textAlign: 'left',
    },
    dataLista: {
        borderColor: '#555',
        borderWidth: 1,
        height: 30,
        width: width *0.8 - 20,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    errorImage: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    error: {
        width: '90%',
        justifyContent: 'center',
        alignItems: "center",
        marginTop: height * 0.1
    },
    errorText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
    }
});