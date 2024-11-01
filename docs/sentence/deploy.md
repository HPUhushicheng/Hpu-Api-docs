# 部署实例

> 自 `v1` 您可以部署您自己的实例，这个方案十分适合访问量大，站点私密性高的需求。  

## 传统方式部署

### 安装依赖

首先您得确保您的环境中存在`Node.js`，`pnpm`。由于网上方法众多，这里不再赘述。

**请确认：您的 pnpm 版本是否大于或等于 1.22.4，如果不是——请更新。否则，项目将无法正确安装启动。**

### 克隆项目

在你想要的位置克隆本项目

```shell
git clone https://github.com/HPUhushicheng/HPU-API-electron
```

### 安装包

Node.js 程序通常需要大量通过包管理安装的包来运行。本程序也不例外，因此，您需要像这样安装包：

> **请注意：** 本项目要求 `Node.js` 版本至少为 16 （当前最新的 LTS 版本）； 

```shell
pnpm  i axios
pnpm  i qs
pnpm  i express
```

### 启动程序

嗯，让我们试一下能不能启动：

```shell
node server.js
```

当你看到类似这样一条时，意味着程序能成功运行：

`info: [core] Web Server is started, listening on port: 3000`

如果程序运行过程中发生了错误，请检查一下哪儿没搞好（例如：Node.js 版本过低）。如果您确信是程序的问题的话，请尝试更新程序。如果已经最新，欢迎向我们提交 issues。

### 持久化进程

为了使我们的程序能长时间稳定运行，我们通常需要一个进程管理工具来管理进程。本例用的是 `pm2`。有关 `pm2` 的介绍网上有很多，这里就不赘述，只简单讲讲怎么使用（运用于本接口）
  
首先，我们需要安装 `pm2`。

```shell
pnpm i -g pm2 
```

配置 `pm2` 自启动

```shell
pm2 startup
```

由于项目已经提供了配置文件，所以直接使用配置文件启动语句接口服务

```shell
pm2 start ecosystem.config.js --env production
```

保存持久化列表

```shell
pm2 save
```

