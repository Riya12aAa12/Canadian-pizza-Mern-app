import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;


export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post(`${apiUrl}/api/orders/placeorder`, {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "USER_ORDER_REQUEST",
  });
  try {
    const response = await axios.post(`${apiUrl}/api/orders/getuserorder`, {
      userid: currentUser._id,
    });
    // console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};
export const getAllOrders = () => async (dispatch, getState) => {
  //const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "ALL_ORDER_REQUEST",
  });
  try {
    const response = await axios.get(`${apiUrl}/api/orders/alluserorder`);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    await axios.post(`${apiUrl}/api/orders/deliverorder`, { orderid });
    alert("Deliverd Success");
    const orders = await axios.get(`${apiUrl}/api/orders/alluserorder`);
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};
