# simple-react-redux
react-redux简易示例

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

我们先来看看什么是纯函数：

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
上面这个函数就不是纯函数，存在Math.random()这个无法预测的因素，在a,b确定的情况下，我们也无法确定输出的结果是什么。
修改state必须使用纯函数来进行修改，因为state的状态是需要确定的，如果在同一个输入的情况下，我们无法确定输出的state的状态，那我们就无法确定在某一个固定操作后页面下一刻的状态，那就失去了状态统一管理的意义了。

# Redux的三个角色

#### action

action是把数据从数据源传到store的有效载荷。作为store的唯一数据来源，通过store.dispatch()将action传到store。
action是这样的：
```
export const ACTION_DEMO = 'ACTION_DEMO';

function actionDemo(state) {
  return {
    type: ACTION_DEMO,
    payload: state // payload属性名可自定义
  }
}
```
action的本质是返回一个JavaScript对象，这个对象有两个属性：type和payload。
type属性表示将要执行的动作，在reducers中使用该属性进行匹配；payload属性是需要传给store的数据。

#### reducers

reducer在这里做了两件事情：

1. 当action发出了更新state请求后，要如何更新state，这就是reducer要做的事情。
 
action返回了一个JavaScript对象后，reducers就会接收这个JavaScript对象，并返回新的state。
```
(prevState, action) => newState
```
我们前面说过，修改state必须使用纯函数，所以我们的reducer必须是一个纯函数，在reducer中不能修改传入的参数，不能只能有副作用的操作，不能调用非纯函数。
我们写一个reducer：
```
import { ACTION_DEMO } from '../actions/actions';

function actionChange(state = initState, action) {
  switch (action.type) {
    case 'ACTION_DEMO':
      return action.payload.state;
    default:
      return state;
  }
}
```
在reducer中引入上面action中导出的ACTION_DEMO，并且创建了一个函数actionChange，这个函数接收两个参数，state和action，在函数中我们使用switch...case...来处理从action发送过来的对象。
我们去匹配action.type，当能匹配到时，我们会返回对象中的新state，如果没有匹配到，需要设置一个默认返回值，这个默认值就是旧的state。
在case 'ACTION_DEMO'中，我们可以对新的state进行处理，但是请注意，我们不能直接修改state，例如
```
return Object.assign(action.payload.state, {...state})
```
这种做法是绝对不允许的，需要使用
```
return Object.assign({}, action.payload.state, {...state})
```
这样的写法，这样才能保证传进来的state不被修改。

2. 我们前面说过，Redux使用状态树对整个应用进行管理，而这个状态树的设计也是在reducer中所做的事情。


