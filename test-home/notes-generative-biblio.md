
## publications
it seems that we can use nocite with pandoc and citeproc. Unfortunately, I did not manage to make the [example showed here](https://tex.stackexchange.com/questions/171793/bibtex-to-html-markdown-etc-using-pandoc) work

the following command works well, but requires to cite the reference. Hence, not possible to have only the list of references
```
pandoc -s --metadata title="publications" --bibliography test.bib --citeproc test.md -o test-biblio.html
```

pandoc doc for citations: https://pandoc.org/MANUAL.html#citations
this command works well to generate a complete list: pandoc publis.bib -s --citeproc -o chem.html
next step: find a way to generate different lists per type (journal, conf, etc.) and order by year instead of alphabetical

tried https://unpkg.com/bibtex-js-parser/umd/bibtex-js-parser.js, but it fails when using escaping (e.g. '\&') in the bibtex file...

spent quite some time with the Python lib [bibtexparser](https://bibtexparser.readthedocs.io/en/main/index.html), managed to load a bibtex file, but did not manage to regenerate a new one with a subset of references

Eventually going with [bibtool](https://www.gerd-neugebauer.de/software/TeX/BibTool/en/).

On 2025.05.18, I have the following working process
- start from publis.bib
- extract subparts (by type, by topic, etc.) with bibtool, and produce as many bibtex files
- for each bibtex file, produce a html page with pandoc
One thing is missing: order the references by year


## update topics
pandoc -s --toc=true  --template=topics-template.html  topics.md -o topics.html
