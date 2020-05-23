// description of the 78 tarot cards with their meanings upright and reversed:
/*const cards = [
    {
        id: "01",
        name:"Fool",
       // image: "the_fool.png",
        upright: "spontaneity, extravagance, beginnings",
        reversed: "carelessness, negligence, vanity",
    },
    {
        id: "02",
        name:"Magician",
        //image: "the_magician.png",
        upright: "skill, power, action",
        reversed: "manipulation, disgrace",
    },
    {
        id:"03",
        name:"High Priest",
        // image:""
        upright: "wisdom, intuition, mystery",
        reversed: "passion, conceit",
    },
    {
        id:"04",
        name:"Empress",
        // image:"the_empress.png",
        upright: "initiative, femininity, fruitfulness",
        reversed :"dependence, doubt, ignorance",
    },
    {
        id:"05",
        name:"Emperor",
        // image:"the_emperor.png",
        upright: "power, protection, accomplishment",
        reversed: "domination, rigidity",
    },
    {
        id: "06",
        name:"Hierophant",
        // image:""
        upright: "conformity, kindness",
        reversed: "servitude, weakness",
    },
    {
        id:"07",
        name:"Lovers",
        upright: "attraction, beauty, love",
        reversed: "failure, imbalance",
    },
    {
        id:"08",
        name:"Chariot",
        upright: "triumph, control",
        reversed: "trouble, defeat",
    },
    {
        id:"09",
        name:"Strength",
        upright: "power, courage",
        reversed: "abuse, weakness",
    },
    {
        id: "10",
        name:"Hermit",
        upright: "prudence, introspection",
        revered: "treason, corruption",
    },
    {
        id: "11",
        name:"Wheel of Fortune",
        upright: "success, luck, abundance",
        reversed: "bad luck",
    },
    {
        id:"12",
        name:"Justice",
        upright: "fairness, justice",
        reversed: "unfairness, dishonesty",
    },
    {
        id:"13",
        name:"Hanged Man",
        upright: "sacrifice, suspension",
        reversed: "selfishness, indecision",
    },
    {
        id:"14",
        name:"Death",
        upright:"transformation, transition",
        reversed:"resistance to change",
    },
    {
        id:"15",
        name:"Temperance",
        upright:"moderation, balance",
        reversed:"excess, competing interests",
    },
    {
        id:"16",
        name:"Devil",
        upright:"materialism, sexuality, vehemence",
        reversed:"breaking free, detachment, selfishness, self-destruction",
    },
    {
        id:"17",
        name:"Tower",
        upright:"catastrophe, failure, confusion",
        reversed: "danger, fear of change",
    },
    {
        id:"18",
        name:"Star",
        upright:"accomplishments, promises, hope",
        reversed:"disappointment, frustration",
    },
    {
        id:"19",
        name:"Moon",
        upright:"danger,enemies,fear",
        reversed:"doubt, failure, unhappiness",
    },
    {
        id:"20",
        name:"Sun",
        upright:"success, richness, wealth",
        reversed:"lack of success, acceptance, lack of ambition",
    },
    {
        id:"21",
        name:"Judgement",
        upright: "judgement, rebirth",
        reversed:"conviction, repression",
    },
    {
        id:"22",
        name:"World",
        upright:"completion, accomplishment, fresh new start",
        reversed:"lack of direction, lack of closure",
    },
    {
        id:"23",
        name:"Ace of Cups",
        upright:"love, new relationship",
        reversed:"repressed feelings",
    },
    {
        id:"24",
        name:"Two of Cups",
        upright: "partnership, taking a love relationship to the next stage",
        reversed:"break-up",
    },
    {
        id:"25",
        name:"Three of Cups",
        upright:"accomplished family or friendship relationship",
        reversed:"troubled family or friendship relationship",
    },
    {
        id:"26",
        name:"Four of Cups",
        upright:"meditation, apathy",
        reversed:"missed opportunity",
    },
    {
        id:"27",
        name:"Five of Cups",
        upright:"loss, despair",
        reversed:"forgiveness, moving on",
    },
    {
        id:"28",
        name:"Six of Cups",
        upright:"nostalgia, paying for past mistakes",
        reversed:"stuck in the past",
    },
    {
        id:"29",
        name:"Seven of Cups",
        upright:"day dreaming, fantasy",
        reversed:"illusion, lack of action to make plans come true",
    },
    {
        id:"30",
        name:"Eight of Cups",
        upright:" disappointment, withdrawal",
        reversed:"walking away",
    },
    {
        id:"31",
        name:"Nine of Cups",
        upright:"satisfaction, happiness",
        reversed:"dissatisfaction, greed",
    },
    {
        id:"32",
        name:"Ten of Cups",
        upright:"happy relationship, harmony",
        reversed:"broken relationship",
    },
    {
        id:"33",
        name:"Page of Cups",
        upright:"creativity, receiving a message",
        reversed:"lack of creativity, lack of emotional intelligence",
    },
    {
        id:"34",
        name:"Knight of Cups",
        upright:"charm, romance",
        reversed:"mood swings, jealousy",
    },
    {
        id:"35",
        name:"Queen of Cups",
        upright:"calm, compassion",
        reversed:"dependence, lack of emotional stability",
    },
    {
        id:"36",
        name:"King of Cups",
        upright:"generosity, balance",
        reversed:"manipulation, moodiness",
    },
    {
        id:"37",
        name:"Ace of Pentacles",
        upright:"business opportunity, wealth",
        reversed:"financial crisis, sign not to start new ventures",
    },
    {
        id:"38",
        name:"Two of Pentacles",
        upright:"balance, prioritization",
        reversed:" lack of control in terms of finances",
    },
    {
        id:"39",
        name:"Three of Pentacles",
        upright:"collaboration, results of hard work",
        reversed:"laziness, lack of teamwork",
    },
    {
        id:"40",
        name:"Four of Pentacles",
        upright:"security, conservatism",
        reversed:"greed, materialism",
    },
    {
        id:"41",
        name:"Five of Pentacles",
        upright:"poverty, insecurity, worries",
        reversed:"financial struggle recovery",
    },
    {
        id:"42",
        name:"Six of Pentacles",
        upright:"generosity, prosperity",
        reversed:"selfishness, debt",
    },
    {
        id:"43",
        name:"Seven of Pentacles",
        upright:"reward, perseverance",
        reversed:"lack of success",
    },
    {
        id:"44",
        name:"Eight of Pentacles",
        upright:"engagement, learning",
        reversed:"lack of focus, perfectionism",
    },
    {
        id:"45",
        name:"Nine of Pentacles",
        upright:"financial opportunity, new career",
        reversed:"lack of progress",
    },
    {
        id:"46",
        name:"Ten of Pentacles",
        upright: "wealth, retirement",
        reversed:" loss, financial failure",
    },
    {
        id:"47",
        name:"Page of Pentacles",
        upright: " financial opportunity, new career",
        reversed:"lack of progress",
    },
    {
        id:"48",
        name:"Knight of Pentacles",
        upright: "efficiency, conservatism",
        reversed:"being “stuck”, boredom, laziness",
    },
    {
        id:"49",
        name:"Queen of Pentacles",
        upright: "down-to-earth, motherly",
        reversed: "lack of work-life balance",
    },
    {
        id:"50",
        name:"King of Pentacles",
        upright: "abundance, security, control",
        reversed: "too controlling, authoritative",
    },
    {
        id:"51",
        name:"Ace of Swords",
        upright: "a new beginning, power",
        reversed: "lack of action at the right time",
    },
    {
        id:"52",
        name:"Two of Swords",
        upright: " inability to make-up one's mind",
        reversed:" confusion over the next steps",
    },
    {
        id:"53",
        name:"Three of Swords",
        upright: "being negatively affected by an action of someone else",
        reversed:" recovery after a painful loss",
    },
    {
        id:"54",
        name:"Four of Swords",
        upright: "peace, relaxation",
        reversed:"lack of focus, nervousness",
    },
    {
        id:"55",
        name:"Five of Swords",
        upright: "inconsistent behavior, tension",
        reversed: "a coming change, resentments coming from the past",
    },
    {
        id:"56",
        name:"Six of Swords",
        upright: "transition, change",
        reversed:" stagnation, dullness",
    },
    {
        id:"57",
        name:"Seven of Swords",
        upright: "betrayal",
        reversed: "someone who betrayed you will be exposed",
    },
    {
        id:"58",
        name:"Eight of Swords",
        upright: "weakness, imprisonment",
        reversed: "pushing through to remove the obstacles",
    },
    {
        id:"59",
        name:"Nine of Swords",
        upright: "having a feeling of failure, anxiety",
        reversed: "depression",
    },
    {
        id:"60",
        name:"Ten of Swords",
        upright: "tragic ending, crisis",
        reversed:"survival, recovery",
    },
    {
        id:"61",
        name:"Page of Swords",
        upright: "determined, smart, curious",
        reversed:"sneaky, not serious / trustworthy",
    },
    {
        id:"62",
        name:"Knight of Swords",
        upright: "rational, hasty, lacking practical sense",
        reversed:"break-up, fight",
    },
    {
        id:"63",
        name:"Queen of Swords",
        upright: "individualist, thinking on your feet, analytical",
        reversed:"cruel, dangerous, bitchy",
    },
    {
        id:"64",
        name:"King of Swords",
        upright: "wise, agile, spiritual",
        reversed: "cold, shrewd",
    },
    {
        id:"65",
        name:"Ace of Wands",
        upright: "a new personal beginning",
        reversed:"bore, delays",
    },
    {
        id:"66",
        name:"Two of Wands",
        upright: "planning, future action",
        reversed:"lack of action, lack of interest",
    },
    {
        id:"67",
        name:"Three of Wands",
        upright: "results of hard work, preparation",
        reversed:" work that does not lead anywhere, lack of foresight",
    },
    {
        id:"68",
        name:"Four of Wands",
        upright: "harmony, sound base",
        reversed:"fear of losing something important, personal safety is questioned",
    },
    {
        id:"69",
        name:"Five of Wands",
        upright: "minor fight, mistake",
        reversed: "something goes wrong, following an accidental error",
    },
    {
        id:"70",
        name:"Six of Wands",
        upright: "personal victory, progress",
        reversed:"defeat, lack of confidence",
    },
    {
        id:"71",
        name:"Seven of Wands",
        upright: "competition, disputes",
        reversed:"giving-up, being overwhelmed",
    },
    {
        id:"72",
        name:"Eight of Wands",
        upright: "taking action in order to achieve something important",
        reversed:"routine, lack of meaningful action to drive something forward",
    },
    {
        id:"73",
        name:"Nine of Wands",
        upright: "something does not work as planned",
        reversed:"lack of attention, hesitation",
    },
    {
        id:"74",
        name:"Ten of Wands",
        upright: "stress, burden",
        reversed:"you get rid of an obstacle",
    },
    {
        id:"75",
        name:"Page of Wands",
        upright: "enthusiastic, ambitious, curious",
        reversed:" superficial, unfaithful",
    },
    {
        id:"76",
        name:"Knight of Wands",
        upright: "energetic, powerful, generous",
        reversed:"aggressive, offensive",
    },
    {
        id:"77",
        name:"Queen of Wands",
        upright: "determined, attractive, kind",
        reversed:"unpredictable, vindictive, demanding",
    },
    {
        id:"78",
        name:"King of Wands",
        upright: "generous, fair, leader",
        reversed:"harsh, impulsive, selfish",
    },
];
*/

//let data = JSON.stringify(cards);
//export {data};

function randomCard(name,image,upright,reversed) {
    this.name = name;
    this.upright = upright;
    this.reversed = reversed;
    this.image = image;
}

var deck = [
    new randomCard('Fool','spontaneity, extravagance, beginnings','carelessness, negligence, vanity','fool'),
    new randomCard('Magician','skill, power, action','manipulation, disgrace','magician'),
    new randomCard('High Priest','wisdom, intuition, mystery','passion, conceit', 'high priest'),
]


function getRandom(num){
    var randomNumber =Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("draw").onclick = function(){
    var index = getRandom(78);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<img src="../images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
};   