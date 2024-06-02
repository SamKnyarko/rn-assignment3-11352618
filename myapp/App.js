import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import CategoryItem from './components/Category';
import TaskItem from './components/Task';

const categories = [
  { id: '1', title: 'Exercise', image: require('./assets/young woman working online.png'), tasks: 12 },
  { id: '2', title: 'Study', image: require('./assets/young woman working at desk.png'), tasks: 12 },
  { id: '3', title: 'Code', image: require('./assets/images.jpg'), tasks: 12 },
  { id: '4', title: 'Cook', image: require('./assets/pngtree-chef-avatar-png-image_6514649.png'), tasks: 12 },
  { id: '5', title: 'Read', image: require('./assets/avatar-reading-a-book-online-education-and-development-elearning-gradient-style-icon-free-vector.jpg'), tasks: 12 },
  { id: '6', title: 'Meditate', image: require('./assets/avatar_aang_meditating__reworked__by_yondaimeminato4_ded8frs-fullview.jpg'), tasks: 12 },
  { id: '7', title: 'Music', image: require('./assets/f9bfa30a1d981a9f7ac06f8696b24893.jpg'), tasks: 12 },
  { id: '8', title: 'Travel', image: require('./assets/traveler-man-with-travel-bag-avatar-character-vector-24631713.jpg'), tasks: 12 },
];

const tasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'React Native Study',
  'Grocery Shopping',
  'Cook Dinner',
  'Read a Book',
  'Meditate for 10 minutes',
  'Write a Blog Post',
  'Plan a Trip',
  'Clean the House',
  'Watch a Tutorial',
  'Learn a New Language',
  'Practice Guitar',
  'Attend a Workshop',
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasksCount}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/istockphoto-1130884625-612x612.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image source={require('./assets/360_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg')} style={styles.filterImage} />
      </View>
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              title={category.title}
              image={category.image}
              tasks={category.tasks}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem task={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  tasksCount: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  filterImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  categories: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ongoingTasks: {
    marginBottom: 20,
  },
});

export default App;