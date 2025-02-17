setTimeout(function () {
    Java.perform(function () {
        let Main = Java.use("com.ad2001.frida0x1.MainActivity");
        Main.get_random.implementation = function () {
            return 0;
        };
    });
}, 0);

//FRIDA{BABY_HOOK_0x1}