/*
Input:
Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera

Output:
tincidunt
*/

let s="Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera\n";

console.log(getPopular(s));

function getPopular(s) {
    let dict={};
    let max_stack=[];
    let max=1;
    let words=s.split(/[\s\r\n.,!?\(\)]+/);
    for (let i=0; i<words.length;i++) {
        //console.log(words[i]);
        if (words[i]=="") { continue; }
        if (dict[words[i]]) {
            dict[words[i]]+=1;
        } else {
            dict[words[i]]=1;
        }
        let c=dict[words[i]];
        //console.log("z:"+c);
        if (c==max) {
           max_stack.push(words[i]);
        } else if (c>max) {
            max=c;
            max_stack=[];
            max_stack.push(words[i]);
        }
    }
    if (max_stack.length==1) {return max_stack.pop();}
    return "---"
}