import type { JSX } from "solid-js";

export default function StepWrapper(props: {
  main: JSX.Element;
  lowerNav: JSX.Element;
}) {
  return (
    <main class="grid gap-12">
      <div>{props.main}</div>
      <div class="flex justify-between">{props.lowerNav}</div>
    </main>
  );
}
