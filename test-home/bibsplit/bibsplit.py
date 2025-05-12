import bibtexparser

bibkeys = []

bibtex_str = """
@comment{
    This is my example comment.
}

@ARTICLE{Cesar2013,
  author = {Jean César},
  title = {An amazing title},
  year = {2013},
  volume = {12},
  pages = {12--23},
  journal = {Nice Journal}
}
"""
print(dir(bibtexparser))
library=bibtexparser.parse_file("publis.bib")
for b in library.blocks:
    b.ignore_error_block()
print(f"Parsed {len(library.blocks)} blocks, including:"
  f"\n\t{len(library.entries)} entries"
    f"\n\t{len(library.comments)} comments"
    f"\n\t{len(library.strings)} strings and"
    f"\n\t{len(library.preambles)} preambles")
for entry in library.entries:
    if (entry.key in bibkeys):
        print(entry.key)
    else:
        bibkeys.append(entry.key)
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