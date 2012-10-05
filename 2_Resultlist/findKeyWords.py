import string
import csv
import fileinput
import array
import numpy
from operator import itemgetter

NUM = 50
#texts = []
csv.field_size_limit(10000000000)
sumlist = numpy.zeros(38390)
lists = []
resultlist = []
with open('spotnewsreporting.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		for word in row:
			#print word
			sumlist[int(word[word.find("(")+1:word.find(",")])] = sumlist[int(word[word.find("(")+1:word.find(",")])] + float(word[word.find(",")+1:word.find(")")])

count = 0
for item in sumlist:
	lists.append([count, item])
	count += 1
sortedlist = sorted(lists, key=itemgetter(1), reverse=True)

for i in range(0,NUM-1):
	resultlist.append(sortedlist[i])
	
csv.field_size_limit(10000000000)
with open('pulitzer-dic.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		#print row[0]
		#print row[1]
		for item in resultlist:
			if str(item[0]) == str(row[0]):
				item[0] = str(row[1])
print resultlist
w = csv.writer(open("keywords/spotnewsreporting-words.csv", "wb"))
w.writerows(resultlist)
		
