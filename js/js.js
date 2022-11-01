const total_money_area = document.querySelector(".cont-total_money");
const total_money_span =total_money_area.querySelector('span');
const beverage_li = document.querySelectorAll('.beverage')
const beverage_area = document.querySelectorAll('.beverage figure');
const colaName =  document.querySelectorAll('.beverage figure figcaption');
const obtain_beverage = document.querySelector('.beverage-obtain');
const obtain_beverage_area = obtain_beverage.querySelector('.obtain-list');
//input
const input = document.querySelector(".payment-input input")
//소지금 설정
total_money_span.textContent = 100000;
const total_money =total_money_span.textContent
const [redCola,purpleCola,YellowCola,CoolCola,GreenCola,OrangeCola] =  [...beverage_area];
let CheckCola=[];
//음료,count 로 이루어진 객체 생성
let countCola=[];
beverage_area.forEach(item=>{
  let obj={
    item:item.querySelector('figcaption').textContent,
    count:0
   }
  countCola.push(obj);
})

const maxCount = 5;
//각 콜라의 li (자판기부분)클릭시 발생 -> li생성, 생성된 li에 내용을 붙임,획득 부분에 붙이기->현재 클릭된 요소의 figcaption의 이름과 countCola객체의 item의 이름이 같은 경우 cola의 outerHTML을 CheckCola의 배열에 붙임 
function printbeverage(cola){
  cola.addEventListener('click',()=>{
    soldOut();
    const obtain_li =document.createElement('li');
    const pushCola = cola.querySelector('figcaption').textContent;
    
  countCola.forEach((item)=>{
    let obtain_beverage_li = obtain_beverage_area.querySelectorAll('li');
    if(item.item===pushCola){
      CheckCola.push(cola.outerHTML);
      if(item.count ===0){
        item.count++;
        obtain_li.innerHTML=`${cola.outerHTML}<div>${item.count}`;
        obtain_beverage_area.appendChild(obtain_li);
      }
      else if(item.count===maxCount){
        item.count;
        beverage_li.forEach((item)=>{
          if(item.querySelector('figcaption').textContent===pushCola){ 
           item.classList.add('sold');
          }
      })
    }
   else{
        obtain_beverage_li = obtain_beverage_area.querySelectorAll('li');
       item.count++;
       obtain_beverage_li.forEach((item)=>{
        if(item.querySelector('figcaption').textContent===pushCola){ 
          item.remove();
        }
   })
      obtain_li.innerHTML=`${cola.outerHTML}<div>${item.count}`;
       obtain_beverage_area.appendChild(obtain_li); 
      }
    }
  })
  })
}
 printbeverage(redCola);
 printbeverage(YellowCola);
 printbeverage(purpleCola);
 printbeverage(GreenCola);
 printbeverage(CoolCola);
 printbeverage(OrangeCola);
let soldOutList=[];
function soldOut(){
countCola.forEach((cola)=> {if(cola.count===maxCount)
{soldOutList.push(cola.item)

}
})
}
const b = document.querySelector('.vending-beverage')
const c = document.querySelector('.obtain_btn')
const d = document.querySelector('.payment_btn')
const e = document.querySelector('.payment-input')

function inputM(){
  
  const input_money = input.value;
  console.log(input_money)
  if(total_money < input_money){

}
}
e.addEventListener('click',(event)=>{event.preventDefault()
 inputM();
})