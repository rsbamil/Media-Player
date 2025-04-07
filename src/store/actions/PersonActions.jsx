import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";
export { removeperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
    const tvcredits = await axios.get(`/person/${id}/tv_credits`);
    const moviecredits = await axios.get(`/person/${id}/movie_credits`);
    let ultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedcredits: combinedcredits.data,
      tvcredits: tvcredits.data,
      moviecredits: moviecredits.data,
    };
    dispatch(loadperson(ultimatedetails));
  } catch (error) {
    console.error(error);
  }
};
