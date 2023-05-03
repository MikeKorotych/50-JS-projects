const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const url = 'https://icanhazdadjoke.com'
const config = {
  headers: { Accept: 'application/json' },
}

// using .then
// generateJoke()
// function generateJoke() {
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

// using async await
const generateJokeV2 = async (url) => {
  const res = await fetch(url, config)
  const data = await res.json()

  jokeEl.innerHTML = data.joke
}
generateJokeV2(url)

jokeBtn.addEventListener('click', () => generateJokeV2(url))
