console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let Checker = Java.use("com.ad2001.frida0x7.Checker");
        Checker.$init.implementation = function (params) {
            this.$init(999, 999);
        }
    });
}, 0);

// FRIDA{HOOKING_CONSTRUCTORS}