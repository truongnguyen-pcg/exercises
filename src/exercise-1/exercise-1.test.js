const { store, load } = require("./exercise-1");

describe("Test implement a store function and a load function", () => {
  describe('Test store function', () => {
    it('input array of object expected "key1=value1;key2=value2\nkey1=value1;key2=value2\nkey1=value1;key2=value2;key3=value3\n"', () => {
      const array = [
        {
          key1: "value1",
          key2: "value2"
        },
        {
          key1: "value1",
          key2: "value2"
        },
        {
          key1: "value1",
          key2: "value2",
          key3: "value3"
        }
      ];
      const expected = "key1=value1;key2=value2\nkey1=value1;key2=value2\nkey1=value1;key2=value2;key3=value3";
      expect(store(array)).toEqual(expected);
    });
  
    it("throw error when not array given", () => {
      const param = "This is not an array";
  
      expect(() => store(param)).toThrow();
    });
  })
  
  describe('Test load function', () => {
    it('input "key1=value1;key2=value2\nkeyA=valueA" expect array of object', () => {
      const text = "key1=value1;key2=value2\nkeyA=valueA";
      const expected = [
        {
          key1: "value1",
          key2: "value2"
        },
        {
          keyA: "valueA"
        }
      ];

      expect(load(text)).toEqual(expected);
    });

    it("return throw error when input not string", () => {
      const text = [];
  
      expect(() => load(text)).toThrow();
    });
  });
});
