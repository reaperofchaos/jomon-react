import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getExpertDetailForId } from "../reducers/expert.reducers";

const useGetExpertDetails = (id: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertDetailForId(id));
  }, [id]);
};

export default useGetExpertDetails;
