import chapter1 from "./chapters/chapter1.js"
import chapter2 from "./chapters/chapter2.js"

const gameData = {
    chapters: {
        [chapter1.id]: chapter1,
        [chapter2.id]: chapter2
    }
}

export default gameData;