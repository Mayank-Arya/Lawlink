let lawyerData = 'http://localhost:8080/lawyer'

    
function FetchData() {
 fetch(`${lawyerData}/getLawyer`)
 .then((res) => res.json())
 .then((data) =>{
     console.log(data)
     displayData(data)
 })
 .catch(err => console.log(err))
}

FetchData()



function displayData(data){
data.forEach(ele=> {
 let div = document.createElement('div')
 div.setAttribute('id',"MainDiv")
 div.addEventListener("click",() => {
   localStorage.setItem("Details",JSON.stringify(ele))
   window.location.href = './LawyerDesc.html'
 })
 let div1 = document.createElement('div')
 div1.setAttribute('id','first_div')
 let div2 = document.createElement('div')
 div2.setAttribute('id','second_div')
 let name = document.createElement('h2')
 name.innerText = ele.name
 let rank = document.createElement('p')
 rank.innerText = `Rank: ${ele.Rank}`
 let pic = document.createElement('img')
 pic.setAttribute('src',ele.image)
 // ele.languages.forEach((el) => {
 //     var language = document.createElement('p')
 //     language.innerText = el
 // })
 let experience = document.createElement('p')
 experience.innerText = `Experience: ${ele.experience}`
//    ele.skills.forEach((el) => {
//     var skills = document.createElement('p')
//     skills.innerText = el
//    })
 let price = document.createElement('p')
 price.innerText = `Price: ${ele.price}`
 let bio = document.createElement('p')
 bio.innerText = ele.bio
 div1.append(name,rank,bio,experience,price)
 div2.append(pic)
 div.append(div1,div2)

 document.getElementById('main_container').append(div)
});  
}


let card = document.getElementById('MainDiv')
