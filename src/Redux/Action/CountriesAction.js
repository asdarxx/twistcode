export const setCountries = (data) => {
    return {
      type: "SET",
      payload: {
        data : data,
      },
    };
  };