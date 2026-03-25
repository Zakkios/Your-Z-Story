const chapter1 = {
    id: "chapter1",
    scenes: {
        bulmaCar: {
            id: "bulmaCar",
            title: "Une voiture approche !",
            text: "C'est quoi ce monstre ?! Il veut voler mon poisson c'est ça ?!",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/bulma-car/1.png",
                    animation: "swipe-right"
                },
                {
                    id: "shot2",
                    image: "/images/chapter1/bulma-car/2.png",
                    animation: "swipe-left"
                },
                {
                    id: "shot3",
                    image: "/images/chapter1/bulma-car/3.png",
                    animation: "swipe-right"
                },
                {
                    id: "shot4",
                    image: "/images/chapter1/bulma-car/4.png",
                    animation: "swipe-left"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Affronter la voiture pour protéger mon poisson",
                    nextChapterId: "chapter1",
                    nextSceneId: "carFight"
                },
                {
                    id: "1",
                    text: "Prendre la fuite pour sauver mon poisson",
                    nextChapterId: "chapter1",
                    nextSceneId: "carRun"
                }
            ]
        },
        carFight: {
            id: "carFight",
            title: "Tu as choisi d'affronter la voiture !",
            text: "Tu affrontes la voiture et tu gagnes !",
            status: "win",
            choices: [
                {
                    id: "0",
                    text: "Continuer l’aventure",
                    nextChapterId: "chapter2",
                    nextSceneId: "nextChapter"
                }
            ]
        },
        carRun: {
            id: "carRun",
            title: "Tu as choisi de prendre la fuite !",
            text: "Tu prends la fuite et tu sauves ton poisson !",
            status: "lose",
            choices: [
                {
                    id: "0",
                    text: "Recommencer le chapitre",
                    nextChapterId: "chapter1",
                    nextSceneId: "bulmaCar"
                }
            ]
        }
    }
};

export default chapter1;