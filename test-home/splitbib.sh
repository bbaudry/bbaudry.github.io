#! /usr/bin/bash

bibtool -- 'select{@article}' publis.bib -o journalpublications.bib
pandoc journalpublications.bib -s --citeproc -o journalpublications.html

bibtool -- 'select{keywords "selected"}' publis.bib -o selectedpublications.bib
pandoc selectedpublications.bib -s --citeproc -o selectedpublications.html

bibtool -- 'select{keywords "test"}' publis.bib -o testpublications.bib
pandoc selectedpublications.bib -s --citeproc -o selectedpublications.html
