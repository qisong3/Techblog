---
title: Java-6
date: 2020-08-31
last-update: 2020-09-02
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

2006年12月11日，JDK6发布，相对于JDK5和后续的JDK7，JDK8，这个版本的改动并不算大。

## Collections 集合

### Deque  双向队列

JDK6中新增了Deque这个接口，支持在队列头和尾插入以及删除元素，以及实现Deque这个接口的集合实现类
- ArrayDeque  基于数组的高效率的双向队列
- BlockingDeque  继承了Deque和BlockingQueue两个接口的双向阻塞队列
- LinkedList  增加了对Deque的继承
- LinkedBlockingDeque 基于联表的双向阻塞队列

### Navigable* 可查询集合

- NavigableSet 在TreeSet基础上增加了查询的API，TreeSet继承此接口
- NavigableMap 在TreeMap基础上增加了查询的API,TreeMap继承此接口
- ConcurrentNavigableMap 继承了ConcurrentMap和NavigableMap接口的接口

## Reflection 反射

如下方法在编译时增加了warning警告
- getInterfaces() 
- getClasses() 
- getConstructors() 
- getMethod(String, Class...)  
- getConstructor(Class...)
- getDeclaredClasses()
- getDeclaredConstructors()
- getDeclaredMethod(String, Class...)
- getDeclaredConstructor(Class...)

```java 
public class Warning {
    void m() {
        try {
            Warning warn = new Warning();
            Class c = warn.getClass();
            Method m = c.getDeclaredMethod("m");
        } catch (NoSuchMethodException x) {
            x.printStackTrace();
        }
    }
}
```
基于此，上面这段代码编译时会爆出警告
```
$ javac Warning.java
Note: Warning.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
$ javac -Xlint:unchecked Warning.java 
Warning.java:8: warning: [unchecked] unchecked call to getDeclaredMethod(java.lang.String,java.lang.Class<?>...) as a member of the raw type java.lang.Class
            Method m = c.getDeclaredMethod("m");
                                          ^
1 warning

```

## Console 控制台
Console用于与设备的控制台终端相连接。readPassword()方法可以使用户在输入密码等敏感信息时不用显示在控制台中。

## Annotation Processor 注解处理器
在JDK5推出了Annotation以后，Annotation便大放异彩，广为使用。不过在此阶段获取注解信息，还需要在运行时通过反射的方式，效率较低且代码臃肿。

JDK6推出了Annotation Processor，在编译阶段可获取注解信息并执行相应的操作。鼎鼎大名的Lombok和Butter Knife的基本原理也源自Annotation Processor。

## Common Annotations 通用注解
为了避免各个各自定义通用类型的注解，导致注解类型极具膨胀。JDK6推出了一些通用的注解，可以同时在标准J2SE和J2EE上使用。
### @Generated Annotation
程序员并不需要在源码中写出所有代码，有些代码是可以自动生成的。很多样板代码都可以由工具或者框架自行完成。这些工具生成的可以使用 @Generated Annotation来标记。

@Generated Annotation可以用在包声明，类定义，接口定义，方法定义，变量定义等。

### @Resource and @Resources Annotation
应用程序中提供有用的功能的组件或者类，都可以被视为Resource(资源)，在EJB，Servlets，JMS等J2EE组件中应用尤其广泛。

@Resources则可以包含多个@Resource对象。

### @PostConstruct
这是一个用于方法上的注解，用于标识在类调用完构造函数后，立即执行标注了该注解的方法。

### @PostConstruct
与@PostConstruct类似，也是用于方法上的注解。不过执行时机是在类对象销毁之前，执行标注了该注解的方法。

### @DeclareRoles Annotations
这是一个用于类上的注解。用于标识可以使用此组件的角色集合。

### @RolesAllowed Annotation
这个注解可以用在类或者方法上，标识可以使用该类或方法的角色集合。

## Streaming API for XML(StaX)
XML流API(简称StaX)是用于读取和编写XML文档的API。在此之前，Java已经有Dom和Sax两种解析XML的方式，为何还要增加StaX呢?

Java解析XML有两种形式，一种是基于流，一种是基于事件处理。

- 基于流的是Dom解析，即先将整个XML文档缓存到内存中，再按需读写，这种方式，优势是快，劣势是内存占用比较多，尤其在内存紧张的小设备上。
- 而基于事件的处理方式Sax解析，应用程序需要将Listeners(监听器)注册到解析处理器(Handlers)上，然后通过回调函数获取来获取通知。
这种被称为推送解析(Pushing Parsing)模型。在处理的的过程中，主动权在Sax解析器。

有鉴于此，JDK6正式推出了StaX。同样是基于事件处理，StaX采用了拉取解析(Pull Parsing)的模型。应用程序可以通过从解析器从主动拉取事件来控制解析的过程。

