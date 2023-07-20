const colors = [
    ['rgb(244, 0, 255)','rgb(268, 100, 47)'],
    ['rgb(0, 127, 255)','rgb(92, 100, 49)'],
    ['rgb(254, 255, 0)','rgb(41, 100, 49)'],
    ['rgb(0, 237, 235)','rgb(41, 100, 49)'],
    ['rgb(0, 121, 255)','rgb(0, 223, 162)'],
    ['rgb(246, 250, 112)','rgb(255, 0, 96)'],
    ['rgb(121, 224, 238)','rgb(208, 245, 190)'],
    ['rgb(113, 73, 198)','rgb(252, 41, 71)'],
    ['rgb(252, 255, 178)','rgb(182, 234, 250)'],
    ['rgb(207, 0, 0)','rgb(28, 197, 220)']
]

const randomUnit = ()=>Math.floor(Math.random()*10)

const pic2RandomColors = ()=>colors[randomUnit()]

const setGradColors = (colors)=>{
    const root = document.documentElement
    root.style.setProperty("--gradColor1", colors[0])
    root.style.setProperty("--gradColor2", colors[1])
    console.log(colors)
}

setGradColors(pic2RandomColors(randomUnit()))




