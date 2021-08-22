import React from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const Entry = props => {
  return (
    <View style={styles.screen}>
      <View>
        <Text>{props.category}</Text>
        <Text>{props.userdata}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    margin: 40,
  },
  editButton: {
    backgroundColor: '#3480FF',
    height: 34,
    width: 69,
  },
  editButtonText: {
    color: 'rgba(255,255,255,0.8)',
  },
});

export default Entry;
