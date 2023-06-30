//create an array of facts and a variable to store array

let Fact=[
    '"Life needs the ocean, The oceans provide 99% of the living space on the planet containing 50-80% of all life. Wow, that is a lot of life living under the water! Think of how important the ocean is to our world."',
    '"Sound Travels, The speed of sound in water is 1,435 m/sec nearly five times faster than the speed of sound in air. That is faster than a fighter jet. "',
    '"The ocean is heavy, The pressure at the deepest point in the ocean is more than 11,318 tons/sq m, or the equivalent of one person trying to support 50 jumbo jets."',
    '"Giant Pacific Octopus are really big, Did you know that the Pacific Octopus can squeeze through a hole the size of a quarter and has no bones?! Another fun thing about the octopus is that they are really smart and very inquisitive. Want to learn more about the Giant Pacific Octopus? Check out this fun video for a fun-filled octopus experience!"',
    '"Fish Are Fast, Swordfish and Marlin are the fastest fish in the ocean reaching speeds up to 75 mph in quick bursts; Blue-fin Tuna may reach sustained speeds up to 56 mph."'
];

//create a function

Btn.addEventListener('click', function(){
    //create a new variable and use math random method

    var randomFact = Fact[Math.floor(Math.random()*Fact.length)]
    Output.innerHTML = randomFact;
   
});