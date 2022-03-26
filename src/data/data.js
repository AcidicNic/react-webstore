/* eslint-disable */
import productData from './data.json';
export default productData;

export const allCategories = productData.map((item) => item.category);

export const uniqueCategories = Array.from(new Set(allCategories));

export const categoryCount = allCategories.reduce((countObj, category) => {
  if (countObj[category]) {
    countObj[category] += 1;
  } else {
    countObj[category] = 1;
  }

  return countObj;
}, {});

export const categoryNameCount = uniqueCategories.map((categoryName) => ({
  name: categoryName,
  count: categoryCount[categoryName],
}));

export const totalPrice = productData.reduce((totalPrice, item) => {
  return totalPrice + parseFloat(item.price.slice(1));
}, 0);
