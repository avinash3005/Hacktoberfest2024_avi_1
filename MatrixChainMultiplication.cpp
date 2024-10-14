#include<iostream>
#include<climits>
using namespace std;

int matrixchainmultiplication(int dims[],int n){

    int dp[4][4];

    for(int i=1;i<n;i++)
        dp[i][i]=0;

    for(int length=2;length<n;length++){
        for(int i=1;i<n-length+1;i++){
            int j=i+length-1;
            dp[i][j]=INT_MAX;

        for(int k=i;k<j;k++){
            int cost=dp[i][k]+dp[k+1][j]+dims[i-1]*dims[k]*dims[j];


            if(cost<dp[i][j]){
               dp[i][j]=cost;
            }
        }
        }
    }
    return dp[1][n-1];
}

int main(){
    int dims[]={1,2,3,4};
    int n=sizeof(dims)/sizeof(dims[0]);
    int mincost=matrixchainmultiplication(dims,n);
    cout<<"Minimum cost is:"<<mincost<<endl;
    return 0;
}
