import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screen/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './Screen/Login'
import Signupforget from './Screen/Signupforget'
import Viewfiles from './Screen/Viewfiles'
import Bottomtabs from './Component/Bottomtabs'
//import Bottomtabs from './Component/Bottomtabs'

const Navigation = () => {
    const stack = createNativeStackNavigator();

    const screenoption = {
        headerShown: false,
    }

    return (
        <>
           <NavigationContainer>
                <stack.Navigator initialRouteName='Login' screenOptions={screenoption}>
                    <stack.Screen name="Bottomtabs" component={Bottomtabs} />
                    <stack.Screen name="Login" component={Login} />
                    <stack.Screen name="Signupforget" component={Signupforget} />
                </stack.Navigator>
                </NavigationContainer>
          
           
           
        </>

    )
}

export default Navigation;





// export  const Bottomtabs = () => {
//     const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Viewfiles" component={Viewfiles} />
//     </Tab.Navigator>
//     </NavigationContainer> 
//   );
// }
