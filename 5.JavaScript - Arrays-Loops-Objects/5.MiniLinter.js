let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords.length);

let betterWords = storyWords.filter(word =>{
  return (!unnecessaryWords.includes(word))
});

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for(word of storyWords){
  if(word ==='really'){
    reallyCount += 1;
  }
  else if (word === 'very'){
    veryCount+=1;
  }else if (word === 'basically'){
    basicallyCount+=1;
  }
}

console.log('really count: '+ reallyCount);
console.log('very count: '+veryCount);
console.log('basically count: '+basicallyCount);

//console.log(betterWords);
let countWords = 0; 
storyWords.forEach(word =>{
  if(overusedWords.includes(word)){
    countWords++;
  }
});

console.log(countWords);

var frequency = []; 
var max = 0;
var result;
for(let v in storyWords) {
frequency[storyWords[v]]=(frequency[storyWords[v]] || 0)+1;

  if(frequency[storyWords[v]] > max) { 
max = frequency[storyWords[v]];
result = storyWords[v];
        }
}
  console.log(frequency);
console.log(max);
let countSentences = 0; 
storyWords.forEach(word =>{
  if(word.includes('.')||word.includes('!')){
    countSentences++;
  }
});

console.log(countSentences);

//console.log(betterWords.join(' '));  