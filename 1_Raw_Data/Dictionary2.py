import re
import urllib2
import string
from bs4 import BeautifulSoup
import csv
import fileinput
from gensim import corpora, models, similarities

texts = []
csv.field_size_limit(10000000000)
with open('pulitzer-category-9512.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		for word in row:
			texts.append(word)
dictionary = corpora.Dictionary(line.lower().split() for line in texts)
once_ids = [tokenid for tokenid, docfreq in dictionary.dfs.iteritems() if docfreq == 1]
dictionary.filter_tokens(once_ids)
dictionary.compactify()
print dictionary
print dictionary.token2id
print len(dictionary)

corpus9512 = []
csv.field_size_limit(10000000000)
with open('pulitzer-category-9512.csv','rU') as ff:
	reader2 = csv.reader(ff)
	for row2 in reader2:
		for word2 in row2:
			corpus9512.append(word2)
class MyCorpus(object):
	def __iter__(self):
		for line in corpus9512:
			yield dictionary.doc2bow(line.lower().split())

corpus_memory_friendly = MyCorpus()
print corpus_memory_friendly
#for vector in corpus_memory_friendly:
	#print vector, len(vector)
	
corpora.MmCorpus.serialize('corpus.mm', corpus_memory_friendly)

#corpus = corpora.MmCorpus('corpus.mm')
#print list(corpus)


