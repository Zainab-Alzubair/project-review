function utopianTree(n) {
    let h = 1;
    if(n == 0){
        return h
    }
    for(let i = 1; i <= n; i++){
        if(i%2 == 0){
            h++;
        }else{
            h*=2;
        }
    }
    return h;
}
console.log(utopianTree())