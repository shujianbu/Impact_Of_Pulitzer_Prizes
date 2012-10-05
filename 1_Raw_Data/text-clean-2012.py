import re
#import urllib2
import string
#from bs4 import BeautifulSoup
import csv
import glob
import os
import fileinput
 
#Code borrowed from http://openbookproject.net/thinkcs/python/english3e/strings.html
#This function is able to remove all punctuation
def remove_punctuation(s):
    s_without_punct = ""
    for letter in s:
        if letter not in string.punctuation:
            s_without_punct += letter
    return s_without_punct

def main():
	text = []
	texts = []
	# remove common words and tokenize
	stoplist = set("Nxxx20111230B006BsBWE1 a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z world day previous index next 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 january feburary march april may june july august september october november december a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's me more most mustn't my myself no nor not of off on once only or other ought our ours  ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves".split())
	os.chdir("/Users/puconghan/Desktop/textclean/txt")
	for files in glob.glob("*.txt"):
		filename = files
		text.append(filename.strip('.txt'))
		for line in fileinput.input(files):
			text.extend([word for word in remove_punctuation(line).lower().split() if word not in stoplist])
			print line
		texts.append(text)
		text = []
	print texts
	w = csv.writer(open("2012-pulitzer-category.csv", "wb"))
	w.writerows(texts)
	print "DONE"
if __name__ == "__main__":
    main()