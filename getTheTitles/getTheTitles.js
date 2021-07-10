const getTheTitles = function(obj_array) {
  return obj_array.map(obj => {
    return obj.title;
  });
};

module.exports = getTheTitles;
