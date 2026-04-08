I18N.register("fr", {
  tips: {
    // ========== RECONNAISSANCE DES MOTIFS ==========
    "Look for Repeats": ["Repérez les répétitions", "Observez si les mêmes éléments reviennent encore et encore, par exemple : rouge, bleu, rouge, bleu."],
    "Say It Out Loud": ["Dites-le à voix haute", "Prononcez le motif à haute voix : vous entendrez souvent plus clairement ce qui doit suivre."],
    "Use Your Fingers": ["Servez-vous de vos doigts", "Montrez chaque partie du motif un par un sur vos doigts : la structure devient plus visible."],
    "Find the Group": ["Repérez le petit groupe", "Cherchez le plus petit bloc qui se répète, par exemple « étoile, cœur » ou « grand, grand, petit »."],

    // ========== RAISONNEMENT NUMÉRIQUE ==========
    "Count on Your Fingers": ["Comptez sur vos doigts", "Utilisez vos doigts pour compter : levez-en un à chaque nombre."],
    "Use a Number Line": ["Utilisez une droite numérique", "Imaginez les nombres alignés : 1, 2, 3, 4, 5… Repérez votre position et continuez dans le même rythme."],
    "Look for Jumps": ["Repérez les sauts", "De combien le nombre augmente-t-il (ou diminue-t-il) à chaque fois ? +1 ? +2 ? +5 ?"],
    "Count Out Loud": ["Comptez à voix haute", "Dites les nombres tout haut : le suivant se devine souvent mieux à l’oreille."],

    // ========== RAISONNEMENT LOGIQUE ==========
    "Listen to All the Clues": ["Écoutez tous les indices", "Lisez ou écoutez chaque mot avec attention : chaque détail peut être utile."],
    "Think Step by Step": ["Avancez pas à pas", "Ne vous précipitez pas : une étape après l’autre, comme pour monter un escalier."],
    "Ask: What Do I Know?": ["Demandez-vous : qu’est-ce que je sais ?", "Avant de répondre, listez ce que les indices vous permettent d’affirmer avec certitude."],
    "Picture It in Your Head": ["Représentez-vous la scène", "Imaginez l’histoire : personnes, animaux, objets… Une image mentale aide souvent à trouver la réponse."],

    // ========== RAISONNEMENT SPATIAL ==========
    "Count the Sides": ["Comptez les côtés", "Pour reconnaître une figure, comptez ses côtés : un triangle en a trois, un carré en a quatre."],
    "Look at Corners": ["Regardez les sommets", "Un sommet est le point où deux côtés se rencontrent : les compter aide à nommer la figure."],
    "Think About Turning": ["Imaginez une rotation", "Si vous faites tourner une figure, sa forme ne change pas : un carré reste un carré."],
    "Compare Shapes": ["Comparez les figures", "Les côtés sont-ils droits ou arrondis ? Ont-ils la même longueur les uns que les autres ?"],

    // ========== PROBLÈMES MATHÉMATIQUES ==========
    "Draw a Picture": ["Faites un dessin", "Si l’énoncé parle de pommes ou de jouets, dessinez-les : c’est plus simple pour compter."],
    "Break It Into Steps": ["Découpez en petites étapes", "Un gros problème, ce sont plusieurs petites questions : traitez-les une après l’autre."],
    "Check Your Answer": ["Vérifiez votre réponse", "Une fois le résultat trouvé, contrôlez en recomptant ou en refaisant l’opération."],
  },
  q: {

  // ==========================================================================
  // RECONNAISSANCE DES MOTIFS — Niveau 1 (TPR57_1_01 – TPR57_1_20)
  // ==========================================================================

  "TPR57_1_01": ["Quelle est la prochaine étape ? Rouge, Bleu, Rouge, Bleu, Rouge, ?", "Regardez les deux couleurs. Ils alternent !", ["Bleu", "Verdoyant", "Rouge", "Jaune"], "Les couleurs alternent : Rouge, Bleu, Rouge, Bleu. Après le rouge vient le bleu."],
  "TPR57_1_02": ["Quelle est la prochaine étape ? Grand, petit, grand, petit, grand, ?", "L'un est grand, l'autre est petit. Cela ne cesse de changer.", ["Grand", "Moyen", "Minuscule", "Petit"], "Grand et petit alternent. Après grand vient petit."],
  "TPR57_1_03": ["Quelle est la prochaine étape ? Haut, bas, haut, bas, haut, ?", "D'abord on monte, puis on descend. Qu'y a-t-il après le sommet ?", ["Au-dessus de", "Vers le bas", "Gauche", "Droite"], "Haut et Bas alternés. Après le haut descend."],
  "TPR57_1_04": ["Quelle est la prochaine étape ? Heureux, triste, heureux, triste, heureux, ?", "Les émotions changent à leur tour.", ["Joyeux", "Bouleversé", "Somnolent", "Triste"], "Alternance heureuse et triste. Après le bonheur vient le triste."],
  "TPR57_1_05": ["Quelle est la prochaine étape ? Étoile, coeur, étoile, coeur, étoile, ?", "Regardez les deux formes. Cela ne cesse de changer !", ["Cœur", "Étoile", "Cercle", "Diamant"], "Étoile et Coeur alternés. Après l'Étoile vient le Cœur."],
  "TPR57_1_06": ["Quelle est la prochaine étape ? 1, 2, 1, 2, 1, ?", "Les nombres vont et viennent entre deux nombres.", ["3", "4", "1", "2"], "Les numéros 1 et 2 alternent. Après 1 vient 2."],
  "TPR57_1_07": ["Quelle est la prochaine étape ? Chat, chien, chat, chien, chat, ?", "Deux animaux alternent.", ["Chat", "Chien", "Oiseau", "Poisson"], "Chat et Chien alternés. Après le Chat vient le Chien."],
  "TPR57_1_08": ["Quelle est la prochaine étape ? Soleil, Lune, Soleil, Lune, Soleil, ?", "Pensez au jour et à la nuit. Changement!", ["Étoile", "Nuage", "Mois", "Soleil"], "Soleil et Lune alternent. Après le Soleil vient la Lune."],
  "TPR57_1_09": ["Quelle est la prochaine étape ? Cercle, carré, cercle, carré, cercle, ?", "Deux formes alternent.", ["Triangle", "Cercle", "Rectangle", "Carré"], "Cercle et Carré alternent. Après le Cercle vient le Carré."],
  "TPR57_1_10": ["Quelle est la prochaine étape ? Jour, nuit, jour, nuit, jour, ?", "Le jour et la nuit ne cessent de changer !", ["Matin", "Jour", "Soirée", "Nuit"], "Jour et nuit alternés. Après le jour vient la nuit."],
  "TPR57_1_11": ["Quelle est la prochaine étape ? Chaud, froid, chaud, froid, chaud, ?", "L’un est chaud, l’autre est froid. Cela ne cesse de changer.", ["Tiède", "Froid", "Chaud", "Cool"], "Chaud et froid alternent. Après le chaud vient le froid."],
  "TPR57_1_12": ["Quelle est la prochaine étape ? Pomme, banane, pomme, banane, pomme, ?", "Deux fruits ne cessent de se changer !", ["Cerise", "Pomme", "Banane", "Raisins"], "Pomme et banane alternées. Après la pomme vient la banane."],
  "TPR57_1_13": ["Combien de points reste-t-il ensuite ? 1 point, 2 points, 3 points, ?", "Comptez les points. Le nombre augmente de un à chaque fois !", ["5 points", "2 points", "4 points", "1 point"], "Les points augmentent de un à chaque fois : 1, 2, 3, puis 4 points."],
  "TPR57_1_14": ["Combien d’applaudissements arrivent ? 1 temps, 2 temps, 3 temps, 4 temps, ?", "Le nombre d’applaudissements ne cesse d’augmenter. Quel chiffre vient après 4 ?", ["5 battements", "3 temps", "6 battements", "4 temps"], "Les applaudissements augmentent d'un à chaque fois : 1, 2, 3, 4, puis 5 applaudissements."],
  "TPR57_1_15": ["Quelle est la prochaine étape ? Garçon, fille, garçon, fille, garçon, ?", "Un garçon et une fille alternent.", ["Garçon", "Fille", "Bébé", "Homme"], "Garçon et Fille alternent. Après le Garçon vient la Fille."],
  "TPR57_1_16": ["Quelle est la prochaine étape ? Ouvert, Fermé, Ouvert, Fermé, Ouvert, ?", "On ouvre, puis on ferme. On ouvre, puis on ferme. Quelle est la prochaine étape ?", ["Fermé", "Ouvrir", "tentaculaire", "Fermé"], "Alternance ouverte et fermée. Après l'ouverture vient la fermeture."],
  "TPR57_1_17": ["Quelle est la prochaine étape ? Gauche, Droite, Gauche, Droite, Gauche, ?", "La gauche et la droite changent constamment !", ["Droite", "Gauche", "Au-dessus de", "Vers le bas"], "Alternance gauche et droite. Après la gauche vient la droite."],
  "TPR57_1_18": ["Combien d’étoiles y a-t-il ensuite ? 1 étoile, 2 étoiles, 3 étoiles, 4 étoiles, ?", "Comptez les étoiles. Je grandis d'un à chaque fois !", ["3 étoiles", "6 étoiles", "4 étoiles", "5 étoiles"], "Les étoiles augmentent d'une à chaque fois : 1, 2, 3, 4, puis 5 étoiles."],
  "TPR57_1_19": ["Quelle est la prochaine étape ? Noir, Blanc, Noir, Blanc, Noir, ?", "Deux couleurs ne cessent de changer !", ["Gris", "Blanc", "Brun", "Noir"], "Alternance noir et blanc. Après les Noirs vient le Blanc."],
  "TPR57_1_20": ["Quelle est la prochaine étape ? Oui, non, oui, non, oui, ?", "Oui et non alternatifs.", ["Peut être", "Oui", "Pas", "Parfois"], "Oui et non alternatifs. Après le Oui vient le Non."],

  // ==========================================================================
  // RECONNAISSANCE DES MOTIFS — Niveau 2 (TPR57_2_01 – TPR57_2_20)
  // ==========================================================================

  "TPR57_2_01": ["Quelle est la prochaine étape ? Rouge, Rouge, Bleu, Rouge, Rouge, Bleu, Rouge, Rouge, ?", "Regardez le groupe répétitif : deux d’une couleur, puis un d’une autre.", ["Rouge", "Bleu", "Verdoyant", "Jaune"], "Le motif est répétitif rouge, rouge et bleu. Après Rouge, Rouge suit Bleu."],
  "TPR57_2_02": ["Quelle est la prochaine étape ? Clap, clap, tape du pied, clap, clap, tape du pied, clap, clap, ?", "Écoute : deux claps, puis un son différent. Lequel ?", ["Clap", "Saut", "Tape du pied", "Claquement"], "Le motif est : clap, clap, tape du pied. Après deux claps, vient la tape du pied."],
  "TPR57_2_03": ["Quelle est la prochaine étape ? Gros, gros, petit, gros, gros, petit, gros, gros, ?", "Deux gros, puis un petit. Deux gros, puis un... ?", ["Petit", "Super", "Minuscule", "environnement"], "Le motif est répétitif Big, Big, Small. Après Big, Big suit Small."],
  "TPR57_2_04": ["Quelle est la prochaine étape ? A, A, B, B, A, A, B, B, A, A, ?", "Les lettres viennent par paires : deux A, puis deux B.", ["UN", "c", "d", "B"], "Le motif est A, A, B, B répétitif. Après A, A suit B."],
  "TPR57_2_05": ["Quelle est la prochaine étape ? Étoile, étoile, lune, lune, étoile, étoile, lune, lune, étoile, étoile, ?", "Deux étoiles, deux lunes, deux étoiles, deux lunes...", ["Étoile", "Mois", "Soleil", "Nuage"], "Le motif est étoile, étoile, lune, lune répétitive. Après l'Étoile, l'Étoile suit la Lune."],
  "TPR57_2_06": ["Quelle est la prochaine étape ? Rouge, Bleu, Bleu, Rouge, Bleu, Bleu, Rouge, Bleu, ?", "Un rouge, puis deux bleus. Un rouge, puis deux...", ["Rouge", "Bleu", "Verdoyant", "Jaune"], "Le motif est rouge, bleu, bleu répétitif. Après Rouge, Bleu suit Bleu."],
  "TPR57_2_07": ["Quelle est la prochaine étape ? Joyeux, Joyeux, Triste, Joyeux, Joyeux, Triste, Joyeux, Joyeux, ?", "Deux heureux, puis un triste. Deux hourras, puis un... ?", ["Triste", "Joyeux", "Bouleversé", "Somnolent"], "Le motif est heureux, heureux, triste et répétitif. Après Joyeux, Joyeux suit Triste."],
  "TPR57_2_08": ["Quelle est la prochaine étape ? 1, 1, 2, 2, 3, 3, 4, 4, 5, ?", "Chaque numéro apparaît deux fois. Que se passe-t-il après les 5 premiers ?", ["4", "6", "5", "7"], "Chaque numéro apparaît deux fois : 1,1, 2,2, 3,3, 4,4. Après les 5 premiers viennent 5 autres."],
  "TPR57_2_09": ["Quelle est la prochaine étape ? Cercle, Cercle, Carré, Carré, Cercle, Cercle, Carré, ?", "Deux cercles, deux carrés, deux cercles, alors combien de carrés ?", ["Cercle", "Carré", "Triangle", "Rectangle"], "Le motif est Cercle, Cercle, Carré, Carré. Nous avons besoin du deuxième carré."],
  "TPR57_2_10": ["Quelle est la prochaine étape ? Chien, chat, chat, chien, chat, chat, chien, chat, ?", "Un chien, puis deux chats. Un chien, puis deux chats...", ["Chien", "Oiseau", "Poisson", "Chat"], "Le motif est chien, chat, chat répétitif. Après le Chien, le Chat suit le Chat."],
  "TPR57_2_11": ["Quelle est la prochaine étape ? Rouge, Vert, Bleu, Rouge, Vert, Bleu, Rouge, Vert, ?", "Trois couleurs sont répétées dans le même ordre.", ["Rouge", "Verdoyant", "Bleu", "Jaune"], "Le motif est répétitif rouge, vert et bleu. Après le Rouge, le Vert suit le Bleu."],
  "TPR57_2_12": ["Quelle est la prochaine étape ? Grand, petit, petit, grand, petit, petit, grand, petit, ?", "Un gros, puis deux petits. Un gros, puis deux petits...", ["Super", "Petit", "Minuscule", "environnement"], "Le motif est grand, petit, petit et répétitif. Après Big, Small suit Small."],
  "TPR57_2_13": ["Quelle est la prochaine étape ? 1, 2, 3, 1, 2, 3, 1, 2, ?", "Trois nombres sont répétés : 1, 2, 3.", ["1", "4", "2", "3"], "Le motif est 1, 2, 3 répétitifs. Après 1, 2 vient 3."],
  "TPR57_2_14": ["Quelle est la prochaine étape ? Soleil, pluie, pluie, soleil, pluie, pluie, soleil, pluie, ?", "Un soleil, puis deux pluies. Un soleil, puis deux pluies...", ["Pluie", "Soleil", "Nuage", "Neige"], "Le motif est Soleil, Pluie, Pluie répétitif. Après le Soleil, la Pluie suit la Pluie."],
  "TPR57_2_15": ["Quelle est la prochaine étape ? Coeur, étoile, coeur, coeur, étoile, coeur, coeur, étoile, ?", "Après chaque étoile, que se passe-t-il ensuite ?", ["Étoile", "Cercle", "Cœur", "Diamant"], "Le motif est coeur, étoile, coeur répétitif. Après l'Étoile vient le Cœur."],
  "TPR57_2_16": ["Quelle est la prochaine étape ? A, B, C, A, B, C, A, B, ?", "Trois lettres sont répétées dans l'ordre !", ["UN", "B", "d", "c"], "Le motif est répétitif A, B, C. Après A, B suit C."],
  "TPR57_2_17": ["Quelle est la prochaine étape ? Saut, pas, saut, saut, pas, saut, saut, pas, ?", "Trois actions sont répétées dans le même ordre.", ["Saut", "Houblon", "Étape", "vol"], "Le modèle est Hop, Step, Jump qui se répète. Après Hop, Step vient Jump."],
  "TPR57_2_18": ["Quelle est la prochaine étape ? Rouge, Bleu, Rouge, Rouge, Bleu, Rouge, Rouge, Bleu, ?", "Après chaque Bleu, quelle est la prochaine étape ?", ["Bleu", "Verdoyant", "Rouge", "Jaune"], "Le motif est rouge, bleu, rouge répétitif. Après le Bleu vient le Rouge."],
  "TPR57_2_19": ["Quelle est la prochaine étape ? Rose, Rose, Violet, Rose, Rose, Violet, Rose, Rose, ?", "Deux roses, puis un violet. Deux roses, puis un... ?", ["Rose", "mauve", "Bleu", "Rouge"], "Le motif est rose, rose et violet répétitif. Après le rose, le rose suit le violet."],
  "TPR57_2_20": ["Quelle est la prochaine étape ? Haut, Bas, Bas, Haut, Bas, Bas, Haut, Bas, ?", "Un en haut, puis deux en bas. Un en haut, puis deux en bas...", ["Au-dessus de", "Gauche", "Droite", "Vers le bas"], "Le motif est répétitif Haut, Bas, Bas. Après Up, Down suit Down."],

  // ==========================================================================
  // RECONNAISSANCE DES MOTIFS — Niveau 3 (TPR57_3_01 – TPR57_3_20)
  // ==========================================================================

  "TPR57_3_01": ["Quel animal est le prochain ? Chat, chien, poisson, chat, chien, poisson, chat, chien, ?", "Trois animaux se répètent dans le même ordre.", ["Chat", "Poisson", "Chien", "Oiseau"], "Le motif est chat, chien, poisson répétitif. Après le Chat, le Chien suit le Poisson."],
  "TPR57_3_02": ["Quelle est la prochaine étape ? 1, 1, 2, 2, 3, 3, 4, 4, ?", "Chaque numéro apparaît deux fois. Quel nouveau numéro est le prochain ?", ["4", "3", "5", "6"], "Chaque numéro apparaît deux fois : 1,1, 2,2, 3,3, 4,4. Le prochain est 5."],
  "TPR57_3_03": ["Quelle est la prochaine étape ? Pomme, banane, cerise, pomme, banane, cerise, pomme, banane, ?", "Trois fruits sont répétés dans le même ordre.", ["Pomme", "Banane", "Cerise", "Raisins"], "Le motif est répété pomme, banane et cerise. Après Banana vient Cherry."],
  "TPR57_3_04": ["Quelle est la prochaine étape ? Rouge, Jaune, Bleu, Rouge, Jaune, Bleu, Rouge, Jaune, ?", "Trois couleurs reviennent toujours dans le même ordre.", ["Rouge", "Jaune", "Verdoyant", "Bleu"], "Le motif est répétitif rouge, jaune et bleu. Après le Jaune vient le Bleu."],
  "TPR57_3_05": ["Quelle forme suit-il ? Triangle, Cercle, Carré, Triangle, Cercle, Carré, Triangle, Cercle, ?", "Trois formes sont répétées dans le même ordre.", ["Carré", "Triangle", "Cercle", "Rectangle"], "Le motif est un triangle, un cercle et un carré répétitifs. Après le Cercle vient le Carré."],
  "TPR57_3_06": ["Quelle est la prochaine étape ? 2, 4, 6, 2, 4, 6, 2, 4, ?", "Trois nombres sont répétés.", ["2", "8", "6", "4"], "Le motif est 2, 4, 6 répétitifs. Après 2, 4 vient 6."],
  "TPR57_3_07": ["Quelle est la prochaine étape ? Petit, Moyen, Grand, Petit, Moyen, Grand, Petit, Moyen, ?", "Trois tailles sont répétées de la plus petite à la plus grande.", ["Petit", "Super", "environnement", "Minuscule"], "Le motif est répétitif petit, moyen et grand. Après le Milieu vient le Grand."],
  "TPR57_3_08": ["Quelle est la prochaine étape ? Marcher, courir, sauter, marcher, courir, sauter, marcher, courir, ?", "Trois actions sont répétées dans le même ordre.", ["marche", "Étape", "vol", "Saut"], "Le modèle est Marcher, Courir, Sauter qui se répète. Après la course vient le saut."],
  "TPR57_3_09": ["Quel jour vient après samedi ?", "Pensez aux jours de la semaine dans l’ordre.", ["Dimanche", "Lundi", "Vendredi", "Mardi"], "Les jours passent : vendredi, samedi, dimanche. Après samedi vient dimanche."],
  "TPR57_3_10": ["Quelle est la prochaine étape ? A, B, A, C, A, B, A, C, A, B, A, ?", "Trouvez le groupe répétitif : A, B, A, C.", ["UN", "B", "c", "d"], "Le motif est répétitif A, B, A, C. Après A, B, A vient C."],
  "TPR57_3_11": ["Quelle est la prochaine étape ? 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, ?", "Les chiffres montent puis redescendent. Regardez le saut !", ["1", "2", "4", "3"], "Le motif est 1, 2, 3, 2 répétitifs. Après 1, 2, 3 vient 2."],
  "TPR57_3_12": ["Quelle est la prochaine étape ? Soleil, nuage, pluie, soleil, nuage, pluie, soleil, nuage, ?", "Trois mots sur la météo sont répétés.", ["Soleil", "Neige", "Nuage", "Pluie"], "Le motif est répétitif Soleil, Nuage et Pluie. Après Cloud vient la pluie."],
  "TPR57_3_13": ["Quelle est la prochaine étape ? Grand, plus grand, plus grand, plus grand, plus grand, plus grand, plus grand, plus grand, ?", "Trois tailles sont répétées.", ["Le plus grand", "Haut", "Plus haut", "court"], "Le motif est grand, plus grand, plus grand et répétitif. Après le plus haut vient le plus haut."],
  "TPR57_3_14": ["Quel numéro est le prochain ? 1, 3, 5, 1, 3, 5, 1, 3, ?", "Trois nombres sont répétés.", ["1", "5", "3", "7"], "Le motif est 1, 3, 5 répétitifs. Après 1, 3 vient 5."],
  "TPR57_3_15": ["Quelle est la prochaine étape ? Manger, dormir, jouer, manger, dormir, jouer, manger, dormir, ?", "Trois activités sont répétées.", ["MANGER", "Dormir", "Jouez-le", "un peu de repos"], "Le modèle est Manger, Dormir, Jouer qui se répète. Après le sommeil vient le jeu."],
  "TPR57_3_16": ["Quelle est la prochaine étape ? Rouge, Rouge, Bleu, Bleu, Vert, Vert, Rouge, Rouge, Bleu, Bleu, ?", "Chaque couleur apparaît deux fois, puis la couleur suivante commence.", ["Rouge", "Bleu", "Verdoyant", "Jaune"], "Le motif est rouge, rouge, bleu, bleu, vert, vert répétitif. Après Bleu, Bleu suit Vert."],
  "TPR57_3_17": ["Quel numéro est le prochain ? Un, Deux, Trois, Quatre, Cinq, Six, ?", "Continuez à compter !", ["Huit", "Sept", "Neuf", "Dix"], "On compte : Un, Deux, Trois, Quatre, Cinq, Six, Sept."],
  "TPR57_3_18": ["Quelle est la prochaine étape ? Pierre, papier, ciseaux, pierre, papier, ciseaux, pierre, papier, ?", "Trois mots sont répétés.", ["Papier", "Pierre", "Stylo", "Ciseaux"], "Le motif est la répétition de Pierre, Papier, Ciseaux. Après le papier, viennent les ciseaux."],
  "TPR57_3_19": ["Quelle est la prochaine étape ? Étoile, Lune, Étoile, Étoile, Lune, Étoile, Étoile, Lune, ?", "Après chaque Lune, que se passe-t-il toujours ensuite ?", ["Étoile", "Mois", "Soleil", "Nuage"], "Le motif est étoile, lune, étoile répétitive. Après la Lune vient l’Étoile."],
  "TPR57_3_20": ["Quelle est la prochaine étape ? 1, 2, 1, 1, 2, 1, 1, 2, ?", "Après chaque 2, que se passe-t-il toujours ensuite ?", ["2", "3", "1", "4"], "Le motif est 1, 2, 1 répétitif. Après 2 vient 1."],

  // ==========================================================================
  // RAISONNEMENT NUMÉRIQUE — Niveau 1 (TNR57_1_01 – TNR57_1_20)
  // ==========================================================================

  "TNR57_1_01": ["Quelle est la prochaine étape ? 1, 2, 3, 4, ?", "Comptez de un à un.", ["5", "6", "3", "7"], "On compte de 1 à 1 : 1, 2, 3, 4, 5. Le nombre suivant est 5."],
  "TNR57_1_02": ["Quelle est la prochaine étape ? 3, 4, 5, 6, ?", "Continuez à compter de un à un !", ["5", "8", "6", "7"], "On compte de 1 à 1 : 3, 4, 5, 6, 7. Le nombre suivant est 7."],
  "TNR57_1_03": ["Quelle est la prochaine étape ? 5, 6, 7, 8, ?", "Quel chiffre vient après 8 ?", ["7", "9", "10", "8"], "On compte de 1 à 1 : 5, 6, 7, 8, 9. Le nombre suivant est 9."],
  "TNR57_1_04": ["Quelle est la prochaine étape ? 2, 4, 6, 8, ?", "Nous sautons un numéro à chaque fois. Comptez de 2 à 2 !", ["9", "12", "10", "11"], "On compte de 2 à 2 : 2, 4, 6, 8, 10. Le nombre suivant est 10."],
  "TNR57_1_05": ["Quelle est la prochaine étape ? 1, 3, 5, 7, ?", "On saute un numéro à chaque fois : 1, saute 2, 3, saute 4, 5...", ["8", "10", "11", "9"], "On compte par 2 (nombres impairs) : 1, 3, 5, 7, 9. Le nombre suivant est 9."],
  "TNR57_1_06": ["Quelle est la prochaine étape ? 4, 6, 8, 10, ?", "Comptez de 2 à 2. Combien font 10 plus 2 ?", ["12", "11", "14", "9"], "On compte de 2 à 2 : 4, 6, 8, 10, 12. Le nombre suivant est 12."],
  "TNR57_1_07": ["Quelle est la prochaine étape ? 6, 7, 8, 9, ?", "Continuez à compter ! Que se passe-t-il après 9 heures ?", ["11", "10", "12", "8"], "On compte de 1 à 1 : 6, 7, 8, 9, 10. Le nombre suivant est 10."],
  "TNR57_1_08": ["Quelle est la prochaine étape ? 2, 3, 4, 5, ?", "Comptez de un à un.", ["7", "5", "6", "8"], "On compte de 1 à 1 : 2, 3, 4, 5, 6. Le nombre suivant est 6."],
  "TNR57_1_09": ["Quelle est la prochaine étape ? 7, 8, 9, 10, ?", "Quel nombre vient après 10 ?", ["12", "10", "9", "11"], "On compte de 1 à 1 : 7, 8, 9, 10, 11. Le nombre suivant est 11."],
  "TNR57_1_10": ["Quelle est la prochaine étape ? 6, 8, 10, 12, ?", "On saute de 2 en 2 à chaque fois !", ["14", "13", "15", "16"], "On compte par 2 : 6, 8, 10, 12, 14. Le nombre suivant est 14."],
  "TNR57_1_11": ["Quelle est la prochaine étape ? 10, 11, 12, 13, ?", "Continuez à compter de un à un !", ["15", "14", "12", "16"], "On compte de 1 à 1 : 10, 11, 12, 13, 14. Le nombre suivant est 14."],
  "TNR57_1_12": ["Quel numéro manque-t-il ? 1, 2, ?, 4, 5", "Quel nombre est entre 2 et 4 ?", ["6", "7", "3", "0"], "Compter 1, 2, 3, 4, 5. Le nombre manquant est 3."],
  "TNR57_1_13": ["Quelle est la prochaine étape ? 8, 9, 10, 11, ?", "Quel nombre vient après 11 ?", ["10", "13", "14", "12"], "On compte de 1 à 1 : 8, 9, 10, 11, 12. Le nombre suivant est 12."],
  "TNR57_1_14": ["Quelle est la prochaine étape ? 10, 12, 14, 16, ?", "On saute de 2 en 2 à chaque fois !", ["18", "17", "19", "20"], "On compte par 2 : 10, 12, 14, 16, 18. Le nombre suivant est 18."],
  "TNR57_1_15": ["Quelle est la prochaine étape ? 4, 5, 6, 7, ?", "Continuez à compter de un à un !", ["9", "8", "10", "6"], "On compte de 1 à 1 : 4, 5, 6, 7, 8. Le nombre suivant est 8."],
  "TNR57_1_16": ["Quel numéro manque-t-il ? 5, 6, 7, ?, 9", "Quel nombre est entre 7 et 9 ?", ["10", "6", "8", "11"], "Compter 5, 6, 7, 8, 9. Le nombre manquant est 8."],
  "TNR57_1_17": ["Quelle est la prochaine étape ? 3, 5, 7, 9, ?", "On compte de 2 à 2. Combien font 9 plus 2 ?", ["10", "12", "13", "11"], "On compte de 2 à 2 : 3, 5, 7, 9, 11. Le nombre suivant est 11."],
  "TNR57_1_18": ["Quelle est la prochaine étape ? 11, 12, 13, 14, ?", "Continuez à compter !", ["15", "16", "14", "17"], "On compte de 1 à 1 : 11, 12, 13, 14, 15. Le nombre suivant est 15."],
  "TNR57_1_19": ["Quel numéro manque-t-il ? 2, 4, ?, 8, 10", "On compte de 2 à 2. Qu'y a-t-il entre 4 et 8 ?", ["5", "6", "7", "12"], "Compter par 2 : 2, 4, 6, 8, 10. Le nombre manquant est 6."],
  "TNR57_1_20": ["Quelle est la prochaine étape ? 14, 16, 18, 20, ?", "Comptez de 2 à 2. Combien font 20 plus 2 ?", ["21", "23", "22", "24"], "On compte par 2 : 14, 16, 18, 20, 22. Le nombre suivant est 22."],

  // ==========================================================================
  // RAISONNEMENT NUMÉRIQUE — Niveau 2 (TNR57_2_01 – TNR57_2_20)
  // ==========================================================================

  "TNR57_2_01": ["Nombre de 5 à 5 : 5, 10, 15, 20, ?", "Ajoutez-en 5 à chaque fois. Combien font 20 plus 5 ?", ["25", "30", "22", "21"], "On compte de 5 à 5 : 5, 10, 15, 20, 25. Le nombre suivant est 25."],
  "TNR57_2_02": ["Comptez de 10 à 10 : 10, 20, 30, 40, ?", "Ajoutez-en 10 à chaque fois. Combien font 40 plus 10 ?", ["45", "50", "60", "55"], "On compte de 10 à 10 : 10, 20, 30, 40, 50. Le nombre suivant est 50."],
  "TNR57_2_03": ["Compte à rebours : 10, 9, 8, 7, ?", "On diminue de 1 à chaque fois.", ["5", "8", "6", "9"], "On compte à rebours : 10, 9, 8, 7, 6. Le nombre suivant est 6."],
  "TNR57_2_04": ["Nombre de 5 à 5 : 10, 15, 20, 25, ?", "Ajoutez-en 5 à chaque fois. Combien font 25 plus 5 ?", ["28", "35", "25", "30"], "On compte de 5 à 5 : 10, 15, 20, 25, 30. Le nombre suivant est 30."],
  "TNR57_2_05": ["Compte à rebours : 5, 4, 3, 2, ?", "Continuez à descendre de 1 !", ["1", "0", "3", "6"], "On compte à rebours : 5, 4, 3, 2, 1. Le nombre suivant est 1."],
  "TNR57_2_06": ["Comptez de 10 à 10 : 20, 30, 40, 50, ?", "Ajoutez-en 10 à chaque fois.", ["55", "60", "70", "65"], "On compte de 10 à 10 : 20, 30, 40, 50, 60. Le nombre suivant est 60."],
  "TNR57_2_07": ["Compte à rebours : 8, 7, 6, 5, ?", "Continuez à descendre de 1 !", ["3", "6", "4", "5"], "On compte à rebours : 8, 7, 6, 5, 4. Le nombre suivant est 4."],
  "TNR57_2_08": ["Nombre de 5 à 5 : 25, 30, 35, 40, ?", "Ajoutez-en 5 à chaque fois. Combien font 40 plus 5 ?", ["50", "42", "44", "45"], "On compte de 5 à 5 : 25, 30, 35, 40, 45. Le nombre suivant est 45."],
  "TNR57_2_09": ["Comptez de 10 à 10 : 30, 40, 50, 60, ?", "Ajoutez-en 10 à chaque fois. Combien font 60 plus 10 ?", ["70", "65", "80", "75"], "On compte de 10 à 10 : 30, 40, 50, 60, 70. Le nombre suivant est 70."],
  "TNR57_2_10": ["Comptez à rebours de 2 par 2 : 20, 18, 16, 14, ?", "Soustrayez 2 à chaque fois.", ["13", "12", "10", "15"], "On compte à rebours de 2 par 2 : 20, 18, 16, 14, 12. Le nombre suivant est 12."],
  "TNR57_2_11": ["Nombre de 5 à 5 : 30, 35, 40, 45, ?", "Ajoutez-en 5 à chaque fois.", ["55", "48", "50", "52"], "On compte de 5 à 5 : 30, 35, 40, 45, 50. Le nombre suivant est 50."],
  "TNR57_2_12": ["Compte à rebours : 15, 14, 13, 12, ?", "Continuez à descendre de 1 !", ["10", "13", "14", "11"], "On compte à rebours : 15, 14, 13, 12, 11. Le nombre suivant est 11."],
  "TNR57_2_13": ["Comptez de 10 à 10 : 50, 60, 70, 80, ?", "Ajoutez-en 10 à chaque fois.", ["90", "85", "100", "95"], "On compte de 10 à 10 : 50, 60, 70, 80, 90. Le nombre suivant est 90."],
  "TNR57_2_14": ["Comptez à rebours de 2 par 2 : 10, 8, 6, 4, ?", "Soustrayez 2 à chaque fois.", ["3", "2", "1", "0"], "On compte à rebours de 2 à 2 : 10, 8, 6, 4, 2. Le nombre suivant est 2."],
  "TNR57_2_15": ["Quel numéro manque-t-il ? 5, 10, ?, 20, 25", "On compte de 5 à 5. Qu'y a-t-il entre 10 et 20 ?", ["12", "18", "15", "14"], "Compter de 5 à 5 : 5, 10, 15, 20, 25. Le nombre manquant est 15."],
  "TNR57_2_16": ["Nombre de 5 à 5 : 40, 45, 50, 55, ?", "Ajoutez-en 5 à chaque fois.", ["58", "65", "55", "60"], "On compte de 5 à 5 : 40, 45, 50, 55, 60. Le nombre suivant est 60."],
  "TNR57_2_17": ["Comptez à rebours de 10 à 10 : 30, 20, 10, ?", "Soustrayez 10 à chaque fois.", ["0", "5", "15", "10"], "On compte à rebours de 10 à 10 : 30, 20, 10, 0. Le nombre suivant est 0."],
  "TNR57_2_18": ["Comptez de 10 à 10 : 40, 50, 60, 70, ?", "Ajoutez-en 10 à chaque fois.", ["75", "80", "90", "85"], "On compte de 10 à 10 : 40, 50, 60, 70, 80. Le nombre suivant est 80."],
  "TNR57_2_19": ["Quel numéro manque-t-il ? 10, 20, 30, ?, 50", "On compte de 10 à 10. Qu'y a-t-il entre 30 et 50 ?", ["35", "45", "40", "25"], "Compter par 10 : 10, 20, 30, 40, 50. Le nombre manquant est 40."],
  "TNR57_2_20": ["Comptez à rebours de 5 par 5 : 50, 45, 40, 35, ?", "Soustrayez 5 à chaque fois.", ["25", "32", "34", "30"], "On compte à rebours de 5 par 5 : 50, 45, 40, 35, 30. Le nombre suivant est 30."],

  // ==========================================================================
  // RAISONNEMENT NUMÉRIQUE — Niveau 3 (TNR57_3_01 – TNR57_3_20)
  // ==========================================================================

  "TNR57_3_01": ["Nombre de 3 à 3 : 3, 6, 9, 12, ?", "Ajoutez-en 3 à chaque fois. Combien font 12 plus 3 ?", ["15", "13", "14", "16"], "On compte de 3 à 3 : 3, 6, 9, 12, 15. Le nombre suivant est 15."],
  "TNR57_3_02": ["Nombre de 3 à 3 : 6, 9, 12, 15, ?", "Ajoutez-en 3 à chaque fois.", ["16", "18", "17", "19"], "On compte de 3 à 3 : 6, 9, 12, 15, 18. Le nombre suivant est 18."],
  "TNR57_3_03": ["Quel numéro manque-t-il ? 2, 4, ?, 8, 10, 12", "On compte de 2 à 2. Qu'y a-t-il entre 4 et 8 ?", ["5", "7", "6", "9"], "Compter par 2 : 2, 4, 6, 8, 10, 12. Le nombre manquant est 6."],
  "TNR57_3_04": ["Nombre de 3 à 3 : 9, 12, 15, 18, ?", "Ajoutez-en 3 à chaque fois. Combien font 18 plus 3 ?", ["19", "20", "22", "21"], "On compte de 3 à 3 : 9, 12, 15, 18, 21. Le nombre suivant est 21."],
  "TNR57_3_05": ["Quel numéro manque-t-il ? 5, 10, 15, ?, 25", "On compte de 5 à 5. Qu'y a-t-il entre 15 et 25 ?", ["20", "18", "22", "19"], "Compter de 5 à 5 : 5, 10, 15, 20, 25. Le nombre manquant est 20."],
  "TNR57_3_06": ["Comptez à rebours de 2 par 2 : 20, 18, 16, 14, ?", "Soustrayez 2 à chaque fois.", ["13", "12", "11", "10"], "On compte à rebours de 2 par 2 : 20, 18, 16, 14, 12. Le nombre suivant est 12."],
  "TNR57_3_07": ["Nombre de 3 à 3 : 12, 15, 18, 21, ?", "Ajoutez-en 3 à chaque fois. Combien font 21 plus 3 ?", ["22", "23", "24", "25"], "On compte de 3 à 3 : 12, 15, 18, 21, 24. Le nombre suivant est 24."],
  "TNR57_3_08": ["Quel numéro manque-t-il ? 3, 6, ?, 12, 15", "On compte de 3 à 3. Qu'y a-t-il entre 6 et 12 ?", ["7", "8", "10", "9"], "En comptant de 3 par 3 : 3, 6, 9, 12, 15. Le nombre manquant est 9."],
  "TNR57_3_09": ["Comptez à rebours de 3 à 3 : 15, 12, 9, 6, ?", "Soustrayez 3 à chaque fois.", ["3", "4", "5", "2"], "On compte à rebours de 3 à 3 : 15, 12, 9, 6, 3. Le nombre suivant est 3."],
  "TNR57_3_10": ["Nombre de 4 à 4 : 4, 8, 12, 16, ?", "Ajoutez-en 4 à chaque fois. Combien font 16 plus 4 ?", ["18", "20", "22", "24"], "On compte de 4 à 4 : 4, 8, 12, 16, 20. Le nombre suivant est 20."],
  "TNR57_3_11": ["Quel numéro manque-t-il ? 10, ?, 30, 40, 50", "On compte de 10 à 10. Qu'y a-t-il entre 10 et 30 ?", ["15", "25", "20", "35"], "Compter par 10 : 10, 20, 30, 40, 50. Le nombre manquant est 20."],
  "TNR57_3_12": ["Comptez à rebours de 5 par 5 : 25, 20, 15, 10, ?", "Soustrayez 5 à chaque fois.", ["0", "8", "6", "5"], "On compte à rebours de 5 à 5 : 25, 20, 15, 10, 5. Le nombre suivant est 5."],
  "TNR57_3_13": ["Nombre de 3 à 3 : 15, 18, 21, 24, ?", "Ajoutez-en 3 à chaque fois. Combien font 24 plus 3 ?", ["27", "25", "26", "28"], "On compte de 3 à 3 : 15, 18, 21, 24, 27. Le nombre suivant est 27."],
  "TNR57_3_14": ["Quel numéro manque-t-il ? 1, 3, 5, ?, 9, 11", "On compte par 2 (nombres impairs). Qu'y a-t-il entre 5 et 9 heures ?", ["6", "7", "8", "10"], "Compter par 2 : 1, 3, 5, 7, 9, 11. Le nombre manquant est 7."],
  "TNR57_3_15": ["Comptez à rebours de 3 sur 3 : 21, 18, 15, 12, ?", "Soustrayez 3 à chaque fois.", ["10", "11", "9", "8"], "On compte à rebours de 3 par 3 : 21, 18, 15, 12, 9. Le nombre suivant est 9."],
  "TNR57_3_16": ["Nombre de 4 à 4 : 8, 12, 16, 20, ?", "Ajoutez-en 4 à chaque fois. Combien font 20 plus 4 ?", ["22", "26", "28", "24"], "On compte de 4 à 4 : 8, 12, 16, 20, 24. Le nombre suivant est 24."],
  "TNR57_3_17": ["Quelle est la prochaine étape ? 2, 5, 8, 11, ?", "On en ajoute 3 à chaque fois.", ["14", "12", "13", "15"], "On ajoute 3 à chaque fois : 2, 5, 8, 11, 14. Le nombre suivant est 14."],
  "TNR57_3_18": ["Quel numéro manque-t-il ? 4, 8, 12, ?, 20", "On compte de 4 à 4. Qu'y a-t-il entre 12 et 20 ?", ["14", "16", "15", "18"], "Compter de 4 à 4 : 4, 8, 12, 16, 20. Le nombre manquant est 16."],
  "TNR57_3_19": ["Comptez à rebours de 2 par 2 : 16, 14, 12, 10, ?", "Soustrayez 2 à chaque fois.", ["7", "9", "8", "6"], "On compte à rebours de 2 par 2 : 16, 14, 12, 10, 8. Le nombre suivant est 8."],
  "TNR57_3_20": ["Nombre de 3 à 3 : 21, 24, 27, 30, ?", "Ajoutez-en 3 à chaque fois. Combien font 30 plus 3 ?", ["31", "32", "34", "33"], "On compte de 3 à 3 : 21, 24, 27, 30, 33. Le nombre suivant est 33."],

  // ==========================================================================
  // RAISONNEMENT LOGIQUE — Niveau 1 (TLR57_1_01 – TLR57_1_20)
  // ==========================================================================

  "TLR57_1_01": ["Toutes les pommes sont des fruits. Une pomme est-elle un fruit ?", "L’indice dit que TOUTES les pommes sont des fruits.", ["Oui", "Pas", "Peut être", "Je ne sais pas"], "L’indice nous dit que toutes les pommes sont des fruits. Alors oui, une pomme est un fruit !"],
  "TLR57_1_02": ["Tous les chiens sont des animaux. Un chien est-il un animal ?", "L'indice dit que TOUS les chiens sont des animaux.", ["Pas", "Oui", "Parfois", "Jamais"], "L'indice nous dit que tous les chiens sont des animaux. Alors oui, un chien est un animal !"],
  "TLR57_1_03": ["Tous les poissons vivent dans l'eau. Un poisson vit-il dans l'eau ?", "Que dit l’indice sur l’endroit où vit le poisson ?", ["Parfois", "Jamais", "Oui", "Pas"], "L'indice nous dit que tous les poissons vivent dans l'eau. Alors oui, un poisson vit dans l'eau !"],
  "TLR57_1_04": ["Tous les oiseaux ont des ailes. Un oiseau a-t-il des ailes ?", "L'indice dit que TOUS les oiseaux ont des ailes.", ["Pas", "Parfois", "Jamais", "Oui"], "L'indice nous dit que tous les oiseaux ont des ailes. Alors oui, un oiseau a des ailes !"],
  "TLR57_1_05": ["Les voitures ont des roues. Une voiture a-t-elle des roues ?", "Que dit l’indice sur les voitures ?", ["Oui", "Pas", "Peut être", "Jamais"], "L'indice nous dit que les voitures ont des roues. Alors oui, une voiture a des roues !"],
  "TLR57_1_06": ["La glace est froide. La glace est-elle chaude ?", "Pensez à ce que dit l'indice. S'il fait froid, peut-il faire chaud ?", ["Oui", "Pas", "Peut être", "jamais"], "L'indice indique que la glace est froide. Le froid est le contraire du chaud, alors non !"],
  "TLR57_1_07": ["Le feu est chaud. Le feu est-il froid ?", "L'indice indique que le feu est chaud. Le chaud est-il la même chose que le froid ?", ["Peut être", "Oui", "Pas", "Parfois"], "L'indice indique que le feu est chaud. Le chaud est le contraire du froid, alors non !"],
  "TLR57_1_08": ["La neige est blanche. La neige est-elle blanche ?", "Vérifiez simplement ce que l’indice de neige vous dit.", ["Pas", "Peut être", "Parfois", "Oui"], "L'indice dit que la neige est blanche. Alors oui, la neige est blanche !"],
  "TLR57_1_09": ["Les chats miaulent. Quel bruit fait un chat ?", "Regardez l'indice. Quel bruit fait un chat ?", ["Miaou", "Harnais", "UM", "Pavot"], "L'indice dit que les chats miaulent. Alors un chat fait Miaou !"],
  "TLR57_1_10": ["Un cercle est rond. Est-ce un cercle rond ?", "Lisez l'indice sur le cercle.", ["Pas", "Oui", "Parfois", "Jamais"], "L'indice dit qu'un cercle est rond. Alors oui, un cercle est rond !"],
  "TLR57_1_11": ["Le soleil se lève le matin. quand le soleil se lève", "L'indice vous indique quand le soleil se lève.", ["La nuit", "Soirée", "Matin", "Dans l'après-midi"], "L'indice dit que le soleil se lève le matin !"],
  "TLR57_1_12": ["Les lapins sautent. Comment les lapins se déplacent-ils ?", "L'indice vous indique comment les lapins se déplacent.", ["voler", "Nager", "Glisser", "saut"], "L'indice dit que les lapins sautent. Alors ça bouge en sautant !"],
  "TLR57_1_13": ["Le lait est blanc. De quelle couleur est le lait ?", "L'indice vous indique la couleur du lait.", ["Blanc", "Bleu", "Verdoyant", "Rouge"], "L'indice dit que le lait est blanc. Le lait est donc blanc !"],
  "TLR57_1_14": ["Les bananes sont jaunes. De quelle couleur est une banane ?", "L'indice vous indique la couleur.", ["Rouge", "Jaune", "Bleu", "Verdoyant"], "L'indice dit que les bananes sont jaunes. Donc une banane est jaune !"],
  "TLR57_1_15": ["Nous dormons la nuit. quand dormons-nous", "L'indice vous indique quand nous dormons.", ["Matin", "Dans l'après-midi", "La nuit", "Au déjeuner"], "L'indice dit que nous dormons la nuit !"],
  "TLR57_1_16": ["Le sucre est doux. Quel goût a le sucre ?", "L'indice vous indique le goût du sucre.", ["Aigre", "Amer", "Salé", "Doux"], "L'indice dit que le sucre est sucré. Le sucre a donc un goût sucré !"],
  "TLR57_1_17": ["Les canards nagent dans les étangs. Où nagent les canards ?", "L'indice vous indique où nagent les canards.", ["étangs", "paradis", "Désert", "Montagne"], "L'indice dit que les canards nagent dans les étangs !"],
  "TLR57_1_18": ["L'hiver est froid. Est-ce qu'il fait froid en hiver ?", "Vérifiez simplement l’indice sur l’hiver.", ["Pas", "Oui", "Jamais", "Parfois"], "L'indice dit que l'hiver est froid. Alors oui, l'hiver est froid !"],
  "TLR57_1_19": ["Les feuilles sont vertes. De quelle couleur sont les feuilles ?", "L'indice vous indique la couleur des feuilles.", ["Bleu", "Rouge", "Verdoyant", "Jaune"], "L'indice dit que les feuilles sont vertes !"],
  "TLR57_1_20": ["Nous utilisons le parapluie quand il pleut. Quand utilise-t-on le parapluie ?", "L'indice vous indique quand nous avons besoin du parapluie.", ["quand il fait beau", "Quand le vent souffle", "Quand il neige", "quand il pleut"], "L'indice dit qu'on utilise le parapluie quand il pleut !"],

  // ==========================================================================
  // RAISONNEMENT LOGIQUE — Niveau 2 (TLR57_2_01 – TLR57_2_20)
  // ==========================================================================

  "TLR57_2_01": ["Tom est plus grand que Sam. Sam est plus grand que Lily. Qui est le plus grand ?", "Qui est plus grand que tout le monde ?", ["tome", "Assis.", "Lis", "Ils sont tous pareils"], "Tom est plus grand que Sam, et Sam est plus grand que Lily. Donc Tom est le plus grand !"],
  "TLR57_2_02": ["Un éléphant est plus gros qu'un chien. Un chien est plus gros qu'une souris. Quel est le plus petit ?", "Pensez quel animal est plus petit que tous les autres.", ["Éléphant", "Souris", "Chien", "Chat"], "La souris est plus petite que le chien et le chien est plus petit que l'éléphant. La souris est la plus petite !"],
  "TLR57_2_03": ["Le rouge, le bleu et le jaune sont des couleurs. Laquelle de ces couleurs n’est PAS une couleur ?", "Trois d'entre elles sont des couleurs. L'un n'est pas du tout une couleur.", ["Rouge", "Bleu", "Pizza", "Jaune"], "Le rouge, le bleu et le jaune sont toutes des couleurs. La pizza est un aliment, pas une couleur !"],
  "TLR57_2_04": ["La pomme, la banane et la cerise sont des fruits. Lequel n'est PAS un fruit ?", "Trois d'entre eux poussent sur des arbres ou des arbustes. Ce n’est pas le cas.", ["Pomme", "Banane", "Cerise", "Siège"], "La pomme, la banane et la cerise sont des fruits. Une chaise est un meuble, pas un fruit !"],
  "TLR57_2_05": ["Amy est plus âgée que Ben. Ben est plus âgé que Cara. Qui est le plus jeune ?", "Qui est plus jeune que tout le monde ?", ["Porter", "Amy", "Ben", "Ils sont tous pareils"], "Amy est l'aînée, Ben est au milieu et Cara est la plus jeune !"],
  "TLR57_2_06": ["Une voiture est plus rapide qu'un vélo. Un vélo est plus rapide que la marche. Quel est le plus rapide ?", "Lequel bouge le plus vite ?", ["Marche", "Voiture", "Vélo", "skateboard"], "Une voiture est plus rapide qu'un vélo et un vélo est plus rapide que la marche. La voiture est la plus rapide !"],
  "TLR57_2_07": ["Le chat, le chien et le poisson sont des animaux. Lequel n'est PAS un animal ?", "Trois sont des animaux vivants. L'un est quelque chose que vous lisez.", ["Chat", "Chien", "Livre", "Poisson"], "Le chat, le chien et le poisson sont des animaux. Un livre est quelque chose que vous lisez, pas un animal !"],
  "TLR57_2_08": ["C'est lundi aujourd'hui. quel jour était hier", "Pensez aux jours de la semaine. Qu'est-ce qui arrive avant lundi ?", ["Mardi", "Samedi", "Vendredi", "Dimanche"], "La veille de lundi est dimanche !"],
  "TLR57_2_09": ["Emma a plus d'autocollants que Jake. Jake a plus d'autocollants que Mia. Qui a le plus d'autocollants ?", "Qui a plus d’autocollants que tout le monde ?", ["Emma", "Jack", "moi", "Ils ont tous le même"], "Emma a plus que Jake, et Jake a plus que Mia. Emma en a le plus !"],
  "TLR57_2_10": ["Une girafe est plus grande qu'un cheval. Un cheval est plus grand qu'un chat. Quel est le plus court ?", "Quel animal est plus petit que tous les autres ?", ["Girafe", "Chat", "Le cheval", "Le chien"], "Le chat est plus petit que le cheval et le cheval est plus petit que la girafe. Le chat est le plus petit !"],
  "TLR57_2_11": ["Le T-shirt, le Pantalon et le Chapeau sont des choses que nous portons. Qu'est-ce que nous ne portons PAS ?", "Trois d'entre eux sont portés sur le corps. Ce n’est pas le cas.", ["T-shirt", "Pantalon", "Lampe", "Chapeau"], "Le T-shirt, le Pantalon et le Chapeau sont des vêtements. Une lampe n’est pas quelque chose que nous transportons !"],
  "TLR57_2_12": ["Aujourd'hui c'est mercredi. C'est quel jour demain?", "Pensez aux jours de la semaine. Que se passera-t-il après mercredi ?", ["Mardi", "Lundi", "Vendredi", "Jeudi"], "Après mercredi, c'est jeudi !"],
  "TLR57_2_13": ["Un bus est plus gros qu'une voiture. Une voiture est plus grosse qu'un vélo. Quel est le plus gros ?", "Quel véhicule est plus gros que tous les autres ?", ["Bus", "Voiture", "Vélo", "Scooter"], "Le bus est plus gros que la voiture et la voiture est plus grosse que le vélo. Le bus est le plus gros !"],
  "TLR57_2_14": ["Max a couru plus vite que Zoé. Zoé a couru plus vite que Léo. Qui a été le plus lent ?", "Qui a couru plus lentement que tout le monde ?", ["MAXIMUM", "Lion", "Zoé", "Ils ont fini à égalité"], "Max était le plus rapide, puis Zoé, puis Léo. Léo était le plus lent !"],
  "TLR57_2_15": ["Le piano, la guitare et la batterie font de la musique. Lequel ne fait PAS de musique ?", "Trois d’entre eux sont des outils. L’un est la nourriture.", ["Piano", "Guitare", "Pizza", "Batterie"], "Le piano, la guitare et la batterie sont des instruments qui font de la musique. La pizza, c'est de la nourriture !"],
  "TLR57_2_16": ["Lily a 5 jouets. Sam a 3 jouets. Qui a plus de jouets ?", "Comparez les chiffres. Quel nombre est le plus grand : 5 ou 3 ?", ["Assis.", "Ils ont le même", "Aucun", "Lis"], "Lily a 5 jouets et Sam a 3 jouets. 5 est supérieur à 3, donc Lily en a plus !"],
  "TLR57_2_17": ["Un arbre est plus grand qu'une fleur. Une fleur est plus haute que l'herbe. Quel est le plus grand ?", "Quelle plante pousse le plus ?", ["Arbre", "Fleur", "Herbe", "Ils sont tous pareils"], "L'arbre est plus grand que la fleur et la fleur est plus haute que l'herbe. L'arbre est le plus grand !"],
  "TLR57_2_18": ["Si aujourd'hui c'est vendredi, quel jour était-on il y a 2 jours ?", "Compte à rebours 2 jours à partir de vendredi.", ["Jeudi", "Mercredi", "Lundi", "Mardi"], "Vendredi, on remonte 1 jour au jeudi, on remonte 1 jour de plus au mercredi !"],
  "TLR57_2_19": ["Le football, le tennis et le basket-ball sont des sports. Qu'est-ce qui n'est PAS un sport ?", "Vous jouez à trois jeux. L'un est un fruit.", ["Football", "Tennis", "Banane", "Basket-ball"], "Le football, le tennis et le basket-ball sont des sports. Une banane est un fruit, pas un sport !"],
  "TLR57_2_20": ["Un avion est plus rapide qu'une voiture. Une voiture est plus rapide qu'un escargot. Quel est le plus lent ?", "Lequel bouge le plus lentement ?", ["Avion", "Voiture", "Vélo", "Ver"], "L'escargot est plus lent que la voiture et la voiture est plus lente que l'avion. L'escargot est le plus lent !"],

  // ==========================================================================
  // RAISONNEMENT LOGIQUE — Niveau 3 (TLR57_3_01 – TLR57_3_20)
  // ==========================================================================

  "TLR57_3_01": ["Si tous les oiseaux peuvent voler et qu’une blatte est un oiseau, une blatte peut-elle voler ?", "L'indice dit que TOUS les oiseaux peuvent voler. Un pic est un oiseau.", ["Oui", "Pas", "Peut être", "Parfois"], "Si tous les oiseaux peuvent voler et qu’un pic est un oiseau, alors oui, un pic peut voler !"],
  "TLR57_3_02": ["Si tous les chats ont une queue et que Whiskers est un chat, est-ce que Whiskers a une queue ?", "L'indice dit que TOUS les chats ont une queue. Whiskers est un chat.", ["Peut-être", "Oui", "Non", "Seulement parfois"], "Si tous les chats ont une queue et que Whiskers est un chat, alors oui, Whiskers a une queue."],
  "TLR57_3_03": ["Il pleut. Vous avez besoin d'un parapluie quand il pleut. Avez-vous besoin d'un parapluie ?", "Vérifier : Est-ce qu'il pleut ? De quoi avez-vous besoin quand il pleut ?", ["Pas", "Peut être", "Oui", "Juste dehors"], "Il pleut et il faut un parapluie quand il pleut. Alors oui, il vous faut un parapluie !"],
  "TLR57_3_04": ["aujourd'hui, c'est mardi .. L'école commence mercredi. C'est aujourd'hui un jour d'école ?", "Est-ce que mardi est la même chose que mercredi ?", ["Oui", "Peut être", "Parfois", "Pas"], "Aujourd'hui, c'est mardi, mais l'école commence mercredi. Mardi n'est pas mercredi, alors non !"],
  "TLR57_3_05": ["Sara porte toujours un chapeau le lundi. C'est lundi aujourd'hui. Sara porte-t-elle un chapeau ?", "L'indice dit que Sara porte TOUJOURS un chapeau le lundi.", ["Oui", "Pas", "Peut être", "Parfois"], "Sara porte toujours un chapeau le lundi et aujourd'hui c'est lundi. Alors oui, portez un chapeau !"],
  "TLR57_3_06": ["Si vous êtes mouillé, vous avez besoin d'une serviette. Tom est mouillé. Tom a-t-il besoin d'une serviette ?", "De quoi avez-vous besoin lorsque vous êtes mouillé ?", ["Pas", "Oui", "Peut être", "Parfois"], "Si vous êtes mouillé, vous avez besoin d'une serviette. Tom est mouillé, alors oui, Tom a besoin d'une serviette !"],
  "TLR57_3_07": ["Tous les carrés ont 4 côtés. Cette forme a 3 côtés. Est-ce un carré ?", "Combien de côtés doit avoir un carré ? Cette forme en a-t-elle autant ?", ["Oui", "Peut être", "Pas", "Parfois"], "Les carrés ont 4 côtés, mais cette forme n'a que 3 côtés. Alors non, ce n'est pas un carré !"],
  "TLR57_3_08": ["Si c'est l'heure du coucher, vous vous brossez les dents. C'est l'heure du coucher. Que devez-vous faire ?", "L'indice vous indique quoi faire à l'heure du coucher.", ["jouer", "Manger des bonbons", "Pour regarder la télévision", "Brossez-vous les dents"], "Au coucher, vous vous brossez les dents. C'est l'heure de se coucher, alors tu devrais te brosser les dents !"],
  "TLR57_3_09": ["Le magasin est fermé le dimanche. Aujourd'hui est dimanche. Le magasin est-il ouvert ?", "Que dit l’indice à propos de dimanche ?", ["Pas", "Oui", "Peut être", "Parfois"], "Le magasin est fermé le dimanche. Aujourd'hui c'est dimanche, donc non, le magasin n'est pas ouvert !"],
  "TLR57_3_10": ["Si vous mangez toute la nourriture, vous obtenez un dessert. Tu as mangé toute la nourriture. Est-ce que tu prends un dessert ?", "Avez-vous fait ce qu'il fallait pour obtenir un dessert ?", ["Pas", "Oui", "Peut être", "Jamais"], "Si vous mangez toute la nourriture, vous obtenez un dessert. Vous avez mangé toute la nourriture, alors oui !"],
  "TLR57_3_11": ["Ben ne joue dehors que lorsqu'il fait beau. Aujourd'hui, il fait beau. Est-ce que Ben joue dehors ?", "L'indice dit que Ben joue dehors quand il fait beau.", ["Pas", "Peut être", "Oui", "Jamais"], "Ben joue dehors quand il fait beau. Il fait beau, alors oui, Ben joue dehors !"],
  "TLR57_3_12": ["Nous sommes samedi aujourd'hui. quel jour était hier", "Pensez au jour qui précède samedi.", ["Dimanche", "Jeudi", "Mercredi", "Vendredi"], "La veille du samedi, c'est vendredi !"],
  "TLR57_3_13": ["Si tous les chiens aboient et que Rex est un chien, est-ce que Rex aboie ?", "L'indice dit que TOUS les chiens aboient. Rex est un chien.", ["Oui", "Pas", "Peut être", "Parfois"], "Si tous les chiens aboient et que Rex est un chien, alors oui, Rex aboie !"],
  "TLR57_3_14": ["Les objets froids peuvent geler l’eau. La glace est très froide. La glace peut-elle geler l’eau ?", "L'indice dit que les choses froides peuvent geler l'eau. La glace est-elle froide ?", ["Jamais", "Oui", "Pas", "Peut être"], "Les objets froids peuvent geler l’eau. La glace est très froide, alors oui, la glace peut geler l’eau !"],
  "TLR57_3_15": ["Anna est plus petite que Beth. Beth est plus petite que Cara. Cara est plus petite que Dana. Qui est le plus grand ?", "Qui est plus grand que tous les autres ? Suivez la chaîne !", ["Anna", "Beth", "Couchette", "Porter"], "Anna est la plus petite, puis Beth, puis Cara, puis Dana. Dana est la plus grande !"],
  "TLR57_3_16": ["Si vous n’arrosez pas une plante, elle sèche. Vous avez oublié d'arroser la plante. que se passe-t-il", "Que se passe-t-il lorsqu'une plante ne reçoit pas d'eau ?", ["Grandir davantage", "s'épanouit", "Chanter", "Il sèche"], "Sans eau, une plante sèche. Vous avez oublié de le mouiller, alors il sèche !"],
  "TLR57_3_17": ["Nous sommes jeudi aujourd'hui. Quel jour est après-demain ?", "demain c'est vendredi Qu'est-ce qui arrive après vendredi ?", ["Samedi", "Vendredi", "Dimanche", "Mercredi"], "Nous sommes jeudi aujourd'hui. demain c'est vendredi Après-demain c'est samedi !"],
  "TLR57_3_18": ["Lily est plus rapide que Tom. Tom est plus rapide que Jake. Jake est plus rapide que Sam. Qui est le plus lent ?", "Suivez la chaîne. Qui est le plus lent que tout le monde ?", ["Lis", "Assis.", "tome", "Jack"], "Lily est la plus rapide, puis Tom, puis Jake, puis Sam. Sam est le plus lent !"],
  "TLR57_3_19": ["Si tout ce qui tourne autour peut rouler et qu’une balle est ronde, une balle peut-elle rouler ?", "L'indice dit que tout peut rouler. Est-ce un ballon rond ?", ["Pas", "Peut être", "Oui", "Jamais"], "Tout peut rouler. Une balle est ronde, alors oui, une balle peut rouler !"],
  "TLR57_3_20": ["Il y a 4 enfants d'affilée. Amy est la première. Ben est le dernier. Il y a 2 enfants à eux deux. Amy est-elle à côté de Ben ?", "S'il y a 2 enfants entre Amy et Ben, sont-ils assis l'un à côté de l'autre ?", ["Oui", "Peut être", "Parfois", "Pas"], "Amy est la première et Ben est le dernier avec 2 enfants à eux deux. Ils ne sont pas côte à côte !"],

  // ==========================================================================
  // RAISONNEMENT SPATIAL — Niveau 1 (TSR57_1_01 – TSR57_1_20)
  // ==========================================================================

  "TSR57_1_01": ["Combien de côtés a un triangle ?", "Le mot « tri » signifie trois !", ["3", "4", "5", "6"], "Un triangle a 3 côtés. \"Tri\" signifie trois !"],
  "TSR57_1_02": ["Quelle forme est ronde comme une balle ?", "Pensez à quelque chose sans coins ni côtés droits.", ["Carré", "Cercle", "Triangle", "Rectangle"], "Un cercle est rond comme une balle. Il n'y a pas de coins !"],
  "TSR57_1_03": ["Combien de côtés a un carré ?", "Comptez les bords d'un carré. Haut, bas, gauche, droite.", ["3", "5", "4", "6"], "Un carré a 4 côtés, et ils ont tous la même longueur !"],
  "TSR57_1_04": ["Quelle forme a 3 côtés ?", "Quel nom de forme commence par « tri » ?", ["Cercle", "Carré", "Rectangle", "Triangle"], "Un triangle a 3 côtés !"],
  "TSR57_1_05": ["Combien de coins a un triangle ?", "Un coin est l'endroit où deux côtés se rencontrent. Comptez-les !", ["3", "4", "2", "5"], "Un triangle a 3 coins, un à chaque sommet !"],
  "TSR57_1_06": ["Quelle forme a généralement une porte ?", "Une porte est plus haute que large et comporte 4 côtés.", ["Cercle", "Rectangle", "Triangle", "Étoile"], "Une porte est généralement de forme rectangulaire : elle a 4 côtés et est plus haute que large."],
  "TSR57_1_07": ["Combien de côtés a un rectangle ?", "Un rectangle est comme un carré étendu.", ["3", "5", "4", "6"], "Un rectangle a 4 côtés, tout comme un carré, mais deux côtés sont plus longs."],
  "TSR57_1_08": ["Quelle forme n’a PAS de coins ?", "Pensez à quelle forme est complètement ronde.", ["Triangle", "Carré", "Rectangle", "Cercle"], "Un cercle n’a pas de coins car il est parfaitement rond !"],
  "TSR57_1_09": ["Quelle est la forme d'une part de pizza ?", "Une tranche de pizza a une pointe à une extrémité et est plus large à l’autre.", ["Triangle", "Cercle", "Carré", "Rectangle"], "Une part de pizza a la forme d’un triangle !"],
  "TSR57_1_10": ["Combien de coins possède un carré ?", "Les coins sont l'endroit où les côtés se rejoignent. Un carré en a un à chaque coin.", ["3", "4", "5", "6"], "Un carré a 4 coins, un à chaque coin !"],
  "TSR57_1_11": ["Quelle forme le soleil a-t-il habituellement lorsqu'il est dessiné ?", "Le soleil est rond !", ["Carré", "Triangle", "Cercle", "Rectangle"], "Le soleil est généralement dessiné comme un cercle !"],
  "TSR57_1_12": ["Quelle forme a 4 côtés de même longueur ?", "Les quatre côtés sont égaux. Ce n'est pas un rectangle.", ["Triangle", "Cercle", "Rectangle", "Carré"], "Un carré a 4 côtés de même longueur !"],
  "TSR57_1_13": ["Quelle forme ont les roues d'une voiture ?", "Les roues sont rondes pour pouvoir rouler !", ["Cercle", "Carré", "Triangle", "Rectangle"], "Les roues des voitures sont des cercles ! C'est pourquoi ils peuvent rouler."],
  "TSR57_1_14": ["Combien de côtés a un cercle ?", "Un cercle est parfaitement rond. Est-ce qu'il a des bords droits ?", ["1", "0", "2", "3"], "Un cercle a 0 côté droit. C'est juste une courbe !"],
  "TSR57_1_15": ["Quelle forme a un livre ?", "Un livre a 4 côtés et est plus haut que large.", ["Triangle", "Cercle", "Rectangle", "Étoile"], "Un livre a la forme d’un rectangle !"],
  "TSR57_1_16": ["Quelle forme a 3 côtés et 3 coins ?", "Trois côtés, trois coins. De quelle forme s'agit-il ?", ["Carré", "Cercle", "Rectangle", "Triangle"], "Un triangle a 3 côtés et 3 coins !"],
  "TSR57_1_17": ["Quelle forme a généralement une montre ?", "La plupart des montres sont rondes !", ["Cercle", "Carré", "Triangle", "Étoile"], "La plupart des montres sont en forme de cercle !"],
  "TSR57_1_18": ["Combien de coins a un rectangle ?", "Un rectangle est comme un carré étendu. Combien de coins possède un carré ?", ["3", "4", "5", "6"], "Un rectangle a 4 coins, tout comme un carré !"],
  "TSR57_1_19": ["Quelle forme a généralement une fenêtre ?", "La plupart des fenêtres ont 4 côtés et 4 coins.", ["Triangle", "Cercle", "Carré", "Étoile"], "La plupart des fenêtres sont de forme carrée ou rectangulaire !"],
  "TSR57_1_20": ["Quelle forme ressemble le plus à un œuf ?", "Un œuf est rond mais pas un cercle parfait. C'est un peu exagéré.", ["Carré", "Triangle", "Rectangle", "Ovale"], "Un œuf ressemble plus à un ovale, à un cercle étendu !"],

  // ==========================================================================
  // RAISONNEMENT SPATIAL — Niveau 2 (TSR57_2_01 – TSR57_2_20)
  // ==========================================================================

  "TSR57_2_01": ["Quelle forme a des côtés incurvés ?", "La plupart des formes ont des côtés droits. Lequel ne le fait pas ?", ["Cercle", "Carré", "Triangle", "Rectangle"], "Un cercle a des côtés courbes. Toutes les autres formes ont des côtés droits !"],
  "TSR57_2_02": ["De quelle forme un rectangle est-il une version étirée ?", "Pensez à une forme avec 4 côtés égaux. Maintenant, étirez-le.", ["Cercle", "Carré", "Triangle", "Étoile"], "Un rectangle est comme un carré étendu ! Les deux ont 4 côtés et 4 coins."],
  "TSR57_2_03": ["Quelle forme prend un sandwich lorsque vous le coupez d’un coin à l’autre ?", "En découpant un carré d'un coin à l'autre, vous obtenez deux formes à 3 côtés chacune.", ["Cercle", "Carré", "Triangle", "Rectangle"], "Lorsque vous coupez un sandwich d'un coin à l'autre, vous obtenez deux triangles !"],
  "TSR57_2_04": ["Combien de coins a un losange ?", "Un losange ressemble à un carré posé dans un coin.", ["3", "5", "6", "4"], "Un losange a 4 coins, tout comme un carré retourné sur son sommet !"],
  "TSR57_2_05": ["Laquelle de ces formes peut être roulée ?", "Pensez à une forme qui n'a pas de côtés plats pour l'empêcher de rouler.", ["Cercle", "Carré", "Triangle", "Rectangle"], "Un cercle peut rouler car il est rond et n’a pas de bords plats !"],
  "TSR57_2_06": ["Quelle forme a une pièce de monnaie ?", "Les pièces sont rondes et plates.", ["Carré", "Cercle", "Triangle", "Étoile"], "Une pièce de monnaie a la forme d’un cercle !"],
  "TSR57_2_07": ["Quelle forme a une feuille de papier ?", "Le papier a 4 côtés et 4 coins. Deux côtés sont plus longs que les autres.", ["Cercle", "Triangle", "Rectangle", "Étoile"], "Une feuille de papier a la forme d’un rectangle !"],
  "TSR57_2_08": ["Quelle forme a une tente ?", "Une tente a une pointe pointue au sommet et est plus large à la base.", ["Cercle", "Carré", "Rectangle", "Triangle"], "Une tente a la forme d’un triangle avec un pic au sommet !"],
  "TSR57_2_09": ["Combien de côtés un carré a-t-il de plus qu'un triangle ?", "Un carré a 4 côtés. Un triangle a 3 côtés. Combien font 4 moins 3 ?", ["1", "2", "3", "4"], "Un carré a 4 côtés et un triangle a 3 côtés. 4 moins 3 est 1 côté supplémentaire !"],
  "TSR57_2_10": ["Quelle forme n’a aucune ligne droite ?", "Pensez à quelle forme est complètement courbée.", ["Rectangle", "Cercle", "Triangle", "Carré"], "Un cercle n'a pas de lignes droites. C'est juste une grosse courbe !"],
  "TSR57_2_11": ["Quelle forme a une bague ?", "Une bague fait le tour du doigt.", ["Carré", "Triangle", "Cercle", "Rectangle"], "Une bague a la forme d’un cercle !"],
  "TSR57_2_12": ["Quelle est la forme de la plupart des boîtes ?", "Les boîtes ont des côtés plats, 4 coins de chaque côté, et certains côtés sont plus longs.", ["Cercle", "Triangle", "Étoile", "Rectangle"], "La plupart des boîtes ont des faces rectangulaires !"],
  "TSR57_2_13": ["Quelle forme a le moins de côtés : triangle, carré ou rectangle ?", "Comptez les côtés de chaque forme. Quel nombre est le plus petit ?", ["Triangle", "Carré", "Rectangle", "Ils sont tous pareils"], "Un triangle a 3 côtés, un carré en a 4 et un rectangle en a 4. Le triangle en a le moins !"],
  "TSR57_2_14": ["Si vous dessinez le contour d’une balle, quelle forme dessinez-vous ?", "Une balle est ronde. Quelle forme plate est également ronde ?", ["Carré", "Cercle", "Triangle", "Rectangle"], "Si vous tracez le contour d’une balle, vous dessinez un cercle !"],
  "TSR57_2_15": ["À quelle forme ressemble un cône de signalisation vu de côté ?", "Un cône a une pointe pointue au sommet et est large à la base.", ["Cercle", "Carré", "Triangle", "Rectangle"], "Vu de côté, un cône de signalisation ressemble à un triangle !"],
  "TSR57_2_16": ["Si je plie un carré en deux, quelle forme ai-je ?", "Prenez une feuille de papier carrée et pliez-la. Vous obtenez une forme avec 4 côtés, mais pas tous égaux.", ["Cercle", "Triangle", "Carré", "Rectangle"], "Si je plie un carré en deux, j'obtiens un rectangle !"],
  "TSR57_2_17": ["Combien de lignes droites faut-il pour tracer un triangle ?", "Chaque côté d'un triangle est une ligne droite.", ["3", "4", "5", "2"], "Il faut 3 lignes droites pour tracer un triangle – une de chaque côté !"],
  "TSR57_2_18": ["Quelle forme a généralement un visage souriant dessiné ?", "Le visage est rond !", ["Carré", "Cercle", "Triangle", "Rectangle"], "Un visage souriant est généralement dessiné en cercle !"],
  "TSR57_2_19": ["Quelle forme a généralement un plateau de table ?", "La plupart des tables ont 4 côtés, dont deux plus longs que les autres.", ["Cercle", "Triangle", "Rectangle", "Étoile"], "La plupart des plateaux de table sont de forme rectangulaire !"],
  "TSR57_2_20": ["Quelle forme a un cerf-volant ?", "Un cerf-volant a 4 côtés et ressemble à un diamant étiré.", ["Cercle", "Triangle", "Carré", "Diamant"], "Un cerf-volant est en forme de diamant !"],

  // ==========================================================================
  // RAISONNEMENT SPATIAL — Niveau 3 (TSR57_3_01 – TSR57_3_20)
  // ==========================================================================

  "TSR57_3_01": ["Si vous regardez un papillon, les deux côtés se ressemblent. Cela s'appelle...", "Il y a un mot spécial pour désigner le match des deux côtés.", ["Symétrie", "Anguille", "Couleur", "Formulaire"], "Lorsque les deux côtés d’un objet se ressemblent, c’est ce qu’on appelle la symétrie !"],
  "TSR57_3_02": ["Qu'y a-t-il à droite de l'étoile ? Cercle, étoile, triangle", "Droite signifie le côté droit. Qu'est-ce qui vient après l'étoile ?", ["Cercle", "Triangle", "Étoile", "Carré"], "Dans la rangée Cercle, Étoile, Triangle : le Triangle est à droite de l'Étoile !"],
  "TSR57_3_03": ["Si vous faites pivoter un carré pour le placer dans un coin, à quoi ressemble-t-il ?", "Imaginez que vous faites pivoter le carré. Il a quand même 4 faces !", ["Un cercle", "Un triangle", "Un losange", "Un rectangle"], "Un carré posé dans un coin ressemble à un diamant !"],
  "TSR57_3_04": ["Si je plie un cœur en deux, combien de morceaux égaux vais-je obtenir ?", "Le côté gauche et le côté droit d’un cœur se ressemblent.", ["1", "3", "4", "2"], "Plier un cœur en deux vous donne 2 pièces égales qui s’emboîtent parfaitement !"],
  "TSR57_3_05": ["Dans quelle direction pointe cette flèche ? -->", "L'extrémité pointue indique la direction.", ["Droite", "Gauche", "Au-dessus de", "Vers le bas"], "Flèche --> pointe vers la droite !"],
  "TSR57_3_06": ["Si vous vous regardez dans le miroir, votre main droite semble être posée…", "Un miroir change la donne ! Votre droite semble se déplacer de l’autre côté.", ["Le côté droit", "Le côté gauche", "Au-dessus de", "Vers le bas"], "Dans le miroir, la main droite semble être du côté gauche. Les miroirs changent la donne !"],
  "TSR57_3_07": ["Si vous retournez la lettre M, elle ressemble à quelle lettre ?", "Retournez le M pour que les bosses soient baissées.", ["N", "Z", "w", "E"], "M à l’envers ressemble à W !"],
  "TSR57_3_08": ["Laquelle de ces flèches pointe vers le BAS ?", "Vers le bas signifie vers le sol.", ["-->", "<--", "^", "V"], "La flèche «v» pointe vers le bas, vers le sol !"],
  "TSR57_3_09": ["Si vous assemblez deux triangles base à base, quelle forme pouvez-vous créer ?", "Imaginez deux triangles se touchant à leurs bases.", ["Diamant", "Cercle", "Étoile", "Pentagone"], "Deux triangles assemblés base sur base forment un losange !"],
  "TSR57_3_10": ["Vous êtes face au Nord. Vous tournez à droite. Dans quelle direction faites-vous face maintenant ?", "Si le nord est devant, la droite est une autre direction.", ["Sud", "Est", "Ouest", "Nord"], "Si vous faites face au Nord et tournez à droite, vous êtes face à l’Est !"],
  "TSR57_3_11": ["Quelle lettre se ressemble si vous la tournez de gauche à droite ?", "Pensez à quelle lettre a les mêmes côtés gauche et droit.", ["F", "J.", "UN", "G"], "La lettre A est identique lorsqu'elle est tournée de gauche à droite car les deux côtés correspondent !"],
  "TSR57_3_12": ["Quelle forme obtient-on lorsque l’on met deux carrés côte à côte ?", "Deux carrés côte à côte forment une forme plus large que haute.", ["Carré", "Triangle", "Cercle", "Rectangle"], "Deux carrés placés l'un à côté de l'autre forment un rectangle !"],
  "TSR57_3_13": ["Si vous faites face à droite et que vous vous retournez complètement, dans quelle direction êtes-vous face ?", "Un tour complet signifie un cercle complet vers votre point de départ.", ["Droite", "Gauche", "Au-dessus de", "Vers le bas"], "Si vous vous retournez complètement, vous vous retrouvez dans la même direction : c’est vrai !"],
  "TSR57_3_14": ["Quelle forme a le plus de côtés : triangle, carré ou cercle ?", "Comptez les côtés : le triangle en a 3, le carré en a 4. Combien en a le cercle ?", ["Triangle", "Carré", "Cercle", "Ils sont tous pareils"], "Un triangle a 3 côtés, un carré en a 4 et un cercle en a 0. Le carré en a le plus !"],
  "TSR57_3_15": ["Si vous regardez la lettre B dans le miroir, est-ce qu’elle est la même ?", "Imaginez que vous tournez la lettre B pour que les bosses soient de l'autre côté.", ["Oui", "Peut être", "Pas", "Parfois"], "Pas! La lettre B n’a pas la même apparence dans le miroir. Les bosses seraient du mauvais côté."],
  "TSR57_3_16": ["Si vous vous tenez derrière quelqu’un et qu’il se tourne vers vous, votre gauche est… la sienne.", "Lorsque les gens se tiennent face à face, leurs côtés sont inversés !", ["Gauche", "Au-dessus de", "Vers le bas", "Droite"], "Quand quelqu’un vous fait face, votre gauche est sa droite. Les côtés sont inversés !"],
  "TSR57_3_17": ["Quelle forme obtenez-vous si vous coupez un cercle en deux ?", "Le demi-cercle ressemble à un dôme ou à un arc-en-ciel.", ["Demi-cercle", "Triangle", "Carré", "Rectangle"], "Couper un cercle en deux fait un demi-cercle !"],
  "TSR57_3_18": ["Si je plie une feuille de papier en deux deux fois, combien de sections ai-je lorsque je l'ouvre ?", "Le premier pli fait 2 sections. Puis pliez-vous à nouveau…", ["2", "4", "3", "6"], "Le premier pli donne 2 sections. Le deuxième pli les double en 4 sections !"],
  "TSR57_3_19": ["Laquelle de ces formes a exactement 5 côtés ?", "\"Penta\" signifie 5 !", ["Carré", "Triangle", "Pentagone", "Hexagone"], "Un pentagone a exactement 5 côtés. Penta signifie cinq !"],
  "TSR57_3_20": ["Si une horloge indique 3 heures, quelle forme prennent les deux aiguilles ?", "A 3 heures, une main pointe vers le haut et une autre vers la droite.", ["Une ligne droite", "Un cercle", "Un triangle", "Une forme en L"], "A 3 heures, une aiguille pointe vers le haut et une vers la droite, formant un L !"],

  // ==========================================================================
  // PROBLÈMES MATHÉMATIQUES — Niveau 1 (TMP57_1_01 – TMP57_1_20)
  // ==========================================================================

  "TMP57_1_01": ["Combien font 1 + 1 ?", "Levez 1 doigt. Maintenant, augmentez-en 1 de plus. Combien de doigts sont levés ?", ["2", "3", "1", "4"], "1 + 1 = 2. Un doigt plus un de plus font deux doigts !"],
  "TMP57_1_02": ["Combien font 2 + 1 ?", "Commencez avec 2 doigts. Prenez-en 1 de plus. Comptez-les !", ["2", "3", "4", "1"], "2 + 1 = 3. Deux plus un font trois !"],
  "TMP57_1_03": ["Combien font 2 + 2 ?", "Levez 2 doigts de chaque main. Combien y en a-t-il au total ?", ["3", "2", "4", "5"], "2 + 2 = 4. Deux d’un côté plus deux de l’autre font quatre !"],
  "TMP57_1_04": ["Combien font 3 + 1 ?", "Commencez à 3 et comptez 1 de plus.", ["3", "2", "5", "4"], "3 + 1 = 4. Trois plus un font quatre !"],
  "TMP57_1_05": ["Combien font 1 + 2 ?", "Commencez avec 1 doigt. Ajoutez-en 2 de plus. Comptez-les tous !", ["3", "4", "2", "5"], "1 + 2 = 3. Un plus deux font trois !"],
  "TMP57_1_06": ["Combien font 2 + 3 ?", "Levez 2 doigts, puis 3 autres. Combien y en a-t-il au total ?", ["4", "5", "6", "3"], "2 + 3 = 5. Deux plus trois font cinq !"],
  "TMP57_1_07": ["Vous avez 3 pommes et vous en obtenez 2 de plus. Combien de pommes as-tu ?", "Commencez par 3. Comptez 2 de plus : 4, 5.", ["4", "3", "5", "6"], "3 + 2 = 5. Trois pommes plus deux autres font cinq pommes !"],
  "TMP57_1_08": ["Combien font 4 + 1 ?", "Commencez à 4 et comptez 1 de plus. Quel numéro est le prochain ?", ["4", "6", "3", "5"], "4 + 1 = 5. Quatre plus un font cinq !"],
  "TMP57_1_09": ["Vous avez 5 bonbons et vous en obtenez 1 de plus. Combien de bonbons as-tu ?", "Commencez à 5. Comptez 1 de plus.", ["6", "5", "7", "4"], "5 + 1 = 6. Cinq bonbons plus un de plus font six bonbons !"],
  "TMP57_1_10": ["Combien font 3 + 3 ?", "Levez 3 doigts de chaque main. Comptez-les tous !", ["5", "6", "7", "4"], "3 + 3 = 6. Trois plus trois font six !"],
  "TMP57_1_11": ["Combien font 4 + 2 ?", "Commencez à 4. Comptez 2 de plus : 5, 6.", ["5", "7", "6", "8"], "4 + 2 = 6. Quatre plus deux font six !"],
  "TMP57_1_12": ["Vous avez 1 jouet et vous en obtenez 3 de plus. Combien de jouets as-tu maintenant ?", "Commencez par 1. Comptez 3 de plus : 2, 3, 4.", ["3", "5", "2", "4"], "1 + 3 = 4. Un jouet plus trois autres font quatre jouets !"],
  "TMP57_1_13": ["Combien font 5 + 2 ?", "Commencez à 5. Comptez 2 de plus : 6, 7.", ["7", "6", "8", "5"], "5 + 2 = 7. Cinq plus deux font sept !"],
  "TMP57_1_14": ["Combien font 3 + 4 ?", "Commencez à 3. Comptez 4 de plus : 4, 5, 6, 7.", ["6", "7", "8", "5"], "3 + 4 = 7. Trois plus quatre font sept !"],
  "TMP57_1_15": ["Voir 4 oiseaux. Ensuite, il y en a 3 autres. Combien y a-t-il d'oiseaux ?", "Commencez avec 4 oiseaux. Comptez 3 de plus : 5, 6, 7.", ["6", "5", "7", "8"], "4 + 3 = 7. Quatre oiseaux plus trois autres font sept oiseaux !"],
  "TMP57_1_16": ["Combien font 5 + 3 ?", "Commencez à 5. Comptez 3 de plus : 6, 7, 8.", ["7", "6", "9", "8"], "5 + 3 = 8. Cinq plus trois font huit !"],
  "TMP57_1_17": ["Combien font 4 + 4 ?", "Levez 4 doigts de chaque main. Comptez-les tous !", ["8", "7", "9", "6"], "4 + 4 = 8. Quatre plus quatre font huit !"],
  "TMP57_1_18": ["Vous avez 6 crayons et vous en obtenez 2 de plus. Combien de crayons as-tu ?", "Commencez à 6. Comptez 2 de plus : 7, 8.", ["7", "8", "6", "9"], "6 + 2 = 8. Six crayons plus deux autres font huit crayons !"],
  "TMP57_1_19": ["Combien font 5 + 5 ?", "Levez les 5 doigts de chaque main ! Combien y a-t-il de doigts ?", ["8", "9", "10", "11"], "5 + 5 = 10. Cinq plus cinq font dix !"],
  "TMP57_1_20": ["Combien font 4 + 3 ?", "Commencez à 4. Comptez 3 de plus : 5, 6, 7.", ["6", "8", "5", "7"], "4 + 3 = 7. Quatre plus trois font sept !"],

  // ==========================================================================
  // PROBLÈMES MATHÉMATIQUES — Niveau 2 (TMP57_2_01 – TMP57_2_20)
  // ==========================================================================

  "TMP57_2_01": ["Combien font 5 - 2 ?", "Commencez avec 5 doigts. Laissez-en 2. Combien d’autres sont récoltés ?", ["3", "4", "2", "5"], "5 - 2 = 3. Cinq moins deux font trois !"],
  "TMP57_2_02": ["Combien font 7 - 3 ?", "Commencez à 7. Comptez à rebours 3 : 6, 5, 4.", ["3", "4", "5", "2"], "7 - 3 = 4. Sept moins trois font quatre !"],
  "TMP57_2_03": ["Vous avez 8 biscuits et vous en mangez 3. Combien en reste-t-il ?", "Commencez par 8. Soustrayez 3 : 7, 6, 5.", ["4", "6", "5", "3"], "8 - 3 = 5. Huit biscuits moins trois laisse cinq biscuits !"],
  "TMP57_2_04": ["Combien font 6 - 2 ?", "Commencez à 6. Comptez à rebours 2 : 5, 4.", ["3", "5", "6", "4"], "6 - 2 = 4. Six moins deux font quatre !"],
  "TMP57_2_05": ["Combien font 10 - 4 ?", "Commencez à 10. Comptez à rebours 4 : 9, 8, 7, 6.", ["6", "5", "7", "4"], "10 - 4 = 6. Dix moins quatre font six !"],
  "TMP57_2_06": ["Vous avez 9 autocollants et vous en donnez 3. Combien vous en reste-t-il ?", "Commencez par 9. Soustrayez 3 : 8, 7, 6.", ["5", "6", "7", "4"], "9 - 3 = 6. Neuf autocollants moins trois feuilles six autocollants !"],
  "TMP57_2_07": ["Combien font 8 à 5 ?", "Commencez à 8. Comptez à rebours 5 : 7, 6, 5, 4, 3.", ["4", "2", "3", "5"], "8 - 5 = 3. Huit moins cinq font trois !"],
  "TMP57_2_08": ["Combien font 10 - 7 ?", "Commencez à 10. Comptez à rebours 7 : 9, 8, 7, 6, 5, 4, 3.", ["4", "2", "5", "3"], "10 - 7 = 3. Dix moins sept font trois !"],
  "TMP57_2_09": ["Vous disposez de 6 ballons et 2 éclatés. Combien en reste-t-il ?", "Commencez par 6. Soustrayez 2 : 5, 4.", ["4", "3", "5", "2"], "6 - 2 = 4. Six ballons moins deux laisse quatre ballons !"],
  "TMP57_2_10": ["Combien ça fait 9h à 17h ?", "Commencez à 9. Comptez à rebours 5 : 8, 7, 6, 5, 4.", ["3", "4", "5", "6"], "9 - 5 = 4. Neuf moins cinq font quatre !"],
  "TMP57_2_11": ["Combien font 7 - 4 ?", "Commencez à 7. Comptez à rebours 4 : 6, 5, 4, 3.", ["4", "2", "3", "5"], "7 - 4 = 3. Sept moins quatre font trois !"],
  "TMP57_2_12": ["Vous avez 10 raisins et vous en mangez 6. Combien en reste-t-il ?", "Commencez par 10. Soustrayez 6 : 9, 8, 7, 6, 5, 4.", ["5", "3", "6", "4"], "10 - 6 = 4. Dix raisins moins six feuilles quatre raisins !"],
  "TMP57_2_13": ["Combien font 8 - 4 ?", "Commencez à 8. Comptez à rebours 4 : 7, 6, 5, 4.", ["4", "3", "5", "2"], "8 - 4 = 4. Huit moins quatre font quatre !"],
  "TMP57_2_14": ["Combien font 5 - 3 ?", "Commencez à 5. Comptez à rebours 3 : 4, 3, 2.", ["3", "2", "1", "4"], "5 - 3 = 2. Cinq moins trois font deux !"],
  "TMP57_2_15": ["Vous avez 7 crayons et vous en perdez 2. Combien vous en reste-t-il ?", "Commencez par 7. Soustrayez 2 : 6, 5.", ["4", "6", "5", "3"], "7 - 2 = 5. Sept crayons moins deux feuilles cinq crayons !"],
  "TMP57_2_16": ["Combien font 9h à 18h ?", "Commencez à 9. Comptez à rebours 6 : 8, 7, 6, 5, 4, 3.", ["4", "2", "5", "3"], "9 - 6 = 3. Neuf moins six font trois !"],
  "TMP57_2_17": ["Combien font 10 - 5 ?", "Pensez à 10 doigts. Laissez 5 vers le bas. Combien en reste-t-il ?", ["5", "4", "6", "3"], "10 - 5 = 5. Dix moins cinq font cinq !"],
  "TMP57_2_18": ["Vous avez 8 boules et vous en lancez 2. Combien en reste-t-il ?", "Commencez par 8. Soustrayez 2 : 7, 6.", ["5", "6", "7", "4"], "8 - 2 = 6. Huit boules moins deux laisse six boules !"],
  "TMP57_2_19": ["Combien font 6 - 4 ?", "Commencez à 6. Comptez à rebours 4 : 5, 4, 3, 2.", ["3", "1", "2", "4"], "6 - 4 = 2. Six moins quatre font deux !"],
  "TMP57_2_20": ["Combien font 10 - 3 ?", "Commencez à 10. Comptez à rebours 3 : 9, 8, 7.", ["6", "8", "5", "7"], "10 - 3 = 7. Dix moins trois font sept !"],

  // ==========================================================================
  // PROBLÈMES MATHÉMATIQUES — Niveau 3 (TMP57_3_01 – TMP57_3_20)
  // ==========================================================================

  "TMP57_3_01": ["Si 2 voitures ont 4 roues chacune, combien y a-t-il de roues au total ?", "Comptez de 4 à 4 : 4, 8. Ou ajoutez : 4 + 4.", ["8", "6", "10", "4"], "2 voitures à 4 roues chacune : 4 + 4 = 8 roues au total !"],
  "TMP57_3_02": ["Si 3 enfants ont 2 mains chacun, combien y a-t-il de mains au total ?", "Comptez de 2 à 2 : 2, 4, 6. Ou additionnez : 2 + 2 + 2.", ["5", "6", "8", "4"], "3 enfants avec 2 mains chacun : 2 + 2 + 2 = 6 mains au total !"],
  "TMP57_3_03": ["Vous disposez de 4 sacs contenant chacun 2 pommes. Combien y a-t-il de pommes ?", "Comptez de 2 à 2 : 2, 4, 6, 8. Ou additionnez : 2 + 2 + 2 + 2.", ["6", "10", "8", "4"], "4 sacs de 2 pommes chacun : 2 + 2 + 2 + 2 = 8 pommes !"],
  "TMP57_3_04": ["Si 5 oiseaux ont 2 pattes chacun, combien y a-t-il de pattes au total ?", "Comptez de 2 à 2 cinq fois : 2, 4, 6, 8, 10.", ["8", "12", "6", "10"], "5 oiseaux à 2 pattes chacun : 2 + 2 + 2 + 2 + 2 = 10 pattes !"],
  "TMP57_3_05": ["Si 3 chiens ont 4 pattes chacun, combien y a-t-il de pattes au total ?", "Comptez de 4 à 4 : 4, 8, 12. Ou additionnez : 4 + 4 + 4.", ["12", "8", "10", "6"], "3 chiens à 4 pattes chacun : 4 + 4 + 4 = 12 pattes !"],
  "TMP57_3_06": ["Vous disposez de 2 boîtes de 5 crayons chacune. Combien y a-t-il de crayons ?", "Récupérez les crayons : 5 + 5.", ["8", "10", "12", "6"], "2 boîtes de 5 crayons chacune : 5 + 5 = 10 crayons !"],
  "TMP57_3_07": ["Si 4 enfants ont 2 yeux chacun, combien y a-t-il d’yeux au total ?", "Comptez de 2 à 2 : 2, 4, 6, 8.", ["6", "10", "8", "4"], "4 enfants avec 2 yeux chacun : 2 + 2 + 2 + 2 = 8 yeux !"],
  "TMP57_3_08": ["Si 2 araignées ont 8 pattes chacune, combien y a-t-il de pattes au total ?", "Ajoutez les pattes : 8 + 8.", ["12", "14", "10", "16"], "2 araignées à 8 pattes chacune : 8 + 8 = 16 pattes !"],
  "TMP57_3_09": ["Vous achetez 3 paquets d'autocollants. Chaque pack contient 3 autocollants. Combien y a-t-il d'autocollants ?", "Comptez de 3 à 3 : 3, 6, 9. Ou additionnez : 3 + 3 + 3.", ["9", "6", "12", "8"], "3 packs de 3 autocollants chacun : 3 + 3 + 3 = 9 autocollants !"],
  "TMP57_3_10": ["Si 5 fleurs ont 4 pétales chacune, combien y a-t-il de pétales au total ?", "Nombre de 4 à 4 : 4, 8, 12, 16, 20.", ["15", "20", "25", "10"], "5 fleurs à 4 pétales chacune : 4 + 4 + 4 + 4 + 4 = 20 pétales !"],
  "TMP57_3_11": ["Si 2 vélos ont 2 roues chacun, combien y a-t-il de roues ?", "Ajoutez les roues : 2 + 2.", ["6", "2", "4", "8"], "2 vélos à 2 roues chacun : 2 + 2 = 4 roues !"],
  "TMP57_3_12": ["Si 4 chats ont 4 pattes chacun, combien y a-t-il de pattes au total ?", "Nombre de 4 à 4 : 4, 8, 12, 16.", ["12", "8", "14", "16"], "4 chats à 4 pattes chacun : 4 + 4 + 4 + 4 = 16 pattes !"],
  "TMP57_3_13": ["Vous disposez de 5 assiettes. Il y a 2 biscuits dans chaque assiette. Combien y a-t-il de biscuits ?", "Comptez par 2 : 2, 4, 6, 8, 10.", ["10", "8", "12", "6"], "5 assiettes de 2 biscuits chacune : 2 + 2 + 2 + 2 + 2 = 10 biscuits !"],
  "TMP57_3_14": ["Si 3 tricycles ont 3 roues chacun, combien y a-t-il de roues ?", "Comptez de 3 à 3 : 3, 6, 9.", ["6", "9", "12", "8"], "3 tricycles à 3 roues chacun : 3 + 3 + 3 = 9 roues !"],
  "TMP57_3_15": ["Si 2 mains ont 5 doigts chacune, combien y a-t-il de doigts ?", "Rassemblez vos doigts : 5 + 5.", ["8", "12", "10", "5"], "2 mains avec 5 doigts chacune : 5 + 5 = 10 doigts !"],
  "TMP57_3_16": ["Vous avez 4 amis. Donnez à chaque ami 3 bonbons. De combien de bonbons avez-vous besoin ?", "Comptez de 3 à 3 : 3, 6, 9, 12.", ["8", "10", "15", "12"], "4 amis avec 3 bonbons chacun : 3 + 3 + 3 + 3 = 12 bonbons !"],
  "TMP57_3_17": ["Si 3 tables ont 4 pieds chacune, combien y a-t-il de pieds au total ?", "Comptez de 4 à 4 : 4, 8, 12.", ["12", "8", "10", "16"], "3 tables à 4 pieds chacune : 4 + 4 + 4 = 12 pieds !"],
  "TMP57_3_18": ["Si 5 enfants reçoivent chacun 3 ballons, combien y a-t-il de ballons ?", "Nombre de 3 à 3 : 3, 6, 9, 12, 15.", ["12", "15", "18", "10"], "5 enfants avec 3 ballons chacun : 3 + 3 + 3 + 3 + 3 = 15 ballons !"],
  "TMP57_3_19": ["Si 4 nids contiennent chacun 3 œufs, combien y a-t-il d’œufs ?", "Comptez de 3 à 3 : 3, 6, 9, 12.", ["8", "10", "12", "9"], "4 nids de 3 œufs chacun : 3 + 3 + 3 + 3 = 12 œufs !"],
  "TMP57_3_20": ["Si 2 dés ont 6 faces chacun, combien y a-t-il de faces au total ?", "Additionnez les visages : 6 + 6.", ["8", "10", "6", "12"], "2 dés à 6 faces chacun : 6 + 6 = 12 faces !"],

  }
});
