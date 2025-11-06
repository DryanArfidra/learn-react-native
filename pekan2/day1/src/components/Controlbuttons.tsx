import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ControlButtonsProps {
  onFlexDirectionChange: (value: string) => void;
  onJustifyContentChange: (value: string) => void;
  onAlignItemsChange: (value: string) => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  onFlexDirectionChange,
  onJustifyContentChange,
  onAlignItemsChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Button title="Row" onPress={() => onFlexDirectionChange('row')} />
        <Button title="Column" onPress={() => onFlexDirectionChange('column')} />
        <Button title="Row Reverse" onPress={() => onFlexDirectionChange('row-reverse')} />
      </View>

      <View style={styles.section}>
        <Button title="Start" onPress={() => onJustifyContentChange('flex-start')} />
        <Button title="Center" onPress={() => onJustifyContentChange('center')} />
        <Button title="Space-Between" onPress={() => onJustifyContentChange('space-between')} />
      </View>

      <View style={styles.section}>
        <Button title="Align Start" onPress={() => onAlignItemsChange('flex-start')} />
        <Button title="Align Center" onPress={() => onAlignItemsChange('center')} />
        <Button title="Stretch" onPress={() => onAlignItemsChange('stretch')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
});

export default ControlButtons;
