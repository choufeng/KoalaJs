# api 基础系统

### 技术栈
- node `>= 7.6`
- koa `>= 2.1`
- eslint `>= 4.2`
- koa-jwt `>= 3.0`
- mysql `>=1.13`  `mysql2`
- Sequelize `>=4.3`
- node-rsa 

### 系统变量

|变量名|说明|
|---|---|
|ERVERTYPE|取值为 http 或者https, 设定服务类型|
|PORT|要监控的端口号| 

### 命名规则
- controller命名为c开头,小驼峰, 例如: cAuth
- model命名为m开头, 小驼峰, 例如: mUser
- 原则上命名都使用单数形式.
- 
### 目录文件说明



### 使用

*如果使用https，则需要在keys目录中放置对应的证书文件。（文件名必须是下载到的，不可更改） 在bin/www中指定对应的文件。*

*请注意运行本代码nodejs版本必须高于7.6 推荐用最新版本*

下载代码到目录后
npm i

npm run dev //开发环境，带热启动

npm start //生产环境

node generateKey.js //初始化项目是，手动生成config.rsaKey代码