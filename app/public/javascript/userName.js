$(()=>{
let username1 = ['angry','fire','stinky','spooky','dirty','dusty','screaming','fire','wicked','insane','weird','odd','strange','whisper','scary','chilling','eerie','hairy','crazy','mad','wild','white','black','red','green','orange','purple','grey','yellow','brown','gory','bloody','scabbed','ripped','sour','curdled','fierce','brutal','curious','peculiar','bizarre','freakish','suspicious','fishy','creepy','toothless','nasty','awful','horrible','terrible','vile','foul','abominable','repulsive','obnoxious','rank','gross']

let username2 = ['bat','grave','dark','demon','ghost','spook','maniac','goblin','witch','troll','skeleton','grim','reaper','ghoul','robber','spirit','monster','boogey','spider','dirt','dust','shadow','beast','devil','barbarian','savage','swine','pig','animal','imp','wretch','scamp','varmint','hellion','rat','mystery','freak','creep','ogre','hobgoblin','gnome','halfling','elf','creature','brute','critter','puppet','eater','bone','boar','porker'];

let username3 = ['0','1','2','3','4','5','6','7','8','9']

let username4 = ['0','1','2','3','4','5','6','7','8','9']

let randomNum1 = Math.floor(Math.random() * username1.length)
let randomNum2 = Math.floor(Math.random() * username2.length)
let randomNum3 = Math.floor(Math.random() * username3.length)
let randomNum4 = Math.floor(Math.random() * username4.length)


$('.icon').on('click',function(){
    let generatedName = `${username1[randomNum1]}_${username2[randomNum2]}_${username3[randomNum3]}${username4[randomNum4]}`;
    
    $('.generatedName').text(generatedName);
});
//============================================
//need to add a function that pulls previous 
//usernames from the database and compares to 
//the newly made username to prevent repeats
//============================================

});//end of document.ready function