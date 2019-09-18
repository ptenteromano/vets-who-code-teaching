// Phil Tenteromano
// Vets Who Code

// Old code from early days of my CS career
// not optimal!

#include <iostream>
using namespace std;

// need to name the functions
bool isPrime(int);
void primeFactor(int);

int main() {
    long arr[4] = {20, 399, 2233, 5090592343};

    for (int i=0; i<4; i++) {
        cout << "Prime Factorization for : " << arr[i] << endl;
        primeFactor(arr[i]);
        cout << endl;
    }
}

// functions
bool isPrime(int p)     //checking primality
{
    if(p < 2)               //nothing less than 2!
        return false;

    for (int k=2; k < p; k++)   //2 is prime, will never loop
        if(p%k == 0) {           //check for some int that divides p
            return false;       //end if k divides p evenly
        }
    return true;       //return true if all tests passed
}

void primeFactor(int n)    //prime factorization
{
    if(isPrime(n))         //if n is prime, we found prime factor
        cout<<n;
    else {
        int i = 2;         //start with the first prime

        while ( i < n ) {       //i can't be a factor of n if i < n
            while( n%i == 0 ) { //nest while loop, divide n
                n = n/i;            //shrink n down to smaller int
                cout<<i;            //i is a prime factor
                if(n != 1)
                    cout<<" * ";
            }

            if ( isPrime(n) ){      //if n is prime, we're finished
                cout<<n;
                break;
            }
            else if( n/i != 0 )
                do{               //else, move onto the next i prime
                    i++;            //loop until i is prime
                }while( !isPrime(i) );  //then do again
        }   //while
    }   //else
    cout<<endl;
}