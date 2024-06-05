let dice = document.getElementById("dice");
let dice_value = document.getElementById("dice_output");
let blue_movers = document.querySelectorAll('.blue_movers');
let red_movers = document.querySelectorAll('.red_movers');
let green_movers = document.querySelectorAll('.green_movers');
let yellow_movers = document.querySelectorAll('.yellow_movers');
let all_mover = document.querySelectorAll('.mover');
let current_player_checker = document.querySelector('#current_player');

let turn_checker = "blue";
let dice_number = Number(0);
let rotator = Number(0);
let dice_turn_checker = Number(1);
let red_condition = false;



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
            has_won: false,
            start_location:40,
            previous_location:40,
            previous_location_x :40,
            previous_location_y:40,
            id:'blue_mover_1',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'b'
        },
        blue_mover_2:{
            is_opened: false,
            has_won: false,
            start_location:40,
            previous_location:40,
            previous_location_x :40,
            previous_location_y:40,
            id:'blue_mover_2',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'b'
        },
        blue_mover_3:{
            is_opened: false,
            has_won: false,
            start_location:40,
            previous_location:40,
            previous_location_x :40,
            previous_location_y:40,
            id:'blue_mover_3',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'b'
        },
        blue_mover_4:{
            is_opened: false,
            has_won: false,
            start_location:40,
            previous_location:40,
            previous_location_x :40,
            previous_location_y:40,
            id:'blue_mover_4',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'b'
        }
    },
    red_moverss : {
        red_mover_1:{
            is_opened: false,
            has_won: false,
            start_location:1,
            previous_location:1,
            previous_location_x :1,
            previous_location_y:1,
            id:'red_mover_1',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'r'
        },
        red_mover_2:{
            is_opened: false,
            has_won: false,
            start_location:1,
            previous_location:1,
            previous_location_x :1,
            previous_location_y:1,
            id:'red_mover_2',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'r'
        },
        red_mover_3:{
            is_opened: false,
            has_won: false,
            start_location:1,
            previous_location:1,
            previous_location_x :1,
            previous_location_y:1,
            id:'red_mover_3',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'r'
        },
        red_mover_4:{
            is_opened: false,
            has_won: false,
            start_location:1,
            previous_location:1,
            previous_location_x :1,
            previous_location_y:1,
            id:'red_mover_4',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'r'
        }
    },
    green_moverss : {
        green_mover_1:{
            is_opened: false,
            has_won: false,
            start_location:14,
            previous_location:14,
            previous_location_x :14,
            previous_location_y:14,
            id:'green_mover_1',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'g'
        },
        green_mover_2:{
            is_opened: false,
            has_won: false,
            start_location:14,
            previous_location:14,
            previous_location_x :14,
            previous_location_y:14,
            id:'green_mover_2',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'g'
        },
        green_mover_3:{
            is_opened: false,
            has_won: false,
            start_location:14,
            previous_location:14,
            previous_location_x :14,
            previous_location_y:14,
            id:'green_mover_3',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'g'
        }, green_mover_4:{
            is_opened: false,
            has_won: false,
            start_location:14,
            previous_location:14,
            previous_location_x :14,
            previous_location_y:14,
            id:'green_mover_4',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'g'
        }
    },
    yellow_moverss : {
        yellow_mover_1:{
            is_opened: false,
            has_won: false,
            start_location:27,
            previous_location:27,
            previous_location_x :27,
            previous_location_y:27,
            id:'yellow_mover_1',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'y'
        },
        yellow_mover_2:{
            is_opened: false,
            has_won: false,
            start_location:27,
            previous_location:27,
            previous_location_x :27,
            previous_location_y:27,
            id:'yellow_mover_2',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'y'
        },
        yellow_mover_3:{
            is_opened: false,
            has_won: false,
            start_location:27,
            previous_location:27,
            previous_location_x :27,
            previous_location_y:27,
            id:'yellow_mover_3',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'y'
        },
        yellow_mover_4:{
            is_opened: false,
            has_won: false,
            start_location:27,
            previous_location:27,
            previous_location_x :27,
            previous_location_y:27,
            id:'yellow_mover_4',
            previous_result_x:0,
            previous_result_y:0,
            has_entered_wining_line: false,
            current_win_pos:0,
            winner:'y'
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
        current_player_checker.style.backgroundColor = 'blue';
        red_condition = false;
        if (dice_num !== 6){
            turn_checker = 'red';
        }
    }
    else if (turn_checker === 'red')
    {
        red_movers.forEach(function (item) {
            item.disabled = false;
        });
        animation_stop = setInterval(animate_mover, 700, red_movers);
        actual_mover(dice_num, red_movers);
        current_player_checker.style.backgroundColor = 'red';
        red_condition = true;
        if (dice_num !== 6){
            turn_checker = 'green';
        }
    }
    else if (turn_checker === 'green')
    {
        green_movers.forEach(function (item) {
            item.disabled = false;
        });
        animation_stop = setInterval(animate_mover, 700, green_movers);
        current_player_checker.style.backgroundColor = 'green';
        actual_mover(dice_num, green_movers);
        red_condition = false;
        if (dice_num !== 6){
            turn_checker = 'yellow';
        }
    }
    else if (turn_checker === 'yellow')
    {
        yellow_movers.forEach(function (item) {
            item.disabled = false;
        });
        current_player_checker.style.backgroundColor = 'yellow';
        animation_stop = setInterval(animate_mover, 700, yellow_movers);
        red_condition = false;
        if (dice_num !== 6){
            turn_checker = 'blue';
        }
        actual_mover(dice_num, yellow_movers);
    }
}



