import { makeObservable, observable, computed, action } from "mobx";

export class ViewModel {
  count: number = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      add: action,
      substract: action
    });
  }

  get isNegative(): String {
    return this.count < 0 ? "Yes" : "No";
  }

  add() {
    this.count++;
  }

  substract() {
    this.count--;
  }
}
