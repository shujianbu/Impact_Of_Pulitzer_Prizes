import string
import csv
import fileinput
import array
import numpy
from operator import itemgetter

KeyWords = []
lineitem = []
wordlist = []
lineResultList = []
ResultList = []
csv.field_size_limit(10000000000)
with open('heatmap/spotnewsreporting.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		KeyWords.append(int(row[0]))
		#print row[0]
KeyWords = sorted(KeyWords) 
#print KeyWords
# KeyWords - [304, 381, 910, 1684, 1822, 2577, 2630, 3361, 4427, 5089, 5807, 8134, 8475, 10042, 10707, 11385, 13033, 13494, 13679, 13784, 14292, 14536, 16209, 16613, 17108, 18315, 18462, 18694, 19352, 19866, 19923, 20015, 20354, 20587, 21318, 22486, 22499, 22831, 24482, 24936, 25721, 27609, 27806, 29142, 31881, 32059, 32291, 33132, 33468] 

count = 0
with open('spotnewsreporting.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		for word in row:
			lineitem.append([int(word[word.find("(")+1:word.find(",")]), float(word[word.find(",")+1:word.find(")")])])
		wordlist.append(lineitem)
		lineitem = []
print wordlist

for word in KeyWords:
	ResultList.append(word)
	for line in wordlist:
		if line != []:
			for item in line:
				if word == item[0]:
					lineResultList.append(item[1])
		else:
			lineResultList.append(0)
	ResultList.append(lineResultList)

#print len(ResultList)
finalList = []
for item in ResultList:
	csv.field_size_limit(10000000000)
	with open('pulitzer-dic.csv', 'rU') as f:
		reader = csv.reader(f)
		for row in reader:
			if isinstance( item, int ) == True:
				if str(item) == row[0]:
					finalList.append([row[1]])
	if isinstance( item, int ) == False:
		finalList.append(item)

print finalList
w = csv.writer(open("heapmapresult/spotnewsreporting.csv", "wb"))
w.writerows(finalList)

				
				

			

	
	
	
	