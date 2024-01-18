How much code do you need?
===

(and can you debloat the rest?)

[Benoit Baudry](https://softwarediversity.eu/)
baudry@kth.se

---

![winter](https://softwarediversity.eu/kth-benevol.jpg)


---

Summer 2019
---

![summer](https://softwarediversity.eu/summer2019.jpg =1000x580)

---

Summer 2019
---

![apollo](https://www.archives.gov/files/news/images/apollo-11-aldrin-on-moon-banner.jpg)

---

50th anniversary of Apollo 11
---

- The Apollo 11 [AGC](https://github.com/chrislgarry/Apollo-11) 
- An iconic, [small](https://fedtechmagazine.com/article/2019/07/tech-behind-apollo-11s-guidance-computer) program

---

Small programs after 1969 ?
---

* today we don't write much code, we reuse a lot
* sqllite driver
* microcontrollers code
* commodore 64

---

Small Programs after 1969
---

- The [line mode browser](https://line-mode.cern.ch/) was [pretty small](https://github.com/w3c/libwww)
- Competition code, e.g., 
  - [Flip dots with feelings in 1021 bytes](http://www.p01.org/MONOSPACE/)
  - [A tiny C program](https://bellard.org/mersenne.html)
- Programs for _very_ small things

---

Application code is big
---

* [Firefox](https://www.openhub.net/p/firefox) is big
* The [Java Virtual Machine](https://www.openhub.net/p/openjdk) is big
* [ffmpeg](https://www.openhub.net/p/ffmpeg) is big (and very [customizable](https://gist.github.com/tayvano/6e2d456a9897f55025e25035478a3a50) :)
* [GAFAs are big](https://www.visualcapitalist.com/millions-lines-of-code/)


---

Why is code growth a problem ?
---

* code growth is an issue for code quality 
* big code is difficult to maintain
* code growth can be a result of making the code easier to maintain
* bandwidth issues when the code is downloaded
* More dificult to understand and thus more difficult to contribute
* I'd add psychological aspects: developing new code is more fun than maintaining it... so it grows (because many work on development), but nobody (or few) want to maintain it09:30
* building the project (compile, test, package) becomes a problem for large code bases (Cf. the AMA session of yesterday ;-) )

---

Why is code growth a problem ?
---

* [Wikipedia's JavaScript initialisation on a budget](https://phabricator.wikimedia.org/phame/post/view/175/wikipedia_s_javascript_initialisation_on_a_budget/)
* [Stripping dependency bloat in VictoriaMetrics Docker image](https://valyala.medium.com/stripping-dependency-bloat-in-victoriametrics-docker-image-983fb5912b0d)
* [Removing Kode](https://cacm.acm.org/magazines/2020/12/248794-removing-kode/fulltext)
* [Reduce attack surfaces](https://www.onr.navy.mil/en/Media-Center/Press-Releases/2016/Software-Bloat)

---

Why does code size grow?
---

* refactoring can make code size grow
* reusing libraries that have a larger API than the one we actually need
* adding new features
* adding new platform support
* obfuscation / make your code look complicate
* keep all versions live / backward compatibility
* code cloning
* we don't remove old code that we don't use anymore (just in case :)
* some managers expect code growth, it's a sign of progress :) 

---

Code debloating techniques
---
* [Cimplifier: Automatically Debloating Containers](http://pages.cs.wisc.edu/~vrastogi/static/papers/rddjm17.pdf). ESEC/FSE 2017.
* [Binary Control-Flow Trimming](https://www.researchgate.net/profile/Kevin_Hamlen/publication/334735194_Binary_Control-Flow_Trimming/links/5d3e5a52299bf1995b53cf27/Binary-Control-Flow-Trimming.pdf). CCS 2019.
* [Is Static Analysis Able to Identify Unnecessary Source Code?](https://www.cqse.eu/publications/2020-unnecessary-code-tosem.pdf). TOSEM 2020.
* [Slimium: Debloating the Chromium Browser with Feature Subsetting](https://gts3.org/assets/papers/2020/qian:slimium.pdf). CCS 2020.

 

---

[A Comprehensive Study of Bloated Dependencies in the Maven Ecosystem](https://arxiv.org/pdf/2001.07808)
---

* Intuition: package managers, automatic build encourage software reuse and introduce bloated dependencies


---

[A Comprehensive Study of Bloated Dependencies in the Maven Ecosystem](https://arxiv.org/pdf/2001.07808)
---

* Let's look at one [build file](https://repo1.maven.org/maven2/org/jxls/jxls-poi/1.0.15/jxls-poi-1.0.15.pom), for the [jxls library](https://github.com/jxlsteam/jxls/)
* as well as a [build file for a dependency of jxls](https://repo1.maven.org/maven2/org/apache/poi/poi/3.17/poi-3.17.pom)


---

[A Comprehensive Study of Bloated Dependencies in the Maven Ecosystem](https://arxiv.org/pdf/2001.07808)
---
* 9K artefacts and 700K dependencies
* 75% of dependencies are bloated
* Developers care
    * removed 131 dependencies in 30 projects
    * experiments at SAP and Ericsson ongoing
* [DepClean Maven dependency debloating tool](https://github.com/castor-software/depclean)
* To appear in EMSE journal, 2020.


---

Conclusion
---

* There is lots of code bloat
    * from libc to Chrome
    * caused by reuse, feature creep, usage, etc.
* Software developers care
    * for security
    * for performance
* It is a relevant research topic
    * that is hard
    * that matters 

---

# Thank you!

This work is a collaboration with [César Soto-Valero](https://www.cesarsotovalero.net/), [Thomas Durieux](https://durieux.me/), [Nicolas Harrand](https://nharrand.github.io/https://www.monperrus.net/martin/), [Martin Monperrus](https://www.monperrus.net/martin/), at the [KTH Royal Institute of Technology](https://www.kth.se/en) and is supported by the [WASP program](https://wasp-sweden.org/)

---

More reads
---
* [Living review on code debloat](https://www.cesarsotovalero.net/software-debloating-papers)
* [Removing code not covered in production](https://carlosbecker.com/posts/production-code-coverage-jacoco)
* [Shrinking a Kotlin binary by 99.2%](https://jakewharton.com/shrinking-a-kotlin-binary/)
* [unikernels](https://people.cs.pitt.edu/~babay/courses/cs3551/papers/asplos13-unikernels.pdf)

