#include<stdio.h>
void printArray(int a[], int size);
int outPut = 0;
//int size = 2;
void reccFunc(int inpArr[], int timesArr[], int inpSum) {
    int size = sizeof(inpArr)/sizeof(inpArr[0]);
    int tempSum = 0;
    for (int i = 0; i < size; i++) 
        tempSum += inpArr[i] * timesArr[i];
    if (tempSum == inpSum) {
        outPut++;
        printArray(timesArr, size);
        printf("\n");
        return;
    }
    if (tempSum > inpSum) return;
    
    for (int i = 0; i < size; i++) {
        timesArr[i]++;
        reccFunc(inpArr, timesArr, inpSum);
        timesArr[i]--;
    }
    
}

void printArray(int a[], int size) {
    for(int i = 0; i < size; i++) {
        printf("%d ", a[i]);
    }
}

void main() {
    int inpArr[] = {1, 2};
    int inpSum = 10;
    int size = sizeof(inpArr)/sizeof(inpArr[0]);
    int timesArr[size];
    //int outPut = 0;
    for (int i = 0; i < size; i++) timesArr[i] = 0;
    
    reccFunc(inpArr, timesArr, inpSum);
    printf("%d", outPut);
    
}