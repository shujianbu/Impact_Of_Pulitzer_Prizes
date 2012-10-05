import string
import csv
import fileinput
import array
import numpy
from operator import itemgetter

KeyWords = []
Number_Of_Words = []
Value_Of_Words = []
Length_Of_Year = []
ResultList = []
ResultListArray = []
csv.field_size_limit(10000000000)
with open('heatmap/spotnewsreporting.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		KeyWords.append(int(row[0]))
		#print row[0]
KeyWords = sorted(KeyWords) 
#print KeyWords, len(KeyWords)
# KeyWords - [304, 381, 910, 1684, 1822, 2577, 2630, 3361, 4427, 5089, 5807, 8134, 8475, 10042, 10707, 11385, 13033, 13494, 13679, 13784, 14292, 14536, 16209, 16613, 17108, 18315, 18462, 18694, 19352, 19866, 19923, 20015, 20354, 20587, 21318, 22486, 22499, 22831, 24482, 24936, 25721, 27609, 27806, 29142, 31881, 32059, 32291, 33132, 33468] 

count = 0
csv.field_size_limit(10000000000)
with open('spotnewsreporting.csv', 'rU') as f:
	reader = csv.reader(f)
	for row in reader:
		for word in row:
			#print word #(8, 0.013380736127218622) all characters
			Number_Of_Words.append(int(word[word.find("(")+1:word.find(",")]))
			Value_Of_Words.append(float(word[word.find(",")+1:word.find(")")]))
			count = count +1
		Length_Of_Year.append(count)
		count = 0
#print Number_Of_Words - First order
#print Value_Of_Words - Second value
#print Length_Of_Year - Every Line, total 18
#print Length_Of_Year # [3211, 3898, 3466, 3154, 2687, 2452, 2585, 2914, 2790, 3123, 3209, 2625, 0, 0, 0, 0, 0, 0] - 36114


for item in KeyWords:
	length = 0
	for le in range(0, len(Length_Of_Year)):
		flag = 0
		for temp in range(length, length + Length_Of_Year[le] - 1): # every line 0-3210, 3211 - , 
			if item == Number_Of_Words[temp] and flag == 0:				 
				ResultList.append(Value_Of_Words[temp])
				flag = 1
		if flag == 0:
			ResultList.append(0)
		length = length + Length_Of_Year[le]
	ResultListArray.append(item)
	ResultListArray.append(ResultList)
	ResultList = []	
print ResultListArray
print '\n'
print '\n'

finalList = []
for kt in ResultListArray: 
	csv.field_size_limit(10000000000)
	with open('pulitzer-dic.csv', 'rU') as f:
		reader = csv.reader(f)
		for row in reader:
			if isinstance( kt, int ) == True:
				if str(kt) == row[0]:
					finalList.append([row[1]])
		if isinstance( kt, int ) == False:
			finalList.append(kt)
			
print finalList
w = csv.writer(open("heapmapresult/spotnewsreporting.csv", "wb"))
w.writerows(finalList)


	
	
	
	
	
	
	