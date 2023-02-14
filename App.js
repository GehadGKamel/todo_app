import Home from "./components/Home";
import TaskInputField from "./components/TaskInputField";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCamera from "./components/CameraButton";
import MyContacts from "./components/MyContacts";
import MyBrowser from "./components/MyBrowser";
import MyMap from "./components/MyMap";
import ImagePickerExample from "./components/ImagePicker";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*tasks screen  */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*add task screen  */}
        <Stack.Screen
          name="Add Task"
          component={TaskInputField}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*pic an img Button  */}
        <Stack.Screen
          name="pic an img"
          component={ImagePickerExample}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*Camera Button  */}
        <Stack.Screen
          name="Camera"
          component={MyCamera}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*Contacts Button  */}
        <Stack.Screen
          name="Contacts"
          component={MyContacts}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*Map Button  */}
        <Stack.Screen
          name="MyMap"
          component={MyMap}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
        {/*Browser Button  */}
        <Stack.Screen
          name="MyBrowser"
          component={MyBrowser}
          options={{
            headerStyle: {
              backgroundColor: "#c7d2fe",
            },
            headerTintColor: "#57534e",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
