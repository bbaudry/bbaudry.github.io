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
In this work we investigate the feasbility of introducing diversity in builds for Java project. We study the automatic migration of Maven builds into Gradle builds and then compare the diversity it provides at each build step and what impact this has on the output artifact.

* [AROMA: Automatic Reproduction of Maven Artifacts](https://dl.acm.org/doi/abs/10.1145/3643764)
* [Reproducible Builds and Insights from an Independent Verifier for Arch Linux](https://dl.gi.de/bitstreams/f8685808-2e51-4a53-acc0-2b45fa240e3b/download)
* [Automatic building of java projects in software repositories: A study on feasibility and challenges](https://ieeexplore.ieee.org/iel7/8169617/8169971/08170083.pdf)

## Airgapped builds

## Verifiable Maven builds with IPFS

A key challenge for a robust software supply chain is to ensure the integrity of third-party dependencies.
One solution to address this challenge consists in refering to dependencies with content-addressable, immutable URLs instead of mutable URLs as is the case today.
We will investigate the Interplanetary File System (IPFS) to store Maven packages and improve the reproducibility and integrity of Maven builds.

* [Reproducible builds: Increasing the integrity of software supply chains](https://ieeexplore.ieee.org/iel7/52/9713899/09403390.pdf)
* [Ipfs-content addressed, versioned, p2p file system](https://arxiv.org/pdf/1407.3561)
* [Towards build verifiability for java-based systems](https://scholar.google.com/scholar?output=instlink&q=info:kmZWQCZhzlkJ:scholar.google.com/&hl=en&as_sdt=0,5&scillfp=5978299261416155234&oi=lle)
* [Reproducible builds with Maven](https://maven.apache.org/guides/mini/guide-reproducible-builds.html)
* [An Experience Report on Producing Verifiable Builds for Large-Scale Commercial Systems](https://ieeexplore.ieee.org/iel7/32/4359463/09465650.pdf)

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

Many generative artists distribute their work online, as NFTs. [fx(hash)](https://www.fxhash.xyz) is a large platform where artists can publish their NFTs, either on Tezos or Ethereum. To do so, they publish the source code as well as various metadata for their artwork. The source code is stored on IPFS and is executed each time someone wants to view the piece. When a buyer acquires one specific instance of the pieces all the parameters to rerun this exact instance are stored on chain. This software architecture is prone to different risks: the link between onchain data and IPFS can be lost, the javascript enviroment of the buyer can evolve. In this project, we investigate different techniques to mitigate these risks and improve the reproducibility and preservation of artworks.

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
* [Programmable Analogue Drawing Machines, 1952–2023](https://muse.jhu.edu/article/929863)

## Live pen plotting

## Keeping it old: backporting updates to legacy artworks

Digital art is made to perform in an environment that evolves: OS patches, drivers for interaction, libraries that evolve or even disappear, etc. It is not always possible to update this environment as some elements such as screen resolution, hardware architecture, I/O might not be compatible with latest versions. In order for the artwork to benefit from the latest software patches, they need to be backported to the legacy project. In this project, we explore backporting practices in the specific context of legacy interactive artworks.

* [Recommending code changes for automatic backporting of Linux device drivers](https://inria.hal.science/hal-01355859/file/icsme_hal.pdf)
* [Transforming C++11 Code to C++03 to Support Legacy Compilation Environments](https://core.ac.uk/download/pdf/84774749.pdf)

## Reproducible generative artworks
