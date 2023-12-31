import { Form, useFetcher } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";
function Intro() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Whats is your Name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />

          <input type="hidden" name="_action" value="newUser" />

          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}

export default Intro;
