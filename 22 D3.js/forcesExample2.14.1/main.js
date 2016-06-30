
  var w = 900;
	var h = 840;
  var g = 0.05;
  var c = -800;
  var d = 275;

  var svg1 = d3.select(".forceBox1")
          .append("svg")
          .attr("viewBox", "0 0 " + w + " " + h )
          .attr("preserveAspectRatio", "xMidYMid meet");

  // var fill = d3.scale.category10();


//////////////////////////////////
		var dataset1 = {
			nodes:[
					{name1:"Who",name2:"am I?", color: "#FAF9F4", radius: 90,
              description: 'I am a French-Australian web developer who became passionate by web development lately. The 12 weeks fulltime course that I just did with General Assembly confirmed everything I thought: I am willing to become a web developer.<br><span class="whoAmIspan">Why did I decide to become a web developer?</span><br>I have been a civil engineer/project manager for the past 8 years. Looking for new challenges, I started to get involved in the start-up community. I even decided to start my own business: Value Your Time (www.valueyourtime.com.au).<br>But after few months I realised that I enjoy developing web solutions much more than every other aspect of the business. I heard about Web Development Bootcamp and decided to go to General Assembly Web Development Immersive Program.<br>That experience confirmed everything I thought: I am willing to become a web developer.'},

	        {name1:"Ex Civil",name2: "Engineer", color: "#52B4AF", radius: 70,
              description: "#"},
					{name1:"New Web",name2:"Developer", color: "rgb(183, 178, 224)", radius: 70,
              description: '<span class="whoAmIspan">What did I learn during the WDi program?</span><br>The WDi Program taught me the skills I need to kickstart my career as a web developer.<br>From programming fundamentals (HTML, CSS, JavaScript, jQuery, AJAX, Ruby) to launching full-stack web apps (Rails, Backbone.js, Bootstrap), I learned to solve problems with code while applying industry best practices in a collaborative environment  (Github, Heroku).'},

					{name1:"Project",name2:"Manager", color: "#B6DEDC", radius: 55,
              description: "#"},
					{name1:"Project",name2:"Engineer", color: "#B6DEDC", radius: 55,
              description: "#"},
          {name1:"Site",name2:"Engineer", color: "#B6DEDC", radius: 55,
              description: "#"},

          {name1:"Project 4",name2:"Final", color: "rgb(203, 170, 193)", radius: 55,
              description: 'Link to the application:<br><a class="webDevAtag" href="#" target="_blank">#</a> <br>Link to the code:<br><a class="webDevAtag" href="#" target="_blank">#</a>'},
          {name1:"Twitter Data",name2:"Visualisation", color: "rgb(203, 170, 193)", radius: 55,
              description: 'Link to the application:<br><a class="webDevAtag" href="#" target="_blank">#</a> <br>Link to the code:<br><a class="webDevAtag" href="https://github.com/cedricamoyal/project3group " target="_blank">https://github.com/cedricamoyal/project3group</a>'},
          {name1:"Travel",name2:"The World", color: "rgb(203, 170, 193)", radius: 55,
              description: 'Link to the application:<br><a class="webDevAtag" href="https://cedricproject2.herokuapp.com/login " target="_blank">https://cedricproject2.herokuapp.com/login</a> <br>Link to the code:<br><a class="webDevAtag" href="https://github.com/cedricamoyal/project2cedricheroku " target="_blank">https://github.com/cedricamoyal/project2cedricheroku</a>'},
          {name1:"Tic",name2:"Tac Toe", color: "rgb(203, 170, 193)", radius: 55,
              description: 'Link to the application:<br><a class="webDevAtag" href="http://cedricamoyal.github.io/Cedricwebsite " target="_blank">http://cedricamoyal.github.io/Cedricwebsite</a> <br>Link to the code:<br><a class="webDevAtag" href="https://github.com/cedricamoyal/Cedricwebsite " target="_blank">https://github.com/cedricamoyal/Cedricwebsite</a>'},

			],
			edges:[
					{source: 0, target: 1},
					{source: 0, target: 2},
					{source: 1, target: 3},
					{source: 1, target: 4},
          {source: 1, target: 5},
          {source: 2, target: 6},
          {source: 2, target: 7},
          {source: 2, target: 8},
          {source: 2, target: 9} ]
		};

		var force1 = d3.layout.force()
								.nodes(dataset1.nodes)
								.links(dataset1.edges)
								.size([w, h])
                .gravity(g)
                .charge(c)
                .linkDistance(d)
								.start();

		var edges1 = svg1.selectAll("line1")
						.data(dataset1.edges)
						.enter()
						.append("line")
            .attr('class', 'line1')
						.style("stroke", "#ccc")
						.style("stroke-width", 1);


    var $forceBoxText1 = $(".forceBoxText1");

		var nodes1 = svg1.selectAll("circle1")
						.data(dataset1.nodes)
						.enter()
						.append("circle")
            .attr('class', 'circle1')
						.attr("r", function(d) { return d.radius; })
            .style("fill", function(d) { return d.color; })
            .style("stroke", "#555")
						.call(force1.drag)
            .on("click", function (d) {
              $forceBoxText1.empty();

                    var $nameText1 = $("<h3>");
                    $nameText1.html(d.name1 + " " + d.name2);
                    $forceBoxText1.append( $nameText1 );

                    var $descriptionText1 = $("<p>");
                    $descriptionText1.html(d.description);
                    $forceBoxText1.append( $descriptionText1 );

              console.log("you double clicked on the circle1: " + d.name);
            });

		var label1 = svg1.selectAll(".mytext1")
						.data(dataset1.nodes)
						.enter()
						.append("text")
            .attr('class', 'mytext1')
				    .style("text-anchor", "middle")
				    .style("fill", "#555")
				    .style("font-family", "Arial")
				    .style("font-size", 14)
            .call(force1.drag)
            .on("click", function (d) {
              $forceBoxText1.empty();

                    var $nameText1 = $("<h3>");
                    $nameText1.html(d.name1 + " " + d.name2);
                    $forceBoxText1.append( $nameText1 );

                    var $descriptionText1 = $("<p>");
                    $descriptionText1.html(d.description);
                    $forceBoxText1.append( $descriptionText1 );

              console.log("you double clicked on the mytext1: " + d.name);
            });

    var p1 = label1.append('tspan');
    var p2 = label1.append('tspan');

    p1.text(function (d) { return d.name1; });
    p2.text(function (d) { return d.name2; });



		force1.on("tick", function(){
			edges1.attr("x1", function(d){ return d.source.x; })
				 .attr("y1", function(d){ return d.source.y; })
				 .attr("x2", function(d){ return d.target.x; })
				 .attr("y2", function(d){ return d.target.y; });
			nodes1.attr("cx", function(d){ return d.x; })
				 .attr("cy", function(d){ return d.y; });
			 p1.attr("x", function(d){ return d.x; })
    			 .attr("y", function (d) {return d.y - 4; });
       p2.attr("x", function(d){ return d.x; })
      			.attr("y", function (d) {return d.y + 14; });

		});
