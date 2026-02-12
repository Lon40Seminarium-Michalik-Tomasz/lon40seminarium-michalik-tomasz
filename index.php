<!DOCTYPE html>
<html>  
<head>
    <meta charset="UTF-8"/>
    <title>Figury geometryczne</title>
    <link href="style.css" rel="stylesheet" type="text/css"/>
    <script src="funkcje.js"></script>
</head>

<body>
    <div id="container">
    <h1>Figury geometryczne</h1>
        <div id="fig1">
        <fieldset id="f1">
        <legend>Prostokąt</legend>
        <label for="pr_a">Długość boku a = </label></br>
        <input type="text" id="pr_a" name="pr_a"/></br>
        <label for="pr_b">Długość boku b =</label></br> 
        <input type="text" id="pr_b" name="pr_b"/></br>
        <input type="button" value="Oblicz" onclick="obliczPr();"/>

        </fieldset>
        
        </div>

    </div>


</body>
