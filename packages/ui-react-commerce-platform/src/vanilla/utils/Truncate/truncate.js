/**
 * Function which takes in a string and a word count and returns
 * the string truncated to the nearest empty space so that words are not cut off.
 *
 * @param description
 * @param wordCount
 * @returns {*}
 */
export const truncate = (description, wordCount) => {
  if (description.split("").length > wordCount) {
    let index = wordSplit(description, wordCount);
    return description
      .split("")
      .slice(0, index)
      .join("");
  } else {
    return description;
  }
};

/**
 *
 * @param description
 * @param wordCount
 * @returns {number}
 */
export const wordSplit = (description, wordCount) => {
  let descriptionArray = description.split("");
  if (descriptionArray[wordCount] !== " ") {
    for (let i = wordCount; i > 0; i--) {
      if (descriptionArray[i] === " ") {
        return i;
      } else if (i === 1) {
        return wordCount;
      }
    }
  } else {
    return wordCount;
  }
};
