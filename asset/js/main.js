let _btn = document.querySelectorAll('.menu button')
let _pics = document.getElementsByClassName('pics')[0]
let _all = document.getElementsByClassName('all')[0]
// let _test = document.getElementsByClassName('test')[0]

_btn.forEach((val) => {
    val.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'rgb(202, 177, 145)'
        e.target.style.border = '3px solid rgb(202, 177, 145)'
    })
    val.addEventListener('mouseleave', (e) => {
        e.target.style.background = 'none'
        // e.target.style.border = '3px solid rgb(202, 177, 145)'
    })
})


// Fetch
fetch('text.json')
    .then(resp => resp.json())
    .then(myData => {
        
        _allCat(myData)
        _btn[0].addEventListener('click', () => {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            _allCat(myData)
        })
        
    _btn[1].addEventListener('click', ()=>{
        document.getElementsByClassName('pics')[0].innerHTML = ''
        _break(myData)
    })
    _btn[2].addEventListener('click', ()=>{
        document.getElementsByClassName('pics')[0].innerHTML = ''
        _lunch(myData)
    })
    _btn[3].addEventListener('click', ()=>{
        document.getElementsByClassName('pics')[0].innerHTML = ''
        _shake(myData)
    })
    _btn[4].addEventListener('click', ()=>{
        document.getElementsByClassName('pics')[0].innerHTML = ''
        _dinner(myData)
    })
    

    })

function _allCat(myData) {
    let _all = document.createElement('div')
    _all.className = 'all col-xl-12 d-xl-flex flex-xl-wrap'
    myData.result.map((val) => {
        let _newDiv = document.createElement('div')
        _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
        _newDiv.innerHTML = `
       <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
       <img src="${val.img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
       <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
           <div class="title">
               ${val.title}
               <h4>$${val.price}</h4>
           </div>
           <div class="description col-lg-12">
               ${val.desc}
           </div>
       </figcaption>
   </figure>
        `
        _all.appendChild(_newDiv) 
        _pics.appendChild(_all)
    })
}

function _lunch(myData){
    let _all = document.createElement('div')
    _all.className = 'all col-xl-12 d-xl-flex flex-xl-wrap'
    myData.result.map(val=>{
        if(val.category == 'lunch'){
            let _newDiv = document.createElement('div')
            _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
            _newDiv.innerHTML = `
           <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
           <img src="${val.img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
           <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
               <div class="title">
                   ${val.title}
                   <h4>$${val.price}</h4>
               </div>
               <div class="description col-lg-12">
                   ${val.desc}
               </div>
           </figcaption>
       </figure>
            `
            _all.appendChild(_newDiv) 
            _pics.appendChild(_all)
        }
    })
}
function _break(myData){
    let _all = document.createElement('div')
    _all.className = 'all col-xl-12 d-xl-flex flex-xl-wrap'
    myData.result.map(val=>{
        if(val.category == 'breakfast'){
            let _newDiv = document.createElement('div')
            _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
            _newDiv.innerHTML = `
           <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
           <img src="${val.img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
           <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
               <div class="title">
                   ${val.title}
                   <h4>$${val.price}</h4>
               </div>
               <div class="description col-lg-12">
                   ${val.desc}
               </div>
           </figcaption>
       </figure>
            `
            _all.appendChild(_newDiv) 
            _pics.appendChild(_all)
        }
    })
}
function _shake(myData){
    let _all = document.createElement('div')
    _all.className = 'all col-xl-12 d-xl-flex flex-xl-wrap'
    myData.result.map(val=>{
        if(val.category == 'shakes'){
            let _newDiv = document.createElement('div')
            _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
            _newDiv.innerHTML = `
           <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
           <img src="${val.img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
           <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
               <div class="title">
                   ${val.title}
                   <h4>$${val.price}</h4>
               </div>
               <div class="description col-lg-12">
                   ${val.desc}
               </div>
           </figcaption>
       </figure>
            `
            _all.appendChild(_newDiv) 
            _pics.appendChild(_all)
        }
    })
}
function _dinner(myData){
    let _all = document.createElement('div')
    _all.className = 'all col-xl-12 d-xl-flex flex-xl-wrap'
    myData.result.map(val=>{
        if(val.category == 'dinner'){
            let _newDiv = document.createElement('div')
            _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
            _newDiv.innerHTML = `
           <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
           <img src="${val.img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
           <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
               <div class="title">
                   ${val.title}
                   <h4>$${val.price}</h4>
               </div>
               <div class="description col-lg-12">
                   ${val.desc}
               </div>
           </figcaption>
       </figure>
            `
            _all.appendChild(_newDiv) 
            _pics.appendChild(_all)

        }
    })
}

// function _repeat(myData){
    
//             let _newDiv = document.createElement('div')
//             _newDiv.className =  'newDiv col-12 col-lg-10 mt-5 ms-lg-5 me-xl-4 col-xl-5  flex-wrap d-flex'
//             _newDiv.innerHTML = `
//            <figure class="d-flex flex-sm-wrap flex-xl-nowrap col-sm-12">
//            <img src="${myData.result[i].img}" alt="" class="mt-2 ms-sm-5 ps-ms-5 ms-lg-0 ps-lg-0">
//            <figcaption class="col-sm-12 col-md-10 col-lg-6 p-4 ps-lg-5 ps-xl-0 pe-lg-0 me-lg-0  pb-0  ms-md-5 ms-lg-0 ms-xl-3 mt-1">
//                <div class="title">
//                    ${myData.result[i].title}
//                    <h4>$${myData.result[i].price}</h4>
//                </div>
//                <div class="description col-lg-12">
//                    ${myData.result[i].desc}
//                </div>
//            </figcaption>
//        </figure>
//             `
//             _all.appendChild(_newDiv) 
//             _pics.appendChild(_all)
// }