const os = require("os");

console.log(os.arch());
console.log(os.availableParallelism());

/*

os.freemem()
910659584
> _/1024
889316
> _/1024
868.47265625
> _/1024
0.8481178283691406
> os.hostname()
'LENOVO'
> os.platform()
'win32'

we can get complete os information using this

os. then double tab you will get functionalities realated to this
*/