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
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//导入json数据
var Wine = require('./jiugongge.json');

var Dimensions = require('Dimensions');
var{width} = Dimensions.get('window');

var column = 3;
var cellWH = 100;
var maginW = (width-column*cellWH)/(column+1);
var maginH = 25;
export default class jiugonggeTest extends Component<Props> {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(Wine),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    }
    //返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert(rowData.title + '点击了')}>
                <View style={styles.cellViewStyle}>
                    <Image source={require('./image/xingkong.png')} style={styles.ImageStyle} />
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    listViewStyle : {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    cellViewStyle : {
        width : cellWH,
        height : cellWH,
        marginLeft : maginW,
        marginTop : maginH,

        alignItems:'center',
    },
    ImageStyle : {
        width : 80,
        height : 80,
    },

});
module.exports = jiugonggeTest;