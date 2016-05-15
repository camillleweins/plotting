var w = 900;
var h = 600;

//to prevent graph clipping
var padding = 40;

//oscillator to make sounds
var osc;

//cell 40 voltage data
var dataset = [
				[1, -70.39390158476643], [2, -70.56113732339271], [3, -70.49668352359855], [4, -70.43779242717007], [5, -70.39161892628012], [6, -70.35542211941775], [7, -70.32681790711973], [8, -70.30403978330484], [9, -70.28577814348193], [10, -70.27105133759531], [11, -70.25911499710506], [12, -70.24939840856378], [13, -70.24145947308982], [14, -70.23495248065724], [15, -70.22960478868887], [16, -70.22519974582048], [17, -70.22156404107349], [18, -70.21855822318064], [19, -70.2160695164283], [20, -70.21400631909444], [21, -70.21229394867453], [22, -70.21087132126846], [23, -70.20968833844846], [24, -70.20870381545797], [25, -70.20788382763187], [26, -70.2072003828407], [27, -70.20663035018751], [28, -70.20615459162585], [29, -70.20575725534471], [30, -70.20542519887832], [31, -70.20514751678907], [32, -70.20491515303101], [33, -70.20472058215611], [34, -70.2045575466759], [35, -70.20442084036311], [36, -70.20430612922841], [37, -70.20420980346039], [38, -70.20412885485676], [39, -70.20406077527565], [40, -70.20400347244048], [41, -70.20395520008938], [42, -70.20391449999154], [43, -70.20388015378985], [44, -70.20385114298531], [45, -70.2038266156719], [46, -70.2038058588715], [47, -70.2037882755165], [48, -70.2037733652919], [49, -70.20376070868329], [50, -70.20374995368876], [51, -70.20374080474596], [52, -70.20373301350075], [53, -70.203726371108], [54, -70.20372070180788], [55, -70.20371585756341], [56, -70.20371171358205], [57, -70.20370816457384], [58, -70.2037051216233], [59, -70.20370250957298], [60, -70.20370026483377], [61, -70.20369833355159], [62, -41.60517155974596], [63, 24.982201275551965], [64, -17.17100910735626], [65, -53.512950403392196], [66, -62.7749750846245], [67, -62.44109110655466], [68, -62.54828583016317], [69, -63.00173754491928], [70, -63.667094940801576], [71, -64.43611550930866], [72, -65.22919751894517], [73, -65.99369090134287], [74, -66.69813856185465], [75, -67.32608031888341], [76, -67.87087829075911], [77, -68.33397790998738], [78, -68.7201873622524], [79, -69.03790036314906], [80, -69.29533200546321], [81, -69.50171909482816], [82, -69.66568007280195], [83, -69.79476414960641], [84, -69.89555803741881], [85, -69.97366515954035], [86, -70.03372406678321], [87, -70.07950834344085], [88, -70.11422550475703], [89, -70.14036031751428], [90, -70.15987177244128], [91, -70.1743030156553], [92, -70.18486200824394], [93, -70.19248858312167], [94, -70.19790979278285], [95, -70.2016849957102], [96, -70.20424218879484], [97, -70.20590703025813], [98, -70.20692585580453], [99, -70.20748381833002], [100, -70.20771910662816], [101, -70.20773403580216], [102, -70.20760365801921], [103, -70.20738241871054], [104, -70.2071092797132], [105, -70.20681164533424], [106, -70.2065083575824], [107, -70.20621197048146], [108, -70.20593046821912], [109, -70.20566855591035], [110, -70.20542862324669], [111, -70.20521145882259], [112, -70.2050167752712], [113, -70.20484359152871], [114, -70.20469050777605], [115, -70.20455590023946], [116, -70.20443805655215], [117, -70.2043352673778], [118, -70.2042458861496], [119, -70.20416836582851], [120, -44.12335194258166], [121, 26.753460760815265], [122, -15.24456366846269], [123, -51.81836309867646], [124, -62.786664207953244], [125, -62.4406442421478], [126, -62.52876043233735], [127, -62.96967849738065], [128, -63.6283899701501], [129, -64.39512045461203], [130, -65.1889098309484], [131, -65.95603357287754], [132, -66.66423318276237], [133, -67.29637094602862], [134, -67.84540472400391], [135, -68.31258752509724], [136, -68.70248216883265], [137, -69.02344758046104], [138, -69.28370478775298], [139, -69.49244098382812], [140, -69.65834513006766], [141, -69.78901473492527], [142, -69.89108651667439], [143, -69.97021295533514], [144, -70.0310826713956], [145, -70.07749954192374], [146, -70.11270737260911], [147, -70.13922195245998], [148, -70.15902559648941], [149, -70.173680261831], [150, -70.18440901782172], [151, -70.1921637304898], [152, -70.1976809657331], [153, -70.20152755534711], [154, -70.20413733356173], [155, -70.20584049431436], [156, -70.20688688026493], [157, -70.2074643428259], [158, -70.20771313725494], [159, -70.20773715329143], [160, -70.20761263672397], [161, -70.20739493270716], [162, -70.2071236770735], [163, -70.20682677551272], [164, -70.20652344002201], [165, -70.20622649508047], [166, -70.20594412033077], [167, -70.20568116015836], [168, -70.2054401017139], [169, -70.20522180017183], [170, -70.20502601214298], [171, -70.20485178417505], [172, -70.20469773236526], [173, -70.20456224063902], [174, -70.20444359868192], [175, -70.20434009544685], [176, -70.20425008025933], [177, -70.20417200055454], [178, -70.20410442299533], [179, -70.20404604298088], [180, -70.2039956862378], [181, -70.20395230518932], [182, -70.20391497205006], [183, -70.20388287003567], [184, -70.20385528366066], [185, -70.20383158879187], [186, -70.20381124290198], [187, -70.20379377580389], [188, -70.20377878103248], [189, -70.20376590795857], [190, -70.2037548546629], [191, -70.20374536156181], [192, -70.20373720575093], [193, -70.20373019601944], [194, -70.2037241684803], [195, -70.20371898275694], [196, -70.20371451866971], [197, -70.2037106733654], [198, -70.20370735883796], [199, -70.2037044997922], [200, -70.20370203180664], [201, -70.20369989975671], [202, -70.20369805646303], [203, -70.20369646153412], [204, -70.20369508037709], [205, -70.20369388335176], [206, -70.20369284504883], [207, -70.20369194367339], [208, -70.2036911605193], [209, -70.20369047952057], [210, -70.2036898868691], [211, -70.20368937068824], [212, -70.20368892075479], [213, -70.20368852826171], [214, -70.20368818561556], [215, -70.20368788626367], [216, -70.20368762454666], [217, -70.20368739557235], [218, -70.20368719510802], [219, -70.20368701948826], [220, -70.20368686553607], [221, -70.2036867304955], [222, -70.2036866119736], [223, -70.20368650789075], [224, -70.20368641643832], [225, -70.2036863360418], [226, -70.20368626532945], [227, -70.20368620310524], [228, -70.2036861483255], [229, -70.20368610007873], [230, -70.20368605756843], [231, -70.20368602009786], [232, -70.20368598705734], [233, -70.2036859579129], [234, -70.20368593219655], [235, -70.20368590949788], [236, -70.20368588945682], [237, -70.20368587175722], [238, -70.20368585612135], [239, -70.20368584230512], [240, -70.20368583009385], [241, -70.20368581929873], [242, -70.20368580975342], [243, -70.20368580131164], [244, -70.20368579384439], [245, -70.20368578723797], [246, -70.20368578139222], [247, -70.20368577621872], [248, -70.2036857716395], [249, -70.20368576758572], [250, -29.214383142738836], [251, 17.96459620065981], [252, -23.810937759969672], [253, -58.5287142436711], [254, -62.694854277850276], [255, -62.42903493534172], [256, -62.60685283730216], [257, -63.10660383716958], [258, -63.79689036286095], [259, -64.57493457568383], [260, -65.36620403248558], [261, -66.12208105391609], [262, -66.81384077534143], [263, -67.42743179709923], [264, -67.95777205882007], [265, -68.40688263502084], [266, -68.78049759061436], [267, -69.08707033442813], [268, -69.33487512913153], [269, -69.533251063436], [270, -69.69058967212216], [271, -69.8142751348355], [272, -69.9107215099757], [273, -69.98536345282943], [274, -70.0426657171194], [275, -70.0863048662654], [276, -70.1193574326], [277, -70.14420460835693], [278, -70.16272602638853], [279, -70.17640077380412], [280, -70.18638539532895], [281, -70.19357879976128], [282, -70.1986757041898], [283, -70.20221007983294], [284, -70.2045901042649], [285, -70.20612604373807], [286, -70.20705233934524], [287, -70.20754499636271], [288, -70.20773520259362], [289, -70.20771994175946], [290, -70.20757022746805], [291, -70.20733746333144], [292, -70.20705833452061], [293, -70.20675855346177], [294, -70.20645571515927], [295, -70.20616146340917], [296, -70.20588312575073], [297, -70.20562494045032], [298, -70.20538897145785], [299, -70.20517578571793], [300, -70.2049849502983], [301, -70.2048153935702], [302, -70.20466566436771], [303, -70.20453411504982], [304, -70.2044190281965], [305, -70.20431870188982], [306, -70.20423150486039], [307, -70.20415590996188], [308, -44.123246984417534], [309, 26.754058374004277], [310, -15.243770246133122], [311, -51.81783336934315], [312, -62.7868547192326], [313, -62.44078911730581], [314, -62.528864258630946], [315, -62.96975019018332], [316, -63.62843801569613], [317, -64.39515225951483], [318, -65.18893081123231], [319, -65.95604743385414], [320, -66.66424239007097], [321, -67.29637712558642], [322, -67.84540892025905], [323, -68.31259040461217], [324, -68.70248417321321], [325, -69.02344899449153], [326, -69.2837057949802], [327, -69.49244171187986], [328, -69.65834566246677], [329, -69.78901512832435], [330, -69.89108681009698], [331, -69.97021317600111], [332, -70.03108283821643], [333, -70.07749966886136], [334, -70.11270746977841], [335, -70.13922202712656], [336, -70.15902565401576], [337, -70.17368030621952], [338, -70.18440905208665], [339, -70.19216375691967], [340, -70.19768098607803], [341, -70.20152757095408], [342, -70.20413734547333], [343, -70.20584050334125], [344, -70.20688688704014], [345, -70.20746434784526], [346, -70.20771314090787], [347, -70.20773715588429], [348, -70.207612638498], [349, -70.20739493385248], [350, -70.20712367773976], [351, -70.20682677581773], [352, -70.20652344005828], [353, -70.20622649492036], [354, -70.20594412003075], [355, -70.20568115976229], [356, -70.20544010125562], [357, -70.20522179967706], [358, -70.20502601163146], [359, -70.20485178366131], [360, -70.20469773186001], [361, -70.20456224014995], [362, -70.20444359821431], [363, -70.20434009500413], [364, -26.564833943111225], [365, 16.857598448997287], [366, -24.781561327036556], [367, -59.08454610487416], [368, -62.67177047777813], [369, -62.41991245614048], [370, -62.60996561838811], [371, -63.117907156700646], [372, -63.812884399923206], [373, -64.5929697831674], [374, -65.38447664894895], [375, -66.13945882791248], [376, -66.82964420655419], [377, -67.44134373873979], [378, -67.96973945636381], [379, -68.41694072023184], [380, -68.78882786560314], [381, -69.09386248834068], [382, -69.34034088362432], [383, -69.53760954691703], [384, -69.69403210562348], [385, -69.8169706232864], [386, -69.91281547516864], [387, -69.98697803683038], [388, -70.04389881161475], [389, -70.08724161832909], [390, -70.1200641297147], [391, -70.14473342274896], [392, -70.16311814833121], [393, -70.17668851781086], [394, -70.1865939521623], [395, -70.19372769116126], [396, -70.19877997368899], [397, -70.2022812560288], [398, -70.20463697264263], [399, -70.20615526027713], [400, -70.2070689151289], [401, -70.20755267811538], [402, -70.20773676996077], [403, -70.2077174384455], [404, -70.20756514014042], [405, -70.20733085948869], [406, -70.20705096827169], [407, -70.2067509463212], [408, -70.20644821746994], [409, -70.20615430080281], [410, -70.2058764340984], [411, -70.20561879199424], [412, -70.20538339421438], [413, -70.20517077776896], [414, -70.20498049021839], [415, -70.20481144794698], [416, -70.20466219314903], [417, -16.021620346305497], [418, 13.587886569769422], [419, -27.535491098609285], [420, -60.435829918411294], [421, -62.633356197515404], [422, -62.416671058438986], [423, -62.63640584543559], [424, -63.16340732574717], [425, -63.868468288810824], [426, -64.65192357470342], [427, -65.44231674862151], [428, -66.19343166614131], [429, -66.87815601599709], [430, -67.48370290223869], [431, -68.00597629943937], [432, -68.44727128453239], [433, -68.81387378343831], [434, -69.11423340947958], [435, -69.35670849591138], [436, -69.55064394320418], [437, -69.70431610725181], [438, -69.82501648259925], [439, -69.91906170122272], [440, -69.99179174921059], [441, -70.0475733386277], [442, -70.09003233834135], [443, -70.12216890480919], [444, -70.14630804088387], [445, -70.1642855179394], [446, -70.17754500164503], [447, -70.18721463185597], [448, -70.19417072857135], [449, -70.19909017463402], [450, -70.20249294915266], [451, -70.20477631369926], [452, -70.2062420625654], [453, -70.20711809419174], [454, -70.20757538560447], [455, -70.20774127906512], [456, -70.20770983209995], [457, -70.20754984357525], [458, -70.20731105054655], [459, -70.2070288921788], [460, -70.20672815609001], [461, -70.2064257566487], [462, -70.20613284170689], [463, -70.20585638179878], [464, -70.20560036207203], [465, -70.20536667049986], [466, -70.20515575487605], [467, -70.20496710458377], [468, -70.204799600223], [469, -70.20465176413035], [470, -70.20452193702366], [471, -70.20440839996557], [472, -70.204309456188], [473, -70.2042234837394], [474, -70.20414896717757], [475, 4.466009414291506], [476, 9.20751949959612], [477, -31.0918601285749], [478, -61.63481193748518], [479, -62.59782222836449], [480, -62.42585637059472], [481, -62.68111294609324], [482, -63.230213609424204], [483, -63.946349440570756], [484, -64.73262116193746], [485, -65.52042039923975], [486, -66.26567526676057], [487, -66.94274468581217], [488, -67.53985336787723], [489, -68.05385730166587], [490, -68.4872493520374], [491, -68.84682204312833], [492, -69.14097919817983], [493, -69.37817632744522], [494, -69.56772099878859], [495, -69.71777677329999], [496, -69.83553888094521], [497, -69.92722448573544], [498, -69.99807821197156], [499, -70.05236852230868], [500, -70.09367233046494], [501, -70.12491246539793], [502, -70.14835914957132], [503, -70.16580500345668], [504, -70.1786588740178], [505, -70.1880210151928], [506, -70.19474559457441], [507, -70.19949202070468], [508, -70.20276657312115], [509, -70.20495583240059], [510, -70.20635330788254], [511, -70.20718050298403], [512, -70.20760348221182], [513, -70.20774583244275], [514, -70.20769875483286], [515, -70.20752888728364], [516, -70.20728434148253], [517, -70.20699934195957], [518, -70.20669777527947], [519, -70.20639589305175], [520, -70.20610436054703], [521, -70.20582980120804], [522, -40.29676452532711], [523, 23.933507856504857], [524, -18.277525184748338], [525, -54.41237937972776], [526, -62.731976184292385], [527, -62.41425350061459], [528, -62.53871143327172], [529, -63.00441253475616], [530, -63.67746879355171], [531, -64.45062661731157], [532, -65.24534561283714], [533, -66.00983959107961], [534, -66.7132731783785], [535, -67.33968145869072], [536, -67.88273881979939], [537, -68.34405062501432], [538, -68.72859148468794], [539, -69.04479793831747], [540, -69.30090376554617], [541, -69.50617773681951], [542, -69.66921178915987], [543, -69.79753605493934], [544, -69.89771555782895], [545, -69.97533148208616], [546, -70.03499892228405], [547, -70.08047768061941], [548, -70.1149576180937], [549, -70.1409087643712], [550, -70.16027891051294], [551, -70.17460213532317], [552, -70.18507910016564], [553, -70.19264381429016], [554, -70.19801872056044], [555, -70.20175955346191], [556, -70.20429147786034], [557, -70.20593795098269], [558, -70.20694360680496], [559, -70.20749228911474], [560, -70.20772118468771], [561, -70.20773184561709], [562, -70.20759874621452], [563, -70.20737589684515], [564, -70.20710193390502], [565, -70.20680402003958], [566, -70.20650081931889], [567, -70.20620475605001], [568, -70.2059237209947], [569, -70.20566235298624], [570, -70.20542299559722], [571, -70.20520640615987], [572, -70.20501227688939], [573, -70.20483961412901], [574, -70.20468701103367], [575, -70.20455284069277], [576, -70.2044353902546], [577, -70.20433295164578], [578, -70.20424388065683], [579, -70.20416663323427], [580, -70.20409978558182], [581, -70.20404204296835], [582, -70.20399224085035], [583, -70.20394934094027], [584, -70.20391242412146], [585, -70.20388068156288], [586, -70.20385340498095], [587, -70.2038299766969], [588, -70.20380985991952], [589, -70.20379258952468], [590, -70.20377776349096], [591, -70.20376503507069], [592, -70.2037541057215], [593, -70.20374471878775], [594, -70.20373665389636], [595, -70.20372972201989], [596, -70.20372376115017], [597, -70.20371863252495], [598, -70.20371421734937], [599, -70.20371041395671], [600, -70.20370713535644], [601, -70.20370430712173], [602, -70.2037018655733], [603, -70.20369975622053], [604, -70.20369793242519], [605, -50.1278999557621], [606, 30.62430162207192], [607, -10.171627390661843], [608, -47.26451144458128], [609, -62.82975114770998], [610, -62.46812706846495], [611, -62.50054004407315], [612, -62.90347167436394], [613, -63.54054415311849], [614, -64.29802131233883], [615, -65.0912291050118], [616, -65.86348507784156], [617, -66.58011777147833], [618, -67.22216348867184], [619, -67.78149829638465], [620, -68.25872216084203], [621, -68.65778262091055], [622, -68.98687291082824], [623, -69.25423313015891], [624, -69.46889169941743], [625, -69.63970593922036], [626, -69.77439010390255], [627, -69.87970275666744], [628, -69.9614176409789], [629, -70.02434678470377], [630, -70.0723749686773], [631, -70.10883222577874], [632, -70.13631437458086], [633, -70.15686288949065], [634, -70.17208742778301], [635, -70.18324941494323], [636, -70.19133129783249], [637, -70.1970938401614], [638, -70.20112289587223], [639, -70.20386716609815], [640, -70.20566840259193], [641, -70.20678538844697], [642, -70.20741285736925], [643, -70.2076963369532], [644, -70.20774373591166], [645, -70.2076343476361], [646, -70.20742581533332], [647, -70.2071594969979], [648, -70.20686457995977], [649, -70.2065612224218], [650, -70.20626294089261], [651, -70.20597841545624], [652, -70.20571284736862], [653, -70.20546897376909], [654, -70.20524782085278], [655, -70.20504925842371], [656, -70.20487240432531], [657, -70.20471591599157], [658, -70.20457819761599], [659, -70.20445754465668], [660, -70.20435224216239], [661, -70.2042606293753], [662, 4.438034395422377], [663, 9.20069614518003], [664, -31.098694938806858], [665, -61.634134981308144], [666, -62.59622937271655], [667, -62.42468263702447], [668, -62.6802862970347], [669, -63.22965105601601], [670, -63.94597414285277], [671, -64.73237367615215], [672, -65.5202572821634], [673, -66.26556718358388], [674, -66.94267248723332], [675, -67.53980473536254], [676, -68.05382407342972], [677, -68.48722643345045], [678, -68.84680598750438], [679, -69.14096782704048], [680, -69.37816817034678], [681, -69.56771507054569], [682, -69.71777241730419], [683, -69.8355356482947], [684, -69.92722206542713], [685, -69.99807638583573], [686, -70.05236713924273], [687, -70.09367127487793], [688, -70.12491165592495], [689, -70.14835852680662], [690, -70.16580452331192], [691, -70.17865850344977], [692, -70.18802072922426], [693, -70.19474537417966], [694, -70.19949185129241], [695, -70.20276644343339], [696, -70.20495573370604], [697, -70.20635323337962], [698, -70.20718044735492], [699, -70.20760344128676], [700, -70.207745802945], [701, -70.20769873418367], [702, -70.20752887345198], [703, -70.20728433286874], [704, -70.2069993373045], [705, -70.20669777359349], [706, -70.20639589355886], [707, -70.20610436264066], [708, -70.20582980441608], [709, -70.2055759583126], [710, -66.8929736155908], [711, 26.513078317465496], [712, 3.6036711048181944], [713, -35.598361113499976], [714, -62.40174230698162], [715, -62.534499756967186], [716, -62.42535880030012], [717, -62.72838434135004], [718, -63.30735614510095], [719, -64.03890890145951], [720, -64.82970058934269], [721, -65.61492151742247], [722, -66.35331374632295], [723, -67.02124774180184], [724, -67.60811996882977], [725, -68.11204282086368], [726, -68.53582995773019], [727, -68.8868391437157], [728, -69.17343090252803], [729, -69.40421581998088], [730, -69.58842093707895], [731, -69.73408192619414], [732, -69.8482760841262], [733, -69.93709847201778], [734, -70.00567666613613], [735, -70.05815963475388], [736, -70.09806513320086], [737, -70.12822031637786], [738, -70.15082944108643], [739, -70.16763270613303], [740, -70.17999666128897], [741, -70.18898770612974], [742, -70.19543313046569], [743, -70.19997115267054], [744, -70.20309144818684], [745, -70.20516765867805], [746, -70.20648326230877], [747, -70.20725202372958], [748, -70.20763406605707], [749, -70.20774843703364], [750, -70.20768288763333], [751, -70.20750144749877], [752, -70.20725026817655], [753, -70.2069621108098], [754, -70.20665977760984], [755, -70.2063587236782], [756, -70.20606903526347], [757, -70.20579692019703], [758, -70.20554582420574], [759, -70.20531726146545], [760, -70.20511142782675], [761, -70.20492764951511], [762, -70.20476470790572], [763, -70.20462107147519], [764, -70.20449505866507], [765, -70.20438494969805], [766, -70.20428906099767], [767, -70.20420579249318], [768, -70.20413365551073], [769, -70.20407128698527], [770, -70.20401745423284], [771, -70.20397105339266], [772, -70.20393110379703], [773, -70.20389673988957], [774, -70.20386720183629], [775, -70.20384182562425], [776, -70.20382003318277], [777, -31.60473422050552], [778, 19.006996142104825], [779, -22.895715435683268], [780, -57.939193491408275], [781, -62.70329959501678], [782, -62.4274886123476], [783, -62.59616817969622], [784, -63.09009399136595], [785, -63.77739638086182], [786, -64.55456086375558], [787, -65.3463618848336], [788, -66.10363836540787], [789, -66.79730825025932], [790, -67.41301053432072], [791, -67.94544297533008], [792, -68.39656363524868], [793, -68.7719762391013], [794, -69.08013575060761], [795, -69.32930334839347], [796, -69.52881250125866], [797, -69.68708635120772], [798, -69.8115331397964], [799, -69.90859190435658], [800, -69.98372149185748], [801, -70.04141156248261], [802, -70.08535195360518], [803, -70.1186382931664], [804, -70.1436662167138], [805, -70.16232654058767], [806, -70.1761073777515], [807, -70.18617251106767], [808, -70.19342660603071], [809, -70.198568925387], [810, -70.20213700733663], [811, -70.20454181282513], [812, -70.20609576881478], [813, -70.20703498551983], [814, -70.20753675140729], [815, -70.20773323601333], [816, -70.20772217041188], [817, -70.2075751341381], [818, -70.20734395690084], [819, -70.20706564265922], [820, -70.20676614063879], [821, -70.20646322028936], [822, -70.20616865266446], [823, -70.2058898570417], [824, -70.20563113685029], [825, -70.20539460145314], [826, -70.20518084864537], [827, -70.20498946570704], [828, -70.20481939353633], [829, -67.89360537155274], [830, 23.555566053675967], [831, 4.748380890851338], [832, -34.673012023626015], [833, -62.301505196076256], [834, -62.552125703358655], [835, -62.4289595851038], [836, -62.72140131239245], [837, -63.29364783128809], [838, -64.02159488797338], [839, -64.81113078670386], [840, -65.59663529375382], [841, -66.33624601117398], [842, -67.00589593780307], [843, -67.59473879287181], [844, -68.10062376206665], [845, -68.52628558031165], [846, -68.87897327694618], [847, -69.16705138796513], [848, -69.39909569358203], [849, -69.58435079846176], [850, -69.7308762582024], [851, -69.84577231977886], [852, -69.935157975314], [853, -70.0041839131413], [854, -70.05702227674747], [855, -70.0972027094502], [856, -70.12757121046769], [857, -70.15034497210097], [858, -70.16727451100752], [859, -70.17973470416531], [860, -70.18879861592764], [861, -70.19529882696544], [862, -70.19987772642227], [863, -70.20302825737821], [864, -70.2051266073945], [865, -70.20645822799567], [866, -70.20723840586199], [867, -70.20762843231773], [868, -70.20774824731545], [869, -70.2076862797461], [870, -70.20750707152365], [871, -70.20725715898183], [872, -70.20696959036717], [873, -70.20666738048372], [874, -70.20636614046167], [875, -70.20607606985872], [876, -70.20580345773365], [877, -70.20555180709928], [878, -70.20532267167972], [879, -70.20511627384214], [880, -70.20493195684975], [881, -70.20476851230453], [882, -70.2046244140903], [883, -70.20449798271228], [884, -70.2043874981987], [885, -70.20429127531128], [886, -70.2042077114194], [887, -70.20413531479548], [888, -70.20407271910804], [889, -70.20401868838556], [890, -70.20397211558397], [891, -70.20393201703472], [892, -70.20389752440683], [893, -70.20386787533924], [894, -70.20384240354348], [895, -70.20382052891888], [896, -70.20380174803222], [897, -70.20378562517743], [898, -70.20377178413555], [899, -70.20375990068709], [900, -70.20374969588377], [901, -70.20374093005643], [902, -70.20373339751751], [903, -70.20372692190591], [904, -70.2037213521166], [905, -70.203716558757], [906, -70.20371243107273], [907, -70.20370887428878], [908, -63.30423815210363], [909, 31.918908559299616], [910, 0.4256949455472758], [911, -38.16656160846276], [912, -62.64942749770056], [913, -62.53248935703212], [914, -62.45203769036837], [915, -62.775529370536205], [916, -63.36609470949366], [917, -64.10243011644611], [918, -64.89289253449047], [919, -65.67455499012719], [920, -66.4075343024559], [921, -67.0692010549628], [922, -67.64944412943461], [923, -68.14701675562051], [924, -68.56489987765538], [925, -68.91069514096148], [926, -69.19271546776535], [927, -69.419658043486], [928, -69.60067405753959], [929, -69.74371913195323], [930, -69.85579520069084], [931, -69.94292139638723], [932, -70.01015270574867], [933, -70.06156905583354], [934, -70.10064979046226], [935, -70.13016538677599], [936, -70.15228112454919], [937, -70.16870609945994], [938, -70.18078180607222], [939, -70.1895546223978], [940, -70.19583596337628], [941, -70.20025154492161], [942, -70.20328125422381], [943, -70.20529111072216], [944, -70.20655868676108], [945, -70.20729319308258], [946, -70.20765125805399], [947, -70.20774926046487], [948, -70.20767292328463], [949, -70.20748474347772], [950, -70.2072297210717], [951, -70.20693975773656], [952, -70.20663701898404], [953, -70.2063364923523], [954, -70.20604792429188], [955, -70.20577727881508], [956, -70.20552782948283], [957, -55.237487697514666], [958, 32.584070257674696], [959, -6.124481944459678], [960, -43.68436324504715], [961, -62.79260393710215], [962, -62.46819353906185], [963, -62.4623000052544], [964, -62.83935035527219], [965, -63.4623249958842], [966, -64.21453438985705], [967, -65.00873871112172], [968, -65.78614396814467], [969, -66.5102032950986], [970, -67.16065065377312], [971, -67.72864173006016], [972, -68.21419116492517], [973, -68.62085086868814], [974, -68.95665095366724], [975, -69.22987266844605], [976, -69.44942119311573], [977, -69.62428781442723], [978, -69.76228628877143], [979, -69.87027563048291], [980, -69.95412933328159], [981, -70.01875882945289], [982, -70.0681219903474], [983, -70.10561336203997], [984, -70.13389668092532], [985, -70.15506235356322], [986, -70.17075938829919], [987, -70.18228086151467], [988, -70.1906344659386], [989, -70.19660095042651], [990, -70.2007818863323], [991, -70.20363826437023], [992, -70.20552139494802], [993, -70.20669745888236], [994, -70.2073668877141], [995, -70.20767957661752], [996, -70.20774676583405], [997, -70.20765027697166], [998, -70.20744966128248], [999, -70.20718770806675], [1000, -70.20689467106781]
			  ];

