import { truncate, wordSplit } from "./";

describe("Truncate", () => {
  it("should return a truncated string", () => {
    let testCases = [
      { string: "I'll be back.", desiredLength: 7, expectedResult: "I'll be" },
      {
        string: "I'm gonna make him an offer he can't refuse.",
        desiredLength: 3,
        expectedResult: "I'm"
      },
      {
        string:
          "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
        desiredLength: 10,
        expectedResult: "You don't"
      },
      {
        string: "Well, nobody's perfect.",
        desiredLength: 4,
        expectedResult: "Well"
      },
      {
        string:
          "Superlongfilenameorperhapsevenaridiculouslylongurlstringthing.comor.text",
        desiredLength: 25,
        expectedResult: "Superlongfilenameorperhap"
      }
    ];
    testCases.forEach(testCase => {
      expect(truncate(testCase.string, testCase.desiredLength)).toEqual(
        testCase.expectedResult
      );
      expect(truncate(testCase.string, testCase.desiredLength).length).toEqual(
        testCase.expectedResult.length
      );
    });
  });
  it("should return the origninal string", () => {
    let testCasesShort = [
      {
        string: "I'm Forrest",
        desiredLength: 35,
        expectedResult: "I'm Forrest"
      },
      {
        string: "Gentlemen, you can't fight in here! This is the War Room!",
        desiredLength: 80,
        expectedResult:
          "Gentlemen, you can't fight in here! This is the War Room!"
      },
      {
        string: "Soylent Green is people!",
        desiredLength: 35,
        expectedResult: "Soylent Green is people!"
      }
    ];
    testCasesShort.forEach(testCase => {
      expect(truncate(testCase.string, testCase.desiredLength)).toEqual(
        testCase.expectedResult
      );
      expect(truncate(testCase.string, testCase.desiredLength).length).toEqual(
        testCase.expectedResult.length
      );
    });
  });
});

describe("wordSplit", () => {
  it("should return new index", () => {
    let testCases = [
      { string: "What's up doc?", desiredLength: 7, expectedResult: 6 },
      { string: "Yo, Adrian!", desiredLength: 4, expectedResult: 3 },
      { string: "My precious.", desiredLength: 3, expectedResult: 2 },
      {
        string: "I feel the need - the need for speed!",
        desiredLength: 11,
        expectedResult: 10
      }
    ];
    testCases.forEach(testCase => {
      expect(wordSplit(testCase.string, testCase.desiredLength)).toEqual(
        testCase.expectedResult
      );
    });
  });
  it("should return original index", () => {
    let testCasesShort = [
      {
        string: "You can't handle the truth!",
        desiredLength: 3,
        expectedResult: 3
      },
      { string: "Show me the money!", desiredLength: 7, expectedResult: 7 },
      { string: "	Bond. James Bond.", desiredLength: 4, expectedResult: 4 }
    ];
    testCasesShort.forEach(testCase => {
      expect(wordSplit(testCase.string, testCase.desiredLength)).toEqual(
        testCase.expectedResult
      );
    });
  });
});
