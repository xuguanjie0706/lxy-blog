# MutationObserver

`MutationObserver`是一个Web API，它允许开发者监视DOM（文档对象模型）的变化。当你想要在某个元素或其子元素发生变化时执行某些动作时，MutationObserver 是非常有用的。

## 语法

```
var callback = function(mutationsList, observer) {
    // 处理 mutationsList...
};

// 创建一个 MutationObserver 实例，传入回调函数
var observer = new MutationObserver(callback);

// 以上面的配置开始观察目标节点
observer.observe(targetNode, config);
```

## config

1. childList

- 类型：boolean
- 描述：当目标节点的子节点被添加或删除时触发。注意，这不会观察子节点的后代节点的变化。

2. attributes

- 类型：boolean
- 描述：当目标节点的属性被修改时触发。

3. characterData

- 类型：boolean
- 描述：当目标节点或其后代节点的文本内容被修改时触发。注意，这个选项不会观察节点的添加或删除，只会观察文本内容的变化。

4. subtree

- 类型：boolean
- 描述：当目标节点或其后代节点的任何变化（由上述选项指定的类型）被触发时，都会触发。这个选项必须与上述的其他选项之一结合使用。

5. attributeOldValue

- 类型：boolean
- 描述：如果设置为true，则在attributes为true或省略时，会记录变化之前的属性值。

6. characterDataOldValue

- 类型：boolean
- 描述：如果设置为true，则在characterData为true或省略时，会记录变化之前的字符数据。

7. attributeFilter

- 类型：Array
- 描述：当attributes为true或被忽略时，可以指定一个属性名数组，只观察这些属性的变化。

## 你可以轻松实现页面增加节点滚动到对应节点下

```
import {useEffect, useState}  from 'react'
const MutationObserverPage = () => {
  const  [ comments,setComments]=useState([])
  useEffect(()=>{
    // 选择需要观察变动的节点
    const target = document.getElementById("comments-container")
    // 观察器的配置（需要观察子元素的增加）
    const config = {childList:true,subtree:true}
    // 回调函数，当观察到变动时执行
    const callback = (mutationList,observer)=>{
      // 遍历所有变动
      console.log(mutationList)
      for(let mutation of mutationList){
        if(mutation.type==="childList"){
          target.scrollTo({
            top:target.scrollHeight,
            behavior:'smooth'
          })
        }
      }
    }
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback)
    // 以上面的配置开始观察目标节点
    observer.observe(target,config)
  },[])

  const handleClick =()=>{
    const _comments = [...comments]
    _comments.push(comments.length+1)
    setComments(_comments)
  }
  return <>
      <div id="comments-container">
          {comments.map(item=><div className='comment box' key={item}>{item}</div>)}
      </div>
      <button id='load-more-comments' onClick={handleClick}>加载更多评论</button>
  </>
}
export default MutationObserverPage
```
