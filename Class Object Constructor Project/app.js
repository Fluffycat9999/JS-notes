//one class to create the object person, album, movie ***Model
//take arguments
class Movie{
    constructor(title, yearReleased, duration, genre){
        this.title = title;
        this.yearReleased = yearReleased;
        this.duration = duration;
        this.genre = genre;
    }
    calcAge(){ 
        return (new Date().getFullYear() - this.yearReleased);
    }
}

const rushHour = new Movie('Rush Hour', 1998, '1 hour 38 mins', 'Comedy/Thriller/Action');
console.log(rushHour);
console.log(rushHour.calcAge());

//***View */ class for the UI which contains methods(user interface)
/* class UI{
    
} */
//create/insert the html for the UI DISPLAY 

//clear fields method

//remove something/object


//Controller combines UI and model
//event handler with function
//get values


//instatiate new class/object album with variable name

//instantiate new UI const ui = new UI()


//call relevant methods


//separate event handler for removing/deleting