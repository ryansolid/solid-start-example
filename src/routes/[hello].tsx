import { useParams } from "solid-app-router";

export default function Hello() {
  const params = useParams();
  return <div>Hi {params.hello}</div>;
}