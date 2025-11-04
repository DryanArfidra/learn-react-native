import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';

const TouchableWithoutFeedbackExample = () => {
  const handlePress = () => Alert.alert('Tanpa Feedback ditekan!');
  const handleLongPress = () => Alert.alert('Long Press Tanpa Feedback!');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={800}
        hitSlop={{ top: 20, bottom: 20 }}
        touchSoundDisabled={false}
      >
        <View style={styles.box}>
          <Text style={styles.text}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, alignItems: 'center' },
  box: { backgroundColor: '#999', padding: 15, borderRadius: 8 },
  text: { color: 'white', fontSize: 16 },
});

export default TouchableWithoutFeedbackExample;
