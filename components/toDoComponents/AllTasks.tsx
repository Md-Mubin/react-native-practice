import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

type Props = {
  allTasks?: any;
}

export default function AllTasks({ allTasks }: Props) {
  return (
    <FlatList
      data={allTasks}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item }) => (
        <Text style={styles.allTasksStyles}>
          {item}
        </Text>
      )}
      contentContainerStyle={styles.allTasksBody} />
  )
}

const styles = StyleSheet.create({
  allTasksBody: {
    gap: 20
  },

  allTasksStyles: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ccdbe0ff",
    fontSize: 18,
    fontWeight: "400",
    borderRadius: 8,
    overflow: "hidden"
  }
})