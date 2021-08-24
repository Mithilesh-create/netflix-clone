import axios from "axios";

export const updateProfiledata = async (profileName, ImgUrl, _id) => {
  const profileForm = document.querySelector("#profileSubmisson");
  if (profileForm) {
    profileForm.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();

        const userProfData = {
          id: _id,
          assoc_name: profileName,
          profile_user_url: ImgUrl,
        };
        const res = await axios.post("profileUpdate", userProfData);
        if (!res.statusCode === 201) {
          console.log("User Updation failed");
        } else {
          window.location.href = "/wiw";
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};
