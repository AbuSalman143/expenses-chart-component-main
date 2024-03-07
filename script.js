let chart_container=document.querySelector(".chart-container");


async function jsondata(){
    try{
        let fetchdata=await fetch("./data.json")
        let data=await fetchdata.json()
        let day=new Date().toLocaleDateString("en-Us",{weekday:"short"}).toLowerCase();
        console.log(day);
        let sum=0;
        data.forEach(item => {
            console.log(item.day);
            let chartcolor=(day===item.day) ? "hsl(186, 34%, 60%)":""
            chart_container.innerHTML+=`<div class="chart-box">
                                            <div class="day_amount">$${item.amount}</div> 
                                            <div class="chart" style="height: ${item.amount+100}px; background:${chartcolor}"></div> 
                                            <div class="day">${item.day}</div>
                                        </div>`
            
            sum+=item.amount                            
            
        });
        let current_month_amout=document.querySelector(".current_month_amout");
        current_month_amout.innerText=`$${sum}`
        console.log(sum);
    }
    catch(err){
        console.log(err);
    }
}

jsondata()


// let day=new Date();
// console.log(day.toLocaleDateString('en-US', { weekday: 'short' }));

