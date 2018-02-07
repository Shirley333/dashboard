package com.shirley.dashboard.resource;

import com.alibaba.fastjson.JSONObject;
import com.shirley.dashboard.entity.DashboardEntity;
import com.shirley.dashboard.mapper.DashboardMapper;
import com.shirley.dashboard.request.DashboardRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class DashboardResource {
    @Autowired
    private DashboardMapper dashboardMapper;

    @GetMapping("/dashboard/{id}")
    public DashboardRequest getDashboardById(@PathVariable("id") Integer id) {
        System.out.println(dashboardMapper);
        System.out.println(id);
        DashboardEntity entity = dashboardMapper.selectOneById(id);
        DashboardRequest request = new DashboardRequest();
        request.id = entity.getId();
        request.title = entity.getTitle();
        request.dashboard = JSONObject.parseObject(entity.getData());
        return request;
    }

    @PutMapping("/dashboard")
    public void updateDashboard(@RequestBody Map<String,Object> params) {
        DashboardEntity entity = new DashboardEntity();
        entity.setId((Integer)params.get("id"));
        entity.setTitle((String) params.get("title"));
        entity.setData(JSONObject.toJSONString(new JSONObject((Map<String, Object>) params.get("dashboard"))));
        dashboardMapper.update(entity);
    }

    @PostMapping("/dashboard")
    public void createDashboard(@RequestBody Map<String,Object> params) {
        DashboardEntity entity = new DashboardEntity();
        entity.setId((Integer)params.get("id"));
        entity.setTitle((String) params.get("title"));
        entity.setData(JSONObject.toJSONString(new JSONObject((Map<String, Object>) params.get("dashboard"))));
        dashboardMapper.insert(entity);
    }

    @DeleteMapping("/dashboard/delete/{id}")
    public void deleteDashboard(@PathVariable("id") Integer id) {
        dashboardMapper.deleteOneById(id);
    }
}
