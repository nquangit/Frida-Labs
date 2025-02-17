console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        Java.choose("com.ad2001.frida0x5.MainActivity", {
            onMatch: function (instance) {
                console.log("Found instance: " + instance);
                instance.flag(1337);
            },
            onComplete: function () {
                console.log("Search completed");
            }
        });
    });
}, 1000);

// FRIDA{ON_MATCH_THIS_INSTANCE}