```java 
    private static List<Website> parse(String xmlName) throws XMLStreamException {
        Website website = null;
        List<Website> websites = new ArrayList<>();
        XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
        XMLEventReader reader = xmlInputFactory.createXMLEventReader(DomParserDemo.class.getClassLoader().getResourceAsStream(xmlName));
        while (reader.hasNext()) {
            XMLEvent nextEvent = reader.nextEvent();
            if (nextEvent.isStartElement()) {
                StartElement startElement = nextEvent.asStartElement();
                switch (startElement.getName().getLocalPart()) {
                    case "website":
                        website = new Website();
                        Attribute url = startElement.getAttributeByName(new QName("url"));
                        if (url != null) {
                            website.setUrl(url.getValue());
                        }
                        break;
                    case "name":
                        nextEvent = reader.nextEvent();
                        website.setName(nextEvent.asCharacters().getData());
                        break;
                    case "category":
                        nextEvent = reader.nextEvent();
                        website.setCategory(nextEvent.asCharacters().getData());
                        break;
                    case "status":
                        nextEvent = reader.nextEvent();
                        website.setStatus(nextEvent.asCharacters().getData());
                        break;
                }
            }
            if (nextEvent.isEndElement()) {
                EndElement endElement = nextEvent.asEndElement();
                if (endElement.getName().getLocalPart().equals("website")) {
                    websites.add(website);
                }
            }
        }
        return websites;
    }
```
```xml 
<?xml version="1.0" encoding="UTF-8"?>
<websites>
    <website url="https://baeldung.com">
        <name>Baeldung</name>
        <category>Online Courses</category>
        <status>Online</status>
    </website>
    <website url="http://example.com">
        <name>Example</name>
        <category>Examples</category>
        <status>Offline</status>
    </website>
    <website url="http://localhost:8080">
        <name>Localhost</name>
        <category>Tests</category>
        <status>Offline</status>
    </website>
</websites>
```
## Scripting Language for the Java Platform Java平台支持的脚本语言
Java 6提供了Common Scripting Language Framework (通用脚本语言框架)，用于将各种脚本语言集成到Java平台中。大多数流行的脚本语言，如JavaScript，PHP等，都可以被集成到Java平台上。

在脚本语言和Java平台之间的内部交互成为了可能。这意味着脚本语言可以使用一系列Java类库，而Java语言则可以原生嵌入脚本语言。
```java 
    public static void main(String[] args) {

        try{
            // Create an instance of the Scripting manager.
            ScriptEngineManager manager = new ScriptEngineManager();

            // Get the reference to the rhino scripting engine.
            ScriptEngine rhinoEngine = manager.getEngineByName("javascript");

            // Get the Binding object for this Engine.
            Bindings bindings =	rhinoEngine.getBindings(ScriptContext.ENGINE_SCOPE);

            // Put the input value to the Binding.
            bindings.put("strValue", "A Test String");

            // Populate the script code to be executed.
            StringBuilder scriptCode = new StringBuilder();
            scriptCode.append("var javaString = new java.lang.String(strValue);");
            scriptCode.append("var result = javaString.length();");

            // Evaluate the Script code.
            rhinoEngine.eval(scriptCode.toString());

            // Take the output value from the script, i.e from the Bindings.
            int strLength = (Integer)bindings.get("result");

            System.out.println("Length is " + strLength);
        }catch(Exception exception){
            exception.printStackTrace();
        }
    }
```

## Java Compiler API
编译Java源文件向来是编译器或者IDE的工作。开发者要手动编译Java源文件，需要启动一个进程来执行javac程序。

JDK6推出了Java Compiler API，可以使开发者使用系统标准API来编译Java源文件。

```java 

    public class SimpleCompileTest {
    
        private void compileClass(String name) throws IOException {
    
            String filePath = System.getProperty("user.dir") + "\\feature\\src\\main\\java\\cn\\errison\\feature\\demo\\compiler\\" + name;
            JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
            int compilationResult = compiler.run(null, System.out, new FileOutputStream(new File("error.txt")), filePath);
            if (compilationResult == 0) {
                System.out.println("Compilation is successful");
            } else {
                System.out.println("Compilation Failed");
            }
        }
    
        public static void main(String[] args) throws Exception {
            SimpleCompileTest test = new SimpleCompileTest();
            test.compileClass("Demo.java");
        }
    }
```


## JDBC 4.0 API

与JDK6一并发布的JDBC4.0，发布了诸多新特性。

### 自动注册驱动
在JDBC4.0以前，应用开发者在进行数据库连接之前都必须显式加载数据库驱动。
```java 
    Class.forName("FullyQualifiedNameOfTheDriverClass");
```
这么做的一个问题是，一旦数据库驱动提供商更改了驱动的类名，那么之前的代码就需要改写。

在JDK5.0中，发布了Service Provider(服务提供商)机制。Service定义了服务功能的一些列接口，Provider是Service的完整实现。

Provider需要以Jar包形式提供，并且包含含一个`\\META-INF\\services\\FullNameOfTheService`的目录。

如果一个JDBC的驱动Provider实现了接口服务，那么它需要包含一个`\\META-INF\\services\\java.sql.Driver`的文件，文件的内容

应当是`com.mysql.jdbc.Driver  # Class name of the Driver`。

这样，Java程序就可以自动加载JDBC驱动，如果有多个驱动同时存在，默认选取首个驱动。


## Annotated SQL queries 注解查询

### ROWID data type

增加了`java.sql.RowId`数据结构，使用JDBC的程序可以直接获得行ID。

### National Character Set Conversion Support

增加了NCHAR, NVARCHAR, LONGNVARCHAR, NCLOB几个新的数据类型，相应的增加了调用和返回结果集对上述字段类型的支持。

### Enhanced Support for BLOB and CLOB

增加了对BLOB, CLOB ， NCLOB对象创建的支持。

### SQL/XML and XML Support

SQL2003标准中定义了XML这种数据类型，JDBC对此提供了提供了一个映射接口（java.sql.SQLXML），并利用这个接口来支持SQL/XML数据类型。

### Annotation Query
JDBC4.0支持在代码里通过注解的方式来进行SQL查询和更新操作。需要定义继承`BaseQuery`接口的新街口，并在方法注解中添加SQL语句.
```java 
    public interface QueryAnnotationExample extends BaseQuery {

        @Select(sql="SELECT ID, MODEL, MODEL_YEAR FROM CAR WHERE MODEL_YEAR = ?1")
        public DataSet<Car> getCarsModelYear( String year );
    

        @Update(sql="update LoanDetails set LoanStatus = ?1
                    where loanId = ?2")
        boolean updateLoanStatus(String loanStatus, int loanId);
    }
    
```
