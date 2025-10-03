import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CommonButton, CommonHeader, CommonInput } from '../reuseables';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTaskSave, setTask } from '@/store/Slices/TaskSlice';
import { loadTasksFromStorage } from '@/utils/storage';
import Animated, { BounceIn, BounceInLeft, BounceOut, Layout, LightSpeedInLeft, LightSpeedInRight, LightSpeedOutRight } from 'react-native-reanimated'

export default function AllTasks() {

  const dispatch = useDispatch()

  const { allTaskArray } = useSelector((state: any) => state.tasks)
  const [editTask, setEditTask] = useState<{ id: string; tasks: string }>({
    id: '',
    tasks: ''
  })

  // =========== handle edit function
  const handleEdit = (editData: any) => {
    setEditTask(editData)
  }

  // =========== handle edit save function
  const handleEditSave = () => {
    if (editTask) {
      dispatch(editTaskSave(editTask))
      setEditTask({
        id: "",
        tasks: ""
      })
    }
  }

  // =========== handle delete function
  const handleDelete = (id: any) => {
    dispatch(deleteTask(id))
  }

  // =========== for rendering saved data in localstorage
  useEffect(() => {
    const fetchTask = async () => {
      const tasks = await loadTasksFromStorage();
      dispatch(setTask(tasks))
    }
    fetchTask()
  }, [dispatch])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 80 }}>
        {
          allTaskArray && allTaskArray.length > 0 && (
            <Animated.View
              entering={BounceIn.duration(300).delay(200)}
              exiting={BounceOut.duration(300).delay(400)}>
              <CommonHeader headerName='Your Tasks' extraStyle={{ marginBottom: 20, paddingTop: 20 }} />
            </Animated.View>
          )
        }
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={allTaskArray}
          removeClippedSubviews={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Animated.View
              entering={BounceInLeft.duration(500)}
              exiting={LightSpeedOutRight.duration(500)}
              layout={Layout.springify()}
              style={styles.allTasksStyles}>

              {/* input for edit tasks */}
              <CommonInput
                value={editTask.id === item.id ? editTask.tasks : item.tasks}
                onChangeText={(e: any) => {
                  if (editTask.id === item.id) setEditTask({ ...editTask, tasks: e });
                }}
                style={{ borderWidth: 0, outlineStyle: 'none' }}
              />

              <View style={{ flexDirection: 'row', gap: 20 }}>
                {/* edit and save button */}
                <CommonButton
                  onPress={editTask.id === item.id ? () => handleEditSave() : () => handleEdit(item)}
                  btnName={
                    editTask.id === item.id
                      ? <MaterialCommunityIcons name='content-save' size={20} color={"#00000088"} />
                      : <Entypo name="edit" size={20} color={'#00000088'} />}
                  styles={styles.commonBtnExtraDesign} />

                {/* delete button */}
                <CommonButton
                  onPress={() => handleDelete(item.id)}
                  btnName={<MaterialCommunityIcons name='delete' size={20} color={'#00000088'} />}
                  styles={styles.commonBtnExtraDesign} />
              </View>
            </Animated.View>
          )}
          contentContainerStyle={styles.allTasksBody} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  allTasksBody: {
    gap: 20
  },

  allTasksStyles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#ccdbe0ff",
    fontSize: 18,
    fontWeight: "400",
    borderRadius: 8,
    overflow: "hidden"
  },

  commonBtnExtraDesign: {
    paddingHorizontal: 10,
    backgroundColor: "transparent"
  }
})