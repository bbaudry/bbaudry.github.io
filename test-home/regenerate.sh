#! /usr/bin/bash

filename="journalpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate journal publications list"
bibtool -- 'select{@article}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Journal publications" --csl ieee.csl --citeproc -o $filehtm

filename="conferencepublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate conference publications list"
bibtool -- 'select{@inproceedings}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Conference publications" --csl ieee.csl --citeproc -o $filehtm

filename="selectedpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate selected publications list"
bibtool -- 'select{keywords "selected"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Selected publications" --csl ieee.csl --citeproc -o $filehtm

filename="testpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate journal publications list"
bibtool -- 'select{keywords "test"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Testing publications" --csl ieee.csl --citeproc -o $filehtm

filename="diversitypublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate diversity publications list"
bibtool -- 'select{keywords "diversity"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Diversity publications" --csl ieee.csl --citeproc -o $filehtm

filename="supplychainpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate supply chain publications list"
bibtool -- 'select{keywords "supplychain"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Supply chain publications" --csl ieee.csl --citeproc -o $filehtm

filename="awardpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate awarded publications list"
bibtool -- 'select{keywords "award"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Awarded publications" --csl ieee.csl --citeproc -o $filehtm

filename="outreachpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate outreaching publications list"
bibtool -- 'select{keywords "outreach"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Outreaching publications" --csl ieee.csl --citeproc -o $filehtm

filename="artpublications"
filebib=$filename".bib"
filehtm=$filename".html"
echo "Generate art publications list"
bibtool -- 'select{keywords "art"}' publis.bib -o $filebib
pandoc $filebib -s --template=publications-template.html --metadata link-bibliography --metadata title="Art publications" --csl ieee.csl --citeproc -o $filehtm

echo "Generate list of topics"
pandoc -s --toc=true  --template=topics-template.html  topics.md -o topics.html