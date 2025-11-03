import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const sections = [
  {
    title: 'Frontend',
    data: ['React', 'Vue', 'Angular'],
  },
  {
    title: 'Backend',
    data: ['Node.js', 'Laravel', 'Django'],
  },
];

export default function SectionListExample() {
  return (
    <View>
      <Text style={styles.title}>3️⃣ SectionList Example</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>🔹 {item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  header: {
    backgroundColor: '#1e40af',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontWeight: '700',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  item: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: 8,
    borderBottomColor: '#93c5fd',
    borderBottomWidth: 1,
  },
});
