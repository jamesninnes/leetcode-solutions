const primes = {'a': 2,
    'b': 3,
    'c': 5,
    'd': 7,
    'e': 11,
    'f': 13,
    'g': 17,
    'h': 19,
    'i': 23,
    'j': 29,
    'k': 31,
    'l': 37,
    'm': 41,
    'n': 43,
    'o': 47,
    'p': 53,
    'q': 59,
    'r': 61,
    's': 67,
    't': 71,
    'u': 73,
    'v': 79,
    'w': 83,
    'x': 89,
    'y': 97,
    'z': 101
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let subLists = {}
    for (const str of strs) {
        let product = 1
        for (const character of str) {
            product = primes[character] * product
        }

        if (subLists.hasOwnProperty(product)) {
            let listA = subLists[product]
            listA.push(str)
            subLists[product] = listA
        } else {
            subLists[product] = [str]
        }
    }

    let anagrams = []
    Object.keys(subLists).map(prime => {
        anagrams.push(subLists[prime])
    })

    return anagrams
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])