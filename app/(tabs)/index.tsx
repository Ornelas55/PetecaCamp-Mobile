import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoBox}>
             <MaterialIcons name="emoji-events" size={24} color="#FFF"/>
          </View>
          <View>
            <Text style={styles.headerTitle}>PETECA CUP</Text>
            <Text style={styles.headerSub}>GESTOR DE TORNEIO</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.sectionTitle}>MEUS TORNEIOS</Text>
          <TouchableOpacity style={styles.btnNovo}>
            <Text style={styles.btnNovoText}>+ NOVO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>EM ANDAMENTO</Text>
          </View>
          
          <Text style={styles.tournamentName}>COPA DE VERÃO</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>📍 Quadra do cambalacho</Text>
            <Text style={styles.infoText}>👥 6 duplas</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },
  header: { 
    backgroundColor: '#FFF', 
    paddingTop: 50, 
    paddingBottom: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#EEE',
    paddingHorizontal: 20 
  },
  headerContent: { flexDirection: 'row', alignItems: 'center' },
  logoBox: { 
    backgroundColor: '#00A382', 
    padding: 8, 
    borderRadius: 8, 
    marginRight: 12, 
    justifyContent: 'center',
    alignItems: 'center'

  },
  logoEmoji: { fontSize: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  headerSub: { fontSize: 10, color: '#666', letterSpacing: 1 },
  content: { flex: 1, padding: 20 },
  topRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  sectionTitle: { fontSize: 12, color: '#666', fontWeight: 'bold' },
  btnNovo: { 
    backgroundColor: '#00A382', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 8 
  },
  btnNovoText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: 12, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#DDD'
  },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  statusDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#F4A460', marginRight: 6 },
  statusText: { fontSize: 12, color: '#F4A460', fontWeight: 'bold' },
  tournamentName: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  infoText: { fontSize: 13, color: '#888' }
});