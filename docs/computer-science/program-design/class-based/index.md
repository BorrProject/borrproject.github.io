---
sidebar_position: 2
---

# Class-Based Program Design
*Timeline: 104 - 130 hours*

This course studies the class-based program design and the design of abstractions that support the design of reusable software and libraries. It covers the principles of object oriented program design, the basic rules of program evaluation, and examines the relationship between algorithms and data structures, as well as basic techniques for analyzing algorithm complexity. The recommended background is [Systematic Program Design](../spd/index.md).
- https://course.ccs.neu.edu/cs2510sp22/index.html

Keep in mind that the written notes are the primary source of learning in this class. Any videos should be considered supplementary. *Credit: @pulkitkrishna, Discord*

Starting from Assignment 3, the homework scales massively. It is believed to be a group project on campus. Self taught students can choose just one of the two problems given. *Credit: @leafeningagent, Discord*

Note that the video that goes with lecture 30 is inaccessable, watch [this video](https://www.youtube.com/watch?v=6WZo7sFFFlQ&list=PL_N7YxtCMPyea2YC3e-1s7SR_S3oWGjdb) instead. *Credit: @nadi726, Discord*

# Course Syllabus
To make it easier on students, a syllabus was created to give a general sequence that the lectures & assignments should be taken.
*Credit: @nadi726, Discord*

| Week    | Topic                                                                                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Week 1  | [Lecture 1: Data Definitions in Java](https://course.ccs.neu.edu/cs2510sp22/lecture1.html)                                |
|         | [Lecture 2: Data Definitions: Unions](https://course.ccs.neu.edu/cs2510sp22/lecture2.html)                                |
| Week 2  | [Lecture 3: Methods for Simple Classes](https://course.ccs.neu.edu/cs2510sp22/lecture3.html)                              |
|         | [Lab 1](https://course.ccs.neu.edu/cs2510sp22/lab1.html)                                                                  |
|         | [Lecture 4: Methods for Unions](https://course.ccs.neu.edu/cs2510sp22/lecture4.html)                                      |
|         | [Lecture 5: Methods for Self-referential Lists](https://course.ccs.neu.edu/cs2510sp22/lecture5.html)                      |
|         | [Assignment 1](https://course.ccs.neu.edu/cs2510sp22/assignment1.html)                                                    |
| Week 3  | [Lecture 6: Accumulator Methods](https://course.ccs.neu.edu/cs2510sp22/lecture6.html)                                     |
|         | [Lab 2](https://course.ccs.neu.edu/cs2510sp22/lab2.html)                                                                  |
|         | [Lecture 7: Accumulator Methods, Continued](https://course.ccs.neu.edu/cs2510sp22/lecture7.html)                          |
|         | [Assignment 2](https://course.ccs.neu.edu/cs2510sp22/assignment2.html)                                                    |
|         | [Lecture 8: Practice Design](https://course.ccs.neu.edu/cs2510sp22/lecture8.html)                                         |
| Week 4  | [Lecture 9: Abstract Classes and Inheritance](https://course.ccs.neu.edu/cs2510sp22/lecture9.html)                        |
|         | [Lab 3](https://course.ccs.neu.edu/cs2510sp22/lab3.html)                                                                  |
|         | [Lecture 10: Customizing Constructors](https://course.ccs.neu.edu/cs2510sp22/lecture10.html)                              |
|         | [Assignment 3](https://course.ccs.neu.edu/cs2510sp22/assignment3.html)                                                    |
|         | [Lecture 11: Defining Sameness for Complex Data, Part 1](https://course.ccs.neu.edu/cs2510sp22/lecture11.html)            |
| Week 5  | [Lecture 12: Defining Sameness for Complex Data, Part 2](https://course.ccs.neu.edu/cs2510sp22/lecture12.html)            |
|         | [Lab 4](https://course.ccs.neu.edu/cs2510sp22/lab4.html)                                                                  |
|         | [Lecture 13: Abstracting Over Behavior](https://course.ccs.neu.edu/cs2510sp22/lecture13.html)                             |
|         | [Assignment 4](https://course.ccs.neu.edu/cs2510sp22/assignment4.html)                                                    |
|         | [Lecture 14: Abstractions Over More Than One Argument](https://course.ccs.neu.edu/cs2510sp22/lecture14.html)              |
| Week 6  | [Lab 5](https://course.ccs.neu.edu/cs2510sp22/lab5.html)                                                                  |
|         | Exam 1                                                                                                                    |
|         | [Lecture 15: Abstracting Over Types](https://course.ccs.neu.edu/cs2510sp22/lecture15.html)                                |
|         | [Assignment 5](https://course.ccs.neu.edu/cs2510sp22/assignment5.html)                                                    |
| Week 7  | [Lecture 16: Visitors](https://course.ccs.neu.edu/cs2510sp22/lecture16.html)                                              |
|         | [Lab 6](https://course.ccs.neu.edu/cs2510sp22/lab6.html)                                                                  |
|         | [Lecture 17: Mutation](https://course.ccs.neu.edu/cs2510sp22/lecture17.html)                                              |
|         | [Assignment 6](https://course.ccs.neu.edu/cs2510sp22/assignment6.html)                                                    |
|         | [Lecture 18: Mutation Inside Structures](https://course.ccs.neu.edu/cs2510sp22/lecture18.html)                            |
| Week 8  | [Lecture 19: Mutation, Aliasing, and Testing](https://course.ccs.neu.edu/cs2510sp22/lecture19.html)                       |
|         | [Lab 7](https://course.ccs.neu.edu/cs2510sp22/lab7.html)                                                                  |
|         | [Lecture 20: Mutable Data Structures](https://course.ccs.neu.edu/cs2510sp22/lecture20.html)                               |
|         | [Assignment 7](https://course.ccs.neu.edu/cs2510sp22/assignment7.html)                                                    |
|         | [Lecture 21: ArrayLists](https://course.ccs.neu.edu/cs2510sp22/lecture21.html)                                            |
| Week 9  | [Lecture 22: ArrayLists](https://course.ccs.neu.edu/cs2510sp22/lecture22.html)                                            |
|         | [Lab 8](https://course.ccs.neu.edu/cs2510sp22/lab8.html)                                                                  |
|         | [Lecture 23: For-each Loops and Counted-for Loops](https://course.ccs.neu.edu/cs2510sp22/lecture23.html)                  |
|         | [Assignment 8](https://course.ccs.neu.edu/cs2510sp22/assignment8.html)                                                    |
|         | [Lecture 24: While Loops](https://course.ccs.neu.edu/cs2510sp22/lecture24.html)                                           |
| Week 10 | [Lecture 25: Iterator and Iterable](https://course.ccs.neu.edu/cs2510sp22/lecture25.html)                                 |
|         | [Lab 9](https://course.ccs.neu.edu/cs2510sp22/lab9.html)                                                                  |
|         | [Lecture 26: Hashing and Equality](https://course.ccs.neu.edu/cs2510sp22/lecture26.html)                                  |
|         | [Assignment 9 Part 1](https://course.ccs.neu.edu/cs2510sp22/assignment9.html)                                             |
|         | [Lecture 27: Introduction to Big-O Analysis](https://course.ccs.neu.edu/cs2510sp22/lecture27.html)                        |
| Week 11 | [Lecture 30: Breadth-first Search and Depth-first Search](https://course.ccs.neu.edu/cs2510sp22/lecture30.html)           |
|         | [Lab 10](https://course.ccs.neu.edu/cs2510sp22/lab10.html)                                                                |
|         | Exam 2                                                                                                                    |
|         | [Lecture 28: Quicksort and Mergesort](https://course.ccs.neu.edu/cs2510sp22/lecture28.html)                               |
| Week 12 | [Lecture 29: Priority Queues and Heapsort](https://course.ccs.neu.edu/cs2510sp22/lecture29.html)                          |
|         | [Assignment 9 Part 2](https://course.ccs.neu.edu/cs2510sp22/assignment9.html)                                             |
|         | [Lab 11](https://course.ccs.neu.edu/cs2510sp22/lab11.html)                                                                |
|         | [Lecture 31: Dijkstra’s Algorithm for Single-source Shortest Paths](https://course.ccs.neu.edu/cs2510sp22/lecture31.html) |
|         | [Lecture 32: Minimum Spanning Trees](https://course.ccs.neu.edu/cs2510sp22/lecture32.html)                                |
| Week 13 | [Lab 12](https://course.ccs.neu.edu/cs2510sp22/lab12.html)                                                                |
|         | [Assignment 10 Part 1](https://course.ccs.neu.edu/cs2510sp22/assignment10.html)                                           |
|         | [Lecture 34: Implementing Objects](https://course.ccs.neu.edu/cs2510sp22/lecture34.html)                                  |
|         | [Lecture 35: Dynamic Programming](https://course.ccs.neu.edu/cs2510sp22/lecture35.html)                                   |
| Week 14 | Lecture 35: Intro to OOD part 1                                                                                           |
|         | [Assignment 10 Part 2](https://course.ccs.neu.edu/cs2510sp22/assignment10.html)                                           |
|         | Lecture 35: Intro to OOD part 2                                                                                           |
