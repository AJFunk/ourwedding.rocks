var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// set starting values
var m = 60;
var n =55;
var fps = 40;
var percent = 0
var direction = 1;
var mileage = 1295;
if(mileage < 760){
    endpoint = 0;//Redwood
} else if(mileage < 1294){
    endpoint = 25;//Reno
} else if(mileage < 1845){
    endpoint = 50;//Salt Lake
} else if(mileage < 2378){
    endpoint = 75;//Denver
} else if(mileage < 2563){
    endpoint = 100;//Billings
} else if(mileage < 3000){
    endpoint = 125;//Calgary
} else if(mileage < 3700){
    endpoint = 150;//Edmonton
} else if(mileage < 4200){
    endpoint = 175;//Fort Nelson
} else if(mileage < 4751){
    endpoint = 200;//White horse
} else if(mileage < 5000){
    endpoint = 225;//fairbanks
} else if(mileage < 6565) {
    endpoint = 250;//ancorage
} else if(mileage < 7144) {
    endpoint = 275;//prince george
} else if(mileage < 7285) {
    endpoint = 300;//vancouver
} else if(mileage < 7400) {
    endpoint = 325;//seattle
} else if(mileage < 8000) {
    endpoint = 350;//portland
} else {
    endpoint = 375;//end
}

setUp();
    

// Start animation on click
$( document ).ready(function() {
    $( "#start" ).click(function() {
      animate();
    });
});


function animate() {

    // set the animation position (0-400)
    percent += direction;
    if (percent < 0) {
        percent = 0;
        direction = 1;
    };
    if (percent > endpoint) {
        direction = 0;
        message(endpoint);
        return;
    };

    draw(percent);

    // request another frame
    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}


