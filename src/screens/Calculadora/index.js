import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { View, Text, StyleSheet, Image,  TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Imc = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [resultado, setResultado] = useState(0);
    const [indice, setIndice] = useState([

        {
            id: 0,
            nome: 'Aguardando Informações...',
            descricao: 'Informe seu peso e altura.',
            
            
          },
        {
          id: 1,
          nome: 'Abaixo do normal',
          descricao: 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.',
          
          
        },{
          id: 2,
          nome: 'Normal',
          descricao: 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.',
          
        },
        {
          id: '3',
          nome: 'Sobrepeso',
          descricao: 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.',
          
        },
        {
          id: '4',
          nome: 'Obesidade grau I',
          descricao: 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.',
          
        },
        {
            id: 5,
            nome: 'Obesidade grau II',
            descricao: 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. ',
            
          },
          {
            id: 6,
            nome: 'Obesidade grau III',
            descricao: 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.',
            
          },
        
      
      ]);

      function calc () {
        let calculo = peso/(altura*altura);
        console.log(calculo);

        if (calculo <= 18.5) {
           setResultado(1); 
         }
         else if (calculo <= 24.9) {
           setResultado(2);
         } 
         else if ( calculo <= 29.9) {
           setResultado(3);
       
         }
         else if ( calculo <= 34.9) {
           setResultado(4);
       
         }
         else if ( calculo <= 39.9) {
           setResultado(5);
       
         }
         else if ( calculo >= 40) {
           setResultado(6);
       
         }else {
            alert('use ponto em vez de virgula e digite apenas numeros')
         }
   }

    
   const indiceEspecifico = indice.find((indice) => indice.id == resultado);


    
   return (
    <View  style={styles.container}>
        <View style={styles.viewCalc} >
            <Image
            style={styles.img}
            source={require('../../images/img.png')}
            />
            <Text>Peso:</Text>
            <TextInput
            style={styles.textInput}
            placeholder="informe seu peso, exemplo 85.5"
            value={peso} // Valor do TextInput controlado pelo estado
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
            />
            <Text>Altura:</Text>
            <TextInput
            style={styles.textInput}
            placeholder="informe sua Altura, exemplo 1.78"
            value={altura} // Valor do TextInput controlado pelo estado
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
            />
            <TouchableOpacity style={styles.btn} onPress={calc}>
                <Text style={{color: '#FFF'}}>Calcular</Text>
            </TouchableOpacity>
        </View>
      
   
        <View  style={styles.viewInfo}>
          <Text style={styles.textInfoTitle}> {indiceEspecifico.nome}</Text>
          <Text style={styles.textInfo}>Recomendação:  {indiceEspecifico.descricao}</Text>
          
        </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
        borderWidth:1,
        width: 350,
        borderRadius: 8,
        marginBottom: 20
    },
    viewInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:20
    },
    textInfoTitle:{
        fontSize:30,
        fontWeight: 'bold',
        marginBottom: 30
    }
    ,
    textInfo: {

        fontSize: 20,
    },
    img:{
      width:380,
      height:300
    },
    viewCalc: {
      alignItems: 'center'
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0bd4ec',
      padding: 10,
      borderRadius:8,
      width: 200
                      
    }

  });
  
export {Imc}