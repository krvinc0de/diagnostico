//import liraries
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native';

// create a component
const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image 
                    source={require('../../assets/logo.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.contenedorInputs}>
                <TextInput
                    style={styles.inputs}
                    placeholder='e-mail'
                    placeholderTextColor={'white'}
                    keyboardType='email-address'
                    selectTextOnFocus={true}
                    selectionColor={'yellow'}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='password'
                    placeholderTextColor={'white'}
                    keyboardType="default"
                    secureTextEntry={true}
                    selectTextOnFocus={true}
                    selectionColor={'yellow'}
                />
                <TouchableOpacity
                    style={styles.botonIniciarSession}
                >
                    <Text style={styles.textoBoton}>Iniciar sesion</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorCrearCuenta}>
                <TouchableOpacity>
                    <Text style={styles.textCrearCuenta}>Crear una cuenta en xidoo rutas</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 30,
        paddingTop: 90
    },
    image: {
        width: 200,
        height: 200
    },
    contenedorInputs: {
        width: '100%',
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    inputs: {
        borderWidth: 0.5,
        backgroundColor: '#D9D9D9',
        width: '70%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#D9D9D9',
        padding: 10,
        fontSize: 15,
        color: 'white',
        elevation: 10
    },
    botonIniciarSession: {
        borderWidth: 0.2,
        backgroundColor: '#D9D9D9',
        width: 200,
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2C94C',
        elevation: 10
    },
    textoBoton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    contenedorCrearCuenta: {
        flex: 1, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 30,
    },
    textCrearCuenta: {
        color: '#F2C94C',
        elevation: 5
    }
});

//make this component available to the app
export default LoginScreen;
