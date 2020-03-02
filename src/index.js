module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  matrix = matrix.reduce((sortArray, value, index) => {
    (index % 2 === 0 || index === 0) 
    ? sortArray = sortArray.concat(value) 
    :  sortArray = sortArray.concat(value.reverse());
    return sortArray;
  }, []);
  return matrix;
};
