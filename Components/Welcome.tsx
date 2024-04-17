import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

type WelcomeProps ={
  name:string,
  age:number,
  gender: boolean
}
export default function Welcome(props:WelcomeProps) {
  return (
    <View>
      <Text style={WelcomeStyle.welcome}>Welcome {props.name}</Text>
      <Text style={WelcomeStyle.welcome}>Your Age  {props.age}</Text>
      <Text style={WelcomeStyle.welcome}>Your gender are {props.gender ? "male" :"female"}</Text>

      
    </View>
  );
}

const WelcomeStyle = StyleSheet.create({
welcome :{
  color:"red"
}
})

