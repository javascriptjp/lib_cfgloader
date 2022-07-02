# lib_cfgloader

Author: [@javascriptjp](https://github.com/javascriptjp)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K1AQ3A3)

## How to use?

```javascript
const load=path=>{
    const w=[];
    for(const i of require("fs").readFileSync(path,"utf8").replace(/\r/g,"").split("\n")){
        const[r,...a]=i.replace(/ /g,"").split("=");r.startsWith("##")||w.push({[r]:a});
    }return w
}
const config = load(<path>)
```

config.txt
```
test1 = test
test2 = test
##comment
test3 = test
```
```
[
  { test1: [ 'test' ] },
  { test2: [ 'test' ] },
  { test3: [ 'test' ] }
]
```
