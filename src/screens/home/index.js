import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet, Image,  TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../../images/img2.jpg')}
            />
            <Text style={{fontSize:40,
                 color: '#3a026c',
                 marginTop: 90,
                 marginBottom: 50,}}>
            Caculadora de IMC
            </Text>
            <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('Imc')}
            >
                <Text 
                style={{color: '#FFF',
                        fontWeight: 'bold',
                        
                }}>Vamos calcular</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
        width:380,
        height:300
    },
    btn: {
        borderWidth:1,
        padding:10,
        borderRadius: 8,
        backgroundColor: '#3a026c'
    }
  });

export {Home}