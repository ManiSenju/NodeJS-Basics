angular.module('TestApp',[]);

angular.module('TestApp').controller("MainController",ctrlFunc);

function ctrlFunc(){
    this.message="Hai There";

    //this.people =[{name:"Mani Senju"},{name:"Madara Uchiha"},{name:"Kakashi Hatakey"}];

    this.people = clientPeople;
}