import axios from "axios";

export const sendLoginServer = async (emailValue, passValue) => {
  const loginForm = document.querySelector("#formSubmisson");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginObj = {
        user_mail: emailValue,
        unhashed_password: passValue,
      };
      axios
        .post("loginDB", loginObj)
        .then((res) => {
          if (res.data.message === "Success") {
            window.location.href = "/wiw";
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
};
