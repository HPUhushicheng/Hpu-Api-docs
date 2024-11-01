# 接口定义

## 用户部分

### 绩点查询

::: theorem 接口

- 路径： `/get-grade-data`
- 方法： `GET`
- 身份认证：是

:::

以下为该接口可用的请求参数：

| 参数        | 类型   | 规则 | 示例         | 备注 |
| ----------- | ------ | ---- | ------------ | ---- |
| rawPassword | string | 必填 | 025845       | 密码 |
| user_code   | string | 必填 | 312201040589 | 学号 |

可能存在的错误：
| 错误代码 | 原因 |
|------|---------|
| 404 | 学号或密码错误 |

以下为响应示例：

<details> <summary>get-grade-data</summary>

```json
[
  {
    "semester_credits": "0.0",
    "semester_gp": "0.0",
    "lessons": []
  },
  {
    "semester_credits": "27.0",
    "semester_gp": "3.98",
    "lessons": [
      {
        "course_name": "中外建筑艺术赏析",
        "course_gp": "5.0",
        "course_credit": "1.5",
        "score_text": "100"
      },
      {
        "course_name": "大学英语b-4",
        "course_gp": "3.9",
        "course_credit": "2.0",
        "score_text": "89"
      },
      {
        "course_name": "电子技术综合设计",
        "course_gp": "4.1",
        "course_credit": "2.0",
        "score_text": "91"
      },
      {
        "course_name": "艺术导论",
        "course_gp": "5.0",
        "course_credit": "1.5",
        "score_text": "100"
      },
      {
        "course_name": "高频电子线路",
        "course_gp": "3.3",
        "course_credit": "3.0",
        "score_text": "83"
      },
      {
        "course_name": "开源技术实训",
        "course_gp": "4.5",
        "course_credit": "1.0",
        "score_text": "优秀"
      },
      {
        "course_name": "信号与系统",
        "course_gp": "4.1",
        "course_credit": "4.0",
        "score_text": "91"
      },
      {
        "course_name": "数字电子技术",
        "course_gp": "4.1",
        "course_credit": "4.0",
        "score_text": "91"
      },
      {
        "course_name": "数据结构",
        "course_gp": "2.9",
        "course_credit": "3.0",
        "score_text": "79"
      },
      {
        "course_name": "认识实习",
        "course_gp": "3.0",
        "course_credit": "1.0",
        "score_text": "80"
      },
      {
        "course_name": "中国近现代史纲要",
        "course_gp": "4.2",
        "course_credit": "3.0",
        "score_text": "92"
      },
      {
        "course_name": "体育与健康4",
        "course_gp": "4.9",
        "course_credit": "1.0",
        "score_text": "99"
      }
    ]
  },
  {
    "semester_credits": "23.0",
    "semester_gp": "3.58",
    "lessons": [
      {
        "course_name": "概率论与数理统计",
        "course_gp": "3.4",
        "course_credit": "3.5",
        "score_text": "84"
      },
      {
        "course_name": "MATLAB基础及应用",
        "course_gp": "2.6",
        "course_credit": "1.5",
        "score_text": "76"
      },
      {
        "course_name": "马克思主义基本原理",
        "course_gp": "2.9",
        "course_credit": "3.0",
        "score_text": "79"
      },
      {
        "course_name": "影视鉴赏",
        "course_gp": "2.5",
        "course_credit": "1.0",
        "score_text": "75"
      },
      {
        "course_name": "大学英语b-3",
        "course_gp": "3.0",
        "course_credit": "2.0",
        "score_text": "80"
      },
      {
        "course_name": "美术鉴赏",
        "course_gp": "4.6",
        "course_credit": "1.0",
        "score_text": "96"
      },
      {
        "course_name": "国家安全教育",
        "course_gp": "4.9",
        "course_credit": "1.0",
        "score_text": "99"
      },
      {
        "course_name": "物理实验（二）",
        "course_gp": "4.5",
        "course_credit": "1.0",
        "score_text": "优秀"
      },
      {
        "course_name": "体育与健康3",
        "course_gp": "5.0",
        "course_credit": "1.0",
        "score_text": "100"
      },
      {
        "course_name": "大学物理（二）",
        "course_gp": "4.6",
        "course_credit": "3.0",
        "score_text": "96"
      },
      {
        "course_name": "模拟电子技术",
        "course_gp": "3.7",
        "course_credit": "4.0",
        "score_text": "87"
      },
      {
        "course_name": "离散数学",
        "course_gp": "1.7",
        "course_credit": "1.0",
        "score_text": "67"
      }
    ]
  },
  {
    "semester_credits": "25.0",
    "semester_gp": "3.6",
    "lessons": [
      {
        "course_name": "复变函数",
        "course_gp": "3.3",
        "course_credit": "1.0",
        "score_text": "83"
      },
      {
        "course_name": "思想道德与法治",
        "course_gp": "3.5",
        "course_credit": "3.0",
        "score_text": "85"
      },
      {
        "course_name": "C语言课程设计",
        "course_gp": "1.5",
        "course_credit": "1.0",
        "score_text": "及格"
      },
      {
        "course_name": "大学英语b-2",
        "course_gp": "3.3",
        "course_credit": "2.0",
        "score_text": "83"
      },
      {
        "course_name": "高等数学b-2",
        "course_gp": "3.1",
        "course_credit": "6.0",
        "score_text": "81"
      },
      {
        "course_name": "电路分析基础",
        "course_gp": "4.1",
        "course_credit": "4.0",
        "score_text": "91"
      },
      {
        "course_name": "体育与健康2",
        "course_gp": "4.2",
        "course_credit": "1.0",
        "score_text": "92"
      },
      {
        "course_name": "物理实验（一）",
        "course_gp": "2.5",
        "course_credit": "1.0",
        "score_text": "75"
      },
      {
        "course_name": "大学物理（一）",
        "course_gp": "4.0",
        "course_credit": "3.0",
        "score_text": "90"
      },
      {
        "course_name": "改革开放史",
        "course_gp": "4.9",
        "course_credit": "1.0",
        "score_text": "99"
      },
      {
        "course_name": "创新创业基础",
        "course_gp": "4.8",
        "course_credit": "2.0",
        "score_text": "98"
      }
    ]
  },
  {
    "semester_credits": "22.5",
    "semester_gp": "3.9",
    "lessons": [
      {
        "course_name": "大学生心理健康教育",
        "course_gp": "4.4",
        "course_credit": "2.0",
        "score_text": "94"
      },
      {
        "course_name": "军事技能训练（军训）",
        "course_gp": "3.5",
        "course_credit": "2.0",
        "score_text": "良好"
      },
      {
        "course_name": "大学生职业生涯与发展规划",
        "course_gp": "4.0",
        "course_credit": "1.0",
        "score_text": "90"
      },
      {
        "course_name": "军事理论",
        "course_gp": "3.1",
        "course_credit": "2.0",
        "score_text": "81"
      },
      {
        "course_name": "高等数学b-1",
        "course_gp": "4.0",
        "course_credit": "5.0",
        "score_text": "90"
      },
      {
        "course_name": "大学英语b-1",
        "course_gp": "3.8",
        "course_credit": "2.0",
        "score_text": "88"
      },
      {
        "course_name": "形势与政策1",
        "course_gp": "3.0",
        "course_credit": "1.0",
        "score_text": "80"
      },
      {
        "course_name": "体育与健康1",
        "course_gp": "4.0",
        "course_credit": "1.0",
        "score_text": "90"
      },
      {
        "course_name": "C语言b",
        "course_gp": "3.7",
        "course_credit": "3.0",
        "score_text": "87"
      },
      {
        "course_name": "劳动教育理论",
        "course_gp": "5.0",
        "course_credit": "1.0",
        "score_text": "100"
      },
      {
        "course_name": "线性代数b",
        "course_gp": "4.4",
        "course_credit": "2.5",
        "score_text": "94"
      }
    ]
  }
]
```

