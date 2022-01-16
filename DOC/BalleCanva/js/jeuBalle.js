    var mc;
    var gc;

function init(){
			var mc = document.querySelector("canvas");

			mc.width = window.innerWidth;
			mc.height = window.innerHeight;

			var gc = mc.getContext('2d');

						
								/*spawn*/
			var x = Math.floor(Math.random() * innerWidth);
			var y = Math.floor(Math.random() * innerHeight);
								/*vitesse anglechute (+1 pour que la balle ne bouve pas que de façon horizontal ou vertical)*/
			var vx = Math.floor(Math.random() * 30)+1;
			var vy = Math.floor(Math.random() * 30)+1;
			var radius = 10;

			animer();
		
			function animer() {
				requestAnimationFrame(animer);

				gc.clearRect(0, 0, innerWidth, innerHeight);
				var img=new Image();
    			img.src="img/Balle.png";
    			gc.drawImage(img,x,y);

				/*rebond (+150 a cause de la taille de l'image)*/
				if (radius + x + 150> innerWidth)
					vx = 0 - vx;

				if (x - radius < 0)
					vx = 0 - vx;

				if (y + radius + 150 > innerHeight)
					vy = 0 - vy;

				if (y - radius < 0)
					vy = 0 - vy;

				x = x + vx;
				y = y + vy;

			}
}
