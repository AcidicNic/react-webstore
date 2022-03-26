/*
 * App.js
 **/
import './App.css';

import CategoryButton from './CategoryButton/CategoryButton';

// Challenge 7 - Import your exported data into the App component.
import data, { uniqueCategories, categoryCount, categoryNameCount } from './data/data'

function App() {
  return (
    <div className="App">
      {/* Challenge 8 - Display the categories as buttons.*/}
      {categoryNameCount.map( (categoryDetails) => {
        return <CategoryButton category={categoryDetails} />;
      })}
    </div>
  );
}

export default App;
