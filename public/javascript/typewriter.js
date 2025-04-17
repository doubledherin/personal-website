function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const words = [
  "Full-stack developer",
  "Generative artist",
  "Writer",
  "Music maker",
]

const el = document.getElementById("typewriter")

let sleepTime = 100
let wordIndex = 0

const writeLoop = async () => {
  while (true) {
    let word = words[wordIndex]

    for (let i = 0; i < word.length; i++) {
      el.innerText = word.substring(0, i + 1)
      await sleep(sleepTime)
    }
    await sleep(sleepTime * 10)

    for (let i = word.length; i > 0; i--) {
      el.innerText = word.substring(0, i - 1)
      await sleep(sleepTime)
    }

    await sleep(sleepTime * 5)

    if (wordIndex === words.length - 1) {
      wordIndex = 0
    } else {
      wordIndex++
    }
  }
}

writeLoop()
