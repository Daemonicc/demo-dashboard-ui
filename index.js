const menus = document.querySelectorAll('.menu')
const messageSpans = document.querySelectorAll('.message')
const buttons = document.querySelectorAll('button')


menus.forEach((menu) => {
  menu.addEventListener('click', () => {
    removeActive()
    menu.classList.add('active');
  })
})

buttons.forEach((button) => {
  button.addEventListener('click', getInfo)
})


function removeActive() {
  menus.forEach((menu) => {
    menu.classList.remove('active');
})
}


function getInfo() {
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
    messageSpans.forEach((message) => {
      message.innerHTML= `The total Number of new Covid-19 cases in Nigeria is ${data.Countries[125].NewConfirmed} bringing the total cases to ${data.Countries[125].TotalConfirmed} <br> Stay safe Observe all Covid-19 protocols 😘😘`
    })
  })
}
