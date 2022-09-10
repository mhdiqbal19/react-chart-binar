import React, { useEffect, useState } from 'react'
import { orderList, payment } from '../dataDummy'
import LineChart from '../lineChart'
import BarChart from '../barChart'

const Home = () => {
    const [dataChart, setDataChart] = useState({
        labels: [],
        datasets: [{
            label: "",
            data: [],
        }],
    })
    const [dataPay, setDataPay] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
            }
        ]
    })

    useEffect(() => {
        setDataPay({
            labels: payment.map(item => item.date),
            datasets:[
                {
                    label: 'Data Payment',
                    data: payment.map(item => item.totalOrder),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        })
    },[])

    useEffect(() => {
        setDataChart({
            labels: orderList.map(item => item.date ),
            datasets: [
                {
                label: 'Data Order',
                data: orderList.map(item => item.totalOrder),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        })
    },[])


  return (
    <div>
        <div className='font-bold text-3xl text-center text-slate-800'>
            <h1>Chart JS</h1>
        </div>
        <div className='container mt-10 flex gap-3 justify-center'>
            {dataChart.labels.length && <BarChart dataChart={dataChart}/>}
            {dataPay.labels.length && <LineChart dataPay={dataPay}/>}
        </div>
    </div>
  )
}

export default Home