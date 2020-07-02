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
  const { id, doctorName, patientName } = props.route.params;
  console.log(id);
  return (
    <View style={ styles.root }>
      <Text>record id: {id}</Text>
      <Text>Doctor Name: {doctorName}</Text>
      <Text>Patient Name: {patientName}</Text>
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