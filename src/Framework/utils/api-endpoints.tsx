

const url2 = 'https://sonyexch.in/get-json'
const url3 = 'https://silverexch24.com/'
const url = url2;
export const API_ENDPOINTS = {
    SPORTS_MATCHES:`${url}?filepath=game-list`,
    footbal:"get-json?filepath=game-list/cricketmatches",
    tennis:"get-json?filepath=game-list/tennismatches",
    MATCHES_DATA:`${url}?filepath`,
    CRICKET_FANCY_DATA: `${url}?filepath=cricket/session`,
    HORSE_RACING:`${url}?filepath=racecard/horse_race`,
    GREY_HOUND_RACING:`${url}?filepath=racecard/greyhound/greyhond_race`,
    RACING_DATA:`${url}?filepath`,
    LOGINVERIFICATION:`${url3}single_user_check_api`,
    LOGIN:`${url3}login_api`,
    USERDATA: `${url3}users_api`,
    CHANGE_PASSWORD:`${url3}change_password_api`,
    CURRENTBETS:`${url3}unsetteledbet_api`,
    ALLBETS:`${url3}bet_history_api`,
    ACCOUNT_STATEMENT: `${url3}account_statement_api`,
    QTECH_URL:`${url3}fun_api_qtech`,
    LOGOUT:`${url3}logout_api`,
    CASINO_HISTORY: `${url3}casino_history_api`,
    SCORECARDS: `${url}?filepath=score_card`,
    PLACEBET:`${url3}`,
    CASINO_SETTLEMENT: `${url3}qtech_bet_history_api`,
    DEPOSIT_AMOUNT: `${url3}deposit_amount_api`,
    UPI_DETAILS: `${url3}get_upi_details_api`,
    QR_DETAILS: `${url3}qr_code_api`,
    ACCOUNT_DETAILS: `${url3}get_accounts_api`,
    DEPOSIT_HISTORY: `${url3}deposit_history`,
    WITHDRAW_AMOUNT: `${url3}withdraw_api`,
    WITHDRAW_HISTORY: `${url3}withdraw_history_api`,
    PENDING_TRANSACTION :`${url3}pending_api`,
}

// Back

// addprofit in that team 
// others team minus BsExposure

// Lay

// minusexposure in that team
// others team add profit


// runnername filter,back- (caluculate total profitloss of that team) - (total exposire of other teams) (same for team1 ,team2,team3)
// runnername filter , lay - (caluculate total profitloss of that team) + (total exposire of other teams) (same for team1 ,team2,team3)
//event name se filter kro