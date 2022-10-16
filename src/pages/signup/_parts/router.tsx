import { Router, Routes, Route, Outlet } from "@solidjs/router";
import Step1 from "./Step1.accnt-details";
import Step2 from "./Step2.profile";
import Step3 from "./Step3.pricing-plan";
import Steps from "../_components/Steps";
import type { JSX } from "solid-js";
import { Transition, TransitionGroup } from "solid-transition-group";
import { T } from "../../../components/Transitions";

export default function theRealOfficialRouter(props: {
  ssrRoute: string;
  headerChildren?: JSX.Element;
}) {
  return (
    <Router base="/signup" url={props.ssrRoute}>
      <header class="mb-16">
        {props.headerChildren}
        <Steps />
      </header>
      <Transition
        onEnter={async (el, done) => {
          await el.animate(
            [{ transform: "translateY(-50%)" }, { transform: "translateY(0)" }],
            {
              easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              duration: 150,
            }
          ).finished;
          done();
        }}
        onExit={async (el, done) => {
          await el.animate([]).finished;
          done();
        }}
      >
        <Routes>
          <Route path="/1" component={Step1} />
          <Route path="/2" component={Step2} />
          <Route path="/3" component={Step3} />
        </Routes>
      </Transition>
    </Router>
  );
}

// Source of this jank: https://codesandbox.io/s/solid-router-transitions-demo-b47ckq?file=/index.tsx:235-270
function AnimationWrapper(props: { children: JSX.Element }) {
  return (
    <Route
      path="/"
      component={() => (
        <T.SlideFromTop>
          <Outlet />
        </T.SlideFromTop>
      )}
    >
      {props.children}
    </Route>
  );
}
