import { useNavigate } from "@solidjs/router";
import { nanoid } from "nanoid";
import { ComponentProps, createSignal, JSX, JSXElement, Show } from "solid-js";
import { z } from "zod";
import Form from "../../../components/Form";
import { accountDetailsSchema } from "../_components/formSchemas";
import NavLink from "../_components/NavLink";

type Errors = z.typeToFlattenedError<z.infer<typeof accountDetailsSchema>>;

export default function Step1() {
  const [errors, setErrors] = createSignal<Errors | undefined>(undefined);
  const navigate = useNavigate();
  return (
    <main>
      <Form
        class="grid gap-12"
        method="post"
        action="/signup/1"
        validator={accountDetailsSchema}
        onValidated={(parsedResult) =>
          parsedResult.success
            ? setErrors(undefined)
            : setErrors(parsedResult.error.flatten())
        }
        onSubmitted={(apiResponse) => {
          if (apiResponse.status === 200) {
            navigate("/2");
          }
        }}
      >
        <div class="grid gap-8">
          {JSON.stringify(errors(), null, 2)}
          <LabelledInput name="email" type="text">
            Email
          </LabelledInput>
          <Error message={errors()?.fieldErrors.email} />
          <LabelledInput name="password" type="password">
            Password
          </LabelledInput>
          <Error message={errors()?.fieldErrors.password} />
          <LabelledInput name="confirmPassword" type="password">
            Confirm password
          </LabelledInput>
          <Error message={errors()?.fieldErrors.confirmPassword} />
        </div>
        <div class="flex">
          <NavLink.next class="flex-1" as="button" type="submit" />
        </div>
      </Form>
    </main>
  );
}

function Error(props: { message: JSX.Element }) {
  return (
    <Show when={props.message}>
      <p class="bg-red-200 text-red-900 px-3 py-1 rounded-sm">
        {props.message}
      </p>
    </Show>
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
