---
sidebar_position: 3
---

# Operating Systems
*Timeline: 80 - 200+ hours*,
Credit goes to [palladian](https://github.com/palladian1)
## Introduction
For the subject of operating systems, we offer two options: a "base" approach which is suitable for most students, and an "extended" approach for those that want to specialize in systems-level programming.

The "base" approach covers all of our operating system curriculum requirements and should take about 80 hours of work.

The "extended" approach contains all of the work of the base approach and more. It involves learning very serious C and x86 assembly, and delving deep into kernel programming. It takes significantly more time (over 200 hours) and is much more challenging. For those students interested in this area of computing it is also highly rewarding.

## Base Approach

1. Read through the free online textbook Operating Systems: Three Easy Pieces
2. Complete the homework questions at the end of each chapter. (There is an associated [Github repository](https://github.com/remzi-arpacidusseau/ostep-homework) for the homeworks.)

This should take about 8 weeks, 10 hours/week. That's all you need to do!

You will need a Unix/Linux system, some basic command line tools, and a C compiler (such as GCC or Clang). On Windows, you can install Ubuntu in a virtual machine, or use WSL (Windows Subsystem for Linux). Mac OS is Unix-like, so it should be OK to use.

### Course Links

* [Book](https://pages.cs.wisc.edu/~remzi/OSTEP/)
* [Homework](https://pages.cs.wisc.edu/~remzi/OSTEP/Homework/homework.html)
* [Homework Source Code Repo](https://github.com/remzi-arpacidusseau/ostep-homework)
* [Homework Solutions](https://github.com/xxyzz/ostep-hw)

### C

**Question**: I see some C code in this book. How much C do I need to know?

**Answer**: You'll need to read and understand some C code in this book. You'll need basic understanding of arrays, pointers and print formatting. You can consult the free book [Dive into Systems: Chapter 1 and 2](https://diveintosystems.org/book/C1-C_intro/index.html). The [CS50 Manual pages](https://manual.cs50.io) are also helpful to look up functions. You shouldn't spend too much time on learning C.

The code you'll read is fairly simple and presented in short fragments. The book helps you out quite a bit by manually introducing many C APIs such as the Process API, the Thread API, and so on. You can type, compile and run the code fragments, and read the corresponding explanations. The book explains them in great detail in a conversational style that's fun to read.

You will also write a little bit of C code. Only a minority of the chapters (about 10 out of 50) ask you to write some C code (while the other chapters require you to run provided simulation code and answer questions). These are usually simple, short C programs that imitate the code that was presented in that chapter, with small modifications.

When you're ready to start the homework, start with the [reverse project](https://github.com/billmei/ostep-projects/tree/billmei/patch-1/initial-reverse) this will be a good test to see if you're ready for the rest of the projects. For the rest of the hw projects use the link under course links.

If you are getting stuck on these, please don't spend too much time on them. There is a great solution set [here](https://github.com/xxyzz/ostep-hw). There is no honor code for this, so you are free to use the solutions. If you find yourself spending too much time, feel free to read and understand the solutions instead. Your main priority should be to gain understanding of operating systems concepts, not to master C coding.


## Extended Approach
If you've chosen this ophttps://www.reddit.com/r/Twitch/comments/11oy4y2/extremely_low_quality_streams_0_quality_on_all/tion, it is a *must* that you complete *both* courses in [Intro to Computer Systems](../computer-systems/index.md) or equivalent first.

That said, if you're able to commit the time required for the prerequisites, we believe the reward is well worth the effort: this course is exciting, interesting, and quite useful for other fields of computer science and programming. One big attraction of this course is the opportunity to see a simplified but fully-functional Unix-like operating system in action and understand the concepts and design decisions that went into it as well as the low-level implementation details.

You should either watch all the lecture videos or read chapters 1 through 47 in the textbook (don't worry, the chapters are usually just a few pages long) as well as finish the projects listed below. We also strongly encourage you to do the homework exercises as they're assigned on the course website or in the book chapters; think of these like the "check-your-understanding" questions that pop up in the middle of lecture videos on sites like Coursera or edX.

### Course Links

* [Course website](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/)
* [Book](https://pages.cs.wisc.edu/~remzi/OSTEP/)
* [Lecture videos](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/Discussion/videos.html)
* [Homework](https://pages.cs.wisc.edu/~remzi/OSTEP/Homework/homework.html)
* [Homework Source Code Repo](https://github.com/remzi-arpacidusseau/ostep-homework)
* [Homework Solutions](https://github.com/xxyzz/ostep-hw)
* [Projects](https://github.com/remzi-arpacidusseau/ostep-projects)
* [xv6](https://github.com/mit-pdos/xv6-public)

### Roadmap

This course was originally taught as CS 537 at the University of Wisconsin by the author of the OSTEP textbook, so the projects are assigned in the course according to the best times to give UWisconsin students access to on-campus resources like recitation sections and office hours. That means they don't match up perfectly with the material being covered at that time in the lectures or textbook chapters. We recommend doing the course in the following order instead.

|  Topic  | Readings | Lectures | Projects |
| ------- | -------- | -------- | ---------|
| Intro   | [[pre]](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/Book/preface.pdf) [[1]](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/Book/dialogue-threeeasy.pdf) [[2]](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/Book/intro.pdf) | [[1.1]](https://www.youtube.com/watch?v=3uMbb9dLtlE) [[1.2]](https://www.youtube.com/watch?v=K4qbAiC77Yo) | [Unix Utilities](Unix-Utilities) |
| **Virtualization** | | | |
| *Dialogue* | [[3]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-virtualization.pdf) | | |
| Processes | [[4]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) [[5]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf) [[6]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) | [[1.3]](https://youtu.be/LVxN7ZkGh3w) [[2.1]](https://youtu.be/oTd72Yp2m8w) | [Unix Shell](Unix-Shell) |
| Scheduling | [[7]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) [[8]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf) [[9]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf) [[10]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-multi.pdf) | [[2.2]](https://youtu.be/Q09UgVfragU) [[2.3]](https://youtu.be/fin5-82L-r8) [[3.1]](https://youtu.be/cAiwISFta4g) | [Intro to xv6](Initial-xv6)  <br /> [STCF-scheduler](STCF-Scheduler)  |
| *Summary* | [[11]](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-dialogue.pdf) | | |
| *Dialogue* | [[12]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-vm.pdf) | | |
| Virtual Memory | [[13]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) [[14]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-api.pdf) [[15]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf) [[16]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf) [[17]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf) | [[3.2]](https://youtu.be/I0RIlSN0DzM) [[3.3]](https://youtu.be/0WVoWlOT-kY) |  |
| Paging | [[18]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) [[19]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf) [[20]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-smalltables.pdf) | [[4.1]](https://youtu.be/wAx_h3HkIX0) [[4.2]](https://youtu.be/7BOXM2XgGO4) [[4.3]](https://youtu.be/LprKOBsALGA) [[5.1]](https://www.youtube.com/watch?v=ggPkFxOTwHY) | |
| Beyond physical | [[21]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf) [[22]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) [[23]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-complete.pdf) | [[5.2]](https://www.youtube.com/watch?v=4tPXkN5nRQs) | [Memory Mapping](Memory-Mapping-xv6) |
| *Summary* | [[24]](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-dialogue.pdf) | | |
| **Concurrency** | | | |
| *Dialogue* | [[25]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-concurrency.pdf) | | | |
| Threads |[[26]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) [[27]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf) | [[6.1]](https://www.youtube.com/watch?v=4PghlMdp9cU) | |
| Concurrency primitives | [[28]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf) [[29]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf) [[30]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf) [[31]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf) | [[6.2]](https://www.youtube.com/watch?v=hivv8F-LjzY) [[6.3]](https://youtu.be/BoLYvNp2Lc4) [[7.1]](https://www.youtube.com/watch?v=G95w4ghn42A) [[7.2]](https://www.youtube.com/watch?v=X5clCyJ4uuk) [[7.3]](https://youtu.be/RN8A9EvKBdY) [[8.1]](https://youtu.be/U1LfmL7f1h8) [[8.2]](https://youtu.be/cuY8r8RXqAY) | |
| More topics in concurrency | [[32]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf) [[33]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-events.pdf) | [[9.1]](https://youtu.be/Fnp_K63ss44) [[9.2]](https://youtu.be/AMG29dlH8t0) | Optional: [Kernel Threads xv6](Kernel-Threads-xv6) <br /> [MapReduce](MapReduce) |
| *Summary* | [[34]](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-dialogue.pdf) | | |
| **Midterm review** | | [Review](https://www.youtube.com/watch?v=doHSi2ffu9I) | |
| **Persistence** |
| *Dialogue* | [[35]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-persistence.pdf) | | |
| IO and Disks | [[36]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) [[37]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-disks.pdf) | [[10.1]](https://youtu.be/SQz2CTpI-NM) [[10.2]](https://youtu.be/15dJR01z82k) [[10.3]](https://youtu.be/yErUVST4Fv0) | |
| RAID | [[38]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-raid.pdf) | [[11.1]](https://youtu.be/XF0mKxLrSVs) [[11.2]](https://youtu.be/h3WKYo1B19U) [[11.3]](https://youtu.be/Mn9g9XWec28) | |
| Filesystems | [[39]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf) [[40]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf)  | [[11.4]](https://youtu.be/EDFoFlzZ8_w) [[12.1]](https://youtu.be/QMjJlCqUYW4) [[12.2]](https://youtu.be/87vv7nVdTDA) [[12.3]](https://youtu.be/5n0AdNuBObU) | |
| Crash consistency, journaling, FFS | [[41]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-ffs.pdf) [[42]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf) | [[13.1]](https://youtu.be/piwPJ0sLV0Y) [[13.2]](https://youtu.be/MgnQV-ss1wc) [[13.3]](https://youtu.be/wwvMNItRyl8) | |
| LFS and SSDs | [[43]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-lfs.pdf) [[44]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-ssd.pdf) | [[14.1]](https://youtu.be/59XSFnXQ-9Q) [[14.2]](https://youtu.be/6fbm9u7__L0) [[14.3]](https://youtu.be/vvttbstRdj8) [[14.4]](https://youtu.be/sKTyhqvTUBU) | |
| Data Integrity and Protection | [[45]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-integrity.pdf) | | [Mini-WFS](Mini-WFS)  |
| *Summary* | [[46]](https://pages.cs.wisc.edu/~remzi/OSTEP/file-dialogue.pdf) | | |
| **End of class review** | | [Part 1](https://www.youtube.com/watch?v=TSiMDPFquO4), [Part 2](https://youtu.be/jIcw7B36oBU) | |

### Advanced Topics

|  Topic  | Readings  |
| ------- | --------- |
| **Distributed systems** | [[47]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-distribution.pdf) [[48]](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-intro.pdf) [[49]](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-nfs.pdf) [[50]](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-afs.pdf) [[51]](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-afs.pdf) | [[51]](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-dialogue.pdf) |
| **Security** | [[52]](https://pages.cs.wisc.edu/~remzi/OSTEP/dialogue-security.pdf) [[53]](https://pages.cs.wisc.edu/~remzi/OSTEP/security-intro.pdf) [[54]](https://pages.cs.wisc.edu/~remzi/OSTEP/security-authentication.pdf) [[55]](https://pages.cs.wisc.edu/~remzi/OSTEP/security-access.pdf) [[56]](https://pages.cs.wisc.edu/~remzi/OSTEP/security-crypto.pdf) [[57]](https://pages.cs.wisc.edu/~remzi/OSTEP/security-distributed.pdf) |

### Running the Projects

This course was originally taught as CS 537 at the University of Wisconsin by the author of the OSTEP textbook, which means that the homework and projects were written with those students as a target audience and designed to be run on UWisconsin lab computers with specific software versions pre-installed for students. We hope this section fixes that so you can run them on other computers, but we haven't tested this on every computer, so if you run into other issues, let us know on the [Discord channel](https://discord.gg/Yvk8xDRycS) and we'll try to help out.

In order to run the homework and projects on Linux or macOS, you'll need to have all of the following programs installed:

* `gcc`
* `gas`
* `ld`
* `gdb`
* `make`
* `objcopy`
* `objdump`
* `dd`
* `python`
* `perl`
* `gawk`
* `expect`
* `git`
* `qemu`

On macOS, you'll need to install a cross-compiler `gcc` suite capable of producing x86 ELF binaries; see the link above for details as well.

On Windows, you can use a Linux virtual machine for the homework and projects. Some of these packages are not yet supported on Apple M1 computers, and virtual machine software has not yet been ported to the new processor architecture; some students have used a VPS to do the homework and projects instead.

In our experience, modern Linux systems may run into compatibility issues when trying to build and/or run the xv6 kernel. Ubuntu 18.04 has shown to be a known-good version of linux for both building, running, and debugging the last version of xv6. You can run this version of Ubuntu in either a virtual machine or a Docker image. [This blog post](https://0x1eaf.dev/blog/run-xv6-ostep/) contains instructions on how to run and debug xv6 in an Ubuntu Docker image. UW-Madison has also made a Docker image available [here](https://git.doit.wisc.edu/cdis/cs/courses/cs537/useful-resources/cs537-docker).

For the homeworks and most projects, we use the GitHub repositories authored by Remzi. You can get them by cloning the `ostep-homework` and `ostep-projects` repositories:
```sh
git clone https://github.com/remzi-arpacidusseau/ostep-homework/
git clone https://github.com/remzi-arpacidusseau/ostep-projects/
```

You'll have to clone [the `xv6-public` repository](https://github.com/mit-pdos/xv6-public) into the directory for each xv6-related OSTEP project. You could use the same copy for all the projects, but we recommend using separate copies to avoid previous projects causing bugs for later ones. Run the following commands in *each* of the `initial-xv6`, `scheduling-xv6-lottery`, `vm-xv6-intro`, `concurrency-xv6-threads`, and `filesystems-checker` directories.

```sh
mkdir src
git clone https://github.com/mit-pdos/xv6-public src
```

In some cases, we have found that the projects are either lacking in tests or in compatibility with the publicly available revisions of xv6. In those cases, we have chosen to replace those projects with projects from the [UW Madison GitLab](https://git.doit.wisc.edu/cdis/cs/courses/cs537/). Any projects from here will have a dedicated git repository for you to clone, which includes any material you may need such as an appropriate version of the xv6-kernel. For these projects, make your changes in the `solution`-directory of the repository, and run `tests/run-tests.sh` from the root of the repository in order to check your work.

### Hints and tips for Projects

#### Debugging
Debugging is an essential part of kernel hacking. The xv6-repository offers `qemu-gdb` and `qemu-nox-gdb` as build targets. If you are running xv6 inside a docker container or virtual machine, make sure to have port 25000 on your localhost mapped to port 25000 on the guest OS. 

In order to debug xv6, do the following:
1. make sure your present working directory is the root of the xv6 repository
2. run `make qemu-nox-gdb` or `make qemu-gdb`. Wait for your console to output `*** Now run 'gdb'.`. 
3. in a second terminal, same working directory, run `gdb kernel` to start gdb.
4. inside gdb, run `target remote localhost:25000` and then `break main` to set a breakpoint at the kernel's main function.
5. run `continue`to start executing. you are now running xv6 with a debugger attached.****

For more information on how to debug with gdb, see [Beej's Quick Guide to GDB](https://beej.us/guide/bggdb/).

#### xv6
The xv6 authors provide a [book](https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev11.pdf) that you can read alongside the source code. There's also a handy line-numbered [PDF version](https://pdos.csail.mit.edu/6.828/2018/xv6/xv6-rev11.pdf) of the code with an index to see exactly where each function or constant gets used.

However, that book glosses over a lot of the details in the code that you might find challenging, including the advanced C features used, the x86 architecture- specific instructions, and the concurrency aspects (if you haven't finished that section of OSTEP before starting the xv6 projects). To solve this problem, we provide an [annotated guide to xv6](https://github.com/palladian1/xv6-annotated) that goes over the entire xv6 code and analyzes it line-by-line with explanations of the C features, hardware specs, and x86 conventions used. That means it's longer than the official xv6 book, so you don't have to read all of it (and you can probably skip the optional sections unless you care about device drivers), but you can use it as a reference if you're scratching your head about some part of the code.

[Here](https://github.com/YehudaShapira/xv6-explained) is another in-depth explanation of the xv6 code.

Also [here](https://www.youtube.com/playlist?list=PLbtzT1TYeoMhTPzyTZboW_j7TPAnjv9XB) is an excellent video series walking through much of the xv6 code.

#### Miscellaneous

You'll need a general sense of how Makefiles work in order to use the Makefile for xv6. [This tutorial](https://makefiletutorial.com) covers much more than you need; just read the "Getting Started" and "Targets" sections and come back to the rest later if you need to look something up (but you shouldn't have to).

Additional (optional) resources include:
* [GCC Command Options](https://gcc.gnu.org/onlinedocs/gcc-11.1.0/gcc/Invoking-GCC.html#Invoking-GCC): a guide to command-line flags for the GNU C compiler `gcc`.
* [Linker Scripts](https://sourceware.org/binutils/docs/ld/Scripts.html#Scripts): a guide to writing scripts for the GNU linker `ld`.
* [OSDev Wiki](https://wiki.osdev.org): a great resource for all kinds of OS concepts and implementation details.
* [*Linux Kernel Development*](https://www.amazon.com/dp/0672329468): if you want to apply your xv6 knowledge toward contributing to the Linux kernel, this is a great read after OSTEP.