// draw the current frame based on sliderValue
function draw(sliderValue) {

    // redraw path
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(302, 383);
    ctx.quadraticCurveTo(313, 363, 342, 365);
    ctx.strokeStyle = '#F07677';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(342, 365);
    ctx.quadraticCurveTo(360, 350, 390, 365);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(390, 365);
    ctx.quadraticCurveTo(420, 350, 445, 378);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(445, 378);
    ctx.quadraticCurveTo(460, 350, 415, 315);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(415, 315);
    ctx.lineTo(375, 250); 
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(375, 250);
    ctx.lineTo(380, 205);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(380, 205);
    ctx.lineTo(295, 155);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(295, 155);
    ctx.quadraticCurveTo(270, 160, 223, 130);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(223, 130);
    ctx.quadraticCurveTo(200, 130, 132, 70);
    ctx.stroke();
    //KSDHJFSKDJF
    ctx.beginPath();
    ctx.moveTo(132, 70);
    ctx.lineTo(135, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(135, 150);
    ctx.bezierCurveTo(280, 80, 200, 200, 280, 230);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 230);
    ctx.quadraticCurveTo(300, 250, 300, 280);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 280);
    ctx.lineTo(302, 308);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(302, 308);
    ctx.lineTo(300, 330);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 330);
    ctx.lineTo(302, 383);
    ctx.stroke();

    //Cities
    ctx.fillStyle = '#F07677';
    //Redwood City, CA
    ctx.beginPath();
    ctx.arc(302,383,8,0,2*Math.PI);
    ctx.fill();
    //Reno, NV
    ctx.beginPath();
    ctx.arc(342,365,8,0,2*Math.PI);
    ctx.fill();
    //Salt Lake City
    ctx.beginPath();
    ctx.arc(390,365,8,0,2*Math.PI);
    ctx.fill();
    //Denver
    ctx.beginPath();
    ctx.arc(445,378,8,0,2*Math.PI);
    ctx.fill();
    //Billings
    ctx.beginPath();
    ctx.arc(415,315,8,0,2*Math.PI);
    ctx.fill();
    //Calgary
    ctx.beginPath();
    ctx.arc(375,250,8,0,2*Math.PI);
    ctx.fill();
    //Edmonton
    ctx.beginPath();
    ctx.arc(380,205,8,0,2*Math.PI);
    ctx.fill();
    //Fort Nelson
    ctx.beginPath();
    ctx.arc(295,155,8,0,2*Math.PI);
    ctx.fill();
    //White Horse
    ctx.beginPath();
    ctx.arc(223,130,8,0,2*Math.PI);
    ctx.fill();
    //Fairbanks
    ctx.beginPath();
    ctx.arc(132,70,8,0,2*Math.PI);
    ctx.fill();
    //Anchorage
    ctx.beginPath();
    ctx.arc(135,150,8,0,2*Math.PI);
    ctx.fill();
    //Prince George
    ctx.beginPath();
    ctx.arc(280,230,8,0,2*Math.PI);
    ctx.fill();
    //Vancouver
    ctx.beginPath();
    ctx.arc(300,280,8,0,2*Math.PI);
    ctx.fill();
    //Seattle
    ctx.beginPath();
    ctx.arc(302,308,8,0,2*Math.PI);
    ctx.fill();
    //Portland
    ctx.beginPath();
    ctx.arc(300,330,8,0,2*Math.PI);
    ctx.fill();

    //Cities
    ctx.fillStyle = 'white';
    //Redwood City, CA
    ctx.beginPath();
    ctx.arc(302,383,5,0,2*Math.PI);
    ctx.fill();
    //Reno, NV
    ctx.beginPath();
    ctx.arc(342,365,5,0,2*Math.PI);
    ctx.fill();
    //Salt Lake City
    ctx.beginPath();
    ctx.arc(390,365,5,0,2*Math.PI);
    ctx.fill();
    //Denver
    ctx.beginPath();
    ctx.arc(445,378,5,0,2*Math.PI);
    ctx.fill();
    //Billings
    ctx.beginPath();
    ctx.arc(415,315,5,0,2*Math.PI);
    ctx.fill();
    //Calgary
    ctx.beginPath();
    ctx.arc(375,250,5,0,2*Math.PI);
    ctx.fill();
    //Edmonton
    ctx.beginPath();
    ctx.arc(380,205,5,0,2*Math.PI);
    ctx.fill();
    //Fort Nelson
    ctx.beginPath();
    ctx.arc(295,155,5,0,2*Math.PI);
    ctx.fill();
    //White Horse
    ctx.beginPath();
    ctx.arc(223,130,5,0,2*Math.PI);
    ctx.fill();
    //Fairbanks
    ctx.beginPath();
    ctx.arc(132,70,5,0,2*Math.PI);
    ctx.fill();
    //Anchorage
    ctx.beginPath();
    ctx.arc(135,150,5,0,2*Math.PI);
    ctx.fill();
    //Prince George
    ctx.beginPath();
    ctx.arc(280,230,5,0,2*Math.PI);
    ctx.fill();
    //Vancouver
    ctx.beginPath();
    ctx.arc(300,280,5,0,2*Math.PI);
    ctx.fill();
    //Seattle
    ctx.beginPath();
    ctx.arc(302,308,5,0,2*Math.PI);
    ctx.fill();
    //Portland
    ctx.beginPath();
    ctx.arc(300,330,5,0,2*Math.PI);
    ctx.fill();

    // draw the tracking rectangle
    var xy;
    if (sliderValue < 25) {
        var percent = (sliderValue ) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 302,
            y: 383
        }, {
            x: 313,
            y: 363
        }, {
            x: 342,
            y: 365
        }, percent);
    } else if (sliderValue < 50) {
        var percent = (sliderValue - 25) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 342,
            y: 365
        }, {
            x: 360,
            y: 350
        }, {
            x: 390,
            y: 365
        }, percent);
    } else if (sliderValue < 75) {
        var percent = (sliderValue - 50) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 390,
            y: 365
        }, {
            x: 420,
            y: 350
        }, {
            x: 445,
            y: 378
        }, percent);
    } else if (sliderValue < 100) {
        var percent = (sliderValue - 75) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 445,
            y: 378
        }, {
            x: 460,
            y: 350
        }, {
            x: 415,
            y: 315
        }, percent);
    } else if (sliderValue < 125) {
        var percent = (sliderValue - 100) / 25
        xy = getLineXYatPercent({
            x: 415,
            y: 315
        }, {
            x: 375,
            y: 250
        }, percent);
    } else if (sliderValue < 150) {
        var percent = (sliderValue - 125) / 25
        xy = getLineXYatPercent({
            x: 375,
            y: 250
        }, {
            x: 380,
            y: 205
        }, percent);
    } else if (sliderValue < 175) {
        var percent = (sliderValue - 150) / 25
        xy = getLineXYatPercent({
            x: 380,
            y: 205
        }, {
            x: 295,
            y: 155
        }, percent);
    } else if (sliderValue < 200) {
        var percent = (sliderValue - 175) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 295,
            y: 155
        }, {
            x: 270,
            y: 160
        }, {
            x: 223,
            y: 130
        }, percent);
    } else if (sliderValue < 225) {
        var percent = (sliderValue - 200) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 223,
            y: 130
        }, {
            x: 200,
            y: 130
        }, {
            x: 132,
            y: 70
        }, percent);
    }  else if (sliderValue < 250) {
        var percent = (sliderValue - 225) / 25
        xy = getLineXYatPercent({
            x: 132,
            y: 70
        }, {
            x: 135,
            y: 150
        }, percent);
    }  else if (sliderValue < 275) {
        var percent = (sliderValue - 250) / 25
        xy = getCubicBezierXYatPercent({
            x: 135,
            y: 150
        }, {
            x: 280,
            y: 80
        }, {
            x: 200,
            y: 200
        }, {
            x: 280,
            y: 230
        }, percent);
    }  else if (sliderValue < 300) {
        var percent = (sliderValue - 275) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 280,
            y: 230
        }, {
            x: 300,
            y: 250
        }, {
            x: 300,
            y: 280
        }, percent);
    }  else if (sliderValue < 325) {
        var percent = (sliderValue - 300) / 25
        xy = getLineXYatPercent({
            x: 300,
            y: 280
        }, {
            x: 302,
            y: 308
        }, percent);
    }  else if (sliderValue < 350) {
        var percent = (sliderValue - 325) / 25
        xy = getLineXYatPercent({
            x: 302,
            y: 308
        }, {
            x: 300,
            y: 330
        }, percent);
    }  else {
        var percent = (sliderValue - 350) / 25
        xy = getLineXYatPercent({
            x: 300,
            y: 330
        }, {
            x: 302,
            y: 383
        }, percent);
    }

    drawRect(xy, "yellow");

}

 
// draw RV Image
function drawRect(point, color) {

    ctx.beginPath();
    var imageObj = new Image();
    imageObj.src = 'img/rv.png';
    ctx.drawImage(imageObj, point.x - 70, point.y - 50);
}

