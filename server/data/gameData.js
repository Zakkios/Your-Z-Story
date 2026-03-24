import intro from "./chapters/intro.js"
import chapter1 from "./chapters/chapter1.js"

const gameData = {
    chapters: {
        intro,
        ...chapter1
    }
}

export default gameData;