const load=path=>{
    const w=[];
    for(const i of require("fs").readFileSync(path,"utf8").replace(/\r/g,"").split("\n")){
        const[r,...a]=i.replace(/ /g,"").split("=");r.startsWith("##")||w.push({[r]:a});
    }return w
}
