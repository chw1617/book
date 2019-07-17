##笔记
###小程序数基于组件开发，方便维护
```
1.有组件就需要有路由
2.路由的跳转运用json的文件，有全局和局部的json
3.全局的是使用page,局部的json是useingComponents{key:value}

```
###组件可以继承全局的样式只有color,font
###如何方便快捷的把代码托管到多个平台呢？
```
例如我有下面两个仓库： 
https://gitee.com/zkzong/mongodb.git 
https://github.com/zkzong/mongodb.git

先添加第一个仓库： 
git remote add origin https://gitee.com/zkzong/mongodb.git 
再添加第二个仓库： 
git remote set-url --add origin https://github.com/zkzong/mongodb.git

如果还有其他，则可以像添加第二个一样继续添加其他仓库。

然后使用下面命令提交： 
git push origin --all
```
###写代码的时候需要考虑到其他因素的影响
###数据的来源
```
1.wxml
2.js==>wxml
3.服务器==>js==>wxml
```
