import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CommonButton, CommonHeader, CommonInput } from '../reuseables'
import { useDispatch } from 'react-redux';
import { addTasks } from '@/store/Slices/TaskSlice';

export default function AddTask() {

  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (task.trim() === "") return
    dispatch(addTasks(task))
    setTask("")
  }

  return (
    <View style={addTaskStyles.addTaskBody}>

      <CommonHeader headerName='Add Task' />

      <View style={addTaskStyles.inputArea}>

        <CommonInput
          placeholder='. . . Your Task'
          value={task}
          onChangeText={(task: any) => setTask(task)}
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
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#919191"
  },

  inputArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20,
    marginTop: 10
  }
})