const toggleBtns = document.querySelectorAll('.faq-toggle')

console.log(toggleBtns)

toggleBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    btn.parentNode.classList.toggle('active')
  })
)
