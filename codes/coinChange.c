#include<stdio.h>
// backtracking version of subset sum problem
void printArray(int a[], int size);
int outPut = 0;
//int size = 2;
void reccFunc(int inpArr[], int timesArr[], int inpSum) {
    int size = sizeof(inpArr)/sizeof(inpArr[0]);
    int tempSum = 0;
	int i;
    for (i = 0; i < size; i++) 
        tempSum += inpArr[i] * timesArr[i];
    if (tempSum == inpSum) {
        outPut++;
        printArray(timesArr, size);
        printf("\n");
        return;
    }
    if (tempSum > inpSum) return;
    
    for (i = 0; i < size; i++) {
        timesArr[i]++;
        reccFunc(inpArr, timesArr, inpSum);
        timesArr[i]--;
    }
    
}

void printArray(int a[], int size) {
	int i;
    for(i = 0; i < size; i++) {
        printf("%d ", a[i]);
    }
}

int main() {
    int inpArr[] = {1, 2};
    int inpSum = 10;
    int size = sizeof(inpArr)/sizeof(inpArr[0]);
    int timesArr[size];
	int i;
    //int outPut = 0;
    for (i = 0; i < size; i++) timesArr[i] = 0;
    
    reccFunc(inpArr, timesArr, inpSum);
    printf("%d", outPut);
	return 0;
}
