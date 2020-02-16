#include <stdio.h> 
/*void printArray(int a[], int size) {
    for(int i = 0; i < size; i++) {
        printf("%d ", a[i]);
    }
}*/
int minOf(int a, int b) {
    return (a > b) ? b : a;
}

int main() {
	// int size = 5; 
	int maxL = -1;
	int arr[] = {3, 2, 2, 2, 3};
	int size = sizeof(arr)/sizeof(int);
	int maxRight[size];
	int maxLeft[size];
	int i;
	int maxR = size;
	int sum = 0;
	for (i = 0; i < size; i++) {
		maxLeft[i] = maxL;
		if (maxL == -1) maxL = i;
		if (arr[maxL] <= arr[i]) maxL = i;
	}
      
	for(i = size - 1; i >= 0; i--) {
		maxRight[i] = maxR;
		if (maxR == size) maxR = i;
		if (arr[maxR] <= arr[i]) maxR = i;
	}

	for (i = 0; i < size; i++) {
		if (maxLeft[i] == -1 || maxRight[i] == size) continue;
		if (arr[maxRight[i]] <= arr[i] || arr[maxLeft[i]] <= arr[i]) continue;
		sum = sum + minOf(arr[maxRight[i]], arr[maxLeft[i]]) - arr[i];
	}
   printf("%d", sum);   
}
