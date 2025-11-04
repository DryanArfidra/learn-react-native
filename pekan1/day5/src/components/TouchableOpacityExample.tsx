import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TouchableOpacityExample = () => {
  const handlePress = () => Alert.alert('Opacity ditekan!');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handlePress}
        disabled={false}
        style={styles.button}
      >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, alignItems: 'center' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  text: { color: 'white', fontSize: 16 },
});

export default TouchableOpacityExample;
