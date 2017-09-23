  const average = function(num1,num2,num3)
  {
    return (num1+num2+num3)/3;
  };
  const NoArg =function ()
  {
  	return "whatever you do, I'm gonna return this sentence!! haha"
  };
  const DoingSmth = function (pam)
  {
  	pam=pam+3;
    console.log(pam);
  };
  const FullName = function (StrFirst, StrLast)
  {
  return StrFirst+" "+StrLast;
  };
  const longest = function (StrA, StrB, StrC)
  {
    if((StrA.length >= StrB.length) && (StrA.length >= StrC.length))
    {
    	return StrA;
    }
	else if (StrB.length >= StrA.length && StrB.length >= StrC.length)
    {
      return StrB;
    }
    else // (StrC.length >= StrB.length && StrC.length >= StrA.length)
    {
      return StrC;
    }
  };

  const comparison = function(num1,num2)
  {
    const a=num1-num2;
    if(!a)
    {
    	return 0;
    }
    else if(a>0)
    {
    	return 1;
    }
    else
    {
    	return -1;
    }
  };
  const FirstTruthy = function (a,b,c)
  {
  	return a||b||c||"no truthy value found";
  };
				