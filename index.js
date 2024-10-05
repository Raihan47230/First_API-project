const loadBtn=()=>{
     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
     .then(res=>res.json())
     .then(data=>loadDisplay(data))
}

const loadDisplay=(api)=>{
     console.log(api)
     api.map((item)=>{
          console.log(item)
     })
}

loadBtn()