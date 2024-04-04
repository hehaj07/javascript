const nilai=prompt("Silahkan, masukan nilai kamu!")

let grade=""
if (nilai>=85){
grade="A"
}else if (nilai>=75){
    grade="B"
}else if (nilai>=65){
    grade="C"
}else if(nilai>=55){
grade="D"
}else {
    grade="E"
};
console.log("Anda mendapat "+grade)