</details>

---

### 一周课程查询

::: theorem 接口

- 路径： `/get-course-data`
- 方法： `GET`
- 身份认证：是
  :::

以下为该接口可用的请求参数：
| 参数 | 类型 | 规则 | 示例 | 备注 |
|----------|--------|-----------|------------------|------|
| rawPassword | string | 必填 | 025845 | 密码 |
| user_code | string | 必填 | 312201040589 | 学号 |

可能存在的错误：
| 错误代码 | 原因 |
|------|---------|
| 404 | 学号或密码错误 |

以下是一个响应示例：

<details> <summary>get-course-data</summary>

```json
[
  {
    "courseName": "习近平新时代中国特色社会主义思想概论",
    "date": "2024-10-29",
    "startTime": "10:10",
    "endTime": "12:00",
    "address": "南校区 南校区1号教学楼 1103"
  },
  {
    "courseName": "习近平新时代中国特色社会主义思想概论",
    "date": "2024-10-31",
    "startTime": "10:10",
    "endTime": "12:00",
    "address": "南校区 南校区1号教学楼 1103"
  },
  {
    "courseName": "电磁场与电磁波",
    "date": "2024-10-31",
    "startTime": "08:00",
    "endTime": "09:50",
    "address": "南校区 南校区2号教学楼 2203"
  },
  {
    "courseName": "电磁场与电磁波",
    "date": "2024-10-29",
    "startTime": "08:00",
    "endTime": "09:50",
    "address": "南校区 南校区2号教学楼 2203"
  },
  {
    "courseName": "电子设计自动化",
    "date": "2024-10-30",
    "startTime": "14:30",
    "endTime": "16:20",
    "address": "南校区 南校区2号教学楼 2203"
  },
  {
    "courseName": "电子设计自动化",
    "date": "2024-10-28",
    "startTime": "14:30",
    "endTime": "16:20",
    "address": "南校区 南校区2号教学楼 2203"
  },
  {
    "courseName": "数字信号处理",
    "date": "2024-10-31",
    "startTime": "14:30",
    "endTime": "16:20",
    "address": "南校区 南校区2号教学楼 2212"
  },
  {
    "courseName": "数字信号处理",
    "date": "2024-10-28",
    "startTime": "19:00",
    "endTime": "20:50",
    "address": "南校区 南校区2号教学楼 2212"
  },
  {
    "courseName": "通信原理",
    "date": "2024-10-30",
    "startTime": "08:00",
    "endTime": "09:50",
    "address": "南校区 南校区2号教学楼 2305"
  },
  {
    "courseName": "通信原理",
    "date": "2024-10-28",
    "startTime": "08:00",
    "endTime": "09:50",
    "address": "南校区 南校区2号教学楼 2204"
  }
]
```

</details>

---
