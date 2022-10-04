import { makeObservable, observable, action } from "mobx";
import { getData } from "./Helpers/API";
import { Characters } from "./Model";

export class ViewModel {
  characters: Characters = {
    info: { count: 0, pages: 0, next: "", prev: "" },
    results: [],
  };

  constructor() {
    makeObservable(this, {
      characters: observable,
      setCharacters: action,
    });
  }

  async getCharacters() {
    getData<Characters>(1).then((data) => this.setCharacters(data));
  }

  setCharacters(data: Characters) {
    this.characters = data;
  }
}
