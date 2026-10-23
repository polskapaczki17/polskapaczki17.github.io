/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Santino Taylor
      Date:   10/19/2026

      Filename: project02-03.js
 */

document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over a square";
};

document.getElementById("square").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
};

document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over a triangle";
};

document.getElementById("triangle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
};

document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over a circle";
};

document.getElementById("circle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
};