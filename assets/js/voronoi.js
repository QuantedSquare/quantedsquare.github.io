(function($) {
	let animationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    let _t = null;

	const canvas = d3.select("#voronoi").node();
	const context = canvas.getContext("2d");

	let nbPoints = 100;

	$(window).on('load', function() {

		let width = canvas.offsetWidth,
			height = canvas.offsetHeight;

		canvas.width = width;
		canvas.height = height;

		let animationSpeed = 0.1;

		let points = Array.from({length: nbPoints}, () => [Math.random() * width, Math.random() * height]);

		function animate (progress) {
			for (var i = 0; i < points.length/10; i++) {
				if(i < 5) {
					points[i][0] += animationSpeed*progress;
					points[i][1] += animationSpeed*progress;
				} else if(i < 10) {
					points[i][0] += animationSpeed*progress;
					points[i][1] -= animationSpeed*progress;
				} else if(i < 15) {
					points[i][0] += animationSpeed*progress;
					points[i][1] -= animationSpeed*progress;
				} else {
					points[i][0] -= animationSpeed*progress;
					points[i][1] -= animationSpeed*progress;
				}

				if(points[i][0] > width+10) points[i][0] = 0;
				if(points[i][0] < -10) points[i][0] = width;
				if(points[i][1] > height+10) points[i][1] = 0;
				if(points[i][1] < -10) points[i][1] = height;
			}

		}

		function draw (timestamp) {
			if (_t === null) _t = timestamp;
    
		    let progress = timestamp - _t;
		    
		    animate(progress);
		    
		    _t = timestamp;

			const delaunay = new d3.Delaunay.from(points);
    		const voronoi = delaunay.voronoi([0.5, 0.5, width - 0.5, height - 0.5]);

    		context.clearRect(0, 0, width, height);

		    context.beginPath();
		    voronoi.render(context);
		    voronoi.renderBounds(context);
		    context.strokeStyle = "#FFF";
		    context.lineWidth = 2;
		    context.stroke();

		    animationFrame(draw)
		}

		animationFrame(draw);		

		canvas.onmousemove = event => {
		    event.preventDefault();
		    points[points.length-1] = [event.layerX, event.layerY];
		};

	});
})(jQuery);