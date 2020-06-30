import React, { useState } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
} from 'react-native';

const clinicList = [
  {
    id: '1',
    doctorName: 'Ben',
    patientName: 'Kenny',
    diagnosis: '',
    medication: '',
    consultationFee: '300',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '2',
    doctorName: 'Peter',
    patientName: 'Alan',
    diagnosis: '',
    medication: '',
    consultationFee: '350',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '3',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '4',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '5',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '6',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '7',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '8',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '9',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '10',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '11',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '12',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
  {
    id: '13',
    doctorName: 'Robin',
    patientName: 'John',
    diagnosis: '',
    medication: '',
    consultationFee: '320',
    dateTime: '',
    followUpConsultation: '',
  },
];

const Item = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>Doctor Name: {item.doctorName}</Text>
      <Text style={styles.listItemTitle}>Patient Name: {item.patientName}</Text>
    </View>
  );
}

const HomeScreen = props => {
  let [refresh, setRefresh] = useState(false);

  const refreshHandle = () => {
    setRefresh(true);
  }

  const loadMoreHandle = () => {
    alert('Reached End');
  }

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <View style={ styles.root }>
      <Text>Clinic List</Text>
      <FlatList
        data={clinicList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={refresh}
        onRefresh={() => refreshHandle()}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => {
          if(distanceFromEnd >= 0) {
            loadMoreHandle();
          }
          }}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 15,
  },
  alignCenter: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  listItemTitle: {
    color: '#FFF',
    fontSize: 18,
  },
});