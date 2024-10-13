var events = [
    //室町時代
    {name: "コロンブスがカリブ海の島に到達する。", year: 1492},
    {name: "バスコ・ダ・ガマがインドに到達する。", year: 1498},
    {name: "ここからルネサンスが盛んになる。", year: 1498},
    {name: "ルターが宗教改革を始める。", year: 1517},
    {name: "マゼランの船体が世界一周を達成する。", year: 1522},
    {name: "スペインがインカ帝国を滅ぼす。", year: 1533},
    {name: "イエズス会が設立される。", year: 1534},
    {name: "ポルトガル人が鉄砲を伝える。", year: 1543},
    {name: "ザビエルがキリスト教を伝える。", year: 1549},
    {name: "織田信長が桶狭間の戦いで今川義元を破る", year: 1560},
    {name: "信長が将軍足利義明を京都から追放する。", year: 1574},
    {name: "信長が長篠の戦で武田勝頼を破る。", year: 1575},
    {name: "信長が安土城下に楽市・楽座の政策をしく。", year: 1577},
    {name: "オランダがスペインから独立する。", year: 1581},
    {name: "天正遣欧使節が出発する。", year: 1582},
    {name: "豊臣秀吉が太閤検地を始める。", year: 1582},
    {name: "秀吉がバテレン追放令を出す。", year: 1587},
    {name: "秀吉が刀狩令を出す。", year: 1588},
    {name: "秀吉が北条氏を倒し全国統一をする。", year: 1590},
    {name: "秀吉が朝鮮侵略を始める（文禄の役）。", year: 1592},

    //明治時代
    {name: "戊辰戦争が起こる。", year: 1868},
    {name: "五箇条の御誓文が出される。", year: 1868},
    {name: "元号を明治とする。", year: 1869},
    {name: "版籍奉還が行われる。", year: 1869},
    {name: "平民に名字の使用を許可する。", year: 1870},
    {name: "ドイツ帝国が成立する。", year: 1871},
    {name: "廃藩置県が行われる。", year: 1871},
    {name: "日清修好条規が結ばれる。", year: 1871},
    {name: "解放令が出される。", year: 1871},
    {name: "岩倉使節団が欧米へ出発する。", year: 1871},
    {name: "学制が出される。", year: 1872},
    {name: "富岡製糸場が操業を開始する。", year: 1872},
    {name: "太陽暦を採用する。", year: 1872},
    {name: "徴兵令が出される。", year: 1873},
    {name: "地租改正が行われる。", year: 1873},
    {name: "民選議院設立の建白書が出される。", year: 1874},
    {name: "樺太・千島交換条約が結ばれる。", year: 1875},
    {name: "江華島事件が起こる。", year: 1875},
    {name: "日朝修好条規が結ばれる", year: 1876},
    {name: "西南戦争が起こる。", year: 1877},
    {name: "沖縄県を置く（琉球処分）。", year: 1879},
    {name: "国会期成同盟が結成される。", year: 1880},
    {name: "国会開設の勅諭が出される。", year: 1881},
    {name: "板垣退助らが自由党を結成する。", year: 1881},
    {name: "伊藤博文がヨーロッパへ出発する。", year: 1882},
    {name: "大隈重信らが立憲改進党を結成する。", year: 1882},
    {name: "ドイツ・オーストリア・イタリアの三国同盟が成立する。", year: 1882},
    {name: "秩父事件が起こる。", year: 1884},
    {name: "内閣制度ができる。", year: 1885},
    {name: "ノルマントン号事件が起こる。", year: 1886},
    {name: "このころ軽工業で産業革命が進む。", year: 1886},
    {name: "大日本帝国憲法が発布される。", year: 1889},
    {name: "第一回衆議院議員選挙が行われる。", year: 1890},
    {name: "第一回帝国議会が開かれる。", year: 1890},
    {name: "教育勅語が出される。", year: 1890},
    {name: "このころ足尾銅山鉱毒事件が起こる。", year: 1890},
    {name: "領事裁判権の撤廃に成功する。", year: 1894},
    {name: "朝鮮で甲午農民戦争が起こる。", year: 1894},
    {name: "日清戦争が起こる。", year: 1894},
    {name: "下関条約が結ばれる。", year: 1895},
    {name: "三国干渉が起こり遼東半島を返還する。", year: 1895},
    {name: "中国で義和団事件が起こる。", year: 1900},
    {name: "官営の八幡製鉄所が操業を始める。", year: 1901},
    {name: "社会民主党が結成される。", year: 1902},
    {name: "日英同盟が結ばれる。", year: 1902},
    {name: "日露戦争が起こる。", year: 1904},
    {name: "このころ重化学工業で産業革命が進む。", year: 1904},
    {name: "ポーツマス条約が結ばれる。", year: 1905},
    {name: "南満州鉄道株式会社が設立される。", year: 1906},
    {name: "義務教育の年限を六年にする。", year: 1907},
    {name: "イギリス・フランス・ロシアの三国協商が成立する。", year: 1907},
    {name: "大逆事件が起こる。", year: 1910},
    {name: "韓国を併合して植民地にする。", year: 1910},
    {name: "中国で辛亥革命がおこる。", year: 1911},
    {name: "中華民国が成立する。", year: 1911},
    {name: "第一次護憲運動がおこる。", year: 1912},
    {name: "第一次世界大戦がはじまる。", year: 1912},
    {name: "中国に二十一か条の要求を出す。", year: 1914},
    {name: "吉野作蔵が民本主義を唱える。", year: 1915},
    {name: "アメリカが第一次世界大戦に参戦する。", year: 1917},
    {name: "ロシア革命がおこる。", year: 1917},
    {name: "米騒動が起こる。", year: 1918},
    {name: "シベリア出兵を行う。", year: 1918},
    {name: "原敬内閣が成立する。", year: 1918},
    {name: "朝鮮で三・一独立運動が起こる。", year: 1919},
    {name: "中国で五・四運動が起こる。", year: 1919},
    {name: "ベルサイユ条約が結ばれる。", year: 1919},
    {name: "国際連盟が発足する。", year: 1920},
    {name: "新婦人協会が設立される。", year: 1920},
    {name: "第一回メーデーが行われる。", year: 1920},
    {name: "ワシントン会議が開かれる。", year: 1921},
    {name: "日本労働総同盟が作られる。", year: 1921},
    {name: "イタリアでファシスト党が政権につく。", year: 1922},
    {name: "ソビエト社会主義共和国連邦が成立。", year: 1922},
    {name: "全国水平社が結成される。", year: 1922},
    {name: "日本農民組合が結成される。", year: 1922},
    {name: "日本共産党が結成される。", year: 1922},
    {name: "関東大震災が起こる。", year: 1923},
    {name: "第二次護憲運動がおこる。", year: 1924},
    {name: "普通選挙法が成立する。", year: 1925},
    {name: "治安維持法が成立する。", year: 1925},
    {name: "ラジオ放送が始まる。", year: 1925},
    {name: "日本で金融恐慌が起こる。", year: 1927},
    {name: "世界恐慌が起こる。", year: 1929},
    {name: "ロンドン海軍軍縮条約が結ばれる。", year: 1930},
    {name: "満州事変が起こる。", year: 1931},
    {name: "イギリスがブロック経済を形成する。", year: 1932},
    {name: "満州国の建国を宣言する。", year: 1932},
    {name: "五・一五事件が起こる。", year: 1932},
    {name: "ドイツでヒトラーが首相になる。", year: 1933},
    {name: "国際連盟が日本の満州撤退を決議する。", year: 1933},
    {name: "日本が国際連盟を脱退する。", year: 1933},
    {name: "アメリカでニューディールが始まる。", year: 1933},
    {name: "二・二六事件が起こる。", year: 1936},
    {name: "日中戦争がはじまる。", year: 1937},
    {name: "中国で抗日民族統一戦線が結成される。", year: 1937},
    {name: "南京事件が起こる。", year: 1937},
    {name: "国家総動員法が制定される。", year: 1938},
    {name: "ドイツがオーストリアを併合する。", year: 1938},
    {name: "独ソ不可侵条約が結ばれる。", year: 1939},
    {name: "ドイツがポーランドに侵攻し、第二次世界大戦がはじまる。", year: 1939},
    {name: "日本がフランス領インドシナ北部に進軍する。", year: 1940},
    {name: "日独伊三国同盟が結ばれる。", year: 1940},
    {name: "大政翼賛会が結成される。", year: 1940},
    {name: "日ソ中立条約が結ばれる。", year: 1941},
    {name: "ドイツがソ連に侵攻する。", year: 1941},
    {name: "大西洋憲章が発表される。", year: 1941},
    {name: "太平洋戦争が始まる。", year: 1941},
    {name: "ミッドウェー海戦で日本が敗北する。", year: 1942},
    {name: "イタリアが降伏する。", year: 1943},
    {name: "学徒出陣が始まる。", year: 1943},
    {name: "米英ソがヤルタ会談を開く。", year: 1945},
    {name: "東京大空襲が行われる。", year: 1945},
    {name: "沖縄戦が始まる。", year: 1945},
    {name: "ドイツが降伏する。", year: 1945},
    {name: "ポツダム宣言が発表される。", year: 1945},
    {name: "広島・長崎に原子爆弾が投下される。", year: 1945},
    {name: "日本が無条件降伏する。", year: 1945},
    {name: "国際連合が発足する。", year: 1945},
    {name: "GHQが財閥解体。農地改革を指示する。", year: 1945},
    {name: "選挙法改正で男女平等の選挙権となる。", year: 1945},
    {name: "天皇が人間宣言を出す。", year: 1946},
    {name: "日本国憲法が公布される。", year: 1946},
    {name: "日本国憲法が施行される。", year: 1947},
    {name: "労働基準法、教育基本法が公布される。", year: 1947},
    {name: "地方自治法、改正民法が公布される。", year: 1947},
    {name: "北大西洋条約機構（NATO）が成立する。", year: 1949},
    {name: "ドイツが東西に分かれて独立する。", year: 11949},
    {name: "中華人民共和国が成立する。", year: 1949},
    {name: "朝鮮戦争が起こる。", year: 1950},
    {name: "警察予備隊が設置される。", year: 1950},
    {name: "サンフランシスコ平和条約に調印する。", year: 1951},
    {name: "日米安全保障条約を結ぶ。", year: 1951},
    {name: "テレビ放送が始まる。", year: 1953},
    {name: "第五福竜丸事件が起こる。", year: 1954},
    {name: "自衛隊が設置される。", year: 1954},
    {name: "アジア・アフリカ会議が開かれる。", year: 1955},
    {name: "ワルシャワ条約機構が成立する。", year: 1955},
    {name: "自由民主党が結成される。", year: 1955},
    {name: "このころ高度経済成長期が始まる。", year: 1955},
    {name: "日ソ共同宣言が調印される。", year: 1956},
    {name: "国際連合に加盟する。", year: 1956},
    {name: "日米新安全保障条約を結ぶ。", year: 1960},
    {name: "キューバ危機が起こる。", year: 1962},
    {name: "東京オリンピックが開催される。", year: 1964},
    {name: "日韓基本条約を結ぶ。", year: 1965},
    {name: "ヨーロッパ共同体（EC）が発足する。", year: 1967},
    {name: "小笠原諸島が日本に復帰する。", year: 1968},
    {name: "非核三原則を国の方針とする。", year: 1971},
    {name: "沖縄が日本に復帰する。", year: 1972},
    {name: "日米共同声明が発表される。", year: 1972},
    {name: "第四次中東戦争から、石油危機が起こる。", year: 1973},
    {name: "ベトナム戦争が終結する。", year: 1975},
    {name: "主要国首脳会議（サミット）が始まる。", year: 1975},
    {name: "日中平和友好条約を結ぶ。", year: 1978},
    {name: "ベルリンの壁が崩壊する。", year: 1989},
    {name: "米ソが冷戦の終結を宣言する。", year: 1989},
    {name: "東西ドイツが統一される。", year: 1990},
    {name: "湾岸戦争が起こる。", year: 1991},
    {name: "バブル経済が崩壊する。", year: 1991},
    {name: "ソ連が解体する。", year: 1991},
    {name: "国際平和協力法（PKO協力法）が成立。", year: 1992},
    {name: "非自民連立内閣が成立する。", year: 1993},
    {name: "ヨーロッパ連合（EU）が発足する。", year: 1993},
    {name: "阪神淡路大震災が起こる。", year: 1995},
    {name: "アイヌ文化復興法が成立する。", year: 1997},
    {name: "地球温暖化防止京都会議が開かれる。", year: 1997},
    {name: "アメリカで同時多発テロが起こる。", year: 2001},
    {name: "北朝鮮で日朝首脳会議が行われる。", year: 2002},
    {name: "イラク戦争が起こる。", year: 2003},
    {name: "自衛隊をイラクに派遣する。", year: 2004},
    {name: "世界金融危機が起こる。", year: 2008},
    {name: "民主・社会・国民新連立内閣が成立する。", year: 2009},
    {name: "東日本大震災が起こる。", year: 2011},
    {name: "自民・公明連立内閣が成立する。", year: 2012},
    {name: "安全保障関連法が成立する。", year: 2015},
    {name: "パリ協定が採択される。", year: 2015},
    {name: "選挙権年齢が満１８歳以上に引き下げられる。", year: 2016},
]
for (var i = 0; i < events.length; i++){
    if (events.filter((checkEvent) => checkEvent == events[i]).length != 1){
        events.splice(i,1)
    }
}
//「または」で選択してます
function SelectEvents(name,yearfrom,yearto,words){
    var returnEvent = []

    events.forEach((event)=>{
        if (words.length == 0){
            if ((event.name === name)
                || (event.year >= yearfrom && event.year <= yearto)){
                    returnEvent.push(event)
            }
        }else{
            words.forEach((word) => {
                if (event.name.indexOf(word) != -1){
                    returnEvent.push(event)
                }
            })
        }
        
    })
   
   return returnEvent;
}
var recentAnsRate = 0.2

