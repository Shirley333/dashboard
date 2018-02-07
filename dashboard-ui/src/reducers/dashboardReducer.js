import Actions from '../actions/dashboardAction';

export function view(state, action) {
    switch (action.type) {
        case Actions.INIT_PANEL_VIEW:
            return Object.assign({}, state, {panels: action.panels});
        default:
            return state;
    }
}

export default function entity(state = {view: {panels: []}}, action) {
    switch (action.type) {
        case Actions.UPDATE_DASHBOARD:
            return Object.assign({}, state, {id: action.id, title: action.title, dashboard: action.dashboard});
        case Actions.UPDATE_PANEL_POS: {
            return Object.assign({}, state, {dashboard: action.dashboard});
        }
        case Actions.INIT_PANEL_VIEW: {
            let view = Object.assign({}, state.view);
            view.panels = action.panels;
            return Object.assign({}, state, {view: view});
        }
        case Actions.UPDATE_PANEL_DATA: {
            let view = Object.assign({}, state.view);
            let panels = view.panels;
            panels[action.index].data = action.data;
            panels[action.index].option = action.option;
            return Object.assign({}, state, {view: view});
        }
        default:
            return state;
    }
}