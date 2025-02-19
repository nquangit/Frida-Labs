console.log("start Frida");
setTimeout(function () {
    Java.perform(function () {
        // Find the address of the instruction want to rewrite
        let addr = Module.getBaseAddress("libfrida0xb.so").add(0x10E2A);
        console.log(addr);
        
        // Edit permission on Memory with size 0x1000
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
