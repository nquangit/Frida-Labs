console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        let MainActivity = Java.use("com.ad2001.frida0x2.MainActivity");

        MainActivity.get_flag(4919);
    });
}, 1000);

//FRIDA{BABY_HOOK_0x2}