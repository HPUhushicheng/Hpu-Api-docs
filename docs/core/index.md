# 核心接口

## 功能

* 一周课程查询操作
* 绩点查询操作

后续会增继续增加接口，以支持更多场景。

## 接口地址
* 可以在使用案例中查看

## 登录验证机制

> 接下来，我们以 **无感状态** 进行讲解。

### 认证方式

教务请求服务通过令牌（`token`）认证，因此每个需要验权的接口，其请求必须包含 `token` 字段。我们已实现无感的会话认证，已经将token携带在请求信息中，每次请求都会更新token，实现持久会话。
- getNewToken 函数用于获取新的令牌。它通过向教务系统发送 POST 请求来获取数据。以下是获取新token的getNewToken函数，其代码如下：

```js
/**
 * 获取新token的函数
 * @param {string} rawPassword - 原始密码
 * @param {string} user_code - 用户代码
 * @returns {Promise<string|null>} 返回token或null
 */
async function getNewToken(rawPassword, user_code) {
    // 对原始密码进行Base64编码
    const encodedPassword = encodePassword(rawPassword);

    const data = qs.stringify({
        'passwd': encodedPassword,
        'user_code': user_code // 使用传入的user_code
    });

    const config = {
        method: 'post',
        url: 'http://lgjw.hpu.edu.cn/app-ws/ws/app-service/login',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Origin': 'http://lgjw.hpu.edu.cn',
            'Proxy-Connection': 'keep-alive',
            'Referer': 'http://lgjw.hpu.edu.cn/app-web/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'lgjw.hpu.edu.cn',
            'Connection': 'keep-alive'
        },
        data: data
    };

    try {
        const response = await axios(config);
        const businessData = response.data.business_data;
        const decodedData = Buffer.from(businessData, 'base64').toString('utf8');
        const token = JSON.parse(decodedData).token; // 提取token字段
        return token; // 直接返回token
    } catch (error) {
        console.error('获取新token失败:', error.response ? error.response.data : error.message);
        return null;
    }
}

```


## 接口方法

本节将提供目前暴露的接口表，方便快速查询。



```js [server.js]
const express = require('express');
const { getCourseSchedule, getNewToken } = require('./course.js');
const { getGrades } = require('./grade.js'); // 导入getGrades函数

const app = express();
const port = 3000;

/**
 * 获取课程数据的API接口
 * 访问示例: http://localhost:3000/get-course-data?rawPassword=yourPassword&user_code=yourUserCode
 */
app.get('/get-course-data', async (req, res) => {
    const { rawPassword, user_code } = req.query;

    if (!rawPassword || !user_code) {
        return res.status(400).json({ error: '缺少 rawPassword 或 user_code' });
    }

    try {
        const token = await getNewToken(rawPassword, user_code); // 传递user_code

        if (token) {
            const courseData = await getCourseSchedule(token);
            res.json(courseData);
        } else {
            res.status(500).json({ error: '未能获取到token' });
        }
    } catch (error) {
        res.status(500).json({ error: '发生错误', details: error.message });
    }
});

/**
 * 获取成绩数据的API接口
 * 访问示例: http://localhost:3000/get-grade-data?rawPassword=yourPassword&user_code=yourUserCode
 */
app.get('/get-grade-data', async (req, res) => {
    const { rawPassword, user_code } = req.query;

    if (!rawPassword || !user_code) {
        return res.status(400).json({ error: '缺少 rawPassword 或 user_code' });
    }

    try {
        const gradeData = await getGrades(rawPassword, user_code); // 传递参数

        if (gradeData && gradeData.length > 0) {
            res.json(gradeData);
        } else {
            res.status(500).json({ error: '未能获取到成绩数据' });
        }
    } catch (error) {
        res.status(500).json({ error: '发生错误', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`服务器正在运行在 http://localhost:${port}`);
});

```