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
    TextInput,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
export default class loginView extends Component<Props> {
    // getInitialState(){
    //     return{
    //         title:'登录',
    //     }
    // }
    constructor(props){
        super(props);
        this.state = {title :'登录'};
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./image/xingkong.png')} style={styles.headIconStyle} />
                {/*账号密码*/}
                <TextInput style={styles.inputStyle} placeholder={'请输入用户名'} />
                <TextInput style={styles.inputStyle} placeholder={'请输入密码'} />
                {/*登录*/}
                <TouchableOpacity activeOpacity={0.5} onPress={this.loginAction('登录中...')}>
                <View style={styles.loginStyle}>
                    <Text style={styles.loginTextStyle}>{this.state.title}</Text>
                </View>
                </TouchableOpacity>
                {/*设置*/}
                <View style={styles.tipStyle} >
                    <Text style={styles.nologinStyle}>无法登录</Text>
                    <Text style={styles.newUserStyle}>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={styles.otherLoginViewStyle}>
                    <Text style={styles.otherLoginTitleStyle}>其他登录方式</Text>
                    <Image source={require('./image/xingkong.png')} style={styles.otherLoginStyle}/>
                    <Image source={require('./image/xingkong.png')} style={styles.otherLoginStyle}/>
                    <Image source={require('./image/xingkong.png')} style={styles.otherLoginStyle}/>
                </View>
            </View>
        );
    }

    //登录方法
    loginAction(event){
        // this.setState({
        //     title : event,
        // });
        AlertIOS.alert(event);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems:'center',
        // justifyContent:'center',
    },
    headIconStyle: {
        width : 80,
        height : 80,
        borderColor : '#ffffff',
        borderWidth: 3,
        borderRadius : 40,
        marginTop:100,
        marginBottom:30,
    },
    inputStyle : {
        width : width,
        height : 50,
        marginBottom:1,
        backgroundColor:'#ffffff',
        textAlign : 'center',
    },
    loginStyle : {
        marginTop:30,
        width : width*0.85,
        height : 45,
        backgroundColor : '#00FF33',
        alignItems:'center',
        justifyContent:'center',
        borderRadius : 5,
    },
    loginTextStyle : {
      color : 'white',
    },
    tipStyle : {
        marginTop : 20,
        width : width,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    nologinStyle : {
        marginLeft:12,
    },
    newUserStyle : {
        marginRight:12,
    },
    otherLoginViewStyle : {
        flexDirection : 'row',
        alignItems:'center',
        position:'absolute',
        bottom : 10,
        left : 20,
    },
    otherLoginStyle : {
        width : 50,
        height : 50,
        borderRadius : 25,
        marginLeft:10,
    },
});

module.exports = loginView;