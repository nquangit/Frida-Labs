console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let MainActivity = Java.use("com.ad2001.frida0x3.MainActivity");
        let Checker = Java.use("com.ad2001.frida0x3.Checker");

        for (let i = 0; i < 256; i++) {
            Checker.increase();
            console.log(Checker.code);
        }
    });
}, 1000);

// FRIDA{INJECT_AND_INSPECT}