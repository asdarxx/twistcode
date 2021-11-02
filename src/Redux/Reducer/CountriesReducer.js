const initialState = {
    dataCountries : [],
  };

  const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET":
        return {
          ...state,
          dataCountries: action.payload.data
         
        };
      default:
        return { ...state };
    }
  };
  
export default countriesReducer;