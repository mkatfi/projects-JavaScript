import Ship from "./src/ship.js";

describe("Ship", () => {
  test("Ship initializes with correct length and hit count", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship can be hit and tracks hits correctly", () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship sinks when hit enough times", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
