# MapReduce

**Note:** This project currently does not contain any tests. Borr Project contributors have made a repository containing several test cases and a makefile + example C-program to run them: [BorrProject/ostep-mapreduce](https://github.com/BorrProject/ostep-mapreduce). You can download [a zip file containing all these here](https://github.com/BorrProject/ostep-mapreduce/archive/refs/heads/master.zip).

- [Project details](https://github.com/remzi-arpacidusseau/ostep-projects/tree/master/concurrency-mapreduce)
- [Discussion](https://youtu.be/tSiJ_oBSOZE?t=34)
- [Q/A](https://www.youtube.com/watch?v=jVmWrr8y0Uw)

## Hints
- This project is quite challenging, so don't get discouraged if you're struggling. If you find that the difficulty curve gets too steep, consider doing the [Parallel Zip](https://github.com/remzi-arpacidusseau/ostep-projects/tree/master/concurrency-pzip) project first. Use the test-files in the initial utilities zip project to check your work.
- For this project it is highly advantageous to work in small increments: focus on making a correct sequential implementation first, and then think about how you can parallelize it. 
- The producer-consumer queue using locks and condition variables is your central data structure for parallelizing work. It is described in detail in the chapter on **Condition Variables**.
- Remember to make copies of the keys and values passed to your `MR_Emit` implementation, otherwise you'll end up with a heap of garbage. 
