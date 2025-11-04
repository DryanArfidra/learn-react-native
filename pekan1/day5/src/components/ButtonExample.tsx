import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const ButtonExample = () => {
  const handlePress = () => Alert.alert('Button ditekan!');

  return (
    <View style={styles.container}>
      <Button
        title="Button Sederhana"
        color="#007AFF"
        onPress={handlePress}
        disabled={false}
        accessibilityLabel="Tombol sederhana"
        touchSoundDisabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});

export default ButtonExample;
