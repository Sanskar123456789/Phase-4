var c=0;

var list = [];

function createoption(o1,o2,o3,o4,qid){
    let optionString = `
    <div class="options" id="${qid}">
    <input type="radio" id="op1" name="option" value="${o1}">
    <label for="op1">${o1}</label><br>
    <input type="radio" id="op1" name="option" value="${o2}">
    <label for="op1">${o2}</label><br>
    <input type="radio" id="op1" name="option" value="${o3}">
    <label for="op1">${o3}</label><br>
    <input type="radio" id="op1" name="option" value="${o4}">
    <label for="op1">${o4}</label><br>
    </div><br>
    <input type="button" id="submit" onclick="submit(${qid})" value="submit">
    `
    return optionString
}

var quest= [
    {
        Question:"Who is the president of india",
        Option1:"red",
        Option2:"b",
        Option3:"c",
        Option4:"d",
        answer:"c"
    },
    {
        Question:"Who is the prime minister on india",
        Option1:"blue",
        Option2:"b",
        Option3:"c",
        Option4:"d",
        answer:"c"
    },
    {
        Question:"Biggest Ocean is",
        Option1:"a",
        Option2:"b",
        Option3:"c",
        Option4:"d",
        answer:"c"
    }
];

function start(){
    let a = document.getElementById("start");
    a.style.display="none";
    let b = document.getElementById("ques");
    b.style.display="block";
    let d = document.getElementById("button");
    d.style.display="block";
    b.innerHTML="Question <br>" + quest[c].Question +"<br>" + createoption(quest[c].Option1,quest[c].Option2,quest[c].Option3,quest[c].Option4,c);
    
}

function previous(){
    if(c == 0){
        alert("This is 1st Question");
    }else{
        let b = document.getElementById("ques");
        c--;
        b.innerHTML="Question <br>" + quest[c].Question +"<br>" + createoption(quest[c].Option1,quest[c].Option2,quest[c].Option3,quest[c].Option4,c);
    }
}

function next(){
    if(c == quest.length){
        alert("This is last Question");
    }else{
        let b = document.getElementById("ques");
        c++;
        b.innerHTML="Question <br>" + quest[c].Question +"<br>" + createoption(quest[c].Option1,quest[c].Option2,quest[c].Option3,quest[c].Option4,c);
    }
}

function submit(id){
    let pre = false;
    let sel = document.querySelector('input[type="radio"]:checked')
    if(list.length==0){
        let obj = {
            "q":id,
            "selectedans":sel.value
        };

        list.push(obj);
    }else{
        list.map(item=>{
            if(item.q==id){
                item.selectedans = sel.value;
                pre = true;
            }
        })
        if(!pre){
            let obj = {
                "q":id,
                "selectedans":sel.value
            };
            list.push(obj);
        }
        
    }
    console.log(id,list);
}

function done(){
    let points = 0;
    list.map(item=>{
        if(item.selectedans == quest[item.q].answer){
            points = points + 4;
        }else{
            points = points -1;
        }
    })
    let a = document.getElementById("start");
    a.style.display="none";
    let b = document.getElementById("ques");
    b.style.display="none";
    let d = document.getElementById("button");
    d.style.display="none";

    let e = document.getElementById("res");
    e.style.display="block";
    e.innerHTML = `<h3>Thankyou your result is ${points}</h3><br> <input type="button" id="reset" onclick="reset()" value="reset">`;
}

function reset() {
    c=0;
    list = [];
    let a = document.getElementById("start");
    a.style.display="block";
    let b = document.getElementById("ques");
    b.style.display="none";
    let d = document.getElementById("button");
    d.style.display="none";
    let e = document.getElementById("res");
    e.style.display="none";
}