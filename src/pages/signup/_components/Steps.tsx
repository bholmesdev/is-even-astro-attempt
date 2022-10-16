import type { JSX } from "solid-js";

export default function Banner() {
  return (
    <div class="flex gap-5 justify-center items-start">
      <Bubble label="Make an account" current={true} />
      <Bubble label="Set up your profile" />
      <Bubble
        label={
          <>
            Choose a <br />
            service plan
          </>
        }
      />
      <Bubble label="Review your account" />
    </div>
  );
}

function Bubble({
  label,
  current = false,
}: {
  label: JSX.Element;
  current?: boolean;
}) {
  return (
    <div class="grid place-items-center gap-3">
      <div
        classList={{
          "outline-purple-700 outline-4": current,
          "outline-gray-300 outline-2": !current,
        }}
        class="outline h-6 w-6 rounded-full"
      ></div>
      <h2
        classList={{ "text-purple-700": current }}
        class="text-center text-sm w-20"
      >
        {label}
      </h2>
    </div>
  );
}
