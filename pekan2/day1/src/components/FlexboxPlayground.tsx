import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import ColorBoxes from "./ColorBoxes";

const FlexBoxPlayground: React.FC = () => {
  // Gunakan literal types agar sesuai dengan ColorBoxesProps
  const [flexDirection, setFlexDirection] = useState<
    "row" | "column" | "row-reverse" | "column-reverse"
  >("row");

  const [justifyContent, setJustifyContent] = useState<
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >("flex-start");

  const [alignItems, setAlignItems] = useState<
    "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
  >("flex-start");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎯 Flexbox Playground</Text>

      {/* Preview Area */}
      <ColorBoxes
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
      />

      {/* Control Buttons */}
      <View style={styles.controls}>
        <Text style={styles.label}>Flex Direction:</Text>
        <View style={styles.buttonRow}>
          <Button title="Row" onPress={() => setFlexDirection("row")} />
          <Button title="Column" onPress={() => setFlexDirection("column")} />
        </View>

        <Text style={styles.label}>Justify Content:</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Center"
            onPress={() => setJustifyContent("center")}
          />
          <Button
            title="Space Between"
            onPress={() => setJustifyContent("space-between")}
          />
          <Button
            title="Space Around"
            onPress={() => setJustifyContent("space-around")}
          />
        </View>

        <Text style={styles.label}>Align Items:</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Center"
            onPress={() => setAlignItems("center")}
          />
          <Button
            title="Flex Start"
            onPress={() => setAlignItems("flex-start")}
          />
          <Button
            title="Flex End"
            onPress={() => setAlignItems("flex-end")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  controls: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
});

export default FlexBoxPlayground;
