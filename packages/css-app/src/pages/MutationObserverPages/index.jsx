import './index.scss';
import {useEffect, useState}  from 'react'
const MutationObserverPage = () => {
  const  [ comments,setComments]=useState([])
  useEffect(()=>{
    // 选择需要观察变动的节点  
    const target = document.getElementById("comments-container")
    // 观察器的配置（需要观察子元素的增加）
    const config = {childList:true,subtree:true, attributes: true,}
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

  const handleCellClick =(e)=>{
    e.target.setAttribute('data-custom-attr', 'newValue');
  }
  return <>
      <div id="comments-container">
          {comments.map(item=><div onClick={handleCellClick} className='comment box' key={item}>{item}</div>)}
      </div>
      <button id='load-more-comments' onClick={handleClick}>加载更多评论</button>
  </>
}
export default MutationObserverPage