#! /usr/bin/bash

bibtool -- 'select{@article}' publis.bib -o journalpublications.bib
pandoc journalpublications.bib -s --metadata link-bibliography --csl ieee.csl --metadata title="Journal Publications" --citeproc -o journalpublications.html

bibtool -- 'select{keywords "selected"}' publis.bib -o selectedpublications.bib
pandoc selectedpublications.bib -s --metadata link-bibliography --csl ieee.csl --metadata title="Selected Publications" --citeproc -o selectedpublications.html

bibtool -- 'select{keywords "test"}' publis.bib -o testpublications.bib
pandoc selectedpublications.bib -s --template=testpublications-template.html --metadata link-bibliography --csl ieee.csl --metadata title="Testing Publications" --citeproc -o testpublications.html
