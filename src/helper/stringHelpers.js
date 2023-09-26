import moment from "moment";

export const titleCase = (string) => {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence;
};

export const formatDate = (value) => {
  let date = new Date(value);
  return moment(date).format("Do MMM YYYY");
};
