# -*- coding: utf-8 -*-
class Cal
  require "date"

  def initialize(year, month)
    @year  = year
    @month = month
  end

  def print_cal
    print_header
    print_week
    print_month
  end

  private

  def firstday
    Date.new(@year, @month, 1)
  end
  def lastday
    Date.new(@year, @month, -1)
  end
  def print_header
    puts firstday.strftime("%B %Y").center(21)
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
end

begin
  Cal.new(ARGV[1].to_i, ARGV[0].to_i).print_cal # カレンダー出力
rescue
  puts "たぶん、引数がおかしいです"
end

