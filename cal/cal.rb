# -*- coding: utf-8 -*-
require "date"

def today
  Date.today
end
def firstday
  Date.new(today.year, today.month, 1)
end
def lastday
  Date.new(today.year, today.month, -1)
end

def print_header
  puts today.strftime("%B %Y").center(21)
end
def print_week
  puts "日 月 火 水 木 金 土"
end
def print_blank
  print "   " * firstday.wday
end
def weekend?(day)
  day.wday == 6
end

def print_month
  print_blank #1日の曜日の位置を合わせる
  (firstday..lastday).each do |d|
    printf("%2d ", d.day)
    puts if weekend?(d)
  end
end

def print_cal
  print_header
  print_week
  print_month
end

print_cal # カレンダー出力
