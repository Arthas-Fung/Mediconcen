import React, { useState } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

var itemCount = 0;

const HomeScreen = props => {
  let [refresh, setRefresh] = useState(false);
  let clinicList = [];

  const ListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={ styles.largeButton }
          onPress={() => props.navigation.navigate('Record')}
          activeOpacity={0.5}>
          <Text style={styles.listItemTitle}>Doctor Name: {item.doctorName}</Text>
        <Text style={styles.listItemTitle}>Patient Name: {item.patientName}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const refreshHandle = () => {
    // setRefresh(true);
  }

  const loadMoreHandle = () => {
    alert('Reached End');
    // initClinicList();
  }

  const renderItem = ({ item }) => (
    <ListItem item = {item} />
  );

  const initClinicList = () => {
    for (let i=0 ;i<20; i++) {
      let clinic = {
        id: itemCount,
        doctorName: 'Arthas',
        patientName: 'Ben',
        diagnosis: '',
        medication: '',
        consultationFee: '250',
        dateTime: '', 
        followUpConsultation: '',
      }
      clinicList.push(clinic);
      itemCount++;
    }
  }

  initClinicList();

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