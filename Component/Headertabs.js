import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'
import tw from 'twrnc';

const Headertabs = (props) => {
  const [Activetab, setActivetab] = useState("UPLOAD");
  return (
    <View
      style={
        tw
          `
    items-center
    flex-row
    justify-center
    
    `

      }
    >
      <Headerbutton 
      text="UPLOAD"  
      btncolor="black" 
      textcolor="white"
      activetab={Activetab}
      setactivetab={setActivetab}
      />
      
      <Headerbutton 
      text="MY-FILES"  
      btncolor="white" 
      textcolor="black"
      activetab={Activetab}
      setactivetab={setActivetab}
      />
    </View>


  )
}

const Headerbutton = (props) => (
  <TouchableOpacity
     style={     
      tw
        `
        bg-${props.activetab === props.text ? 'blue-700' : 'white' }
         pl-10
         rounded-2xl
        px-5
        py-1

       `
    }
    onPress={()=>props.setactivetab(props.text)}
  >

    <Text
      style={
        tw`
         text-${props.activetab === props.text ? 'white' : 'black'}
         font-semibold
         text-lg
         `
      } 
      
    >
      {props.text}

    </Text>


  </TouchableOpacity>

);
export default Headertabs