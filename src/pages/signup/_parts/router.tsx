import { Router, Routes, Route } from "@solidjs/router";
import Step1 from "./Step1.accnt-details";
import Step2 from "./Step2.profile";
import Step3 from "./Step3.pricing-plan";
import Steps from "../_components/Steps";
import type { JSX } from "solid-js";

export default function theRealOfficialRouter(props: {
  ssrRoute: string;
  headerChildren?: JSX.Element;
}) {
  return (
    <Router base="/signup" url={props.ssrRoute}>
      <header class="mb-12">
        {props.headerChildren}
        <Steps />
      </header>
      <Routes>
        <Route path="/1" component={Step1} />
        <Route path="/2" component={Step2} />
        <Route path="/3" component={Step3} />
      </Routes>
    </Router>
  );
}
