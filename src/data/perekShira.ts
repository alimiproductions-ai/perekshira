export interface PerekShiraItem {
  id: string;
  chapter: number;
  name: string;
  hebrewName: string;
  introHebrew: string;
  verseHebrew: string;
  verseFrench: string;
  customImage?: string;
}

export const perekShiraData: PerekShiraItem[] = [
  {
    id: "sky",
    chapter: 1,
    name: "Les Cieux",
    hebrewName: "שמים",
    introHebrew: "שָׁמַיִם אוֹמְרִים:",
    verseHebrew: "הַשָּׁמַיִם מְסַפְּרִים כְּבוֹד אֵל וּמַעֲשֵׂה יָדָיו מַגִּיד הָרָקִיעַ",
    verseFrench: "Les cieux racontent la gloire de Dieu, et l’étendue manifeste l’œuvre de ses mains.",
    customImage: "cieux.png"
  },
  {
    id: "earth",
    chapter: 1,
    name: "La Terre",
    hebrewName: "ארץ",
    introHebrew: "אֶרֶץ אוֹמֶרֶת:",
    verseHebrew: "לַיהֹוָה הָאָרֶץ וּמְלוֹאָהּ תֵּבֵל וְיֹשְׁבֵי בָהּ. וְאוֹמֵר: מִכְּנַף הָאָרֶץ זְמִרֹת שָׁמַעְנוּ צְבִי לַצַּדִּיק",
    verseFrench: "À l’Éternel appartient la terre et ce qu’elle renferme, le monde et ceux qui l’habitent. Et il est dit : Du bord de la terre nous entendons des chants : Gloire au Juste !",
    customImage: "terre.png"
  },
  {
    id: "gan-eden",
    chapter: 1,
    name: "Le Jardin d'Éden",
    hebrewName: "גן עדן",
    introHebrew: "גַּן עֵדֶן אוֹמֵר:",
    verseHebrew: "עוּרִי צָפוֹן וּבוֹאִי תֵימָן הָפִיחִי גַנִּי יִזְּלוּ בְשָׂמָיו יָבֹא דוֹדִי לְגַנּוֹ וְיֹאכַל פְּרִי מְגָדָיו",
    verseFrench: "Lève-toi, aquilon ! viens, vent du midi ! Souffle sur mon jardin, et que ses parfums s’exhalent ! Que mon bien-aimé entre dans son jardin, et qu’il mange de ses fruits exquis !",
    customImage: "ganeden.png"
  },
  {
    id: "gehenom",
    chapter: 1,
    name: "Le Guéhinnom",
    hebrewName: "גיהנם",
    introHebrew: "גֵּיהִנָּם אוֹמֵר:",
    verseHebrew: "כִּי הִשְׂבִּיעַ נֶפֶשׁ שׁוֹקֵקָה וְנֶפֶשׁ רְעֵבָה מִלֵּא טוֹב",
    verseFrench: "Car il a rassasié l’âme altérée, il a comblé de biens l’âme affamée.",
    customImage: "gehinam.png"
  },
  {
    id: "desert",
    chapter: 1,
    name: "Le Désert",
    hebrewName: "מדבר",
    introHebrew: "מִדְבָּר אוֹמֵר:",
    verseHebrew: "יְשֻׂשׂוּם מִדְבָּר וְצִיָּה וְתָגֵל עֲרָבָה וְתִפְרַח כַּחֲבַצָּלֶת",
    verseFrench: "Le désert et la terre aride se réjouiront ; la solitude s’égaiera, et fleurira comme la rose.",
    customImage: "desert.png"
  },
  {
    id: "fields",
    chapter: 1,
    name: "Les Champs",
    hebrewName: "שדות",
    introHebrew: "שָׂדוֹת אוֹמְרִים:",
    verseHebrew: "יְהֹוָה בְּחָכְמָה יָסַד אָרֶץ כּוֹנֵן שָׁמַיִם בִּתְבוּנָה",
    verseFrench: "C’est par la sagesse que l’Éternel a fondé la terre, c’est par l’intelligence qu’il a affermi les cieux.",
    customImage: "champs.png"
  },
  {
    id: "waters",
    chapter: 1,
    name: "Les Eaux",
    hebrewName: "מים",
    introHebrew: "מַיִם אוֹמְרִים:",
    verseHebrew: "לְקוֹל תִּתּוֹ הֲמוֹן מַיִם בַּשָּׁמַיִם וַיַּעַל נְשִׂאִים מִקְצֵה אָרֶץ",
    verseFrench: "À sa voix, les eaux mugissent dans les cieux ; il fait monter les nuages des extrémités de la terre.",
    customImage: "eaux.png"
  },
  {
    id: "seas",
    chapter: 1,
    name: "Les Mers",
    hebrewName: "ימים",
    introHebrew: "יָמִים אוֹמְרִים:",
    verseHebrew: "מִקֹּלוֹת מַיִם רַבִּים אַדִּירִים מִשְׁבְּרֵי יָם אַדִּיר בַּמָּרוֹם יְהֹוָה",
    verseFrench: "Plus que la voix des grandes eaux, plus que les puissants flots de la mer, l’Éternel est puissant dans les hauteurs.",
    customImage: "mers.png"
  },
  {
    id: "rivers",
    chapter: 1,
    name: "Les Fleuves",
    hebrewName: "נהרות",
    introHebrew: "נַהֲרוֹת אוֹמְרִים:",
    verseHebrew: "נְהָרוֹת יִמְחֲאוּ כָף יַחַד הָרִים יְרַנֵּנוּ",
    verseFrench: "Les fleuves battent des mains, ensemble les montagnes chantent de joie.",
    customImage: "fleuves.png"
  },
  {
    id: "wells",
    chapter: 1,
    name: "Les Sources d'eau",
    hebrewName: "מעינות",
    introHebrew: "מַעְיָנוֹת אוֹמְרִים:",
    verseHebrew: "וְשָׁרִים כְּחֹלְלִים כָּל מַעְיָנַי בָּךְ",
    verseFrench: "Et ceux qui chantent en dansant s’écrient : Toutes mes sources sont en toi !",
    customImage: "sources.png"
  },
  {
    id: "day",
    chapter: 2,
    name: "Le Jour",
    hebrewName: "יום",
    introHebrew: "יוֹם אוֹמֵר:",
    verseHebrew: "יוֹם לְיוֹם יַבִּיעַ אֹמֶר וְלַיְלָה לְּלַיְלָה יְחַוֶּה דָּעַת",
    verseFrench: "Le jour en instruit un autre jour, la nuit en donne connaissance à une autre nuit.",
    customImage: "jour.png"
  },
  {
    id: "night",
    chapter: 2,
    name: "La Nuit",
    hebrewName: "לילה",
    introHebrew: "לַיְלָה אוֹמֵר:",
    verseHebrew: "לְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ וֶאֱמוּנָתְךָ בַּלֵּילוֹת",
    verseFrench: "Pour annoncer le matin ta bonté, et ta fidélité pendant les nuits.",
    customImage: "nuit.png"
  },
  {
    id: "sun",
    chapter: 2,
    name: "Le Soleil",
    hebrewName: "שמש",
    introHebrew: "שֶׁמֶשׁ אוֹמֵר:",
    verseHebrew: "שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה לְאוֹר חִצֶּיךָ יְהַלֵּכוּ לְנֹגַהּ בְּרַק חֲנִיתֶךָ",
    verseFrench: "Le soleil et la lune s’arrêtent dans leur demeure, à la lumière de tes flèches qui partent, à la clarté de ta lance qui brille.",
    customImage: "soleil.png"
  },
  {
    id: "moon",
    chapter: 2,
    name: "La Lune",
    hebrewName: "ירח",
    introHebrew: "יָרֵחַ אוֹמֶרֶת:",
    verseHebrew: "עָשָׂה יָרֵחַ לְמוֹעֲדִים שֶׁמֶשׁ יָדַע מְבוֹאוֹ",
    verseFrench: "Il a fait la lune pour marquer les temps ; le soleil sait quand il doit se coucher.",
    customImage: "lune.png"
  },
  {
    id: "stars",
    chapter: 2,
    name: "Les Étoiles",
    hebrewName: "כוכבים",
    introHebrew: "כּוֹכָבִים אוֹמְרִים:",
    verseHebrew: "אַתָּה הוּא יְהֹוָה לְבַדֶּךָ אַתָּה עָשִׂיתָ אֶת הַשָּׁמַיִם שְׁמֵי הַשָּׁמַיִם וְכָל צְבָאָם",
    verseFrench: "C’est toi, Éternel, toi seul, qui as fait les cieux, les cieux des cieux et toute leur armée.",
    customImage: "etoile.png"
  },
  {
    id: "clouds",
    chapter: 2,
    name: "Les Nuages",
    hebrewName: "עבים",
    introHebrew: "עָבִים אוֹמְרִים:",
    verseHebrew: "יָשֶׁת חֹשֶׁךְ סִתְרוֹ סְבִיבוֹתָיו סֻכָּתוֹ חֶשְׁכַת מַיִם עָבֵי שְׁחָקִים",
    verseFrench: "Il fait des ténèbres sa retraite, il se couvre de nuages obscurs et de sombres eaux comme d’une tente.",
    customImage: "/image/nuages.jpg"
  },
  {
    id: "cloud-masses",
    chapter: 2,
    name: "Les Nuées",
    hebrewName: "ענני כבוד",
    introHebrew: "עַנְנֵי כָבוֹד אוֹמְרִים:",
    verseHebrew: "אַף בְּרִי יַטְרִיחַ עָב יָפִיץ עֲנַן אוֹרוֹ",
    verseFrench: "Il charge aussi les nuages d’humidité, il disperse la nuée étincelante.",
    customImage: "/image/nuees.jpg"
  },
  {
    id: "wind",
    chapter: 2,
    name: "Le Vent",
    hebrewName: "רוח",
    introHebrew: "רוּחַ אוֹמֵר:",
    verseHebrew: "אֹמַר לַצָּפוֹן תֵּנִי וּלְתֵימָן אַל תִּכְלָאִי הָבִיאִי בָנַי מֵרָחוֹק וּבְנוֹתַי מִקְצֵה הָאָרֶץ",
    verseFrench: "Je dirai au septentrion : Donne ! et au midi : Ne retiens pas ! Fais venir mes fils des pays lointains, et mes filles de l’extrémité de la terre.",
    customImage: "/image/vent.jpg"
  },
  {
    id: "lightning",
    chapter: 2,
    name: "Les Éclairs",
    hebrewName: "ברקים",
    introHebrew: "בְּרָקִים אוֹמְרִים:",
    verseHebrew: "בְּרָקִים לַמָּטָר עָשָׂה מוֹצֵא רוּחַ מֵאוֹצְרוֹתָיו",
    verseFrench: "Il fait briller les éclairs au milieu de la pluie, il tire le vent de ses trésors.",
    customImage: "/image/eclairs.jpg"
  },
  {
    id: "dew",
    chapter: 2,
    name: "La Rosée",
    hebrewName: "טל",
    introHebrew: "טַל אוֹמֵר:",
    verseHebrew: "אֶהְיֶה כַטַּל לְיִשְׂרָאֵל יִפְרַח כַּשּׁוֹשַׁנָּה וְיַךְ שָׁרָשָׁיו כַּלְּבָנוֹן",
    verseFrench: "Je serai pour Israël comme la rosée, il fleurira comme le lis, et il poussera ses racines comme le Liban.",
    customImage: "/image/rosee.jpg"
  },
  {
    id: "rain",
    chapter: 2,
    name: "La Pluie",
    hebrewName: "גשמים",
    introHebrew: "גְּשָׁמִים אוֹמְרִים:",
    verseHebrew: "גֶּשֶׁם נְדָבוֹת תָּנִיף אֱלֹהִים נַחֲלָתְךָ וְנִלְאָה אַתָּה כוֹנַנְתָּהּ",
    verseFrench: "Tu fis tomber une pluie bienfaisante, ô Dieu ! tu fortifias ton héritage épuisé.",
    customImage: "/image/pluie.jpg"
  },
  {
    id: "trees",
    chapter: 3,
    name: "Les Arbres",
    hebrewName: "אילנות",
    introHebrew: "אִילָנוֹת אוֹמְרִים:",
    verseHebrew: "אָז יְרַנְּנוּ עֲצֵי הַיַּעַר מִלִּפְנֵי יְהֹוָה כִּי בָא לִשְׁפּוֹט אֶת הָאָרֶץ",
    verseFrench: "Alors les arbres de la forêt tressailliront de joie devant l’Éternel, car il vient pour juger la terre.",
    customImage: "/image/arbres.jpg"
  },
  {
    id: "vine",
    chapter: 3,
    name: "La Vigne",
    hebrewName: "גפן",
    introHebrew: "גֶּפֶן אוֹמֶרֶת:",
    verseHebrew: "כֹּה אָמַר יְהֹוָה כַּאֲשֶׁר יִמָּצֵא הַתִּירוֹשׁ בָּאֶשְׁכּוֹל וְאָמַר אַל תַּשְׁחִיתֵהוּ כִּי בְרָכָה בּוֹ",
    verseFrench: "Ainsi parle l’Éternel : Quand il se trouve du jus dans une grappe, on dit : Ne la détruis pas, car il y a là une bénédiction.",
    customImage: "/image/vigne.jpg"
  },
  {
    id: "fig",
    chapter: 3,
    name: "Le Figuier",
    hebrewName: "תאנה",
    introHebrew: "תְּאֵנָה אוֹמֶרֶת:",
    verseHebrew: "נֹצֵר תְּאֵנָה יֹאכַל פִּרְיָהּ",
    verseFrench: "Celui qui soigne un figuier en mangera le fruit.",
    customImage: "/image/figuier.jpg"
  },
  {
    id: "pomegranate",
    chapter: 3,
    name: "Le Grenadier",
    hebrewName: "רמון",
    introHebrew: "רִמּוֹן אוֹמֵר:",
    verseHebrew: "כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ מִבַּעַד לְצַמָּתֵךְ",
    verseFrench: "Ta joue est comme une moitié de grenade, derrière ton voile.",
    customImage: "/image/grenadier.jpg"
  },
  {
    id: "date-palm",
    chapter: 3,
    name: "Le Palmier",
    hebrewName: "תמר",
    introHebrew: "תָּמָר אוֹמֵר:",
    verseHebrew: "צַדִּיק כַּתָּמָר יִפְרָח כְּאֶרֶז בַּלְּבָנוֹן יִשְׂגֶּה",
    verseFrench: "Le juste fleurit comme le palmier, il s’élève comme le cèdre du Liban.",
    customImage: "/image/palmier.jpg"
  },
  {
    id: "apple",
    chapter: 3,
    name: "Le Pommier",
    hebrewName: "תפוח",
    introHebrew: "תַּפּוּחַ אוֹמֵר:",
    verseHebrew: "כְּתַפּוּחַ בַּעֲצֵי הַיַּעַר כֵּן דּוֹדִי בֵּין הַבָּנִים",
    verseFrench: "Comme un pommier au milieu des arbres de la forêt, tel est mon bien-aimé parmi les jeunes hommes.",
    customImage: "/image/pommier.jpg"
  },
  {
    id: "wheat",
    chapter: 3,
    name: "Le Blé",
    hebrewName: "חטה",
    introHebrew: "חִטָּה אוֹמֶרֶת:",
    verseHebrew: "שִׁיר הַמַּעֲלוֹת מִמַּעֲמַקִּים קְרָאתִיךָ יְהֹוָה",
    verseFrench: "Chant des degrés. Du fond de l’abîme je t’invoque, ô Éternel !",
    customImage: "/image/ble.jpg"
  },
  {
    id: "barley",
    chapter: 3,
    name: "L'Orge",
    hebrewName: "שעורה",
    introHebrew: "שְׂעוֹרָה אוֹמֶרֶת:",
    verseHebrew: "תְּפִלָּה לְעָנִי כִי יַעֲטֹף וְלִפְנֵי יְהֹוָה יִשְׁפֹּךְ שִׂיחוֹ",
    verseFrench: "Prière d’un malheureux, lorsqu’il est abattu et qu’il répand sa plainte devant l’Éternel.",
    customImage: "/image/orge.jpg"
  },
  {
    id: "other-grains",
    chapter: 3,
    name: "Les autres Céréales",
    hebrewName: "שאר השבולים",
    introHebrew: "שְׁאָר הַשִּׁבֳּלִים אוֹמְרִים:",
    verseHebrew: "לָבְשׁוּ כָרִים הַצֹּאן וַעֲמָקִים יַעַטְפוּ בָר יִתְרוֹעֲעוּ אַף יָשִׁירוּ",
    verseFrench: "Les pâturages se couvrent de brebis, et les vallées se revêtent de froment ; les cris de joie et les chants retentissent.",
    customImage: "/image/cereales.jpg"
  },
  {
    id: "vegetables",
    chapter: 3,
    name: "Les Légumes",
    hebrewName: "ירקות שדה",
    introHebrew: "יְרָקוֹת שָׂדֶה אוֹמְרִים:",
    verseHebrew: "תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶיהָ בִּרְבִיבִים תְּמֹגְגֶנָּה צִמְחָהּ תְּבָרֵךְ",
    verseFrench: "Tu arroses ses sillons, tu aplanis ses mottes, tu l’adoucis par des pluies, tu bénis son germe.",
    customImage: "/image/legumes.jpg"
  },
  {
    id: "grass",
    chapter: 3,
    name: "L'Herbe",
    hebrewName: "דשאים",
    introHebrew: "דְּשָׁאִים אוֹמְרִים:",
    verseHebrew: "יְהִי כְבוֹד יְהֹוָה לְעוֹלָם יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו",
    verseFrench: "Que la gloire de l’Éternel subsiste à jamais ! Que l’Éternel se réjouisse de ses œuvres !",
    customImage: "/image/herbe.jpg"
  },
  {
    id: "rooster",
    chapter: 4,
    name: "Le Coq",
    hebrewName: "תרנגול",
    introHebrew: "תַּרְנְגוֹל אוֹמֵר:",
    verseHebrew: "בְּשָׁעָה שֶׁבָּא הַקָּדוֹשׁ בָּרוּךְ הוּא אֵצֶל הַצַּדִּיקִים בְּגַן עֵדֶן, זָלְפוּ כָּל אִילָנֵי גַן עֵדֶן בְּשָׂמִים וּמְרַנְּנִים וּמְשַׁבְּחִים, וְאָז גַּם הוּא מִתְעוֹרֵר וּמְרַנֵּן.",
    verseFrench: "Au moment où le Saint, béni soit-Il, vient auprès des justes dans le Jardin d'Éden, tous les arbres du Jardin d'Éden distillent des parfums, chantent et louent, et alors lui aussi s'éveille et chante.",
    customImage: "/image/coq.jpg"
  },
  {
    id: "hen",
    chapter: 4,
    name: "La Poule",
    hebrewName: "תרנגולת",
    introHebrew: "תַּרְנְגוֹלֶת אוֹמֶרֶת:",
    verseHebrew: "נֹתֵן לֶחֶם לְכָל בָּשָׂר כִּי לְעוֹלָם חַסְדּוֹ",
    verseFrench: "Celui qui donne la nourriture à toute chair, car sa miséricorde dure à toujours !",
    customImage: "/image/poule.jpg"
  },
  {
    id: "dove",
    chapter: 4,
    name: "La Colombe",
    hebrewName: "יונה",
    introHebrew: "יוֹנָה אוֹמֶרֶת:",
    verseHebrew: "כְּסוּס עָגוּר כֵּן אֲצַפְצֵף אֶהְגֶּה כַּיּוֹנָה דַּלּוּ עֵינַי לַמָּרוֹם אֲדֹנָי עָשְׁקָה לִּי עָרְבֵנִי",
    verseFrench: "Je poussais des cris comme une hirondelle ou une grue, je gémissais comme la colombe ; mes yeux se tournaient languissants vers le haut : Ô Éternel ! je suis dans l’angoisse, secours-moi !",
    customImage: "/image/colombe.jpg"
  },
  {
    id: "eagle",
    chapter: 4,
    name: "L'Aigle",
    hebrewName: "נשר",
    introHebrew: "נֶשֶׁר אוֹמֵר:",
    verseHebrew: "וְאַתָּה יְהֹוָה אֱלֹהִים צְבָאוֹת אֱלֹהֵי יִשְׂרָאֵל הָקִיצָה לִפְקֹד כָּל הַגּוֹיִם אַל תָּחֹן כָּל בֹּגְדֵי אָוֶן סֶלָה",
    verseFrench: "Toi, Éternel, Dieu des armées, Dieu d’Israël, lève-toi, pour châtier toutes les nations ! N’aie pitié d'aucun de ces méchants infidèles ! Sélah.",
    customImage: "/image/aigle.jpg"
  },
  {
    id: "crane",
    chapter: 4,
    name: "La Grue",
    hebrewName: "עגור",
    introHebrew: "עָגוּר אוֹמֵר:",
    verseHebrew: "הוֹדוּ לַיהֹוָה בְּכִנּוֹר בְּנֵבֶל עָשׂוֹר זַמְּרוּ לוֹ",
    verseFrench: "Célébrez l’Éternel avec la harpe, louez-le sur le luth à dix cordes.",
    customImage: "/image/grue.jpg"
  },
  {
    id: "bird",
    chapter: 4,
    name: "L'Oiseau",
    hebrewName: "ציפור",
    introHebrew: "צִפּוֹר אוֹמֵר:",
    verseHebrew: "גַּם צִפּוֹר מָצְאָה בַיִת וּדְרוֹר קֵן לָהּ אֲשֶׁר שָׁתָה אֶפְרֹחֶיהָ אֶת מִזְבְּחוֹתֶיךָ יְהֹוָה צְבָאוֹת מַלְכִּי וֵאלֹהָי",
    verseFrench: "Le passereau même trouve une maison, et l’hirondelle un nid où elle dépose ses petits... Tes autels, Éternel des armées ! mon Roi et mon Dieu !",
    customImage: "/image/oiseau.jpg"
  },
  {
    id: "swallow",
    chapter: 4,
    name: "L'Hirondelle",
    hebrewName: "סנונית",
    introHebrew: "סְנוּנִית אוֹמֶרֶת:",
    verseHebrew: "לְמַעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם יְהֹוָה אֱלֹהַי לְעוֹלָם אוֹדֶךָ",
    verseFrench: "Afin que mon cœur te chante et ne se taise pas. Éternel, mon Dieu ! je te célébrerai à toujours.",
    customImage: "/image/hirondelle.jpg"
  },
  {
    id: "vulture",
    chapter: 4,
    name: "Le Vautour",
    hebrewName: "טס",
    introHebrew: "טַס אוֹמֵר:",
    verseHebrew: "עֶזְרִי מֵעִם יְהֹוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ",
    verseFrench: "Mon secours vient de l’Éternel, qui a fait les cieux et la terre.",
    customImage: "/image/vautour.jpg"
  },
  {
    id: "stork",
    chapter: 4,
    name: "La Cigogne",
    hebrewName: "חסידה",
    introHebrew: "חֲסִידָה אוֹמֶרֶת:",
    verseHebrew: "דַּבְּרוּ עַל לֵב יְרוּשָׁלַיִם וְקִרְאוּ אֵלֶיהָ כִּי מָלְאָה צְבָאָהּ כִּי נִרְצָה עֲוֹנָהּ",
    verseFrench: "Parlez au cœur de Jérusalem, et criez-lui que sa servitude est finie, que son iniquité est expiée.",
    customImage: "/image/cigogne.jpg"
  },
  {
    id: "raven",
    chapter: 4,
    name: "Le Corbeau",
    hebrewName: "עורב",
    introHebrew: "עוֹרֵב אוֹמֵר:",
    verseHebrew: "מִי יָכִין לָעֹרֵב צֵידוֹ כִּי יְלָדָיו אֶל אֵל יְשַׁוֵּעוּ",
    verseFrench: "Qui prépare au corbeau sa pâture, quand ses petits crient vers Dieu ?",
    customImage: "/image/corbeau.jpg"
  },
  {
    id: "starling",
    chapter: 4,
    name: "L'Étourneau",
    hebrewName: "זרזיר",
    introHebrew: "זַרְזִיר אוֹמֵר:",
    verseHebrew: "רַנְּנוּ צַדִּיקִים בַּיהֹוָה לַיְשָׁרִים נָאוָה תְהִלָּה",
    verseFrench: "Justes, réjouissez-vous en l’Éternel ! La louange sied aux hommes droits.",
    customImage: "/image/etourneau.jpg"
  },
  {
    id: "domestic-goose",
    chapter: 4,
    name: "L'Oie domestique",
    hebrewName: "אווז הבית",
    introHebrew: "אַוַּז הַבַּיִת אוֹמֵר:",
    verseHebrew: "הוֹדוּ לַיהֹוָה קִרְאוּ בִשְׁמוֹ הוֹדִיעוּ בָעַמִּים עֲלִילֹתָיו. שִׁירוּ לוֹ זַמְּרוּ לוֹ שִׂיחוּ בְּכָל נִפְלְאוֹתָיו",
    verseFrench: "Louez l’Éternel, invoquez son nom ! Faites connaître parmi les peuples ses hauts faits ! Chantez, chantez en son honneur ! Racontez toutes ses merveilles !",
    customImage: "/image/oie-domestique.jpg"
  },
  {
    id: "wild-goose",
    chapter: 4,
    name: "L'Oie sauvage",
    hebrewName: "אווז הבר",
    introHebrew: "אַוַּז הַבָּר אוֹמֵר:",
    verseHebrew: "מִמִּזְרַח שֶׁמֶשׁ עַד מְבוֹאוֹ מְהֻלָּל שֵׁם יְהֹוָה",
    verseFrench: "Du levant au couchant, que le nom de l’Éternel soit célébré !",
    customImage: "/image/oie-sauvage.jpg"
  },
  {
    id: "duck",
    chapter: 4,
    name: "Le Canard",
    hebrewName: "ברוז",
    introHebrew: "בַּרְוַז אוֹמֵר:",
    verseHebrew: "בִּטְחוּ בַיהֹוָה עֲדֵי עַד כִּי בְּיָהּ יְהֹוָה צוּר עוֹלָמִים",
    verseFrench: "Confiez-vous en l’Éternel à perpétuité, car l’Éternel est le rocher des siècles.",
    customImage: "/image/canard.jpg"
  },
  {
    id: "grasshopper",
    chapter: 4,
    name: "La Sauterelle",
    hebrewName: "חגב",
    introHebrew: "חָגָב אוֹמֵר:",
    verseHebrew: "אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי",
    verseFrench: "Je lève mes yeux vers les montagnes... D’où me viendra le secours ?",
    customImage: "/image/sauterelle.jpg"
  },
  {
    id: "spider",
    chapter: 4,
    name: "L'Araignée",
    hebrewName: "שממית",
    introHebrew: "שְׂמָמִית אוֹמֶרֶת:",
    verseHebrew: "הַלְלוּהוּ בְצִלְצְלֵי שָׁמַע הַלְלוּהוּ בְּצִלְצְלֵי תְרוּעָה",
    verseFrench: "Louez-le avec les cymbales sonores ! Louez-le avec les cymbales retentissantes !",
    customImage: "/image/araignee.jpg"
  },
  {
    id: "fly",
    chapter: 4,
    name: "La Mouche",
    hebrewName: "זבוב",
    introHebrew: "זְבוּב אוֹמֵר:",
    verseHebrew: "קוֹל אֹמֵר קְרָא וְאָמַר מָה אֶקְרָא כָּל הַבָּשָׂר חָצִיר וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה. יָבֵשׁ חָצִיר נָבֵל צִיץ וּדְבַר אֱלֹהֵינוּ יָקוּם לְעוֹלָם",
    verseFrench: "Une voix dit : Crie ! — Et il répond : Que crierai-je ? Toute chair est comme l’herbe, et tout son éclat comme la fleur des champs. L’herbe sèche, la fleur tombe ; mais la parole de notre Dieu subsiste éternellement.",
    customImage: "/image/mouche.jpg"
  },
  {
    id: "sea-monsters",
    chapter: 4,
    name: "Les Monstres marins",
    hebrewName: "תנינים",
    introHebrew: "תַּנִּינִים אוֹמְרִים:",
    verseHebrew: "הַלְלוּ אֶת יְהֹוָה מִן הָאָרֶץ תַּנִּינִים וְכָל תְּהֹמוֹת",
    verseFrench: "Louez l’Éternel du bas de la terre, monstres marins, et vous tous, abîmes !",
    customImage: "/image/monstres-marins.jpg"
  },
  {
    id: "whale",
    chapter: 4,
    name: "La Baleine",
    hebrewName: "לויתן",
    introHebrew: "לִוְיָתָן אוֹמֵר:",
    verseHebrew: "הוֹדוּ לַיהֹוָה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ",
    verseFrench: "Louez l’Éternel, car il est bon, car sa miséricorde dure à toujours !",
    customImage: "/image/baleine.jpg"
  },
  {
    id: "fish",
    chapter: 4,
    name: "Les Poissons",
    hebrewName: "דגים",
    introHebrew: "דָּגִים אוֹמְרִים:",
    verseHebrew: "קוֹל יְהֹוָה עַל הַמָּיִם אֵל הַכָּבוֹד הִרְעִים יְהֹוָה עַל מַיִם רַבִּים",
    verseFrench: "La voix de l’Éternel retentit sur les eaux, le Dieu de gloire fait gronder le tonnerre, l’Éternel est sur les grandes eaux.",
    customImage: "/image/poissons.jpg"
  },
  {
    id: "frog",
    chapter: 4,
    name: "La Grenouille",
    hebrewName: "צפרדע",
    introHebrew: "צְפַרְדֵּעַ אוֹמֶרֶת:",
    verseHebrew: "בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד",
    verseFrench: "Béni soit le nom de la gloire de Son règne à tout jamais.",
    customImage: "/image/grenouille.jpg"
  },
  {
    id: "sheep",
    chapter: 5,
    name: "Le Petit Bétail",
    hebrewName: "בהמה דקה",
    introHebrew: "בְּהֵמָה דַּקָּה טְהוֹרָה אוֹמֶרֶת:",
    verseHebrew: "מִי כָמֹכָה בָּאֵלִם יְהֹוָה מִי כָּמֹכָה נֶאְדָּר בַּקֹּדֶשׁ נוֹרָא תְהִלֹּת עֹשֵׂה פֶלֶא",
    verseFrench: "Qui est comme toi parmi les dieux, ô Éternel ? Qui est comme toi magnifique en sainteté, digne de louanges, opérant des prodiges ?",
    customImage: "/image/mouton.jpg"
  },
  {
    id: "cattle",
    chapter: 5,
    name: "Le Gros Bétail",
    hebrewName: "בהמה גסה",
    introHebrew: "בְּהֵמָה גַּסָּה טְהוֹרָה אוֹמֶרֶת:",
    verseHebrew: "הַרְנִינוּ לֵאלֹהִים עוּזֵּנוּ הָרִיעוּ לֵאלֹהֵי יַעֲקֹב",
    verseFrench: "Chantez avec allégresse à Dieu, notre force ! Poussez des cris de joie vers le Dieu de Jacob !",
    customImage: "/image/vache.jpg"
  },
  {
    id: "unclean-small-cattle",
    chapter: 5,
    name: "Le Petit Bétail impur",
    hebrewName: "בהמה דקה טמאה",
    introHebrew: "בְּהֵמָה דַּקָּה טְמֵאָה אוֹמֶרֶת:",
    verseHebrew: "הֵיטִיבָה יְהֹוָה לַטּוֹבִים וְלִישָׁרִים בְּלִבּוֹתָם",
    verseFrench: "Éternel, répands tes bienfaits sur les bons et sur ceux dont le cœur est droit !",
    customImage: "/image/chevre.jpg"
  },
  {
    id: "unclean-large-cattle",
    chapter: 5,
    name: "Le Gros Bétail impur",
    hebrewName: "בהמה גסה טמאה",
    introHebrew: "בְּהֵמָה גַּסָּה טְמֵאָה אוֹמֶרֶת:",
    verseHebrew: "יְגִיעַ כַּפֶּיךָ כִּי תֹאכֵל אַשְׁרֶיךָ וְטוֹב לָךְ",
    verseFrench: "Tu jouis alors du travail de tes mains, tu es heureux, tu prospères.",
    customImage: "/image/ane.jpg"
  },
  {
    id: "camel",
    chapter: 5,
    name: "Le Chameau",
    hebrewName: "גמל",
    introHebrew: "גָּמָל אוֹמֵר:",
    verseHebrew: "יְהֹוָה מִמָּרוֹם יִשְׁאָג וּמִמְּעוֹן קָדְשׁוֹ יִתֵּן קוֹלוֹ",
    verseFrench: "L’Éternel rugit d’en haut ; de sa demeure sainte il fait retentir sa voix.",
    customImage: "/image/chameau.jpg"
  },
  {
    id: "horse",
    chapter: 5,
    name: "Le Cheval",
    hebrewName: "סוס",
    introHebrew: "סוּס אוֹמֵר:",
    verseHebrew: "הִנֵּה כְעֵינֵי עֲבָדִים אֶל יַד אֲדוֹנֵיהֶם כְּעֵינֵי שִׁפְחָה אֶל יַד גְּבִרְתָּהּ כֵּן עֵינֵינוּ אֶל יְהֹוָה אֱלֹהֵינוּ עַד שֶׁיְּחָנֵּנוּ",
    verseFrench: "Voici, comme les yeux des serviteurs sont fixés sur la main de leurs maîtres, et les yeux de la servante sur la main de sa maîtresse, ainsi nos yeux se tournent vers l’Éternel, notre Dieu, jusqu’à ce qu’il ait pitié de nous.",
    customImage: "/image/cheval.jpg"
  },
  {
    id: "mule",
    chapter: 5,
    name: "Le Mulet",
    hebrewName: "פרד",
    introHebrew: "פֶּרֶד אוֹמֵר:",
    verseHebrew: "יוֹדוּךָ יְהֹוָה כָּל מַלְכֵי אָרֶץ כִּי שָׁמְעוּ אִמְרֵי פִיךָ",
    verseFrench: "Tous les rois de la terre te loueront, ô Éternel ! en entendant les paroles de ta bouche.",
    customImage: "/image/mulet.jpg"
  },
  {
    id: "donkey",
    chapter: 5,
    name: "L'Âne",
    hebrewName: "חמור",
    introHebrew: "חֲמוֹר אוֹמֵר:",
    verseHebrew: "לְךָ יְהֹוָה הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת וְהַנֵּצַח וְהַהוֹד כִּי כֹל בַּשָּׁמַיִם וּבָאָרֶץ לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ",
    verseFrench: "À toi, Éternel, la grandeur, la force et la magnificence, l’éternité et la gloire, car tout ce qui est au ciel et sur la terre t’appartient ; à toi, Éternel, le règne, car tu t’élèves souverainement au-dessus de tout !",
    customImage: "/image/ane-gris.jpg"
  },
  {
    id: "ox",
    chapter: 5,
    name: "Le Bœuf",
    hebrewName: "שור",
    introHebrew: "שׁוֹר אוֹמֵר:",
    verseHebrew: "אָז יָשִׁיר מֹשֶׁה וּבְנֵי יִשְׂרָאֵל אֶת הַשִּׁירָה הַזֹּאת לַיהֹוָה וַיֹּאמְרוּ לֵאמֹר אָשִׁירָה לַיהֹוָה כִּי גָאֹה גָּאָה סוּס וְרֹכְבוֹ רָמָה בַיָּם",
    verseFrench: "Alors Moïse et les enfants d’Israël chantèrent ce cantique à l’Éternel. Ils dirent : Je chanterai à l’Éternel, car il a fait éclater sa gloire ; il a précipité dans la mer le cheval et son cavalier.",
    customImage: "/image/boeuf.jpg"
  },
  {
    id: "wild-animals",
    chapter: 5,
    name: "Les Animaux sauvages",
    hebrewName: "חיות השדה",
    introHebrew: "חַיּוֹת הַשָּׂדֶה אוֹמְרִים:",
    verseHebrew: "בָּרוּךְ הַטּוֹב וְהַמֵּטִיב",
    verseFrench: "Béni soit Celui qui est bon et qui fait le bien.",
    customImage: "/image/animaux-sauvages.jpg"
  },
  {
    id: "deer",
    chapter: 5,
    name: "Le Cerf",
    hebrewName: "צבי",
    introHebrew: "צְבִי אוֹמֵר:",
    verseHebrew: "וַאֲנִי אָשִׁיר עֻזֶּךָ וַאֲרַנֵּן לַבֹּקֶר חַסְדֶּךָ כִּי הָיִיתָ מִשְׂגָּב לִי וּמָנוֹס בְּיוֹם צַר לִי",
    verseFrench: "Et moi, je chanterai ta force ; dès le matin, je célébrerai ta bonté. Car tu es pour moi une haute retraite, un refuge au jour de ma détresse.",
    customImage: "/image/cerf.jpg"
  },
  {
    id: "elephant",
    chapter: 5,
    name: "L'Éléphant",
    hebrewName: "פיל",
    introHebrew: "פִּיל אוֹמֵר:",
    verseHebrew: "מַה גָּדְלוּ מַעֲשֶׂיךָ יְהֹוָה מְאֹד עָמְקוּ מַחְשְׁבֹתֶיךָ",
    verseFrench: "Que tes œuvres sont grandes, ô Éternel ! Que tes pensées sont profondes !",
    customImage: "/image/elephant.jpg"
  },
  {
    id: "lion",
    chapter: 5,
    name: "Le Lion",
    hebrewName: "אריה",
    introHebrew: "אַרְיֵה אוֹמֵר:",
    verseHebrew: "יְהֹוָה כַּגִּבּוֹר יֵצֵא כְּאִישׁ מִלְחָמוֹת יָעִיר קִנְאָה יָרִיעַ אַף יַצְרִיחַ עַל אֹיְבָיו יִתְגַּבָּר",
    verseFrench: "L’Éternel s’avance comme un héros, il excite son ardeur comme un homme de guerre ; il pousse des cris, il jette des hurlements, il triomphe de ses ennemis.",
    customImage: "/image/lion.jpg"
  },
  {
    id: "bear",
    chapter: 5,
    name: "L'Ours",
    hebrewName: "דוב",
    introHebrew: "דֹּב אוֹמֵר:",
    verseHebrew: "יִשְׂאוּ מִדְבָּר וְעָרָיו חֲצֵרִים תֵּשֵׁב קֵדָר יָרֹנּוּ יֹשְׁבֵי סֶלַע מֵרֹאשׁ הָרִים יִצְוָחוּ. יָשִׂימוּ לַיהֹוָה כָּבוֹד וּתְהִלָּתוֹ בָּאִיִּים יַגִּידוּ",
    verseFrench: "Que le désert et ses villes élèvent la voix ! Que les villages habités par Kédar chantent ! Que les habitants des rochers tressaillent de joie ! Que du sommet des montagnes retentissent des cris d’allégresse ! Qu’on rende gloire à l’Éternel, et que dans les îles on publie ses louanges !",
    customImage: "/image/ours.jpg"
  },
  {
    id: "wolf",
    chapter: 5,
    name: "Le Loup",
    hebrewName: "זאב",
    introHebrew: "זְאֵב אוֹמֵר:",
    verseHebrew: "עַל כָּל דְּבַר פֶּשַׁע עַל שׁוֹר עַל חֲמוֹר עַל שֶׂה עַל שַׂלְמָה עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ",
    verseFrench: "Dans toute affaire frauduleuse, qu’il s’agisse d’un bœuf, d’un âne, d’un agneau, d’un vêtement, ou d’un objet perdu, au sujet duquel on dira : C’est cela ! — la cause des deux parties ira jusqu’à Dieu ; celui que Dieu condamnera paiera le double à son prochain.",
    customImage: "/image/loup.jpg"
  },
  {
    id: "fox",
    chapter: 5,
    name: "Le Renard",
    hebrewName: "שועל",
    introHebrew: "שׁוּעָל אוֹמֵר:",
    verseHebrew: "הוֹי בֹּנֶה בֵיתוֹ בְּלֹא צֶדֶק וַעֲלִיּוֹתָיו בְּלֹא מִשְׁפָּט בְּרֵעֵהוּ יַעֲבֹד חִנָּם וּפֹעֲלוֹ לֹא יִתֶּן לוֹ",
    verseFrench: "Malheur à celui qui bâtit sa maison par l’injustice, et ses chambres par l’iniquité ; qui fait travailler son prochain sans salaire, et ne lui donne pas sa paye !",
    customImage: "/image/renard.jpg"
  },
  {
    id: "greyhound",
    chapter: 5,
    name: "Le Lévrier",
    hebrewName: "זרזיר מתנים",
    introHebrew: "זַרְזִיר מָתְנַיִם אוֹמֵר:",
    verseHebrew: "הוֹדוּ לַיהֹוָה כִּי טוֹב זַמְּרוּ לִשְׁמוֹ כִּי נָעִים",
    verseFrench: "Louez l’Éternel, car il est bon ! Chantez à son nom, car il est favorable !",
    customImage: "/image/levrier.jpg"
  },
  {
    id: "cat",
    chapter: 5,
    name: "Le Chat",
    hebrewName: "חתול",
    introHebrew: "חָתוּל אוֹמֵר:",
    verseHebrew: "אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם וְלֹא אָשׁוּב עַד כַּלּוֹתָם",
    verseFrench: "Je poursuis mes ennemis, je les atteins, et je ne reviens pas avant de les avoir anéantis.",
    customImage: "/image/chat.jpg"
  },
  {
    id: "creeping-things",
    chapter: 6,
    name: "Les Reptiles",
    hebrewName: "שרצים",
    introHebrew: "שְׁרָצִים אוֹמְרִים:",
    verseHebrew: "יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי צִיּוֹן יָגִילוּ בְמַלְכָּם",
    verseFrench: "Qu’Israël se réjouisse en celui qui l’a formé ! Que les fils de Sion soient dans l’allégresse à cause de leur Roi !",
    customImage: "/image/reptiles.jpg"
  },
  {
    id: "serpent",
    chapter: 6,
    name: "Le Serpent",
    hebrewName: "נחש",
    introHebrew: "נָחָשׁ אוֹמֵר:",
    verseHebrew: "סוֹמֵךְ יְהֹוָה לְכָל הַנֹּפְלִים וְזוֹקֵף לְכָל הַכְּפוּפִים",
    verseFrench: "L’Éternel soutient tous ceux qui tombent, et il redresse tous ceux qui sont courbés.",
    customImage: "/image/serpent.jpg"
  },
  {
    id: "scorpion",
    chapter: 6,
    name: "Le Scorpion",
    hebrewName: "עקרב",
    introHebrew: "עַקְרָב אוֹמֵר:",
    verseHebrew: "טוֹב יְהֹוָה לַכֹּל וְרַחֲמָיו עַל כָּל מַעֲשָׂיו",
    verseFrench: "L’Éternel est bon envers tous, et ses compassions s’étendent sur toutes ses œuvres.",
    customImage: "/image/scorpion.jpg"
  },
  {
    id: "snail",
    chapter: 6,
    name: "L'Escargot",
    hebrewName: "שבלול",
    introHebrew: "שַׁבְּלוּל אוֹמֵר:",
    verseHebrew: "כְּמוֹ שַׁבְּלוּל תֶּמֶס יַהֲלֹךְ נֵפֶל אֵשֶׁת בַּל חָזוּ שָׁמֶשׁ",
    verseFrench: "Qu’ils périssent comme un limaçon qui se fond en rampant ; comme l’avorton d’une femme, qu’ils ne voient pas le soleil !",
    customImage: "/image/escargot.jpg"
  },
  {
    id: "ant",
    chapter: 6,
    name: "La Fourmi",
    hebrewName: "נמלה",
    introHebrew: "נְמָלָה אוֹמֶרֶת:",
    verseHebrew: "לֵךְ אֶל נְמָלָה עָצֵל רְאֵה דְרָכֶיהָ וַחֲכָם",
    verseFrench: "Va vers la fourmi, paresseux ; considère ses voies, et deviens sage.",
    customImage: "/image/fourmi.jpg"
  },
  {
    id: "mouse",
    chapter: 6,
    name: "La Souris",
    hebrewName: "עכבר",
    introHebrew: "עַכְבָּר אוֹמֵר:",
    verseHebrew: "וְאַתָּה צַדִּיק עַל כָּל הַבָּא עָלַי כִּי אֱמֶת עָשִׂיתָ וַאֲנִי הִרְשָׁעְתִּי",
    verseFrench: "Tu as été juste dans tout ce qui nous est arrivé, car tu as agi avec fidélité, et nous avons fait le mal.",
    customImage: "/image/souris.jpg"
  },
  {
    id: "rat",
    chapter: 6,
    name: "Le Rat",
    hebrewName: "חולדה",
    introHebrew: "חֻלְדָּה אוֹמֶרֶת:",
    verseHebrew: "כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּיָהּ",
    verseFrench: "Que tout ce qui respire loue l’Éternel ! Louez l’Éternel !",
    customImage: "/image/rat.jpg"
  },
  {
    id: "dog",
    chapter: 6,
    name: "Le Chien",
    hebrewName: "כלב",
    introHebrew: "כֶּלֶב אוֹמֵר:",
    verseHebrew: "בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי יְהֹוָה עֹשֵׂנוּ",
    verseFrench: "Venez, prosternons-nous et humilions-nous, fléchissons le genou devant l’Éternel, notre Créateur !",
    customImage: "/image/chien.jpg"
  }
];
