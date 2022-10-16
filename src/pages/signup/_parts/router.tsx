import { Router, Routes, Route } from "@solidjs/router";
import Step1 from "./Step1.accnt-details";
import Step2 from "./Step2.pricing";
import Banner from "./Banner";

export default function theRealOfficialRouter(props: { ssrRoute: string }) {
  return (
    <Router base="/signup" url={props.ssrRoute}>
      <Banner />
      <Routes>
        <Route path="/1" component={Step1} />
        <Route path="/2" component={Step2} />
      </Routes>
    </Router>
  );
}
