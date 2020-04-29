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
driver = webdriver.Chrome('/Users/piani/Documents/GitHub/Toffyy/backend/chromedriver.exe')

outpath = "C:/Users/piani/Documents/GitHub/Toffyy/frontend/src/images/"

if not os.path.isdir(outpath):
    os.makedirs(outpath)

def main():
    driver.get('https://fnd.io/#/kr/charts/iphone/top-paid/games')
    driver.implicitly_wait(5) # 5초간 대기(타겟 페이지가 크롤링할 시간)
    html = driver.page_source 
   
    gameTitle, gamePrice, gamePriceT, gameImg = [], [], [], []
    gameTitle, gamePrice, gamePriceT, gameImg = scrapeGameTitle(html)
    # gameCompany
    # gamePrice
    # gameOs
    # gameRelease

    result = []
    data = {}
    if gameTitle :
        for gameT, gameP, gamePT,gameI in zip(gameTitle, gamePrice, gamePriceT, gameImg) :
            data = {
                'title': gameT.text.strip(),
                # 'company': gameCompany.text.strip(),
                'price': gamePT.text.strip(),
                'os': gameP.get('href'),
                # 'release': gameRelease.text.strip(),
                'image': gameI.get('src')
                # 'rank' : ???
            }

            # 이미지 저장
            img = gameI.get('src')
            print("img= "+ img)
            urllib.request.urlretrieve(img, outpath+gameT.text.strip()+".jpg")

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
    # Title
    notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
    # price(href)
    notices2 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center > div.ii-action.ii-action--center > span > a')
    # price(text)
    notices3 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center > div.ii-action.ii-action--center > span')
    # img(src)
    notices4 = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > a > img')
    return notices, notices2, notices3, notices4


# main을 실행
if __name__ == '__main__':
    #main에서 리턴해준 result를 gameData 변수에 담기
    gameData = main()
    if gameData :
        #  for gameList in gameData:
        #      for t, c, p, o, r in gameList.items():
        #          game(title=t, company=c, price=p, os=o, release=r).save()

        # 순서대로 Tfgame 모델에 저장 랭크의 경우 for문이 돌면서 1씩 증가
         _rank = 1
         for t in gameData:
             print(t["title"])
             Tfgame(title=t["title"], company='test', price=t["price"], os=t["os"], release='test', image=t['image'], rank=_rank).save()
             _rank +=1

    else :
        print("gameData = main() = X")