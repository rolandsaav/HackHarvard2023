const {default : Terra} = require("terra-api");
const terra = new Terra("stuff-prod-2bIuU8nOeP","6LEi1JEeTyM4gBicUk-vroFGct8UU0u9", "");
const USER_ID = "insert string here"; 

const api_key = '6LEi1JEeTyM4gBicUk-vroFGct8UU0u9';
const reference_id = 'stuff-prod-2bIuU8nOeP';

terra.getProviders().then((p) => {console.log(p);})

terra
  .getUsers()
  .then((p) => {
  	console.log(p);
	})


terra
    .generateWidgetSession({
      providers: ["GARMIN"],
      authSuccessRedirectUrl: "https://server-tiktdolzja-ue.a.run.app",
      authFailureRedirectUrl: "failure.com",
  		language: 'en'
    })
    .then((s) => {
      console.log(s);
    });

const heart_rate_data = () =>
{
    try {
         return terra.getActivity({userId: USER_ID,startDate: new Date("2023-10-21"), toWebhook: false})["heart_rate_data"]["summary"]["avg_hr_bpm"];
    }
    catch (error){
        console.log("Error occured");
    }
}