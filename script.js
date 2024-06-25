let game_box = document.querySelector('#game_container');
let dice_menu = document.querySelector('.dice_player_section');
let dice = document.getElementById("dice");
let dice_value = document.getElementById("dice_output");
let blue_movers = document.querySelectorAll('.blue_movers');
let red_movers = document.querySelectorAll('.red_movers');
let green_movers = document.querySelectorAll('.green_movers');
let yellow_movers = document.querySelectorAll('.yellow_movers');
let all_mover = document.querySelectorAll('.mover');
let current_player_checker = document.querySelector('#current_player');
let player_num_selector2 = document.getElementById('pl_choice1');
let player_num_selector4 = document.getElementById('pl_choice2');
let player_num_selector3 = document.getElementById('pl_choice3');
let player_num_selectorT = document.getElementById('pl_choiceT');
let player_num_menu = document.querySelector('.choice');
let player_mover_menu = document.querySelector('.two_pl_choice');
let gb = document.querySelector('#choice1');
let ry = document.querySelector('#choice2');
let winner_1 = document.querySelector('#winner_id');
let winner_2 = document.querySelector('#winner_2');
let winner_3 = document.querySelector('#winner_3');
let loser = document.querySelector('#winner_4');

let winner_container = document.querySelector('#winner_announcer');
let two_players_input_menu = document.getElementById('player_inputs2');
let four_players_input_menu = document.getElementById('player_inputs4');
let three_players_input_menu = document.getElementById('player_inputs3');
let T_players_input_menu = document.getElementById('player_inputsT');
let two_players_name1 = document.getElementById('p1');
let two_players_name2 = document.getElementById('p2');
let four_players_name3 = document.getElementById('p43');
let four_players_name4 = document.getElementById('p44');
let four_players_name1 = document.getElementById('p41');
let four_players_name2 = document.getElementById('p42');
let three_players_name3 = document.getElementById('p33');
let three_players_name2 = document.getElementById('p32');
let three_players_name1 = document.getElementById('p31');
let T_players_name3 = document.getElementById('p43T');
let T_players_name4 = document.getElementById('p44T');
let T_players_name1 = document.getElementById('p41T');
let T_players_name2 = document.getElementById('p42T');
let player1;
let player2;
let player3;
let player4;
let two_player_submit_btn = document.querySelector('#sub1');
let four_player_submit_btn = document.querySelector('#sub2');
let three_player_submit_btn = document.querySelector('#sub3');
let T_player_submit_btn = document.querySelector('#subT');
let player1_para = document.getElementById('blue_player_name');
let player2_para = document.getElementById('red_player_name');
let player3_para = document.getElementById('green_player_name');
let player4_para = document.getElementById('yellow_player_name');
let winner_video = document.querySelector('.win_vid');
let start_ludo = document.getElementById('start_ludo');
winner_video.loop = true;
winner_video.pause();




