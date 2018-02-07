package com.shirley.dashboard.entity;

import java.io.Serializable;

public class DashboardEntity implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private String title;
    private String data;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
