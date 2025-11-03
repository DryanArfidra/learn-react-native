import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, Text, StyleSheet } from 'react-native';

export default function RefreshControlExample() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#3b82f6']} />
      }
    >
      <Text style={styles.title}>4️⃣ RefreshControl Example</Text>
      <Text style={styles.text}>
        Tarik ke bawah untuk menyegarkan konten! 🔄{'\n'}
        Status: {refreshing ? 'Refreshing...' : 'Idle'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e40af',
    borderRadius: 8,
    padding: 10,
    maxHeight: 150,
  },
  title: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
