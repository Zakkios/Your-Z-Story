const chapter0 = {
    id: "chapter0",
    scenes: {
        intro: {
            id: "intro",
            title: "Bienvenue dans Your Z Story",
            text: "Plongez dans une aventure épique où vous incarnez un héros confronté à des choix cruciaux. Chaque décision que vous prenez façonne votre destin et influence le cours de l'histoire. Êtes-vous prêt à affronter les dangers, à découvrir des secrets et à forger votre propre légende ? L'aventure commence maintenant !",
            choices: [
                {
                    id: "0",
                    text: "Lancer l’aventure !",
                    nextChapterId: "chapter1",
                    nextSceneId: "bulmaCar"
                }
            ]
        }
    }
};

export default chapter0;