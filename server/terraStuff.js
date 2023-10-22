const {default : Terra} = require("terra-api");
const terra = new Terra("stuff-prod-2bIuU8nOeP","6LEi1JEeTyM4gBicUk-vroFGct8UU0u9", "");
//const userData = //get user data based off of the other js files

terra.getProviders().then((p) => {console.log(p);})

terra
  .getUsers()
  .then((p) => {
  	console.log(p);
	})


terra
    .generateWidgetSession({
      providers: ["GARMIN"],
      authSuccessRedirectUrl: "success.com",
      authFailureRedirectUrl: "failure.com",
  		language: 'en'
    })
    .then((s) => {
      console.log(s);
    });
function takeHeartRateDuringEvent(hours)
{
    time = Math.round(hours * 6);
    const date = new Date();
    heartRateData = JSON.parse(terra.getActivity({userData,date})["heart_rate_data"]["detailed"]["hr_samples"]);
    let x = 0;
    for (let i = 0; i < time; i++)
    {
        x += heartRateData.pop();
    }
    x = Math.round(x/time);
    return json({userID : userData, averageRate: x} );
}