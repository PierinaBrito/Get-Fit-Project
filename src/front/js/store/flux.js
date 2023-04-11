const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      courses: [],
    },
    actions: {
      courses: async () => {
        const url =
          "https://3001-parrajuanpa-proyectofin-hmsmcsanbil.ws-us93.gitpod.io/api/login";
        const response = await fetch(url);
        const data = await response.json();
        setStore({ courses: data });
      },
      otracosa: () => {
        return 1;
      },
    },
  };
};

export default getState;
