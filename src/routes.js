import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from "./pages/main";
import Register from "./pages/register";
import Login from "./pages/login";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    }
  },{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerTintColor: "#d46f02",
      headerStyle: {
        backgroundColor: "#221f1f"
      }
    }
  }
);

const App = createAppContainer(RootStack);

export default App;