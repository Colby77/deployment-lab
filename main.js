console.log('hello world')

let siteBtn = document.getElementById('site-btn')

const fakeError = () => {
    alert('Our site is undergoing temporary maintenance')
}

siteBtn.addEventListener('click', fakeError)