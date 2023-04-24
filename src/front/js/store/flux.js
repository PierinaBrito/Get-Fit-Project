const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      courses: [],
      token: sessionStorage.getItem("token") || null,
      calorias_ingeridas: "",
      calorias_gastadas: "",
      horas_ejercicio: "",
      horas_sueno: "",
      scoop_proteina: "",
      nombre: "",
      apellido: "",
      edad: "",
      genero: "",
      peso: "",
      estatura: "",
      p_puntos: "",
      puntos: "",
      puntos_negativo: "",
      data_puntos: [],
      data_sueno: [],
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
