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
  const svgs = [...document.querySelectorAll('svg.excalidraw-svg')]
  for (const svg of svgs) {
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
    
    panzoom(g, {
      bounds: true,
      boundsPadding: 0.1
      })
      
  }

})
