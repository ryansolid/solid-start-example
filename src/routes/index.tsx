import Counter from "~/components/Counter";
import Greeting from "~/components/Greeting";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <Greeting />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
