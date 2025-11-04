import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import ButtonExample from './src/components/ButtonExample';
import PressableExample from './src/components/PressableExample';
import TouchableOpacityExample from './src/components/TouchableOpacityExample';
import TouchableHighlightExample from './src/components/TouchableHighlightExample';
import TouchableWithoutFeedbackExample from './src/components/TouchableWithoutFeedbackExample';
import TouchableNativeFeedbackExample from './src/components/TouchableNativeFeedbackExample';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Evaluasi Hari ke-5: Gesture & Touch Handling</Text>
      <ButtonExample />
      <PressableExample />
      <TouchableOpacityExample />
      <TouchableHighlightExample />
      <TouchableWithoutFeedbackExample />
      <TouchableNativeFeedbackExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 15 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
});
