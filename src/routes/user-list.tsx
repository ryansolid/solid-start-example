import { For, createResource } from "solid-js";
import { Link, useRouteData } from "solid-app-router";
import server from "solid-start/server";

export const routeData = () => {
  return createResource(
    server(function getAll() {
      return {
        1: {
          id: 1,
          name: "Joey",
        },
        2: {
          id: 2,
          name: "Jamie",
        },
      };
    })
  );
};

export default function Users() {
  const [users] = useRouteData<[users: any]>();
  return (
    <>
      <h2>Users</h2>
      <ul>
        <For each={Object.values(users() || {})}>
          {({ id, name }) => (
            <li>
              <Link class="list" href={`/users/${id}`}>
                {name}
              </Link>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
