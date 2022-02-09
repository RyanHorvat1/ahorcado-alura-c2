const initWords3 = ["AJO", "BAH", "COL", "DAR", "ESO", "FEO", "GAS", "HOZ", "ION", "JOE", "KOI", "LED", "MIO", "NEO", "OYE", "POR", "QUE", "RIO", "SOL", "TAN", "UNO", "VOY", "WIN", "XUL", "YPF", "ZEN"];
const initWords4 = ["AVES", "BAJO", "CAJA", "DUDA", "ENTE", "FLAN", "GAJO", "HALO", "IBIS", "JOPO", "KILO", "LEON", "MIRA", "NUCA", "ORCA", "PENA", "QUIZ", "ROMA", "SUYO", "TONO", "UNIR", "VINO", "WATT", "XBOX", "YATE", "ZONA"];
const initWords5 = ["ACTOR", "BALDE", "CIELO", "DEDOS", "ELLOS", "FAROL", "GRITO", "HORUS", "IGUAL", "JARRO", "KOALA", "LIMPIO", "MONOS", "NADAR", "OPERA", "PANDA", "QUESO", "RECTA", "SERIE", "TODOS", "UNICO", "VIDEO", "WALSH", "XANAX", "YERBA", "ZAMBA"];
const initWords6 = ["AMABLE", "BACULO", "CALCIO", "DARDOS", "EFICAZ", "FAUCES", "GANCIA", "HAMLET", "IGUANA", "JABALI", "KARATE", "LANUDO", "MACIZO", "NACHOS", "OLFATO", "PAYASO", "QUEMAR", "REPOSO", "SESAMO", "TABACO", "UNISEX", "VOLCAN", "WHISKY", "XIMENA", "YOGURT", "ZORZAL"];
const initWords7 = ["ADMIRAR", "BAJISTA", "CALDERO", "DEBERES", "EMOCION", "FALACIA", "GLUCOSA", "HORMIGA", "INCAUTO", "JUPITER", "KETCHUP", "LAVANDA", "MACHETE", "NETBOOK", "OBLICUO", "PAPILAS", "QUEJOSO", "RESPETO", "TORNADO", "USHUAIA", "VEDETTE", "WIDGETS", "XIOMARA", "YUNQUES", "ZODIACO"];
/*const initWords8 = ["ACROBATA", "BAILARÍN", ];
const initWords9 = ["ABRASADOR", "BACHILLER", ];
const initWords10 = ["ABISMATICO", "BABILONIOS", ];
const initWords11 = ["ABDOMINALES", "BALBUCEANDO", ];
const initWords12 = ["ABOCHORNADOS", "BAJORRELIEVE", ];
const initWords13 = ["ABANDONANDOSE", "BALANCEADORES", ];
const initWords14 = ["AERONAVEGACION", "BACTERIOLOGICO", ];
const initWords15 = ["ARGUMENTARIAMOS", "BACTERIOSTATICO", ];
const initWords16 = ["ACCIDENTALIDADES", "BAJACALIFORNIANO", ];
const initWords17 = ["ARTERIOESCLEROSIS", "BACHILLERAMIENTOS"];
const initWords18 = ["ANTICONSTITUCIONAL", "BIDIRECCIONALMENTE", ];*/
const selWords = [initWords3, initWords4, initWords5, initWords6, initWords7];

function selectWord() {
    var arr = Math.floor(Math.random() * 5);
    window.arr = arr;
    var s = Math.floor(Math.random() * 26);
    window.s = s;
}