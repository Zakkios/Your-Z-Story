const chapter2 = {
    id: "2",
    slug: "chapter2",
    title: "Chapitre 2 : Le début d'une grande aventure",
    startSceneId: "mysteriousTurtle",
    scenes: {
        mysteriousTurtle: {
            id: "",
            title: "La mysterieuse tortue",
            text: "Tu arrives dans la ville et tu découvres un monde nouveau !",
            status: "ongoing",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter2/mysterious-turtle/1.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot2",
                    image: "/images/chapter2/mysterious-turtle/2.png",
                    text: "",
                    animation: "",
                    transition: "slide-left",
                    isImageType: "true"
                },
                {
                    id: "shot3",
                    image: "/images/chapter2/mysterious-turtle/3.png",
                    text: "",
                    animation: "engine-vibration",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot4",
                    image: "/images/chapter2/mysterious-turtle/4.png",
                    text: "",
                    animation: "",
                    transition: "slide-right",
                    isImageType: "true"
                },
                {
                    id: "shot5",
                    image: "/images/chapter2/mysterious-turtle/5.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot6",
                    image: "",
                    text: `<span class="cc-wild-words-italic">Surpris de voir une tortue, Goku la presente a Bulma.</span> La tortue affamee reclame a manger, que Bulma lui donne. <br/>Apres avoir repris des forces, la tortue <span class="cc-wild-words-bold-italic">commence a expliquer sa situation.</span>`,
                    animation: "",
                    transition: "",
                    isImageType: "false"
                },
                {
                    id: "shot7",
                    image: "/images/chapter2/mysterious-turtle/7.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Proposer ton aide",
                    nextChapterId: "2",
                    nextSceneId: "meetMutenRoshi"
                },
                {
                    id: "1",
                    text: "Lui souhaiter chance",
                    nextChapterId: "2",
                    nextSceneId: "turtleDie"
                }
            ]
        },
        meetMutenRoshi: {
            id: "meetMutenRoshi",
            title: "Rencontrer Muten Roshi",
            text: "Tu rencontres Muten Roshi, un ancien maître de la kendo.",
            status: "ongoing",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/car-fight/1.png",
                    animation: "danger-pulse",
                    transition: ""
                },
                {
                    id: "shot2",
                    image: "/images/chapter1/car-fight/2.png",
                    animation: "engine-vibration",
                    transition: ""
                },
                {
                    id: "shot3",
                    image: "/images/chapter1/car-fight/3.png",
                    animation: "",
                    transition: ""
                },
                {
                    id: "shot4",
                    image: "/images/chapter1/car-fight/4.png",
                    animation: "",
                    transition: "slide-left"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Continuer l’aventure",
                    nextChapterId: "2",
                    nextSceneId: "nextScene"
                }
            ]
        },
        turtleDie: {
            id: "turtleDie",
            title: "La tortue à été mangée !",
            text: `<span class="cc-wild-words-italic">Sans ton escorte, cette malheureuse tortue a ete mangee par le premier monstre venu...</span> <br/>Elle etait d'une <span class="cc-wild-words-bold-italic">importance capitale</span> pour trouver l'une des sept Dragon Balls. <br/>Sans elle, <span class="cc-wild-words-bold-italic">tu ne pourras jamais la retrouver.</span>`,
            status: "gameover",
            shots: [
                {
                    id: "shot1",
                    image: "/images/gameover/2.png",
                    animation: "",
                    transition: ""
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Recommencer le chapitre",
                    nextChapterId: "2",
                    nextSceneId: "mysteriousTurtle"
                },
                {
                    id: "1",
                    text: "Abandonner et retourner à l'écran titre",
                    nextChapterId: "0",
                    nextSceneId: "0"
                }
            ]
        }
    }
};

export default chapter2;