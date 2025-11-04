import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';

const PressableExample = () => {
  const handlePress = () => Alert.alert('Pressable ditekan!');
  const handleLongPress = () => Alert.alert('Press lama!');

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => console.log('Press Out')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#005BBB' : '#007AFF' },
        ]}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        pressRetentionOffset={{ top: 10, left: 10, right: 10, bottom: 10 }}
        android_ripple={{ color: '#DDDDDD', borderless: false }}
      >
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Menekan...' : 'Pressable Custom'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, alignItems: 'center' },
  button: { padding: 15, borderRadius: 8 },
  text: { color: 'white', fontSize: 16 },
});

export default PressableExample;
