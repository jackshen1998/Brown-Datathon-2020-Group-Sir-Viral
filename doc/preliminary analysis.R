#read in packages
library(nCov2019)
library(tidyverse)
library(ggplot2)
library(readxl)
##outbreak time
corona_china<-get_nCov2019()
corona_china[]
corona_china['global',]
daily_update<-summary(corona_china,by = 'today')
write.csv(daily_update, file= 'daily_update.csv')
ggplot(daily_update, aes(date,group = 1)) +
  geom_line(aes(y = confirm, colour = 'confirm')) +
  geom_line(aes(y = suspect, colour = 'suspect')) +
  ylab("number of people")
#There is a huge spike from 2.11 to 2.12. We looked into it and found out that 
#this spike does not represent a change in the trend. Of the 15,152 new cases 
#reported, only 1,820 are new laboratory confirmed cases. These 1,820 new laboratory 
#confirmed cases actually represent a decline of 26% over the preceding day. 
  
##port of entry graph
port<-read_excel("Book3.xlsx") 
port$Year<-as.factor(port$Year)
port<-port %>%
  pivot_longer(2:13,names_to = "month")
ggplot(port,aes(x = month, y = value, group = Year,colour = Year)) +
  geom_line() +
  geom_point() +
  ylab("number of visitors")
#As we can see in the graph, the number of visitors to U.S steadily increases every year.
#August and July are two climaxes in the graph, which makes sense since it's the period of 
#summer vacation and people tend to travel during this time. The good news is that people 
#tend not to travel during Feburary, therefore the cost of shutting down ports during 
#outbreak period will bring down to the minimum. 


##visa types
#As you can see above, sightseeing occupies a huge portion of the total travelling numbers
#to U.S. But one thing worth to mention is that compares to the student population of overseas
#, which is 5.5% of total overseas population, F1 bisa occupies 22% of the total visa. And the
#Chinese international students are 33% of total total international students. As we can imagine
#if the outbreak keeps growing, it will heavily affects the education regulation and schdule. 



##world region
region<-read_excel("world region.xlsx")

region<-region %>%
  pivot_longer(2:9,names_to = "year")
region<-rename(region, Market_Share = value)
ggplot(region,aes(x = year, 
                  y = Market_Share, 
                  group = `9 Major World Regions`,
                  colour =`9 Major World Regions` )) +
  geom_line() +
  geom_point() +
  ylab("Market Share")

#We can see the trend above, market share of Asian visitors to U.S are increasing as the 
#time goes on.For other regions, the market shares of them are steady from 2012 to 2019. 
#There is a spike for western europe in 2015, we think it's because of the visa waiver
#program that excuted in 2015. It allowed many western european citizens to travel to U.S
#without visa. 






