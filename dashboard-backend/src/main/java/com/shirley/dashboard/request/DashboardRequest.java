package com.shirley.dashboard.request;

import com.alibaba.fastjson.JSONObject;

public class DashboardRequest {
    public Integer id;
    public String title;
    public JSONObject dashboard;
    public DashboardRequest() {
        super();
    }

    public DashboardRequest(Integer id, String title, JSONObject dashboard) {
        super();
        this.id = id;
        this.title = title;
        this.dashboard = dashboard;
    }
}
