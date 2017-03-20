----------------------
1 - Install Maven 3

    $ sudo apt-get update
    $ sudo apt-get install maven
    $ mvn -version

1.1 - Manual installation (if steps above don't work)

    $ sudo -H gedit /etc/apt/sources.list

1.1.1 - Add the following line the sources.list file:

  "deb http://ppa.launchpad.net/natecarlson/maven3/ubuntu precise main"

  "deb-src http://ppa.launchpad.net/natecarlson/maven3/ubuntu precise main"

1.1.2 - Try install again

    $ sudo apt-get update
    $ sudo apt-get install maven3
1.1.3 - Create links

    $ sudo ln -s /usr/share/maven3/bin/mvn /usr/bin/mvn


-----------------------
2 - Install Java 8

    $ sudo add-apt-repository ppa:webupd8team/java
    $ sudo apt-get update
    $ sudo apt-get install oracle-java8-installer


-----------------------
3 - Clone project
    $ git clone git clone git@bitbucket.org:dafiti/bdd-o-globo.git


-----------------------
4 - Install dependencies
    $ mvn clean install


-----------------------
5 - Install ChromeDriver

6 - Install dependencies

    $ mvn clean install

-----------------------
7 - Import tests from Eclipse

7.1 - click on File

7.2 - click on Open Projects from File System...

7.3 - click on Directory...

7.4 - select project

-----------------------
8 - Run tests

8.1 - run all tests in Terminator (shell)
    $ mvn test

or 

8.2 - run tests with Eclipse (right button Run as JUnit test on mobile-fotogalerias/src/test/java/com/globo/RunTest.java)

-----------------------
