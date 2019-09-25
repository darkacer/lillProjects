import random
sampleSpace = 10000
switchSuccess = 0

for i in range(sampleSpace):
	baseArray = [1, 2, 3]

	carPrize = random.choice(baseArray)
	myChoice = random.choice(baseArray)

	if carPrize in baseArray: baseArray.remove(carPrize)
	if myChoice in baseArray: baseArray.remove(myChoice)
	showGoat = random.choice(baseArray)
	
	baseArray = [1, 2, 3]
	if showGoat in baseArray: baseArray.remove(showGoat)
	if myChoice in baseArray: baseArray.remove(myChoice)
	switchAnswer = random.choice(baseArray)

	if (switchAnswer == carPrize): 
		switchSuccess = switchSuccess + 1
	
print (switchSuccess / sampleSpace)