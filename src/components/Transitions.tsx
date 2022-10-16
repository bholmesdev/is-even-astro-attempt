import type { JSX } from "solid-js";
import { Transition } from "solid-transition-group";

type TProps = { children: JSX.Element } & TransitionProps;

export const T = {
  SlideFromTop,
};

function SlideFromTop(props: TProps) {
  return (
    <Transition
      onEnter={async (el, done) => {
        await el.animate(
          [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
          {
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            duration: 150,
          }
        ).finished;
        done();
      }}
      onExit={async (el, done) => {
        await el.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(100%)" }],
          {
            easing: "cubic-bezier(0.36, 0, 0.66, -0.56)",
            duration: 150,
          }
        ).finished;
        done();
      }}
      {...props}
    />
  );
}

// Copied from source code. Not exposed as export!
type TransitionProps = {
  name?: string;
  enterActiveClass?: string;
  enterClass?: string;
  enterToClass?: string;
  exitActiveClass?: string;
  exitClass?: string;
  exitToClass?: string;
  onBeforeEnter?: (el: Element) => void;
  onEnter?: (el: Element, done: () => void) => void;
  onAfterEnter?: (el: Element) => void;
  onBeforeExit?: (el: Element) => void;
  onExit?: (el: Element, done: () => void) => void;
  onAfterExit?: (el: Element) => void;
  children?: JSX.Element;
  appear?: boolean;
  mode?: "inout" | "outin";
};
