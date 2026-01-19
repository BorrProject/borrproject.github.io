# Kernel Threads xv6
**Note:** This project does not include any tests, and as a result we have decided to mark it as *optional*. We still believe it to be highly educational to complete this project, so we have provided instructions on how one might test their own implementation in the hints section.

- [Project details](https://github.com/remzi-arpacidusseau/ostep-projects/tree/master/concurrency-xv6-threads)
- [Discussion](https://www.youtube.com/watch?v=G9nW9UbkT7s)


## Hints
The discussion provides some critical information about x86 calling conventions and how to manipulate the stack that you *will* need in order to complete this project.

The kernel stack referred to in the project description does not refer to the user stack that gets allocated on the heap. It refers to the special stack managed by the kernel to save and load the process context. What changes need to be made here in order to run the thread?

When a newly created process runs for the first time, it first returns to a special routine called "forkret" which releases the lock held on the process table before finally returning to the user program. The allocproc-routine takes care of setting up the process to do this. If your process does not enter forkret, then you will cause a kernel panic.

Remember that the user stack grows from top to bottom, and that the pointer you get from malloc points to the bottom. Make sure the sp-register points to the top.

As of December 2025 this project does not have any tests to verify your work, so you will have to create that yourself. We suggest the creating verification steps for the following:
1. Thread implementation  
   - Verify that the cloned actually runs the supplied function.
   - Verify that it shares memory with its parent
   - Verify that the supplied stack-address gets returned by the subsequent join
   - Verify that if a thread doesn't call exit, it returns to 0xffffffff, causing a kernel trap, as opposed to the function that created the thread.
2. Lock
   - Create a race condition and verify that it actually triggers
   - Verify that the lock protects against the race condition

The thread implementation itself should be straightforward to verify as it can be done by simply setting some variables and comparing them after a join. The tricky part is the race condition. You might be tempted to recreate the multi-threaded loop-counting example from the book, however, it turns out that it can be very difficult to make that race condition trigger at all. We believe this is a quirk of running xv6 inside QEMU.

Instead, we recommend having a critical section of code that invokes multiple system calls. This guarantees interrupts, increasing the likelyhood of race conditions causing problems. A good candidate is printf. The xv6 implementation of printf invokes a write-syscall of a single byte for each printed character. Thus, if you use printf concurrently across multiple threads, there is a high chance that the terminal output gets garbled, unless you hold a working mutex lock for the duration of the printf-call. 
