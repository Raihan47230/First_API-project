// factes api


const loadfunction=()=>{
     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
     .then(res=> res.json())
     .then(data=> displayCatagories(data.categories))
}
const loadVideo=()=>{
     fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
     
     .then(res=> res.json())
     .then(data=> displayVideo(data.videos)) 
}

{
     // "category_id": "1003",
     // "video_id": "aaae",
     // "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
     // "title": "Inside Amy Schumer",
     // "authors": [
     //     {
     //         "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
     //         "profile_name": "Amy Schumer",
     //         "verified": ""
     //     }
     // ],
     // "others": {
     //     "views": "3.6K",
     //     "posted_date": "15147"
     // },
     // "description": "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy."
 }

const displayVideo=(video)=>{
     const videoContainer=document.getElementById('video')
video.map((item)=>{
     console.log(item)
     const Card=document.createElement('div')
     Card.classList="card card-compact"
     Card.innerHTML=
     `<figure class="h-[200px]">
    <img
    
      src=${item.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
   <div class="px-0 py-2 flex gap-3">
               <div>
                    <img class="h-10 w-10 rounded-full object-cover" src="${item.authors[0].profile_picture}" alt="">
               </div>
               <div >
                    <h2 class="font-bold text-lg text-lime-400">${item.title}</h2>
                    <div class="flex gap-1 ">
                    <p> ${item.authors[0].profile_name}</p>
                    ${item.authors[0].verified==true ?  `<img class="h-5 w-5 " src="https://img.icons8.com/?size=100&id=85190&format=png&color=000000" alt=""></img>` : "" }
                   
                    </div>
                    <p>${item.others.views}</p>
               </div>
          </div>
  `
     videoContainer.append(Card)
})
}

const displayCatagories=(catagories)=>{
     const catagory=document.getElementById('catagories')
     catagories.map((item)=>{
          console.log(item)

          const button=document.createElement('button')
          button.classList="btn"
          button.innerText= item.category

          catagory.append(button)
     })
}

loadfunction()
loadVideo()