import type { ComponentProps } from "solid-js";
import { z } from "zod";
import { formData } from "zod-form-data";

type FormDataSchema = ReturnType<typeof formData>;

type FormProps<V extends FormDataSchema> = ComponentProps<"form"> & {
  validator: V;
  onValidated?: (
    parsedResult: z.SafeParseReturnType<z.infer<V>, z.infer<V>>
  ) => void;
  onSubmitted?: (apiResponse: Response) => void;
  action: string;
};

export default function Form<V extends FormDataSchema>(props: FormProps<V>) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const parsedForm = props.validator.safeParse(
          new FormData(e.currentTarget)
        );
        props.onValidated?.(parsedForm);
        if (parsedForm.success) {
          const res = await fetch(props.action ?? window.location.href, {
            method: "post",
            body: new FormData(e.currentTarget),
          });
          props.onSubmitted?.(res);
        }
      }}
      {...props}
    />
  );
}
