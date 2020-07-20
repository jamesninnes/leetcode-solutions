function longestPalindrome(letters) {
    let longest = '', i;
    for (i = 0; i < letters.length; i++) {
        if ((letters.length - i)*2 <= longest.length) break;  // exit early if remaining can't surpass largest found

        longest = scanOutward(letters, longest, i, i);   // odd length "ata"
        longest = scanOutward(letters, longest, i+1, i); // even length "atta"
    }
    return longest;
}

function scanOutward(letters, longest, left, right) {
    if (left > 0 && right < letters.length && letters[left - 1] === letters[right + 1]) {
        return scanOutward(letters, longest, left - 1, right + 1);
    } else {
        return (right - left + 1 >= longest.length) ? letters.substring(left, right + 1) : longest;
    }
}