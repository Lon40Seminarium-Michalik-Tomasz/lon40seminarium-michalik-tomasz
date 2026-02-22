function calcRectangle() {
    let a = Number(document.getElementById("rectA").value);
    let b = Number(document.getElementById("rectB").value);

    let area = a * b;
    let perimeter = 2 * (a + b);

    document.getElementById("rectResult").innerText =
        `Pole: ${area} | Obwód: ${perimeter}`;
}

function calcTriangle() {
    let a = Number(document.getElementById("triA").value);
    let h = Number(document.getElementById("triH").value);

    let area = (a * h) / 2;

    document.getElementById("triResult").innerText =
        `Pole: ${area}`;
}

function calcTrapezoid() {
    let a = Number(document.getElementById("trapA").value);
    let b = Number(document.getElementById("trapB").value);
    let h = Number(document.getElementById("trapH").value);

    let area = ((a + b) * h) / 2;

    document.getElementById("trapResult").innerText =
        `Pole: ${area}`;
}

function calcCircle() {
    let r = Number(document.getElementById("circleR").value);

    let area = Math.PI * r * r;
    let circumference = 2 * Math.PI * r;

    document.getElementById("circleResult").innerText =
        `Pole: ${area.toFixed(2)} | Obwód: ${circumference.toFixed(2)}`;
}