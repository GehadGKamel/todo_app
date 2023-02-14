import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TaskInputField({ route, navigation }) {
  const { addTask } = route.params;
  const [task, setTask] = useState({ text: "" });

  const handleAddTask = (value) => {
    if (task.text != "") {
      addTask(value);
    } else {
      alert("Task body is required");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your task Here... "
        onChangeText={(txt) => {
          setTask({ text: txt });
        }}
        value={task} />

      <View style={styles.Buttons}>
        <Button title="pic an img" color={"#c7d2fe"} onPress={() => { navigation.navigate("pic an img") }}></Button>
        <Button title="Camera" color={"#c7d2fe"} onPress={() => { navigation.navigate("Camera") }}></Button>
        <Button title="Contacts" color={"#c7d2fe"} onPress={() => { navigation.navigate("Contacts") }}></Button>
        <Button title="MyMap" color={"#c7d2fe"} onPress={() => { navigation.navigate("MyMap") }}></Button>
        <Button title="MyBrowser" color={"#c7d2fe"} onPress={() => { navigation.navigate("MyBrowser") }}></Button>
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log(task);
          setTask({ ...task });
          handleAddTask(task);
          navigation.navigate("Home");
        }}>

        <View style={styles.btn}>
          <MaterialIcons name="check" color="white" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  inputField: {
    width: "100%",
    borderWidth: 2,
    height: "30%",
    marginVertical: 20,
    padding: 8,
    borderRadius: 18,
    borderColor: "#a3a3a3",
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c7d2fe",
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 20
    ,
  },
  Buttons: {
    flex: 1,
    alignItems: "center",
    padding: 100,
    justifyContent: "space-between",
    backgroundColor: "white",
  }
});