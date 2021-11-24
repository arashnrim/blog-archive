import React, { ReactNode } from "react";

interface InlineLinkProps {
  link: string;
  redirect: boolean;
  children: ReactNode;
}

const InlineLink = ({ link, redirect, children }: InlineLinkProps) => (
  <a
    href={link}
    target={redirect ? "_blank" : ""}
    rel="noreferrer"
    className="transition dotted hover:opacity-75"
  >
    {children}
  </a>
);

export default InlineLink;
