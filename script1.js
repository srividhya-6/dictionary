let url='https://api.dictionaryapi.dev/api/v2/entries/en/';
let btn=document.querySelector("#search");
// console.dir(document.querySelector("#word"));
btn.addEventListener("click",async ()=>{
    let word=document.querySelector('#word').value;
    let list=document.querySelector("#list");
    let arr=await getword(word);
    list.innerText="";
    for(d of arr){
        let arr2=d.definitions;
        let li=document.createElement("li");
        li.innerText=d.partOfSpeech;
        let ul=document.createElement("ul");
        for(a of arr2){
        let li2=document.createElement("li");
        li2.innerText=a.definition;
        ul.appendChild(li2);
        }
        li.appendChild(ul);
        list.appendChild(li);
    }
})
async function getword(word){
    try{
        let res=await axios.get(url+word);
        
        return res.data[0].meanings;
    }catch(e){
        console.log(e);
        return [];
    }
}