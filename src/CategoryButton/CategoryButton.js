/*
 * CategoryButton.js
 **/
import './CategoryButton.css';

export default function CategoryButton(props) {
  return (
    <div className="categoryBtnDiv">
      <button className="categoryBtn">{props.category.name} ({props.category.count})</button>
    </div>
  );
}