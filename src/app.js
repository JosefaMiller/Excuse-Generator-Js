/* eslint-disable */
import "./style.css";
import "./index.html";

window.onload = function() {
  function rndm() {
    let who = ["The dog", "My granma", "His turtle", "My bird"];
    let action = ["eat", "pissed", "crushed", "broked"];
    let what = ["my homework", "the car", "the keys"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let who1 = Math.floor(Math.random() * who.length);
    let action1 = Math.floor(Math.random() * action.length);
    let what1 = Math.floor(Math.random() * what.length);
    let when1 = Math.floor(Math.random() * when.length);
    return (
      who[who1] + " " + action[action1] + " " + what[what1] + " " + when[when1]
    );
  }
  function change() {
    document.querySelector("p").innerHTML = rndm();
  }
  document.getElementById("button").onclick = function() {
    change();
  };
};
