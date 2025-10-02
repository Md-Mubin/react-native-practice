import React, { useState } from 'react'
import { StyleSheet,  Text,  View } from 'react-native'
import { CommonButton, CommonHeader, CommonInput } from '../reuseables'

type Props = {
  setAllTasks?: any;
}

export default function AddTask({ setAllTasks }: Props) {

  const [addTask, setAddTask] = useState('')

  const handleAddTask = () => {
    if (addTask.trim() === "") return
    setAllTasks((prev: any) => [...prev, addTask])
    setAddTask("")
  }

  return (
    <View style={addTaskStyles.addTaskBody}>

      <CommonHeader headerName='Add Task' />

      <View style={addTaskStyles.inputArea}>

        <CommonInput
          placeholder='. . . Your Task'
          value={addTask}
          onChangeText={(task: any) => setAddTask(task)}
        />

        <CommonButton
          btnName={"Add"}
          onPress={handleAddTask} />
      </View>
    </View>
  )
}

const addTaskStyles = StyleSheet.create({

  addTaskBody: {
    paddingVertical: 20
  },

  inputArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20,
    marginTop: 10
  }
})