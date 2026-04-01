import { text } from "express";

const chapter1 = {
    id: "1",
    slug: "chapter1",
    title: "Chapitre 1 : La rencontre avec Bulma",
    startSceneId: "bulmaCar",
    scenes: {
        bulmaCar: {
            id: "bulmaCar",
            title: "C’est quoi ce monstre ?!",
            text: "<em>Sur le retour de la pêche, Goku manque de peu de se faire percuté par une voiture.</em> <br> <strong>Goku :</strong> “C’est quoi ce monstre ?! Il en veut à mon poisson ?!”",
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
            text: "Bulma te demande de lui donner la Dragon Ball de ton grand-père pour qu'elle puisse exaucer son vœu. Que fais-tu ?",
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
                    text: `<em>Goku rencontre Bulma pour la première fois.</em> Depuis la mort de son grand-père, il a toujours vécu seul… <strong>c’est même la première humaine qu’il rencontre.</strong> <br/><em>Leur échange est… plutôt étrange.</em> Sans trop se poser de questions, Goku décide de l’emmener chez lui. <br/>À l’intérieur, un objet d’un <strong>orange brillant</strong> attire immédiatement l’attention de <strong>Bulma</strong>.`,
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
                    text: `Elle lui apprend alors l'existence des <strong>Dragon Balls</strong> et de leur pouvoir : <em>“Quand on rassemble les sept <strong>Dragon Balls</strong>, le dragon <strong>Shenron</strong> apparaît pour exaucer n'importe lequel de nos vœux !!”</em>.`,
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
            text: "Tu prends la fuite et te cache dans la montagne. Mais en rentrant chez toi, tu ne retrouve pas la dragon ball de grand-père... Impossible de retrouver cette voleuse...",
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