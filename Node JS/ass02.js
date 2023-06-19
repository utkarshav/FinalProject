exports.isPrime = function(n){
	flag = true;
	for( i = 2; i<n ; i++)
	{
		if( n%i == 0)
		{
			flag = false;
			break;
		}
	}
	return flag;
};

exports.calFact = function(n){
	fact = 1;
	for(let i = 1 ; i <= n;i++)
	{
		fact *= i;
	}
	return fact;
};

exports.isPerfect = function(n){
	flag = false;
	sum = 0;
	for(let i = 1 ; i< n ;i++)
	{
		if(n%i == 0)
		{
			sum += i;
		}
	}
	if(sum == n)
		flag = true;
	
	return flag;
}