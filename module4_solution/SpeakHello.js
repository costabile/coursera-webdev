/* Script 2 for Module 4 Assignment
 * Course: HTML, CSS, and Javascript for Web Developers (Coursera)
 * Instructor: Yaakov Chaikin
 * 
 * Written by: Jason Costabile
 */
 
( function (window) {
	var helloSpeaker = {};
	
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	
	window.helloSpeaker = helloSpeaker;
})(window);
