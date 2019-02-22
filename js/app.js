
	var playername = getplayername();
    var startgame = letsbegin();
	validateinput(startgame);
	var age = getagevalue();
	validateage(age);
	var maritalstatus = getmaritalstatus();
	checkmarried(maritalstatus);
	var degreeholder = getdegree();
	Checkdegree(degreeholder);

	alert('We came to the end of the game. Thanks for playing!!');


/* get player name */
function getplayername() {
	user = window.prompt('How can I address you');
	return player;
};


/* intro msg */
function letsbegin() {
		startgame = window.prompt('Howdy ' + player + ' are you excited on guessing about me?');
		return startgame;
};


/* check if user is interseted in playing */
function validateinput(startgame){
	startgame = this.startgame;
	startgame = startgame.toUpperCase();

	if (startgame === null) {
		alert('You did not enter any value')
	}
	else if (startgame === 'Y' || startgame === 'YES')
  {
		alert('Cool, Lets start');
	}
	else {
		alert('hmm.. Sorry about that - but still lets give a shot');
	}
};

/* The function prompts user to enter age */
function getagevalue() {
	age = window.prompt('What is my age');
	return age;
};

/* validate age */
function validateage(age){
	age = this.age;
	var actualage = 33;
	if (age === null) {
		alert('You have not entered any age :(')
	}
	else if (age === actualage) {
		alert('Thats awesome '+ age +' is correct, keep going!!');
	}
	else {
        if (age < 50) {
        alert('Oops!! you guessed it lower than my actual age which is ' + age);
        }
        else {
            alert('Oops!! you guessed it higher than my actual age which is ' + age); 
        }
	}
};

function getmaritalstatus() {
	maritalstatus = window.prompt('How about my marital status?');
	return maritalstatus;
};

/* validate marital status*/
function checkmarried(maritalstatus){
	maritalstatus = this.maritalstatus;
    maritalstatus = maritalstatus.toUpperCase();

	if (maritalstatus === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (maritalstatus === 'Y' || maritalstatus === 'YES') {
		alert('You guessed it right!!');
	}
	else {
		alert('I too wish I am married by now, but still I am searching for my life partner');
	}
};

function getdegree() {
	degreeholder = window.prompt('Do you think I hold a degree?');
	return degreeholder;
};


/* The function checks validates the age provided by user */
function Checkdegree(degreeholder){
	degreeholder = this.degreeholder;
	if (degreeholder === 'Y' || degreeholder === 'YES') {
		alert('You got it correct')
	}
	else {
		alert('Ops!! actually I am a degree holder.');
	}
};


