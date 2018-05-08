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
    ScrollView,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//导入json数据
var imageData = require('./scrollViewIconData.json');

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


export default class scrollViewText extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            currentPage :0
        };
    }
    componentDidMount(){
        this.startTimer();
    }
    //开启定时器
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    //开始拖动
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    //结束拖动
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderChildView()}
                </ScrollView>
                <View style={styles.pageStyle}>
                    {this.renderDotsView()}
                </View>
            </View>
        );
    }
    onScrollBeginDrag(){
        clearInterval(this.timer);
    }
    onScrollEndDrag(){
        this.startTimer();
    }
    startTimer(){
        //1.拿到scrollView
        var scrollView = this.refs.scrollView;
        var imageCount = imageData.data.length;
        //2.添加定时器
        this.timer = setInterval(
            () => {
                // console.log('1');
                //2.1设置圆点
                var activePage = 0;
                //2.2判断
                if ((this.state.currentPage+1) >= imageCount){
                    activePage = 0;
                }else{
                    activePage = this.state.currentPage+1;
                }
                //2.3更新状态机
                this.setState({
                    currentPage:activePage,
                });
                //2.4让scrollView滚动起来
                var offsetX = activePage * width;
                scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true});
            }, 1000);

    }
    renderChildView(){
        //数组
        var allImage = [];
        //图片数组
        var imageArr = imageData.data;
        for (var i=0; i<imageArr.length; i++){
            //单张图片
            var imgItem = imageArr[i];
            //创建组件装图片
            allImage.push(
              <Image key={i} source={require('./image/meinv.png')} style={{width:width,height:200}} />
            );
        }
        return allImage;
    }
    renderDotsView(){
        //数组
        var allDots = [];
        //样式
        var style;
        //图片数组
        var imageArr = imageData.data;
        for (var i=0; i<imageArr.length; i++){
            style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
            allDots.push(
                <Text key={i} style={[{fontSize:20,marginLeft:10},style]}>&bull;</Text>
            )
        };
        return allDots;
    }
    onAnimationEnd(e){
        // 1.水平方向
        var offSetX = e.nativeEvent.contentOffset.x;
        //2.求出当前的页数
        var currentPage = Math.floor(offSetX / width);
        // console.log(currentPage);
        //更新UI
        this.setState({
            currentPage:currentPage,
        });
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
    },
    pageStyle:{
        width:width,
        height:30,
        backgroundColor:'rgba(0,0,0,0.3)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
    },
});

module.exports = scrollViewText;