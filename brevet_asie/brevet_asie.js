function calc(){
    let n = parseFloat(prompt("choisissez la valeur de n"))
    if (isFinite(n)){

        let step
        let score
        if (n > 15){
            step = 4 * n
            score = 100 - step
        } else {
            step = n + 10
            score = 2 * step
        }
        alert("suivant l'algorithme du brevet asie 2021, si n = " + n +", le résultat est " + score)
    } else {
        alert("Choisissez une valeur réel.")
    }
}