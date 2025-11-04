import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

const TouchableHighlightExample = () => {
  const handlePress = () => Alert.alert('Highlight ditekan!');

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#DDDDDD"
        activeOpacity={0.8}
        onPress={handlePress}
        onShowUnderlay={() => console.log('Underlay tampil')}
        onHideUnderlay={() => console.log('Underlay hilang')}
      >
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, alignItems: 'center' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  text: { color: 'white', fontSize: 16 },
});

export default TouchableHighlightExample;
