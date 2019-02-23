var canvas = document.getElementById('drawBall');
var ctx= canvas.getContext('2d');
var raf;
var running =false;


var ball ={
    x :100,
    y: 100,
    vx:5,
    vy:2,
    radius:25,
    color:'blue',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}
function clear(){
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

 function draw(){
    clear();
    ball.draw();
    ball.x+=ball.vx;
    ball.y+=ball.vy;
    if(ball.x +ball.vx>canvas.width || ball.x+ball.vx<0){
        ball.vx = -ball.vx
    }
    if(ball.y+ball.vy >canvas.height || ball.y+ball.vy<0){
        ball.vy = -ball.vy
    }
    raf = window.requestAnimationFrame(draw)
} 

canvas.addEventListener('mousemove', function (e) {
    if(!running){
       
        clear();
        ball.x = e.clientX;
        ball.y = e.clientY;
       ball.draw()
    }
});

canvas.addEventListener('mouseout', function (e) {
    window.cancelAnimationFrame(raf);
    running = false;
    
});


canvas.addEventListener('click',function(e){
    if(!running){
     window.requestAnimationFrame(draw);
    running = true;

    }
});


ball.draw();
