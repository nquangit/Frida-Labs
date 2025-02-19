console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // Calling native function from Java
        let get_flag_addr =
            Module.getBaseAddress("libfrida0xa.so").add(0x1dd60); // Get base address of function
        let objects = Module.enumerateExports("libfrida0xa.so");

        // Check address
        for (let object of objects) {
            if (object.name.includes("flag"))
                console.log(object.name + ": " + object.address);
        }

        // let get_flag_addr = Module.getBaseAddress("libfrida0xa.so").add(0x18BB0) // Same
        console.log("get_flag_addr:", get_flag_addr);
        // Native Pointer`
        let getFlagPointer = ptr(get_flag_addr);
        // Native function get_flag(int, int) takes two integer arguments with void return type
        let get_flag = new NativeFunction(getFlagPointer, "void", [
            "int",
            "int",
        ]);
        // Call native function get_flag(0, 2)
        get_flag(1, 2);
    });
}, 1000);

// FRIDA{DONT_CALL_ME}      
