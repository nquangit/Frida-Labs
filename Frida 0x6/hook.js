console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let Checker = Java.use("com.ad2001.frida0x6.Checker");
        let CheckerInstance = Checker.$new();
        CheckerInstance.num1.value = 1234;
        CheckerInstance.num2.value = 4321;

        Java.choose("com.ad2001.frida0x6.MainActivity", {
            onMatch: function (instance) {
                console.log("Found instance: " + instance);
                instance.get_flag(CheckerInstance);
            },
            onComplete: function () {
                console.log("Search completed");
            },
        });
    });
}, 1000);

// FRIDA{INSTANCES_AND_INSTANCES}