let global_object = {
    blue_moverss: {
        blue_mover_1: {
            is_opened: false,
            has_won: false,
            start_location: 40,
            previous_location: 40,
            previous_location_x: 40,
            previous_location_y: 40,
            id: 'blue_mover_1',
            class: 'blue_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'b',
            team:'team1'
        },
        blue_mover_2: {
            is_opened: false,
            has_won: false,
            start_location: 40,
            previous_location: 40,
            previous_location_x: 40,
            previous_location_y: 40,
            id: 'blue_mover_2',
            class: 'blue_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'b',
            team:'team1'
        },
        blue_mover_3: {
            is_opened: false,
            has_won: false,
            start_location: 40,
            previous_location: 40,
            previous_location_x: 40,
            previous_location_y: 40,
            id: 'blue_mover_3',
            class: 'blue_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'b',
            team:'team1'
        },
        blue_mover_4: {
            is_opened: false,
            has_won: false,
            start_location: 40,
            previous_location: 40,
            previous_location_x: 40,
            previous_location_y: 40,
            id: 'blue_mover_4',
            class: 'blue_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'b',
            team:'team1'
        },
        close_count: 4,
        win_count: 0,
        win_position: 0,
    },
    red_moverss: {
        red_mover_1: {
            is_opened: false,
            has_won: false,
            start_location: 1,
            previous_location: 1,
            previous_location_x: 1,
            previous_location_y: 1,
            id: 'red_mover_1',
            class: 'red_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'r',
            team:'team2'
        },
        red_mover_2: {
            is_opened: false,
            has_won: false,
            start_location: 1,
            previous_location: 1,
            previous_location_x: 1,
            previous_location_y: 1,
            id: 'red_mover_2',
            class: 'red_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'r',
            team:'team2'
        },
        red_mover_3: {
            is_opened: false,
            has_won: false,
            start_location: 1,
            previous_location: 1,
            previous_location_x: 1,
            previous_location_y: 1,
            id: 'red_mover_3',
            class: 'red_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'r',
            team:'team2'
        },
        red_mover_4: {
            is_opened: false,
            has_won: false,
            start_location: 1,
            previous_location: 1,
            previous_location_x: 1,
            previous_location_y: 1,
            id: 'red_mover_4',
            class: 'red_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'r',
            team:'team2'
        },
        close_count: 4,
        win_count: 0,
        win_position: 0,
    
    },
    green_moverss: {
        green_mover_1: {
            is_opened: false,
            has_won: false,
            start_location: 14,
            previous_location: 14,
            previous_location_x: 14,
            previous_location_y: 14,
            id: 'green_mover_1',
            class: 'green_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'g',
            team:'team3'
        },
        green_mover_2: {
            is_opened: false,
            has_won: false,
            start_location: 14,
            previous_location: 14,
            previous_location_x: 14,
            previous_location_y: 14,
            id: 'green_mover_2',
            class: 'green_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'g',
            team:'team3'
        },
        green_mover_3: {
            is_opened: false,
            has_won: false,
            start_location: 14,
            previous_location: 14,
            previous_location_x: 14,
            previous_location_y: 14,
            id: 'green_mover_3',
            class: 'green_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'g',
            team:'team3'
        }, 
        green_mover_4: {
            is_opened: false,
            has_won: false,
            start_location: 14,
            previous_location: 14,
            previous_location_x: 14,
            previous_location_y: 14,
            id: 'green_mover_4',
            class: 'green_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'g',
            team:'team3'
        },
        close_count: 4,
        win_count: 0,
        win_position: 0,
    },
    yellow_moverss: {
        yellow_mover_1: {
            is_opened: false,
            has_won: false,
            start_location: 27,
            previous_location: 27,
            previous_location_x: 27,
            previous_location_y: 27,
            id: 'yellow_mover_1',
            class: 'yellow_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'y',
            team: 'team4'
        },
        yellow_mover_2: {
            is_opened: false,
            has_won: false,
            start_location: 27,
            previous_location: 27,
            previous_location_x: 27,
            previous_location_y: 27,
            id: 'yellow_mover_2',
            class: 'yellow_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'y',
            team: 'team4'
        },
        yellow_mover_3: {
            is_opened: false,
            has_won: false,
            start_location: 27,
            previous_location: 27,
            previous_location_x: 27,
            previous_location_y: 27,
            id: 'yellow_mover_3',
            class: 'yellow_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'y',
            team: 'team4'
        },
        yellow_mover_4: {
            is_opened: false,
            has_won: false,
            start_location: 27,
            previous_location: 27,
            previous_location_x: 27,
            previous_location_y: 27,
            id: 'yellow_mover_4',
            class: 'yellow_moverss',
            previous_result_x: 0,
            previous_result_y: 0,
            has_entered_wining_line: false,
            current_win_pos: 0,
            home_x: 0,
            home_y: 0,
            winner: 'y',
            team: 'team4'
        },
        close_count: 4,
        win_count: 0,
        win_position: 0,
    }
}

let winner = 0;
let winner2 = 0;
let turn_checker = 'blue';
let players;
let dice_roll = document.getElementById('dice_roll');
let in_game = document.getElementById('in_game');
let winning = document.getElementById('winning');
let destroyed = document.getElementById('destroyed');
let mover_in = document.getElementById('mover_in');
let start = document.getElementById('start');
let error = document.getElementById('error');
let still_game = document.getElementById('still_game');
let click = document.getElementById('click');
still_game.volume = 0.6;
in_game.volume = 0.5;
start_ludo.addEventListener('click', function () {
    still_game.play();
    document.querySelector('.enter').style.display = 'none';
})


player_num_selector2.addEventListener('click', () => {
    click.play();
    player_num_menu.style.display = 'none';
    player_mover_menu.style.display = 'flex';
});
player_num_selector4.addEventListener('click', () => {
    click.play();
    player_num_menu.style.display = 'none';
    four_players_input_menu.style.display = 'flex';
    players = "all";
})

player_num_selectorT.addEventListener('click', () => {
    click.play();
    player_num_menu.style.display = 'none';
    T_players_input_menu.style.display = 'flex';
    players = "team";
})

