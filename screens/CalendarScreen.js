import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarScreen = props => {
  const [selected, setSelected] = useState(Date());

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const onSaveHandler = () => {
    // props.onSave();
    props.navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Calendar
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2012-05-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={Date()}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={onDayPress}
      // Handler which gets executed on day long press. Default = undefined
      hideExtraDays={true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      hideArrows={false}
      disableMonthChange={false}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={0}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: 'rgba(1, 58, 226, 0.72)',
          selectedTextColor: 'white'
        }
      }}
    />
    <View style={styles.buttonContainer} >
      <Button onPress={onSaveHandler} title="Save" color='white' />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(1, 58, 226, 0.8)',
  }
})

export default CalendarScreen;