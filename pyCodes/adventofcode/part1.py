minesAt = []

myDict = {}

def doesKcomeBetween(i, j, k):
	x1 = minesAt[i][0]
	y1 = minesAt[i][1]
	x2 = minesAt[j][0]
	y2 = minesAt[j][1]
	x = minesAt[k][0]
	y = minesAt[k][1]
	
	print('checking at ', x1, y1,' ',x2, y2, ' ', x, y )
	print('and returning ', (y*x2 - y*x1 - y1*x1 + y1*x1) == (y1*x - y2*x1 - y1*x + y1*x1))
	return ((y*x2 - y*x1 - y1*x1 + y1*x1) == (y1*x - y2*x1 - y1*x + y1*x1))
	






if __name__ == '__main__':
	
	rows = 2
	cols = 13

	array2d = [[0 for i in range(cols)] for j in range(rows)]
	
	
	for i in range(rows):
		array = list(input())
		array2d[i] = array
		#print(array)
	for i in range(rows):
		for j in range(cols):
			if(array2d[i][j] == '#'):
				minesAt.append([i, j, 0])
	
	
	for i in range(0, len(minesAt)):
		
		for j in range(0, len(minesAt)):
			if (i == j):
				continue
			print('checking at ', i, j)
			#check my dict first 
			key = str(i)+','+str(j)
			if key in myDict.keys():
				# print(key)
				minesAt[i][2] += myDict[key]
				print(key, minesAt[i][2])
				continue
			else:
				if(i < j):
					small = i
					big = j
				elif(j < i):
					small = j
					big = i
				else:
					# print('in break1')
					continue
				if(i+1 == j or j+1 == i):
					minesAt[i][2] += 1
					myDict.update({str(j)+','+str(i) : 1})
					continue
				print(i, j, 'first')
	
				flag = 1 #there is a direct sight 
				for k in range(small, big):
					if (doesKcomeBetween(small , big, k)):
						print('------shoot! it lies')
						flag = 0
						break
				if (flag):
					minesAt[i][2] += 1
					# print('incremented!!')
					myDict.update({str(j)+','+str(i) : 1})
				else:
					myDict.update({str(j)+','+str(i) : 0})
				print(myDict, 'hi')
	#print(array2d[0][13])
	print(minesAt)
	
	max = 0
	
	for i in range(len(minesAt)):
		if max < minesAt[i][2]:
			max = minesAt[i][2]
	print (max)