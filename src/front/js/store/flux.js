const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      courses: [],
      token: sessionStorage.getItem("token") || null,
    },
    actions: {
      login: async (email, password) => {
        console.log(email, password);
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            "https://3001-parrajuanpa-proyectofin-xrt33hf9rer.ws-us94.gitpod.io/api/login",
            opts
          );
          {
            /* `https://3001-fuchsia-toucan-q9ozqifl0fb.ws-us93.gitpod.io/api/login`, */
          }
          if (!response.ok) {
            console.log(response);
            return false;
          }
          const data = await response.json();
          setStore({ token: data.token });
          sessionStorage.setItem("token", data.token);
          return true;
          console.log(data);
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      signup: async (data) => {
        console.log(data);
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        try {
          const response = await fetch(
            "https://3001-parrajuanpa-proyectofin-xrt33hf9rer.ws-us94.gitpod.io/api/user",
            opts
          );
          {
            /* `https://3001-fuchsia-toucan-q9ozqifl0fb.ws-us93.gitpod.io/api/user`, */
          }

          if (!response.ok) {
            console.log(response);
            return false;
          }
          const data = await response.json();
          console.log(data);
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    },
  };
};

export default getState;
