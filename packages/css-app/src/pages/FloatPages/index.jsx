import { useEffect } from 'react';
import './index.scss';

import {computePosition ,offset,autoPlacement} from "@floating-ui/dom"
const FloatPages = () => {
   
    useEffect(()=>{
       
    },[])

    const handleMouseEnter = ()=>{
        const button = document.querySelector('#button');
        const tooltip = document.createElement("div")
        tooltip.innerHTML = `My floating element`
        tooltip.id='tooltip'
        document.body.appendChild(tooltip)
        // el.appendChild<div id="tooltip"></div>
        computePosition(button, tooltip,{
            placement:"right",
            middleware: [offset(10),autoPlacement()],
        }).then(({x, y}) => {  
            Object.assign(tooltip.style, {
              left: `${x}px`,
              top: `${y}px`,
            });
          });
    }
  
  return <>
    <button id="button" onMouseEnter={handleMouseEnter} style={{marginLeft:"1100px"}}>My reference element</button>
  </>
}
export default FloatPages