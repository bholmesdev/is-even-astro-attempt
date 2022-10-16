import NavLink from "../_components/NavLink";

export default function Step2() {
  return (
    <div>
      <p>Step 2</p>
      <NavLink.next as="a" href="/3" />
    </div>
  );
}
