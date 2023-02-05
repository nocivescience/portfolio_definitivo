window.onload=()=>{
    // const lineHorizon=document.getElementById('line-right-container')
    const imagen1= document.getElementById('imagen1')
    const imagen2= document.getElementById('imagen2')
    const imagen3= document.getElementById('imagen3')
    // lineHorizon.setAttribute('y2','11')
    const cargarImagen=(entradas, observador)=>{
        entradas.forEach(entrada=>{
            if(entrada.isIntersecting){
                const random=Math.floor(Math.random()*3)
                entrada.target.classList.add(`active-image-${random}`)
                // lineHorizon.setAttribute('y2', entrada.intersectionRatio*100+'%')
            }
        })
    }
    const observador= new IntersectionObserver(cargarImagen,{
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1
    })
    observador.observe(imagen1)
    observador.observe(imagen2)
    observador.observe(imagen3)
}