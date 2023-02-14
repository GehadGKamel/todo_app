import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { MaterialIcons } from "@expo/vector-icons";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Keyboard,
    ScrollView,
} from "react-native";


export default function Home({navigation}) {

    const [tasks, setTasks] = useState([]);
    const [checked, setChecked] = useState(false);

    const addTask = (task) => {
        if (task != null) {
            setTasks([...tasks, task]);
            Keyboard.dismiss();
        } else {
            alert("Task body is required");
        }
    };

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((val, idx) => idx != deleteIndex));
    };

    const finishTask = () => {
        setChecked(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#c7d2fe" />
            <ScrollView style={styles.taskContainer}>
                {tasks.map((task, idx) => {
                    return (
                        <View key={idx}>
                            <TaskItem
                                index={idx + 1}
                                task={task}
                                deleteTask={() => deleteTask(idx)}
                                finishTask={() => finishTask(idx)}
                            />
                            </View>
                    );
                })}
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add Task", { addTask });
                }}>
                <View style={styles.btn}>
                    <MaterialIcons name="add" color="white" size={22} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "whit",
        justifyContent: "center",
        alignItems: "center",
        padding:10,
    },
    taskContainer: {
        width: "100%",
        marginTop: 10,
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c7d2fe",
        width: 50,
        height: 50,
        borderRadius: 20,
        margin: 6,
        marginBottom:20,
    },
});