let actual_mover = (dice_number, mover) => {
    // console.log(mover[1]);
    let object = mover[0].classList[1];
    let actual_object = object + 's';
    // console.log(actual_object);
    let listener = (e) => {
        let main_mover = e.target.id;
        let inside_obs = global_object[actual_object][main_mover];
        if (inside_obs.is_opened === false && dice_number === 6)
        {
            remove_all_listeners(mover, listener);
            mover_opener(mover, main_mover, dice_number, mover[1].classList[1], inside_obs.start_location);
        }
        else if (global_object[actual_object][main_mover].is_opened === true && inside_obs.has_won === false)
        {
            remove_all_listeners(mover, listener);
            mover_further(inside_obs, dice_number);
            
        }
        else if (inside_obs.has_won === true) {
            // console.log('Not opened');
            alert("Already at winning position choose another mover");
            clearInterval(animation_stop);
            remove_all_listeners(mover, listener);
            dice.disabled = false;
        }
        else if (inside_obs.is_opened === false && dice_number !== 6)
        {
            clearInterval(animation_stop);
            remove_all_listeners(mover, listener);
            alert(`Can't use this mover it's not open yet`);
            dice.disabled = false;
            return;
        }
    };
    mover.forEach(function (item) {
        item.addEventListener('click', listener);
    });
}

// just like we added the listeners to the items above, in the below function we are removing them
let remove_all_listeners = (mover, listener) => {
    mover.forEach((item) => {
        item.removeEventListener('click', listener);
    });
}

// You can't use `e.target` to remove the event listener because `e.target` refers to the element that
// triggered the event (in this case, the clicked element), which may not be the same element that the
// listener was attached to.
// 
// In your case, the event listener is attached to each item in the `mover` array using 
// `item.addEventListener('click', listener)`. The `listener` function is then triggered when any of
// those items are clicked, but `e.target` will refer to the specific item that was clicked, not
// necessarily the item that the event listener was attached to.
// 
// On the other hand, `e.currentTarget` refers to the element that the event listener was attached to,
// which is the correct element to call `removeEventListener` on. By using 
// `e.currentTarget.removeEventListener('click', listener)`, you're removing the event listener from
// the same element that it was originally attached to, regardless of which specific item in the
// `mover` array was clicked.
// 
// Using `e.target` to remove the event listener would only work if you attached the event listener
// directly to the clicked element (`e.target`), which is not the case in your code. You're attaching
// the same `listener` function to multiple elements (`mover` array items), so you need to use
// `e.currentTarget` to ensure that the event listener is removed from the correct element.
// 
// In summary, `e.currentTarget` is the correct way to remove the event listener because it refers
// to the element that the event listener was attached to, while `e.target` refers to the element
// that triggered the event, which may not be the same element in your case.


let mover_opener = (mover, main_mover, dice_value, mover_object, starting) => {
    let movers_object = mover_object + 's';
    let num_starting = 'l' + String(starting);
    let starting_point = document.getElementById(num_starting);
    let main_movers = document.getElementById(main_mover);
    let x_locator= starting_point.getBoundingClientRect().left;
    let y_locator= starting_point.getBoundingClientRect().top;
    let mover_x_locator= main_movers.getBoundingClientRect().left;
    let mover_y_locator= main_movers.getBoundingClientRect().top;
    let resultant_x = x_locator - mover_x_locator + 8;
    let resultant_y = y_locator - mover_y_locator + 2;

    // console.log('Mover is opened');
    // console.log(`Mover currently is at ${mover_x_locator}, ${mover_y_locator}`);
    // console.log(`Mover will move to the position ${x_locator}, ${y_locator}`);

    global_object[movers_object][main_mover].previous_location_x = x_locator;
    global_object[movers_object][main_mover].previous_location_y = y_locator;
    global_object[movers_object][main_mover].previous_result_x = resultant_x;
    global_object[movers_object][main_mover].previous_result_y = resultant_y;
    main_movers.style.transform = `translate(${resultant_x}px,${resultant_y}px)`;
    global_object[movers_object][main_mover].is_opened = true;
    all_mover.forEach(function (item) {
        item.disabled = true;
    });
    dice.disabled = false;
    clearInterval(animation_stop);
    // console.log(`currently at ${x_locator} ${y_locator} opened at ${mover_x_locator} ${mover_y_locator}`)
}