var templete = document.getElementById("template")

function Ques(correctWaitTime){
    this.title = document.createElement("p");
    this.form = document.createElement("input");
    this.answer = document.getElementById("answer");
    this.wordP = document.createElement("p");
    this.result = document.getElementById("result");

    this.displayAnswer = false;
    this.displayAnswerAfterCheck = true;
    
    this.yearfrom = 0;
    this.yearto = 5000;

    this.SetYearRange = ()=>{
        this.yearfrom = Number(document.getElementById("yearfrom").value)
        this.yearto = Number(document.getElementById("yearto").value)
    };

    this.sendYearButton = document.createElement("input")
    this.sendYearButton.type = "button"
    this.sendYearButton.value = "設定を送信"
    this.sendYearButton.addEventListener("click", ()=>{
        SendYearRange()
    })
    document.getElementById("setYearP").appendChild(this.sendYearButton)

    if (this.displayAnswer){
        this.answer.style.display = "block"
    }else{
        this.answer.style.display = "none"
    }

    this.correctWaitTime = correctWaitTime

    this.word;
    this.form.type = "number"
    this.form.id = "answerInput"
    this.form.width = 50
    this.addTemplate = (template)=>{
        template.appendChild(this.title)
        this.word = templete.appendChild(ques.wordP)
        this.word.appendChild(ques.form)
    };
    this.now

    
//ques wordの定義
}
var ques = new Ques(1500);
ques.addTemplate(templete)

