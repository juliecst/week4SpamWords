//for this code I used "https://editor.p5js.org/kjhollen/sketches/BJiV-h8RW" 's wordconter(see function "getWordCount").

let texts= "Spam (stylized as SPAM) is a brand of canned precooked and preseasoned pork made by Hormel Foods Corporation. It was introduced by Hormel in 1937 and gained popularity worldwide after its use during World War II.[1] By 2003, Spam was sold in 41 countries (and trademarked in over 100) on six continents .[2] In the U.S., Hawaii is the state with the highest per capita consumption of Spam, which has become an ingredient in Hawaiian cuisine (like sushi). The generic form of Spam may be sold in cans as pork luncheon meatSpam's basic ingredients are primarily pork shoulder and ham,[3] with salt, water, modified potato starch (as a binder), sugar, and sodium nitrite (as a preservative). Natural gelatin is formed during cooking in its tins on the production line.[4] Concerns about Spam's nutritional attributes have been raised, in large part due to its high content of fat, sodium, and preservatives.[5] Spam has affected popular culture, including a Monty Python skit, which repeated the name many times, leading to its name being borrowed to describe unsolicited electronic messages, especially email.[6] It is occasionally celebrated in festivals such as Austin's Spamarama."
let words;
let list
let data;
let counts
let word
let num;
let diam;
let canvas; 



function setup() {
 words = splitTokens(texts, ' ');
  console.log(words)
  canvas = createCanvas(windowWidth, windowHeight/2);
  getWordCount()
  
}

function draw() {
  background(200,202,123);
  fill(12,255,201)
  text('repetition of each word in a text on spam', 10, 10)
  
  for(let i = 0; i<num.length-1; i++){
    diam = num[i];
    fill(150, 5*i, 153)
    ellipse(i*10, i+50, diam*(i-1)/2);
  }
 
}

function getWordCount() {
   singles = {};
  
  for (let i = 0; i < words.length; i++) {
      word = words[i];
      if (! (word in singles))
	  singles[word] = 0;
      singles[word]++;
  }
  //console.log(singles)
  num =Object.values(singles);
  console.log(num)
}


 
