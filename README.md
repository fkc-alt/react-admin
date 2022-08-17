# React-admin

# 介绍
```
   React-admin 是一个基于 React 的管理系统框架。
   主要作用是为了更好的构建一个基础的管理系统。
   该框架主要使用的技术包含React全家桶,配置了eslint和husky，充分保障了代码质量，以及git commit时的规范管理。
   实现了权限路由以及redux的状态管理，并且采用了自动化导入的功能。仅需配置无需再次引入。
```
---

***如果你也喜欢开源，如果你也喜欢这个项目请留下你的 Star 🌟，你们的 🌟 是对作者最大的鼓励，或者留下你的代码我们一起让他变得更好~~~***

---

### **项目预览**

---

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f12ad0dc8f834b02bc131c4ec4045712~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

---


## **路由使用**
   如：新增一个 Excel页面 然后在pages下面建立Excel/index.jsx文件，然后在router文件夹下的modules下建立excel/index.js引入Excel/index.jsx文件并导出即可。

   Component参数应为组件，可以不传递props参数。
     ps（props包含的参数有路由元信息，如需要获取路由元信息，则就配置props，本路由表配置经过二次封装，可以直接使用，如有使用上的问题，烦请咨询作者，切勿改动代码）
```
  [{
    hidden: false,
    key: "/",
    label: "首页",
    path: "/",
    icon: <DesktopOutlined />,
    Component: (props) => <Excel {...props} />,
  }]
```
  
---
## 环境配置说明
```
   REACT_APP_ORIGIN = http://localhost:3000
   REACT_APP_API = /rsapi
   //如果需要其他配置可自行添加，必须REACT_APP开头命名！
```

# 初始化
---
```
   npm install
   npm start
```

---
# build
```
   npm run build
```

---