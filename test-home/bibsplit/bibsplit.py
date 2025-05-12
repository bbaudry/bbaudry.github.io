import bibtexparser


articles = bibtexparser.Library()
library=bibtexparser.parse_file("publis.bib")
print(f"Parsed {len(library.blocks)} blocks, including:"
  f"\n\t{len(library.entries)} entries"
    f"\n\t{len(library.comments)} comments"
    f"\n\t{len(library.strings)} strings and"
    f"\n\t{len(library.preambles)} preambles")
for entry in library.entries:
    if(entry.entry_type == "article"):
            articles.set_field(entry)
print(len(articles))
new_bibtex_str = bibtexparser.write_string(entry) # or bibtexparser.write_file("my_new_file.bib", library)
#print(new_bibtex_str)
#    print(entry["author"])
#    if ('keywords' in entry.fields_dict.keys()):
#        print(entry["keywords"])
    #for j in i.fields:
     #   print(j['title'].value)
        #if (j.key=="Author"):
            #print(j.value)
        #if (j.key=="keywords"):
        #    print(j.value)
        #    for keyword in j.value:
        #        if (keyword=="selected"):
        #            j["title"].value