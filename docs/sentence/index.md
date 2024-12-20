# 代码说明

## 开发历程

> 简单来说，最初进行过几次尝试，本意想使用python进行，但是考虑过多种原因之后最终决定使用 Node.js 开发。当确定了变成语言之后，下一步无非是进行网络请求的抓包与分析，这也是比较复杂的一步，这里的话我用的是网页抓包，因为app抓包的话我的手机是android14,无法安装证书，所以便放弃了企业微信这一途径，其次只能是web抓包，我最开始想的是在河南理工大学综合教务系统(https://zhjw.hpu.edu.cn)进行，然后的话最初思路是直接拿参数请求，但是因为post请求的4个参数都是加密的，我解了2个参数，剩下的2个没有进行了，其实的话打打断点分析分析可能会有结果，但是还是很困难，其次就是根据储存的`token`进行请求，但是token极容易被识别需要重新二次验证，而且每次的`token`都会发生变化，再者，有校园网webvpn验证，必须先过验证这一关，但是这一步又会设计到二次密码，因为教务和`webvpn`的密码是不一样的，而且还涉及到验证码的获取，因为不是`base64`加密的，所以后需要进行验证码识别，虽然可以用到百度等一些在线接口，但是后续也不能实现0成本，几经辗转下来会发现这一条路`NoMind`，最后还是放弃了。即使是进行下去，每个过程中涉及到的很多不确定因素，而且超时是在所难免的，思来想去还是决定放弃了，但是一想到在高峰期查课表的无力感，还是咬咬牙看看有没有其他方法，断断续续摸索了几个星期，中途也是看到了`河理之家pro`微信公众号提供的有教务系统的一系列在线接口，我当时也是比较好奇的，第一反应就是去抓包，但是微信是取消了开发者调试工具`devtools`的,但是继续搜索，发现是有开源项目做了这方面的工作的，但是我下载了工具之后发现会闪退，也还是不行，于是直接给`河理之家pro`加微信留言，但是很显然他不会告诉我，于是乎又气馁了，在偶然的机会下看到了教务系统的移动版web，抓包分析一下，狂喜，不需要进行webvpn验证，只需要一次学号和密码登录，看一下请求包，`apifox`分析一下，发现只是`token`会变，其余参数都是有规律的，比如说学期数之类的，请求一下，发现响应用的是base64加密，直接解密，就可以得到想要的结果了，在分析一波，就可以拿到变化的`token`，然后就是直接请求接口，拿到想要的结果，于是就开始写代码，进行本地测试，封装函数和接口，最后是想用云函数部署的，因为的话我的服务器是新加坡的和香港的，虽然响应速度还不错，但是的话之前没有尝试过云函数，当然在实践的过程中也是遇到了一些问题，不过好在都比较简单。整个开发历程大概是这些，在开发过程中也遇到不少问题，也走了不少弯路，最后还是实现了一个比较完整的效果，希望对大家有所帮助。



::: warning 请注意：

如果腾讯云接口被过度滥用，我将会关闭接口。
**如您仍有此需求，请：**

* 自行部署接口，参考 [接口部署](/sentence/deploy)。

:::

## 时间规划

| 时间         | 版本 | 影响接口                                     | 调整                                            | 技术栈                  |
|------------|----|------------------------------------------|-----------------------------------------------|----------------------|
| 2024 年10月 | 测试 | `本地接口`  | 接口已基本可正常运行，部分功能陆续增加                    | Node.js               |
| 2024 年11月  | v1 | `https://1316493739-h6hbs085gz.ap-nanjing.tencentscf.com`                          | v1 接口已部署至腾讯云函数，接口将稳定存在直至 v2 上线 | Node.js      |
| 预计 2025年  | v2 | 未知                                       | 上线 v2 接口，预计增加微信server酱推送                                      | Node.js  |

目前 v1 接口已进入功能锁定阶段。 如果你有什么想法或建议， 可以在 [功能申请表](https://github.com/HPUhushicheng/HPU-API-electron/discussions/3) 中提出。

由于目前属于公益性运营，为了保证资源的公平利用和不过度消耗资金，我们会定期的屏蔽某些大量的请求。若您的请求量较大，建议自行进行部署。

## 接口说明

**请注意：** 接口并允许自行部署，效果我们提供的服务完全一致。同时，我们的服务可以在在遵守使用协议的情况下允许任何人免费使用。

Hpu-Api是一个公益性服务，我们没有具备充足的资金和资源应对超高并发的请求。如果您的请求数较多，从稳定性、可控性考虑，我们都建议您自行部署 API，或在程序中使用缓存减轻请求压力。

详细的部署指南请参考：[接口部署](/sentence/deploy.html)

### 请求地址

| 地址                            | 协议    | 方法  | QPS 限制 | 线路 |
|-------------------------------|-------|-----|--------|----|
| `https://1316493739-h6hbs085gz.ap-nanjing.tencentscf.com/get-course-data?rawPassword=yourPassword&user_code=yourUserCode`              | HTTPS | get | 2     | 国内 |
| `https://1316493739-h6hbs085gz.ap-nanjing.tencentscf.com/get-grade-data?rawPassword=yourPassword&user_code=yourUserCode` | HTTPS | get | 2    | 国内 |

> 国内节点当前因流量、负载和攻击开启了缓存，缓存2s过期。实际效果：同一个地区、线路、使用同一参数的访问者短时间内得到的结果是一致的。这样可以有效的降低运算服务器的负载，并提高用户体验。

### 请求参数

| 参数       | 值   | 可选 | 说明                 |
|----------|-----|----|--------------------|
| rawPassword |密码 | 必选  | 密码，默认身份证后六位    |
| user_code   | 学号 | 必选  | 学号，用于查询课表和成绩 |
| get-course-data  | 一周课程 | 必选 | 默认为 `get-course-data` |
| get-grade-data  | 绩点 | 必选 | 默认为 `get-grade-data` |

```
一周课程请求地址示例：
https://1316493739-h6hbs085gz.ap-nanjing.tencentscf.com/get-course-data?rawPassword=xxxx&user_code=xxxx
```

```
绩点请求地址示例：
https://1316493739-h6hbs085gz.ap-nanjing.tencentscf.com/get-grade-data?rawPassword=xxxx&user_code=xxxx
```

#### 返回编码（参数）

| 参数   | 说明                                |
|------|-----------------------------------|
| json | 返回格式化后的 JSON 文本                   |

#### 字符集（参数）

| 参数   | 说明                                |
|------|-----------------------------------|
| utf-8 | 默认返回 utf-8 编码的内容                            |

## 返回信息

| 返回参数名称      | 描述    |
|-------------|----------------------------------------------------------|
| course_name     | 课程名称 |
| course_gp       | 学科绩点     |
| course_credit   | 单门学科总学分  |
| score_text      | 百分制分数       |
| semester_gp     | 单个学期平均绩点  |
| semester_credits| 单个学期总学分  |
| courseName      | 课程名称   |
| date            | 上课日期      |
| startTime        | 开始时间 |
| endTime | 结束时间    |
| address  |    上课地点    |

