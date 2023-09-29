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

/**
 * Accept object and returns form fields with their values
 * @param data object with keys and values
 * @returns Form fields with values
 */
export const getFormData = (data) => {
  let formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  return formData;
};
