console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // Find the address of the instruction want to rewrite
        let addr = Module.getBaseAddress("libfrida0xb.so").add(0x15248);
        console.log(addr);
        // The target to jmp to
        let target = Module.getBaseAddress("libfrida0xb.so").add(0x1524c);

        // Edit permission on Memory with size 0x1000
        Memory.protect(addr, 0x1000, "rwx");
        let mem_writer = new Arm64Writer(addr);
        try {
            // Insert instructions
            mem_writer.putBImm(target)
            // Flush the changes to memory
            mem_writer.flush();
        } finally {
            // Dispose of the X86Writer to free up resources
            mem_writer.dispose();
        }
    });
}, 1000);

// FRIDA{NATIVE_HACKER}
