
function card(index, name, path){
    this.num = index;
    this.name = name;
    this.path = path;
}
function deck(){
    this.indexes = ['0', '1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '10', '11',
                    '12', '13', '14', '15', '16',
                    '17', '18', '19', '20', '21'];
    this.names = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress',
                 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot',
                 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice',
                 'The Hanged Man', 'Death', 'Temperance', 'The Devil',
                 'The Tower', 'The Star', 'The Moon', 'The Sun',
                 'Judgement', 'The World'];
    this.path = ['00-TheFool.png', '01-TheMagician.png', '02-TheHighPriestess.png',
                 '03-TheEmpress.png', '04-TheEmperor.png', '05-TheHierophant.png',
                 '06-TheLovers.png', '07-TheChariot.png', '08-Strength.png',
                 '09-TheHermit.png', '10-WheelOfFortune.png', '11-Justice.png',
                 '12-TheHangedMan.png', '13-Death.png', '14-Temperance.png',
                 '15-TheDevil.png', '16-TheTower.png', '17-TheStar.png',
                 '18-TheMoon.png', '19-TheSun.png', '20-Judgement.png',
                 '21-TheWorld.png'];
    let cards = [];

    for (var i = 0; i < this.indexes.length; i++){
            cards.push(new card(i, this.names[i], '/assets/images/Cards/' + this.path[i]));
    }
    return cards;
}

let deckContainer = new deck();

window.onload = function() {
    // for (var i = 0; i < deckContainer.length; i++) {
    //     let div = document.createElement('div');
    //     div.className = 'card';
    //     div.innerHTML = '<span class="path"><img src="' + deckContainer[i].path + '" alt="" width="300" height="567"></span>';
    //     document.body.appendChild(div);
    // }
}


