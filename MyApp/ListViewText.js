
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
var Wine = require('./BadgeData.json');
var Dimensions = require('Dimensions');
var{width} = Dimensions.get('window');
export default class ListViewText extends Component<Props> {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(Wine.data),
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
    //返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert("cell点击了")}>
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={require('./image/xingkong.png')} style={styles.leftImageStyle} />
                    {/*右边的View*/}
                    <View style={styles.rightViewStyle}>
                        {/*上边的Text*/}
                        <Text style={styles.topTitleStyle}>{rowData.title}</Text>
                        {/*下边的Text*/}
                        <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    cellViewStyle: {
        marginTop: 25,
        width: width,
        height: 120,
        borderBottomWidth:0.5,
        borderBottomColor : '#e8e8e8',
        flexDirection:'row',
        padding:10,
    },
    leftImageStyle: {
        height :100,
        width : 100,
    },
    rightViewStyle: {
        // position:'absolute',
        // top : 10,
        // left : 120,
        paddingLeft : 10,
        paddingTop : 10,
        width : width-120,
        justifyContent:'center'
    },
    topTitleStyle: {

    },
    bottomTitleStyle: {
        marginTop : 10,
        color : 'red',
    }
});
module.exports = ListViewText;