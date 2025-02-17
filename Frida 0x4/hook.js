console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let MainActivity = Java.use("com.ad2001.frida0x4.MainActivity");
        let Check = Java.use("com.ad2001.frida0x4.Check");

        let CheckInstance = Check.$new();
        console.log(CheckInstance.get_flag(1337));
    });
}, 1000);

// FRIDA{XORED_INSTANCE}