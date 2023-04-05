import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import Headertabs from '../Component/Headertabs'
import Bottomtabs from '../Component/Bottomtabs'

const Home = () => {
  return (

    <View style={tw`bg-white flex-1`} >

      <View style={tw`mt-5`}>
        <Headertabs />
      </View>

      <LottieView style={tw`mt-10 self-center mb-7 h-44 `}
        source={require("../Images/12818-file-recover.json")}
        autoPlay
        loop={true}
        speed={0.5}
      />

      <View style={tw`flex-row justify-around `}>
        <View style={tw` flex-col `}>
          <LottieView style={tw`mt-10 h-40 `}
            source={require("../Images/8094-file-moving.json")}
            autoPlay
            loop={true}
            speed={0.5}
          />
          <Text style={tw`text-black left-12 `}>PICK-FILE</Text>
        </View>

        <View style={tw` flex-col justify-end right-5 `}>
          <LottieView style={tw`mt-4 h-24 `}
            source={require("../Images/7877-uploading-to-cloud.json")}
            autoPlay
            loop={true}
            speed={0.5}
          />
          <Text style={tw`text-black left-6 `}>UPLOAD-FILE</Text>
        </View>
      </View>

  
        {/* <Bottomtabs/> */}
        {/* <Bottomtabs/> */}
    </View>
  )
}

export default Home