player_num_selector3.addEventListener('click', () => {
    click.play();
    player_num_menu.style.display = 'none';
    three_players_input_menu.style.display = 'flex';
    players = "players3";
})
gb.addEventListener('click', () => {

    click.play();
    player_mover_menu.style.display = 'none';
    two_players_input_menu.style.display = 'flex';
    turn_checker = "blue";
    global_object.red_moverss = '';
    global_object.yellow_moverss = '';
    players = 'gb';
    red_movers.forEach(function (item) {
        item.style.display = 'none';
    });
    yellow_movers.forEach(function (item) {
        item.style.display = 'none';
    });
});
ry.addEventListener('click', () => {
    click.play();
    player_mover_menu.style.display = 'none';
    two_players_input_menu.style.display = 'flex';
    global_object.blue_moverss = '';
    global_object.green_moverss = '';
    turn_checker = "red";
    players = 'ry';
    blue_movers.forEach(function (item) {
        item.style.display = 'none';
    });
    green_movers.forEach(function (item) {
        item.style.display = 'none';
    })
});

two_player_submit_btn.addEventListener('click', function () {
    click.play(); still_game.loop = false;
    still_game.pause();
    start.play();
    setTimeout(function () {
        in_game.play();
    }, 2000);
    player1 = two_players_name1.value;
    player2 = two_players_name2.value;
    if (players === 'gb') {
        global_object.blue_moverss.player_name = player1;
        global_object.green_moverss.player_name = player2;
        player1_para.innerHTML = player1;
        player3_para.innerHTML = player2;
    }
    else if (players === 'ry') {
        global_object.red_moverss.player_name = player1;
        global_object.yellow_moverss.player_name = player2;
        player2_para.innerHTML = player1;
        player4_para.innerHTML = player2;
    }
    game_box.style.display = 'flex';
    dice_menu.style.display = 'flex';
    document.querySelector('.menu-div').style.display = 'none';
    two_players_input_menu.style.display = 'none';
});
four_player_submit_btn.addEventListener('click', function () {
    click.play(); still_game.loop = false;
    still_game.pause();
    start.play();
    setTimeout(function () {
        in_game.play();
    }, 2000);
    player1 = four_players_name1.value;
    player2 = four_players_name2.value;
    player3 = four_players_name3.value;
    player4 = four_players_name4.value;
    player1_para.innerHTML = player1;
    player2_para.innerHTML = player2;
    player3_para.innerHTML = player3;
    player4_para.innerHTML = player4;
    global_object.blue_moverss.player_name = player1;
    global_object.red_moverss.player_name = player2;
    global_object.yellow_moverss.player_name = player4;
    global_object.green_moverss.player_name = player3;
    game_box.style.display = 'flex';
    dice_menu.style.display = 'flex';
    four_players_input_menu.style.display = 'none';
    document.querySelector('.menu-div').style.display = 'none';
});

T_player_submit_btn.addEventListener('click', function () {
    click.play(); still_game.loop = false;
    still_game.pause();
    start.play();
    setTimeout(function () {
        in_game.play();
    }, 2000);
    player1 = T_players_name1.value;
    player2 = T_players_name2.value;
    player3 = T_players_name3.value;
    player4 = T_players_name4.value;
    player1_para.innerHTML = player1;
    player2_para.innerHTML = player2;
    player3_para.innerHTML = player3;
    player4_para.innerHTML = player4;
    global_object.blue_moverss.player_name = player1;
    global_object.red_moverss.player_name = player2;
    global_object.yellow_moverss.player_name = player4;
    global_object.green_moverss.player_name = player3;
    global_object.blue_moverss.blue_mover_1.team = 'team1';
    global_object.blue_moverss.blue_mover_2.team = 'team1';
    global_object.blue_moverss.blue_mover_3.team = 'team1';
    global_object.blue_moverss.blue_mover_4.team = 'team1';

    global_object.green_moverss.green_mover_1.team = 'team1';
    global_object.green_moverss.green_mover_2.team = 'team1';
    global_object.green_moverss.green_mover_3.team = 'team1';
    global_object.green_moverss.green_mover_4.team = 'team1';

    global_object.red_moverss.red_mover_1.team = 'team2';
    global_object.red_moverss.red_mover_2.team = 'team2';
    global_object.red_moverss.red_mover_3.team = 'team2';
    global_object.red_moverss.red_mover_4.team = 'team2';

    global_object.yellow_moverss.yellow_mover_1.team = 'team2';
    global_object.yellow_moverss.yellow_mover_2.team = 'team2';
    global_object.yellow_moverss.yellow_mover_3.team = 'team2';
    global_object.yellow_moverss.yellow_mover_4.team = 'team2';
    game_box.style.display = 'flex';
    dice_menu.style.display = 'flex';
    four_players_input_menu.style.display = 'none';
    document.querySelector('.menu-div').style.display = 'none';
});

