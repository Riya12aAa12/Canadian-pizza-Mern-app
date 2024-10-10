import axios from "axios";
import swal from "sweetalert";
const apiUrl = process.env.REACT_APP_API_URL;
console.log(process.env.REACT_APP_API_URL);


export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: `GET_PIZZAS_REQUEST` });
  try {
    const response = await axios.get(`${apiUrl}/api/pizzas/getAllPizzas`);
    // console.log(response.data);
    dispatch({ type: `GET_PIZZAS_SUCCESS`, payload: response.data });
  } catch (err) {
    dispatch({ type: `GET_PIZZAS_FAIL`, payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: `ADD_PIZZAS_REQUEST` });
  try {
    await axios.post(`${apiUrl}/api/pizzas/addpizza`, { pizza });
    dispatch({ type: `ADD_PIZZAS_SUCCESS` });
  } catch (err) {
    dispatch({ type: `ADD_PIZZAS_FAIL`, payload: err });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: `GET_PIZZABYID_REQUEST` });
  try {
    const response = await axios.post(`${apiUrl}/api/pizzas/getpizzabyid`, { pizzaId });
    dispatch({ type: `GET_PIZZABYID_SUCCESS`, payload: response.data });
  } catch (err) {
    dispatch({ type: `GET_PIZZABYID_FAIL`, payload: err });
  }
};
export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: `UPDATE_PIZZABYID_REQUEST` });
  try {
    const response = await axios.post(`${apiUrl}/api/pizzas/updatepizza`, {
      updatedPizza,
    });
    dispatch({ type: `UPDATE_PIZZABYID_SUCCESS`, payload: response.data });
    window.location.href = `/admin/pizzalist`;
  } catch (err) {
    dispatch({ type: `UPDATE_PIZZABYID_FAIL`, payload: err });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post(`${apiUrl}/api/pizzas/deletepizza`, { pizzaId });
    swal(`Pizza Deleted Succss!`, `success`);
    window.location.href = `/admin/pizzalist`;
    // console.log(res);
  } catch (error) {
    swal(`Errro While Deleteing Pizza`);
  }
};

export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filterdPizza;
  dispatch({ type: `GET_PIZZAS_REQUEST` });
  try {
    const res = await axios.get(`${apiUrl}/api/pizzas/getAllPizzas`);
    if(searchkey !== ``){
      filterdPizza = res.data.filter((pizza) =>
      pizza.name === searchkey
    );
    }
    
    else if (category !== `All`) {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category=== category
      );
    }
    else{
      filterdPizza = res.data;
    }
    dispatch({ type: `GET_PIZZAS_SUCCESS`, payload: filterdPizza });
  } catch (error) {
    dispatch({ type: `GET_PIZZAS_FAIL`, payload: error });
  }
};
