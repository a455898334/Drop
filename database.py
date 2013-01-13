from pymongo import Connection
import math
import unicodedata
Connection = Connection('mongo.stuycs.org')
db=Connection.admin
res=db.authenticate('ml7','ml7')
Accounts= db.Accounts
Messages = db.Messages

def createAccount(username,password,birthday):
    if Accounts.find({'usernames':username}).count() == 0:
        Accounts.insert({'usernames':username,'birthday':birthday,'passwords':password})
        return True
    else:
        return False
def verifyAccount(username,password):
    if Accounts.find({'usernames':username}).count() != 0:
        return True
    else:
        return False

def writeMessage(text,longitude,latitude):
    Messages.insert({'text':text,'longitude':longitude,'latitude':latitude})
 

def returnMessagesinRange(longitude,latitude):
    allMessages = Messages.find()
    messagesinRange = []
    for current in allMessages:
        if ((current['longitude']-longitude) * (current['longitude']-longitude)) + ((current['latitude']-latitude)*(current['latitude']-latitude)) <= 1:
            if messagesinRange == None:
                messagesinRange = [current['text']]
            else:
                messagesinRange.append(current['text'])
    return messagesinRange
