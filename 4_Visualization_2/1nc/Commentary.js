var nba = [
["Name","1995","1996", "1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"],
["years",0.0426625480938,0.0203755929355,0.0321958032794,0.0106349010875,0.00310294226893,0.0223316505433,0.0211982211011,0.00284855520968,0.0112809874125,0.0371931235907,0.0207278976926,0.0117967675844,0.0203076284954,0.0137721861746,0.0168743775841,0.00143112377614,0.0168492801843,0.028115855056],
["taxes",0.0129249988247,0,0,0,0,0.0131552796269,0,0,0,0,0,0,0,0.0128853728082,0,0.0151750091893,0.287844947479,0],
["ohio",0,0,0,0,0,0,0.00621906512233,0,0.00579176390784,0.0120601867805,0.278624174393,0,0,0,0.00693076997502,0.044085135802,0,0],
["now",0.0280353887474,0.00940411981638,0.0232525245907,0.00736262382982,0.0108602979413,0.0322568285625,0.0413870031022,0.0213641640726,0.0197417279718,0.0156602625645,0.0169591890212,0.0191697473246,0.0109348768821,0.0226836007581,0.0236241286177,0.0114489902092,0.0140410668202,0.0212768632857],
["america",0.00281534463752,0.0289607436889,0.00826246390625,0.00188948271057,0.0107502304493,0.0229240382642,0.00932594680323,0.108557892888,0.023884237077,0.00452128487721,0.0130567968083,0.00681170531587,0.0288641427833,0.00187114215534,0.0415728028706,0.0132217824775,0.00216202975525,0],
["men",0.0185621339713,0.0298350020978,0.0170237774709,0.00155721748692,0.0147663403238,0.00472321247719,0.00768598059294,0.00271115167552,0.00894736269017,0.0409883944333,0.0215215224775,0.0252624062578,0.0356825820389,0.00154210211531,0.00856555808218,0.0299660190641,0.021382046144,0.037608160273],
["police",0.00578253234074,0.0260240132622,0.029698473573,0.0737365862689,0,0,0.0191548801092,0.00337834481068,0.0602058872499,0.0557185269805,0.0268178001388,0.0209861906921,0.0222318926218,0.00192160133491,0,0,0,0.0450608011139],
["like",0.0143234810746,0.0214873830058,0.0192667308818,0.00881193680321,0.025827430836,0.0218680173193,0.0217466011731,0.0167364936702,0.0092056499077,0.017252027738,0.0202975604,0.021659722152,0.0183563229427,0.0198327326821,0.0132192353824,0.00980988289402,0.0274991131364,0.0312526931628],
["republican",0.0197624524747,0.0254114235765,0,0,0.00628848168693,0.0704009394356,0.069555446836,0,0.0266726403651,0.00793434632474,0.00763773651242,0,0.0443216580022,0,0.0136791735352,0.0754089076846,0.0265588329776,0],
["people",0.0489385603381,0.0368355137242,0.0122606469248,0.00801085163928,0.0151926063741,0.0109340086597,0.0276774924021,0.036262402952,0.0101262148985,0.0785925708066,0.00553569829091,0.0375435183969,0.0152969357856,0.00793309307283,0.0132192353824,0.018218353946,0.0366654841819,0.0290203579369],
["obama",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.666696849723,0.391450628227,0.0938815118782,0],
["sex",0,0.00807760590342,0.0092181233939,0.00843210208202,0.327825938982,0.00639387402485,0.104046116718,0,0.00968972878894,0.0100884584477,0,0,0,0,0,0.0147510505035,0,0.00783240840208],
["voters",0.0073919815077,0.00950493231562,0.0108469811456,0,0.00940861776157,0.112855233161,0.0857018671442,0,0.0228038399983,0,0.0457093123501,0,0.24630392395,0,0.0682210860501,0,0.0227065400903,0],
["barack",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.200895908271,0.0993887708337,0,0.015077927473],
["clintons",0.00946679364128,0,0,0,0.0963957420138,0.105990067103,0,0,0.00730112917855,0,0,0,0,0,0.183476295252,0,0,0],
["black",0.00686132988082,0.158806751451,0,0.0291643299086,0.00582213128441,0,0.00189403683819,0.0106896364575,0.0423336201842,0.102843152865,0.0141426522028,0.0083004681914,0.170001263759,0.00152006536022,0.124536545301,0.00268525476365,0,0.0213869635598],
["saudi",0,0,0,0,0,0,0,0.181803074728,0.40284898078,0,0,0,0,0,0,0,0,0],
["bill",0.0338994981805,0.0062270648154,0.0284251806966,0,0.0554756873708,0.0616133487606,0.00401048231582,0.00282931389656,0.00560239351243,0.00388862030363,0.0112297558212,0.00292927080609,0.0279283227142,0.00321862548981,0.0491638258491,0.00284291375065,0.048346905542,0.00301902044762],
["gop",0,0,0.0425470547913,0,0.0123017015837,0.285277686443,0.00800389920248,0,0.00745396512355,0,0,0,0.0867032516884,0,0,0.102127145708,0,0],
["genocide",0,0,0,0,0,0,0,0,0,0,0,0.351573325517,0,0,0,0,0,0],
["democrats",0.00695245214977,0,0,0,0.00884917862885,0.198137012945,0.0172727162876,0,0.0482578134255,0,0,0,0.0534596818639,0,0.038498784328,0.0163254986236,0.0694083086146,0],
["volpe",0,0,0.0254893913143,0.303107132008,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["louima",0,0,0,0.57124036417,0,0,0,0,0,0.0278959886025,0,0,0,0,0,0,0,0],
["blacks",0,0.309439916431,0,0.00556931184894,0,0,0,0.00969630079133,0.012799921261,0.0399799034385,0,0,0.0425390006253,0,0.00765857443171,0,0,0],
["clinton",0.0183065474807,0.0176545180635,0,0,0.186406643578,0.139745322831,0.00758015047612,0,0.00352966571985,0,0,0.0110731387135,0.00586520999632,0,0.173176145449,0.010746694449,0.00351460526732,0.00570620376336],
["us",0.019826443121,0.0220945448026,0.0310328416623,0.00975792758229,0.00504707498802,0.0147984355734,0.00547299347121,0.100388231858,0.0234459863311,0.0254721205375,0.0204332464952,0.0335789516998,0.0287964917852,0.0114201581636,0.0109787732625,0.00931114843827,0.0040601646086,0.0115359246381],
["voting",0,0.0106703419459,0,0,0,0.0168923374128,0,0,0.0191998818915,0.0133266344795,0.0128284446615,0,0.223329753283,0,0.00765857443171,0.0194858173097,0,0],
["war",0.0200176391255,0,0.00489564162527,0,0.0127393659484,0.0407485747178,0.00552577220101,0.155932806544,0.00771915891712,0.0107157335612,0.00515757354973,0.00807208805069,0.00855123244659,0,0.0123162743294,0.0391705848228,0.0102482968616,0.010399259958],
["farrakhan",0,0.391253131196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
["president",0.00406234242599,0.0156706113625,0.00894161159409,0,0.18355652821,0.076492319161,0.0201850186598,0.0308535956895,0.00939907045941,0.0130477861445,0.0031400051297,0.04177243038,0.0156183407694,0.0053998505628,0.0337424641455,0.0453104717894,0.0233974157657,0.0063312193803],
["cops",0,0.0106703419459,0.0121769407778,0.350866646483,0,0,0,0,0.025599842522,0.0133266344795,0,0,0,0,0,0,0,0],
["affirmative",0,0.144429526325,0,0,0,0.0127026663845,0,0,0,0.300640084941,0,0,0,0,0,0,0,0],
["bush",0,0,0,0,0,0.0781292949274,0.0408658167892,0.0640666767352,0.0211433317538,0.00880534960231,0,0.10612814423,0.0210801969253,0.0145764412381,0.0101205485046,0.012874926071,0.0673699742002,0],
["time",0.015846089292,0.0219429462382,0.0304071475417,0.00736262382982,0.0263750092859,0.00744388351443,0.0343209294018,0.0071213880242,0.0169214811187,0.0234903938468,0.0320340237067,0.0176951513766,0.012497002151,0.00972154318205,0.0157494190785,0.00858674265687,0.0196574935483,0.0243164151836],
["byrd",0,0,0,0,0,0,0,0,0.374866629418,0,0,0,0,0,0,0,0,0],
["monica",0.0987330099823,0,0,0,0.351872528514,0.0200984212431,0,0,0,0,0,0,0,0,0,0,0,0],
["loans",0,0,0,0,0,0,0,0,0,0.013097739581,0,0,0,0.357754576436,0,0,0,0],
["voter",0,0,0,0,0,0.0110264535408,0,0,0.00835513367161,0,0.066990018304,0,0.222138264281,0,0.0199965021054,0,0,0],
["sudanese",0,0,0,0,0,0,0,0,0,0,0,0.315207831981,0,0,0,0,0,0],
["campaign",0,0.00440105087712,0.00502245721482,0.00459419668497,0.0130693635926,0.0731572039606,0.0595235607747,0.00799860272872,0.00263970475259,0.0109933114913,0,0.00414059279376,0.0350909665244,0.00227480120329,0.104241326511,0.0160741003048,0.00525688320875,0.00426745601111],
["obamas",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.257103495811,0.196245598723,0,0.0173668498609],
["just",0.0255975288563,0.0219429462382,0.0304071475417,0.00818069314425,0.0279264804204,0.00868453076683,0.0201887820011,0.0413040505404,0.0103409051281,0.0508958533346,0.0150748346855,0.0265427270649,0.0187455032265,0.00891141458355,0.0236241286177,0.020035732866,0.0131049956989,0.0250763031581],
["african",0,0,0,0,0,0,0,0.0178330575953,0.0765086241052,0.0612745637073,0,0.175399280751,0,0,0.1478961843,0,0,0],
["americans",0,0.0132031526314,0,0,0.00871290906175,0.0174183818954,0.0226756421999,0.0639888218298,0.0131985237629,0.0219866229826,0.00529117416439,0.0248435567625,0.0526364497866,0.00227480120329,0.07265304575,0.0120555752286,0.0131422080219,0],
["republicans",0.0141159127214,0.00907542820897,0,0,0,0.330450468572,0.0350696632389,0.00824697860391,0.016330043649,0,0,0,0.0994967202164,0,0.0195415037654,0.0828661991264,0.0596213429993,0],
["white",0.00200028373527,0.0360087293162,0.00880563889658,0.0134246496278,0.0407358271884,0.0203592218673,0,0.00934905024823,0.0185122826144,0.0642468597407,0.00309225591099,0.00725950732881,0.0512694561197,0.00132943411966,0.0276911262602,0.00469699447957,0.00768053917268,0.00748193066334],
["hiv",0.428278287728,0,0,0,0,0,0,0,0,0,0,0.0370077184754,0,0,0,0,0,0],
["women",0.0205083608144,0.0376722072312,0.0558887344355,0.0019662750376,0.0783099880397,0.00596392916798,0.0218361865244,0.0102699910079,0.0519694197282,0.0235251943355,0.0407623528254,0.074429738646,0.0300372388269,0,0.00811170076507,0.120392492115,0.047247877636,0.00547929886597],
["tax",0.0048776400162,0,0.00715744069917,0,0,0.049645434559,0.00403934661411,0.00569935414663,0,0.00783321506995,0,0,0.00625096196026,0.00324179062529,0,0,0.389558948425,0.00608149796592],
["REF",0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001]
];