import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput, Modal } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const inputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Task"
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredTask}
        />
        <Button title="ADD" onPress={props.onAddTask.bind(this, enteredTask)} />
        {/* <Button title="ADD" onPress={() => props.onAddTask(enteredTask)} /> */}
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
});

export default TaskInput;
