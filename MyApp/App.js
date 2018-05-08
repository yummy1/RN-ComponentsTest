/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

//导入json数据
var BadgeData = require('./BadgeData.json');
var Dimensions = require('Dimensions');
var{width} = Dimensions.get('window');

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;


// var LoginView = require('./login');
// var ScrollViewDemo = require('./scrollViewText');
// var ListViewDemo = require('./ListViewText');
// var JiugonggeDemo = require('./jiugonggeTest');//首字母必须大写,不然找不着
var ListViewDemo2 = require('./ListViewTest2');
var TabBarIOS = require('./TabBar');
export default class App extends Component<Props> {
  render() {
    return (
      //<View style={styles.container}>
       //   {this.renderAllBadge()}
      //</View>
      <TabBarIOS/>
    );
  }
  renderAllBadge(){
    var allBadge = [];
    for (var i=0; i<BadgeData.data.length; i++){
      var badge = BadgeData.data[i];
      allBadge.push(
          <View key={i} style ={styles.outViewStyle}>
            var icon = require('badge.icon');
            <Image source={require('./image/xingkong.png')} style={styles.imageStyle}/>
            <Text style={styles.titlesStyle}>
                {badge.title}
            </Text>
          </View>
      );
    }
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ff0000',
      //主轴方向
      flexDirection:'row',
      //换行
      flexWrap:'wrap',
  },
  outViewStyle: {
      backgroundColor:'#ffffff',
      //侧轴
      alignItems:'center',
      width: boxW,
      height:boxW,
      marginBottom:hMargin,
      marginLeft:vMargin,
  },
    imageStyle:{
      backgroundColor:'#00ff00',
      width: 80,
      height:80,
  },
    titlesStyle: {

    },
});