// draw tracking dot at xy
function drawDot(point, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// line: percent is 0-1
function getLineXYatPercent(startPt, endPt, percent) {
    var dx = endPt.x - startPt.x;
    var dy = endPt.y - startPt.y;
    var X = startPt.x + dx * percent;
    var Y = startPt.y + dy * percent;
    return ({
        x: X,
        y: Y
    });
}

// quadratic bezier: percent is 0-1
function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
    var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
    var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
    return ({
        x: x,
        y: y
    });
}

// cubic bezier percent is 0-1
function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
    var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
        x: x,
        y: y
    });
}

// cubic helper formula at percent distance
function CubicN(pct, a, b, c, d) {
    var t2 = pct * pct;
    var t3 = t2 * pct;
    return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
}

function message(endpoint){
    ctx.fillStyle = '#F07677';
    ctx.font="20px Arial";
    if(endpoint < 25){
        ctx.fillText("We are in Redwood City!",280,50);
        ctx.fillText("Help us get to Reno!",300,75);
    } else if (endpoint == 25){
        ctx.fillText("We are in Reno!",280,50);
        ctx.fillText("Help us get to Salt Lake City!",230,75);
    } else if (endpoint == 50){
        ctx.fillText("We are in Salt Lake City!",280,50);
        ctx.fillText("Help us get to Denver!",290,75);
    } else if (endpoint == 75){
        ctx.fillText("We are in Denver!",280,50);
        ctx.fillText("Help us get to Billings!",260,75);
    } else if (endpoint == 100){
        ctx.fillText("We are in Billings!",280,50);
        ctx.fillText("Help us get to Calgary!",260,75);
    } else if (endpoint == 125){
        ctx.fillText("We are in Calgary!",280,50);
        ctx.fillText("Help us get to Edmonton!",250,75);
    } else if (endpoint == 150){
        ctx.fillText("We are in Edmonton!",280,50);
        ctx.fillText("Help us get to Fort Nelson!",270,75);
    } else if (endpoint == 175){
        ctx.fillText("We are in Fort Nelson!",280,50);
        ctx.fillText("Help us get to White Horse!",250,75);
    } else if (endpoint == 200){
        ctx.fillText("We are in White Horse!",280,50);
        ctx.fillText("Help us get to Fairbanks!",270,75);
    } else if (endpoint == 225){
        ctx.fillText("We are in Fairbanks!",280,50);
        ctx.fillText("Help us get to Anchorage!",250,75);
    } else if (endpoint == 250){
        ctx.fillText("We are in Anchorage!",280,50);
        ctx.fillText("Help us get to Prince George!",240,75);
    } else if (endpoint == 275){
        ctx.fillText("We are in Prince George!",270,50);
        ctx.fillText("Help us get to Vancouver!",270,75);
    } else if (endpoint == 300){
        ctx.fillText("We are in Vancouver!",272,50);
        ctx.fillText("Help us get to Seattle!",270,75);
    } else if (endpoint == 325){
        ctx.fillText("We are in Seattle!",280,50);
        ctx.fillText("Help us get to Portland!",260,75);
    } else if (endpoint == 350){
        ctx.fillText("We are in Portland!",280,50);
        ctx.fillText("Help us get home!",287,75);
    } else if (endpoint == 375){
        ctx.fillText("Our trip is complete!",280,50);
        ctx.fillText("Thank you for helping!",270,75);
    }

    $( "#start" ).hide();



}

