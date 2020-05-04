function clickX(x,y)
{
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;

    ctx.moveTo(x+20,y+20);
    ctx.lineTo(x-20,y-20);
    ctx.moveTo(x-20,y+20);
    ctx.lineTo(x+20,y-20);
    ctx.stroke();
    document.getElementById("zone1").style.visibility = "hidden";
};

function clickO(x,y)
{
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();


    document.getElementById("zone1").style.visibility = "hidden";
}