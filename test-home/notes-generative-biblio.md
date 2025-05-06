
## publications
it seems that we can use nocite with pandoc and citeproc. Unfortunately, I did not manage to make the [example showed here](https://tex.stackexchange.com/questions/171793/bibtex-to-html-markdown-etc-using-pandoc) work

the following command works well, but requires to cite the reference. Hence, not possible to have only the list of references
```
pandoc -s --metadata title="publications" --bibliography test.bib --citeproc test.md -o test-biblio.html
```

pandoc doc for citations: https://pandoc.org/MANUAL.html#citations
this command works well to generate a complete list: pandoc publis.bib -s --citeproc -o chem.html
next step: find a way to generate different lists per type (journal, conf, etc.) and order by year instead of alphabetical

## update topics
pandoc -s --toc=true  --template=topics-template.html  topics.md -o topics.html
