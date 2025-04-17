
it seems that we can use nocite with pandoc and citeproc: https://tex.stackexchange.com/questions/171793/bibtex-to-html-markdown-etc-using-pandoc. Unfortunately, the example showed here does not work

the following command works well, but requires to cite the reference. Hence, not possible to have only the list of references
```
pandoc -s --metadata title="publications" --bibliography test.bib --citeproc test.md -o test.html
```