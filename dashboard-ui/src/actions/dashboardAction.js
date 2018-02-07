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

    updatePanelPos: function (currentLayouts, dashboard) {
        return (dispatch) => {
            let dashboardNew = dashboard;
            let panels = dashboardNew.panels;
            let layouts = currentLayouts.lg;
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