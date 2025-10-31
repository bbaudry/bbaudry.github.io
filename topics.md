---
title: 'Research topics'
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

## Build integrity with Diverse Build Pipelines

Software build pipelines transform source code into deployable artifacts. Relying on a single set of tools or environments throughout the build process creates significant risks. Software diversity in build pipelines can provide enhanced security and reliability. When Solarwinds' build system was compromised, the company decided to to introduce software diversity at the core of their build pipelines in order to mitigate future hacks.
In this work we investigate the feasibility of introducing diversity in builds for Java projects. We study the automatic migration of Maven builds into Gradle builds and then compare the diversity it provides at each build step and what impact this has on the output artifact.

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

## Environment diversity as code

Infrastructure as code is about provisioning execution resources through executable configuration files. In this context, the execution of program provisions a whole environment to execute an application. A variation of the same program will provision a different environment to run the same application. In this project the student will explore transformations for infrastructure as code with the intention of creating a moving target at the environment level. We consider using Modus to define the infrastructure.

- [What is Infrastructure as Code (IaC)?](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)
- [Finding focus in the blur of moving-target techniques](https://ieeexplore.ieee.org/document/6673500)
- [https://github.com/modus-continens/modus](https://github.com/modus-continens/modus)

##  Diversifying a package registry


Dependency confusion is a growing threat for software supply chains. This attack consists in uploading malicious packages on public repositories, which will eventually be packaged in applications, through dependency resolution mechanisms. In this work, we will explore the automatic randomization of instructions in private npm registries to mitigate dependency confusion. The student will deploy a local npm registry and a instruction randomization scheme, along with the adaptation of the javascript engine to correctly execute the randomized packages.

- [Dependency Confusion: Another Supply-Chain Vulnerability](https://www.schneier.com/blog/archives/2021/02/dependency-confusion-another-supply-chain-vulnerability.html)
- [Polyscripting to mitigate dependency confusion](https://web.archive.org/web/20220125055207/https://polyverse.com/blog/npm-node-js-code-injection-attack/)
- [Countering code-injection attacks with instruction-set randomization](http://www.sis.pitt.edu/jjoshi/courses/IS2620/Spring09/Kc.pdf)
- [Internal interface diversification with multiple fake interfaces](https://dl.acm.org/doi/abs/10.1145/3136825.3136900)


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

## Bundler diversity for debloating JavaScript

JavaScript is the most used programming language for the development of web applications. Once the web application grows, so does the bundle size, primarily due to all its third-party dependencies. A bundler is a tool that transforms all the JavaScript code and its dependencies into a new output file with everything merged (including other files such as HTML, CSS, and PNG). There are many production-ready JavaScript bundlers (e.g., Webpack, Rollup, Browserify, ESbuild, and Parcel). They can perform optimizations and minifications on the bundle, such as tree shaking, scope hoisting, bundle splitting, and minifying. However, the size reduction achieved by a bundler is limited by its own code minimization technique. The student will perform an experimental study to leverage the diversity of JavaScript bundlers in order to reduce the original code size of applications while keeping the functionality required to pass all test cases in their test suites.

* [Slimming JavaScript Applications: An Approach for Removing Unused Functions From JavaScript libraries](https://www.sciencedirect.com/science/article/pii/S0950584918302210?casa_token=yJJKp5Ezg9cAAAAA:OLCG_6pEJ7Vr-gGfXlFwNH-XSXfshkQxNWTHzsi1iX6HZZa6NFy5o25hmQDg8XXtA0strbwa8g)
* [Evolving JavaScript Code to Reduce Load Time](https://ieeexplore.ieee.org/iel7/32/9512528/08762190.pdf?casa_token=_XMIY-_AEq4AAAAA:JizmVj45cJN9ptyoBRLPyYGX-N-l5k2gerhJ9KTR5cyjdAcTwtxnZe65A56xyToehks7SNk-dSOP)
* [Detecting and removing bloated dependencies in CommonJS packages](https://arxiv.org/pdf/2405.17939)
* [https://webpack.js.org/guides/tree-shaking/](https://webpack.js.org/guides/tree-shaking/)

## Tampering with test results 

The large open source software supply chains of many applications have turned open source repositories into targets of choice for the introduction of malicious code. As mature open source projects use continuous integration, stealthy code tampering should also ensure that the test suite passes. While the modification of the test suite might appear as red flag to the open source community, another solution consists in forging the test results. For example, a change in the continuous integration pipeline can turn some failing test cases into passing ones.
In this work, we investigate different strategies to forge test suite results in order to mask ill-intended changes in the source code.

* [On Omitting Commits and Committing Omissions: Preventing Git Metadata Tampering That (Re)introduces Software Vulnerabilities](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/torres-arias)
* [in-toto: Providing farm-to-table guarantees for bits and bytes](https://www.usenix.org/system/files/sec19-torres-arias.pdf)

## Learning-based software substitutability

Software substitutability is a property which measures how readily a
software component can be replaced by a different but equivalent component.
In software supply chains it is critical for faulty or vulnerable
components to be replaced as quickly as possible. However, software
substitutes might not be immediately available.
Generative AI tools may be used to efficiently produce
software substitutes in diverse programming languages/paradigms.
In this work, we assess the feasibility of using generative AI tools to
enhance substitutablity of components in software supply chains.

- [Better Together? An Evaluation of AI-Supported Code Translation](https://dl.acm.org/doi/pdf/10.1145/3490099.3511157?casa_token=kooTF59aoC4AAAAA:0MjgRH-Rpzd6_ni7ceJt6lf9G5Vgo5KraSvULJPiCvfs6FbTidRGe3PbbX3mAuH1chnXIBj0zmEj)
- [Formalization of Component Substitutability](https://www.sciencedirect.com/science/article/pii/S1571066108003654/pdf?md5=d22148de7199440a6cd845666b696f7b&pid=1-s2.0-S1571066108003654-main.pdf)
- [Galapagos: Automated N-Version Programming with LLMs](https://arxiv.org/pdf/2408.09536)




## Dependencies-targeted test suite augmentation

Software developers dedicate considerable efforts in implementing strong test suites that exercise and verify the behavior of their project. Yet, developer written tests usually perform poorly when considering the coverage of third-party dependencies. This is because the intention of these tests is not to verify the behavior of dependencies. In this work we explore novel test generation techniques that aim at increasing the coverage of a project's software supply chain. This novel tests shall help in enhancing the dynamic transparency of the supply chain and in improving reachability analysis.

* [Automated unit test improvement using large language models at meta](https://web.eecs.umich.edu/~movaghar/Automatic%20Test%20Generation%20Meta%202024.pdf)
* [Production Monitoring to Improve Test Suites](https://arxiv.org/pdf/2012.01198)
* [Taming behavioral backward incompatibilities via cross-project testing and analysis](https://lingming.cs.illinois.edu/publications/icse2020a.pdf)
* [A Snowballing Literature Study on Test Amplification](https://arxiv.org/pdf/1705.10692)



# Software for the arts

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


## Code as cool, shareable medium

Generative artists write code, run code, tweak code in order to generate artworks. Many artists share the artworks on online platforms, such as instagram or bandcamp. Sometimes, artists also share the code. Sharing code can have mutliple meanings: cool medium, transparency, sharing, traceability. In this project, we explore the code that is shared on these platforms as well as the different motivations of artists for sharing code.

* [Bandcamp, SoundCloud, and the Digital Underground: Exploring Curatorial Practice Across Independent Music Platforms](https://spectrum.library.concordia.ca/id/eprint/992759/1/Thow_MA_F2023.pdf)
* [open source software alternatives for art & design](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)
* [live code on insta](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)
* [live coding on bandcamp](https://www.instagram.com/p/DI9QDIaRxUH/?img_index=4&igsh=MTZhdXFxdmNydjlucQ==)

## Automatic documentation of generative artworks

Many algorithmic works rely on third-party libraries (e.g. p5.js), system level interfaces (e.g. GLSL), low-level drivers to connect to diverse hardware devices or online APIs (e.g. translation of geolocation). These rich assemblies of various software packages support setting up interactive, immersive artworks.
Using advanced software observability and runtime monitoring, we investigate how to instrument live artworks and to produce precise digital documentation. This documentation will capture intricate parametric design workflows, hardware interactions, and dynamic environmental responses, ensuring detailed preservation of algorithmic methods—not merely their final outputs.

- [Reading between the lines: Source code documentation as a conservation strategy for software-based art](https://www.tandfonline.com/doi/pdf/10.1179/2047058413Y.0000000115)
- [Production monitoring to improve test suites](https://arxiv.org/pdf/2012.01198)
- [Preservation of software-based art at Tate](https://mediarep.org/bitstream/doc/14111/1/Digital_Art_Looking_Glass_271-287_Preservation_of_Software-based_Art.pdf)
- [Low-level I/O Monitoring for Scientific Workflows](https://arxiv.org/pdf/2408.00411)

## Energy harvesting for portable pen plotter

Pen plotters are programmable machines that can draw and that are currently mostly used by artists who use code as a medium. Plotters are usually used in an artist studio where a computer sends instructions to the machine to draw and where power is readily availabe. For field artists who like to practice and perform in outdoors environment, we wish to build a portable pen plotter. In order to offer the best portability experience, should not need to carry batteries for the plotter or the controller. This is why we also explore energy haresting technology to power the portable pen plotter.

* [Programming Art With Drawing Machines](https://ieeexplore.ieee.org/document/10574501)
* [Energy harvesting systems](https://link.springer.com/content/pdf/10.1007/978-1-4419-7566-9.pdf)
* [Generate Power, Generate Art](https://kth.diva-portal.org/smash/get/diva2:1710475/FULLTEXT01.pdf)
* [Automatic Miniature CNC Plotter Machine](https://ieeexplore.ieee.org/iel8/10624685/10624738/10625005.pdf)
* [Design of an Arduino-Based Pen Plotter System](https://futajeet.ng/manager/papers/paper_18_1721307460.pdf)

## The diversity of live coding practices

Digital art is a kind of performance. As long as software runs art is performed. Yet, generative artists approach this performative medium in different ways. Some artists craft the code in their studio and let the machine perform the artwork in a gallery, in a web browser or on the blockchain. Some other artists perform the act of coding itself. This practice is known as live coding. It can be an individual practice, as well as a group practice, from Seoul to Bogota. The code is written live, projected on screen as an overlay on top of generated images and sound. 
In this project, we study the programming paradigms and abstractions that live coders use, as well as the code sharing and communities that are involved in this artistic practice.

* [Digital art is a kind of performance](https://unframed.lacma.org/2024/11/13/digital-art-kind-performance-qa-casey-reas)
* [Diverse live coding communities](https://blog.toplap.org/nodes/)
* [Diverse live coding libraries](https://github.com/rethread-studio/algorithmic-art-course/issues/9)
* [Live coding in laptop performance](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/08F42B84BBCA427C345030481A3DDA0D/S135577180300030Xa.pdf/div-class-title-live-coding-in-laptop-performance-div.pdf)
* [The real value of NFTs](https://www.rightclicksave.com/article/the-real-value-of-nfts)

## Live pen plotting

The practice of generative art is performative: an artist develops a program, and only when the program executes, i.e., performs, the artwork exists. Consequently, the artwork never exists on a physical memory and one instance can never be seen again. 
In the current practice of penplotting and generative art, it is usually necessary to save the generated image on disk before it is passed to the pen plotter. This storage of the performed artwork is not elegant in the realm of generative art.
In this project, we design and build a system where an image that is performed as part of a generative artwork is streamed live to the plotter, avoiding the generation of the image file and preserving the performing mindset of generative art. 
Eventually, the technology can recreate the [DiceGL](https://www.v3ga.net/dicegl/) setup.

* [Live coding in laptop performance](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/08F42B84BBCA427C345030481A3DDA0D/S135577180300030Xa.pdf/div-class-title-live-coding-in-laptop-performance-div.pdf)
* [Automatic Miniature CNC Plotter Machine](https://ieeexplore.ieee.org/iel8/10624685/10624738/10625005.pdf)
* [Programmable Analogue Drawing Machines, 1952–2023](https://muse.jhu.edu/article/929863)
* [Playing the Print: MIDI-Based Fabrication Interfaces to Explore and Document Material Behavior](https://dl.acm.org/doi/pdf/10.1145/3613905.3650966)

## Keeping it old: backporting updates to legacy artworks

Digital art is made to perform in an environment that evolves: OS patches, drivers for interaction, libraries that evolve or even disappear, etc. It is not always possible to update this environment as some elements such as screen resolution, hardware architecture, I/O might not be compatible with latest versions. In order for the artwork to benefit from the latest software patches, they need to be backported to the legacy project. In this project, we explore backporting practices in the specific context of legacy interactive artworks.

* [Recommending code changes for automatic backporting of Linux device drivers](https://inria.hal.science/hal-01355859/file/icsme_hal.pdf)
* [Transforming C++11 Code to C++03 to Support Legacy Compilation Environments](https://core.ac.uk/download/pdf/84774749.pdf)

## The software supply chain of generative art

Artists use advanced software technology to produce, distribute and generate artworks. Such software technology includes libraries for sound synthesis, visual art, augmented reality, as well as platforms to distribute artworks. In this work, we dive deep in this software ecosystem to draw a systematic landscape of the software supply chain for generative art. Our goal is to reveal the open source software foundations of this artistic practice, credit the key contributors and recognize the specificities of open source communities in the arts.

- [Supercollider](https://supercollider.github.io/)
- [OpenFrameworks](https://openframeworks.cc/)
- [Processing](https://processing.org/)
- [fxhash](https://www.fxhash.xyz/)
- [The Evolution of Project Inter-dependencies in a Software Ecosystem: The Case of Apache](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.715.455&rep=rep1&type=pdf)
- [Myriad People Open Source Software for New Media Arts](https://arxiv.org/pdf/2501.13644)


## Esoteric Programming Languages as artistic medium

An esoteric programming language is a programming language designed to test the boundaries of computer programming language design, as a proof of concept, as software art, as a hacking interface to another language, or as a joke. In this project, we explore the different esoteric languages that have been designed for art or as part of an art installation.

- [Language without code: intentionally unusable, uncomputable, or conceptual programming languages](https://journals.ucp.pt/index.php/jsta/article/download/7297/7297)
- The [Piet](https://esolangs.org/wiki/Piet) language fuels esolang creativity https://github.com/topics/piet
- Light Pattern, programming through photographs http://lightpattern.info/
- The INTERCAL Programming Language Reference Manual (1973) http://mail.3e8.org/pub/intercal.pdf

# Software journeys

## Automatic generation of 1 Million libc

libc is at the core of most software stacks, but it is fragile, prone to critical vulnerabilities [1]. In this work we explore a combination of techniques to generate large amounts of diverse implementations of libc [2]. The student will combine the abundant combinations of flags of C compilers [3], with state of the art code transformation and obfuscation techniques [4] to generate many libs variants.

- [The C standard library](https://en.wikipedia.org/wiki/C_standard_library)
- [Building diverse computer systems](https://forrest.biodesign.asu.edu/data/publications/1997-hotos-diversity.pdf)
- [gcc flags](https://www.spec.org/cpu2017/flags/gcc.html)
- [Tigress](https://tigress.wtf/transformations.html)

##  Superdiversifying SHA256

Software diversity increases the robustness of software systems [1]. Through various transformations and randomization, it is possible to automatically generate variants of a program. These variants should have minimal impact on convenience, usability, and efficiency. Meanwhile, each variant should not be sensible to the same bug or vulnerability.
In this project, we explore the large-scale diversification of SHA256 [2]. This family of hashing functions is essential for cryptography, and hence a critical feature for security. The student will investigate superdiversification [3] and the composition of multiple diversification techniques, in order to synthesize large amounts of variants for an implementation of SHA256.

- [Building diverse computer systems](https://forrest.biodesign.asu.edu/data/publications/1997-hotos-diversity.pdf)
- [On the Secure Hash Algorithm family](https://web.archive.org/web/20160330153520/http://www.staff.science.uu.nl/~werkh108/docs/study/Y5_07_08/infocry/project/Cryp08.pdf)
- [The superdiversifier: - Peephole individualization for software protection](ftp://nozdr.ru/biblio/kolxoz/Cs/CsLn/Advances%20in%20Information%20and%20Computer%20Security,%203%20conf.,%20IWSEC%202008(LNCS5312,%20Springer,%202008)(ISBN%209783540895978)(308s).pdf#page=110)

## Github repositories with literary references

Github repositories are rich sources of code, documentation and discussions. They also contain amazing resources such as images, sound snippets, texts or references. A recent study has analyzed the presence of links to academic papers in Github repositories. This study reveals the critical importance of linking code, data and publications to improve replication in computational science. In this work we wish to explore literary references in Github. For example, references to Bob Dylan cited in C code or novel quotes in comments, ```perl -le’$_=`perldoc -T perlfaq4`,s/^.*N;(.*?)E.*$/$1/s,print’ ```.

The study seeks to unveil the deep connection of Github with culture and society and to analyze the role of literature on software development.

- [GitHub Repositories with Links to Academic Papers: Open Access, Traceability, and Evolution](https://arxiv.org/pdf/2004.00199)
- [This AI researcher is trying to ward off a reproducibility crisis](https://www.nature.com/articles/d41586-019-03895-5)

##  Easter egg VM flag

Easter eggs, sometimes called the final frontier of software development [10]. (Except that of course you can’t have a final frontier, because there’d be nothing for it to be a frontier to, but as frontiers go, it’s pretty penultimate . . .) [269696]. And against the wash of continuous integration a commit hangs, bloated and poetic, one single, cool contribution, gleaming like the madness of gods. Nearly unreal. Reality is not digital, an on-off state, but analog. Easter eggs are for lovers and for the mind. Not enterprise, nor a resurrection, they cherish enchantment and freedom. In the quest for technology and Mastery, you will add an extra mile to the frontier with a new Easter flag for an extraordinary virtual machine [42].

[42] java -XX:+UnlockDiagnosticVMOptions -XX:+PrintFlagsFinal -version
[10] [Curated list of all the easter eggs and hidden jokes in Python](https://github.com/OrkoHunter/python-easter-eggs)
[0] [Long Live Software Easter Eggs!](http://rethread.art/easter-eggs.pdf)
[269696] Moving Pictures. T. Pratchett. 1990, on Monday afternoon, just before tea.

##  Paint Splatters & Perl Programs (remix)

In 2019, Colin Mc Millen and Tim Toady ran an experiment to answer one question: is it possible to smear paint on the wall without creating valid Perl? This is an essential question at the forefront of art / computing frontier.
In this project, we will reproduce Mc Millen’s experiment, starting with the curated dataset provided by the authors. We will then elaborate on the findings with original splatters and an exploration of Perl’s diverse ecosystem. We eventually thoroughly settle the question of whether coffee stains are better Perl programs than paint splatters.

- [93% of Paint Splatters are Valid Perl Programs](https://www.mcmillen.dev/sigbovik/2019.pdf)
- [100 paint splatter images](https://www.mcmillen.dev/sigbovik/splatters.tar.gz)
- [the Perl ecosystem](https://www.activestate.com/blog/introduction-to-perl-ecosystem/)
- [coffestains](https://ctan.org/pkg/coffeestains)