three_player_submit_btn.addEventListener('click', function () {
    click.play(); still_game.loop = false;
    still_game.pause();
    start.play();
    document.querySelector('.menu-div').style.display = 'none';
    setTimeout(function () {
        in_game.play();
    }, 2000)
    global_object.yellow_moverss = '';
    yellow_movers.forEach(function (item) {
        item.style.display = 'none';
    })
    player1 = three_players_name1.value;
    player2 = three_players_name2.value;
    player3 = three_players_name3.value;
    player1_para.innerHTML = player1;
    player2_para.innerHTML = player2;
    player3_para.innerHTML = player3;
    global_object.blue_moverss.player_name = player1;
    global_object.red_moverss.player_name = player2;
    global_object.green_moverss.player_name = player3;
    game_box.style.display = 'flex';
    dice_menu.style.display = 'flex';
    three_players_input_menu.style.display = 'none';
});



let dice_number = Number(0);
let rotator = Number(0);
let dice_turn_checker = Number(1);
let red_condition = false;
let movers_position_arr = [];


let animation_stop;
let animate_mover = (mover_animate) => {
    setTimeout(function () {
        mover_animate.forEach(function (item) {
            item.style.width = `30%`;
            item.style.transform = `translate(0px, 5px)`;
        })
    }, 350)
    setTimeout(function () {
        mover_animate.forEach(function (item) {
            item.style.width = `25%`;
            item.style.transform = `translate(0px, 0px)`;
        })
    }, 700)
}


blue_movers.forEach(function (mover) {
    let mover_ac = mover;
    let movers_home_x = mover_ac.getBoundingClientRect().left;
    let movers_home_y = mover_ac.getBoundingClientRect().top;
    let mover_id = mover_ac.children[0].id;
    // console.log(movers_home_x, mover_id);
    global_object.blue_moverss[mover_id].home_x = movers_home_x;
    global_object.blue_moverss[mover_id].home_y = movers_home_y;
});
red_movers.forEach(function (mover) {
    let mover_ac = mover;
    let movers_home_x = mover_ac.getBoundingClientRect().left;
    let movers_home_y = mover_ac.getBoundingClientRect().top;
    let mover_id = mover_ac.children[0].id;
    // console.log(movers_home_x, mover_id);
    global_object.red_moverss[mover_id].home_x = movers_home_x;
    global_object.red_moverss[mover_id].home_y = movers_home_y;
});
green_movers.forEach(function (mover) {
    let mover_ac = mover;
    let movers_home_x = mover_ac.getBoundingClientRect().left;
    let movers_home_y = mover_ac.getBoundingClientRect().top;
    let mover_id = mover_ac.children[0].id;
    // console.log(movers_home_x, mover_id);
    global_object.green_moverss[mover_id].home_x = movers_home_x;
    global_object.green_moverss[mover_id].home_y = movers_home_y;
});
yellow_movers.forEach(function (mover) {
    let mover_ac = mover;
    let movers_home_x = mover_ac.getBoundingClientRect().left;
    let movers_home_y = mover_ac.getBoundingClientRect().top;
    let mover_id = mover_ac.children[0].id;
    // console.log(movers_home_x, mover_id);
    global_object.yellow_moverss[mover_id].home_x = movers_home_x;
    global_object.yellow_moverss[mover_id].home_y = movers_home_y;
});

// console.log(global_object.blue_moverss.blue_mover_1.home_x);


dice.addEventListener("click", function () {
    dice_roll.play();
    rotator = rotator + 360;
    dice.style.transform = `rotate(${rotator}deg)`;
    dice.style.width = `80px`;
    dice.style.height = `80px`
    setTimeout(function () {
        dice.style.width = `60px`;
        dice.style.height = `60px`;
    }, 300);
    dice.style.boxShadow = `0 10px 10px black`;
    dice_number = Math.floor(Math.random() * 6) + 1;
    dice_value.innerHTML = dice_number;
    console.log('dice rolled');
    dice.disabled = true;
    console.log(winner_container)
    move_mover(dice_number);
});

