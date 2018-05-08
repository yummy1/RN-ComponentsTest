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
    TabBarIOS,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


var Dimensions = require('Dimensions');
var{width} = Dimensions.get('window');


export default class TabBarDemo extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            selectedTabBarItem:'contacts',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头部*/}
                <View style={styles.navStyle}>
                    <Text>Tab选项卡的切换</Text>
                </View>
                {/*选项卡*/}
                <TabBarIOS
                    barTintColor='black'
                >
                    <TabBarIOS.Item
                        systemIcon="contacts"
                        badge="3"
                        selected={this.state.selectedTabBarItem == 'contacts'}
                        onPress = {()=>{this.setState({selectedTabBarItem:'contacts'})}}
                    >
                       <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                           <Text>首页</Text>
                       </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        selected={this.state.selectedTabBarItem == 'bookmarks'}
                        onPress = {()=>{this.setState({selectedTabBarItem:'bookmarks'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'yellow'}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTabBarItem == 'downloads'}
                        onPress = {()=>{this.setState({selectedTabBarItem:'downloads'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="search"
                        badge="1"
                        selected={this.state.selectedTabBarItem == 'search'}
                        onPress = {()=>{this.setState({selectedTabBarItem:'search'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // alignItems:'center'
    },
    commonViewStyle: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    navStyle: {
        width:width,
        height:64,
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:30,
    }
});
module.exports = TabBarDemo;
