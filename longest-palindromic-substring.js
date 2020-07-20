function longestPalindrome(s) {
    let longest = '', c;
    for (c=0; c<s.length; c++) {
        if ((s.length-c)*2 <= longest.length) break;  // exit early if remaining can't surpass largest found

        longest = scanOutward(s, longest, c, c);   // odd length "ata"
        longest = scanOutward(s, longest, c+1, c); // even length "atta"
    }
    return longest;
}

function scanOutward(s, longest, left, right) {
    if (left > 0 && right < s.length && s[left-1] === s[right+1]) {
        return scanOutward(s, longest, left-1, right+1);
    } else {
        return (right-left+1 >= longest.length) ? s.substring(left, right+1) : longest;
    }
}