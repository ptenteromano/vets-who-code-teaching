
#include <iostream>
#include <math.h>
using namespace std;

bool isPrime(long);
void primeFactor(long);

int main() {
    const int SIZE = 5;
    long arr[SIZE] = {20, 399, 2233, 5090592343030422323, 14351541816289};

    for (int i=0; i<SIZE; i++) {
        cout << "Prime Factorization for : " << arr[i] << endl;
        primeFactor(arr[i]);
        cout << endl;
    }
}

// the helper function for checking primality
bool isPrime(long p) {
    if (p < 2) return false;
    
    for (int k=2; k <= sqrt(p); k++) {
        if (p % k == 0) return false;
    }
    return true;
}

// what we are looking for
void primeFactor(long n) {
    while (n % 2 == 0) {
        cout << 2 << ' ';
        n /= 2;
    }

    for (int i = 3; i <= sqrt(n); i += 2) {
        while (n % i == 0) {
            cout << i << ' ';
            n /= i;
        }
    }

    // print the leftover prime
    if (n > 2) cout << n << ' ';
}
