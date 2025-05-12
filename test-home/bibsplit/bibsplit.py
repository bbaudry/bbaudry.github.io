import bibtexparser


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
print("hi")
bibtexparser.parse_file("publis.bib")
