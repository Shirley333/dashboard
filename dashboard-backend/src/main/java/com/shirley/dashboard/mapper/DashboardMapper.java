package com.shirley.dashboard.mapper;

import com.shirley.dashboard.entity.DashboardEntity;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface DashboardMapper {
    @Insert("insert into dashboard(title,data) values(#{title},#{data})")
    void insert(DashboardEntity dashboard);

    @Update("update dashboard set title=#{title},data=#{data} where id=#{id}")
    void update(DashboardEntity dashboard);

    @Select("select * from dashboard where id=#{id}")
    DashboardEntity selectOneById(Integer id);

    @Delete("delete from dashboard where id=#{id}")
    void deleteOneById(Integer id);
}
