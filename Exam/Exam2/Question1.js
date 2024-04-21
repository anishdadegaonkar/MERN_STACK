//Question 1 : You are tasked with creating a real-time data fetching mechanism using JavaScript. Implement a function fetchRealTimeData that fetches data from a specified URL every 5 seconds and logs it to the console.
function fetchRealtimeData(url){
    setInterval(async () =>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
        catch(err){
            console.log("Error Fetching Data",err);
        }
    },5000);
}
fetchRealtimeData('https://api.quotable.io/random');


