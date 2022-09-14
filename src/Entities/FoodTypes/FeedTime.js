module.exports.FeedTime = class FeedTime{
    constructor(){
        this.feedTime = this.GetTime();
    }
    GetTime(){
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
        var yyyy = date.getFullYear();
    
        let today = mm + '/' + dd + '/' + yyyy;
        return today.toString();
      }
}