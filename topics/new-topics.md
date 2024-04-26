# One-shot  runners for continuous integration

Continuous integration consists in setting up a specific environment to build and test an application. For example, Github actions will spawn a container to run the continuous integration. Github has recently introduced just-in-time runners to mitigate software supply chain attacks on CI [1].

In this work, we explore the combination of automatic software diversity [2] and just-in-time runners, to build one-shot unique versions of runners for CI. We will first look at the opportunity of reusing the natural diversity of containers [3], then we will investigate transformations to automatically increase the diversity of runners. The student will explore both github actions and Nix [4] for automatic build.

* [Using just-in-time runners](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-just-in-time-runners)
* [Building diverse computer systems](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=2f53c44ba52ebd8c3083a485a48b72c8fdc8e79d)
* [Too many images on DockerHub! How different are images for the same system?](https://link.springer.com/content/pdf/10.1007/s10664-020-09873-0.pdf)
* [Nix: A Safe and Policy-Free System for Software Deployment](https://www.usenix.org/event/lisa04/tech/full_papers/dolstra/dolstra_html/)

# Verifiable Maven builds with IPFS

A key challenge for a robust software supply chain is to ensure the integrity of third-party dependencies.
One solution to address this challenge consists in refering to dependencies with content-addressable, immutable URLs instead of mutable URLs as is the case today.
We will investigate the Interplanetary File System (IPFS) to store Maven packages and improve the reproducibility and integrity of Maven builds.
* [Reproducible builds: Increasing the integrity of software supply chains](https://ieeexplore.ieee.org/iel7/52/9713899/09403390.pdf)
* [Ipfs-content addressed, versioned, p2p file system](https://arxiv.org/pdf/1407.3561)
* [Towards build verifiability for java-based systems](https://scholar.google.com/scholar?output=instlink&q=info:kmZWQCZhzlkJ:scholar.google.com/&hl=en&as_sdt=0,5&scillfp=5978299261416155234&oi=lle)
* [Reproducible builds with Maven](https://maven.apache.org/guides/mini/guide-reproducible-builds.html)
* [An Experience Report on Producing Verifiable Builds for Large-Scale Commercial Systems](https://ieeexplore.ieee.org/iel7/32/4359463/09465650.pdf)