function SendYearRange(){
    ques.SetYearRange();
}

function Goro(thisTemplate, parentQues){
    this.rootGoro = document.createElement("p")
    this.input = document.createElement("textarea")
    this.sendButton = document.createElement("input")
    this.output = document.createElement("p")

    this.input.id = "goro-input";
    this.sendButton.type = "button";
    this.sendButton.value = "このゴロを設定";
    this.output.innerText = "";

    this.autoSave = true;
    this.displayGoro = false;
    this.displayGoroAfterAnwer = true;

    this.InsertTemplate = (template)=>{
        template.appendChild(this.rootGoro)
    };
    this.SaveGoros = ()=>{
        var names = [];
        var goros = [];
        this.goroList.forEach((elem)=>{
            names.push(elem.name)
            goros.push(elem.goro)
        })
        localStorage.setItem("names", names)
        localStorage.setItem("goros", goros)
    };
    this.LoadGoros = ()=>{
        var strNames = localStorage.getItem("names")
        var strGoros = localStorage.getItem("goros")

        var completeGoros = []
        if (!(strNames == null || strNames == null)){
            var names = strNames.split(",")
            var goros = strGoros.split(",")

            if (names.length === goros.length){
                for (var i = 0;i < names.length; i++){
                    completeGoros.push({name: names[i],goro: goros[i]})
                }
            }
        }
        console.log("語呂がロードされました")
        console.log(completeGoros)
        return completeGoros;
    };
    this.goroList = this.LoadGoros();
    this.Add = (str)=>{
        this.goroList.push(str)
        if (this.autoSave){
            this.SaveGoros()
        }
        console.log("語呂が更新されました")
        console.log(str)
    };
    this.RemoveGoro = (num = null, name = null)=>{
        if (num != null){
            this.goroList.splice(num,1)
        }else if(name != null){
            var index = this.goroList.indexOf(name)
            this.goroList.splice(index, 1)
        }
    }
    this.Get = (str)=>{
        var getGoro = this.goroList.find((goro)=>goro.name === str)
        if (getGoro === undefined){
            return "未設定"
        }else if(getGoro === ""){
            return "空白"
        }
        return getGoro.goro
    }
    this.OutputDoc = (str)=>{
        this.output.innerText = "語呂:" + this.Get(str)
    }
    this.Set = (newName, newGoro)=>{
        if (newGoro != ''){
            var newGoro = {name: newName,goro: newGoro}
            var previousGoro = this.goroList.find((elem)=> elem.name === newGoro.name)
            if (previousGoro === undefined){
                this.Add(newGoro)
            }else{
                this.RemoveGoro(null,previousGoro)
                this.Add(newGoro)
            }
            this.OutputDoc(newName)
        }
    }
    this.SendGoro = (ques, newGoro)=>{
        this.Set(ques.now.name, newGoro)
        goro.input.value = ""
    }
    this.SetClickSendEvent = (ques)=>{
        this.sendButton.addEventListener("click", ()=>{
            this.SendGoro(ques, this.input.value)
        })
    }

    this.rootGoro.appendChild(this.output)
    this.rootGoro.appendChild(this.input)
    this.rootGoro.appendChild(this.sendButton)
    
    this.InsertTemplate(thisTemplate)
    this.SetClickSendEvent(parentQues)

    if (this.displayGoro){
        this.output.style.display = "block"
    }else{
        console.log("ゴロは非表示")
        this.output.style.display = "none"
    }
}
var goroSec = document.getElementById("goros")
var goro = new Goro(goroSec, ques)

