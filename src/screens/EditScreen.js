import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen({ navigation }) {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');

  const selectedPost = state.find((post) => post.id === id);

  return (
    <BlogPostForm 
      initialValues={selectedPost}
      onSubmit={(title, content) => editBlogPost({title, content, id}, () => {
        navigation.pop();
      })}
    />
  )
}

const styles = StyleSheet.create({
});

export default EditScreen;