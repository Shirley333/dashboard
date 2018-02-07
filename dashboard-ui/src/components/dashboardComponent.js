import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Responsive, WidthProvider} from 'react-grid-layout';
import Actions from '../actions/dashboardAction';
import PanelComponent from './panelComponent';
import sizeMe from 'react-sizeme';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function DashboardGridComponent({children, size, style, layouts, onLayoutChange, renderPanel}) {
    return (
        <ResponsiveReactGridLayout
            width={size.width}
            className="layout"
            layouts={layouts}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            onLayoutChange={onLayoutChange}>
            {renderPanel(size)}
        </ResponsiveReactGridLayout>
    )
}

DashboardGridComponent.propTypes = {
    children: PropTypes.node,
    size: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
    style: PropTypes.object
}

const SizedGridLayout = sizeMe({
    monitorWidth: true,
})(DashboardGridComponent);

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.renderPanel = this.renderPanel.bind(this);
        this.saveDashboard = this.saveDashboard.bind(this);
    }

    //...
    render() {
        // {lg: layout1, md: layout2, ...}
        const {dashboard} = this.props;
        var layouts = {lg: []};
        if (dashboard && dashboard.panels) {
            layouts = {lg: this.initLayouts(dashboard.panels)};
        }
        return (
            <div>
                <div>
                    <button className={"btn-primary"} onClick={this.saveDashboard}>save</button>
                </div>
                <ResponsiveReactGridLayout
                    className="layout"
                    layouts={layouts}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    onLayoutChange={(currentLayout, allLayouts) => {
                        this.onLayoutChange(currentLayout, allLayouts);
                    }}>
                    {this.renderPanel()}
                </ResponsiveReactGridLayout></div>)
    }

    saveDashboard() {
        const {dispatch} = this.props;
        dispatch(Actions.saveDashboard());
    }

    onLayoutChange(currentLayout, allLayouts) {
        const {dispatch, dashboard} = this.props;
        dispatch(Actions.updatePanelPos(allLayouts, dashboard));
    }

    initLayouts(panels) {
        let layouts = [];
        for (let index = 0; index < panels.length; index++) {
            let gridPos = panels[index].gridPos;
            gridPos.i = "panel_" + index;
            layouts.push(gridPos);
            // layouts.push(Object.assign(panels[index].gridPos, {i:}));
        }
        return layouts;
    }

    renderPanel() {
        const {dashboard, view} = this.props;
        // if (!dashboard || view.panels.length == 0) {
        if (!dashboard) {
            return;
        }
        let panels = dashboard.panels;
        let panelItems = [];
        const {dispatch} = this.props;

        for (let index = 0; index < panels.length; index++) {
            let panel = panels[index];
            // let option = view.panels[index].option;
            let option = this.getOption(panel);
            panelItems.push(
                <div key={"panel_" + index}>
                    <PanelComponent
                        key={"panel_" + index}
                        dispatch={dispatch}
                        id={"charts_" + index}
                        panel={panel}
                        index={index}
                        option={option}
                    />
                </div>)
        }
        return panelItems;
    }

    getOption(panel) {
        let data = [
            {
                "dataPoints": [[120, "周一"], [132, "周二"], [101, "周三"], [134, "周四"], [90, "周五"], [230, "周六"], [210, "周日"]],
                "target": "邮件营销2"
            },
            {
                "dataPoints": [[220, "周一"], [182, "周二"], [191, "周三"], [234, "周四"], [290, "周五"], [330, "周六"], [310, "周日"]],
                "target": "联盟广告"
            },
            {
                "dataPoints": [[150, "周一"], [232, "周二"], [201, "周三"], [154, "周四"], [190, "周五"], [330, "周六"], [410, "周日"]],
                "target": "视频广告"
            },
            {
                "dataPoints": [[320, "周一"], [332, "周二"], [301, "周三"], [334, "周四"], [390, "周五"], [330, "周六"], [320, "周日"]],
                "target": "直接访问"
            },
            {
                "dataPoints": [[820, "周一"], [932, "周二"], [901, "周三"], [934, "周四"], [1290, "周五"], [1330, "周六"], [1320, "周日"]],
                "target": "搜索引擎"
            }
        ];

        switch (panel.mode) {
            case "line": {
                let legendData = [];
                let category = [];
                let series = [];
                console.log(data);
                data.map((item, index) => {
                    legendData.push(item.target);
                    let seriesData = [];
                    console.log(item.dataPoints);
                    item.dataPoints.map((point, index2) => {
                        seriesData.push(point[0]);
                    });
                    series.push({
                        name: item.target,
                        type: "line",
                        stack: panel.stack ? panel.stack : "one",
                        data: seriesData
                    })
                });
                if (panel.xAxis.type == "category") {
                    data[0].dataPoints.map((item, index) => {
                        category.push(item[1]);
                    })
                }
                let option = {
                    title: panel.title ? {text: panel.title} : {text: ""},
                    tooltip: panel.tooltip ? panel.tooltip : {trigger: "axis"},
                    calculable: true,
                    xAxis: [
                        {
                            type: "category",
                            boundaryGap: false,
                            data: category
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: series
                }
                if (panel.legend.show) {
                    option.legend = {data: legendData};
                }
                return option;
            }
            case "chart": {
                let legendData = [];
                let category = [];
                let series = [];
                data.map((item, index) => {
                    legendData.push(item.target);
                    let seriesData = [];
                    item.dataPoints.map((point, index2) => {
                        seriesData.push(point[0]);
                    });
                    series.push({
                        name: item.target,
                        type: "bar",
                        stack: panel.stack ? panel.stack : "one",
                        itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                        data: seriesData
                    })
                });
                data[0].dataPoints.map((item, index) => {
                    category.push(item[1]);
                })
                let option = {
                    title: panel.title ? {text: panel.title} : {text: ""},
                    tooltip: panel.tooltip ? panel.tooltip : {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: category
                        }
                    ],
                    series: series
                }
                if (panel.legend.show) {
                    option.legend = {data: legendData};
                }
                return option;
            }
            case "histogram":
                return {}
            default: {
                return {
                    title: panel.title ? {text: panel.title} : {text: ""},
                    tooltip: panel.tooltip ? panel.tooltip : {trigger: "axis"},
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: []
                }
            }
        }

    }

    componentWillMount() {
        let _self = this;
        var href = window.location.href;
        var urls = href.split("?");
        if (urls.length > 1) {
            var queryParams = urls[1].split('&');
            for (let i = 0; i < queryParams.length; i++) {
                var param = queryParams[i].split('=');
                if (param[0] === "id") {
                    _self.dashboardId = param[1];
                }
            }
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(Actions.getDashboard(this.dashboardId));
        // dispatch(Actions.initPanelData());
    }
}

function mapStateToProps(state) {
    return Object.assign({}, state);
}

export default connect(mapStateToProps)(DashboardComponent);