
# SteeleyeAssignment
List Compontent :
  Lists are used to display data in an ordered format ,basically lists are one type of array. The map() function is used for traversing the lists.
 
Problems in Code:<br />

1) useState()->It returns a pair of values: the current state and a function that updates it. but here we are doing wrong because  in first we write function and then we write current state that is wrong .<br />
in wrong code it written as : const [setSelectedIndex, selectedIndex] = useState();<br />
right one is : const [selectedIndex, setSelectedIndex] = useState();<br />
2) In props , we set the isselected value to be boolean, but we are passing here a string or a number , so make sure to convert it into boolean <br />
wrong one:  onClick={() => onClickHandler(index)}<br />
right one:  onClick={() => onClickHandler(Boolean(index))<br />
3) While mapping over the array of items, we should have given the key to each item to identify it uniquely.<br />
4) in place of array we have to use arrayOf and instead of shapOf we have to use shape . it is the predefined syntax.<br />
wrong one: <br />
WrappedListComponent.propTypes = {<br />
  items: PropTypes.array(PropTypes.shapeOf({<br />
  text: PropTypes.string.isRequired,<br />
  })),<br />
    };<br />
Right One:<br />
WrappedListComponent.propTypes = {<br />
  items: PropTypes.arrayOf(<br />
    PropTypes.shape({<br />
      text: PropTypes.string.isRequired,<br />
    })<br />
  ),<br />
};<br />
5) the default items array was null, and it is not possible to map over null, so we need to initialize it with some value.<br />
wrong way:<br />
WrappedListComponent.defaultProps = {<br />
   items: null,<br />
   };<br />
Right Way:<br />
WrappedListComponent.defaultProps = {<br />
  items: [<br />
    { text: "Nitesh", index: false },<br />
    { text: "Kumar", index: false },<br />
    { text: "Jain", index: false },<br />
  ],<br />
};<br />
Code is Working:
![save](https://user-images.githubusercontent.com/56470007/193406442-5b10fdcc-1ba0-4ce2-974d-b3aaebca3d02.png)
