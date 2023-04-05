//Register Ui
import React , {useState} from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";

import Bottomtabs from "../Component/Bottomtabs";




const Login = ({ navigation  }) => {
  const [forget, setforget] = useState(true)
  return (
    <View style={styles.login9RegisterMobile}>


      <Image
        style={styles.yourLogoText}
        resizeMode="cover"
        source={require("../Images/logo1.png")}
      />


      <View style={styles.frameView}>
        <View style={styles.groupView1}>
        <Text style={styles.signUpText}>LOGIN</Text>

         
          
        
        </View>
        <View style={[styles.groupView2, styles.mt47]}>
          <Text style={styles.emailText}>Email</Text>
          <TextInput style={styles.enterYourEmailAddress}
            placeholder="Enter your email address"
            placeholderTextColor="#FFFFFF"
          // value="Enter Your Email Address"
          />
          <View style={styles.rectangleView} />
          <Image
            style={styles.message1Icon}
            resizeMode="cover"
          //  source={require("../assets/message-1.png")}
          />
        </View>
        <View style={[styles.groupView4, styles.mt47]}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.rectangleView1} />
          <View style={styles.groupView3}>
            <TextInput style={styles.enterYourPassword}
              placeholder="Enter your Password"
              placeholderTextColor="#FFFFFF"
            // value="Enter Your Email Address"
            />
            <Image
              style={styles.padlock1Icon}
              resizeMode="cover"
            //  source={require("../assets/padlock-1.png")}
            />
          </View>
          <Image
            style={styles.invisible1Icon}
            resizeMode="cover"
          // source={require("../assets/invisible-1.png")}
          />
        </View>
        <View style={[styles.groupView5, styles.mt47]}>
          <View style={styles.rectangleView2} />
          <TouchableOpacity
           // style={styles.registerText}
            onPress={() => {
              navigation.navigate("Bottomtabs");
              // <Bottomtabs/>
            }
            }
          >         
              <Text style={styles.registerText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />

      <TouchableOpacity
            style={styles.youCanLoginHere}

            onPress={() => {
              navigation.navigate("Signupforget"  , {
                flag : false
             });
            }
            }
          >
             <View style={styles.groupView}>
            {/* <Text style={styles.youCanLoginHere}> */}
              <Text style={styles.loginHere}>Signup here !</Text>

            {/* </Text> */}
            </View>
          </TouchableOpacity>

       {/* //forget */}
          <TouchableOpacity
            style={styles.youCanforgetLoginHere}

            onPress={() => {
              navigation.navigate("Signupforget" , {
                 flag : forget
              });
            }
            }
          >
             <View style={styles.groupView}>
            {/* <Text style={styles.youCanLoginHere}> */}
              <Text style={styles.loginHere}>Forget Pass ?</Text>

            {/* </Text> */}
            </View>
          </TouchableOpacity>

    </View>
    
  );
};


const styles = StyleSheet.create({
  mt47: {
    marginTop: 47,
  },
  yourLogoText: {
    position: "absolute",
    top: 15,
    left: 45,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  signUpText: {
    position: "absolute",
    top: 0,
    left: -5,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 115.04,
  },
  ifYouAlreadyHaveAnAccount: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 341,
  },
  youCan: {
    fontFamily: "Poppins",
    color: "#fff",
  },
  loginHere: {
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#FFFFFF",
  },
  youCanforgetLoginHere: {
    position: "relative",
    top: 100,
    left: 230,
    fontSize: 18,
    textAlign: "left",
    width: 316.35,
  },
  youCanLoginHere: {
    position: "relative",
    top: 200,
    left: 230,
    fontSize: 18,
    textAlign: "left",
    width: 316.35,
  },
  groupView: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 341,
    height: 54,
  },
  groupView1: {
    position: "relative",
    width: 341,
    height: 121,
    flexShrink: 0,
  },
  emailText: {
    position: "absolute",
    height: "31.25%",
    width: "11.28%",
    top: "0%",
    right: "88.72%",
    bottom: "68.75%",
    left: "0%",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  enterYourEmailAddress: {
    position: "absolute",
    height: "60.5%",
    width: "62.33%",
    top: "40.44%",
    right: "31.37%",
    bottom: "14.06%",
    left: "9.29%",
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    height: "3.13%",
    width: "100%",
    top: "96.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#FFFFFF",
  },
  message1Icon: {
    position: "absolute",
    height: "26.56%",
    width: "3.96%",
    top: "54.69%",
    right: "96.04%",
    bottom: "18.75%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "relative",
    width: 319.26,
    height: 64,
    top: -40,
    flexShrink: 0,
  },
  passwordText: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 89,
  },
  rectangleView1: {
    position: "absolute",
    top: 62,
    left: 0.74,
    backgroundColor: "#fff",
    width: 319.26,
    height: 2,
  },
  enterYourPassword: {
    position: "absolute",
    top: -20,
    left: 29.23,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 150.77,
  },
  padlock1Icon: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 17.75,
    height: 17,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 32,
    left: 0,
    width: 166,
    height: 20,
  },
  invisible1Icon: {
    position: "absolute",
    top: 39,
    left: 305,
    width: 15,
    height: 14,
    overflow: "hidden",
  },
  groupView4: {
    position: "relative",
    width: 320,
    height: 64,
    top: -65,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 32,
    backgroundColor: "#262dd0",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 26,
    elevation: 26,
    shadowOpacity: 1,
    width: 319.26,
    height: 53,
  },
  registerText: {
    position: "absolute",
    top: 12,
    left: 127.26,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 60,
  },
  groupView5: {
    position: "relative",
    width: 319.26,
    height: 53,
    top: -70,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 165,
    left: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView3: {
    position: "relative",
    top: -200.88,
    left: 150,
    borderRadius: 48,
    backgroundColor: "rgba(218, 216, 216, 0.3)",
    width: 316,
    height: 284,
    transform: [
      {
        rotate: "-42.17deg",
      },
    ],
  },
  rectangleView4: {
    position: "absolute",
    top: 40.02,
    left: -230,
    borderRadius: 48,
    backgroundColor: "rgba(218, 216, 216, 0.3)",
    width: 316,
    height: 284,
    transform: [
      {
        rotate: "-38.11deg",
      },
    ],
  },
  login9RegisterMobile: {
    position: "relative",
    backgroundColor: "#1a20b0",
    flex: 1,
    width: "100%",
    height: 876,
    overflow: "hidden",
  },
});


export default Login;