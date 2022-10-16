import { nanoid } from "nanoid";
import type { ComponentProps, JSX } from "solid-js";
import NavLink from "../_components/NavLink";
import StepWrapper from "../_components/StepWrapper";

export default function Step1() {
  return (
    <StepWrapper
      main={
        <form class="grid gap-8">
          <LabelledInput name="email" type="text">
            Email
          </LabelledInput>
          <LabelledInput name="password" type="password">
            Password
          </LabelledInput>
          <LabelledInput name="confirm-password" type="password">
            Confirm password
          </LabelledInput>
        </form>
      }
      lowerNav={
        <>
          <NavLink.next href="/2" />
        </>
      }
    />
  );
}

function LabelledInput({
  children,
  ...inputProps
}: { children: JSX.Element } & ComponentProps<"input">) {
  const id = nanoid(6);
  return (
    <div class="grid gap-4">
      <label class="text-sm font-bold" id={id}>
        {children}
      </label>
      <input
        id={id}
        class="outline outline-2 outline-slate-200 focus:outline-purple-500 px-4 py-2 rounded-sm transition-colors"
        {...inputProps}
      />
    </div>
  );
}
