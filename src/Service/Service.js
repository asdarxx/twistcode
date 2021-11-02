export const getCountries = async () => {
    const url = 'https://countriesnow.space/api/v0.1/countries/';
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };