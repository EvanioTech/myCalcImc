import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { Imc } from "../screens/Calculadora";

const Stack = createStackNavigator();


const Routes = () => {

    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home"
            component={Home}
            options={
                {headerShown: false}
            }
            />
            <Stack.Screen
            name="Imc"
            component={Imc}
            options={
                {headerShown: false}
            }/>
        </Stack.Navigator>
    )
}


export {Routes};