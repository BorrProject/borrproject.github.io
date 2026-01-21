# Mini-WFS

- [Project repository](https://git.doit.wisc.edu/cdis/cs/courses/cs537/fall25/p6/p6-base)

In this project you will implement a basic filesystem in userspace (FUSE) not unlike the Very Simple Filesystem described in the book.

## Instructions
- Git clone the project repository
- Follow the instructions in the README.md file.
- Implement your solution in the solution directory.
- Run the `run-tests.sh` script located in the `tests`-directory to check your work.

#### Hints
- This may be the most substantial project in the entire course. It is a lot of work, but in the process you will learn not just about file systems but about the FUSE framework as well, which is used in a lot of places.
- Part 1 represents roughly 90% of the work, so don't get discouraged if you've been at it for a week and you're still "only at part 1". Part 1 is "working filesystem", and that is a big deal in its own right.
- Work in increments. Start with the `wfs_getattr` callback and work your way down from there. If you're in doubt about what to do next, run the tests and start with the first test-failure you encounter.
- The starter files include a bunch of useful helpers that you should use:
  - `allocate_block`: takes a bitmap array and an array length, flips the next free bit, and returns its number. This works for both the inode and data bitmaps.
  - `fillin_inode`: initializes the provided inode. Use this for any newly allocated inodes. 
  - `wfs_color_from_code`: returns a color name and ansi-espace sequences for the provided color code.
  - `parse_color_name`: takes a color name string and sets the `out_code` parameter to the parsed color code. BEWARE: this function returns `1` on success and ` 0` on failure. Check the return value. 
- The VSFS described in the Filesystem Implementation chapter has directory entries for `.` and `..` in the data blocks for each directory inode. **You should not do this. You will get test failures**. Only start allocating data blocks for the directory inode when you start adding files and directories to it.
- Think about how to handle direct versus indirect blocks. How do you determine when to use one over the other. What information do you have available to determine that. Do you need some sort of transition case?
- Directory inodes need certain mode bits to be set on creation, and these will not be set by the `mode` argument passed to the callback. You can set them by setting the mode field on the inode to `mode | S_IFDIR`.
- The "Read test for prebuilt image" test (test 25) is likely to fail due to incompatibilities between your memory layout and theirs. Feel free to skip this test in particular.
- The timestamp tests appear to be buggy and pass no matter what. You should still implement the timestamp updates.
