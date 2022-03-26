/* eslint-disable */
// Challenge 1 - Get the array of products.
import data from './data.json';
export default data;

// Challenge 2 - Get a list of all categories.
export const allCategories = data.map((item) => item.category);

// Challenge 3 - Make the categories list a list of unique values.
export const uniqueCategories = Array.from(new Set(allCategories));

// Challenge 4 - Make an Object whose keys are the names of categories and whose values are the number of times that category appears in the data.
export const categoryCount = allCategories.reduce((countObj, category) => {
  if (countObj[category]) {
    countObj[category] += 1;
  } else {
    countObj[category] = 1;
  }

  return countObj;
}, {});

// Challenge 5 - Use Reduce to make an array of objects that have a name and a count.
export const categoryNameCount = uniqueCategories.map((categoryName) => ({
  name: categoryName,
  count: categoryCount[categoryName],
}));

// Challenge 6 - Export all of the data you have collected.
