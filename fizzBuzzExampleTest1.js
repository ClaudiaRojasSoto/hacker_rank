function fizzBuzz(n) {
    // Write your code here

    for (var i = 0; i <= n; i++) {
        if (i % 3 && i % 5) {
            console.log('FizzBuzz');

        }else if (i % 3) {
            console.log('Fizz');

        }else if (i % 5) {
            console.log('Buzz');

        }else {
            console.log(i);
        }



    }
}
