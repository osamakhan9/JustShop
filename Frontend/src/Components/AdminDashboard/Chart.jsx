import React from "react";
import {Bar, Pie} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart=({info})=>{
    const allData=useSelector((state)=>state.admin)
    const data={
        labels:["Total Product","Total Order"],
        datasets:[
            {
                label:"PPF Calculator",
                data:[allData.product.length,allData.order.length],
                backgroundColor:[
                    "rgb(0,209,255)",
                    "rgb(229,200,82)"
                ],
                
            }
        ]
    }
    const option=   {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 17
                    },
                    color:"white"
                }
            }
        }
    }
    return(
        <Pie options={option} style={{minWidth:"250px",maxWidth:"400px",maxHeight:"300px",fontSize:"19px"}} data={data}/>
    )
}

export default Chart;