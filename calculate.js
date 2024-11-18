//const items = [1,"Milk 1.23"];
const items = [2,"Milk  1.23", "coupon  -.22"];
let sum = 0;
console.log(items);
for(let i = 1; i<= items[0]; i++){
    const firstWords = items[i].split(" ");
    sum += Number(firstWords[1]);   
    let y = i+1;
    if(y < items.length){
        const secondWords = items[y].split("    ");
        // console.log(firstWords);
        if(secondWords[0] == "coupon"){
            sum += Number(secondWords[1]);
        }
        i++;
    }
}
console.log(sum);