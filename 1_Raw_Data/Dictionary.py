import re
import urllib2
import string
from bs4 import BeautifulSoup
import csv
import fileinput
from gensim import corpora, models, similarities

diclist = []
texts = []
csv.field_size_limit(10000000000)
with open('pulitzer-category.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		for word in row:
			texts.append(word)
dictionary = corpora.Dictionary(line.lower().split() for line in texts)
once_ids = [tokenid for tokenid, docfreq in dictionary.dfs.iteritems() if docfreq == 1]
dictionary.filter_tokens(once_ids)
dictionary.compactify()
#print dictionary
valuelist = dictionary.token2id.values()
keylist = dictionary.token2id.keys()
#print len(dictionary)

for item in range(0, len(dictionary)):
	diclist.append([valuelist[item], keylist[item]])
print diclist
w = csv.writer(open("pulitzer-dic.csv", "wb"))
w.writerows(diclist)
	
	

corpus9512 = []
csv.field_size_limit(10000000000)
with open('pulitzer-category.csv','rU') as ff:
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


