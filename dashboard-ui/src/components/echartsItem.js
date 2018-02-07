import React, {Component} from "react";
import echarts from 'echarts';

class EchartsItem extends Component {
    render() {
        //echarts的外壳必须加上width和height,sizeMe控制
        return (
            <div id={this.props.id} style={{width: this.props.width + "px", height: this.props.height + "px"}}></div>)
    }

    componentDidMount() {
        let _self = this;
        let element = document.getElementById(_self.props.id);
        if (element) {
            _self.myChart = echarts.init(element);
            this.myChart.setOption(this.props.option);
            _self.addResizeEvent(function () {
                _self.myChart.resize();
            })
        }
    }

    addResizeEvent(fun) {
        let onresize = window.onresize;
        if (typeof window.onresize != 'function') {
            window.onresize = fun;
        } else {
            window.onresize = function () {
                onresize();
                fun();
            }
        }
    }

    componentDidUpdate() {
        this.myChart.resize();
        // this.myChart.setOption(this.props.option);
    }

}

export default EchartsItem;