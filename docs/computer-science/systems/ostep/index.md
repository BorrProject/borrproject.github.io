---
sidebar_position: 3
---

# Operating Systems
*Timeline: 80 - 200+ hours*,
Credit goes to [palladian](https://github.com/palladian1)
## Introduction

First, we should be frank: it's really hard to find a good self-contained online course on operating systems. OSTEP is the best course we've found so far. We describe below two approaches to the course, a "Base" approach which is suitable for most students, and an "Extended" approach, which is appropriate for students intending to specialize in systems programming.

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
If you've chosen this option, it is a *must* that you complete *both* courses in [Intro to Computer Systems](../computer-systems/index.md) or equivalent first.

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

#### Reading order

* Before starting the course: `initial-utilities` (aka, project 1a) and `initial-reverse` (not assigned in class)
* Chapter 5: `processes-shell` (project 2a)
* Chapter 6: `initial-xv6` (project 1b, but only worry about test 1)
* Chapter 9: `scheduling-xv6-lottery` (project 2b)
* Chapter 24: `vm-xv6-intro` (project 3b)
* Chapter 28: `initial-xv6` (now pass test 2)
* Chapter 29: `concurrency-xv6-threads` (project 4b)
* Chapter 30: `concurrency-mapreduce` (project 4a)
* Chapter 33: `concurrency-webserver` (not assigned in class)
* Chapter 42: `filesystems-checker` (project 5a)
* (there is no 5b, and there are no projects for chapters 43-51)

**Notes:**

* Read chapters 1 and 2 of the OSTEP textbook and watch the first half (the introduction) of lecture 1.
* Do the `initial-utilities` project; it's intended as a litmus test for you to make sure you're comfortable enough with C before taking this class. You can watch discussion 1 for help. If it takes you more than 2 hours to write the code (not counting the discussion time and any time spent debugging), you should consider spending more time learning C before moving on in the course. (If you want more practice, you can do `initial-reverse` too, but it's not required.)
* Watch lectures 1 through 5 and read chapters 3 through 24 of the OSTEP textbook. We recommend doing the homework assignments as they come up in the course calendar or book chapters.
* Watch discussion 3 and reread chapter 5, then do the `processes-shell` project.
* Read the annotated guide to xv6 linked in the resources section below, starting from the beginning and stopping after the `System Calls: Processes` section.
* Watch discussion 2, then do the `initial-xv6` project.
* Watch discussion 5, then do the `scheduling-xv6-lottery` project.
* Watch discussion 7, then do the `vm-xv6-intro` project.
* Watch lectures 6 through 9 (and optionally, the review lecture) and read chapters 25 through 34; again, you're encouraged to do the homework.
* Watch discussion 10, then do the `concurrency-xv6-threads` project.
* Watch discussions 11 and 12, then do the `concurrency-mapreduce` project.
* Watch lectures 10 through 14 (and optionally, the second review lecture) and read chapters 35 through 47; remember to do the homework along with the lectures or chapters.
* Do the `filesystems-checker` project.

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

You will also need to install `qemu`, but we recommend using the patched version provided by the xv6 authors; see [this link](https://pdos.csail.mit.edu/6.828/2018/tools.html) for details.

On macOS, you'll need to install a cross-compiler `gcc` suite capable of producing x86 ELF binaries; see the link above for details as well.

On Windows, you can use a Linux virtual machine for the homework and projects. Some of these packages are not yet supported on Apple M1 computers, and virtual machine software has not yet been ported to the new processor architecture; some students have used a VPS to do the homework and projects instead.

Next, clone the `ostep-homework` and `ostep-projects` repositories:
```sh
git clone https://github.com/remzi-arpacidusseau/ostep-homework/
git clone https://github.com/remzi-arpacidusseau/ostep-projects/
cd ostep-projects
```

You'll have to clone [the `xv6-public` repository](https://github.com/mit-pdos/xv6-public) into the directory for each xv6-related OSTEP project. You could use the same copy for all the projects, but we recommend using separate copies to avoid previous projects causing bugs for later ones. Run the following commands in *each* of the `initial-xv6`, `scheduling-xv6-lottery`, `vm-xv6-intro`, `concurrency-xv6-threads`, and `filesystems-checker` directories.

```sh
mkdir src
git clone https://github.com/mit-pdos/xv6-public src
```

### Hints and tips for Projects

- `initial-reverse`: the error messages that are needed to pass the tests were wrong! The provided text said `"error: ..."` but the tests expected `"reverse: ..."` so make sure to match the tests' expectations in your code.
- [hints and tips for `processes-shell`](Project-2A-processes-shell)
- [hints for Project 1B: `initial-xv6`](Project-1B-initial-xv6)
- [hints for `scheduling-xv6-lottery`](Scheduling-xv6-lottery)
- [hints for `vm-xv6-intro`](vm-xv6-intro)

#### xv6

You don't need to read anything about xv6 until after you start OSTEP; in fact, we recommend holding off on the xv6-related projects until you've finished the entire section on virtualization. After that, you'll need a guide to walk you through the source code.

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