//p5 setup
function setup() {

osc = new p5.TriOsc(); //new oscillator

//scale for x
var x = d3.scale.linear()
			.range([padding, w-padding]);

//scale for y
var y = d3.scale.linear()
			.range([h-padding, padding]);

//to draw the line through the data points
var lines = d3.svg.line()
			.x(function(d) {return x(d); })
			.y(function(d) {return y(d); });
			
//gradient for data across x axis
var color = d3.scale.linear()
				     .domain([0, d3.max(dataset, function(d) {return d[0]; })]) //use max and min to be more flexible
					 .range(["blue", "beige"]); 

//scaling the graph
var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) {return d[0]; })]) //use max and min to be more flexible
                     //.range([d3.min(dataset, function(d) {return d[0];}) , w]); //set to min value and svg width
                     .range([padding*2, w-padding])
                     
var yScale = d3.scale.linear()
                     .domain([d3.min(dataset, function(d) {return d[1]}), d3.max(dataset, function(d) {return d[1]; })]) //use max and min to be more flexible
                     //.range([d3.min(dataset, function(d) {return d[1];}), h]);//set to min value and svg width
                     .range([h-padding*2, padding]);

//create the x axis for graph
var xAxis = d3.svg.axis()
					 .scale(xScale)
					 .orient("bottom")
					 .ticks(6); //set number of ticks

