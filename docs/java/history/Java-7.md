---
title: Java-7
date: 2020-09-17
last-update: 2020-09-17
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

2011年7月28日，JDK７正式发布。

## String in switch  
在JDK7以前，switch语句中的判断字段只能是整型字符，如short,int,char等。JDK7以后，可以使用String作为判断条件。

```java 
    String day = "SAT";
    switch (day) {   // switch on String selector
       case "MON": System.out.println("Monday"); break;
       case "TUE": System.out.println("Tuesday"); break;
       case "WED": System.out.println("Wednesday"); break;
       case "THU": System.out.println("Thursday"); break;
       case "FRI": System.out.println("Friday"); break;
       case "SAT": System.out.println("Saturday"); break;
       case "SUN": System.out.println("Sunday"); break;
       default: System.out.println("Invalid");
    }
```
在进行case判断时，编译器采用String.equals()方法进行对比。

::: tip 
使用switch语句比大量的if else要精简，而且速度要更快。
:::

## Number decorate  数字类型表示
Java中，十六进制和八进制都有固定前缀，JDK7中为二进制数字增加了前缀0b。此外，还允许在数字除了开头和结尾中的任意两个数字之间添加"_"，便于阅读。
输出时也可以通过      
```java 
  private static void printNum(){
      // 十进制
      int a = 52;
      // 十六进制
      int b = 0x34;
      // 八进制
      int c = 064;
      // 二进制
      int d = 0b110100;
      // 二进制横线
      int d1 = 0b11_0_100;
      System.out.println(a == b && a == c && a == d && a == d1);
      // Formatted output: "%d" for integer in decimal, "%x" in hexadecimal, "%o" in octal.
      // Take note that "%b" prints true or false (for null), NOT binary.
      System.out.printf("%d(%x)(%o)(%b)\n", a, a, a, a);
  }

```
## Catch Multiple Exception 多异常捕获
在JDK7之前，当需要捕获多个异常时，需要并行写多个catch语句，代码臃肿且不美观，JDK7以后，可以将捕获的异常并行处理。
```java 
    // before JDK7
    private static void showExceptionBefore(String path) {

        try {
            FileInputStream fis = new FileInputStream(new File(path));
            byte[] bytes = path.getBytes("Utf-8");
            int len = bytes.length;
            byte b = bytes[len];
        } catch (FileNotFoundException e1) {
            e1.printStackTrace();
        } catch (UnsupportedEncodingException e2) {
            e2.printStackTrace();
        } catch (IndexOutOfBoundsException e3) {
            e3.printStackTrace();
        }
    }

    // since JDK7
    private static void showExceptionAfter(String path) {
        try {
            FileInputStream fis = new FileInputStream(new File(path));
            byte[] bytes = path.getBytes("Utf-8");
            int len = bytes.length;
            byte b = bytes[len];

        } catch (FileNotFoundException | UnsupportedEncodingException | IndexOutOfBoundsException e) {
            e.printStackTrace();
        }
    }
```
## Type Inference 类型推断 

JDK7以前，声明一个包含多重泛型的容器类，代码写起来是这样的。
```java
    Map<String, Map<String, List<Integer>>> map = new HashMap<String, Map<String, List<Integer>>>();
```
实际上等号右边的类型即使不书写，也是确定了的，JDK7以后就省去了这个烦恼。等号有便`<>`符号中间的泛型，编译器都可以通过类型推断来确定。
```java 
    Map<String, Map<String, List<Integer>>> map = new HashMap<>();
```

## try-with-resources 
在JDK7以前，我们需要try-catch-finally来进行资源管理。finally是必须的，以便能够在程序无论是安全还是异常退出时都可以安全正确的关闭资源。

JDK7引入了try-with-resources语句，可以确保资源在语句包围的范围内可以安全关闭释放。

```java 

    private static void readBefore(){
        BufferedReader src = null;
        BufferedWriter dest = null;
        try {
            src  = new BufferedReader(new FileReader("in.txt"));
            dest = new BufferedWriter(new FileWriter("out.txt"));
            String line;
            while ((line = src.readLine()) != null) {
                System.out.println(line);
                dest.write(line);
                dest.newLine();  // write a newline
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {            // always close the streams
            try {
                if (src != null) src.close();  // close() throw IOException
                if (dest != null) dest.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }

        try {
            src.read();   // Trigger IOException: Stream closed
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private static void readAfter(){
        try (BufferedReader src  = new BufferedReader(new FileReader("in.txt"));
             BufferedWriter dest = new BufferedWriter(new FileWriter("out.txt"))) {
            String line;
            while ((line = src.readLine()) != null) {
                System.out.println(line);
                dest.write(line);
                dest.newLine();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        // src and dest automatically close.
        // No need for finally to explicitly close the resources.
    }
```
## Fork/Join Framework
在Java程序中，更加高效地利用多核一直是一个挑战。JDK5发布了Executor框架，支持使用线程池来进行并发处理。

但是使用这个框架，没法将每个线程运行的结果聚合在一起，基于此，JDK7推出了Fork and Join框架。

Fork Join框架先将任务分解到无法再分解的迷你任务中去，类似于分治算法，然后再将各个任务的结果合并处理。

见下图
![forkandjoin](/images/Java-history/fork-join-framework.png)

伪代码可以参考

```java 
    Result solve(Problem problem) {
        if (problem is small)
            directly solve problem
        else {
            split problem into independent parts
            fork new subtasks to solve each part
            join all subtasks
            compose result from subresults
        }
    }
```

