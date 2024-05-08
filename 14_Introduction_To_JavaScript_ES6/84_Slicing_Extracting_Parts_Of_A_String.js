/** Slicing and Extracting Parts of a String
 ** Specifies which slice of information you want from a string
 ** .slice(Y,X) (start, end)
 Capital G is at position 0, letter i is at position 6
 * a b c
 * 0 1 2
 * slice(0,1); = a // upto but not including 1
 * slice(1,3); = a b // upto but not including 3
 */

var myName = "Genessi";
myName.slice(0,1); // would output "G"
myName.slice(6,7); // would output "i"
myName.slice(0,3); // would output "Gen"
