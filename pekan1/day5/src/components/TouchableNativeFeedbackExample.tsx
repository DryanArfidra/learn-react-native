import React from 'react';
import { View, Text, TouchableNativeFeedback, Platform, StyleSheet, Alert } from 'react-native';

const TouchableNativeFeedbackExample = () => {
  const handlePress = () => Alert.alert('Ripple Android ditekan!');
  const ripple = TouchableNativeFeedback.Ripple('#2196F3', false);

  if (Platform.OS === 'android') {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          background={ripple}
          onPress={handlePress}
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
        >
          <View style={styles.button}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'gray' }}>Ripple hanya tersedia di Android</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, alignItems: 'center' },
  button: { backgroundColor: '#EEE', padding: 15, borderRadius: 8 },
  text: { color: 'black', fontSize: 16 },
});

export default TouchableNativeFeedbackExample;
