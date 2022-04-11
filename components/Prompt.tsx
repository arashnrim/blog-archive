import { ReactNode } from "react";

interface PromptProps {
  title?: string;
  status: string;
  children: ReactNode;
}

const Prompt = ({ title, status, children }: PromptProps) => {
  let borderColor = "";
  let promptBackground = "";

  switch (status) {
    case "info":
      borderColor = "border-gray-400";
      promptBackground = "";
      break;
    case "warn":
    case "warning":
      borderColor = "border-yellow-400";
      promptBackground = "bg-yellow-400";
      break;
    case "danger":
    case "error":
      borderColor = "border-red-500";
      promptBackground = "bg-red-400";
      break;
    case "resource":
      borderColor = "border-blue-400";
      promptBackground = "bg-blue-400";
    default:
      break;
  }

  return (
    <div
      className={`border ${borderColor} ${promptBackground} bg-opacity-10 rounded-2xl p-5 my-[1.3333333em] space-y-2 not-prose`}
    >
      {title && <h6>{title}</h6>}
      {children}
    </div>
  );
};

export default Prompt;
