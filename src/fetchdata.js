import { setCategories, setImages } from "./store/dataSlice";

export const fetchData = () => {
  return (dispatch) => {
    try {
      fetch("https://api.thecatapi.com/v1/categories")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(setCategories(data));
        });
        fetch(`https://api.thecatapi.com/v1/images/search?limit=2`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(setImages(data));
        });
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
};
