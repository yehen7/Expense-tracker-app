import React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

 import HomeScreen from './screens/Home'

 const theme={
   ...DefaultTheme,
   color:{
     ...DefaultTheme.colors,
     border:"transparent"
   }
 }

 const Stack = createNativeStackNavigator();
 const App=()=>{
   
  return(
<NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
 }

 export default App;