console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // Because the frida0x8 is a native lib compiled by C, so we need to find the strcmp function in libc.so
        let strcmp_addr = Module.findExportByName("libc.so", "strcmp");

        console.log("Found strcmp address: " + strcmp_addr);

        Interceptor.attach(strcmp_addr, {
            onEnter: function (args) {
                let firstArg = Memory.readCString(args[0]);
                let secondArg = Memory.readCString(args[1]);
                // Submit the input with value: frida0x8 to get the flag
                if (firstArg == "frida0x8") {
                    console.log("strcmp firstArg: " + firstArg);
                    console.log("strcmp secondArg: " + secondArg);
                }
            },
            onLeave: function (retval) {
                // Empty
            },
        });
    });
}, 1000);

// We can check the logcat when submit the input and the flag will be shown in the logcat
// Or Reverse the the lib: frida0x8

// FRIDA{NATIVE_LAND}
