# simple-react-redux
react-redux, react-router

## 目录结构
1. actions
  存放Redux的action
2. reducers
  存放Redux的reducer
3. components
  存放react组件
4. config
  存放配置文件


### Redux

1. Redux是什么

Redux是JavaScript的一个状态容器，能提供可预测的状态的管理，由Flux演变而来，但是又避开了Flux的复杂性。
React-Redux是Redux在React中的应用，可以让我们在React中使用Redux进行状态管理。

2. 状态树

Redux使用状态树对状态进行管理，页面上组件的状态都保存在某个状态节点中，状态节点使用combineReducer()函数组合为状态树。

> 状态树的状态和页面必然一一对应。

也就是说，状态树中任何一个状态的的改变，必然会引起页面产生相应的变化。
