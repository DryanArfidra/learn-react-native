import React from "react";
import { View, StyleSheet, FlexAlignType } from "react-native";

interface ColorBoxesProps {
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  alignItems: FlexAlignType; 
}

const ColorBoxes: React.FC<ColorBoxesProps> = ({
  flexDirection,
  justifyContent,
  alignItems,
}) => {
  return (
    <View
      style={[
        styles.container,
        { flexDirection, justifyContent, alignItems },
      ]}
    >
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 250,
    borderWidth: 2,
    borderColor: "#ccc",
    marginTop: 16,
  },
  box: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 10,
  },
});

export default ColorBoxes;
