/**
 * Converts value to string
 * @param {number} value
 * @returns {string}
 */
export const convertNumberToString = (value) => {
    return `${value}`;
};

convertNumberToString(1100);

/**
 * @param {MixedData} data
 * @returns {string}
 */
export const mixMultipleData = (data) => {
    return `Hey ${data.name || 'username'}! Are you ${data.age}? I see you like ${data.fruits.map((fruit) => fruit).join(',')}`;
};


mixMultipleData({
    name: 'Bo',
    age: 18,
    fruits: ['mango', 'banana'],
});

/**
 * @typedef {Object} MixedData
 * @prop {string} [name]
 * @prop {number} age
 * @prop {string[]} fruits
 */
