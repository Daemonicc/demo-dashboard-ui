const menus = document.querySelectorAll('.menu')
const message = document.createElement('SPAN')
const sections = document.querySelectorAll('section')


menus.forEach((menu) => {
  menu.addEventListener('click', () => {
    removeActive()
    menu.classList.add('active');
  })
})


function removeActive() {
  menus.forEach((menu) => {
    menu.classList.remove('active');
})
}

generateJoke()

function generateJoke() {
  fetch('https://api.covid19api.com/summary', {
    method: 'GET',
    mode: 'cors',
    cache: 'force-cache',
    credentials: 'same-origin',
    headers: {
       'Content-Type': 'application/json',
    }
  }).then((res) => res.json())
  .then((data) => {
    console.log(data.Countries[125].NewConfirmed)
    message.innerHTML = `The total Number of new cases in Nigeria is ${data.Countries[125].NewConfirmed} bringing the total cases to ${data.Countries[125].TotalConfirmed} <br> Stay safe Observe all Covid-19 protocols 😘😘`
    console.log(message)
    sections.forEach((section) => {
      console.log(section)
      section.appendChild(message)
    })
  })
}

// function generateJoke() {
//   fetch('https://api.covid19api.com/summary', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }).then((res) => res.json())
//   .then((data) => console.log(data.Countries[125]))
// }