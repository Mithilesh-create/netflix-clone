import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
let CardNumberElement = null;
let CardExpiryElement = null;
let CardCvcElement = null;
let stripe = null;
export const stripeFunction = async () => {
  stripe = await loadStripe(
    "pk_test_51JFKETSCFGtmTjeQm3gCE9CUIjLa9Dkzkz61rv9vjqfF8ZlM27sFJ0S688zT35SDlorpo7x4XrZaEffaHdhZNc8K00BYXwR4wh"
  );
  const elements = stripe.elements();
  let style = {
    base: {
      fontSize: "24px",
      color: "#424770",
      "::placeholder": {
        color: "#666666",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  };
  CardNumberElement = elements.create("cardNumber", { style });
  CardExpiryElement = elements.create("cardExpiry", { style });
  CardCvcElement = elements.create("cardCvc", { style });
  //
  CardNumberElement.mount("#payment_card");
  CardExpiryElement.mount("#payment_card_expiration");
  CardCvcElement.mount("#payment_card_cvv");
};
export const sendDataServer = async (
  emailValue,
  passValue,
  firstName,
  lastName,
  monthlyamount,
  PriceDataInfo
) => {
  const paymentForm = document.querySelector("#formSubmisson");
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const paymentObject = {
        user_mail: emailValue,
        hash_password: passValue,
        first_name: firstName,
        last_name: lastName,
        plan_type: PriceDataInfo,
        monthly_amount: monthlyamount,
      };
      stripe
        .createToken(CardNumberElement)
        .then((res) => {
          paymentObject.stripeToken = res.token.id;
          axios
            .post("/registerDB", paymentObject)
            .then((res) => {
              if (res.data.message === "Successful") {
                window.location.href = "/RegisterNewUser";
              }
            })
            .catch((err) => {
              console.log("error got");
              console.log(err.data.message);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(paymentObject.stripeToken);
    });
  }
};
