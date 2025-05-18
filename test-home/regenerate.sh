#! /usr/bin/bash

bibtool -- 'select{@article}' publis.bib -o journalpublications.bib
pandoc journalpublications.bib -s --template=journalpublications-template.html --metadata link-bibliography --csl ieee.csl --citeproc -o journalpublications.html

bibtool -- 'select{@inproceedings}' publis.bib -o conferencepublications.bib
pandoc conferencepublications.bib -s --template=conferencepublications-template.html --metadata link-bibliography --csl ieee.csl --citeproc -o conferencepublications.html

bibtool -- 'select{keywords "selected"}' publis.bib -o selectedpublications.bib
pandoc selectedpublications.bib -s --template=selectedpublications-template.html --metadata link-bibliography --csl ieee.csl --citeproc -o selectedpublications.html

bibtool -- 'select{keywords "test"}' publis.bib -o testpublications.bib
pandoc selectedpublications.bib -s --template=testpublications-template.html --metadata link-bibliography --csl ieee.csl --citeproc -o testpublications.html

pandoc -s --toc=true  --template=topics-template.html  topics.md -o topics.html