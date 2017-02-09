/* Script 3 for Module 4 Assignment
 * Course: HTML, CSS, and Javascript for Web Developers (Coursera)
 * Instructor: Yaakov Chaikin
 * 
 * Written by: Jason Costabile
 */
 
( function (window) {
	var byeSpeaker = {};
	
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;
})(window);
