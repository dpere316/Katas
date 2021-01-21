var defangIPaddr = function(address) {
    let re = /\./gi;
    return (address.replace(re,'[.]'))
};

console.log(defangIPaddr("1.1.1.1"))

// This code use regex to find the target character and then we use
// the replace to change it to the required  character

// https://leetcode.com/problems/defanging-an-ip-address/

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// var re = /pattern/flags; this is how to write a regular expression