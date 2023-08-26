import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllExperts } from "../reducers/expert.reducers";

const useGetAllExperts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetching experts");
    dispatch(getAllExperts({}));
  }, [dispatch]);
};

export default useGetAllExperts;