/*
選ばれるものの重なりを無くすためのクラス（オブジェクト）
lengthには、autoSetがfalseの場合、lengthは、
いくつまで重なりを許さないか、
autoSetがtrueの場合、lengthRateByAutoの数の割合のlength、が
lengthになる
*/
function RecentAns(length){
    this.maxlen = length;
    var thisList = []

    for (let i = 1;i <= this.maxlen; i++){
        thisList.push(null)
    }
    this.list = thisList;

    this.AddElem = (str)=>{
        for (let i = this.maxlen-1; i > 0; i--){
            this.list[i] = this.list[i-1]
        }
        this.list[0] = str
    };
    this.GetIndex = (index)=>{
        return this.list[index]
    };
    this.SimilarIs = (name)=>{
        return this.list.indexOf(name) != -1;
    };
    this.FindNonSelected = (foundList)=>{
        return foundList.filter((elem) => !this.SimilarIs(elem));
    }
    this.FindSelected = (foundList)=>{
        return foundList.filter((elem) => this.SimilarIs(elem));
    }
}
//変更します↓
ques.recentAns = new RecentAns(3)
//ques定義↑



function MakeQues(name,year){
    ques.title.innerText = name;
    var strYear = year.toString()
    if (year >= 0){
        if (year >= 1000){
            var viewYe = strYear[0] + strYear[1]
            ques.word.innerText = viewYe

            var NextQuesAnswer = year - Number(viewYe) * 100
            if (NextQuesAnswer < 10){
                NextQuesAnswer = "0" + NextQuesAnswer
            }
            ques.answer.innerText = NextQuesAnswer;
        }else{
            ques.answer.innerText = year
        }
        ques.word.appendChild(ques.form)
        ques.word.innerHTML += "年"

        //語呂を表示させる
        goro.OutputDoc(name)
    }
}

