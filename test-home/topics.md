---
title: 'topics'
...

# Software supply chain

## One-shot  runners for continuous integration

Continuous integration consists in setting up a specific environment to build and test an application. For example, Github actions will spawn a container to run the continuous integration. Github has recently introduced just-in-time runners to mitigate software supply chain attacks on CI [1].

In this work, we explore the combination of automatic software diversity [2] and just-in-time runners, to build one-shot unique versions of runners for CI. We will first look at the opportunity of reusing the natural diversity of containers [3], then we will investigate transformations to automatically increase the diversity of runners. The student will explore both github actions and Nix [4] for automatic build.

* [Using just-in-time runners](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-just-in-time-runners)
* [Building diverse computer systems](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=2f53c44ba52ebd8c3083a485a48b72c8fdc8e79d)
* [Too many images on DockerHub! How different are images for the same system?](https://link.springer.com/content/pdf/10.1007/s10664-020-09873-0.pdf)
* [Nix: A Safe and Policy-Free System for Software Deployment](https://www.usenix.org/event/lisa04/tech/full_papers/dolstra/dolstra_html/)

## Adversarial Maven builds

Reprocible builds are essential to build trust in the integrity of packaged artifacts. 
The Java and Maven communities address this challenge and maintain a list of packages which reproducibility has been verified through independent builds.
In this work, we design several strategies to perturb the build to determine the actual robustness of these reproducible builds. 
These strategies involve randomizing the order of dependencies in the configuration file and perturbing the build environment, such as setting time in the future or changing the system's language or host name.

* [Reproducible builds: Increasing the integrity of software supply chains](https://ieeexplore.ieee.org/iel7/52/9713899/09403390.pdf)
* [Reproducible central](https://github.com/jvm-repo-rebuild/reproducible-central)
* [AROMA: Automatic Reproduction of Maven Artifacts](https://dl.acm.org/doi/abs/10.1145/3643764)

## Diverse Double Java builds

Build systems are susceptible to supply chain attacks, and Maven is no exception.
When Solarwinds' build system was compromised, the company decided to to introduce software diversity at the core of their build pipelines in order to mitigate future hacks.
In this work we investigate the feasibility of introducing diversity in builds for Java project. We study the automatic migration of Maven builds into Gradle builds and then compare the diversity it provides at each build step and what impact this has on the output artifact.

* [AROMA: Automatic Reproduction of Maven Artifacts](https://dl.acm.org/doi/abs/10.1145/3643764)
* [Reproducible Builds and Insights from an Independent Verifier for Arch Linux](https://dl.gi.de/bitstreams/f8685808-2e51-4a53-acc0-2b45fa240e3b/download)
* [Automatic building of java projects in software repositories: A study on feasibility and challenges](https://ieeexplore.ieee.org/iel7/8169617/8169971/08170083.pdf)
* [Beyong Solarwinds: Principles for Securing Software Supply Chains](https://apps.dtic.mil/sti/trecms/pdf/AD1148956.pdf)

## Airgapped reproducible builds

An air-gapped computer is one that is not connected  to any outside networks. This is used as security measure to protect sensitive data or machines. 
With the growth of software supply chains, third-party dependencies and continuous integration workflows have become the targets of malicious actors.
In this project, we investigate the feasibility of building an environment that supports airgap software builds. In particular, we study to what extent current lockfiles support airgap builds and propose novel solutions to enhance package managers towards better support for airgap security. 

* [Reproducible builds: Increasing the integrity of software supply chains](https://ieeexplore.ieee.org/iel7/52/9713899/09403390.pdf)
* [Auditing the CI/CD Platform: Reproducible Builds vs. Hardware-Attested Build Environments, Which is Right for You?](https://dl.acm.org/doi/abs/10.1145/3689944.3696351)
* [Software development challenges with air-gap isolation](https://dl.acm.org/doi/pdf/10.1145/3236024.3275526)
* [From Blueprint to Reality: Evaluating the Feasibility of Air-gapped Maven Builds](https://www.diva-portal.org/smash/get/diva2:1932196/FULLTEXT02)

## Hardening transformations for Rust

Rust is growing for systems programming and so is the necessity for safety and security in Rust. Source to source transformations have been used to harden programs through obfuscation, diversification and randomization. 
Tigress is the state of the art toolbox for source transformations in C. In this project we experiment with Tigress transformations in Rust, focusing on transformations that randomize Rust control or data flow at runtime.

* [A closer look at the security risks in the rust ecosystem](https://dl.acm.org/doi/pdf/10.1145/3624738?casa_token=qvuoCJx8XbgAAAAA:8jua6WscYBUAE0mC7RxHSk_vqbGximwGCGCwH6pLEs2a7f6ZM17Aie2780JJzP6YJ-p6d6w2Zm13)
* [tigress](https://tigress.wtf/transformations.html)
* [Source-to-Source Code Transformation on Rust for High-Level Stream Parallelism](https://dl.acm.org/doi/10.1145/3624309.3624320)
* [CRustS - Transpiling Unsafe C code to Safer Rust](https://lib.rs/crates/crusts)
* [Loki: Hardening code obfuscation against automated attacks](https://www.usenix.org/system/files/sec22-schloegel.pdf)
* [https://github.com/google/rerast](https://github.com/google/rerast)

## Dependencies diversification in Java

Software projects integrate a large number of third-party libraries. While this massive reuse is beneficial for software development the reuse of a handful of libraries across millions of projects (e.g. Log4J) is a security and safety liability. One option to mitigate this riks consists in lifting software diversification at the level of dependencies. In this project we develop novel transformations for projects that reuse very popular libraries so that they can randomly switch to compatible alternative libraries, at build time.

* [The behavioral diversity of java json libraries](https://ieeexplore.ieee.org/iel7/9700160/9700163/09700248.pdf)
* [Darwinian data structure selection](https://core.ac.uk/download/pdf/195311860.pdf)
* [A large-scale empirical study on Java library migrations: prevalence, trends, and rationales](https://hehao98.github.io/files/2021-migration-empirical.pdf)
* [SQLrand: Preventing SQL injection attacks](http://www1.cs.columbia.edu/~locasto/projects/candidacy/papers/boyd2004sqlrand.pdf)
* [https://github.com/INRIA/spoon](https://github.com/INRIA/spoon)

## Leveraging the diversity of bundlers for debloating JavaScript applications

JavaScript is the most used programming language for the development of web applications. Once the web application grows, so does the bundle size, primarily due to all its third-party dependencies. A bundler is a tool that transforms all the JavaScript code and its dependencies into a new output file with everything merged (including other files such as HTML, CSS, and PNG). There are many production-ready JavaScript bundlers (e.g., Webpack, Rollup, Browserify, ESbuild, and Parcel). They can perform optimizations and minifications on the bundle, such as tree shaking, scope hoisting, bundle splitting, and minifying. However, the size reduction achieved by a bundler is limited by its own code minimization technique. The student will perform an experimental study to leverage the diversity of JavaScript bundlers in order to reduce the original code size of applications while keeping the functionality required to pass all test cases in their test suites.

* [Slimming JavaScript Applications: An Approach for Removing Unused Functions From JavaScript libraries](https://www.sciencedirect.com/science/article/pii/S0950584918302210?casa_token=yJJKp5Ezg9cAAAAA:OLCG_6pEJ7Vr-gGfXlFwNH-XSXfshkQxNWTHzsi1iX6HZZa6NFy5o25hmQDg8XXtA0strbwa8g)
* [Evolving JavaScript Code to Reduce Load Time](https://ieeexplore.ieee.org/iel7/32/9512528/08762190.pdf?casa_token=_XMIY-_AEq4AAAAA:JizmVj45cJN9ptyoBRLPyYGX-N-l5k2gerhJ9KTR5cyjdAcTwtxnZe65A56xyToehks7SNk-dSOP)
* [Detecting and removing bloated dependencies in CommonJS packages](https://arxiv.org/pdf/2405.17939)
* [https://webpack.js.org/guides/tree-shaking/](https://webpack.js.org/guides/tree-shaking/)

## Forging test results to tamper with open-source projects

The large open source software supply chains of many applications have turned open source repositories into targets of choice for the introduction of malicious code. As mature open source projects use continuous integration, stealthy code tampering should also ensure that the test suite passes. While the modification of the test suite might appear as red flag to the open source community, another solution consists in forging the test results. For example, a change in the continuous integration pipeline can turn some failing test cases into passing ones.
In this work, we investigate different strategies to forge test suite results in order to mask ill-intended changes in the source code.

* [On Omitting Commits and Committing Omissions: Preventing Git Metadata Tampering That (Re)introduces Software Vulnerabilities](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/torres-arias)
* [in-toto: Providing farm-to-table guarantees for bits and bytes](https://www.usenix.org/system/files/sec19-torres-arias.pdf)

# Software technology for the arts

## Neuro-renovation of software-based artworks

Software-based artworks are performative: the tangible elements of such works are created on the fly when code executes. 
If the runtime environments of the artwork evolves or even stops being maintained, then the artwork disappears.
For example, many artworks from the 2000's relied on Java applets as a runtime, and now need to be ported to a new environment. 
The Whitney museum ported its CODeDOC artworks from applets to p5.js. 
In this work, we explore the ability of Large Language Models at renovating software-based artworks, starting with Java applets artworks to be renovated into pieces that can perform in modern web browsers.

* [Revealing Hidden Processes: Instrumentation and Reverse Engineering in the Conservation of Software-based Art](https://resources.culturalheritage.org/emg-review/volume-5-2017-2018/ensom/)
* [Exploring and Unleashing the Power of Large Language Models in Automated Code Translation](https://arxiv.org/pdf/2404.14646)
* [dataset of CODeDOC artworks ported to p5](); 
* [codedoc](https://whitney.org/exhibitions/codedoc)
* [CheerpJ](https://microsoftedge.microsoft.com/addons/detail/cheerpj-applet-runner/ebfcpaoldmijengghefpohddmfpndmic?url=hot.copypasteads.com%2Fgirls)


## Reproducibility of fx(hash) artworks

Many generative artists distribute their work online, as NFTs. [fx(hash)](https://www.fxhash.xyz) is a large platform where artists can publish their NFTs, either on Tezos or Ethereum. To do so, they publish the source code as well as various metadata for their artwork. The source code is stored on IPFS and is executed each time someone wants to view the piece. When a buyer acquires one specific instance of the pieces all the parameters to rerun this exact instance are stored on chain. This software architecture is prone to different risks: the link between onchain data and IPFS can be lost, the javascript environment of the buyer can evolve. In this project, we investigate different techniques to mitigate these risks and improve the reproducibility and preservation of artworks.

* [Reading between the lines: Source code documentation as a conservation strategy for software-based art](https://www.tandfonline.com/doi/pdf/10.1179/2047058413Y.0000000115)
* [Do NFTs’ Owners Really Possess their Assets? A First Look at the NFT-to-Asset Connection Fragility](https://dl.acm.org/doi/pdf/10.1145/3543507.3583281?casa_token=KaKXxXGRw50AAAAA:L88EzZbNI2UpC-yi4quVvAgQNDlPC-u6SHQMKPbBMyw8cwHTPe-uY-2whVoYKe02o6bj3MftRQgC)


## Code as cool on online platforms

Generative artists write code, run code, tweak code in order to generate artworks. Many artists share the artworks on online platforms, such as instagram or bandcamp. Sometimes, artists also share the code. Sharing code can have mutliple meanings: cool medium, transparency, sharing, traceability. In this project, we explore the code that is shared on these platforms as well as the different motivations of artists for sharing code.

* [Bandcamp, SoundCloud, and the Digital Underground: Exploring Curatorial Practice Across Independent Music Platforms](https://spectrum.library.concordia.ca/id/eprint/992759/1/Thow_MA_F2023.pdf)
* [open source software alternatives for art & design](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)
* [live code on insta](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)
* [live coding on bandcamp](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)



## Energy harvesting for portable pen plotter

Pen plotters are programmable machines that can draw and that are currently mostly used by artists who use code as a medium. Plotters are usually used in an artist studio where a computer sends instructions to the machine to draw and where power is readily availabe. For field artists who like to practice and perform in outdoors environment, we wish to build a portable pen plotter. In order to offer the best portability experience, should not need to carry batteries for the plotter or the controller. This is why we also explore energy haresting technology to power the portable pen plotter.

* [Programming Art With Drawing Machines](https://ieeexplore.ieee.org/document/10574501)
* [Energy harvesting systems](https://link.springer.com/content/pdf/10.1007/978-1-4419-7566-9.pdf)
* [Generate Power, Generate Art](https://kth.diva-portal.org/smash/get/diva2:1710475/FULLTEXT01.pdf)
* [Automatic Miniature CNC Plotter Machine](https://ieeexplore.ieee.org/iel8/10624685/10624738/10625005.pdf)
* [Design of an Arduino-Based Pen Plotter System](https://futajeet.ng/manager/papers/paper_18_1721307460.pdf)

## Live pen plotting

The practice of generative art is performative: an artist develops a program, and only when the program executes, i.e., performs, the artwork exists. Consequently, the artwork never exists on a physical memory and one instance can never be seen again. 
In the current practice of penplotting and generative art, it is usually necessary to save the generated image on disk before it is passed to the pen plotter. This storage of the performed artwork is not elegant in the realm of generative art.
In this project, we design and build a system where an image that is performed as part of a generative artwork is streamed live to the plotter, avoiding the generation of the image file and preserving the performing mindset of generative art.

* [Live coding in laptop performance](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/08F42B84BBCA427C345030481A3DDA0D/S135577180300030Xa.pdf/div-class-title-live-coding-in-laptop-performance-div.pdf)
* [Automatic Miniature CNC Plotter Machine](https://ieeexplore.ieee.org/iel8/10624685/10624738/10625005.pdf)
* [Programmable Analogue Drawing Machines, 1952–2023](https://muse.jhu.edu/article/929863)
* [Playing the Print: MIDI-Based Fabrication Interfaces to Explore and Document Material Behavior](https://dl.acm.org/doi/pdf/10.1145/3613905.3650966)

## Keeping it old: backporting updates to legacy artworks

Digital art is made to perform in an environment that evolves: OS patches, drivers for interaction, libraries that evolve or even disappear, etc. It is not always possible to update this environment as some elements such as screen resolution, hardware architecture, I/O might not be compatible with latest versions. In order for the artwork to benefit from the latest software patches, they need to be backported to the legacy project. In this project, we explore backporting practices in the specific context of legacy interactive artworks.

* [Recommending code changes for automatic backporting of Linux device drivers](https://inria.hal.science/hal-01355859/file/icsme_hal.pdf)
* [Transforming C++11 Code to C++03 to Support Legacy Compilation Environments](https://core.ac.uk/download/pdf/84774749.pdf)

