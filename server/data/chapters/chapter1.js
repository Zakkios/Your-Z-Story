const chapter1 = {
    bulmaCar: {
        id: "bulmaCar",
        title: "Une voiture approche !",
        text: "C'est quoi ce monstre ?! Il veut voler mon poisson c'est ça ?!",
        choices: [
            {
                id: "1",
                text: "Affronter la voiture pour protéger mon poisson",
                nextId: "carFight"
            },
            {
                id: "2",
                text: "Prendre la fuite pour sauver mon poisson",
                nextId: "carRun"
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
                id: "1",
                text: "Continuer l’aventure",
                nextId: "nextChapter"
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
                id: "1",
                text: "Retenter l’aventure",
                nextId: "bulmaCar"
            }
        ]
    }
};

export default chapter1;