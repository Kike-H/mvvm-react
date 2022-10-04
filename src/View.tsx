import { observer } from "mobx-react";
import { ViewModel } from "./Controller";

const store = new ViewModel();

export const View = observer(() => {
  return (
    <>
      {(() => {
        if (store.characters.info.count > 0) {
          return (
            <>
              <h2>Characters</h2>
              <ul>
                {store.characters.results.map((character, index) => {
                  return <li key={index}>{character.name}</li>;
                })}
              </ul>
            </>
          );
        }
      })()}
      <button onClick={() => store.getCharacters()}>Fectch</button>
    </>
  );
});
