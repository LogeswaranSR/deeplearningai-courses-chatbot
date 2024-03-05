import requests
from bs4 import BeautifulSoup
import csv

webpage = "https://www.deeplearning.ai"
response = requests.get("https://www.deeplearning.ai/courses/")

soup = BeautifulSoup(response.content, "lxml")
replacer = [('\u0141','L')]
res = soup.find_all("article")
course_data = [['Name','No. of Courses','Difficulty','Authors','In collaboration with','Link']]

for each in res:
    row = []
    ele = each.find_all("div", class_="flex flex-col justify-between")
    if ele:
        row.append(ele[0].h3.text)
    ele = each.find_all("div", class_="p-5 rounded-lg bg-[hsla(0,0%,100%,.2)] lg:h-full")
    if ele:
        dets = ele[0].find_all("div", class_="grid grid-cols-[28px_auto] gap-3 text-white mt-4 first:mt-0")
        for d in dets:
            data = d.find('div', class_="font-body text-base opacity-95")
            data = data.text
            for old, new in replacer:
                data = data.replace(old, new)
            row.append(data)
    if len(row)!=5:
        row.append('')
    row.append(webpage+each.a['href'])
    course_data.append(row)
    print("Added Course to the list!!")
with open("C:/Users/Loges/Desktop/sample.csv","w", encoding='ANSI') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(course_data)
print(course_data)
