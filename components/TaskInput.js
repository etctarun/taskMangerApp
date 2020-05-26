import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput, Modal } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask(" ");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Task"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTaskHandler} />
            {/* <Button title="ADD" onPress={props.onAddTask.bind(this, enteredTask)} /> */}
            {/* <Button title="ADD" onPress={() => props.onAddTask(enteredTask)} /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },

  button: {
    width: "40%",
  },
});

export default TaskInput;