let mover_further = (inside_obs, dice_output) => {
    let previous_x = inside_obs.previous_location_x;
    let previous_y = inside_obs.previous_location_y;
    let previous_pos = inside_obs.previous_location;
    let new_position_id = previous_pos + dice_output;
    let remaining_moves;
    let current_still;
    current_still = new_position_id;
    if (inside_obs.has_entered_wining_line === true)
    {
        winning_moves(dice_output, inside_obs);
        return;
    }
    
    if (new_position_id > 51)
    {
        if (!red_condition)
        {
            new_position_id = new_position_id - 52;
        }
        else{
            remaining_moves = new_position_id;
            new_position_id = 51;
            remaining_moves = remaining_moves - new_position_id;
            inside_obs.has_entered_wining_line = true;
        }
    }
    if (new_position_id > inside_obs.start_location-2 && previous_pos<inside_obs.start_location && inside_obs.has_entered_wining_line === false)
    {
        console.log('entered stage before win');
        remaining_moves = new_position_id;
        new_position_id = inside_obs.start_location-2
        remaining_moves = remaining_moves - new_position_id;
        inside_obs.has_entered_wining_line = true;
    }
    inside_obs.previous_location = new_position_id;
    // console.log(new_position_id);
    let mover_actual = document.getElementById(inside_obs.id);

    let num_next = 'l' + String(new_position_id);
    let next_point = document.getElementById(num_next);
    let new_x_locator= next_point.getBoundingClientRect().left;
    let new_y_locator= next_point.getBoundingClientRect().top;
    // console.log(next_point);
    let previous_result_x = inside_obs.previous_result_x;
    let previous_result_y = inside_obs.previous_result_y;

    let resultant_x = new_x_locator - previous_x + previous_result_x;
    let resultant_y = new_y_locator - previous_y + previous_result_y;

    inside_obs.previous_result_x = resultant_x;
    inside_obs.previous_result_y = resultant_y;
    inside_obs.previous_location_x = new_x_locator;
    inside_obs.previous_location_y = new_y_locator;

    // console.log(`previously at ${previous_x} ${previous_y} currently at ${new_x_locator} ${new_y_locator}`)
    mover_actual.style.transform = `translate(${resultant_x}px,${resultant_y}px)`;
    clearInterval(animation_stop);
    dice.disabled = false;
    console.log('Completed remaining steps');
    if (current_still > inside_obs.start_location-2 && previous_pos<inside_obs.start_location && inside_obs.has_entered_wining_line === true)
    {
        console.log('Win_zone_entry_check');
        winning_moves(remaining_moves, inside_obs);
    }
    if (current_still > 51 && red_condition && inside_obs.has_entered_wining_line === true)
    {
        console.log('Win_zone_entry_check');
        winning_moves(remaining_moves, inside_obs);
    }
}

let winning_moves = (winner_moves, inside_obj) => {
    // console.log(winner_moves, inside_obj);
    console.log('Entered win zone');
    let current_pos = inside_obj.current_win_pos;
    let current_x_pos = inside_obj.previous_location_x;
    let current_y_pos = inside_obj.previous_location_y;
    let next_x_pos;
    let next_y_pos;
    let result_x;
    let result_y;
    let previous_result_x = inside_obj.previous_result_x;
    let previous_result_y = inside_obj.previous_result_y;
    let next_win_pos;
    let next_win_pos_str;
    let win_id;
    let mover_actual = document.getElementById(inside_obj.id);
    console.log(current_pos);
    console.log(current_x_pos);
    console.log(current_y_pos);
    console.log(winner_moves);
    if (winner_moves + current_pos <= 6)
    {
        next_win_pos = winner_moves + current_pos;
        inside_obj.current_win_pos = next_win_pos;
        next_win_pos_str = 'w' + inside_obj.winner + String(next_win_pos);
        win_id = document.getElementById(next_win_pos_str);
        next_x_pos = win_id.getBoundingClientRect().left;
        next_y_pos = win_id.getBoundingClientRect().top;
        result_x = next_x_pos - current_x_pos + previous_result_x;
        result_y = next_y_pos - current_y_pos + previous_result_y;
        mover_actual.style.transform = `translate(${result_x}px,${result_y}px)`;
    }
    else{
        dice.disabled = false;
        clearInterval(animation_stop);
        return;
    }
    if (next_win_pos === 6)
    {
        inside_obj.has_won = true;
    }
    dice.disabled = false;
    clearInterval(animation_stop);
}