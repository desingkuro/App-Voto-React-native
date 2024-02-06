import React from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible, candidatos }) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Personeros:</Text>
          {candidatos.personeros.map((candidato) => (
            <View key={candidato.id} style={styles.candidateContainer}>
              <Text>{candidato.Nombre}: {candidato.Votos} votos</Text>
            </View>
          ))}
          <Text style={styles.title}>Contralores:</Text>
          {candidatos.contralor.map((candidato) => (
            <View key={candidato.id} style={styles.candidateContainer}>
              <Text>{candidato.Nombre}: {candidato.Votos} votos</Text>
            </View>
          ))}
          <TouchableHighlight
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.closeButtonText}>Cerrar ventana</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.openButtonText}>Mostrar ventana</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:70,
    width:380,
    alignItems:'center',
    justifyContent:'center'
  },
  modalContainer: {
    marginTop: 22,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  candidateContainer: {
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  openButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    justifyContent:'center',
    width:160,
    height:40
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomModal;
