import re
import urllib2
import string
from bs4 import BeautifulSoup
import csv
 
#Code borrowed from http://openbookproject.net/thinkcs/python/english3e/strings.html
#This function is able to remove all punctuation 
def remove_punctuation(s):
    s_without_punct = ""
    for letter in s:
        if letter not in string.punctuation:
            s_without_punct += letter
    return s_without_punct

def main():
	pulitzerurl = 'http://www.pulitzer.org'
	urlportion1 = 'http://www.pulitzer.org/works/'
	years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011]
	categories = ['-Public-Service', '-Spot-News-Reporting', '-Beat-Reporting', '-Breaking-News-Reporting', '-Investigative-Reporting', '-Explanatory-Reporting', '-Local-Reporting', '-National-Reporting', '-Feature-Writing', '-Commentary', '-Criticism', '-Editorial-Writing']
	# remove common words and tokenize
	stoplist = set("a b c d e f g h i j k l m n o p q r s t u v w x y z cali twa 800 pre737 world day previous index next 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 january feburary march april may june july august september october november december a about above after again against all am an and any are aren't as at be because been before being below between both but by can't cannot could couldn't did didn't do does doesn't doing don't down during each few for from further had hadn't has hasn't have haven't having he he'd he'll he's her here here's hers herself him himself his how how's i i'd i'll i'm i've if in into is isn't it it's its itself let's me more most mustn't my myself no nor not of off on once only or other ought our ours  ourselves out over own same shan't she she'd she'll she's should shouldn't so some such than that that's the their theirs them themselves then there there's these they they'd they'll they're they've this those through to too under until up very was wasn't we we'd we'll we're we've were weren't what what's when when's where where's which while who who's whom why why's with won't would wouldn't you you'd you'll you're you've your yours yourself yourselves".split())
	text = []
	texts = []
	texttitle = []
	
	for year in years:
		for category in categories:
			text.append(str(year) + category)
			try:
				original = urllib2.urlopen(urlportion1 + str(year) + category)
				pagesoup = BeautifulSoup(original)
				if 'Page Not Found' not in str(pagesoup):
					for link in pagesoup.findAll('span', {"class":re.compile("works_links_link_internal")}):
						for hreflink in link.findAll('a'):
							archive = urllib2.urlopen(pulitzerurl + hreflink.get("href"))
							archivecontent = BeautifulSoup(archive)
							for result in archivecontent.findAll('div', {"class":re.compile("archive-body")}):
								text.extend([word for word in remove_punctuation(re.sub('<[^>]*>', '', str(result))).lower().split() if word not in stoplist])
								print str(year) + category + hreflink.get("href")
			except:
				pass
			texts.append(text)
			text = []
	w = csv.writer(open("pulitzer-category.csv", "wb"))
	w.writerows(texts)
	print "DONE"
if __name__ == "__main__":
    main()