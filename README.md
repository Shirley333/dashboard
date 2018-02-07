# dashboard
Use react-grid-layout and sizeMe to achieve json control ui layout

1.数据库中导入dashboard.sql（表内插入了两条数据）

2.启动后端：

数据库地址在dashboard-backend\src\main\resources\application.properties里面修改

dashboard-backend下的DashboardBackendApplication.java

3.前端：

dashboard-ui下：

```shell
npm install
npm build
npm run hot
```

4.访问服务：

localhost:8088/views/dashboard.html?id=1

ps:id为dashboard在数据库中的id



dashboard.json为数据库存储的dashboard的data的json格式



遗留问题：页面调整panel大小的时候，height没有变化（react-sizeMe本身的bug）。