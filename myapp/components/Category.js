import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ title, image, tasks }) => {
  return (
    <View style={styles.categoryItem}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{title}</Text>
      <Text style={styles.categoryTasks}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
});

export default CategoryItem;

