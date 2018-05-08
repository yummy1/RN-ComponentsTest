
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
var Car = require('./ListView2.json');
var Dimensions = require('Dimensions');
var{width} = Dimensions.get('window');
export default class ListViewText2 extends Component<Props> {
    constructor(props){
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ":" + rowID];
        };
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,//获取组中的数据
                getRowData: getRowData,//获取行中的数据
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader = {this.renderSectionHeader}
                contentContainerStyle = {styles.listViewStyle}
            />
        );
    }
    //复杂的操作:数据请求 或者异步操作(定时器)
    componentDidMount(){
        this.loadDataFromJson();
    }

    loadDataFromJson(){
        // 拿到json数据
        var jsonData = Car.data;
        //定一些变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];
        //遍历
        for(var i=0; i<jsonData.length; i++){
            //1.把组号放入sectionIDs数组中
            sectionIDs.push(i);
            //2.把组中内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            //3.取出该组中的所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            //遍历所有的车
            for(var j=0; j<cars.length; j++){
                //把行号放入rowIDs
                rowIDs[i].push(j);
                //把每一行中的内容放入dataBlob对象中
                dataBlob[i+':'+j] = cars[j];
            }
        }
        console.log(dataBlob),
        //更新状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        })
    }
    //返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert("cell点击了")}>
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={require('./image/xingkong.png')} style={styles.leftImageStyle} />
                    {/*右边的Text*/}
                    <Text style={styles.cellTitleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    //返回头部
    renderSectionHeader(sectionData, sectionID){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert("header点击了")}>
                <View style={styles.headerViewStyle}>
                    <Text style={styles.headerTitleStyle}>{sectionData}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    listViewStyle: {

    },
    cellViewStyle: {
        width: width,
        height: 100,
        borderBottomWidth:0.5,
        borderBottomColor : '#e8e8e8',
        flexDirection:'row',
        padding:10,
        alignItems:'center',
    },
    leftImageStyle: {
        height :90,
        width : 90,
    },
    cellTitleStyle: {
        // position:'absolute',
        // top : 10,
        // left : 120,
        paddingLeft : 10,
        paddingTop : 10,
        width : width-120,
        justifyContent:'center'
    },
    headerViewStyle: {
        paddingLeft : 10,
        width: width,
        height: 30,
        justifyContent:'center',
        backgroundColor:'red'
    },
    headerTitleStyle: {

    }
});
module.exports = ListViewText2;