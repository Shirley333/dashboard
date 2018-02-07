let Actions = {
    UPDATE_DASHBOARD: 'UPDATE_DASHBOARD',
    UPDATE_PANEL_POS: 'UPDATE_PANEL_POS',
    INIT_PANEL_VIEW: 'INIT_VIEW_PANEL',
    UPDATE_PANEL_DATA: 'UPDATE_PANEL_DATA',

    getDashboard: function (id) {
        return dispatch => {
            let url = '/dashboard/' + id;
            return fetch(url).then((response) => {
                return response.json();
            }).then((data) => {
                dispatch({type: Actions.UPDATE_DASHBOARD, id: data.id, title: data.title, dashboard: data.dashboard});
            }).catch((ex) => {
                console.log(ex);
            })
        }
    },

    // initPanelData: function (dashboard, viewPanels) {
    //     return (dispatch) => {
    //         let panels = Object.assign({}, dashboard.panels);
    //         let stackMap = {
    //             "line": "line",
    //             "chart": "bar",
    //             "histogram": "bar"
    //         }
    //         for (let i = 0; i < panels; i++) {
    //             //     let url="/dashboard/showData/line";
    //             //     switch (panels.mode){
    //             //         case "line":{
    //             //             url="/dashboard/showData/line";
    //             //             // option={
    //             //             //     tooltip : {
    //             //             //         trigger: 'axis'
    //             //             //     },
    //             //             //     legend: {
    //             //             //         data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    //             //             //     },
    //             //             //     calculable : true,
    //             //             //     xAxis : [
    //             //             //         {
    //             //             //             type : 'category',
    //             //             //             boundaryGap : false,
    //             //             //             data : ['周一','周二','周三','周四','周五','周六','周日']
    //             //             //         }
    //             //             //     ],
    //             //             //     yAxis : [
    //             //             //         {
    //             //             //             type : 'value'
    //             //             //         }
    //             //             //     ],
    //             //             //     series : [
    //             //             //         {
    //             //             //             name:'邮件营销',
    //             //             //             type:'line',
    //             //             //             stack: '总量',
    //             //             //             data:[120, 132, 101, 134, 90, 230, 210]
    //             //             //         },
    //             //             //         {
    //             //             //             name:'联盟广告',
    //             //             //             type:'line',
    //             //             //             stack: '总量',
    //             //             //             data:[220, 182, 191, 234, 290, 330, 310]
    //             //             //         },
    //             //             //         {
    //             //             //             name:'视频广告',
    //             //             //             type:'line',
    //             //             //             stack: '总量',
    //             //             //             data:[150, 232, 201, 154, 190, 330, 410]
    //             //             //         },
    //             //             //         {
    //             //             //             name:'直接访问',
    //             //             //             type:'line',
    //             //             //             stack: '总量',
    //             //             //             data:[320, 332, 301, 334, 390, 330, 320]
    //             //             //         },
    //             //             //         {
    //             //             //             name:'搜索引擎',
    //             //             //             type:'line',
    //             //             //             stack: '总量',
    //             //             //             data:[820, 932, 901, 934, 1290, 1330, 1320]
    //             //             //         }
    //             //             //     ]}
    //             //         }
    //             //         case "chart":{
    //             //             url="/dashboard/showData/chart"
    //             //         }
    //             //         case "histogram":{
    //             //
    //             //         }
    //             //         default:
    //             //             break;
    //             //
    //             // }
    //             fetch(panels.dataSourceUrl).then((response) => {
    //                 return response.json();
    //             }).then((data) => {
    //                 if (data.length) {
    //                     let category = [];
    //                     for (let j = 0; j < data[0].dataPoints; j++) {
    //                         let dataPoint = data[0].dataPoints[j];
    //                         category.push(dataPoint[1]);
    //                     }
    //                     let series = [];
    //                     for (let j = 0; j < data.length; j++) {
    //                         let seriesData = [];
    //                         data[j].dataPoints.map((dataPoint, index) => {
    //                             seriesData.push(dataPoint[0]);
    //                         });
    //                         series.push({
    //                             name: data[j].target,
    //                             type: stackMap[panels.mode],
    //                             stack: panels[i].stack ? panels[i].stack : "sum",
    //                             data: seriesData
    //                         });
    //                     }
    //                     let option = viewPanels[i].option;
    //                     if (option.xAxis.type == "category") {
    //                         option.xAxis.data = category;
    //                     } else if (option.yAxis.type == "category") {
    //                         option.yAxis.data = category;
    //                     }
    //                 }
    //                 dispatch({type: Actions.UPDATE_PANEL_DATA, index: i, data: data, option: option});
    //             })
    //         }
    //     }
    // },

    updatePanelPos: function (currentLayouts, dashboard) {
        return (dispatch) => {
            // let dashboardNew=Object.assign({}, dashboard);
            let dashboardNew = dashboard;
            let panels = dashboardNew.panels;
            let layouts = currentLayouts.lg;
            // let layouts = currentLayouts;
            for (let j = 0; j < layouts.length; j++) {
                let index = layouts[j].i.split("panel_")[1];
                panels[index].gridPos = {
                    x: layouts[j].x,
                    y: layouts[j].y,
                    w: layouts[j].w,
                    h: layouts[j].h
                }
                console.log("test");
            }
            dispatch({type: Actions.UPDATE_PANEL_POS, dashboard: dashboardNew});
        }
    },

    saveDashboard: function () {
        return (dispatch, getState) => {
            let {id, title, dashboard} = getState();
            let url = '/dashboard';
            return fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    title: title,
                    dashboard: dashboard
                })
            }).then((response) => {
                location.reload();
            }).catch((ex) => {
                console.log(ex);
            })
        }
    }

};

export default Actions;