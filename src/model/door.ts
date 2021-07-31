export default class DoorModel {
  #number: number;
  #hasPresent: boolean;
  #selected: boolean;
  #isOpen: boolean;

  constructor(
    number: number,
    hasPresent = false,
    selected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasPresent = hasPresent;
    this.#selected = selected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get hasPresent() {
    return this.#hasPresent;
  }

  get selected() {
    return this.#selected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get isClosed() {
    return !this.#isOpen;
  }

  removeSelection() {
    const selected = false;
    return new DoorModel(this.number, this.hasPresent, selected, this.isOpen);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.hasPresent, selected, this.isOpen);
  }

  open() {
    const isOpen = true;
    return new DoorModel(this.number, this.hasPresent, this.selected, isOpen);
  }
}
