import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';


function IndexScreen() {

  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>IndexScreen.</Text>
      <Button title="Add blog post" onPress={addBlogPost}/>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default IndexScreen;