let move_mover = (dice_number) => {
    let dice_num = Number(dice_number);
    all_mover.forEach(function (item) {
        item.disabled = true;
    });
    if (players === 'gb') {
        if (turn_checker === 'blue') {
            blue_movers.forEach(function (item) {
                item.disabled = false;
            });

            blue_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            animation_stop = setInterval(animate_mover, 700, blue_movers);
            actual_mover(dice_num, blue_movers);
            current_player_checker.style.backgroundColor = 'blue';

            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'green';
                // current_player_checker.style.backgroundColor = 'red';
                let blue_moverss_obj = global_object.blue_moverss;
                if (blue_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'green') {
            green_movers.forEach(function (item) {
                item.disabled = false;
            });

            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            animation_stop = setInterval(animate_mover, 700, green_movers);
            current_player_checker.style.backgroundColor = 'green';
            actual_mover(dice_num, green_movers);
            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'blue';
                // current_player_checker.style.backgroundColor = 'yellow';
                let green_moverss_obj = global_object.green_moverss;
                if (green_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
    }
    else if (players === 'ry') {
        if (turn_checker === 'red') {
            red_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });

            red_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });

            animation_stop = setInterval(animate_mover, 700, red_movers);
            actual_mover(dice_num, red_movers);
            current_player_checker.style.backgroundColor = 'red';
            red_condition = true;
            if (dice_num !== 6) {
                turn_checker = 'yellow';
                // current_player_checker.style.backgroundColor = 'green';
                let red_moverss_obj = global_object.red_moverss;
                if (red_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }

        else if (turn_checker === 'yellow') {
            yellow_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });

            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });

            current_player_checker.style.backgroundColor = 'yellow';
            animation_stop = setInterval(animate_mover, 700, yellow_movers);
            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'red';
                // current_player_checker.style.backgroundColor = 'blue';
                let yellow_moverss_obj = global_object.yellow_moverss;
                if (yellow_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
            actual_mover(dice_num, yellow_movers);
        }
    }
    else if (players === 'all' || players === 'team') {
        if (turn_checker === 'blue') {
            blue_movers.forEach(function (item) {
                item.disabled = false;
            });

            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            animation_stop = setInterval(animate_mover, 700, blue_movers);
            actual_mover(dice_num, blue_movers);
            current_player_checker.style.backgroundColor = 'blue';

            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'red';
                // current_player_checker.style.backgroundColor = 'red';
                let blue_moverss_obj = global_object.blue_moverss;
                if (blue_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'red') {
            red_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            animation_stop = setInterval(animate_mover, 700, red_movers);
            actual_mover(dice_num, red_movers);
            current_player_checker.style.backgroundColor = 'red';
            red_condition = true;
            if (dice_num !== 6) {
                turn_checker = 'green';
                // current_player_checker.style.backgroundColor = 'green';
                let red_moverss_obj = global_object.red_moverss;
                if (red_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'green') {
            green_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            animation_stop = setInterval(animate_mover, 700, green_movers);
            current_player_checker.style.backgroundColor = 'green';
            actual_mover(dice_num, green_movers);
            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'yellow';
                // current_player_checker.style.backgroundColor = 'yellow';
                let green_moverss_obj = global_object.green_moverss;
                if (green_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'yellow') {
            yellow_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            current_player_checker.style.backgroundColor = 'yellow';
            animation_stop = setInterval(animate_mover, 700, yellow_movers);
            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'blue';
                // current_player_checker.style.backgroundColor = 'blue';
                let yellow_moverss_obj = global_object.yellow_moverss;
                if (yellow_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
            actual_mover(dice_num, yellow_movers);
        }
    }
    else if (players === 'players3') {
        if (turn_checker === 'blue') {
            blue_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            animation_stop = setInterval(animate_mover, 700, blue_movers);
            actual_mover(dice_num, blue_movers);
            current_player_checker.style.backgroundColor = 'blue';

            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'red';
                // current_player_checker.style.backgroundColor = 'red';
                let blue_moverss_obj = global_object.blue_moverss;
                if (blue_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'red') {
            red_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            animation_stop = setInterval(animate_mover, 700, red_movers);
            actual_mover(dice_num, red_movers);
            current_player_checker.style.backgroundColor = 'red';
            red_condition = true;
            if (dice_num !== 6) {
                turn_checker = 'green';
                // current_player_checker.style.backgroundColor = 'green';
                let red_moverss_obj = global_object.red_moverss;
                if (red_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
        else if (turn_checker === 'green') {
            green_movers.forEach(function (item) {
                item.disabled = false;
            });
            yellow_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            blue_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            red_movers.forEach(function (item) {
                item.style.zIndex = '10000'
            });
            green_movers.forEach(function (item) {
                item.style.zIndex = '100000'
            });
            animation_stop = setInterval(animate_mover, 700, green_movers);
            current_player_checker.style.backgroundColor = 'green';
            actual_mover(dice_num, green_movers);
            red_condition = false;
            if (dice_num !== 6) {
                turn_checker = 'blue';
                // current_player_checker.style.backgroundColor = 'yellow';
                let green_moverss_obj = global_object.green_moverss;
                if (green_moverss_obj.close_count === 4) {
                    console.log('All closed');
                    clearInterval(animation_stop);
                    dice.disabled = false;
                    return;
                }
            }
        }
    }




}


let correct_mover_checker = true;
let dice_numm;
let moverrss;

let actual_mover = (dice_number, mover) => {
    // console.log(mover[1]);
    // console.log('problem is here in 2 players');

    let object = mover[0].classList[1];
    dice_numm = dice_number;
    moverrss = mover;
    let actual_object = object + 's';
    console.log(actual_object);
    let listener = (e) => {
        let main_mover = e.target.id;
        let inside_obs = global_object[actual_object][main_mover];
        if (inside_obs.is_opened === false && dice_number === 6) {
            click.play();
            remove_all_listeners(mover, listener);
            mover_opener(mover, main_mover, dice_number, mover[1].classList[1], inside_obs.start_location);
        }
        else if (global_object[actual_object][main_mover].is_opened === true && inside_obs.has_won === false) {
            click.play();
            remove_all_listeners(mover, listener);
            mover_further(inside_obs, dice_number);

        }
        else if (inside_obs.has_won === true) {
            // console.log('Not opened');
            error.play();
            alert("Already at winning position choose another mover");
            clearInterval(animation_stop);
            remove_all_listeners(mover, listener);
            dice.disabled = false;
        }
        else if (inside_obs.is_opened === false && dice_number !== 6) {
            clearInterval(animation_stop);
            error.play();
            remove_all_listeners(mover, listener);
            // alert(`Can't use this mover it's not open yet`);
            dice.disabled = false;
            correct_mover_checker = false;
            // return 0;
            return 0;
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
    let x_locator = starting_point.getBoundingClientRect().left;
    let y_locator = starting_point.getBoundingClientRect().top;
    let mover_x_locator = main_movers.getBoundingClientRect().left;
    let mover_y_locator = main_movers.getBoundingClientRect().top;
    let resultant_x = x_locator - mover_x_locator + 8;
    let resultant_y = y_locator - mover_y_locator + 2;
    global_object[movers_object].close_count--;

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

// console.log(null);
let mover_further = (inside_obs, dice_output) => {
    let previous_x = inside_obs.previous_location_x;
    let previous_y = inside_obs.previous_location_y;
    let previous_pos = inside_obs.previous_location;
    let new_position_id = previous_pos + dice_output;
    let remaining_moves;
    let array_pos_checker = 0;
    let current_still;
    let arr_item;
    let defeated_mover;
    let defeated_mover_class;
    // if(!safe_point.classList[1])
    // {
    //     console.log('safe point not present');
    // }



    current_still = new_position_id;
    if (inside_obs.has_entered_wining_line === true) {
        winning_moves(dice_output, inside_obs);
        return;
    }

    if (new_position_id > 51) {
        if (!red_condition) {
            new_position_id = new_position_id - 52;
        }
        else {
            remaining_moves = new_position_id;
            new_position_id = 51;
            remaining_moves = remaining_moves - new_position_id;
            inside_obs.has_entered_wining_line = true;
        }
    }
    if (new_position_id > inside_obs.start_location - 2 && previous_pos < inside_obs.start_location && inside_obs.has_entered_wining_line === false) {
        console.log('entered stage before win');
        remaining_moves = new_position_id;
        new_position_id = inside_obs.start_location - 2
        remaining_moves = remaining_moves - new_position_id;
        inside_obs.has_entered_wining_line = true;
    }
    let safe_pos = 'l' + String(new_position_id);
    let safe_point = document.getElementById(safe_pos);
    console.log(safe_point);

    movers_position_arr.forEach(function (item, index) {
        if (inside_obs.has_entered_wining_line === true && inside_obs.id === item[1]) {
            let spliced = movers_position_arr.splice(index, 1);
            console.log(spliced);
            array_pos_checker = 1;
            return 0;
        }
        if (inside_obs.id === item[1]) {
            console.log('same mover checking and position update to new position');
            array_pos_checker = 1;
            item[0] = new_position_id;
            // return 0;
        }
        if (new_position_id === item[0] && safe_point.classList[1] === 'safe') {
            console.log('checking if it is a safe position or not, and it is safe position')
            array_pos_checker = 1;
            // return 0;
        }
        else if (new_position_id === item[0] && inside_obs.class !== item[2]) {
            defeated_mover = item[1];
            defeated_mover_class = item[2];
            let spliced = movers_position_arr.splice(index, 1);
            console.log(spliced);
            console.log(inside_obs.team, item[3]);
            if(inside_obs.team !== item[3])
            {
                manage_defeaters(defeated_mover, defeated_mover_class);
            }
            array_pos_checker = 1;
        }
    });

    if (array_pos_checker === 0) {
        movers_position_arr.push([new_position_id, inside_obs.id, inside_obs.class, inside_obs.team]);
    }
    else {
        array_pos_checker = 0;
    }
    console.log(movers_position_arr);

    inside_obs.previous_location = new_position_id;
    // console.log(new_position_id);
    let mover_actual = document.getElementById(inside_obs.id);

    let num_next = 'l' + String(new_position_id);
    let next_point = document.getElementById(num_next);
    let new_x_locator = next_point.getBoundingClientRect().left;
    let new_y_locator = next_point.getBoundingClientRect().top;
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
    if (current_still > inside_obs.start_location - 2 && previous_pos < inside_obs.start_location && inside_obs.has_entered_wining_line === true) {
        console.log('Win_zone_entry_check');
        winning_moves(remaining_moves, inside_obs);
    }
    if (current_still > 51 && red_condition && inside_obs.has_entered_wining_line === true) {
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
    // console.log(current_pos);
    // console.log(current_x_pos);
    // console.log(current_y_pos);
    // console.log(winner_moves);
    if (winner_moves + current_pos <= 6) {

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
    else {
        dice.disabled = false;
        clearInterval(animation_stop);
        return;
    }
    if (next_win_pos === 6) {

        if (players === 'all' || players === 'team') {
            if (dice_number !== 6) {
                if (turn_checker === 'blue') {
                    turn_checker = 'yellow';
                }
                else if (turn_checker === 'red') {
                    turn_checker = 'blue';
                }
                else if (turn_checker === 'green') {
                    turn_checker = 'red';
                }
                else if (turn_checker === 'yellow') {
                    turn_checker = 'green';
                }
            }
        }
        else if (players === 'gb') {
            if (dice_number !== 6) {
                console.log('condition checked', turn_checker)
                if (turn_checker === 'blue') {
                    turn_checker = 'green';
                }

                else if (turn_checker === 'green') {
                    turn_checker = 'blue';
                }
            }
        }
        else if (players === 'ry') {
            if (dice_number !== 6) {
                console.log('condition checked', turn_checker)
                if (turn_checker === 'red') {
                    turn_checker = 'yellow';
                }

                else if (turn_checker === 'yellow') {
                    turn_checker = 'red';
                }
            }
        }
        else if (players === 'players3') {
            if (dice_number !== 6) {
                if (turn_checker === 'blue') {
                    turn_checker = 'green';
                }
                else if (turn_checker === 'red') {
                    turn_checker = 'blue';
                }
                else if (turn_checker === 'green') {
                    turn_checker = 'red';
                }
            }
        }

        inside_obj.has_won = true;
        mover_in.play();
        in_game.pause();
        let playback = setTimeout(function () {
            in_game.play()
            in_game.loop = true;
        }, 2000);
        let classes = inside_obj.class;
        global_object[classes].win_count++;
        console.log('semi_winner');
        if (global_object[classes].win_count === 4) {
            winner++;
            console.log('new winner');
            global_object[classes].win_position = winner;
        }
        if (winner === 4) {
            console.log(global_object.blue_moverss.win_position,
                global_object.red_moverss.win_position,
                global_object.yellow_moverss.win_position,
                global_object.green_moverss.win_position,)
        }

        if (players === 'gb' || players === 'ry') {
            
            if (winner === 1) {
                // console.log('checking is it entered or not');
                Object.entries(global_object).forEach(([key, value]) => {
                    if (global_object[key].win_position === 0) {
                        loser.innerHTML = `Loser is ${global_object[key].player_name}`;
                    }
                    else if (global_object[key].win_position === 1) {
                        winner_1.innerHTML = global_object[key].player_name;
                    }
                });

                in_game.pause();
                in_game.loop = false;
                winning.play();
                winner_video.play();
                winning.loop = true;
                clearTimeout(playback);
                mover_in.pause();
                dice.disabled = true;
                winner_container.style.visibility = 'visible';
                // winner_container.style.display = 'flex';
            }
        }
        if (players === 'players3') {
            if (winner === 2) {
                // console.log('checking is it entered or not');
                Object.entries(global_object).forEach(([key, value]) => {
                    if (global_object[key].win_position === 0) {
                        loser.innerHTML = `Loser is ${global_object[key].player_name}`;
                    }
                    else if (global_object[key].win_position === 1) {
                        winner_1.innerHTML = global_object[key].player_name;
                    }
                    else if (global_object[key].win_position === 2) {
                        winner_2.innerHTML = global_object[key].player_name;
                    }
                });

                winner_container.style.visibility = 'visible';
                in_game.pause();
                in_game.loop = false;
                winning.play();
                winning.loop = true;
                winner_video.play();
                clearTimeout(playback);
                mover_in.pause();
                dice.disabled = true;
            }
        }
        if (players === 'all') {
            if (winner === 3) {
                in_game.pause();
                in_game.loop = false;
                winning.play();
                winner_video.play();
                winning.loop = true;
                clearTimeout(playback);
                mover_in.pause();
                dice.disabled = true;

                // console.log('checking is it entered or not');
                Object.entries(global_object).forEach(([key, value]) => {
                    if (global_object[key].win_position === 0) {
                        loser.innerHTML = `Loser is ${global_object[key].player_name}`;
                    }
                    else if (global_object[key].win_position === 1) {
                        winner_1.innerHTML = global_object[key].player_name;
                    }
                    else if (global_object[key].win_position === 2) {
                        winner_2.innerHTML = `${global_object[key].player_name}`;
                    }
                    else if (global_object[key].win_position === 3) {
                        winner_3.innerHTML = `${global_object[key].player_name}`;
                    }
                });

                winner_container.style.visibility = 'visible';
            }
        }
        if (players === 'team') {
            if (winner === 2) {
                in_game.pause();
                in_game.loop = false;
                winning.play();
                winner_video.play();
                winning.loop = true;
                clearTimeout(playback);
                mover_in.pause();
                dice.disabled = true;
                // console.log('checking is it entered or not');
                Object.entries(global_object).forEach(([key, value]) => {
                    if (global_object[key].win_position === 0) {
                        if(global_object[key].class === 'blue_moverss' || global_object[key].class ==='green_moverss') {
                            loser.innerHTML = `Losers are ${global_object.blue_moverss.player_name} & ${global_object.green_moverss.player_name}`;
                            winner_1.innerHTML = `${global_object[key].red_moverss.player_name} ${global_object[key].yellow_moverss.player_name}`;
                        }
                        else if(global_object[key].class === 'red_moverss' || global_object[key].class ==='yellow_moverss') {
                            loser.innerHTML = `Losers are ${global_object.red_moverss.player_name} & ${global_object.yellow_moverss.player_name}`;
                            winner_1.innerHTML = `${global_object[key].blue_moverss.player_name} ${global_object[key].green_moverss.player_name}`;
                        }
                        
                    }
                    
                });

                winner_container.style.visibility = 'visible';
            }
        }
        // console.log(typeof inside_obj.class);
    }
    dice.disabled = false;
    clearInterval(animation_stop);
}



let manage_defeaters = (defeated_mover_id, defeated_mover_class) => {
    destroyed.play();
    let defeated_obj = global_object[defeated_mover_class][defeated_mover_id];
    let mover_actual = document.getElementById(defeated_obj.id);
    console.log(mover_actual);
    global_object[defeated_mover_class].close_count++;

    const homeX = defeated_obj.home_x;
    const homeY = defeated_obj.home_y;
    const currentX = mover_actual.offsetLeft;
    const currentY = mover_actual.offsetTop;

    const translateX = homeX - currentX;
    const translateY = homeY - currentY;

    mover_actual.style.transition = 'transform 0.5s ease-in-out';
    mover_actual.style.transform = `translate(${translateX}px, ${translateY}px)`;

    setTimeout(() => {
        mover_actual.style.transition = '';
        mover_actual.style.transform = '';
    }, 500);
    defeated_obj.is_opened = false;
    defeated_obj.has_won = false;
    defeated_obj.previous_location = defeated_obj.start_location;
    defeated_obj.previous_location_x = defeated_obj.start_location;
    defeated_obj.previous_location_y = defeated_obj.start_location;
    defeated_obj.previous_result_x = 0;
    defeated_obj.previous_result_y = 0;


    console.log('Maybe defeated successfully');
    if (players === 'all' || players === 'team') {
        if (dice_number !== 6) {
            if (turn_checker === 'blue') {
                turn_checker = 'yellow';
            }
            else if (turn_checker === 'red') {
                turn_checker = 'blue';
            }
            else if (turn_checker === 'green') {
                turn_checker = 'red';
            }
            else if (turn_checker === 'yellow') {
                turn_checker = 'green';
            }
        }
    }
    else if (players === 'gb') {
        if (dice_number !== 6) {
            console.log('condition checked', turn_checker)
            if (turn_checker === 'blue') {
                turn_checker = 'green';
            }

            else if (turn_checker === 'green') {
                turn_checker = 'blue';
            }
        }
    }
    else if (players === 'ry') {
        if (dice_number !== 6) {
            console.log('condition checked', turn_checker)
            if (turn_checker === 'red') {
                turn_checker = 'yellow';
            }

            else if (turn_checker === 'yellow') {
                turn_checker = 'red';
            }
        }
    }
    else if (players === 'players3') {
        if (dice_number !== 6) {
            if (turn_checker === 'blue') {
                turn_checker = 'green';
            }
            else if (turn_checker === 'red') {
                turn_checker = 'blue';
            }
            else if (turn_checker === 'green') {
                turn_checker = 'red';
            }
        }
    }
}

