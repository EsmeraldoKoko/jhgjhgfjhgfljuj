const name = document.querySelector('.name')
const email = document.querySelector('.email')
const another = document.querySelector('.another')
const add = document.querySelector('.add')
const removing = document.querySelector('.removing')
const field = document.querySelector('.options')

add.addEventListener('click', ()=>{
    let newfield = document.createElement('input')
    newfield.setAttribute('type','text')
    newfield.setAttribute('size', 50)
    newfield.setAttribute('placeholder','another field...')

    field.appendChild(newfield)
})
removing.onclick = ()=>{
    let tag_remove = field.getElementsByTagName('input')
    if(tag_remove.length > 2){
        field.removeChild(tag_remove[(tag_remove.length) - 1])
    }
}