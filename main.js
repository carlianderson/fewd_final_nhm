
$(function() {
	$("#search").click(function() {
		if ($("#search").val() == "Search our website"){
			$("#search").val(""); 
		}
	});
});

// $(".mobile-menu").click(function(){
//         $(".mobile-nav li").toggle();
// });




var quiz = [
{
	q: "Viking helmets had horns:",
	a: false,
	info: "Answer: False! Sadly, viking helmets did not have horns. In fact, very few viking helmet remains have been discovered. It is thought that the addition of horns became popularized either in artist portrayals in the 1800s, Wagner's staging of his \"Der Ring des Nibelungen\" opera, or even in the comic strip \"Hagar the Horrible\". To add to the confusion, Bronze Age-era horned helmets have been discovered in Scandinavia.",
	img: "images/helmets.jpg"
},
{
	q: "The name of the Midgard Serpent is Jörmungandr",
	a: true,
	info: "Answer: True! The Midgard serpent's name is Jörmungandr, which means \"Giant Monster\". Jörmungandr is the child of Loki and the giantess Angrboða. He grew to be so large that he encircled the entire world and grasped the end of his own tail. He is the nemesis of Thor.",
	img: "images/midgard.jpg"
},
{
    q: "Ballard was annexed to the city of Seattle in 1908",
	a: false,
	info: "Answer: False! Ballard was its own city from 1890 until it was annexed to Seattle in 1907. The decision to annex was voted down several times, but eventually Ballard was forced to annex due to the need for a clean water supply. On the day of annexation, the Ballard City Hall was dreped in black crepe in mourning.",
	img: "images/CityHall.gif"
},
{
    q: "Seattle's Norwegian sister city is Trondheim",
	a: false,
	info: "Answer: False! Seattle's Norwegian sister city is Bergen.The two cities share many similarities (for example: Bergen is the City of Seven Mountains while Seattle is the City of Seven Hills). You can visit Bergen Place in Ballard, a park that commemorates the sister city relationship and was dedicated to Norway's King Olav.",
	img: "images/BallardPark.jpg"
},
{
    q: "Sweden had the Europe's first female president",
	a: false,
	info: "Answer: False! Iceland elected the Europe's first female president, Vigdís Finnbogadóttir in 1980. She was later re-elected 3 times, which made her the longest-serving female head of state in the world. She currently serves as  UNESCO’s Goodwill Ambassador for languages.",
	img: "images/vigdis.jpg"
},
{
    q: "Denmark is part of Scandinavia",
	a: true,
	info: "Answer: True! Scandinavia consists of Norway, Sweden, and Denmark, while the Nordic countries includes Norway, Sweden, Denmark, Iceland, and Finland. The name Scandinavia derives from the formerly Danish-controlled region in Scania region in Sweden.",
	img: "images/denmark.jpeg"
},
{
    q: "Edvard Munch (the artist who painted \“The Scream\”) is Norwegian",
	a: true,
	info: "Answer: True! Edvard Munch was born in Løten, Norway. He is best known for his work \"The Scream\", completed in 1893. Two versions of \"The Scream\" have been stolen, but were later recovered.", 
	img: "images/Scream.jpeg"
},
  {
    q: "Finland was once ruled by Denmark",
	a: false,
	info: "Answer: False! Throughout Finland's history, it has been ruled by Sweden (from the 13th century until 1809) and Russia (1809-1917). Finland declared independence in 1917. During WWII, Finland fought against the Soviet Union and reached a peace agreement in 1947, although a large part of Karelia was ceded to the Soviet Union.",
	img: "images/helsinki.jpg"
},
  {
    q: "Roads have been moved due to elves in Iceland",
	a: true,
	info: "Answer: True! Many Icelandic people believe in elves. Roads have been designed around or relocated to avoid known elf habitats. One example of this was the relocation of a rock in Álftanes that was believed to be an elf church.",
	img: "images/Elfdoor.jpeg"
},
  {
    q: "Thor oversees Valhalla",
	a: false,
	info: "Answer: False! Odin rules over both Valhalla and the valkyries. He is the god of war and death, as well as being the father of all Nordic Gods. Thor is Odin's son and is the god of thunder. He is often depicted with a hammer.",
	img: "images/Norsegods.jpeg"
}
]

var index = 0;
var score = 0;
$("#play-game").click(function() {
	$("#quiz-img").attr("src", quiz[0].img);
	$("#question").text(quiz[0].q);
	$("#play-game").hide();
	$("#truefalse").show();
});


$(".submit").click(function() {
	var selection = $(this).val();
	if(quiz[index].a.toString() == selection){
		score++;
	}
	showKbomb();
	if(index==(quiz.length-1)){
		$("#next-q").hide();
		$("#show-score").show();
	}
});

$("#show-score").click(function(){
	$("#game-board").hide();
 	$("#k-bomb").hide();
	$("#final-score").show();
		if(score<4){
			$("#score-img").attr("src", "images/nhmbldg.jpeg");
			$("#your-score").html("Your score is " + score + "/10! You are a Nordic Heritage newbie. You should come visit us at the Nordic Heritage Museum!");
		}
		else if(score<8){
			$("#score-img").attr("src", "images/Woodcarving.jpeg");
			$("#your-score").html("Your score is " + score + "/10! You've got some Nordic Heritage knowledge. You should check out some of our education programs to learn more!");
		}
		else{
			$("#score-img").attr("src", "images/Volunteer.jpeg");
			$("#your-score").html("Your score is " + score + "/10! You are a Nordic Heritage expert! We would love to have you come share your passion as a volunteer!");
		}
});

function nextQuestion (){
	$("#k-bomb").hide();
	$("#game-board").show();
	index++;
	$("#quiz-img").attr("src", quiz[index].img);
	$("#question").text(quiz[index].q);
};

function showKbomb () {
	$("#kb-img").attr("src", quiz[index].img);
	$("#game-board").hide();
	$("#knowledge").text(quiz[index].info)
	$("#k-bomb").show();
};

$("#next-q").click(nextQuestion);

