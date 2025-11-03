import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  Modal,
  StatusBar,
  Switch,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previous => !previous);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* ======== Status Bar ======== */}
      <StatusBar
        backgroundColor="#4a90e2"
        barStyle="light-content"
        hidden={false}
        animated={true}
      />

      {/* ======== ImageBackground (Background Layout) ======== */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* ======== View (Layout Container) ======== */}
        <View style={styles.container}>
          {/* ======== Text (Static & Dynamic) ======== */}
          <Text style={styles.title}>Belajar Core Component React Native</Text>
          <Text style={styles.subtitle}>
            Hari ke-3: Membuat UI dengan komponen inti
          </Text>

          {/* ======== Image (Local & Remote Source) ======== */}
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80',
            }}
            style={styles.image}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="React Native Logo"
          />

          {/* ======== TextInput (Dynamic Input) ======== */}
          <TextInput
            style={styles.input}
            placeholder="Ketik sesuatu di sini..."
            placeholderTextColor="#ccc"
            value={text}
            onChangeText={setText}
            keyboardType="default"
            autoCapitalize="sentences"
            multiline
          />

          <Text style={styles.textOutput}>
            Teks kamu: <Text style={styles.highlight}>{text}</Text>
          </Text>

          {/* ======== Switch (On/Off Toggle) ======== */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              Notifikasi: {isEnabled ? 'Aktif' : 'Nonaktif'}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#4a90e2' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          {/* ======== Button (Trigger Modal) ======== */}
          <Button
            title="Lihat Detail"
            color="#4a90e2"
            onPress={() => setModalVisible(true)}
          />

          {/* ======== Modal (Pop-up Window) ======== */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Detail Komponen</Text>
                <Text style={styles.modalText}>
                  Ini adalah contoh penggunaan Modal di React Native.
                  Modal sering digunakan untuk menampilkan informasi tambahan
                  atau konfirmasi tindakan pengguna.
                </Text>
                <Button
                  title="Tutup"
                  color="#d9534f"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

/* ======== Styles ======== */
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    paddingVertical: 40,
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  input: {
    width: '90%',
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    color: '#333',
    marginVertical: 10,
  },
  textOutput: {
    fontSize: 14,
    marginVertical: 8,
    color: '#333',
  },
  highlight: {
    color: '#4a90e2',
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  switchLabel: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
});
