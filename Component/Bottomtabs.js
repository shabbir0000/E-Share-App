import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Viewfiles from '../Screen/Viewfiles';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import tw from 'twrnc'
import Searchbooks from '../Screen/Searchbooks';
import Profile from "../Screen/Profile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  return (


    <Tab.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarStyle: Styles.tabBarStyle,
        tabBarActiveTintColor: "black",
        tabBarInActiveTintColor: "grey",
        // tabBarIcon: ({focused}) =>{
        // let iconname;
        // if (route.name === "Home1") {
        // iconname =  focused ? "home-outline" : "home-outline"
        // }  


        //   }
      })

      }
    //style={tw`border  h-28 w-96`}
    >
      <Tab.Screen name="Home1" component={Home}
        options={
          {
            tabBarIcon: () => (

              <MaterialCommunityIcons name="Home" size={22} color= "black"/>
            )
          }
        }
      />
      <Tab.Screen name="Viewfiles" component={Viewfiles} />
      <Tab.Screen name="Books" component={Searchbooks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

  );
}

export default Bottomtabs;

const Styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderRadius: 2,
    backgroundColor: "white",
    height: 50,
    borderBackgroundColor: "white",
    bordercolor: "grey",

  }
})