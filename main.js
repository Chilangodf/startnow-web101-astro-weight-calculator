// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  planets.reverse();// to reverse the planets array 

  function populate(){
      var worlds = document.getElementById("planets");
      for (var i = 0; i < planets.length; i ++){
          var planetname = planets[i][0];
          var gravity = planets[i][1];
          var opt = document.createElement('option');
          opt.innerHTML = planetname;
          opt.value = planetname;
          worlds.appendChild (opt);
      }
  }
  populate();
  

$( '#calculate-button' ).click(function() {
    var weight = $('#user-weight').val(); 
    var thePlanet = $('select option:selected').text(); 
    var gravity = planets.find(planet => planet[0] === thePlanet)[1]
    var result = weight * gravity;
    // console.log({ gravity, weight })
    $("#output").text("If you were on " + thePlanet + ", you would weigh " + result + "lbs!" );
})



