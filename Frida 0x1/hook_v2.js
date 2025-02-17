console.log("start Frida");
setTimeout(function () {
    function solve() {
        Java.perform(function () {
            let hook = Java.use("com.ad2001.frida0x1.MainActivity");
            hook.check.overload("int", "int").implementation = function (a, b) {
                this.check(4, 12);
            };
            console.log("Complete");
        });
    }
    solve();
}, 1000);

//FRIDA{BABY_HOOK_0x1}