(function ($) {
	let animationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    let _t = null;

	const canvas = d3.select("#map").node();
	const context = canvas.getContext("2d");

	$(window).on('load', function() {
		let width = canvas.offsetWidth,
			height = canvas.offsetHeight;

		canvas.width = width;
		canvas.height = height;

		d3.json("https://unpkg.com/world-atlas@1/world/50m.json").then(function (world) {
			let land = topojson.feature(world, world.objects.land),
				graticule = d3.geoGraticule10(),
				sphere = ({type: "Sphere"}),
				rotation = [110, -40];

			let projection = d3.geoOrthographic()
				.rotate(rotation)
    			.translate([width/2 +100, height/2 +25])
    			.fitExtent([[2, 1], [width - 50, height - 50]], sphere)
    			.precision(0.1);

    		const path = d3.geoPath(projection, context);

    		function animate (progress) {
    			rotation[0] += 0.01*progress;
    			projection.translate([(width/2) + (width/5), height/2])
    				.rotate(rotation);
    		}

    		function draw (timestamp) {
    			if (_t === null) _t = timestamp;
    
			    let progress = timestamp - _t;
			    
			    animate(progress);
			    
			    _t = timestamp;

    			context.clearRect(0, 0, width, height);

    			context.beginPath();
    			path(graticule);
    			context.strokeStyle = "#FFF";
    			context.stroke();

  				context.beginPath();
  				path(land);
  				context.fillStyle = "#FFF";
  				context.fill();

  				context.beginPath();
  				path(sphere);
  				context.strokeStyle = "#FFF";
  				context.stroke();

  				animationFrame(draw)
    		}

    		animationFrame(draw)

    		// draw();
		});
	});
})(jQuery);