//create the y axis
var yAxis = d3.svg.axis()
					 .scale(yScale)
					 .orient("left")
					 .ticks(7); //set number of ticks

//make a line
var valueline = d3.svg.line()
			.x(function(d) { return xScale(d[0]); })
			.y(function(d) { return yScale(d[1]); });

//make the svg element
var svg = d3.select("#dataContainer") //put graph in this dataContainer
			.append("svg")
			.attr("width", w)
			.attr("height", h);

		svg.append("path")
			.attr("class", "line")
			.attr("d", valueline(dataset));

		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.style("fill", function(d) {
				return color(d[0]);
			})
			//.style("stroke", "white")
			.attr("cx", function(d) {
				return xScale(d[0]);
			})
			.attr("cy", function(d) {
				return yScale(d[1]);
			})
			.attr("r", 5)
			.on("mouseover", function(d) {
				d3.select(this)
					.transition() //make it transition nicely 
					.duration(50) // transition duration
					.attr("r", 20); //enlarges the circle on hover
				osc.freq(880);
				osc.amp(.05, 1);
				playing = true; // play noise when hover on circle
				osc.start();
				var freq = map(yScale(d[1]), h, 0, 20, 888);
				osc.freq(freq);
			})
			.on("mouseout", function(d) {
				d3.select(this)
					.transition()
					.duration(250)
					.attr("r", 5);
				playing = false;
				osc.stop();
			});

		svg.append("g")
			.attr("class", "axis") //assign axis class
			.attr("transform", "translate(0," + (h-padding) + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "axis") //assign axis class
			.attr("transform", "translate(" + padding + ",0)")
			.call(yAxis);

}