这个框架的一个重要理念是，理想状态下没有线程是闲置的。线程一旦空闲，就会从忙碌线程中偷取任务来执行。这也被称为`work-stealing`算法。

::: tip
Fork Join框架是由Java 并发之父Doug Lea亲自操刀主持的，
:::

理解Fork Join框架，主要需要理解两个类，`ForkJoinPool`和`ForkJoinTask`。

- ForkJoinPool 实现了ExecutorService接口以及`work-stealing`算法。
一般将线程池的大小设定为PC可用的核心数。
```java 
ForkJoinPool pool = new ForkJoinPool(Runtime.getRunTime().availableProcessors();
```
与其他实现ExecutorService的线程池不同，不论给ForkJoinPool设置了多大的初始大小，这个线程池都会在任意时刻动态控制线程池大小。
另一个不同点是，这个线程池不需要显式关闭，因为创建的线程都是后台线程(Daemon thread)。

- ForkJoinTask 是ForkJoinPool中执行任务的的单元，是一个抽象类。有两个具体实现类，`Recursiveaction`和`RecursiveTask`。
两者的不同在于`RecursiveTask`可以返回一个指定类型的对象值。

以一个例子来说明ForkJoinPool的使用。

```java 

    public class FolderProcessor extends RecursiveTask<List<String>> {

    private static final long serialVersionUID = 1L;
    //This attribute will store the full path of the folder this task is going to process.
    private final String path;
    //This attribute will store the name of the extension of the files this task is going to look for.
    private final String extension;

    //Implement the constructor of the class to initialize its attributes
    public FolderProcessor(String path, String extension) {
        this.path = path;
        this.extension = extension;
    }

    //Implement the compute() method. As you parameterized the RecursiveTask class with the List<String> type,
    //this method has to return an object of that type.
    @Override
    protected List<String> compute() {
        //List to store the names of the files stored in the folder.
        List<String> list = new ArrayList<String>();
        //FolderProcessor tasks to store the subtasks that are going to process the subfolders stored in the folder
        List<FolderProcessor> tasks = new ArrayList<>();
        //Get the content of the folder.
        File file = new File(path);
        File content[] = file.listFiles();
        //For each element in the folder, if there is a subfolder, create a new FolderProcessor object
        //and execute it asynchronously using the fork() method.
        if (content != null) {
            for (int i = 0; i < content.length; i++) {
                if (content[i].isDirectory()) {
                    FolderProcessor task = new FolderProcessor(content[i].getAbsolutePath(), extension);
                    task.fork();
                    tasks.add(task);
                }
                //Otherwise, compare the extension of the file with the extension you are looking for using the checkFile() method
                //and, if they are equal, store the full path of the file in the list of strings declared earlier.
                else {
                    if (checkFile(content[i].getName())) {
                        list.add(content[i].getAbsolutePath());
                    }
                }
            }
        }
        //If the list of the FolderProcessor subtasks has more than 50 elements,
        //write a message to the console to indicate this circumstance.
        if (tasks.size() > 50) {
            System.out.printf("%s: %d tasks ran.\n", file.getAbsolutePath(), tasks.size());
        }
        //add to the list of files the results returned by the subtasks launched by this task.
        addResultsFromTasks(list, tasks);
        //Return the list of strings
        return list;
    }

    //For each task stored in the list of tasks, call the join() method that will wait for its finalization and then will return the result of the task.
    //Add that result to the list of strings using the addAll() method.
    private void addResultsFromTasks(List<String> list, List<FolderProcessor> tasks) {
        for (FolderProcessor item : tasks) {
            list.addAll(item.join());
        }
    }

    //This method compares if the name of a file passed as a parameter ends with the extension you are looking for.
    private boolean checkFile(String name) {
        return name.endsWith(extension);
    }
}
```
```java  

    private static void createForkJoin(){
        //Create ForkJoinPool using the default constructor.
        ForkJoinPool pool = new ForkJoinPool();
        //Create three FolderProcessor tasks. Initialize each one with a different folder path.
        FolderProcessor system = new FolderProcessor("C:\\Windows", "log");
        FolderProcessor apps = new FolderProcessor("C:\\Program Files", "log");
        FolderProcessor documents = new FolderProcessor("C:\\Documents And Settings", "log");
        //Execute the three tasks in the pool using the execute() method.
        pool.execute(system);
        pool.execute(apps);
        pool.execute(documents);
        //Write to the console information about the status of the pool every second
        //until the three tasks have finished their execution.
        do
        {
            System.out.printf("******************************************\n");
            System.out.printf("Main: Parallelism: %d\n", pool.getParallelism());
            System.out.printf("Main: Active Threads: %d\n", pool.getActiveThreadCount());
            System.out.printf("Main: Task Count: %d\n", pool.getQueuedTaskCount());
            System.out.printf("Main: Steal Count: %d\n", pool.getStealCount());
            System.out.printf("******************************************\n");
            try
            {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e)
            {
                e.printStackTrace();
            }
        } while ((!system.isDone()) || (!apps.isDone()) || (!documents.isDone()));
        //Shut down ForkJoinPool using the shutdown() method.
        pool.shutdown();
        //Write the number of results generated by each task to the console.
        List<String> results;
        results = system.join();
        System.out.printf("System: %d files found.\n", results.size());
        results = apps.join();
        System.out.printf("Apps: %d files found.\n", results.size());
        results = documents.join();
        System.out.printf("Documents: %d files found.\n", results.size());
    }
```
## Security Enhancement

- 支持ECC(椭圆曲线)加密算法
- 支持TLS1.2
- 一些脆弱的加密算法，如RC2，已经禁止在SSL握手中使用

## File Enhancement

### Java N
