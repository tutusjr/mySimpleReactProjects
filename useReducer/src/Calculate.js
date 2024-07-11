import { useContext } from "react";
import { NumberContext } from "./App";
export default function Calculate() {

    const { count, dispatch } = useContext(NumberContext);
  return (
    <div>
      <button onClick={() => dispatch("arttir")}>arttir</button>
      <button onClick={() => dispatch("azalt")}>azalt</button>
      <button onClick={() => dispatch("sifirla")}>sifirla</button>
      <div>{count}</div>
    </div>
  );
}
