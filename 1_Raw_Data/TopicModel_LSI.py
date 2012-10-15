import re
import urllib2
import string
from bs4 import BeautifulSoup
import csv
import fileinput
from gensim import corpora, models, similarities

publicservice = []
spotnewsreporting = []
beatreporting = []
breakingnewsreporting = []
investigativereporting = []
explanatoryreporting = []
localreporting = []
nationalreporting = []
featurewriting = []
commentary = []
criticism = []
editorialwriting = []

corpus = corpora.MmCorpus('corpus.mm')
#print list(corpus)
tfidf = models.TfidfModel(corpus)
lsi = models.LsiModel(corpus)

num = 0
corpus_tfidf = tfidf[corpus]
for doc in corpus_tfidf:
	num = num + 1
	if num%12 == 1:
		publicservice.append(doc)
		w = csv.writer(open("resultlist/publicserviceTFIDF.csv", "wb"))
		w.writerows(publicservice)
	if num%12 == 2:
		spotnewsreporting.append(doc)
		w = csv.writer(open("resultlist/spotnewsreportingTFIDF.csv", "wb"))
		w.writerows(spotnewsreporting)
	if num%12 == 3:
		beatreporting.append(doc)
		w = csv.writer(open("resultlist/beatreportingTFIDF.csv", "wb"))
		w.writerows(beatreporting)
	if num%12 == 4:
		breakingnewsreporting.append(doc)
		w = csv.writer(open("resultlist/breakingnewsreportingTFIDF.csv", "wb"))
		w.writerows(breakingnewsreporting)
	if num%12 == 5:
		investigativereporting.append(doc)
		w = csv.writer(open("resultlist/investigativereportingTFIDF.csv", "wb"))
		w.writerows(investigativereporting)
	if num%12 == 6:
		explanatoryreporting.append(doc)
		w = csv.writer(open("resultlist/explanatoryreportingTFIDF.csv", "wb"))
		w.writerows(explanatoryreporting)
	if num%12 == 7:
		localreporting.append(doc)
		w = csv.writer(open("resultlist/localreportingTFIDF.csv", "wb"))
		w.writerows(localreporting)
	if num%12 == 8:
		nationalreporting.append(doc)
		w = csv.writer(open("resultlist/nationalreportingTFIDF.csv", "wb"))
		w.writerows(nationalreporting)
	if num%12 == 9:
		featurewriting.append(doc)
		w = csv.writer(open("resultlist/featurewritingTFIDF.csv", "wb"))
		w.writerows(featurewriting)
	if num%12 == 10:
		commentary.append(doc)
		w = csv.writer(open("resultlist/commentaryTFIDF.csv", "wb"))
		w.writerows(commentary)
	if num%12 == 11:
		criticism.append(doc)
		w = csv.writer(open("resultlist/criticismTFIDF.csv", "wb"))
		w.writerows(criticism)
	if num%12 == 0:
		editorialwriting.append(doc)
		w = csv.writer(open("resultlist/editorialwritingTFIDF.csv", "wb"))
		w.writerows(editorialwriting)
print "TFIDF Complete"
num = 0
corpus_lsi = lsi[corpus]
for doc in corpus_lsi:
	num = num + 1
	if num%12 == 1:
		publicservice.append(doc)
		w = csv.writer(open("resultlist/publicserviceLSI.csv", "wb"))
		w.writerows(publicservice)
	if num%12 == 2:
		spotnewsreporting.append(doc)
		w = csv.writer(open("resultlist/spotnewsreportingLSI.csv", "wb"))
		w.writerows(spotnewsreporting)
	if num%12 == 3:
		beatreporting.append(doc)
		w = csv.writer(open("resultlist/beatreportingLSI.csv", "wb"))
		w.writerows(beatreporting)
	if num%12 == 4:
		breakingnewsreporting.append(doc)
		w = csv.writer(open("resultlist/breakingnewsreportingLSI.csv", "wb"))
		w.writerows(breakingnewsreporting)
	if num%12 == 5:
		investigativereporting.append(doc)
		w = csv.writer(open("resultlist/investigativereportingLSI.csv", "wb"))
		w.writerows(investigativereporting)
	if num%12 == 6:
		explanatoryreporting.append(doc)
		w = csv.writer(open("resultlist/explanatoryreportingLSI.csv", "wb"))
		w.writerows(explanatoryreporting)
	if num%12 == 7:
		localreporting.append(doc)
		w = csv.writer(open("resultlist/localreportingLSI.csv", "wb"))
		w.writerows(localreporting)
	if num%12 == 8:
		nationalreporting.append(doc)
		w = csv.writer(open("resultlist/nationalreportingLSI.csv", "wb"))
		w.writerows(nationalreporting)
	if num%12 == 9:
		featurewriting.append(doc)
		w = csv.writer(open("resultlist/featurewritingLSI.csv", "wb"))
		w.writerows(featurewriting)
	if num%12 == 10:
		commentary.append(doc)
		w = csv.writer(open("resultlist/commentaryLSI.csv", "wb"))
		w.writerows(commentary)
	if num%12 == 11:
		criticism.append(doc)
		w = csv.writer(open("resultlist/criticismLSI.csv", "wb"))
		w.writerows(criticism)
	if num%12 == 0:
		editorialwriting.append(doc)
		w = csv.writer(open("resultlist/editorialwritingLSI.csv", "wb"))
		w.writerows(editorialwriting)
print "LSI Completed"
	#print "############ NUM: " + str(num) + "##############"
	#print "############ REM: " + str(num%13) + "##############"
#print len(corpus_tfidf)