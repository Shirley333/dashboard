package com.shirley.dashboard.entity;

public class Panel {
    public int id;
    public String title;
    public GridPos gridPos;
    public Legend legend;
    public PanelMode mode;
    public String stack;
}

class Legend {
    public boolean show;
}

class Axis {
    public AxisType type;
}

enum AxisType {
    TIME, CATEGORY, VALUE
}

enum PanelMode {
    LINE, CHART, HISTOGRAM
}