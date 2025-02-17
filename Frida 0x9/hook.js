console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // enumerateExports: enumerates exports of module, returning an array of objects containing the following properties: name, address, type
        let objects = Module.enumerateExports("liba0x9.so");

        let function_name = "Java_com_ad2001_a0x9_MainActivity_check_1flag"; // found in liba0x9.so with IDA, Ghidra, or radare2
        let function_addr = null;

        for (let i = 0; i < objects.length; i++) {
            // console.log(objects[i].name + ": " + objects[i].address);
            if (objects[i].name == function_name) {
                function_addr = objects[i].address;
            }
        }

        console.log(`Found ${function_name} address: ${function_addr}`);

        Interceptor.attach(function_addr, {
            onEnter: function (args) {
                // Do nothing
            },
            onLeave: function (retval) {
                // Return 1337
                retval.replace(0x539);
            },
        });
    });
}, 1000);

// FRIDA{NATIVE_LAND_0X2}