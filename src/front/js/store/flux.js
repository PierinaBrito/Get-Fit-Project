const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      courses: [],
      token: sessionStorage.getItem("token") || null,
      user: {}, 
    },
    actions: {
      login: async (email, password) => {
        console.log(email, password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/login`,
            opts
          );
          if (!response.ok) {
            console.log(response);
            return false;
          }
          const data = await response.json();
          setStore({ token: data.token });
          sessionStorage.setItem("token", data.token);
          //getActions.read_variable_user();
          return true;
          console.log(data);
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      logout: () => {
        console.log("logout");
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },

      signup: async (data) => {
        console.log(data);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user`,
            opts
          );

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

      read_variable_user: async () => {
        let store = getStore()
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            //'Access-Control-Allow-Origin': 'https://3000-parrajuanpa-proyectofin-zrmgjhhsi40.ws-us97.gitpod.io',
            "Authorization": `Bearer ${store.token}`
          }
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user`,
            opts
          );

          if (response.ok) {
            console.log(response);
            const data = await response.json();
            setStore({
              user: data
            });
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      dia: async (data) => {
        console.log(data);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/dia`,
            opts
          );
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

      configuracion: async (data) => {
        console.log(data);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/configuracion`,
            opts
          );
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
