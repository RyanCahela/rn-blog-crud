import React, { useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Button, 
  TouchableHighlight,
  TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';


function IndexScreen({ navigation }) {

  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.flatList}
        data={state}
        keyExtractor={(blogPost) => String(blogPost.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id:item.id })}>
              <View style={styles.blogLiContainer}>
                <Text style={styles.blogTitle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome name="trash-o" style={styles.trashIcon}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}


IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <FontAwesome name="plus" size={28} style={{marginRight: 10}}/>
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  blogLiContainer: {
    borderTopWidth: 1,
    borderColor: 'grey', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  trashIcon: {
    fontSize: 24,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default IndexScreen;