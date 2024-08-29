import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "./hooks/useAxios";
import { ACTIONS } from "./redux/actions";
import Cards from "./components/Cards";
import AppBars from "./components/AppBars";

function App() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    useAxios()
      .get("products")
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: res.data });
      });
  }, [refresh]);

  return (
    <>
      <AppBars setRefresh={setRefresh} refresh={refresh} />
      <div className="flex flex-wrap justify-center gap-[10px] mx-auto w-[1200px] my-[10px] ">
        {products.map((item) => (
          <div key={item.id} className="hover:scale-105 duration-300">
            <Cards item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
