'use strict';


const score_zero=document.querySelector('#score--0');
const score_one=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const roll_dice=document.querySelector('.btn--roll');
const hold_zero=document.querySelector('#current--0');
const hold_one=document.querySelector('#current--1');
const hold=document.querySelector('.btn--hold');
const new_game=document.querySelector('.btn--new');
const player_1=document.querySelector('.player--0');
const player_2=document.querySelector('.player--1');

let sum=0;
let oh_1=0;
let oh_2=0;
let player=1;
let playing=true;
//hold_zero.textContent=69;
score_zero.textContent=0;
score_one.textContent=0;

dice.classList.add('hidden');
//player_1.classList.remove('player--active');
roll_dice.addEventListener('click',function() {
    dice.classList.remove('hidden');
    let x=Math.round(Math.random()*5)+1;
    //console.log(x);
    if(player==1 && playing){
        player_1.classList.add('player--active');
        player_2.classList.remove('player--active');
    switch(x){
        case 1:
            dice.src='dice-1.png';
            hold_zero.textContent=0;
            sum=0;
            player=2;
            break;
        case 2:
            dice.src='dice-2.png';
            sum=sum+2
            hold_zero.textContent=sum;
            break;
        case 3:
            dice.src='dice-3.png';
            sum=sum+3
            hold_zero.textContent=sum;
            break;
        case 4:
            dice.src='dice-4.png';
            sum=sum+4
            hold_zero.textContent=sum;
            break;
        case 5:
            dice.src='dice-5.png';
            sum=sum+5
            hold_zero.textContent=sum;
            break;
        case 6:
            dice.src='dice-6.png';
            sum=sum+6
            hold_zero.textContent=sum;
            break;
    }
}
    else if(player==2 && playing){
        player_2.classList.add('player--active');
        player_1.classList.remove('player--active');
        switch(x){
            case 1:
                dice.src='dice-1.png';
                hold_one.textContent=0;
                sum=0;
                player=1;
                break;
            case 2:
                dice.src='dice-2.png';
                sum=sum+2
                hold_one.textContent=sum;
                break;
            case 3:
                dice.src='dice-3.png';
                sum=sum+3
                hold_one.textContent=sum;
                break;
            case 4:
                dice.src='dice-4.png';
                sum=sum+4
                hold_one.textContent=sum;
                break;
            case 5:
                dice.src='dice-5.png';
                sum=sum+5
                hold_one.textContent=sum;
                break;
            case 6:
                dice.src='dice-6.png';
                sum=sum+6
                hold_one.textContent=sum;
                break;
        }  
    }
});

hold.addEventListener('click',function(){
    if(player==1){
    oh_1=oh_1+parseInt(hold_zero.textContent);
    score_zero.textContent=oh_1;
    sum=0;
    hold_zero.textContent=0;
    if(score_one.textContent>100){
        player_1.classList.add('player--winner');
        playing=false;
    }
    player=2;
}
    else{
        oh_2=oh_2+parseInt(hold_one.textContent);
        score_one.textContent=oh_2;
        sum=0;
        hold_one.textContent=0;
        if(score_one.textContent>20){
            player_2.classList.add('player--winner');
                playing=false;
        }
        player=1;
    }
});

new_game.addEventListener('click',function(){
playing=true;
sum=0;
oh_1=0;
oh_2=0;
player=1;
score_zero.textContent=0;
score_one.textContent=0;
hold_zero.textContent=0;
hold_one.textContent=0;
dice.classList.add('hidden');
player_1.classList.remove('player--winner');
player_2.classList.remove('player--winner');
})