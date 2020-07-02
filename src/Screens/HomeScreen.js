import React, { useState } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Net, } from '../httpClient/request'
import { Agenda, } from 'react-native-calendars';

var itemCount = 0;

function HomeScreen(props) {
  let [refresh, setRefresh] = useState(false);
  let clinicList = [];
  const [items, setItems] = useState({});

  const apiGetRecord = () => {
    Net('/get_consultation_records.php')
      .then(res => {
        if (res.meta.code == 200) {
  
          for (let i=0 ;i<res.response.records.length; i++) {
            var dateTime = res.response.records[i].date_time.substring(0, 10);
            let clinic = {
              id: itemCount,
              doctorName: res.response.records[i].doctor_name,
              patientName: res.response.records[i].patient_name,
              diagnosis: res.response.records[i].diagnosis,
              medication: res.response.records[i].medication,
              consultationFee: res.response.records[i].consultation_fee,
              dateTime: dateTime, 
              followUpConsultation: res.response.records[i].follow_up_consultation,
            }
            
            // console.log(res.response.records[i].date_time);
          if (!items[dateTime]) {
            // console.log(res.response.records[i]);
            items[dateTime] = [];
          }
            items[dateTime].push(clinic);
          // }
            clinicList.push(clinic);
          }
          console.log(items);
  
        } else {
          alert('code' + res.meta.code + ': ' + res.meta.message);
        }
      })
      .catch(err => {
        // alert('Something went wrong');
        alert(err);
      })
  }

  const ListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={ styles.largeButton }
          onPress={() => props.navigation.navigate('Record', {id: item.id, doctorName: item.doctorName, patientName: item.patientName})}
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

  apiGetRecord();

  return (
    <View style={ styles.root }>
      <Agenda
        // items={{
          // '2020-07-01': [{id: 1, doctorName: 'Tom', patientName: 'Cherry'}],
          // '2020-07-02': [{id: 2, doctorName: 'Mary', patientName: 'Arthur'}],
          // '2020-07-03': [{id: 3, doctorName: 'Peter', patientName: 'Ben'},
          //   {id: 4, doctorName: 'Sally', patientName: 'David'}, 
          //   {id: 4, doctorName: 'Jack', patientName: 'Brian'}]
        // }}
        items={items}
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        onDayPress={(day)=>{console.log('day pressed')}}
        onDayChange={(day)=>{console.log('day changed')}}
        pastScrollRange={50}
        futureScrollRange={50}
        renderItem={(item, firstItemInDay) => {
          return (
          <TouchableOpacity
            style={ styles.listItem }
            onPress={() => props.navigation.navigate('Record', {id: item.id, doctorName: item.doctorName, patientName: item.patientName})}
            // onPress={() => console.log(item.name)}
          >
            <Text>{'Doctor Name: ' + item.doctorName}</Text>
            <Text>{'Patient Name: ' + item.patientName}</Text>
          </TouchableOpacity>);
        }}
        markedDates={{
          '2012-05-16': {selected: true, marked: true},
          '2012-05-17': {marked: true},
          '2012-05-18': {disabled: true}
        }}
        theme={{
          agendaDayTextColor: 'green',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'black'
        }}
        style={{}}
      />

      {/* <FlatList
        data={clinicList}
        renderItem={renderItem}
        keyExtractor={item => 'key' + item.id}
        refreshing={refresh}
        onRefresh={() => refreshHandle()}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => {
          if(distanceFromEnd >= 0) {
            loadMoreHandle();
          }
          }}
      /> */}
    </View>
  );
}

export default HomeScreen;

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
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  listItemTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});