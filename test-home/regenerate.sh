#! /usr/bin/bash

filename="journalpublications"
filebib=$filename".bib"
filehtm=$filename".html"
bibtool -- 'select{@article}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Journal publications" --csl ieee.csl --citeproc -o $filehtm

filename="conferencepublications"
filebib=$filename".bib"
filehtm=$filename".html"
bibtool -- 'select{@inproceedings}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Conference publications" --csl ieee.csl --citeproc -o $filehtm

filename="selectedpublications"
filebib=$filename".bib"
filehtm=$filename".html"
bibtool -- 'select{keywords "selected"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Selected publications" --csl ieee.csl --citeproc -o $filehtm

filename="testpublications"
filebib=$filename".bib"
filehtm=$filename".html"
bibtool -- 'select{keywords "test"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Testing publications" --csl ieee.csl --citeproc -o $filehtm

filename="diversitypublications"
filebib=$filename".bib"
filehtm=$filename".html"
bibtool -- 'select{keywords "diversity"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Diversity publications" --csl ieee.csl --citeproc -o $filehtm

pandoc -s --toc=true  --template=topics-template.html  topics.md -o topics.html