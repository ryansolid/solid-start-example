import { createSignal, onMount } from "solid-js";
import server from "solid-start/server";

const sayHello = server(async function(name: string) { return  "Hi " + name})

export default function Greeting() {
  const [greeting, setGreeting] = createSignal("");

  onMount(() => sayHello("Tom").then(setGreeting));
  let el;
  return (
    <div>
      <input type="text" ref={el} />
      <button
        class="increment"
        onClick={() => sayHello(el.value).then(setGreeting)}
      >
        Greet
      </button>
      {greeting()}
    </div>
  );
}
