### Tfgame 크롤링

import requests
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

def main():
    driver.get('https://fnd.io/#/kr/charts/iphone/top-paid/games')
    driver.implicitly_wait(5) # 5초간 대기(타겟 페이지가 크롤링할 시간)
    html = driver.page_source 
   
    gameTitle = []
    gameTitle = scrapeGameTitle(html)
    # gameCompany = scrapeGameCompany(html)
    # gamePrice = scrapeGamePrice(html)
    # gameOs = scrapeGameOs(html)
    # gameRelease = scrapeGameRelease(html)

    result = []
    data = {}
    if gameTitle :
        for gameT in gameTitle :
            # print(gameCompany.text.strip())
            # print(gamePrice.text.strip())
            # print(gameOs.text.strip())
            # print(gameRelease.text.strip())
            data = {
                'title': gameT.text.strip(),
                # 'company': gameCompany.text.strip(),
                # 'price': gameP.text.strip(),
                # 'os': gameOs.text.strip(),
                # 'release': gameRelease.text.strip(),
                # 'image' : ???,
                # 'rank' : ???
            }

            result.append(data)
        #print("result[1].get(title) : "+result[1].get('title'))

        return result
    else :
        print("GameData = X ")

    # for game in gameCompany:
    #     data[company.text] = game.text.strip()
    # for game in gamePrice:
    #     data[price.text] = game.text.strip()
    # for game in gameOs:
    #     data[os.text] = 'IOS'
    # for game in gameRelease:
    #     data[release.text] = game.text.strip()

#타이틀 완료 BeautifulSoup를 사용해서 복수의 태그를 Css 선택자를 사용해 지정후 리턴 
def scrapeGameTitle(response):
    notices = []
    root = BeautifulSoup(response, 'html.parser')
    notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
    return notices

# def scrapeGameCompany(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices

# def scrapeGamePrice(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div  > .col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center > div > span > a')
#     return noticess

# def scrapeGameOs(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices

# def scrapeGamerelease(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices

# main을 실행
if __name__ == '__main__':
    #main에서 리턴해준 result를 gameData 변수에 담기
    gameData = main()
    if gameData :
        #  for gameList in gameData:
        #      for t, c, p, o, r in gameList.items():
        #          game(title=t, company=c, price=p, os=o, release=r).save()

        #순서대로 Tfgame 모델에 저장 랭크의 경우 for문이 돌면서 1씩 증가
         _rank = 1
         for gameList in gameData:
             for t in gameList.items():
                 Tfgame(title=t[1], company='test', price='test', os='IOS', release='test', image='test', rank=_rank).save()
                 _rank +=1
    else :
        print("gameData = main() = X")