import theme from '../../global/styles/theme';
import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {Jump} from "../jump";
import {styles} from './styles'
import { Entypo } from '@expo/vector-icons';

export function CartCard(props) {
  return (
    <View  style={styles.card}>
      <View row style={{flexDirection: 'row',}} >
        <View style={styles.image}>
          <Image source={require('../../assets/images/T_Shirt.png')} style={{width: '100%', height: undefined, aspectRatio: 1,}}/>
        </View>
        <View style={{flexDirection: 'row',width: '70%',alignItems: 'center',justifyContent: 'space-between'}}> 
            <View style={[styles.titleSection, {flexGrow: 1,}]}>
              <Text title3>Room SB</Text>
              <Text >T-Shirt</Text>
              <Text>100.00Mt</Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center', paddingLeft: 4, paddingRight: 4,}}>
              <Entypo name="squared-minus" size={24} color="lightgrey" />
              <Text style={{paddingLeft: 6,paddingRight: 6,}}>2</Text>
              <Entypo name="squared-plus" size={24} color={theme.colors_backgrounds.secondary} />
            </View>
        </View>
      </View>
    </View>
  );
}

