import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7f50',
    },
    UserImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#008D85',
        width: 170,
        height: 170,
        borderRadius: 100,
        marginBottom: 54,
        marginTop: 60,
    },
    Image: {
        width: 360,
        height: 360,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,       
    },
    inputPassword: {
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    buttonForm: {
        backgroundColor: '#00229A',
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    ButtonCreate: {
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 18,
    }
})