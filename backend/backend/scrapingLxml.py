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
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')
django.setup()
from tfgame.models import Tfgame
from datetime import datetime
import json
driver = webdriver.Chrome('/Users/piani/Documents/GitHub/Tofffy/backend/chromedriver.exe')
def main():
    driver.get('https://fnd.io/#/kr/charts/iphone/top-paid/games')
    driver.implicitly_wait(4)
    html = driver.page_source
    gameTitle = scrapeGameTitle(html)
    # gameCompany = scrapeGameCompany(html)
    # gamePrice = scrapeGamePrice(html)
    # gameOs = scrapeGameOs(html)
    # gameRating = scrapeGameRating(html)
    #gameRelease = scrapeGameRelease(html)

    result = []
    data = {}

    for game in gameTitle:
        print(game.text.strip())
        # print(gameCompany.text.strip())
        # print(gamePrice.text.strip())
        # print(gameOs.text.strip())
        # print(gameRating.text.strip())
       # print(gameRelease.text.strip())
        data = {
            'title': game.text.strip(),
            # 'company': gameCompany.text.strip(),
            # 'price': gamePrice.text.strip(),
            # 'os': gameOs.text.strip(),
            # 'rating': gameRating.text.strip(),
            #'release': gameRelease.text.strip(),
        }

        result.append(data)

    return result

    # for game in gameCompany:
    #     data[company.text] = game.text.strip()
    # for game in gamePrice:
    #     data[price.text] = game.text.strip()
    # for game in gameOs:
    #     data[os.text] = 'IOS'
    # for game in gameRating:
    #     data[rating.text] = game.text.strip()
    # for game in gameRelease:
    #     data[release.text] = game.text.strip()

#타이틀 완료
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
#금액 완료
# def scrapeGamePrice(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div  > .col-xs-4.col-sm-2.ii-action-wrapper.ii-action-wrapper--center >div > span > a')
#     return notices
#Os 완료(IOS 리턴)
# def scrapeGameOs(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices

# def scrapeGameRating(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices

# def scrapeGamerelease(response):
#     notices = []
#     root = BeautifulSoup(response, 'html.parser')
#     notices = root.select('div.app-main > div.container.app-body > div.pagebody.chart > div.ember-view:last-child > div >ul> div > li > div.clearfix > div > div > div.media-heading.ii-media-heading.col-xs-8.col-sm-10 > a > div.ember-view.ii-name > span')
#     return notices


if __name__ == '__main__':
    gameData = main()
    for gameList in gameData:
        for t, c, p, o, r, r2 in gameList.items():
            game(title=t, company=c, price=p, os=o, rating=r, release=r2).save()
