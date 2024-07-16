import { useEffect } from 'react';
import './index.scss';
const RippleBtnPages = () => {
    useEffect(()=>{
        const btn = document.querySelector(".ripple-btn")
        const {width,height} = btn.getBoundingClientRect()
        btn.addEventListener("click",(e)=>{
            const {offsetX,offsetY} = e
            const ripple = document.createElement('span')
            ripple.classList.add("ripple-effect")
             // 方案1：计算波纹span大小坐标
            ripple.style.height = '30px'
            ripple.style.width = '30px'
            ripple.style.left = `${offsetX - 15}px`
            ripple.style.top = `${offsetY - 15}px`
            btn.appendChild(ripple);
            setTimeout(() => {
                btn.removeChild(ripple);
            }, 600);
        })
    },[])
  return <>
    <button className='ripple-btn'></button>
  </>
}
export default RippleBtnPages