var i = 0;

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var serving = katzDeliLine.shift();
  return ("Currently serving " + serving + ".");
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  for 
  var position = katzDeliLine.length;
  if (katzDeliLine.length < 1) {
    return ("The line is currently empty.");
  } else {
    return ("The line is currently: " + position + ". " + name);
  }
}