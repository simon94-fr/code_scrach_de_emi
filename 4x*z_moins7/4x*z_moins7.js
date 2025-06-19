function f() {
    let x = parseFloat(prompt("Choisissez x"));
    if (isFinite(x)) {
        let z = parseFloat(prompt("Choisissez z"));
        if (isFinite(z)) {
            let x2 = 4 * x;
            let z2 = z - 7;
            let result = x2 * z2;
            alert("Avec cet x et ce z, 4x(z - 7) = " + result);
        } else {
            alert("Valeur de z invalide. Veuillez entrer un nombre.");
        }
    } else {
        alert("Valeur de x invalide. Veuillez entrer un nombre.");
    }
}