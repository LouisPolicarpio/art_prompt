import React from 'react';
import Rune from 'react-rune';

//http://printingcode.runemadsen.com/lecture-color/


export default function ColourGen(props) {



    const draw = (rune) => {

        if(props.hue === false){
            return;
        }

        var mode;
        if (parseInt(props.mode) === 4){
            mode = Math.floor(Math.random() * 4);
        }else{
            mode = parseInt(props.mode);
        }



        var hue = props.hue;
        var LS = 90;

        switch(mode){
            case 0:
                complementary(rune, hue ,LS);
                break;
            case 1: 
                analogous(rune, hue, LS);
                break;
            case 2:
                Tetradic(rune, hue, LS);
                break;
            case 3:
                Triadic(rune, hue, LS);
                break;


        }

    };

    return (
 
        <div id="canvas" >
            <Rune height={400} width={800} draw={draw} />
        </div>
    );
}

function complementary(rune, hue, LS) {


    var square1 = rune.rect(0, 0, rune.width / 2, rune.height).fill('hsv', hue, LS, LS).stroke(false);
    square1.copy().move(rune.width / 2, 0).fill('hsv', hue + 180, LS, LS);
}

function analogous(rune, hue, LS) {

    var hue = Math.floor(Math.random() * 255) + 1;
    
    var square1 = rune.rect(0, 0, rune.width / 4, rune.height).fill('hsv', hue, 90, 90).stroke(false);
    square1.copy().move((rune.width / 4) * 1, 0).fill('hsv', hue + 30, LS, LS);
    square1.copy().move((rune.width / 4) * 2, 0).fill('hsv', hue + 60, LS, LS);
    square1.copy().move((rune.width / 4) * 3, 0).fill('hsv', hue + 90, LS, LS);

}

function Tetradic(rune, hue, LS) {

    var hue = Math.floor(Math.random() * 255) + 1;

    var square1 = rune.rect(0, 0, rune.width / 4, rune.height).fill('hsv', hue, LS, LS).stroke(false);
    square1.copy().move((rune.width / 4) * 1, 0).fill('hsv', hue + 90, LS, LS);
    square1.copy().move((rune.width / 4) * 2, 0).fill('hsv', hue + 180, LS, LS);
    square1.copy().move((rune.width / 4) * 3, 0).fill('hsv', hue + 270, LS, LS);

}

function Triadic(rune, hue, LS) {

    var hue = Math.floor(Math.random() * 255) + 1;

    var square1 = rune.rect(0, 0, rune.width / 3, rune.height).fill('hsv', hue, LS, LS).stroke(false);
    square1.copy().move((rune.width / 3) * 1, 0).fill('hsv', hue + 120, LS, LS);
    square1.copy().move((rune.width / 3) * 2, 0).fill('hsv', hue + 240, LS, LS);

}