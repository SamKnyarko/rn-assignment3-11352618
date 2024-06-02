import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    marginVertical: 5,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;
