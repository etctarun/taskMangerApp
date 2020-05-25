import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [task, setTask] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = (TaskTitle) => {
    setTask((currentTask) => [
      ...currentTask,
      { id: Math.random().toString(), value: TaskTitle },
    ]);
    //setTask([...task, enteredText]);
    setIsAddMode(false);
  };

  const delTaskHandler = (TaskID) => {
    setTask((currentGoals) => {
      return currentGoals.filter((t) => t.id !== TaskID);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Task" onPress={() => setIsAddMode(true)} />
      <TaskInput visible={isAddMode} onAddTask={addTaskHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={task}
        renderItem={(itemData) => (
          <TaskItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={delTaskHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
