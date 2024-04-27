import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImages } from "../store/dataSlice";
import { useState } from "react";
export const DataApi = () => {
  const dispatch = useDispatch();
  const [activeCategoriyId,setActiveCategoriyId] = useState();
  const handleImg = async (id) => {
    setActiveCategoriyId(id);
    console.log(id);
    await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setImages(data));
      });
  };
  const store = useSelector((state) => state.data);
  const categories = store.categories;
  const images = store.images;

  return (
    <div>
      {categories.map((el) => (
        <button key={el.id} onClick={() => handleImg(el.id) } className={activeCategoriyId === el.id ? "active": ""}>
          {el.name}
        </button>
      ))}
      <div>
        {images.map((img) => (
          <img key={img.id} src={img.url} width={300} height={300} />
        ))}
      </div>
    </div>
  );
};
