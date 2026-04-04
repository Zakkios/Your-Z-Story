const chapter1 = {
    id: "1",
    slug: "chapter1",
    title: "Chapitre 1 : La rencontre avec Bulma",
    startSceneId: "bulmaCar",
    scenes: {
        bulmaCar: {
            id: "bulmaCar",
            title: "C’est quoi ce monstre ?!",
            text: `<span class="cc-wild-words-italic">Sur le retour de la peche, Goku manque de peu de se faire percute par une voiture.</span> <br> <span class="cc-wild-words-bold-italic">Goku :</span> “C’est quoi ce monstre ?! Il en veut a mon poisson ?!”`,
            status: "ongoing",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/bulma-car/1.png",
                    text: "",
                    animation: "engine-vibration",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot2",
                    image: "/images/chapter1/bulma-car/2.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot3",
                    image: "/images/chapter1/bulma-car/3.png",
                    text: "",
                    animation: "danger-pulse",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot4",
                    image: "/images/chapter1/bulma-car/4.png",
                    text: "",
                    animation: "",
                    transition: "slide-left",
                    isImageType: "true"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Affronter la voiture",
                    nextChapterId: "1",
                    nextSceneId: "carFight"
                },
                {
                    id: "1",
                    text: "Prendre la fuite",
                    nextChapterId: "1",
                    nextSceneId: "carRun"
                }
            ]
        },
        carFight: {
            id: "carFight",
            title: "Un choix important",
            text: "Bulma te demande de lui donner la Dragon Ball de ton grand-pere pour qu'elle puisse exaucer son voeu. Que fais-tu ?",
            status: "ongoing",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/car-fight/1.png",
                    text: "",
                    animation: "danger-pulse",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot2",
                    image: "/images/chapter1/car-fight/2.png",
                    text: "",
                    animation: "engine-vibration",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot3",
                    image: "/images/chapter1/car-fight/3.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot4",
                    image: "/images/chapter1/car-fight/4.png",
                    text: "",
                    animation: "slide-left",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot5",
                    image: "/images/chapter1/car-fight/5.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot6",
                    image: "/images/chapter1/car-fight/6.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot7",
                    image: "",
                    text: `<span class="cc-wild-words-italic">Goku rencontre Bulma pour la premiere fois.</span> Depuis la mort de son grand-pere, il a toujours vecu seul… <span class="cc-wild-words-bold-italic">c’est meme la premiere humaine qu’il rencontre.</span> <br/><span class="cc-wild-words-italic">Leur echange est… plutot etrange.</span> Sans trop se poser de questions, Goku decide de l’emmener chez lui. <br/>À l’interieur, un objet d’un <span class="cc-wild-words-bold-italic">orange brillant</span> attire immediatement l’attention de <span class="cc-wild-words-bold-italic">Bulma</span>.`,
                    animation: "",
                    transition: "",
                    isImageType: "false"
                },
                {
                    id: "shot8",
                    image: "/images/chapter1/car-fight/8.png",
                    text: ``,
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot9",
                    image: "/images/chapter1/car-fight/9.png",
                    text: `Elle lui apprend alors l'existence des <span class="cc-wild-words-bold-italic">Dragon Balls</span> et de leur pouvoir : <span class="cc-wild-words-italic">“Quand on rassemble les sept <span class="cc-wild-words-bold-italic">Dragon Balls</span>, le dragon <span class="cc-wild-words-bold-italic">Shenron</span> apparait pour exaucer n'importe lequel de nos voeux !!”</span>.`,
                    animation: "",
                    transition: "",
                    isImageType: "true"
                },
                {
                    id: "shot10",
                    image: "/images/chapter1/car-fight/10.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
                }
            ],
            choices: [
                {
                    id: "0",
                    text: "Accepter",
                    nextChapterId: "1",
                    nextSceneId: "giveDragonBall"
                },
                {
                    id: "1",
                    text: "Refuser",
                    nextChapterId: "2",
                    nextSceneId: "nextScene"
                }
            ]
        },
        carRun: {
            id: "carRun",
            title: "Tu as choisi de prendre la fuite !",
            text: "Tu prends la fuite et te cache dans la montagne. Mais en rentrant chez toi, tu ne retrouve pas la dragon ball de grand-pere... Impossible de retrouver cette voleuse...",
            status: "gameover",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/car-run/1.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
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
                    text: "Retourner à l'écran titre",
                    nextChapterId: "0",
                    nextSceneId: "0"
                }
            ]
        },
        giveDragonBall: {
            id: "giveDragonBall",
            title: "Tu as donné la Dragon Ball à Bulma !",
            text: "Bulma est ravie ! Elle te remercie et s’en va avec la Dragon Ball. Tu ne la reverras jamais…",
            status: "gameover",
            shots: [
                {
                    id: "shot1",
                    image: "/images/chapter1/car-run/1.png",
                    text: "",
                    animation: "",
                    transition: "",
                    isImageType: "true"
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
                    text: "Retourner à l'écran titre",
                    nextChapterId: "0",
                    nextSceneId: "0"
                }
            ]
        }
    }
};

export default chapter1;