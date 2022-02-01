import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { AiOutlineSmile, AiOutlineFrown } from "react-icons/ai";

const options = [
  {
    icon: <AiOutlineSmile />,
    text: "Liked the post?",
    key: "liked",
  },
  {
    icon: <AiOutlineFrown />,
    text: "Didn't like the post?",
    key: "disliked",
  },
];

const Feedback = () => {
  const [buttonSelected, setButtonSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [stored, setStored] = useState("false");
  const router = useRouter();

  const submitFeedback = async () => {
    const data = {
      option: buttonSelected,
      feedback: feedback ? feedback : undefined,
      post: router.asPath,
    };

    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setStored(response.ok ? "true" : "error");
    });
  };

  return (
    <section className="space-y-5" id="feedback">
      {stored === "true" ? (
        <div className="p-5 text-lg border border-gray-700 rounded-lg sm:text-xl">
          <p>Thank you!</p>
          <p>
            Your feedback has been sent successfully. I view feedback as
            something valuable, so I greatly appreciate you taking the time!
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5 md:space-y-0 md:space-x-5">
            {options.map((option) => (
              <button
                key={option.key}
                onClick={() =>
                  setButtonSelected(
                    buttonSelected && buttonSelected === option.key
                      ? ""
                      : option.key
                  )
                }
              >
                <div
                  className={`flex flex-row items-center p-5 space-x-2 text-lg sm:text-xl transition-colors duration-200 border ${
                    buttonSelected === option.key
                      ? "border-blue-400"
                      : "border-gray-700"
                  } rounded-lg hover:border-blue-400`}
                >
                  {option.icon}
                  <p>{option.text}</p>
                </div>
              </button>
            ))}
          </div>
          <div
            className={`${
              !buttonSelected ? "hidden" : ""
            } space-y-5 text-lg sm:text-xl`}
          >
            <span className="space-y-2">
              <p>Would you like to give some feedback?</p>
              <p>
                You mentioned that{" "}
                {buttonSelected === "liked"
                  ? "you liked the post. What parts of it did you like?"
                  : "you didn't like the post. What parts of it could be improved?"}
              </p>
            </span>
            <textarea
              className="w-full p-5 break-all bg-gray-900 border border-gray-700 rounded-lg"
              rows={5}
              placeholder="Enter feedback here, if you'd like!"
              onBlur={(e) => setFeedback(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => submitFeedback()}
              className="px-5 py-2 border border-gray-700 rounded-lg hover:border-blue-400"
            >
              Submit
            </button>
            <p className={`${!(stored === "error") && "hidden"} text-red-400`}>
              Sorry, something went wrong when sending your feedback. Try again
              later if the problem still persists.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Feedback;
