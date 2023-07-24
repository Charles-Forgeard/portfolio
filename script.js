const colors = [
    ['rgb(59, 90, 148)','rgb(194, 198, 79)'],
    ['rgb(134, 84, 133)','rgb(196, 197, 81)'],
    ['rgb(208, 72, 150)','rgb(119, 121, 86)'],
    ['rgb(123, 78, 138)','rgb(95, 162, 75)'],
    ['rgb(59, 86, 178)','rgb(205, 176, 95)'],
    ['rgb(143, 89, 142)','rgb(67, 161, 50)'],
    ['rgb(75, 51, 133)','rgb(53, 203, 96)'],
    ['rgb(169, 102, 212)','rgb(132, 161, 71)'],
    ['rgb(212, 74, 187)','rgb(202, 145, 120)'],
    ['rgb(206, 61, 171)','rgb(187, 174, 56)']
]

const randomUnit = ()=>Math.floor(Math.random()*10)

const pic2RandomColors = ()=>colors[randomUnit()]

const setGradColors = (colors)=>{
    const root = document.documentElement
    root.style.setProperty("--gradColor1", colors[0])
    root.style.setProperty("--gradColor2", colors[1])
}

setGradColors(pic2RandomColors(randomUnit()))




