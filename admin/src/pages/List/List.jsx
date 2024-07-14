import "./List.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_URL_IMG = import.meta.env.VITE_API_URL_IMG;
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${API_URL}/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.delete(`${API_URL}/remove`, {
        data: { id: foodId },
      });
      if (response.data.success) {
        await fetchList();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to remove food: " + error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${API_URL_IMG}/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className="remove" onClick={() => removeFood(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
