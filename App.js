
//Importamos lo necesario para la estructura
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//Importamos las screens//
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import HomeMenu from "./src/components/HomeMenu";

const Stack = createNativeStackNavigator();

function App() {
  return (
    //Plantear la navegación Stack de las screens existentes//
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="HomeMenu" component={ HomeMenu } />
        
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;