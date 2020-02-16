// Asked in geeks member of technical staff question 
// _ + _ + _ = 2
// find number of ways of doing so
#include<stdio.h>
int givenTimes = 3;
int givenSum = 2;
int count = 0;

void reccMan(int sumSoFar, int times) {
    //printf("\n %d, %d", sumSoFar, times);
    if (sumSoFar == givenSum) {
        count++;
        return;
    }
    if (times == 0) return;
    
    
    for(int i = 0; i <= givenSum; i++)
        reccMan(i + sumSoFar, times - 1);
}

void main() {
    reccMan(0, givenTimes);
    printf("\n%d", count);
}