import { useNavigate } from "@solidjs/router";
import { nanoid } from "nanoid";
import { ComponentProps, JSX, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { z } from "zod";
import Form from "../../../components/Form";
import { accountDetailsSchema } from "../_components/formSchemas";
import NavLink from "../_components/NavLink";

type Errors = z.typeToFlattenedError<z.infer<typeof accountDetailsSchema>>;

const initialErrors = {
  fieldErrors: {},
  formErrors: [],
};

export default function Step1() {
  const [errors, setErrors] = createStore<Errors>(initialErrors);
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
            ? setErrors(initialErrors)
            : setErrors(parsedResult.error.flatten())
        }
        onSubmitted={(apiResponse) => {
          if (apiResponse.status === 200) {
            navigate("/2");
          }
        }}
      >
        <div class="grid gap-8">
          <LabelledInput name="email" type="text">
            Email
          </LabelledInput>
          <Error>{errors.fieldErrors.email}</Error>
          <LabelledInput name="password" type="password">
            Password
          </LabelledInput>
          <Error>{errors.fieldErrors.password}</Error>
          <LabelledInput name="confirmPassword" type="password">
            Confirm password
          </LabelledInput>
          <Error>{errors.fieldErrors.confirmPassword}</Error>
        </div>
        <div class="flex">
          <NavLink.next class="flex-1" as="button" type="submit" />
        </div>
      </Form>
    </main>
  );
}

function Error(props: { children: JSX.Element }) {
  return (
    <Show when={props.children}>
      <p class="bg-red-200 text-red-900 px-3 py-1 rounded-sm">
        {props.children}
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
