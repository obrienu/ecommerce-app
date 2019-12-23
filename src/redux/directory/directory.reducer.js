import shoe from "../../assets/shoes.jpg";
import bag from "../../assets/bag.jpg";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";

const initial_state = {
  section: [
    {
      id: 1,
      title: "women",
      subtitle: "SHOP NOW",
      image: women
    },
    {
      id: 3,
      title: "bags",
      subtitle: "SHOP NOW",
      image: bag
    },
    {
      id: 4,
      title: "shoes",
      subtitle: "SHOP NOW",
      image: shoe
    },
    {
      id: 2,
      title: "men",
      subtitle: "SHOP NOW",
      image: men
    }
  ]
};

const directoryReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
