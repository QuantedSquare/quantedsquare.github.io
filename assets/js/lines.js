(function($) {
	const svg = d3.select("#lines");

	function getRandomData () {
		var data = [];

		for (var i = 0; i <= nbPoints; i++) {
			data.push({
				x: i,
				y: Math.round(Math.random()*600 + 200)
			});
		}

		return data;
	}

	function setRandomY (point) {
		point.y += Math.round(Math.random()*100)-50;

		if(point.y > 800) point.y -= 100;
		if(point.y < 200) point.y += 100;
	}

	var nbPoints = 20,
		nbLines = 2,
		transitionTime = 1000;

	// console.log(data[0], y(data[0].y));

	$(window).on('load', function() {
		let width = svg.node().width.baseVal.value,
			height = svg.node().height.baseVal.value;

		// console.log(width, height);

	    const margin = {top: 50, right: 0, bottom: 50, left: 0};

		let x = d3.scaleLinear()
	    	.domain([0, nbPoints])
	    	.range([margin.left, width - margin.right]);

	    let y = d3.scaleLinear()
	    	.domain([0, 1000])
	    	.range([height - margin.bottom, margin.top]);

	    const lineDrawer = d3.line()
	    	.curve(d3.curveBasis)
		    .x(d => x(d.x))
		    .y(d => y(d.y));

		 var lines = [];

		 for (var i = 0; i < nbLines; i++) {
		 	var data = getRandomData();

		 	lines.push({
		 		data: data,
		 		svgPath: svg.append("path")
			      	.datum(data)
			      	.attr("fill", "none")
			      	.attr("stroke", "white")
			      	.attr("stroke-width", 2)
			      	.attr("stroke-linejoin", "round")
			      	.attr("stroke-linecap", "round")
			    	.attr("d", lineDrawer)
				})
		 }

		 $(window).resize(function () {
	    	width = svg.node().width.baseVal.value,
			height = svg.node().height.baseVal.value;

			x.range([margin.left, width - margin.right]);
			y.range([height - margin.bottom, margin.top]);

			for (var i = 0; i < lines.length; i++) {
				lines[i].svgPath.datum(lines[i].data)
					.transition().duration(0)
					.attr("d", lineDrawer);
			}
	    });

		 // Animation
		 function animate () {
		 	for (var i = 0; i < lines.length; i++) {
	    		var line = lines[i];

	    		for (var j = line.data.length - 1; j >= 0; j--) {
	    			setRandomY(line.data[j])
	    		}
	    		// setRandomY(line.data[Math.round(Math.random()*nbPoints)]);

		    	line.svgPath.datum(line.data).transition().duration(transitionTime)
		    		.ease(d3.easeLinear) // Good with transition duration 2000ms
		    		// .ease(d3.easeCircle) // Fun with transition duration 1000ms
		    		// .ease(d3.easeElastic) // Eletric à 100ms
		    		.attr("d", lineDrawer);
	    	}
		 }

		 animate();

	    setInterval(animate, transitionTime);

	    // MouseOver
	    let overEventActive = true;

	    svg.on("mousemove", function () {
	    	if(overEventActive) {
	    		overEventActive = false;
		    	var coords = d3.mouse(this);

		    	for (var i = 0; i < lines.length; i++) {
		    		var line = lines[i];

		    		var point = line.data[Math.round((coords[0]/width)*nbPoints)];

		    		// console.log(point.x);

		    		if(coords[1] > height/2) {
		    			point.y -= 200;
		    		} else point.y += 200;
		    		// setRandomY(line.data[Math.round(Math.random()*nbPoints)]);

			    	line.svgPath.datum(line.data).transition().duration(transitionTime)
			    		// .ease(d3.easeLinear) // Good with transition duration 2000ms
			    		// .ease(d3.easeCircle) // Fun with transition duration 1000ms
			    		.ease(d3.easeElastic) // Eletric à 100ms
			    		.attr("d", lineDrawer)
			    		// .on("end", function () {
			    		// 	animate();
			    		// })
		    	}

		    	setTimeout(function() {
		    		overEventActive = true;
		    	}, 50);
		    }
	    })
	});
})(jQuery);