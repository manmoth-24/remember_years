var events = [
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
    {name: "秀吉が朝鮮侵略を始める（文禄の役）。", year: 1592}
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

            ques.answer.innerText = year - Number(viewYe) * 100
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

    MakeQues(ques.now.name,ques.now.year)

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
            UpdateYourAns(ques, goro, 0, 2024)
        }, ques.correctWaitTime);
    }
}

UpdateYourAns(ques, goro, 0,2024)