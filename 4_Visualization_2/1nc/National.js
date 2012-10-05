var nba = [
["Name","1995","1996", "1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"],
["china",0,0,0,0,0.315188592113,0.0237647769711,0,0,0.00364043875824,0.0912242730657,0,0,0,0,0.0101702960664,0,0,0],
["cheney",0,0,0,0,0,0,0,0.0185642297148,0.00558780241538,0,0.00589453724888,0,0.314541149952,0.678941475552,0.00390266178741,0,0,0],
["virus",0,0,0.34647896963,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["sergeant",0,0,0,0.00913989373243,0,0.00667763710393,0.504543370955,0,0,0,0,0,0,0,0,0.00424034242059,0,0.0409750415885],
["railroads",0,0,0,0,0,0,0,0,0,0,0.453573804623,0,0,0,0,0,0,0],
["addington",0,0,0,0,0,0,0,0,0,0,0,0,0.140229798422,0.240971888124,0,0,0,0],
["bin",0,0,0,0,0,0.00708345551281,0,0.441247713376,0,0,0,0,0,0,0,0,0,0],
["cellphone",0,0,0,0,0,0,0,0,0,0,0.00262938193448,0,0,0.00330990252437,0,0.31226946724,0,0],
["accidents",0.00887990983357,0,0,0,0.00239083719521,0,0,0,0.064203129851,0,0.180606596186,0,0,0,0,0.0473142327208,0,0],
["aids",0,0,0.599034742866,0,0,0,0.00374269833578,0,0,0,0,0,0,0,0,0,0,0],
["pentagon",0,0,0.00211242549641,0.0259498390512,0.0827354362621,0.18327071706,0.00333914081856,0.0260516946594,0.0435639831663,0,0,0,0.0506018987798,0.0260321657077,0,0,0,0.0145419597518],
["defense",0,0,0.00217640964869,0.0668396118456,0.016296158603,0.0911553911083,0,0.0298230949935,0.023563843348,0,0.00473473305967,0,0.018046592711,0.0253306280761,0.0109717206829,0.00206729494369,0.000780423824475,0.0224736410125],
["military",0,0,0,0.350164331858,0.140130980796,0.199980756989,0.0057115782744,0.04291083461,0.042225679463,0,0,0,0.110966939769,0.0412294881325,0.00867396378532,0,0,0.116078320999],
["veterans",0,0,0.00179234665648,0.0146785791463,0,0,0,0.00245603232965,0,0,0,0,0,0.00245419123112,0,0,0,0.304350495173],
["mccain",0,0,0,0,0,0.00427046869346,0,0,0,0,0,0,0.0368240844776,0.00390911320618,0.423540688431,0,0,0],
["obama",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.532480325625,0,0,0.012756635533],
["malpractice",0,0,0,0.689257175154,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["medical",0.0107102901303,0.00112124704984,0.0317083600969,0.157173755346,0.000961216967851,0.00124817037311,0.00263799224533,0,0.00258123547372,0.00344971355142,0.001815285929,0,0,0,0,0,0,0.0938224021254],
["signing",0,0,0.0020398330554,0,0,0.0152562681839,0,0,0,0.00421655218165,0,0,0.289419248153,0,0,0,0,0],
["hughes",0,0,0,0,0.295982211364,0,0,0.015648183064,0,0,0,0,0,0,0,0,0,0],
["satellites",0,0,0,0,0.361361351705,0.0171672821781,0,0,0,0,0,0,0,0,0,0,0,0],
["cheneys",0,0,0,0,0,0,0,0,0,0,0,0,0.210344697633,0.429841746384,0,0,0,0],
["walmart",0,0,0,0,0,0.00738762151534,0,0,0,0.770780569921,0.00268606066817,0,0,0,0,0,0,0],
["cia",0,0,0,0,0.0407102755954,0.00377596924219,0,0.245592545883,0,0,0,0,0.018605734317,0.0553033113332,0,0,0,0],
["laden",0,0,0,0,0,0.0118648435345,0,0.420268784877,0,0,0,0,0,0,0,0,0,0],
["war",0,0,0.000834430528865,0.00341682076839,0.0057673018071,0.104846311342,0.0105519689813,0.0400193747071,0.0292540020355,0.00344971355142,0.0009076429645,0,0.0292136516643,0.0262787323137,0.022835464067,0,0,0.0402096009109],
["poultry",0.502787854332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["president",0,0,0.00203205334117,0,0.0333565565862,0.00911884940436,0.000803023854394,0.0215798725635,0.00419064898138,0.0105011767094,0.00442068897243,0,0.0917367286184,0.107122875874,0.0256099784402,0.00482543991665,0,0.00466289232464],
["navy",0,0,0,0.0521728362145,0,0.274991615168,0,0.00498834472406,0.0938427190559,0.00376250639964,0,0,0,0.00747690801856,0.00524336927417,0,0,0.0125301402151],
["drivers",0,0,0,0,0,0,0.00518373284471,0.0112341794063,0.00507220410856,0,0.0392379963979,0,0,0,0.00236170330551,0.345759447702,0,0],
["doctors",0.00564043364253,0,0.0316398153409,0.226727397002,0,0,0.00416779191645,0,0,0,0,0,0,0,0,0,0,0.0484019617389],
["congress",0,0.00271165951957,0.00605403997451,0.0247900439905,0.022084057965,0.021130304444,0,0.0055305216204,0.0208084731655,0,0.0131704356434,0,0.273308682865,0.0234870972083,0.0348795868032,0.00958419924586,0.000723625571939,0.018522700468],
["cdos",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.614003212734,0],
["chinese",0,0,0,0,0.400139227031,0.00570981684889,0.00603381272864,0.00261529429575,0,0.0433974325189,0,0,0,0,0,0,0,0],
["nicotine",0,0.81169545803,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["workers",0.278442199079,0,0.00247137940194,0.0101197884965,0,0.00369677575726,0.00130218144232,0,0.00509665930687,0.0493831762783,0.00358428900379,0,0,0,0.00118654502801,0.0234747633316,0,0.00189033358706],
["bush",0,0,0,0,0.0189564656059,0.00615389124921,0,0.0469782630705,0.00282807588452,0,0.0044749789107,0,0.298173432966,0.167117247605,0.0434543856514,0,0,0],
["cdo",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.637881115452,0],
["bushs",0,0,0,0,0,0,0,0.0165619278253,0,0,0.00262938193448,0,0.21825638353,0.0761277580606,0.00348172823988,0,0,0],
["wounded",0,0,0,0.00722835646835,0,0.0132026538728,0.00558072828588,0,0,0,0.00192013785273,0,0,0,0,0,0,0.372662470609],
["marine",0,0,0,0,0,0.0372549247941,0,0.0085320243084,0.359537527166,0,0,0,0,0.00284187616867,0,0,0,0.0428629001469],
["army",0,0,0.00107456888902,0.0572017911745,0.0198054853175,0.126982840841,0.0322731381861,0.00147246958188,0.00775619086925,0,0,0,0.00198005075741,0.00441409735408,0.00309549647824,0,0,0.0887681249508],
["afghanistan",0,0,0,0,0,0.00772564996977,0,0.169853559916,0.0239651439288,0,0,0,0.00475842696087,0.00353596320346,0.00371952432134,0,0,0.183697532907],
["railroad",0,0,0,0,0,0,0,0,0.00254628576523,0,0.45394425292,0,0,0,0,0,0,0],
["aircraft",0,0,0,0,0.00247755950932,0.128687548414,0,0.00884150455805,0.166329889807,0,0.00233947124633,0,0,0,0,0,0,0.00493529519324],
["administration",0.00686993240791,0.00323642133693,0.0072256210659,0,0.0610390620885,0.00360277891322,0,0.0275032964861,0.00331137868679,0.00165956981347,0.0358048113597,0,0.0991173166081,0.037376443957,0.00346912527607,0.0106763427581,0,0.00368453724738],
["says",0.09199449339,0.0217959982586,0.0513022117589,0.00617858726748,0.00173815465353,0.0677114495994,0.0447210279769,0.00155070970384,0.00116690263504,0.0038987917552,0.00820638781489,0,0.00278034848066,0,0.011409918209,0.0143324016978,0.010280178348,0.0363552180607],
["marines",0,0,0,0,0,0.0124735711478,0,0,0.510178387176,0,0,0,0,0,0,0,0,0.0446482243656],
["intelligence",0,0,0,0,0.0849968906917,0.0196215338248,0,0.177500034619,0,0,0.00178354529081,0,0.0422989296381,0.0179612128097,0.00236170330551,0,0,0],
["REF",0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001]
];