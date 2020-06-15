import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';

class MiniGameScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapContent}>
          <View style={styles.content}>
            <Text style={styles.title}>여기가 미니게임페이지 입니다.</Text>
          </View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.content}></View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.content}></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: 'white',
  },
  wrapContent: {
    width: wp('90%'),
    height: wp('90%'),
    paddingBottom: wp('5%'),
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: wp('10%'),
  },
});

export default MiniGameScreen;
