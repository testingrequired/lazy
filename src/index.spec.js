const Lazy = require("./index");

describe("lazy", () => {
  const value = Symbol("value");

  let obj;
  let mock;
  let asyncMock;
  let lazy;

  beforeEach(() => {
    mock = jest.fn();
    asyncMock = jest.fn(async () => {});
    obj = { mock, asyncMock, value };
    lazy = Lazy.of(obj);
  });

  it("should not call method", () => {
    lazy.mock();

    expect(mock).not.toHaveBeenCalled();
  });

  it("should return function to call method", () => {
    const method = lazy.mock();

    method.call(null);

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should return function to call async method", async () => {
    const method = lazy.asyncMock();

    await method.call(null);

    expect(asyncMock).toHaveBeenCalledTimes(1);
  });

  it("should return value through", () => {
    expect(lazy.value).toBe(value);
  });
});
