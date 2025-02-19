console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // Calling native function from Java
        let addr = Module.getBaseAddress("libfrida0xb.so").add(0x0000); // Get base address of function
        console.log(addr);

        Memory.protect(addr, 0x1000, "rwx");
        let mem_writer = new X86Writer(addr);
        try {
            // Insert instructions
            mem_writer.putNop();
            mem_writer.putNop();
            mem_writer.putNop();
            mem_writer.putNop();
            mem_writer.putNop();
            mem_writer.putNop();
            // Flush the changes to memory
            mem_writer.flush();
        } finally {
            // Dispose of the X86Writer to free up resources
            mem_writer.dispose();
        }
    });
}, 1000);
