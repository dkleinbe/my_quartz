//import { registerEscapeHandler, removeAllChildren } from "./util"


let panzoomImport = undefined
console.log("pan and zoom script loaded")
document.addEventListener("nav", async () => {
  /*
    panzoomImport ||= await import(
    // @ts-ignore
    //"./panzoom.min.js"
    "https://unpkg.com/panzoom@9.4.0/dist/panzoom.min.js"
  )
  //const panzoom = panzoomImport.default
*/
  
  let instance = []

  function switchmotion(bt, ind) {
    if (! instance[ind].isPaused()) {
      instance[ind].pause()
      bt.textContent = "motion on"   
    }
    else {
      instance[ind].resume()
      bt.textContent = "motion off"
    }
  }
  

  const svgs = [...document.querySelectorAll('svg.panzoom')]
  svgs.forEach((svg, index) => {
    
    const div = document.createElement("div")
    div.className = "svgpanzoom-container"
    

    const button = document.createElement("button")
    button.textContent = "motion off"
    button.className = "svgpanzoom-motion-button"
    
    /*
     * - div
     *   - svg
     *   - button
    */
    svg.parentNode?.appendChild(div)
    div.appendChild(svg)
    div.appendChild(button)

    button.addEventListener("click",() => switchmotion(button, index))
    window.addCleanup(() => button.removeEventListener("click", () => switchmotion(button, index)))

    console.log("SVG detected, adding panzoom")
    //svg.setAttribute("width", svg.getAttribute("viewBox")!.split(' ')[2])
    svg.setAttribute("height", svg.getBoundingClientRect().height.toString())
    const g = document.createElementNS('http://www.w3.org/2000/svg','g')
    
    
    const childs = [...svg.children]
    for (const child of childs) {
      if (child instanceof SVGGraphicsElement) 
      {
        if (child.tagName !== 'defs') {
          g.appendChild(child)
        }
      }
    }
    svg.appendChild(g)
    
    // @ts-ignore
    instance[index] = panzoom(g, {
      bounds: true,
      boundsPadding: 0.1,
    })
    
  })

})
