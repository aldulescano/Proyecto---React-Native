//Menu tab de navegación de la Home//

//Importamos la estructura para poder realizar la navegacion
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home";

//Guardamos el navigator de Tab en una constante para poder utilizarla
const Tab = createBottomTabNavigator();


//Creamos el componente sin estado con las pestañas relacionadas en Home; Es el tab como Instagram abajo//
function HomeMenu(){

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ Home } />
        </Tab.Navigator>
    )

}

export default HomeMenu;