function setUp(){


    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(302, 383);
    ctx.quadraticCurveTo(313, 363, 342, 365);
    ctx.strokeStyle = '#F07677';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(342, 365);
    ctx.quadraticCurveTo(360, 350, 390, 365);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(390, 365);
    ctx.quadraticCurveTo(420, 350, 445, 378);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(445, 378);
    ctx.quadraticCurveTo(460, 350, 415, 315);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(415, 315);
    ctx.lineTo(375, 250); 
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(375, 250);
    ctx.lineTo(380, 205);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(380, 205);
    ctx.lineTo(295, 155);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(295, 155);
    ctx.quadraticCurveTo(270, 160, 223, 130);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(223, 130);
    ctx.quadraticCurveTo(200, 130, 132, 70);
    ctx.stroke();
    //KSDHJFSKDJF
    ctx.beginPath();
    ctx.moveTo(132, 70);
    ctx.lineTo(135, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(135, 150);
    ctx.bezierCurveTo(280, 80, 200, 200, 280, 230);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 230);
    ctx.quadraticCurveTo(300, 250, 300, 280);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 280);
    ctx.lineTo(302, 308);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(302, 308);
    ctx.lineTo(300, 330);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 330);
    ctx.lineTo(302, 383);
    ctx.stroke();

    //Cities
    ctx.fillStyle = '#F07677';
    //Redwood City, CA
    ctx.beginPath();
    ctx.arc(302,383,8,0,2*Math.PI);
    ctx.fill();
    //Reno, NV
    ctx.beginPath();
    ctx.arc(342,365,8,0,2*Math.PI);
    ctx.fill();
    //Salt Lake City
    ctx.beginPath();
    ctx.arc(390,365,8,0,2*Math.PI);
    ctx.fill();
    //Denver
    ctx.beginPath();
    ctx.arc(445,378,8,0,2*Math.PI);
    ctx.fill();
    //Billings
    ctx.beginPath();
    ctx.arc(415,315,8,0,2*Math.PI);
    ctx.fill();
    //Calgary
    ctx.beginPath();
    ctx.arc(375,250,8,0,2*Math.PI);
    ctx.fill();
    //Edmonton
    ctx.beginPath();
    ctx.arc(380,205,8,0,2*Math.PI);
    ctx.fill();
    //Fort Nelson
    ctx.beginPath();
    ctx.arc(295,155,8,0,2*Math.PI);
    ctx.fill();
    //White Horse
    ctx.beginPath();
    ctx.arc(223,130,8,0,2*Math.PI);
    ctx.fill();
    //Fairbanks
    ctx.beginPath();
    ctx.arc(132,70,8,0,2*Math.PI);
    ctx.fill();
    //Anchorage
    ctx.beginPath();
    ctx.arc(135,150,8,0,2*Math.PI);
    ctx.fill();
    //Prince George
    ctx.beginPath();
    ctx.arc(280,230,8,0,2*Math.PI);
    ctx.fill();
    //Vancouver
    ctx.beginPath();
    ctx.arc(300,280,8,0,2*Math.PI);
    ctx.fill();
    //Seattle
    ctx.beginPath();
    ctx.arc(302,308,8,0,2*Math.PI);
    ctx.fill();
    //Portland
    ctx.beginPath();
    ctx.arc(300,330,8,0,2*Math.PI);
    ctx.fill();

    //Cities
    ctx.fillStyle = 'white';
    //Redwood City, CA
    ctx.beginPath();
    ctx.arc(302,383,5,0,2*Math.PI);
    ctx.fill();
    //Reno, NV
    ctx.beginPath();
    ctx.arc(342,365,5,0,2*Math.PI);
    ctx.fill();
    //Salt Lake City
    ctx.beginPath();
    ctx.arc(390,365,5,0,2*Math.PI);
    ctx.fill();
    //Denver
    ctx.beginPath();
    ctx.arc(445,378,5,0,2*Math.PI);
    ctx.fill();
    //Billings
    ctx.beginPath();
    ctx.arc(415,315,5,0,2*Math.PI);
    ctx.fill();
    //Calgary
    ctx.beginPath();
    ctx.arc(375,250,5,0,2*Math.PI);
    ctx.fill();
    //Edmonton
    ctx.beginPath();
    ctx.arc(380,205,5,0,2*Math.PI);
    ctx.fill();
    //Fort Nelson
    ctx.beginPath();
    ctx.arc(295,155,5,0,2*Math.PI);
    ctx.fill();
    //White Horse
    ctx.beginPath();
    ctx.arc(223,130,5,0,2*Math.PI);
    ctx.fill();
    //Fairbanks
    ctx.beginPath();
    ctx.arc(132,70,5,0,2*Math.PI);
    ctx.fill();
    //Anchorage
    ctx.beginPath();
    ctx.arc(135,150,5,0,2*Math.PI);
    ctx.fill();
    //Prince George
    ctx.beginPath();
    ctx.arc(280,230,5,0,2*Math.PI);
    ctx.fill();
    //Vancouver
    ctx.beginPath();
    ctx.arc(300,280,5,0,2*Math.PI);
    ctx.fill();
    //Seattle
    ctx.beginPath();
    ctx.arc(302,308,5,0,2*Math.PI);
    ctx.fill();
    //Portland
    ctx.beginPath();
    ctx.arc(300,330,5,0,2*Math.PI);
    ctx.fill();


    var imageObj = new Image();
    imageObj.src = 'img/rv.png';
    imageObj.onload = function(){
        ctx.drawImage(imageObj, 302-90, 383-60);
    }
}