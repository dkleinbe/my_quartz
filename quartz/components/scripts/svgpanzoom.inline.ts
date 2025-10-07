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
  const svgs = [...document.querySelectorAll('svg.panzoom')]
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
    
    var timer
    var touchduration = 500
    var event
    var longtouch = false
    function onlongtouch() {
      console.log("+ dispach event")
      longtouch = true
      document.removeEventListener('touchmove', stoptimer);
      document.removeEventListener('touchend', stoptimer);
      //instance.pause()
      svg.dispatchEvent(event, {timestamp: Date.now()})
    }

    function stoptimer(e) {
      if (timer) {
        console.log("+ clear timer")
        document.removeEventListener('touchmove', stoptimer);
        document.removeEventListener('touchend', stoptimer);
        clearTimeout(timer)
        timer = null
      }
    }

    var instance = panzoom(g, {
      bounds: true,
      boundsPadding: 0.1,
      onTouch: function(e) {
        console.log("+ longtouch", longtouch)
        if (longtouch) {
          //console.log("+ longtouch")
          longtouch = false
          return false // tells the library to not preventDefault.
        }
        event = e
        document.addEventListener('touchmove', stoptimer);
        document.addEventListener('touchend', stoptimer);
        timer = setTimeout(onlongtouch, touchduration);
        
        return true; 
      }
    })
  }

})
