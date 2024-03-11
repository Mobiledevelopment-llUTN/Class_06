import {StyleSheet} from 'react-native';
import COLORS from '../constants/colors'

// crea la hoja de estilos
export const styleCourses = StyleSheet.create({
    body: {
        margin: 7,
        padding: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.principal,
    },
    taskText: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
    btn_AddTask: {
        borderColor: COLORS.principal,
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_label: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    entries: {
        borderColor: COLORS.principal,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        width: '85%',
        height: 40,
    },
    row: {
       flexDirection: 'column',
       height: '57px',
       width: '34px',
    },
    titleBar: {
        backgroundColor: COLORS.principal,
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.naranja,
        textAlign: 'center',
    },
    titleSections: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'center',
    },
    list1:{
        backgroundColor: '#85c6d6',
    },
    list2:{
        backgroundColor: '#88eba6',
    },
});