var app=angular.module('ThaiPoultryExport',[])

app.controller('mainController',function($scope) {
  $scope.sortType = 'Partner';
  $scope.sortReverse = true;
  $scope.searchFish = '';
  
$scope.export = 
[{Partner:"Myanmar",Commodity:"Live animals",Value:"$1,709,504"},
{Partner:"Cambodia",Commodity:"Live animals",Value:"$571,145"},
{Partner:"Sri Lanka",Commodity:"Live animals",Value:"$3,065"},
{Partner:"France",Commodity:"Live animals",Value:"$12"},
{Partner:"Germany",Commodity:"Live animals",Value:"$2"},
{Partner:"Lao People's Dem. Rep.",Commodity:"Live animals",Value:"$1,703,858"},
{Partner:"Nepal",Commodity:"Live animals",Value:"$780,529"},
{Partner:"Pakistan",Commodity:"Live animals",Value:"$3,794"},
{Partner:"Qatar",Commodity:"Live animals",Value:"$7,625"},
{Partner:"Viet Nam",Commodity:"Live animals",Value:"$500"},
{Partner:"United Arab Emirates",Commodity:"Live animals",Value:"$35,489"},
{Partner:"Australia",Commodity:"Meat",Value:"$35"},
{Partner:"Bahrain",Commodity:"Meat",Value:"$1,399,475"},
{Partner:"Belgium",Commodity:"Meat",Value:"$3,022,078"},
{Partner:"Myanmar",Commodity:"Meat",Value:"$1,850,772"},
{Partner:"Cambodia",Commodity:"Meat",Value:"$1,100,189"},
{Partner:"Sri Lanka",Commodity:"Meat",Value:"$61,692"},
{Partner:"China",Commodity:"Meat",Value:"$96,721"},
{Partner:"Colombia",Commodity:"Meat",Value:"$74,520"},
{Partner:"France",Commodity:"Meat",Value:"$673,980"},
{Partner:"Germany",Commodity:"Meat",Value:"$8,596,348"},
{Partner:"China, Hong Kong SAR",Commodity:"Meat",Value:"$8,654,556"},
{Partner:"Ireland",Commodity:"Meat",Value:"$1,053,526"},
{Partner:"Italy",Commodity:"Meat",Value:"$144,137"},
{Partner:"Japan",Commodity:"Meat",Value:"$173,465,472"},
{Partner:"Rep. of Korea",Commodity:"Meat",Value:"$15"},
{Partner:"Lao People's Dem. Rep.",Commodity:"Meat",Value:"$117,296,831"},
{Partner:"Malaysia",Commodity:"Meat",Value:"$8,938,221"},
{Partner:"Maldives",Commodity:"Meat",Value:"$167,080"},
{Partner:"Oman",Commodity:"Meat",Value:"$507,584"},
{Partner:"Nepal",Commodity:"Meat",Value:"$411,514"},
{Partner:"Netherlands",Commodity:"Meat",Value:"$48,368,217"},
{Partner:"Aruba",Commodity:"Meat",Value:"$255,101"},
{Partner:"Philippines",Commodity:"Meat",Value:"$9,189"},
{Partner:"Qatar",Commodity:"Meat",Value:"$398,513"},
{Partner:"Russian Federation",Commodity:"Meat",Value:"$3,463,053"},
{Partner:"India",Commodity:"Meat",Value:"$148,666"},
{Partner:"Singapore",Commodity:"Meat",Value:"$1,198,120"},
{Partner:"Viet Nam",Commodity:"Meat",Value:"$397,779"},
{Partner:"South Africa",Commodity:"Meat",Value:"$992,096"},
{Partner:"Sweden",Commodity:"Meat",Value:"$207,832"},
{Partner:"Switzerland",Commodity:"Meat",Value:"$13"},
{Partner:"Syria",Commodity:"Meat",Value:"$33,992"},
{Partner:"United Arab Emirates",Commodity:"Meat",Value:"$9,122,037"},
{Partner:"United Kingdom",Commodity:"Meat",Value:"$21,484,559"}];
});