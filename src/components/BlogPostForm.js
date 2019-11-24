import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'; 

function BlogPostForm({onSubmit, initialValues}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput 
        style={styles.textInput} 
        value={title} 
        onChangeText={(text) => setTitle(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput 
        style={styles.textInput} 
        value={content} 
        onChangeText={(text) => setContent(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TouchableOpacity 
        style={styles.createBtn}
        onPress={() => onSubmit(title, content)}>
        <Text style={styles.createBtnText}>Save Blog Post</Text>
      </TouchableOpacity> 
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

const styles = StyleSheet.create({
  createBtn: {
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    color: 'white',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  createBtnText: {
    fontSize: 20,
    color: 'white',
  }, 
  container: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'darkgrey',
    padding: 10,
  }
});

export default BlogPostForm;