//trueが正解 ちなみに自動
function CheckTheAnswer(writtenYear,goro,ques){
    var correct = false
    if (writtenYear === ques.answer.innerText){
        correct = true
    }else{
        correct = false
    }
    
    if (correct){
        result.innerText = "正解！〇"
    }else{
        result.innerText = "不正解✕..."
    }

    if (goro.displayGoroAfterAnwer){
        goro.output.style.display = "block"
    }else{
        goro.output.style.display = "none"
    }
    if (ques.displayAnswerAfterCheck){
        ques.answer.style.display = "block"
    }
    else{
        ques.answer.style.display = "none"
    }

    return correct
}

//オープンソース（ランダムな数）
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}

//問題を更新する
function UpdateYourAns(ques, goro, yearfrom, yearto){
    var quesesList = SelectEvents("",yearfrom, yearto,[])

    //もっと一般化する可能性あり（すでに選ばれているものを選ばない）
    var nonRecentQues = ques.recentAns.FindNonSelected(quesesList)

    var randomNum = getRandomInt(0, nonRecentQues.length)
    ques.now = nonRecentQues[randomNum]

    ques.recentAns.AddElem(ques.now)

    ques.result.innerText = ""

    if (ques.now == undefined){
        alert("選べる問題がありません。年号を確認等してください。")
    }else{
        MakeQues(ques.now.name,ques.now.year)
    }
    

    if (goro.displayGoroAfterAnwer){
        goro.output.style.display = "none"
    }
    if (goro.displayGoro){
        goro.output.style.display = "block"
    }

    if (ques.displayAnswerAfterCheck){
        ques.answer.style.display = "none"
    }
    if (ques.displayAnswer){
        ques.answer.style.display = "block"
    }
}

//回答を読み取る
//正解,不正解画面を作る
function SendYourAns(){
    var writtenYear = document.getElementById("answerInput").value;
    if (CheckTheAnswer(writtenYear, goro, ques)){
        setTimeout(() => {
            UpdateYourAns(ques, goro, ques.yearfrom, ques.yearto)
        }, ques.correctWaitTime);
    }
}

UpdateYourAns(ques, goro, ques.yearfrom, ques.yearto)