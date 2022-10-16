import { AnchorProps, Link } from "@solidjs/router";
import type { ComponentProps, JSX } from "solid-js";

type NavLinkProps = { children?: JSX.Element } & (
  | ({ as: "a" } & AnchorProps)
  | ({ as: "button" } & ComponentProps<"button">)
);

const NavLink = {
  next: ({ children, ...baseProps }: NavLinkProps) => (
    <BaseLink {...baseProps}>
      {children ?? "Next"}
      <IconRight />
    </BaseLink>
  ),
  previous: ({ children, ...baseProps }: NavLinkProps) => (
    <BaseLink {...baseProps}>
      <IconLeft />
      {children ?? "Previous"}
    </BaseLink>
  ),
};

export default NavLink;

export const baseLinkStyles =
  "py-2 px-5 flex items-center font-display uppercase text-white bg-purple-700 hover:bg-purple-500 focus:bg-purple-400 rounded-md transition-colors";

function BaseLink(props: NavLinkProps) {
  if (props.as === "a") {
    return <Link class={baseLinkStyles} {...props} />;
  } else {
    return <button class={baseLinkStyles} {...props} />;
  }
}

function IconRight() {
  return (
    <svg class="-mr-3" width="2em" height="2em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11.7 15.3q-.475.475-1.087.212Q10 15.25 10 14.575v-5.15q0-.675.613-.937q.612-.263 1.087.212l2.6 2.6q.15.15.225.325q.075.175.075.375t-.075.375q-.075.175-.225.325Z"
      ></path>
    </svg>
  );
}

function IconLeft() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m12.3 15.3l-2.6-2.6q-.15-.15-.225-.325Q9.4 12.2 9.4 12t.075-.375q.075-.175.225-.325l2.6-2.6q.475-.475 1.087-.212q.613.262.613.937v5.15q0 .675-.613.937q-.612.263-1.087-.212Z"
      ></path>
    </svg>
  );
}
