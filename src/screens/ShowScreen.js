import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

function ShowScreen({ navigation }) {
  let id = navigation.getParam('id');
  let { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
 
  return (
    <View>
      <Text>{id}</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
      <MaterialIcons name="edit" size={30} style={{marginRight: 10}} />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({

});

export default ShowScreen;