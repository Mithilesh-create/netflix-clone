import axios from "axios";

export const regisUser = async (profileName, ImgUrl) => {
  const profileForm = document.querySelector("#profileSubmisson");
  if (profileForm) {
    profileForm.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();

        const userProfData = {
          assoc_name: profileName,
          profile_user_url: ImgUrl,
        };

        const res = await axios.post("profileReg", userProfData);
        if (!res.statusCode === 201) {
          console.log("User Registration failed");
        } else {
          window.location.href = "/wiw";
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};
