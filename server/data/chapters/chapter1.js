const chapter1 = {
    id: "1",
    slug: "chapter1",
    title: "Chapitre 1 : La rencontre avec Bulma",
    startSceneId: "bulmaCar",
    scenes: {
        bulmaCar: {
            id: "bulmaCar",
            title: "Une voiture approche !",
            text: "C'est quoi ce monstre ?! Il veut voler mon poisson c'est ça ?!",
            status: "ongoing",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/bulma-car/1.png",
                    animation: "engine-vibration",
                    transition: ""
                },
                {
                    id: "shot2",
                    image: "/images/chapter1/bulma-car/2.png",
                    animation: "",
                    transition: ""
                },
                {
                    id: "shot3",
                    image: "/images/chapter1/bulma-car/3.png",
                    animation: "danger-pulse",
                    transition: ""
                },
                {
                    id: "shot4",
                    image: "/images/chapter1/bulma-car/4.png",
                    animation: "",
                    transition: "slide-left"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Affronter la voiture pour protéger mon poisson",
                    nextChapterId: "1",
                    nextSceneId: "carFight"
                },
                {
                    id: "1",
                    text: "Prendre la fuite pour sauver mon poisson",
                    nextChapterId: "1",
                    nextSceneId: "carRun"
                }
            ]
        },
        carFight: {
            id: "carFight",
            title: "Tu as choisi d'affronter la voiture !",
            text: "Tu affrontes la voiture et tu gagnes !",
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
        carRun: {
            id: "carRun",
            title: "Tu as choisi de prendre la fuite !",
            text: "Tu prends la fuite et te cache dans la montagne. Mais en rentrant chez toi, tu ne retrouve pas la dragon ball de grand-père... Impossible de retrouver cette voleuse...",
            status: "gameover",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/car-run/1.png",
                    animation: "",
                    transition: ""
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Recommencer le chapitre",
                    nextChapterId: "1",
                    nextSceneId: "bulmaCar"
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

export default chapter1;