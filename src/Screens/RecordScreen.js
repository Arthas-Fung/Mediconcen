import React, { useState } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
} from 'react-native';

var itemCount = 0;

const RecordScreen = props => {
  let [refresh, setRefresh] = useState(false);
  const { id } = props.route.params;
  console.log(id);
  return (
    <View style={ styles.root }>
      <Text>Record Page</Text>
      
    </View>
  );
}

export default RecordScreen;

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