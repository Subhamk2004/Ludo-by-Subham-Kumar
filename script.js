let dice = document.getElementById("dice");
let blue_mover_1 = document.getElementById("blue_mover_1");
let dice_value = document.getElementById("dice_output");
let id_locator40 = document.getElementById("l40");
let blue_movers = document.querySelectorAll('.blue_movers');
let all_mover = document.querySelectorAll('.mover');

let turn_checker = "blue";
let dice_number = Number(0);
let rotator = Number(0);




let animation_stop;
let animate_mover = (mover_animate) => {
    setTimeout(function (){
        mover_animate.forEach(function (item){
            item.style.width = `30%`;
            item.style.transform = `translate(0px, 5px)`;
        })
    }, 350)
    setTimeout(function (){
        mover_animate.forEach(function (item){
            item.style.width = `25%`;
            item.style.transform = `translate(0px, 0px)`;
        })
    }, 700)
}



let global_object = {
    blue_moverss : {
        blue_mover_1:{
            is_opened: false,
            has_won: false
        },
        blue_mover_2:{
            is_opened: false,
            has_won: false
        },
        blue_mover_3:{
            is_opened: false,
            has_won: false
        },
        blue_mover_4:{
            is_opened: false,
            has_won: false
        }
    }
}

dice.addEventListener("click", function(){
    rotator = rotator + 360;
    dice.style.transform = `rotate(${rotator}deg)`;
    dice.style.width = `80px`;
    dice.style.height = `80px`
    setTimeout(function (){
        dice.style.width = `60px`;
        dice.style.height = `60px`;
    }, 300);
    dice.style.boxShadow = `0 10px 10px black`;
    dice_number = Math.floor(Math.random() * 6) + 1;
    dice_value.innerHTML = dice_number;
    dice.disabled = true;
    move_mover(dice_number);
});

let move_mover = (dice_number) => {
    let dice_num = Number(dice_number);
    all_mover.forEach(function (item) {
        item.disabled = true;
    });
    if (turn_checker === 'blue')
    {
        blue_movers.forEach(function (item) {
            item.disabled = false;
        });
        animation_stop = setInterval(animate_mover, 700, blue_movers);
        actual_mover(dice_num, blue_movers);
    }
}
let actual_mover = (dice_number, mover) => {
    // console.log(mover[1]);
    mover.forEach(function (item) {
        item.addEventListener("click", function(e){
            let main_mover = e.target.id
            if (global_object.blue_moverss[main_mover].is_opened === false)
            {
                mover_opener(main_mover, dice_number, mover[1].classList[1]);
            }
            else{
                console.log('already opened')
            }
        });
    })

}

let mover_opener = (main_mover, dice_value, mover_object) => {
    // console.log('this is movers object', mover_object);
    let movers_object = mover_object + 's';
    let main_movers = document.getElementById(main_mover);
    let x_locator=id_locator40.getBoundingClientRect().left;
    let y_locator=id_locator40.getBoundingClientRect().top;
    let mover_x_locator= main_movers.getBoundingClientRect().left;
    let mover_y_locator= main_movers.getBoundingClientRect().top;
    let resultant_x = x_locator - mover_x_locator + 8;
    let resultant_y = y_locator - mover_y_locator + 2 ;

    // console.log('Mover is opened');
    // console.log(`Mover currently is at ${mover_x_locator}, ${mover_y_locator}`);
    // console.log(`Mover will move to the position ${x_locator}, ${y_locator}`);
        
    main_movers.style.transform = `translate(${resultant_x}px,${resultant_y}px)`;
    // console.log(movers_object);
    global_object[movers_object][main_mover].is_opened = true;
    clearInterval(animation_stop);
    all_mover.forEach(function (item) {
        item.disabled = true;
    });
    dice.disabled = false;
}