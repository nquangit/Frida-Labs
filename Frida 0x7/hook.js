console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let Checker = Java.use("com.ad2001.frida0x7.Checker");
        let CheckerInstance = Checker.$new(999, 999);

        Java.choose("com.ad2001.frida0x7.MainActivity", {
            onMatch: function (instance) {
                console.log("Found instance: " + instance);
                instance.flag(CheckerInstance);
            },
            onComplete: function () {
                console.log("Search completed");
            },
        });
    });
}, 1000);

// FRIDA{HOOKING_CONSTRUCTORS}