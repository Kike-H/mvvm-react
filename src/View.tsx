import { observer } from "mobx-react";
import { ViewModel } from "./Controller";

const store = new ViewModel();


export const View = observer(() => {
  return (
    <>
      <h2>Count: {store.count}</h2>
      <h3>Is negative: {store.isNegative}</h3>
      <button onClick={() => store.add()}>Add </button>
      <button onClick={() => store.substract()}>Substract </button>
    </>
  );
});
