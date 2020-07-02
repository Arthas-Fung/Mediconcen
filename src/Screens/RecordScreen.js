import React, { useState } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
} from 'react-native';

var itemCount = 0;

function RecordScreen(props) {
  let [refresh, setRefresh] = useState(false);
  const { item } = props.route.params;
  console.log(id);
  return (
    <View style={ styles.root }>
      <Text>record id: {item.id}</Text>
      <Text>Doctor Name: {item.doctorName}</Text>
      <Text>Patient Name: {item.patientName}</Text>
      <Text>Diagnosis: {item.diagnosis}</Text>
      <Text>Medication: {item.medication}</Text>
      <Text>Consultation Fee: {item.consultationFee}</Text>
      <Text>Date Time: {item.dateTime}</Text>
      <Text>follow Up Consultation: {item.followUpConsultation}</Text>
    </View>
  );
}

export default RecordScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  alignCenter: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: '#000000',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  listItemTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});