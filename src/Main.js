import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      // style={{ backgroundColor: isSelected ? "green" : "red" }}
      //   onClick={() => onClickHandler(index)}
      //In props , we set the isselected value to be boolean, but
      // we are passing here a string or a number , so make sure to convert it into boolean
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(Boolean(index))}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  //const [setSelectedIndex, selectedIndex] = useState();
  // It returns a pair of values: the current state and a function that updates it. but here we are doing wrong because  in first we write function and then we write current state that is wrong .
  const [selectedIndex, setSelectedIndex] = useState();

  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, [items]);

  useEffect(() => {
    setSelectedIndex(true);
  }, [items]);

  // const handleClick = index => {
  //   setSelectedIndex(index);
  // };

  const handleClick = (index) => {
    setSelectedIndex(Boolean(index));
    console.log(index);
  };

  //   return (
  //     <ul style={{ textAlign: 'left' }}>
  //       {items.map((item, index) => (
  //         <SingleListItem
  //           onClickHandler={() => handleClick(index)}
  //           text={item.text}
  //           index={index}
  //           isSelected={selectedIndex}
  //         />
  //       ))}
  //     </ul>
  //   )
  // };
  // While mapping over the array of items, we should have given the
  // key to each item to identify it uniquely.
  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
          key={index}
        />
      ))}
    </ul>
  );
};
// WrappedListComponent.propTypes = {
//   items: PropTypes.array(PropTypes.shapeOf({
//     text: PropTypes.string.isRequired,
//   })),
// };

// in place of array we have to use arrayOf and instead of shapOf we have to use shape . it is the predefined syntax
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

// WrappedListComponent.defaultProps = {
//   items: null,
// };
// the default items array was null, and it is
// not possible to map over null, so we need to initialize it with some value.
WrappedListComponent.defaultProps = {
  items: [
    { text: "Nitesh", index: false },
    { text: "Kumar", index: false },
    { text: "Jain", index: false },
  ],
};

const List = memo(WrappedListComponent);

export default List;
