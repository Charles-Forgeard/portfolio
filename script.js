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

dialogEmail_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    dialogEmail.close()
    copyEmailBtn.focus()
})

const isClipboardWriteAllowed = async ()=>{
    const {state} = await navigator.permissions.query({name: "clipboard-write"})
    return ["granted","prompt"].includes(state)
}

const dialogEmailBaseText = dialogEmail_text.innerText;

copyEmailBtn.addEventListener('click', async (e)=>{
    e.preventDefault()
    const email = copyEmailBtn.dataset.email
    window.location.href =`mailto:${email}?subject=Prise%20de%20contact%20projet%20devWeb&body=Bonjour,%0D%0A%0D%0A{Votre demande}%0D%0A(La rédaction est chronophage? Laissez moi vos coordonnées, je vous recontacte dans les plus brefs délais %F0%9F%9A%80.)%0D%0A%0D%0AVoici%20mes%20coordonnées%20:%0D%0A{Prénom}%20{Nom}%0D%0A{Num tél}%0D%0A{lien de contact}`
    dialogEmail_text.innerText = dialogEmailBaseText
    try{
        dialogEmail.setAttribute('open','true');
        dialogEmail_btn.focus()
        console.log(await isClipboardWriteAllowed())
        if(await isClipboardWriteAllowed()){
            await navigator.clipboard.writeText(email);
            setTimeout(()=>{
                copyEmailBtn.focus()
                dialogEmail.close()
            },5000)
        }else{
            dialogEmail_text.innerText = `Email à copier: ${dialogEmail_text.dataset.errortext}`;
        }
    }catch(e){
        console.warn(e)
        dialogEmail_text.innerText = `Email à copier: ${dialogEmail_text.dataset.errortext}`;
    }
})




