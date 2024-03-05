import requests
from bs4 import BeautifulSoup
import csv

webpage = "https://www.deeplearning.ai"
response = requests.get("https://www.deeplearning.ai/short-courses/")

soup = BeautifulSoup(response.content, "lxml")
replacer = [('\u0141','L')]
res = soup.find_all("article")
course_data = [['Name','Difficulty','Authors','Time','Status','In collaboration with','Link']]

for each in res:
    row = []
    ele = each.find_all("div", class_="flex flex-col p-7 md:col-span-2")
    ele_link='None'
    if ele:
        row.append(ele[0].h2.text)
        ele_link = ele[0].find('a')['href']
        dets = ele[0].find_all("div", class_="grid justify-between grid-cols-1 mt-2 lg:grid-cols-2")
        for c in dets:
            d = c.find_all('div', class_="flex gap-3 mt-4")
            for d in c:
                data = d.find('div', class_="text-[#64748B] opacity-95")
                data = data.text
                for old, new in replacer:
                    data = data.replace(old, new)
                row.append(data)
    while len(row)<6:
        row.append('')
    row.append(ele_link)
    course_data.append(row)
    print("Added Course to the list!!")
with open("C:/Users/Loges/Desktop/short_courses.csv","w", encoding='ANSI') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(course_data)
print(course_data)
