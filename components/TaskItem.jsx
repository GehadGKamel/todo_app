import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const TaskItem = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={[styles.taskItem, isChecked ? styles.taskItemChecked : {}]}>

      <Text style={[styles.taskTitle, isChecked ? styles.taskTitleChecked : {}]}>
        Task {props.index}: {props.task.text}
      </Text>

      <TouchableOpacity onPress={handleCheck}>
        <MaterialIcons
          name={isChecked ? "check-box" : "check-box-outline-blank"}
          size={40}
          color="#a3a3a3" />
      </TouchableOpacity>

      <TouchableOpacity onPress={props.deleteTask}>
        <MaterialIcons name="delete" size={40} color="#a3a3a3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#fae8ff",
    borderRadius: 70,
  },
  taskTitle: {
    flex: 1,
    fontSize: 20,
    color: "#57534e",
  },
  taskItemChecked: {
    backgroundColor: "#dcfce7",
  },
  taskTitleChecked: {
    textDecorationLine: "line-through",
  },
});

export default TaskItem;