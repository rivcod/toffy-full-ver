### Tfgame 크롤링

import requests
import urllib.request
import lxml.html
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import sqlite3
import django
import os
import sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from tfgame.models import Tfgame
from datetime import datetime
import json
import re
driver = webdriver.Chrome('/Toffyy/backend/chromedriver.exe')
outpath = "/Toffyy/frontend/src/images/"

if not os.path.isdir(outpath):
    os.makedirs(outpath)

def main():
    driver.get('https://fnd.io/#/kr/charts/iphone/top-paid/games')
    driver.implicitly_wait(25) # 대기(타겟 페이지가 크롤링할 시간)
    elem = driver.find_element_by_tag_name("body")
    pagedowns = 1 # 동적페이지 크롤링을 위한 페이지다운
    while pagedowns < 250:
         elem.send_keys(Keys.PAGE_DOWN)
         time.sleep(0.15)
         pagedowns += 1

    html = driver.page_source 
    gameTitle, gameHref, gamePrice, gameImg = [], [], [], []
    gameTitle, gameHref, gamePrice, gameImg = scrapeGameTitle(html)
    result = []
    data = {}

    # 특수문자 제거
    def cleanText(readData):
        text = re.sub('[\?()]', '', readData)
        return text

    if gameTitle :
        for gameT, gameH, gameP,gameI in zip(gameTitle, gameHref, gamePrice, gameImg) :
            data = {
                'title': gameT.text.strip(),
                'price': gameP.text.strip(),
                'href': gameH.get('href'),
                'image': cleanText(gameI.get('src'))
                # 'rank' : ???
            }

            # 이미지 저장
            img = gameI.get('src')
            print("img= "+ img)
            urllib.request.urlretrieve(cleanText(img), outpath+cleanText(gameT.text).replace("/","").strip()+".jpg")

            result.append(data)

        return result
    else :
        print("GameData = X ")

#타이틀 완료 BeautifulSoup를 사용해서 복수의 태그를 Css 선택자를 사용해 지정후 리턴 
def scrapeGameTitle(response):
    notices = []
    notices2 = []
    notices3 = []
    root = BeautifulSoup(response, 'html.parser')
    # Title(text)
    notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
    # Appstore(href)
    notices2 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center > div.ii-action.ii-action--center > span > a')
    # Price(text)
    notices3 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center > div.ii-action.ii-action--center > span')
    # Img(src)
    notices4 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > a > img')
    return notices, notices2, notices3, notices4

# main을 실행
if __name__ == '__main__':
    #main에서 리턴해준 result를 gameData 변수에 담기
    hi = Tfgame.objects.all()
    gameData = main()
    if gameData :
        # 순서대로 Tfgame 모델에 저장 랭크의 경우 for문이 돌면서 1씩 증가
         _rank = 1
         _num = 1
         for t in gameData:
             print(t["title"])
             Tfgame(id=_num, title=t["title"], price=t["price"], href=t["href"], image=t['image'], rank=_rank).save()
             _rank +=1
             _num +=1

    else :
        print("gameData = main() = X")