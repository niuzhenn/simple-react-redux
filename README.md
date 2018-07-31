# simple-react-redux
react-redux, react-router

# 目录结构
1. actions
  存放Redux的action
2. reducers
  存放Redux的reducer
3. components
  存放react组件
4. config
  存放配置文件


# Redux

1. Redux是什么

Redux是JavaScript的一个状态容器，能提供可预测的状态的管理，由Flux演变而来，但是又避开了Flux的复杂性。
React-Redux是Redux在React中的应用，可以让我们在React中使用Redux进行状态管理。

2. 状态树

Redux使用状态树对状态进行管理，页面上组件的状态都保存在某个状态节点中，状态节点使用combineReducer()函数组合为状态树。

> 状态树的状态和页面必然一一对应。

也就是说，状态树中任何一个状态的的改变，必然会引起页面产生相应的变化。

# Redux三大原则

1. 单一数据源

整个应用的状态（state）被储存在一个object tree中，并且这个object tree只保存在唯一的store中。
保证了单一的数据源，调试和开发都会非常容易，数据的流向也会非常明确。

2. state只读

state不能被随意修改，有且只能有一种方式来改变state，这样才能保证数据的流向和正确性。
视图，网络请求等都不能直接修改state，只能表达出需要修改state的意图，修改state的操作都应该集中处理（使用action修改state）。

3. 使用纯函数来修改state

> 为了描述action如果修改state，你需要编写reducers。

我们先来看看什么事纯函数

> 纯函数是一类在输入固定的情况下，输出也一定固定的函数。在纯函数的输入确定的情况下，输入也可以确定。
例如：
```
function sum(a, b) {
  return a + b;
}
```
在a,b确定的情况下，sum的返回值也确定，不存在其他会影响结果的因素。
```
function sum(a, b) {
  return a + b + Math.random()；
}
```
上面这个函数就不是纯函数，存在Math.random()这个无法预测的因素。

# Redux的三个角色

1. action
action

