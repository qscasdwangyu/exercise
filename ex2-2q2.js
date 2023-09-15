// 2-2 Q2. The following program asks the user a number `n`, 
// and print a `n` by `n` squares to console like this:
// * * * * 
// * * * * 
// * * * * 
// * * * * 
//
// Modify the program to print an empty square like this:
// * * * * 
// *     * 
// *     * 
// * * * * 

let s = window.prompt('Enter size of the square');
/* convert the input string into a number */
let n = parseInt(s);
/* build a line with n stars */
let line = '';
let middle = '';
for (let i = 0; i < n; i++){
    if(i > 0 && i < n - 1){
        middle = middle + '  '
    }
    else middle = middle + '* '
    }
for (let i = 0; i < n; i++) {line = line + '* ';}
/* build a square with n lines */
let sqr = '';
for (let i = 0; i < n; i++) { 
    if (i == 0 || i == n - 1){
    sqr = sqr + line + '\n'; 
    }
    else sqr = sqr + middle + '\n'
}
console.log(sqr);     