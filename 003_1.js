// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100


var i = 2;

      while (i<=100){
          var j=2;
          while(j<=i){
              if (i%j == 0) {
                  break;
              }
              j++;
          }
          if(j==i) {
              console.log(i);
          }
          i++;
      }